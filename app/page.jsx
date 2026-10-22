"use client";

import React, { useMemo, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import Tesseract from 'tesseract.js';
import * as XLSX from 'xlsx';
import { addPdfPageResult, sortPdfResultsByPage } from '../lib/pdf-results.mjs';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Select } from '../components/ui/select';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

// ================== Helpers ==================
const POSTAL_DB = {
  '20150': { tambon: 'หนองปลาไหล', amphoe: 'บางละมุง', changwat: 'ชลบุรี' },
  '20260': { tambon: 'บางละมุง', amphoe: 'บางละมุง', changwat: 'ชลบุรี' },
  '10110': { tambon: 'คลองตัน', amphoe: 'วัฒนา', changwat: 'กรุงเทพมหานคร' },
  '10900': { tambon: 'ลาดยาว', amphoe: 'จตุจักร', changwat: 'กรุงเทพมหานคร' },
  '10310': { tambon: 'บางกะปิ', amphoe: 'ห้วยขวาง', changwat: 'กรุงเทพมหานคร' },
  '20000': { tambon: 'บางปลาสร้อย', amphoe: 'เมืองชลบุรี', changwat: 'ชลบุรี' }
};

const ITEM_CODE_REGEX = /\b[A-Z0-9]{2,}[-\/]?[A-Z0-9]{2,}\b/g;
const PREVIEW_SCALE = 1.4;
const OCR_SCALE = 5.0;
const OCR_LOW_CONFIDENCE = 60;

const CUSTOMER_EXCEL_COLUMNS = {
  Lotus: {
    ship: ['Ship-to Party', 'Ship-to party', 'Ship-to-Party Name1', 'ส่งสินค้าไปที่', 'Ship To Address'],
    description: ['Product description', 'Material Description', 'รายการ', 'Description']
  },
  'CJ Express': {
    ship: ['สถานที่ส่งของ', 'Ship-to Address', 'Ship To Address'],
    description: ['ชื่อสินค้า', 'Product Description', 'Description']
  },
  'CP All': {
    delivery: ['นำส่ง', 'Delivery'],
    address: ['Ship-to Party', 'Ship-to party', 'ที่อยู่', 'Address', 'Ship-to Address'],
    description: ['Product description', 'Material Description', 'รายการ', 'Description']
  },
  Makro: {
    ship: ['Ship-to Party', 'Ship-to-Party Name1', 'ส่งสินค้าไปที่', 'Ship To Address'],
    description: ['Material Description', 'Product description', 'รายการ', 'Description']
  },
  'Big C': {
    ship: ['Ship-to-Party Name1', 'Ship-to Party', 'Ship-to-Party City', 'ส่งสินค้าที่'],
    description: ['Material Description', 'Product description', 'Item']
  },
  'Mini Big C': {
    ship: ['Ship-to Name', 'Store Name', 'Address ( TH)', 'Ship-to'],
    description: ['Material Desc.', 'Material Description', 'Product Group']
  },
  NDC: {
    ship: ['Destination Location Name', 'Destination Location'],
    description: ['Product Description', 'Material Description', 'Description']
  }
};

function repairExcelText(value) {
  const text = String(value ?? '');
  const hasMojibakeMarker = /(?:à|เธ|เน)[\u0e00-\u0e7f]|[\u0080-\u009f]/.test(text);
  if (!text || !hasMojibakeMarker) return text;

  const cp1252ToByte = {
    0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87,
    0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E, 0x2018: 0x91,
    0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98,
    0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F
  };

  const bytes = new Uint8Array(text.length);
  for (let i = 0; i < text.length; i++) {
    const codePoint = text.codePointAt(i);
    if (codePoint >= 0x0e01 && codePoint <= 0x0e5b) {
      bytes[i] = codePoint - 0x0e00 + 0xa0;
    } else if (cp1252ToByte[codePoint] !== undefined) {
      bytes[i] = cp1252ToByte[codePoint];
    } else {
      bytes[i] = codePoint & 0xff;
    }
  }

  try {
    const repaired = new TextDecoder('utf-8').decode(bytes);
    return repaired.replace(/\ufffd/g, '');
  } catch {
    return text;
  }
}

function normalizeExcelHeader(value) {
  return repairExcelText(value).toLowerCase().replace(/[\s_-]+/g, '');
}
const OCR_GLYPH_MAP = {
  '\u042f': 'เ',
  'ѯ': 'เ',
  'Ѭ': 'ู',
  '\u0434': 'ก',
  '\u0435': 'ข',
};
delete OCR_GLYPH_MAP['\u042f'];

function normalizePdfText(rawText) {
  return normalizeOcrArtifacts(rawText)
    .replace(/\u0e4d\u0e32/g, '\u0e33')      // นํา -> นำ
    .replace(/\s+/g, ' ')
    .trim();
}

function loose(label) {
  return label.split('').map(ch => {
    if (ch === 'ำ') return '(?:ำ|า)';
    if (/[่้๊๋ิีึืุู์]/.test(ch)) return `${ch}?`;
    return ch;
  }).join('\\s*');
}

const SEP = '\\s*[:：;-]?\\s*';
const L = {
  shipTo: `(?:${loose('สถานที่ส่งของ')}|${loose('สถานที่ส่งสินค้า')})`,
  orderer: loose('ผู้สั่งซื้อ'),
  supplier: loose('ผู้จำหน่าย'),
  maker: loose('ผู้ผลิต'),
  seller: loose('ผู้ขาย'),
  phone: loose('โทรศัพท์'),
  seq: loose('ลำดับ'),
  code: loose('รหัส'),
  postal: loose('ไปรษณีย์'),
  itemName: loose('ชื่อสินค้า'),
  sendTo: loose('ส่งสินค้าไปที่'),
  bigcSendTo: '(?:ส\\s*่?\\s*ง\\s*ส\\s*ิ\\s*น\\s*ค\\s*้?\\s*า\\s*ท\\s*ี\\s*่?)',
  bigcBranch: '\\d{5}\\s+[A-Z0-9]{4,8}\\s*[:：]\\s*\\d{13}',
  bigcHeadOffice: '1\\s*HEAD\\s*OFFICE\\s*[:：]?\\s*\\d*',
  bigcVendor: '6003462\\s*[:：]\\s*\\d*',
};
const NAMSONG = 'น\\s*(?:ำ|่\\s*า|า)\\s*ส\\s*่?\\s*ง';   // นำส่ง / น่าส่ง
const FOOTER = `อ้างถึง|หมายเหตุ|Department|${loose('ผู้อนุมัติ')}|P/R|${loose('ผู้ซื้อ')}`;

const PHONE_RX = '0\\d{1,2}-?\\d{3}-?\\d{3,4}';
function stripPhone(text) {
  const re = new RegExp(`${L.phone}${SEP}(?:${PHONE_RX}(?:\\s*(?:ต่อ|,|/)\\s*${PHONE_RX})*)?`, 'gi');
  return text.replace(re, ' ').replace(/\s{2,}/g, ' ').trim();
}
// ---------- จังหวัด ----------
const THAI_PROVINCES = ['กรุงเทพมหานคร', 'กระบี่', 'กาญจนบุรี', 'กาฬสินธุ์', 'กำแพงเพชร', 'ขอนแก่น', 'จันทบุรี', 'ฉะเชิงเทรา', 'ชลบุรี', 'ชัยนาท', 'ชัยภูมิ', 'ชุมพร', 'เชียงราย', 'เชียงใหม่', 'ตรัง', 'ตราด', 'ตาก', 'นครนายก', 'นครปฐม', 'นครพนม', 'นครราชสีมา', 'นครศรีธรรมราช', 'นครสวรรค์', 'นนทบุรี', 'นราธิวาส', 'น่าน', 'บึงกาฬ', 'บุรีรัมย์', 'ปทุมธานี', 'ประจวบคีรีขันธ์', 'ปราจีนบุรี', 'ปัตตานี', 'พระนครศรีอยุธยา', 'พะเยา', 'พังงา', 'พัทลุง', 'พิจิตร', 'พิษณุโลก', 'เพชรบุรี', 'เพชรบูรณ์', 'แพร่', 'ภูเก็ต', 'มหาสารคาม', 'มุกดาหาร', 'แม่ฮ่องสอน', 'ยโสธร', 'ยะลา', 'ร้อยเอ็ด', 'ระนอง', 'ระยอง', 'ราชบุรี', 'ลพบุรี', 'ลำปาง', 'ลำพูน', 'เลย', 'ศรีสะเกษ', 'สกลนคร', 'สงขลา', 'สตูล', 'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สระแก้ว', 'สระบุรี', 'สิงห์บุรี', 'สุโขทัย', 'สุพรรณบุรี', 'สุราษฎร์ธานี', 'สุรินทร์', 'หนองคาย', 'หนองบัวลำภู', 'อ่างทอง', 'อำนาจเจริญ', 'อุดรธานี', 'อุตรดิตถ์', 'อุทัยธานี', 'อุบลราชธานี', 'กทม'];
const PROVINCES_TYPOS = {
  'กรุงเทพม': 'กรุงเทพมหานคร',
  'นนทบุร': 'นนทบุรี',
  'ชลบุร': 'ชลบุรี',
  'เพชรบุร': 'เพชรบุรี',
  'ปราจีนบุร': 'ปราจีนบุรี',
  'ลพบุร': 'ลพบุรี',
  'สระบุร': 'สระบุรี',
  'สิงห์บุร': 'สิงห์บุรี',
  'สุพรรณบุร': 'สุพรรณบุรี',
  'จันทบุร': 'จันทบุรี',
  'ราชบุร': 'ราชบุรี',
  'อยุธยา': 'พระนครศรีอยุธยา',
  'โคราช': 'นครราชสีมา'
};
const PROVINCE_EN_ALIAS = {
  'NAKORNNAYOK': 'นครนายก', 'NAKORN NAYOK': 'นครนายก',
  'BANGKOK': 'กรุงเทพมหานคร', 'BKK': 'กรุงเทพมหานคร',
  'CHONBURI': 'ชลบุรี', 'RAYONG': 'ระยอง',
  'KHONKAEN': 'ขอนแก่น', 'KHON KAEN': 'ขอนแก่น',
  'SURAT THANI': 'สุราษฎร์ธานี', 'SURATTHANI': 'สุราษฎร์ธานี',
  'CHIANG MAI': 'เชียงใหม่', 'CHIANGMAI': 'เชียงใหม่',
  'AYUTTHAYA': 'พระนครศรีอยุธยา', 'KORAT': 'นครราชสีมา',
  'NAKHON RATCHASIMA': 'นครราชสีมา', 'PHUKET': 'ภูเก็ต',
  'RATCHABURI': 'ราชบุรี', 'CHACHOENGSAO': 'ฉะเชิงเทรา',
  'PATHUM THANI': 'ปทุมธานี', 'PATHUMTHANI': 'ปทุมธานี',
  'SAMUT PRAKAN': 'สมุทรปราการ', 'SAMUTPRAKAN': 'สมุทรปราการ',
  'NONTHABURI': 'นนทบุรี', 'NAKHON PATHOM': 'นครปฐม',
  'SAMUT SAKHON': 'สมุทรสาคร', 'SAMUTSAKHON': 'สมุทรสาคร',
  'SONGKHLA': 'สงขลา', 'UDON THANI': 'อุดรธานี',
  'UDONTHANI': 'อุดรธานี', 'BURI RAM': 'บุรีรัมย์',
  'BURIRAM': 'บุรีรัมย์', 'LAMPHUN': 'ลำพูน',
  'PRACHUAP KHIRI KHAN': 'ประจวบคีรีขันธ์', 'PHITSANULOK': 'พิษณุโลก',
  'KANCHANABURI': 'กาญจนบุรี', 'SA KAEO': 'สระแก้ว',
  'SAKAEO': 'สระแก้ว', 'CHUMPHON': 'ชุมพร',
  'TRAT': 'ตราด', 'PHANGNGA': 'พังงา',
  'PHANG NGA': 'พังงา', 'TRANG': 'ตรัง',
  'SATUN': 'สตูล', 'LOPBURI': 'ลพบุรี',
  'SARABURI': 'สระบุรี', 'NONG KHAI': 'หนองคาย',
  'NONGKHAI': 'หนองคาย', 'SI SA KET': 'ศรีสะเกษ',
  'SISAKET': 'ศรีสะเกษ', 'LAMPANG': 'ลำปาง',
  'KAMPHAENG PHET': 'กำแพงเพชร', 'KAMPHAENGPHET': 'กำแพงเพชร',
  'BUENG KAN': 'บึงกาฬ', 'BUENGKAN': 'บึงกาฬ',
  'MAHA SARAKHAM': 'มหาสารคาม', 'MAHASARAKHAM': 'มหาสารคาม',
  'PHICHIT': 'พิจิตร', 'UTTARADIT': 'อุตรดิตถ์',
  'CHAI NAT': 'ชัยนาท', 'CHAINAT': 'ชัยนาท',
  'PRACHINBURI': 'ปราจีนบุรี', 'PRACHIN BURI': 'ปราจีนบุรี',
  'LOEI': 'เลย', 'NONG BUA LAM PHU': 'หนองบัวลำภู',
  'NONGBUALAMPHU': 'หนองบัวลำภู', 'PHAYAO': 'พะเยา',
  'PHRAE': 'แพร่', 'AMNAT CHAROEN': 'อำนาจเจริญ',
  'YASOTHON': 'ยโสธร', 'ROI ET': 'ร้อยเอ็ด',
  'ROIET': 'ร้อยเอ็ด', 'KALASIN': 'กาฬสินธุ์',
  'MUKDAHAN': 'มุกดาหาร', 'SUPHANBURI': 'สุพรรณบุรี',
  'SAMUT SONGKHRAM': 'สมุทรสงคราม', 'NAKHON SI THAMMARAT': 'นครศรีธรรมราช',
  'NAKHON SAWAN': 'นครสวรรค์', 'MAE HONG SON': 'แม่ฮ่องสอน',
  'NARATHIWAT': 'นราธิวาส', 'KRABI': 'กระบี่',
  'TAK': 'ตาก', 'NAN': 'น่าน', 'YALA': 'ยะลา'
};
const PROVINCE_ALIAS = { 'กทม': 'กรุงเทพมหานคร', 'กรุงเทพ': 'กรุงเทพมหานคร', 'อยุธยา': 'พระนครศรีอยุธยา', 'โคราช': 'นครราชสีมา' };
const PROVINCE_KEYS = [...THAI_PROVINCES, ...Object.keys(PROVINCE_ALIAS)].sort((a, b) => b.length - a.length);
const DEST_NOT_FOUND = 'ไม่พบจังหวัดปลายทาง';
const SOURCE_NOT_FOUND = 'ไม่พบต้นทาง';
const ORDER_NUMBER_NOT_FOUND = 'ไม่พบเลขที่';

function resolveProvince(word) {
  const w = String(word || '').replace(/[ฯ.]/g, '');
  for (const key of PROVINCE_KEYS) if (w.startsWith(key)) return PROVINCE_ALIAS[key] || key;
  return '';
}

// รหัสไปรษณีย์ 5 หลักที่ "ยืนเดี่ยว" (ไม่ใช่ส่วนของเลขยาว/วันที่/ทศนิยม)
function findPostalCodes(text) {
  const out = [];
  for (const m of text.matchAll(/\d+/g)) {
    if (m[0].length !== 5) continue;
    const before = text.slice(Math.max(0, m.index - 2), m.index);
    const after = text.slice(m.index + 5, m.index + 7);
    if (/\d[\/.,\-]$/.test(before) || /^[\/.,\-]\d/.test(after)) continue;
    out.push({ code: m[0], index: m.index });
  }
  return out;
}

// เลขไปรษณีย์ -> จังหวัด: POSTAL_DB ก่อน, ไม่เจอค่อยดูคำไทยที่อยู่หน้าเลข ("ชลบุรี 20150")
// ไม่ผ่านทั้งสองแบบ = ไม่ใช่รหัสไปรษณีย์ (กันรหัสสินค้า/รหัสสาขา 5 หลัก)
function provinceFromPostal(code, textBefore) {
  const rec = (typeof POSTAL_DB !== 'undefined' && POSTAL_DB) ? POSTAL_DB[code] : null;
  if (rec && rec.changwat) return resolveProvince(rec.changwat) || rec.changwat;
  const w = textBefore.trimEnd().match(/([ก-๙]+)$/);
  return w ? resolveProvince(w[1]) : '';
}

function findProvinceInSlice(slice) {
  for (const { code, index } of findPostalCodes(slice)) {
    const province = provinceFromPostal(code, slice.slice(0, index));
    if (province) return { province, postcode: code, end: index + 5 };
  }
  return null;
}

function scanProvinceName(t) {
  if (!t) return '';
  const found = [];

  // 3.1 หาจังหวัดภาษาไทยตรงๆ
  for (const p of THAI_PROVINCES) {
    const idx = t.lastIndexOf(p);
    if (idx !== -1) found.push({ idx, prov: p === 'กทม' ? 'กรุงเทพมหานคร' : p });
  }

  // 3.2 หาคำที่โดนสแกนขาดหายไป (Typos)
  for (const [typo, actual] of Object.entries(PROVINCES_TYPOS)) {
    const idx = t.lastIndexOf(typo);
    if (idx !== -1) found.push({ idx, prov: actual });
  }

  // 3.3 หาภาษาอังกฤษ (กรณี Lotus / ภาษาคาราโอเกะ)
  const tUp = t.toUpperCase();
  for (const [en, th] of Object.entries(PROVINCE_EN_ALIAS)) {
    const idx = tUp.lastIndexOf(en);
    if (idx !== -1) found.push({ idx, prov: th });
  }

  if (found.length > 0) {
    // เรียงลำดับเอาตัวที่โผล่มาหลังสุด (ท้ายที่อยู่)
    found.sort((a, b) => b.idx - a.idx);
    return found[0].prov;
  }
  return '';
}

// ---------- กติกาของแต่ละห้าง ----------
const RULES_LOTUS_MAKRO = {
  source: { label: [L.maker, L.orderer], end: `${L.sendTo}|${FOOTER}`, maxLen: 300 },
  dest: { label: [L.sendTo], end: `${L.seq}|Page|${FOOTER}`, maxLen: 300 },
};

const RULES_BIGC = {
  source: {
    label: [L.bigcHeadOffice, L.bigcVendor, L.orderer],
    end: `${L.seq}|${FOOTER}`,
    maxLen: 350,
  },
  dest: {
    label: [L.bigcBranch, L.bigcSendTo],
    end: `${L.bigcHeadOffice}|${L.bigcVendor}|${L.seq}|${FOOTER}`,
    maxLen: 400,
  },
};

const PROVINCE_RULES = {
  'CJ Express': {
    source: { label: [L.supplier, L.orderer], end: `${L.shipTo}|${FOOTER}`, maxLen: 300, fallbackTop: true },
    dest: { label: [L.shipTo], end: `${L.seq}|${L.code}(?!\\s*${L.postal})|${L.itemName}|${FOOTER}`, maxLen: 400 },
  },
  'CP All': {
    source: { label: [L.seller], end: `${NAMSONG}|${FOOTER}`, maxLen: 300 },
    dest: { label: [NAMSONG], end: `${L.seller}|${FOOTER}`, maxLen: 300 },
  },
  Makro: RULES_LOTUS_MAKRO,
  Lotus: RULES_LOTUS_MAKRO,
  'Big C': RULES_BIGC,
  'Mini Big C': RULES_BIGC,
};
const LEADING_CODE = /^\d{4,14}\s*/;   // รหัสผู้ขาย/สาขา/ร้านที่มาก่อนที่อยู่ (ไม่ใช่รหัสไปรษณีย์)

function locateProvince(rawText, customer, side) {
  const text = normalizePdfText(rawText);
  const rule = (PROVINCE_RULES[customer] || RULES_LOTUS_MAKRO)[side];
  const endRx = rule.end ? new RegExp(rule.end, 'i') : null;
  const groups = [];

  for (const label of rule.label || []) {
    const group = [];
    for (const m of text.matchAll(new RegExp(label + SEP, 'gi'))) {
      const rest = text.slice(m.index + m[0].length);
      const end = endRx && endRx.exec(rest);
      group.push((end ? rest.slice(0, end.index) : rest).slice(0, rule.maxLen).replace(LEADING_CODE, '').trim());
    }
    if (group.length) groups.push(group);
  }
  if (!groups.length && rule.fallbackTop) {          // ไม่มี label: ที่อยู่บนสุดก่อนถึง "สถานที่ส่งของ"
    const cut = new RegExp(L.shipTo, 'i').exec(text);
    groups.push([(cut && cut.index > 0 ? text.slice(0, cut.index) : text).slice(0, 800)]);
  }

  for (const group of groups) {
    for (const s of group) {                          // 1) จากเลขไปรษณีย์
      const hit = findProvinceInSlice(s);
      if (hit) return { province: hit.province, postcode: hit.postcode, snippet: s.slice(0, hit.end).trim() };
    }
    for (const s of group) {                          // 2) สำรอง: ชื่อจังหวัดในข้อความ
      const p = scanProvinceName(s);
      if (p) return { province: p, postcode: '', snippet: s.trim() };
    }
  }
  const first = groups[0] && groups[0][0];
  return { province: '', postcode: '', snippet: (first || '').slice(0, 200).trim() };
}


function cleanOcrNoise(text) {
  if (!text) return '';
  text = text.replace(/[!|~`^_{}\[\]\\]/g, ' ');
  text = text.replace(/([ก-๙])[a-zA-Z]{1,2}(?=[ก-๙])/g, '$1');
  text = text.replace(/([ก-ฮ])([เแโใไ])/g, '$2$1');
  text = text.replace(/\s+([่้๊๋ึืุู์])/g, '$1');
  text = text.replace(/[ \t]{2,}/g, ' ').trim();
  return text;
}

// ฟังก์ชันย่อภาพสแกนโดยล็อกเม็ดสีดำที่ผ่าน OCR แล้วไม่ให้จางหาย
const buildCrispPreviewDataUrl = (sourceCanvas, targetWidth = 1200) => {
  const srcW = sourceCanvas.width;
  const srcH = sourceCanvas.height;
  if (!srcW || !srcH) return '';

  const scale = Math.min(1, targetWidth / srcW);
  const dstW = Math.max(1, Math.floor(srcW * scale));
  const dstH = Math.max(1, Math.floor(srcH * scale));

  const srcCtx = sourceCanvas.getContext('2d');
  const srcData = srcCtx.getImageData(0, 0, srcW, srcH).data;

  const dstCanvas = document.createElement('canvas');
  dstCanvas.width = dstW;
  dstCanvas.height = dstH;
  const dstCtx = dstCanvas.getContext('2d');
  const dstImg = dstCtx.createImageData(dstW, dstH);
  const dstData = dstImg.data;

  // เทพื้นหลังสีขาวทั้งหน้า
  dstData.fill(255);

  // ถ้าพิกเซลต้นฉบับเป็นสีดำจาก OCR ให้ลงจุดสีดำที่ภาพพรีวิวทันที
  for (let sy = 0; sy < srcH; sy++) {
    const dy = Math.min(dstH - 1, Math.floor(sy * scale));
    const srcRowOffset = sy * srcW * 4;
    const dstRowOffset = dy * dstW * 4;

    for (let sx = 0; sx < srcW; sx++) {
      const si = srcRowOffset + sx * 4;
      if (srcData[si + 3] < 10) continue;

      const gray = (srcData[si] * 77 + srcData[si + 1] * 150 + srcData[si + 2] * 29) >> 8;
      if (gray < 200) {
        const dx = Math.min(dstW - 1, Math.floor(sx * scale));
        const di = dstRowOffset + dx * 4;
        dstData[di] = 0;
        dstData[di + 1] = 0;
        dstData[di + 2] = 0;
        dstData[di + 3] = 255;
      }
    }
  }

  dstCtx.putImageData(dstImg, 0, 0);
  return dstCanvas.toDataURL('image/png');
};

// const processPdf = async () => {
//   if (!pdfFiles.length || isProcessing) return;
//   setIsProcessing(true);
//   setStatus({ active: true, text: 'กำลังเตรียมระบบ…', current: 0, total: 0 });
//   setPageResults([]);
//   setSelectedPage(null);
//   setSelectedPrintPages([]);
//   setResultsPage(1);

//   let tesseractWorker = null;
//   try {
//     const pdfDocs = [];
//     for (const file of pdfFiles) {
//       const buf = await file.arrayBuffer();
//       pdfDocs.push(await pdfjsLib.getDocument({ data: buf }).promise);
//     }
//     const total = pdfDocs.reduce((pageCount, pdfDoc) => pageCount + pdfDoc.numPages, 0);

//     const results = [];
//     let pageNumber = 0;
//     let currentDocumentPO = ORDER_NUMBER_NOT_FOUND;

//     for (const [documentIndex, pdfDoc] of pdfDocs.entries()) {
//       currentDocumentPO = ORDER_NUMBER_NOT_FOUND;
//       const poGroups = {};

//       for (let p = 1; p <= pdfDoc.numPages; p++) {
//         pageNumber += 1;
//         setStatus({ active: true, text: `กำลังอ่านข้อความหน้า ${pageNumber} จาก ${total}…`, current: pageNumber, total });
//         const page = await pdfDoc.getPage(p);

//         const baseViewport = page.getViewport({ scale: 1.0 });
//         const previewScale = Math.min(PREVIEW_SCALE, 1200 / baseViewport.width);
//         const ocrScale = Math.min(OCR_SCALE, 2800 / baseViewport.width);

//         const textContent = await page.getTextContent();
//         let rawText = textContent.items.map(i => i.str).join(' ').trim();
//         let source = 'text-layer';
//         let ocrConfidence = null;
//         let thumbDataUrl = '';

//         if (rawText.length < 8) {
//           // ------ กรณีไฟล์ภาพสแกน (Mini Big C) ------
//           source = 'ocr';
//           if (!tesseractWorker) {
//             setStatus({ active: true, text: 'กำลังโหลดโมดูล OCR (ครั้งแรกอาจใช้เวลาสักครู่)…', current: pageNumber, total });
//             tesseractWorker = await Tesseract.createWorker('tha+eng', 1);
//             await tesseractWorker.setParameters({
//               tessedit_pageseg_mode: Tesseract.PSM.SPARSE_TEXT,
//               user_defined_dpi: String(Math.round(ocrScale * 72)),
//               preserve_interword_spaces: '1',
//             });
//           }
//           setStatus({ active: true, text: `กำลังประมวลผล ${pageNumber} จาก ${total} …`, current: pageNumber, total });

//           const ocrViewport = page.getViewport({ scale: ocrScale });
//           const ocrCanvas = document.createElement('canvas');
//           ocrCanvas.width = Math.floor(ocrViewport.width);
//           ocrCanvas.height = Math.floor(ocrViewport.height);
//           const ctxOcr = ocrCanvas.getContext('2d');

//           const tempOcrCanvas = document.createElement('canvas');
//           tempOcrCanvas.width = ocrCanvas.width;
//           tempOcrCanvas.height = ocrCanvas.height;
//           await page.render({ canvasContext: tempOcrCanvas.getContext('2d'), viewport: ocrViewport }).promise;

//           ctxOcr.fillStyle = '#ffffff';
//           ctxOcr.fillRect(0, 0, ocrCanvas.width, ocrCanvas.height);
//           ctxOcr.drawImage(tempOcrCanvas, 0, 0);

//           // 1. เร่งเส้นตัวหนังสือให้ดำสนิทบนพื้นขาวก่อน
//           preprocessForOcr(ocrCanvas);

//           // 2. ดึงภาพจาก ocrCanvas ที่เร่งสีดำแล้วมาทำรูปพรีวิว
//           thumbDataUrl = buildCrispPreviewDataUrl(ocrCanvas, 1200);

//           // 3. ส่งเข้า OCR อ่านข้อความ
//           const { data } = await tesseractWorker.recognize(ocrCanvas);
//           rawText = data.text.trim();
//           ocrConfidence = data.confidence;
//         } else {
//           // ------ กรณีไฟล์ PDF ปกติ ------
//           const viewport = page.getViewport({ scale: previewScale });
//           const canvas = document.createElement('canvas');
//           canvas.width = Math.floor(viewport.width);
//           canvas.height = Math.floor(viewport.height);
//           const ctxPreview = canvas.getContext('2d');

//           const tempPreviewCanvas = document.createElement('canvas');
//           tempPreviewCanvas.width = canvas.width;
//           tempPreviewCanvas.height = canvas.height;
//           await page.render({ canvasContext: tempPreviewCanvas.getContext('2d'), viewport }).promise;

//           ctxPreview.fillStyle = '#ffffff';
//           ctxPreview.fillRect(0, 0, canvas.width, canvas.height);
//           ctxPreview.drawImage(tempPreviewCanvas, 0, 0);

//           thumbDataUrl = canvas.toDataURL('image/png');
//         }

//         const addressText = extractPdfAddressText(rawText, customer);
//         const addr = extractAndCorrectAddress(addressText);
//         const formattedAddr = formatAddress(addr);

//         const pdfDestination = extractPdfDestination(rawText, customer, addr, addressText);
//         const pdfSource = extractPdfSource(rawText, customer);

//         let extractedPO = extractPdfOrderNumber(rawText, customer);

//         const keywords = ['ใบสั่งซื้อ', 'purchase order', 'ผู้สั่งซื้อ', 'กำหนดส่ง', 'สถานที่ส่งของ', 'ผู้จำหน่าย', 'เลขประจำตัวผู้เสียภาษี', 'เงื่อนไขการชำระเงิน', 'วันที่ส่งสินค้า'];
//         const isNewDoc = keywords.filter(kw => normalizePdfText(rawText).includes(kw)).length >= 2;

//         if (extractedPO !== ORDER_NUMBER_NOT_FOUND) {
//           currentDocumentPO = extractedPO;
//         } else {
//           if (isNewDoc) {
//             currentDocumentPO = ORDER_NUMBER_NOT_FOUND;
//             extractedPO = ORDER_NUMBER_NOT_FOUND;
//           } else {
//             extractedPO = currentDocumentPO;
//           }
//         }

//         const pdfItems = extractPdfItems(rawText, customer);

//         const rowData = {
//           id: `page-${pageNumber}`,
//           pages: [pageNumber],
//           rawText,
//           source,
//           ocrConfidence,
//           addr,
//           formattedAddr,
//           pdfAddress: pdfDestination,
//           pdfDestination,
//           pdfSource,
//           pdfOrderNumber: extractedPO,
//           pdfItems,
//           codes: pdfItems,
//           thumbDataUrls: [thumbDataUrl]
//         };

//         addPdfPageResult(results, poGroups, rowData, documentIndex, ORDER_NUMBER_NOT_FOUND);
//       }
//     }

//     setPageResults(results);
//     if (results.length > 0) setSelectedPage(results[0]);
//     setPreviewZoom(1);
//   } catch (error) {
//     console.error(error);
//     const message = error instanceof Error ? error.message : String(error);
//     alert(`เกิดข้อผิดพลาดในการประมวลผล PDF: ${message}`);
//   } finally {
//     try {
//       if (tesseractWorker) await tesseractWorker.terminate();
//     } catch (cleanupError) {
//       console.error('ปิดระบบ OCR ไม่สำเร็จ', cleanupError);
//     } finally {
//       setStatus({ active: false, text: '', current: 0, total: 0 });
//       setIsProcessing(false);
//     }
//   }
// };

function preprocessForOcr(canvas) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  const imageData = ctx.getImageData(0, 0, width, height);
  const d = imageData.data;
  const gray = new Uint8ClampedArray(width * height);

  // แปลงภาพโปร่งใสให้กลายเป็นพื้นหลังสีขาวก่อน
  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const alpha = d[i + 3] / 255; // ค่าความโปร่งใส
    const r = d[i] * alpha + 255 * (1 - alpha);
    const g = d[i + 1] * alpha + 255 * (1 - alpha);
    const b = d[i + 2] * alpha + 255 * (1 - alpha);
    gray[p] = 0.299 * r + 0.587 * g + 0.114 * b;
  }

  let sumB = 0, wB = 0, maxVar = 0, threshold = 127;
  const hist = new Array(256).fill(0);
  for (let p = 0; p < gray.length; p++) hist[gray[p]]++;
  let sum = 0;
  for (let t = 0; t < 256; t++) sum += t * hist[t];
  for (let t = 0; t < 256; t++) {
    wB += hist[t];
    if (wB === 0) continue;
    const wF = gray.length - wB;
    if (wF === 0) break;
    sumB += t * hist[t];
    const mB = sumB / wB, mF = (sum - sumB) / wF;
    const varBetween = wB * wF * (mB - mF) * (mB - mF);
    if (varBetween > maxVar) { maxVar = varBetween; threshold = t; }
  }

  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const v = gray[p] > threshold ? 255 : 0;
    d[i] = d[i + 1] = d[i + 2] = v;
    d[i + 3] = 255; // บังคับให้ไม่โปร่งใส
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

// label ที่ "เจาะจง" ว่าเป็นเลขที่ใบสั่งซื้อ (เรียงตามความสำคัญ)
const ORDER_LABELS = [
  loose('เลขที่ใบสั่งซื้อ'),
  loose('ใบสั่งซื้อเลขที่'),
  loose('เลขที่เอกสาร'),
  loose('เลขที่') + '\\s*P\\.?\\s*O\\.?',
  'P\\.?\\s*O\\.?\\s*' + loose('เลขที่'),
  'Purchase\\s*Order\\s*(?:No\\.?|Number|#)',
  'P\\.?\\s*O\\.?\\s*(?:No\\.?|Number|#)',
  'Order\\s*(?:No\\.?|Number|#)',
];

const LABEL_COLON = loose('เลขที่') + '[:：]';
const MAKRO_LABEL = loose('เลขที่ใบสั่งซื้อ') + '\\s*[:：]?\\s*(?:' + loose('วันที่') + '.{0,10}' + loose('สินค้า') + '\\s*[:：]?\\s*\\d+\\s*(?:วัน|วั)\\s*)?';
const CPALL_LABEL = loose('เลขที่') + '\\s*[:：]\\s*(?:' + loose('กำหนดส่ง') + '\\s*[:：]?\\s*\\d+\\s*(?:วัน|วั)\\s*(?:' + loose('ตามเงื่อนไข') + ')?\\s*)?';
const LOTUS_LABEL = loose('ใบสั่งซื้อสินค้า');

const BIGC_PO_LABEL = `BIGC\\s*EDI(?:\\s*\\|)?`;
const NDC_PO_LABELS = [
  loose('เลขที่ใบสั่งซื้อ'),
  loose('ใบสั่งซื้อเลขที่'),
  loose('เลขที่เอกสาร'),
  loose('เลขที่') + '(?!\\s*(?:ประจำตัว|ผู้เสียภาษี|อากร))',
  'P\\.?\\s*O\\.?\\s*Number',
  'P\\.?\\s*O\\.?\\s*No\\.?'
];
const ORDER_RULES = {
  'Makro': { labels: [MAKRO_LABEL, loose('เลขที่ใบสั่งซื้อ')], relaxed: true },
  'Lotus': { labels: [LOTUS_LABEL, LABEL_COLON], relaxed: true },
  'CP All': { labels: [CPALL_LABEL, LABEL_COLON], relaxed: true },
  'Big C': { labels: [BIGC_PO_LABEL, loose('เลขที่ใบสั่งซื้อ')], relaxed: false },
  'Mini Big C': { labels: [BIGC_PO_LABEL, loose('เลขที่ใบสั่งซื้อ')], relaxed: false },
  'NDC': { labels: NDC_PO_LABELS, relaxed: true },
};

const ORDER_PREFIX = '(?:(?:P\\.?\\s*O\\.?|No\\.?|Number|#)\\s*[:：.]?\\s*)?';
const ORDER_TOKEN = '([A-Za-z0-9][A-Za-z0-9\\-\\/_.]{2,24})';


function cleanOrderToken(tok, relaxed) {
  const v = String(tok || '').replace(/[.\-\/_]+$/, '');
  if (!/\d/.test(v)) return '';
  if (/^\d{13}$/.test(v)) return '';                                  // เลขผู้เสียภาษี
  if (/^\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{2,4}$/.test(v)) return '';    // วันที่
  if (relaxed) return v.length >= 4 ? v : '';
  if (v.length < 6) return '';
  if (/^\d{1,4}\/\d{1,4}$/.test(v)) return '';                       // เลขที่บ้าน 188/1
  return v;
}

function extractAndCorrectAddress(rawText) {
  const cleaned = cleanOcrNoise(rawText);
  const postalMatch = cleaned.match(/\b\d{5}\b/);
  const houseMatch = cleaned.match(/\b(\d{1,4}\/\d{1,4}|\d{1,4})\b/);
  const mooMatch = cleaned.match(/ห[มน]ู?่?\s*(?:ที่)?\s*(\d{1,2})/);

  const result = {
    raw: rawText, cleaned,
    houseNo: houseMatch ? houseMatch[1] : null,
    moo: mooMatch ? mooMatch[1] : null,
    postcode: null, tambon: null, amphoe: null, changwat: null,
    confidence: 'needs_review'
  };

  if (postalMatch && POSTAL_DB[postalMatch[0]]) {
    const rec = POSTAL_DB[postalMatch[0]];
    result.postcode = postalMatch[0];
    result.tambon = rec.tambon;
    result.amphoe = rec.amphoe;
    result.changwat = rec.changwat;
    result.confidence = 'high';
  } else if (postalMatch) {
    result.postcode = postalMatch[0];
    result.confidence = 'unknown_postcode';
  }
  return result;
}

function formatAddress(r) {
  if (!r.postcode || r.confidence !== 'high') {
    return { text: (r.cleaned || '(ไม่พบข้อความ)'), formatted: false };
  }
  const text = [r.houseNo || '-', 'หมู่ ' + (r.moo || '-'), 'ต.' + r.tambon, 'อ.' + r.amphoe, 'จ.' + r.changwat, r.postcode].join(' ');
  return { text, formatted: true };
}

function extractItemCodes(rawText) {
  const cleaned = (rawText || '').toUpperCase();
  const found = cleaned.match(ITEM_CODE_REGEX) || [];
  return [...new Set(found.filter(c => !/^\d{5}$/.test(c)))];
}

function extractPdfAddressText(rawText, customer) {
  return stripPhone(locateProvince(rawText, customer, 'dest').snippet);
}

function extractPdfOrderNumber(rawText, customer, excelRows = []) {
  const text = normalizePdfText(rawText);
  const cleanRawText = rawText.replace(/\s+/g, ''); // ลบช่องว่างออกให้หมดเพื่อค้นหาแบบติดกัน

  // 🎯 [NEW FLOW] Reverse Lookup สำหรับ NDC
  if (customer === 'NDC') {
    const safeExcelRows = Array.isArray(excelRows) ? excelRows : [];
    for (const row of safeExcelRows) {
      const po = String(row.ponumber || '').trim();
      if (po.length > 5) {
        if (text.includes(po) || cleanRawText.includes(po)) {
          return po;
        }
      }
    }
  }

  // --- กฎเดิมของห้างอื่นๆ ---
  if (ORDER_RULES[customer]) {
    const rule = ORDER_RULES[customer];
    for (const label of rule.labels) {
      const regex = new RegExp(`${label}${SEP}${ORDER_PREFIX}${ORDER_TOKEN}`, 'gi');
      for (const m of text.matchAll(regex)) {
        const v = cleanOrderToken(m[1], rule.relaxed);
        if (v) return v;
      }
    }
  }

  // Fallback ปกติ
  for (const label of ORDER_LABELS) {
    const regex = new RegExp(`${label}${SEP}${ORDER_PREFIX}${ORDER_TOKEN}`, 'gi');
    for (const m of text.matchAll(regex)) {
      const v = cleanOrderToken(m[1]);
      if (v) return v;
    }
  }

  for (const m of text.matchAll(new RegExp(`${loose('เลขที่')}${SEP}${ORDER_TOKEN}`, 'gi'))) {
    const v = cleanOrderToken(m[1]);
    if (v) return v;
  }

  return ORDER_NUMBER_NOT_FOUND;
}

function extractPdfDestination(rawText, customer, addr, addressText) {
  if (customer === 'Big C' || customer === 'Mini Big C') {
    const text = rawText.replace(/\n/g, ' ');
    // จับรูปแบบ 1: 22275 MSDAN3: ...
    const bcMatch = text.match(/(\d{5}\s+[A-Z0-9]{4,8}\s*[:：]\s*\d{13}\s*บมจ\..*?(?=\s*(?:โทร|ผู้สั่งซื้อ|เลขประจำตัว|ส่งสินค[้]?าที่|1\s*HEAD)))/i);
    // จับรูปแบบ 2: บริษัท บิ๊กซีซูเปอร์เซ็นเตอร์ จำกัด (มหาชน) (สาขา MBC บางพลี)...
    const mbcMatch = text.match(/((?:บริษัท\s*บิ๊กซี|บมจ\.?\s*บิ๊กซี).*?\([^)]+\).*?(?=\s*(?:โทร|ผู้สั่งซื้อ|เลขประจำตัว|1\s*HEAD)))/i);

    let fullText = null;
    if (bcMatch) fullText = bcMatch[1];
    else if (mbcMatch) fullText = mbcMatch[1];
    else {
      const fallbackMatch = text.match(/ส่งสินค[้]?าที่\s*(.+?)(?=\s*(?:โทร|ผู้สั่งซื้อ|เลขประจำตัว))/i);
      if (fallbackMatch) fullText = fallbackMatch[1];
    }

    if (fullText) {
      const prov = scanProvinceName(fullText); // สกัดจังหวัดด้วยฟังก์ชันเดิมที่เขียนไว้
      if (prov) return prov;
    }
    return DEST_NOT_FOUND;
  }

  const r = locateProvince(rawText, customer, 'dest');
  if (r.province) return r.province;
  if (addr && addr.changwat) return addr.changwat;
  return scanProvinceName(normalizePdfText(addressText || '')) || DEST_NOT_FOUND;
}

function normalizeOcrArtifacts(text) {
  let t = String(text || '')
    .replace(/Ѽ\s*า/g, 'ำ')
    .replace(/Ѽ/g, 'ื่')
    .replace(/ҕ/g, '่')
    .replace(/Ѱ/g, 'แ')
    .replace(/นื่้า/g, 'น้ำ')
    .replace(/นํ้า/g, 'น้ำ')
    .replace(/น้ํา/g, 'น้ำ');

  for (const [from, to] of Object.entries(OCR_GLYPH_MAP)) {
    t = t.split(from).join(to);
  }
  return t;
}

function extractPdfSource(rawText, customer) {
  if (customer === 'Big C' || customer === 'Mini Big C') {
    const text = rawText.replace(/\n/g, ' ');
    const bcMatch = text.match(/(1\s*HEAD\s*OFFICE\s*[:：].*?)(?=\s*(?:โทร|ร้านค[้]?า|6003462))/i);
    if (bcMatch) {
      const prov = scanProvinceName(bcMatch[1].replace(/\(สำนักงาน\s*ใหญ่\)/g, '(สำนักงานใหญ่)'));
      if (prov) return prov;
    }
    return SOURCE_NOT_FOUND;
  }

  return locateProvince(rawText, customer, 'source').province || SOURCE_NOT_FOUND;
}

function uniqueInOrder(values) {
  return [...new Set(values.map(value => String(value || '').trim()).filter(Boolean))];
}

function extractMakroBranch(rawText) {
  return rawText.match(/\b\d{10,14}\b\s*(สาขา[^\n|]+)/i)?.[1]?.trim() || '';
}

function extractPdfItems(rawText, customer) {
  const text = normalizePdfText(rawText);
  const results = [];

  if (customer === 'Lotus') {
    const lotusRegex = /\b\d{8,}_[A-Z0-9_]+_\s*(.+?)\s+\d+(?:\.\d+)?\s+\S+\s+[YNyn]\b/gi;

    for (const match of text.matchAll(lotusRegex)) {
      let itemText = match[1].trim();

      itemText = itemText.replace(/นื่้า/g, 'น้ำ').replace(/นํ้า/g, 'น้ำ');

      results.push(itemText);
    }

    if (results.length > 0) {
      return [...new Set(results)];
    }
  }

  if (customer === 'CP All') {
    const cpAllRegex = /(?:^|\s)\d+\s+(\d{7})\s+(\d{13})\s+(.+?)(?=\s+\d+\.\d{2}\s+\d+\s+)/g;

    for (const match of text.matchAll(cpAllRegex)) {
      let itemName = match[3].trim();

      itemName = itemName.replace(/นื่้า/g, 'น้ำ')
        .replace(/นํ้า/g, 'น้ำ')
        .replace(/^H\s*/i, '')
        .replace(/น้ํา/g, 'น้ำ');

      results.push(itemName);
    }

    if (results.length > 0) {
      return [...new Set(results)];
    }
  }
  if (customer === 'Makro') {
    const makroRegex = /(?:^|\s)\d+\s+(.*?)\s*\(\s*(\d{13})\s*\/[^\)]+\)/g;

    for (const match of text.matchAll(makroRegex)) {
      let itemName = match[1].trim();

      if (itemName.includes('สาขา')) {
        itemName = itemName.replace(/.*สาขา.*?(?:\d[\d,\.]*\s+)+/g, '');
      }

      itemName = itemName.replace(/นื่้า/g, 'น้ำ')
        .replace(/นํ้า/g, 'น้ำ')
        .replace(/^H\s*/i, '')
        .replace(/น้ํา/g, 'น้ำ');

      results.push(itemName.trim());
    }

    if (results.length > 0) return [...new Set(results)];
  }

  if (customer === 'CJ Express') {
    const cjRegex = /(?:^|\s)\d+\s+(\d{13})\s+(\d{13})\s+(.+?)\s+\d+(?:\.\d+)?\s+[A-Za-z]+\/\d+/g;

    for (const match of text.matchAll(cjRegex)) {
      let itemName = match[3].trim();

      itemName = itemName.replace(/นื่้า/g, 'น้ำ')
        .replace(/นํ้า/g, 'น้ำ')
        .replace(/^H\s*/i, '')
        .replace(/น้ํา/g, 'น้ำ');

      results.push(itemName);
    }

    if (results.length > 0) return [...new Set(results)];
  }

  if (customer === 'Big C' || customer === 'Mini Big C') {
    const barcodes = [...text.matchAll(/\b885099\d{7}\b/g)];
    const footerRegex = /(?:หมายเหตุ|มูลค่ารวม|ส่วนลด\s*(?:\(บาท\)|\(%\))?|ภาษีมูลค่าเพิ่ม|รวมมูลค่า|ข้อความสำคัญ|ข้อควรระวัง)/i;

    for (let index = 0; index < barcodes.length; index++) {
      const barcode = barcodes[index];
      const nextBarcode = barcodes[index + 1];
      let rowText = text.slice(barcode.index + barcode[0].length, nextBarcode?.index ?? text.length);
      const footer = footerRegex.exec(rowText);
      if (footer) rowText = rowText.slice(0, footer.index);
      rowText = rowText.replace(/^[\s|:：-]+/, '').trim();

      const thaiVolume = /\d+(?:[.,]\d+)?\s*(?:มล\.?|ลิตร)/i.exec(rowText);
      const englishVolume = /\d{2,4}\s*ML\b/i.exec(rowText);
      const firstAmount = /\s+\d{1,3}(?:,\d{3})*\.\d{2,3}\b/.exec(rowText);
      const endIndex = thaiVolume
        ? thaiVolume.index + thaiVolume[0].length
        : englishVolume
          ? englishVolume.index
          : firstAmount
            ? firstAmount.index
            : rowText.length;

      const itemName = rowText.slice(0, endIndex)
        .replace(/น้้า/g, 'น้ำ')
        .replace(/น้าดื่ม/g, 'น้ำดื่ม')
        .replace(/([\u0e01-\u0e2e\u0e4c])\u0e4c+/g, '$1')
        .replace(/สิงหน้าดื่ม/g, 'สิงห์น้ำดื่ม')
        .replace(/น้ำดื่ม\s*สิงห์/g, 'สิงห์น้ำดื่ม')
        .replace(/สิงห(?=[พิงค์|เลมอน|ยูซุ|บ๊วย|น้ำ])/g, 'สิงห์')
        .replace(/[|]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (itemName) results.push(itemName);
    }
    return [...new Set(results)];
  }
  // ====================================================================
  const itemLabel = customer === 'CJ Express' ? 'ชื่อสินค้า' : 'รายการ';
  const itemMatch = rawText.match(new RegExp(`(?:${itemLabel})\\s*[:：-]?\\s*(.+)$`, 'im'));
  const extractedText = itemMatch?.[1]?.trim();
  const codes = extractItemCodes(extractedText || '');
  results.push(...codes);

  if (extractedText) results.push(extractedText);

  if (customer === 'Makro') {
    const branch = extractMakroBranch(rawText);
    if (branch) results.push(branch);
  }

  return [...new Set(results.filter(Boolean))];
}

function getCustomerColumns(customer, headers) {
  const columnConfig = CUSTOMER_EXCEL_COLUMNS[customer] || CUSTOMER_EXCEL_COLUMNS.Lotus;
  const safeHeaders = headers || [];
  const normalized = safeHeaders.map(normalizeExcelHeader);

  const findColumn = (patterns, fallback) => {
    if (!patterns) return fallback;
    const normalizedPatterns = patterns.map(normalizeExcelHeader);
    const index = normalized.findIndex(header => normalizedPatterns.some(pattern => header.includes(pattern)));
    return index >= 0 ? index : fallback;
  };

  switch (customer) {
    case 'CJ Express':
      return { deliveryIdx: -1, shipIdx: findColumn(columnConfig.ship, 0), descIdx: findColumn(columnConfig.description, 1) };
    case 'CP All': {
      const deliveryIdx = findColumn(columnConfig.delivery, -1);
      const addressFallbackIdx = Math.min((deliveryIdx >= 0 ? deliveryIdx : 0) + 1, Math.max(0, safeHeaders.length - 1));
      const addressIdx = findColumn(columnConfig.address, addressFallbackIdx);
      return { deliveryIdx, shipIdx: addressIdx, descIdx: findColumn(columnConfig.description, 1) };
    }
    case 'Makro':
      return { deliveryIdx: -1, shipIdx: findColumn(columnConfig.ship, 0), descIdx: findColumn(columnConfig.description, 1) };
    case 'Lotus':
    case 'Big C':
    case 'Mini Big C':
      return { deliveryIdx: -1, shipIdx: findColumn(columnConfig.ship, 0), descIdx: findColumn(columnConfig.description, 1) };
    case 'NDC':
      return { deliveryIdx: -1, shipIdx: findColumn(columnConfig.ship, 0), descIdx: findColumn(columnConfig.description, 1), originIdx: findColumn(['originlocationname', 'origin'], -1) };
    default:
      return { deliveryIdx: -1, shipIdx: findColumn(columnConfig.ship, 0), descIdx: findColumn(columnConfig.description, 1), originIdx: -1 };
  }
}


function mapExcelRows(rawRows, headers, customer) {
  const safeHeaders = headers || [];
  const { deliveryIdx, shipIdx, descIdx, originIdx } = getCustomerColumns(customer, safeHeaders);
  const normalizedHeaders = safeHeaders.map(normalizeExcelHeader);

  const findHeaderValue = (row, patterns) => {
    if (!patterns) return '';
    const normalizedPatterns = patterns.map(normalizeExcelHeader);
    const exactIndex = normalizedHeaders.findIndex(header => normalizedPatterns.includes(header));
    const index = exactIndex >= 0 ? exactIndex : normalizedHeaders.findIndex(header => normalizedPatterns.some(pattern => header.includes(pattern)));
    return index >= 0 ? repairExcelText(row[index]).trim() : '';
  };

  const safeRawRows = rawRows || [];
  return safeRawRows
    .filter(row => {
      if (!row || !row.some(cell => String(cell || '').trim() !== '')) return false;
      if (customer === 'NDC' && originIdx >= 0) {
        const originVal = String(row[originIdx] || '').trim().toUpperCase();
        if (!originVal.includes('NDC')) return false;
      }
      return true;
    })
    .map(row => {
      const poNumber = findHeaderValue(row, ['ponumber', 'purchaseorderno.', 'customerpono.', 'pono', 'เลขที่ใบสั่งซื้อ']);
      const destinationLocationName = findHeaderValue(row, ['destinationlocationname', 'destinationlocation']);
      const date = findHeaderValue(row, ['Date วันที่', 'Date', 'วันที่']);
      const province = findHeaderValue(row, ['จังหวัด', 'Province']);
      const shipTo = destinationLocationName || findHeaderValue(row, ['shiptoparty', 'shiptopartyname1', 'shiptoname', 'shipto', 'storename', 'ส่งสินค้าไปที่']);
      const soldTo = findHeaderValue(row, ['soldtoparty', 'soldto', 'soldtoname']);
      const productDesc = findHeaderValue(row, ['productdescription', 'materialdescription', 'materialdesc.']);

      return {
        ship: repairExcelText(row[shipIdx]).trim() || shipTo,
        description: repairExcelText(row[descIdx]).trim() || productDesc,
        ponumber: poNumber,
        destinationLocationName: destinationLocationName || repairExcelText(row[shipIdx]).trim(),
        date: date && /^\d+(?:\.\d+)?$/.test(date) ? XLSX.SSF.format('dd/mm/yyyy', Number(date)) : date,
        province,
        soldToParty: soldTo,
        delivery: deliveryIdx >= 0 ? repairExcelText(row[deliveryIdx]).trim() : '',
        productdescription: repairExcelText(row[descIdx]).trim() || productDesc,
        shipToParty: repairExcelText(row[shipIdx]).trim() || shipTo,
        shipToName: findHeaderValue(row, ['name1', 'shiptopartyname1']),
        source: findHeaderValue(row, ['soldtopartyname1', 'soldtoname1']),
        salesorder: findHeaderValue(row, ['salesorder', 'salesdocument']),
        raw: row
      };
    });
}

function CheckboxDropdown({ id, label, options, selected, onChange, disabled, hint }) {
  const toggleOption = (option) => {
    onChange(selected.includes(option) ? selected.filter(value => value !== option) : [...selected, option]);
  };
  const selectAll = () => onChange([...options]);
  const clearAll = () => onChange([]);

  return (
    <div className="filterGroup">
      <details className="filterDropdown">
        <summary id={id}>
          <span className="filterSummaryLabel">{label}</span>
          {selected.length > 0 && <span className="filterCount">{selected.length}</span>}
        </summary>
        <div className="filterMenu">
          {options.length === 0 ? (
            <span className="filterEmpty">ยังไม่มีข้อมูล</span>
          ) : options.map(option => (
            <label className="filterOption" key={option}>
              <Checkbox checked={selected.includes(option)} disabled={disabled} onChange={() => toggleOption(option)} />
              <span>{option}</span>
            </label>
          ))}
          {options.length > 0 && (
            <div className="filterActions">
              <Button size="sm" variant="outline" onClick={selectAll} disabled={disabled || options.length === 0}>เลือกทั้งหมด</Button>
              <Button size="sm" variant="ghost" onClick={clearAll} disabled={disabled || selected.length === 0}>ล้าง</Button>
            </div>
          )}
        </div>
      </details>
      <small className="filterHint">{hint}</small>
    </div>
  );
}

// ================== ส่วนใหม่: ฟิลเตอร์แบบ Google Sheets ในหัวตาราง Excel ==================
function ColumnFilterDropdown({ options, selected, onChange }) {
  const toggleOption = (option) => {
    onChange(selected.includes(option) ? selected.filter(v => v !== option) : [...selected, option]);
  };
  const isActive = selected.length > 0;

  return (
    <details className="tableFilterDropdown">
      <summary className={isActive ? 'active' : ''}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </summary>
      <div className="tableFilterMenu" onClick={(e) => e.stopPropagation()}>
        <div className="tableFilterActions">
          <button type="button" className="tableFilterSelectAll" onClick={() => onChange([...options])}>เลือกทั้งหมด</button>
          <button type="button" className="tableFilterClear" onClick={() => onChange([])}>ล้าง</button>
        </div>
        <div className="tableFilterOptions">
          {options.length === 0 && <div className="tableFilterEmpty">ไม่มีข้อมูล</div>}
          {options.map((opt, idx) => (
            <label key={idx} className="tableFilterOption">
              <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggleOption(opt)} />
              <span title={opt}>{opt || '(ว่าง)'}</span>
            </label>
          ))}
        </div>
      </div>
    </details>
  );
}
// =========================================================================================

const RESULTS_PER_PAGE = 10;

export default function PoChecker() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [excelSources, setExcelSources] = useState([]);
  const [customer, setCustomer] = useState('CP All');
  const excelRows = useMemo(
    () => excelSources.flatMap(source => mapExcelRows(source.rawRows, source.headers, customer)),
    [excelSources, customer]
  );
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedSites, setSelectedSites] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // --- Excel Column Filters State ---
  const [excelFilters, setExcelFilters] = useState({
    ponumber: [],
    delivery: [],
    shipToParty: [],
    soldToParty: [],
    productdescription: []
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState({ active: false, text: '', current: 0, total: 0 });

  const [pageResults, setPageResults] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [previewZoom, setPreviewZoom] = useState(1);
  const [resultsPage, setResultsPage] = useState(1);
  const [printPagesList, setPrintPagesList] = useState([]);
  const [selectedPrintPages, setSelectedPrintPages] = useState([]);

  const [isPdfDragging, setIsPdfDragging] = useState(false);
  const [isExcelDragging, setIsExcelDragging] = useState(false);

  const handlePdfDragOver = useCallback((e) => { e.preventDefault(); setIsPdfDragging(true); }, []);
  const handlePdfDragLeave = useCallback(() => setIsPdfDragging(false), []);
  const handlePdfDrop = useCallback((e) => {
    e.preventDefault();
    setIsPdfDragging(false);
    if (isProcessing) return;
    const files = [...e.dataTransfer.files].filter(f => f.type === 'application/pdf' || /\.pdf$/i.test(f.name));
    if (files.length) setPdfFiles(curr => [...curr, ...files]);
  }, [isProcessing]);

  const handleExcelChange = useCallback(async (e) => {
    const input = e.target;
    const files = [...input.files];
    if (!files.length) return;
    try {
      const sources = (await Promise.all(files.map(file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const wb = XLSX.read(new Uint8Array(event.target.result), { type: 'array' });
            const sheetSources = wb.SheetNames.map((sheetName) => {
              const sheet = wb.Sheets[sheetName];
              const json = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
              if (json.length < 2) return null;

              const headerRow1 = json[0] || [];
              const headerRow2 = json[3] || [];
              const mergedHeaders = headerRow1.map((col1, i) => {
                const col2 = headerRow2[i] || '';
                return `${col1} ${col2}`.trim();
              });
              let headersToUse = json[0];
              let dataToUse = json.slice(1);

              if (headerRow2.some(cell => typeof cell === 'string' && /[ก-๙]/.test(cell))) {
                headersToUse = mergedHeaders;
                dataToUse = json.slice(2);
              }

              return { headers: headersToUse, rawRows: dataToUse, name: `${file.name} / ${sheetName}` };
            }).filter(Boolean);
            resolve(sheetSources);
          } catch (error) {
            reject(error);
          }
        };
        reader.onerror = () => reject(new Error(`อ่านไฟล์ ${file.name} ไม่สำเร็จ`));
        reader.readAsArrayBuffer(file);
      })))).flat();

      setSelectedSites([]);
      setSelectedSources([]);
      setSelectedItems([]);
      setExcelFilters({ ponumber: [], delivery: [], shipToParty: [], soldToParty: [], productdescription: [] });
      setExcelSources(currentSources => [...currentSources, ...sources]);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      alert('อ่านไฟล์ Excel ไม่สำเร็จ: ' + message);
    } finally {
      if ('value' in input) input.value = '';
    }
  }, []);

  const handleExcelDragOver = useCallback((e) => { e.preventDefault(); setIsExcelDragging(true); }, []);
  const handleExcelDragLeave = useCallback(() => setIsExcelDragging(false), []);
  const handleExcelDrop = useCallback((e) => {
    e.preventDefault();
    setIsExcelDragging(false);
    const files = [...e.dataTransfer.files].filter(f => /\.(xlsx|xls|csv)$/i.test(f.name));
    if (files.length) handleExcelChange({ target: { files } });
  }, [handleExcelChange]);

  const clearPdfFiles = (e) => {
    if (isProcessing) return;
    e.preventDefault();
    e.stopPropagation();
    setPdfFiles([]);
    setPageResults([]);
    setSelectedPage(null);
    setSelectedPrintPages([]);
    setPrintPagesList([]);
    setResultsPage(1);
  };

  const clearExcelFiles = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExcelSources([]);
    setSelectedSources([]);
    setSelectedSites([]);
    setSelectedItems([]);
    setExcelFilters({ ponumber: [], delivery: [], shipToParty: [], soldToParty: [], productdescription: [] });
  };

  const handlePdfChange = (e) => {
    const files = [...e.target.files];
    if (!isProcessing && files.length) setPdfFiles((currentFiles) => [...currentFiles, ...files]);
    e.target.value = '';
  };

  const handleCustomerChange = (event) => {
    const nextCustomer = event.target.value;
    setCustomer(nextCustomer);
    setSelectedSites([]);
    setSelectedSources([]);
    setSelectedItems([]);
    setExcelFilters({ ponumber: [], delivery: [], shipToParty: [], soldToParty: [], productdescription: [] });
    setPageResults([]);
    setSelectedPage(null);
    setSelectedPrintPages([]);
    setPrintPagesList([]);
    setResultsPage(1);
    setPreviewZoom(1);
  };

  const processPdf = async () => {
    if (!pdfFiles.length || isProcessing) return;
    setIsProcessing(true);
    setStatus({ active: true, text: 'กำลังเตรียมระบบ…', current: 0, total: 0 });
    setPageResults([]);
    setSelectedPage(null);
    setSelectedPrintPages([]);
    setResultsPage(1);

    let tesseractWorker = null;
    try {
      const pdfDocs = [];
      for (const file of pdfFiles) {
        const buf = await file.arrayBuffer();
        pdfDocs.push(await pdfjsLib.getDocument({
          data: buf,
          wasmUrl: '/pdfjs/wasm/',
        }).promise);
      }
      const total = pdfDocs.reduce((pageCount, pdfDoc) => pageCount + pdfDoc.numPages, 0);

      const results = [];
      let pageNumber = 0;

      let currentDocumentPO = ORDER_NUMBER_NOT_FOUND;

      for (const [documentIndex, pdfDoc] of pdfDocs.entries()) {
        currentDocumentPO = ORDER_NUMBER_NOT_FOUND;
        const poGroups = {};

        for (let p = 1; p <= pdfDoc.numPages; p++) {
          pageNumber += 1;
          setStatus({ active: true, text: `กำลังอ่านข้อความหน้า ${pageNumber} จาก ${total}…`, current: pageNumber, total });
          const page = await pdfDoc.getPage(p);

          // 🎯 1. คำนวณขนาด (Scale) แบบฉลาด ไม่ให้ Canvas แตกหรือกินแรมจนค้าง
          const baseViewport = page.getViewport({ scale: 1.0 });
          const previewScale = Math.min(PREVIEW_SCALE, 1200 / baseViewport.width);
          const ocrScale = Math.min(OCR_SCALE, 2800 / baseViewport.width);

          const textContent = await page.getTextContent();
          let rawText = textContent.items.map(i => i.str).join(' ').trim();
          let source = 'text-layer';
          let ocrConfidence = null;
          let thumbDataUrl = '';

          if (rawText.length < 8) {
            // ------ กรณีไฟล์ภาพสแกน (Mini Big C) ------
            source = 'ocr';
            if (!tesseractWorker) {
              setStatus({ active: true, text: 'กำลังโหลดโมดูล OCR (ครั้งแรกอาจใช้เวลาสักครู่)…', current: pageNumber, total });
              tesseractWorker = await Tesseract.createWorker('tha+eng', 1);
              await tesseractWorker.setParameters({
                tessedit_pageseg_mode: Tesseract.PSM.SPARSE_TEXT,
                user_defined_dpi: String(Math.round(ocrScale * 72)),
                preserve_interword_spaces: '1',
              });
            }
            setStatus({ active: true, text: `กำลังประมวลผล ${pageNumber} จาก ${total} …`, current: pageNumber, total });

            const ocrViewport = page.getViewport({ scale: ocrScale });
            const ocrCanvas = document.createElement('canvas');
            ocrCanvas.width = Math.floor(ocrViewport.width);
            ocrCanvas.height = Math.floor(ocrViewport.height);
            const ctxOcr = ocrCanvas.getContext('2d');

            const tempOcrCanvas = document.createElement('canvas');
            tempOcrCanvas.width = ocrCanvas.width;
            tempOcrCanvas.height = ocrCanvas.height;
            await page.render({ canvasContext: tempOcrCanvas.getContext('2d'), viewport: ocrViewport }).promise;

            ctxOcr.fillStyle = '#ffffff';
            ctxOcr.fillRect(0, 0, ocrCanvas.width, ocrCanvas.height);
            ctxOcr.drawImage(tempOcrCanvas, 0, 0);

            const previewCanvas = document.createElement('canvas');
            const previewScale = Math.min(1, 1200 / tempOcrCanvas.width);
            previewCanvas.width = Math.max(1, Math.floor(tempOcrCanvas.width * previewScale));
            previewCanvas.height = Math.max(1, Math.floor(tempOcrCanvas.height * previewScale));
            const previewContext = previewCanvas.getContext('2d');
            previewContext.fillStyle = '#ffffff';
            previewContext.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
            previewContext.imageSmoothingEnabled = true;
            previewContext.imageSmoothingQuality = 'high';
            previewContext.drawImage(tempOcrCanvas, 0, 0, previewCanvas.width, previewCanvas.height);
            thumbDataUrl = previewCanvas.toDataURL('image/png');

            preprocessForOcr(ocrCanvas);
            const { data } = await tesseractWorker.recognize(ocrCanvas);
            rawText = data.text.trim();
            ocrConfidence = data.confidence;
          } else {
            // ------ กรณีไฟล์ PDF ปกติ ------
            const viewport = page.getViewport({ scale: previewScale });
            const canvas = document.createElement('canvas');
            canvas.width = Math.floor(viewport.width);
            canvas.height = Math.floor(viewport.height);
            const ctxPreview = canvas.getContext('2d');

            const tempPreviewCanvas = document.createElement('canvas');
            tempPreviewCanvas.width = canvas.width;
            tempPreviewCanvas.height = canvas.height;
            await page.render({ canvasContext: tempPreviewCanvas.getContext('2d'), viewport }).promise;

            ctxPreview.fillStyle = '#ffffff';
            ctxPreview.fillRect(0, 0, canvas.width, canvas.height);
            ctxPreview.drawImage(tempPreviewCanvas, 0, 0);

            thumbDataUrl = canvas.toDataURL('image/png');
          }

          const addressText = extractPdfAddressText(rawText, customer);
          const addr = extractAndCorrectAddress(addressText);
          const formattedAddr = formatAddress(addr);

          const pdfDestination = extractPdfDestination(rawText, customer, addr, addressText);
          const pdfSource = extractPdfSource(rawText, customer);

          let extractedPO = extractPdfOrderNumber(rawText, customer, excelRows);

          const keywords = ['ใบสั่งซื้อ', 'purchase order', 'ผู้สั่งซื้อ', 'กำหนดส่ง', 'สถานที่ส่งของ', 'ผู้จำหน่าย', 'เลขประจำตัวผู้เสียภาษี', 'เงื่อนไขการชำระเงิน', 'วันที่ส่งสินค้า'];
          const isNewDoc = keywords.filter(kw => normalizePdfText(rawText).includes(kw)).length >= 2;

          if (extractedPO !== ORDER_NUMBER_NOT_FOUND) {
            currentDocumentPO = extractedPO;
          } else {
            if (isNewDoc) {
              currentDocumentPO = ORDER_NUMBER_NOT_FOUND;
              extractedPO = ORDER_NUMBER_NOT_FOUND;
            } else {
              extractedPO = currentDocumentPO;
            }
          }

          const pdfItems = extractPdfItems(rawText, customer);

          const rowData = {
            id: `page-${pageNumber}`,
            pages: [pageNumber],
            rawText,
            source,
            ocrConfidence,
            addr,
            formattedAddr,
            pdfAddress: pdfDestination,
            pdfDestination,
            pdfSource,
            pdfOrderNumber: extractedPO,
            pdfItems,
            codes: pdfItems,
            thumbDataUrls: [thumbDataUrl]
          };

          addPdfPageResult(results, poGroups, rowData, documentIndex, ORDER_NUMBER_NOT_FOUND);
        }
      }

      setPageResults(results);
      if (results.length > 0) setSelectedPage(results[0]);
      setPreviewZoom(1);
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : String(error);
      alert(`เกิดข้อผิดพลาดในการประมวลผล PDF: ${message}`);
    } finally {
      try {
        if (tesseractWorker) await tesseractWorker.terminate();
      } catch (cleanupError) {
        console.error('ปิดระบบ OCR ไม่สำเร็จ', cleanupError);
      } finally {
        setStatus({ active: false, text: '', current: 0, total: 0 });
        setIsProcessing(false);
      }
    }
  };

  const normalizePoForMatch = (val) => String(val || '').trim().replace(/^0+/, '');

  const findMatchedExcelRow = useCallback((pdfPo) => {
    if (!pdfPo || pdfPo === ORDER_NUMBER_NOT_FOUND) return null;
    const target = String(pdfPo).trim();
    const targetNorm = normalizePoForMatch(target);
    return excelRows.find(row => {
      const rowPo = String(row.ponumber || '').trim();
      return rowPo && (rowPo === target || normalizePoForMatch(rowPo) === targetNorm);
    }) || null;
  }, [excelRows]);

  const getResultDestination = useCallback((result) => {
    if (customer === 'NDC') {
      const matched = findMatchedExcelRow(result.pdfOrderNumber);
      return matched?.destinationLocationName || 'ไม่พบใน Excel';
    }
    return result.pdfDestination;
  }, [customer, findMatchedExcelRow]);

  const getFilteredResults = () => {
    return pageResults.filter((result) => {
      const destValue = getResultDestination(result);
      const matchesSource = selectedSources.length === 0 || selectedSources.includes(result.pdfSource);
      const matchesSite = selectedSites.length === 0 || selectedSites.includes(destValue);
      const matchesItem = selectedItems.length === 0 || result.pdfItems.some(item => selectedItems.includes(item));
      return matchesSource && matchesSite && matchesItem;
    });
  };

  const triggerPrint = (pagesList) => {
    setPrintPagesList(sortPdfResultsByPage(pagesList));
    setTimeout(() => window.print(), 100);
  };

  const togglePrintPage = (id) => {
    setSelectedPrintPages((ids) => ids.includes(id)
      ? ids.filter(value => value !== id)
      : [...ids, id]);
  };

  const toggleFilteredPrintPages = () => {
    const filteredIds = filteredResults.map(result => result.id);
    const allSelected = filteredIds.length > 0 && filteredIds.every(id => selectedPrintPages.includes(id));
    setSelectedPrintPages((ids) => allSelected
      ? ids.filter(id => !filteredIds.includes(id))
      : [...new Set([...ids, ...filteredIds])]);
  };
  const sources = uniqueInOrder(pageResults.map(result => result.pdfSource));
  const sites = uniqueInOrder(pageResults.map(result => getResultDestination(result)));
  const getItemsForSites = (selectedSiteValues) => uniqueInOrder(
    pageResults
      .filter(result => selectedSiteValues.length === 0 || selectedSiteValues.includes(result.pdfDestination))
      .flatMap(result => result.pdfItems)
  );
  const availableItems = getItemsForSites(selectedSites);
  const filteredResults = getFilteredResults();
  const totalResultPages = Math.max(1, Math.ceil(filteredResults.length / RESULTS_PER_PAGE));
  const currentResultsPage = Math.min(resultsPage, totalResultPages);
  const activeSelectedPage = filteredResults.find(result => result.id === selectedPage?.id) || filteredResults[0] || null;
  const visibleResults = filteredResults.slice((currentResultsPage - 1) * RESULTS_PER_PAGE, currentResultsPage * RESULTS_PER_PAGE);
  const selectedResultIndex = filteredResults.findIndex(result => result.id === activeSelectedPage?.id);
  const selectedPrintResults = pageResults.filter(result => selectedPrintPages.includes(result.id));
  const allFilteredPagesSelected = filteredResults.length > 0 && filteredResults.every(result => selectedPrintPages.includes(result.id));

  const selectPreviewPage = (index) => {
    if (index >= 0 && index < filteredResults.length) setSelectedPage(filteredResults[index]);
  };

  const paginationControls = filteredResults.length > RESULTS_PER_PAGE ? (
    <div className="pagination paginationCompact" aria-label="เลือกหน้าผลการตรวจสอบ">
      <Button variant="outline" size="sm" disabled={currentResultsPage === 1} onClick={() => setResultsPage(currentResultsPage - 1)}>ก่อนหน้า</Button>
      <span className="paginationCurrent">หน้า {currentResultsPage} / {totalResultPages}</span>
      <Button variant="outline" size="sm" disabled={currentResultsPage === totalResultPages} onClick={() => setResultsPage(currentResultsPage + 1)}>ถัดไป</Button>
    </div>
  ) : null;

  // --- Excel Filter Logic แบบเชื่อมโยงกัน (Google Sheets Style) ---
  const handleExcelFilterChange = (column, newSelected) => {
    setExcelFilters(prev => ({ ...prev, [column]: newSelected }));
  };

  // ฟังก์ชันช่วยหาตัวเลือกที่เหลืออยู่ โดยจำลองการกรองจากฟิลเตอร์ "ตัวอื่น"
  const getAvailableOptions = (columnKey) => {
    // ต้องเอารายการที่ "กำลังแสดงอยู่" มาให้เลือก แต่อย่าตัดรายการของตัวเองที่ถูกเลือกไปแล้วทิ้ง
    const availableRows = excelRows.filter(row => {
      const checkFilter = (key, rowValue) =>
        key === columnKey || excelFilters[key].length === 0 || excelFilters[key].includes(rowValue);

      return (
        checkFilter('ponumber', row.ponumber) &&
        checkFilter('delivery', row.delivery) &&
        checkFilter('shipToParty', row.shipToParty) &&
        checkFilter('soldToParty', row.soldToParty) &&
        checkFilter('productdescription', row.productdescription)
      );
    });
    return uniqueInOrder(availableRows.map(r => r[columnKey]));
  };

  // ดึงรายการตัวเลือกแบบอัปเดตตามสถานะ (Dynamic Options)
  const excelOptions = useMemo(() => ({
    ponumber: getAvailableOptions('ponumber'),
    delivery: getAvailableOptions('delivery'),
    shipToParty: getAvailableOptions('shipToParty'),
    soldToParty: getAvailableOptions('soldToParty'),
    productdescription: getAvailableOptions('productdescription')
  }), [excelRows, excelFilters]);

  const filteredExcelRows = useMemo(() => {
    return excelRows.filter(row => {
      return (
        (excelFilters.ponumber.length === 0 || excelFilters.ponumber.includes(row.ponumber)) &&
        (excelFilters.delivery.length === 0 || excelFilters.delivery.includes(row.delivery)) &&
        (excelFilters.shipToParty.length === 0 || excelFilters.shipToParty.includes(row.shipToParty)) &&
        (excelFilters.soldToParty.length === 0 || excelFilters.soldToParty.includes(row.soldToParty)) &&
        (excelFilters.productdescription.length === 0 || excelFilters.productdescription.includes(row.productdescription))
      );
    });
  }, [excelRows, excelFilters]);

  const customerTableColumns = [
    ...(CUSTOMER_EXCEL_COLUMNS[customer]?.delivery ? [{ key: 'delivery', label: 'Delivery' }] : []),
    ...(CUSTOMER_EXCEL_COLUMNS[customer]?.address
      ? [{ key: 'shipToParty', label: 'Address' }]
      : [{ key: 'shipToParty', label: 'Ship To' }]),
    { key: 'productdescription', label: 'Product Description' }
  ];

  function formatPageRange(pages) {
    if (!pages || !pages.length) return '';
    const sorted = [...new Set(pages)].sort((a, b) => a - b);
    const ranges = [];
    let start = sorted[0];
    let end = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === end + 1) {
        end = sorted[i];
      } else {
        ranges.push(start === end ? `${start}` : `${start}-${end}`);
        start = sorted[i];
        end = sorted[i];
      }
    }
    ranges.push(start === end ? `${start}` : `${start}-${end}`);
    return ranges.join(', ');
  }

  return (
    <div className="po-container">
      <header className="po-header">
        <div>
          <div className="brandLine">
            <div className="badge">Transport PO Sorting Tool</div>
          </div>
          <h1 className="po-title">ระบบคัดแยกเอกสารใบสั่งซื้อสินค้า</h1>
          <p>อัปโหลด PDF ใบสั่งซื้อสินค้า และไฟล์ Excel รายการสินค้า/ที่อยู่ เพื่อดูข้อมูลแยกตามไฟล์</p>
        </div>
        <img className="brandIcon" src="/Brf Logos 2.png" alt="" aria-hidden="true" />
      </header>

      <main className="po-main">
        <section className="uploads">
          <Card
            className={`dropzone ${pdfFiles.length ? 'filled' : ''} ${isPdfDragging ? 'dragging' : ''}`}
            onDragOver={handlePdfDragOver}
            onDragLeave={handlePdfDragLeave}
            onDrop={handlePdfDrop}
          >
            {pdfFiles.length > 0 && (
              <button
                type="button"
                onClick={clearPdfFiles}
                disabled={isProcessing}
                className="clearFilesButton"
                title="ล้างไฟล์ PDF"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            )}
            <label className="uploadLabel">
              <div className="icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
              </div>
              <div className="meta">
                <div className="label">ไฟล์ PDF ใบสั่งซื้อสินค้า (เลือกได้หลายไฟล์)</div>
                <div className={`file ${isPdfDragging ? 'dragging' : ''}`}>{pdfFiles.length ? `${pdfFiles.length} ไฟล์โหลดแล้ว` : 'ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก'}</div>
              </div>
              <input className="hiddenFileInput" type="file" accept="application/pdf" multiple onChange={handlePdfChange} disabled={isProcessing} />
            </label>
          </Card>

          <Card
            className={`dropzone ${excelSources.length ? 'filled' : ''} ${isExcelDragging ? 'dragging' : ''}`}
            onDragOver={handleExcelDragOver}
            onDragLeave={handleExcelDragLeave}
            onDrop={handleExcelDrop}
          >
            {excelSources.length > 0 && (
              <button
                type="button"
                onClick={clearExcelFiles}
                className="clearFilesButton"
                title="ล้างไฟล์ Excel"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            )}
            <label className="uploadLabel">
              <div className="icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
              </div>
              <div className="meta">
                <div className="label">ไฟล์ Excel (ship / description)</div>
                <div className={`file ${isExcelDragging ? 'dragging' : ''}`}>{excelSources.length ? `${excelRows.length} แถวจาก ${excelSources.length} ไฟล์โหลดแล้ว` : 'ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก'}</div>
              </div>
              <input className="hiddenFileInput" type="file" accept=".xlsx,.xls,.csv" multiple onChange={handleExcelChange} />
            </label>
          </Card>
        </section>

        <Card className="toolbar mainToolbar">
          <div className="field">
            <label htmlFor="customer-filter" className="customerLabel">Customer</label>
            <Select id="customer-filter" value={customer} onChange={handleCustomerChange} disabled={isProcessing}>
              <option value="Lotus">Lotus</option>
              <option value="CJ Express">CJ Express</option>
              <option value="Makro">Makro</option>
              <option value="NDC">NDC</option>
              <option value="CP All">CP All</option>
              <option value="Big C">Big C</option>
              <option value="Mini Big C">Mini Big C</option>
            </Select>
          </div>

          <Button className="processButton" onClick={processPdf} disabled={!pdfFiles.length || isProcessing}>
            {isProcessing ? 'กำลังประมวลผล...' : 'ประมวลผล PDF'}
          </Button>

          <CheckboxDropdown
            id="source-filter"
            label="ต้นทางจาก PDF"
            options={sources}
            selected={selectedSources}
            onChange={(values) => { setSelectedSources(values); setResultsPage(1); }}
            disabled={!pageResults.length}
            hint="เรียงตามลำดับที่พบใน PDF"
          />

          <CheckboxDropdown
            id="site-filter"
            label="ปลายทางจาก PDF"
            options={sites}
            selected={selectedSites}
            onChange={(values) => {
              setSelectedSites(values);
              const allowedItems = new Set(getItemsForSites(values));
              setSelectedItems(current => current.filter(item => allowedItems.has(item)));
              setResultsPage(1);
            }}
            disabled={!pageResults.length}
            hint="เรียงตามลำดับที่พบใน PDF"
          />

          <CheckboxDropdown
            id="item-filter"
            label="รายการสินค้า"
            options={availableItems}
            selected={selectedItems}
            onChange={(values) => { setSelectedItems(values); setResultsPage(1); }}
            disabled={!pageResults.length}
            hint="เรียงตามลำดับที่พบใน PDF"
          />

          <div className="spacer"></div>

          <div className="pageIndicator">
            {pageResults.length === 0 ? 'ยังไม่มีข้อมูล' :
              selectedSources.length || selectedSites.length || selectedItems.length ? `พบ ${filteredResults.length} จาก ${pageResults.length} หน้า` : `ทั้งหมด ${pageResults.length} หน้า`}
          </div>

          <Button
            variant="outline"
            disabled={!selectedPrintResults.length}
            onClick={() => triggerPrint(selectedPrintResults)}
            className="printButton"
          >
            <svg className="buttonIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
            พิมพ์หน้าที่เลือก{selectedPrintResults.length > 0 ? ` (${selectedPrintResults.length})` : ''}
          </Button>
        </Card>

        {status.active && (
          <div className="statusBar active">
            <div className="statusRow">
              <span className="statusText">{status.text}</span>
              <span className="statusCount">{status.total > 0 ? `${status.current}/${status.total}` : ''}</span>
            </div>
            <div className="progressTrack">
              <progress className="progressFill" value={status.current} max={status.total || 1} aria-label="ความคืบหน้าการประมวลผล" />
            </div>
          </div>
        )}

        <div className="workspace">
          <div className='panelLeft'>
            <Card className="panel">
              <h2 className="sectionHeading">
                ผลการตรวจสอบรายหน้า <span className="count">{pageResults.length > 0 ? `(${filteredResults.length} หน้า)` : ''}</span>
              </h2>

              {paginationControls}

              <div className="tableScroll">
                <table>
                  <thead>
                    {customer === 'NDC' ? (
                      <tr>
                        <th className="selectColumn">
                          <Checkbox
                            checked={allFilteredPagesSelected}
                            onChange={toggleFilteredPrintPages}
                            disabled={!filteredResults.length}
                            aria-label="เลือกทุกหน้าที่แสดง"
                          />
                        </th>
                        <th>Date</th>
                        <th>PO Number</th>
                        <th>Destination</th>
                        <th>Ship to name</th>
                      </tr>
                    ) : (
                      <tr>
                        <th className="selectColumn">
                          <Checkbox
                            checked={allFilteredPagesSelected}
                            onChange={toggleFilteredPrintPages}
                            disabled={!filteredResults.length}
                            aria-label="เลือกทุกหน้าที่แสดง"
                          />
                        </th>
                        <th>PO Number</th>
                        <th className="comparisonColumn">เปรียบเทียบกับ Excel</th>
                        <th>ต้นทางจาก PDF</th>
                        <th>ปลายทางจาก PDF</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {pageResults.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="tableEmpty">
                          อัปโหลดไฟล์แล้วกด “ประมวลผล PDF”
                        </td>
                      </tr>
                    ) : filteredResults.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="tableEmpty tableEmptyWarning">
                          ไม่พบหน้าที่ตรงกับตัวกรองนี้
                        </td>
                      </tr>
                    ) : (
                      visibleResults.map((r, idx) => {
                        const isSelected = selectedPage?.id === r.id;
                        const isPrintSelected = selectedPrintPages.includes(r.id);

                        const matchedRow = findMatchedExcelRow(r.pdfOrderNumber);
                        const hasPo = r.pdfOrderNumber && r.pdfOrderNumber !== ORDER_NUMBER_NOT_FOUND;
                        const matchInExcel = Boolean(matchedRow);

                        // 🎯 โครงสร้างตารางสำหรับ NDC โดยเฉพาะ
                        if (customer === 'NDC') {
                          return (
                            <tr
                              key={r.id || idx}
                              className={isSelected ? 'selected' : ''}
                              onClick={() => setSelectedPage(r)}
                            >
                              <td className="pageSelectCell">
                                <Checkbox
                                  checked={isPrintSelected}
                                  onChange={() => togglePrintPage(r.id)}
                                  onClick={(event) => event.stopPropagation()}
                                />
                                <span className="mono pageNumber">
                                  หน้า {formatPageRange(r.pages)}
                                </span>
                              </td>
                              <td className="dataCell">{matchedRow?.date || '—'}</td>
                              <td className="addrBefore dataCell font-mono">
                                {r.pdfOrderNumber || ORDER_NUMBER_NOT_FOUND}
                              </td>
                              <td className="dataCell">{matchedRow?.province || '—'}</td>
                              <td className="comparisonCell">
                                {matchedRow?.destinationLocationName ? (
                                  <span className="destinationValue">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {matchedRow.destinationLocationName}
                                  </span>
                                ) : (
                                  <span className="destinationMissing">
                                    {excelRows.length === 0 ? 'รออัปโหลด Excel' : (!hasPo ? '⚠️ ไม่พบเลขที่ใน PDF' : '❌ ไม่พบ PO ใน Excel')}
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        }

                        return (
                          <tr
                            key={r.id || idx}
                            className={isSelected ? 'selected' : ''}
                            onClick={() => setSelectedPage(r)}
                          >
                            <td className="pageSelectCell">
                              <Checkbox
                                checked={isPrintSelected}
                                onChange={() => togglePrintPage(r.id)}
                                onClick={(event) => event.stopPropagation()}
                                aria-label={`เลือก PO ${r.pdfOrderNumber} สำหรับพิมพ์`}
                              />
                              <span className="mono pageNumber">
                                หน้า {formatPageRange(r.pages)}
                              </span>
                            </td>
                            <td className="addrBefore dataCell">
                              {r.pdfOrderNumber || ORDER_NUMBER_NOT_FOUND}
                            </td>
                            <td className="comparisonCell">
                              {hasPo ? (
                                excelRows.length === 0
                                  ? <span className="comparisonBadge comparisonBadgePdf">เฉพาะ PDF</span>
                                  : matchInExcel
                                    ? <span className="comparisonBadge comparisonBadgeMatch">✅ ตรงกัน</span>
                                    : <span className="comparisonBadge comparisonBadgeMissing">❌ ไม่พบ</span>
                              ) : '-'}
                            </td>
                            <td className="addrBefore dataCell">{r.pdfSource || 'ไม่พบต้นทาง'}</td>
                            <td className="addrBefore dataCell">
                              {r.pdfDestination && r.pdfDestination !== 'ไม่พบจังหวัดปลายทาง' ? (
                                <span className="destinationValue">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                  {r.pdfDestination}
                                </span>
                              ) : (
                                <span className="destinationMissing">{r.pdfDestination}</span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              {paginationControls}
            </Card>
            <Card className="panel excelDataPanel">
              <h2 className="sectionHeading">
                ข้อมูลจาก Excel <span className="count">{filteredExcelRows.length > 0 ? `(${filteredExcelRows.length} แถว)` : ''}</span>
              </h2>
              <div className="tableScroll">
                <table>
                  <thead>
                    {customer === 'NDC' ? (
                      <tr>
                        <th>Date</th>
                        <th>
                          <div className="excelColumnHeader">
                            PO Number
                            <ColumnFilterDropdown options={excelOptions.ponumber} selected={excelFilters.ponumber} onChange={(val) => handleExcelFilterChange('ponumber', val)} />
                          </div>
                        </th>
                        <th>Destination</th>
                        <th>
                          <div className="excelColumnHeader">
                            Ship to name
                            <ColumnFilterDropdown options={excelOptions.shipToParty} selected={excelFilters.shipToParty} onChange={(val) => handleExcelFilterChange('shipToParty', val)} />
                          </div>
                        </th>
                      </tr>
                    ) : (
                      <tr>
                        {[
                          { key: 'soldToParty', label: 'Sold To Party' },
                          { key: 'ponumber', label: 'PO Number' },
                          ...customerTableColumns
                        ].map(column => (
                          <th key={column.key}>
                            <div className="excelColumnHeader">
                              {column.label}
                              <ColumnFilterDropdown
                                options={excelOptions[column.key]}
                                selected={excelFilters[column.key]}
                                onChange={(values) => handleExcelFilterChange(column.key, values)}
                              />
                            </div>
                          </th>
                        ))}
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {!filteredExcelRows.length ? (
                      <tr><td colSpan={customer === 'NDC' ? 4 : customerTableColumns.length + 2} className="tableEmpty">{excelRows.length > 0 ? 'ไม่พบข้อมูลที่ตรงกับตัวกรอง' : 'อัปโหลดไฟล์ Excel เพื่อแสดงข้อมูล'}</td></tr>
                    ) : (
                      filteredExcelRows.map((row, index) => {
                        if (customer === 'NDC') {
                          return (
                            <tr key={`${row.source}-${index}`}>
                              <td>{row.date || '—'}</td>
                              <td className="dataCell font-mono">{row.ponumber || '—'}</td>
                              <td>{row.province || '—'}</td>

                              <td>{row.destinationLocationName || row.shipToParty || '—'}</td>
                            </tr>
                          );
                        }
                        return (
                          <tr key={`${row.source}-${index}`}>
                            <td className="dataCell">{row.ponumber || '—'}</td>
                            <td>{row.soldToParty || '—'}</td>
                            {customerTableColumns.map(column => (
                              <td key={column.key}>{row[column.key] || '—'}</td>
                            ))}
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <Card className="panel previewPanel">
            <h2 className="sectionHeading">ตัวอย่างหน้าเอกสาร</h2>
            <div className="previewBody">
              <div className="previewControls" aria-label="ควบคุมตัวอย่างเอกสาร">
                <Button variant="outline" size="icon" disabled={selectedResultIndex <= 0} onClick={() => selectPreviewPage(selectedResultIndex - 1)} aria-label="หน้าก่อนหน้า">‹</Button>
                <Select
                  value={activeSelectedPage?.id || ''}
                  onChange={(event) => selectPreviewPage(filteredResults.findIndex(result => result.id === event.target.value))}
                  disabled={!filteredResults.length}
                  aria-label="เลือกหน้าเอกสาร"
                >
                  {!filteredResults.length && <option value="">ยังไม่มีหน้า</option>}
                  {filteredResults.map(result => (
                    <option key={result.id} value={result.id}>
                      {result.pdfOrderNumber !== ORDER_NUMBER_NOT_FOUND
                        ? `PO: ${result.pdfOrderNumber} (หน้า ${formatPageRange(result.pages)})`
                        : `หน้า ${formatPageRange(result.pages)}`}
                    </option>
                  ))}
                </Select>
                <Button variant="outline" size="icon" disabled={selectedResultIndex < 0 || selectedResultIndex >= filteredResults.length - 1} onClick={() => selectPreviewPage(selectedResultIndex + 1)} aria-label="หน้าถัดไป">›</Button>
                <div className="previewDivider"></div>

                <Button variant="outline" size="icon" disabled={!activeSelectedPage || previewZoom <= 0.5} onClick={() => setPreviewZoom(value => Math.max(0.5, value - 0.25))} aria-label="ซูมออก">−</Button>
                <span className="zoomValue">{Math.round(previewZoom * 100)}%</span>
                <Button variant="outline" size="icon" disabled={!activeSelectedPage || previewZoom >= 2} onClick={() => setPreviewZoom(value => Math.min(2, value + 0.25))} aria-label="ซูมเข้า">+</Button>
                <Button variant="ghost" size="sm" disabled={!activeSelectedPage || previewZoom === 1} onClick={() => setPreviewZoom(1)}>รีเซ็ต</Button>
              </div>
              {!activeSelectedPage ? (
                <div className="previewEmpty">
                  <svg className="previewEmptyIcon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--line)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  <br />
                  เลือกแถวในตารางด้านซ้าย<br />เพื่อดูตัวอย่างหน้านั้น
                </div>
              ) : (
                <>
                  <div className="previewCanvas">
                    {activeSelectedPage.thumbDataUrls.map((thumb, idx) => (
                      <div key={idx} className="previewPage">
                        <span className="previewPageNumber">
                          หน้า {activeSelectedPage.pages[idx]}
                        </span>
                        <img
                          className={`previewImage previewZoom${Math.round(previewZoom * 100)}`}
                          src={thumb}
                          alt={`Page ${activeSelectedPage.pages[idx]}`}
                          style={{ width: `${previewZoom * 100}%`, height: 'auto', display: 'block', margin: '0 auto' }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="previewDetail">
                    <dl>
                      <dt>หน้า</dt>
                      <dd className="mono pageDetailValue">
                        {formatPageRange(activeSelectedPage.pages)} / {filteredResults.length} PO
                      </dd>
                      <dt>แหล่งข้อความ</dt>
                      <dd>
                        {activeSelectedPage.source === 'text-layer' ? 'ข้อความในไฟล์ PDF' : 'OCR (ไม่พบชั้นข้อความ)'}
                        {activeSelectedPage.source === 'ocr' && activeSelectedPage.ocrConfidence !== null && (
                          <span className={`tag ${activeSelectedPage.ocrConfidence < OCR_LOW_CONFIDENCE ? 'tagReview' : 'tagMatch'} ocrConfidenceTag`}>
                            ความมั่นใจ OCR {Math.round(activeSelectedPage.ocrConfidence)}%
                          </span>
                        )}
                      </dd>
                      <dt>ต้นทางจาก PDF</dt><dd className="previewSource">{activeSelectedPage.pdfSource || 'ไม่พบต้นทาง'}</dd>

                      <dt>ปลายทางจาก PDF</dt>
                      <dd>
                        <span className={`tag destinationTag ${activeSelectedPage.pdfDestination !== 'ไม่พบจังหวัดปลายทาง' ? 'tagMatch' : 'tagMismatch'}`}>
                          {activeSelectedPage.pdfDestination || 'ไม่พบปลายทาง'}
                        </span>
                      </dd>
                    </dl>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>

        <footer className="note pageFooter">
          by Process Excellence Team 2026
        </footer>
      </main>

      <div className="printArea">
        {printPagesList
          .flatMap(p => p.thumbDataUrls.map((thumb, idx) => ({ thumb, pageNum: p.pages[idx] })))
          .map((item, i) => (
            <div key={i} className="printPage">
              {item.thumb && <img src={item.thumb} alt={`Print Page ${item.pageNum}`} />}
            </div>
          ))}
      </div>
    </div>
  );
}