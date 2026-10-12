(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoChecker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tesseract.js/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf-results.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalWorkerOptions"].workerSrc = '/pdf.worker.min.mjs';
// ================== Helpers ==================
const POSTAL_DB = {
    '20150': {
        tambon: 'หนองปลาไหล',
        amphoe: 'บางละมุง',
        changwat: 'ชลบุรี'
    },
    '20260': {
        tambon: 'บางละมุง',
        amphoe: 'บางละมุง',
        changwat: 'ชลบุรี'
    },
    '10110': {
        tambon: 'คลองตัน',
        amphoe: 'วัฒนา',
        changwat: 'กรุงเทพมหานคร'
    },
    '10900': {
        tambon: 'ลาดยาว',
        amphoe: 'จตุจักร',
        changwat: 'กรุงเทพมหานคร'
    },
    '10310': {
        tambon: 'บางกะปิ',
        amphoe: 'ห้วยขวาง',
        changwat: 'กรุงเทพมหานคร'
    },
    '20000': {
        tambon: 'บางปลาสร้อย',
        amphoe: 'เมืองชลบุรี',
        changwat: 'ชลบุรี'
    }
};
const ITEM_CODE_REGEX = /\b[A-Z0-9]{2,}[-\/]?[A-Z0-9]{2,}\b/g;
const PREVIEW_SCALE = 1.4;
const OCR_SCALE = 5.0;
const OCR_LOW_CONFIDENCE = 60;
const CUSTOMER_EXCEL_COLUMNS = {
    Lotus: {
        ship: [
            'Ship-to Party',
            'Ship-to party',
            'Ship-to-Party Name1',
            'ส่งสินค้าไปที่',
            'Ship To Address'
        ],
        description: [
            'Product description',
            'Material Description',
            'รายการ',
            'Description'
        ]
    },
    'CJ Express': {
        ship: [
            'สถานที่ส่งของ',
            'Ship-to Address',
            'Ship To Address'
        ],
        description: [
            'ชื่อสินค้า',
            'Product Description',
            'Description'
        ]
    },
    'CP All': {
        delivery: [
            'นำส่ง',
            'Delivery'
        ],
        address: [
            'Ship-to Party',
            'Ship-to party',
            'ที่อยู่',
            'Address',
            'Ship-to Address'
        ],
        description: [
            'Product description',
            'Material Description',
            'รายการ',
            'Description'
        ]
    },
    Makro: {
        ship: [
            'Ship-to Party',
            'Ship-to-Party Name1',
            'ส่งสินค้าไปที่',
            'Ship To Address'
        ],
        description: [
            'Material Description',
            'Product description',
            'รายการ',
            'Description'
        ]
    }
};
function repairExcelText(value) {
    const text = String(value ?? '');
    const hasMojibakeMarker = /(?:à|เธ|เน)[\u0e00-\u0e7f]|[\u0080-\u009f]/.test(text);
    if (!text || !hasMojibakeMarker) return text;
    const cp1252ToByte = {
        0x20AC: 0x80,
        0x201A: 0x82,
        0x0192: 0x83,
        0x201E: 0x84,
        0x2026: 0x85,
        0x2020: 0x86,
        0x2021: 0x87,
        0x02C6: 0x88,
        0x2030: 0x89,
        0x0160: 0x8A,
        0x2039: 0x8B,
        0x0152: 0x8C,
        0x017D: 0x8E,
        0x2018: 0x91,
        0x2019: 0x92,
        0x201C: 0x93,
        0x201D: 0x94,
        0x2022: 0x95,
        0x2013: 0x96,
        0x2014: 0x97,
        0x02DC: 0x98,
        0x2122: 0x99,
        0x0161: 0x9A,
        0x203A: 0x9B,
        0x0153: 0x9C,
        0x017E: 0x9E,
        0x0178: 0x9F
    };
    const bytes = new Uint8Array(text.length);
    for(let i = 0; i < text.length; i++){
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
    } catch  {
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
    '\u0435': 'ข'
};
delete OCR_GLYPH_MAP['\u042f'];
function normalizePdfText(rawText) {
    return normalizeOcrArtifacts(rawText).replace(/\u0e4d\u0e32/g, '\u0e33') // นํา -> นำ
    .replace(/\s+/g, ' ').trim();
}
// label ไทยที่ทนต่อ OCR: ช่องว่างแทรกกลางคำ (เช่น "สินค ้า") + ำ/า สลับกัน
function loose(label) {
    return label.split('').map((ch)=>ch === 'ำ' ? '(?:ำ|า)' : ch).join('\\s*');
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
    sendTo: loose('ส่งสินค้าไปที่')
};
const NAMSONG = 'น\\s*(?:ำ|่\\s*า|า)\\s*ส\\s*่?\\s*ง'; // นำส่ง / น่าส่ง
const FOOTER = `อ้างถึง|หมายเหตุ|Department|${loose('ผู้อนุมัติ')}|P/R|${loose('ผู้ซื้อ')}`;
const PHONE_RX = '0\\d{1,2}-?\\d{3}-?\\d{3,4}';
function stripPhone(text) {
    const re = new RegExp(`${L.phone}${SEP}(?:${PHONE_RX}(?:\\s*(?:ต่อ|,|/)\\s*${PHONE_RX})*)?`, 'gi');
    return text.replace(re, ' ').replace(/\s{2,}/g, ' ').trim();
}
// ---------- จังหวัด ----------
const THAI_PROVINCES = [
    'กรุงเทพมหานคร',
    'กระบี่',
    'กาญจนบุรี',
    'กาฬสินธุ์',
    'กำแพงเพชร',
    'ขอนแก่น',
    'จันทบุรี',
    'ฉะเชิงเทรา',
    'ชลบุรี',
    'ชัยนาท',
    'ชัยภูมิ',
    'ชุมพร',
    'เชียงราย',
    'เชียงใหม่',
    'ตรัง',
    'ตราด',
    'ตาก',
    'นครนายก',
    'นครปฐม',
    'นครพนม',
    'นครราชสีมา',
    'นครศรีธรรมราช',
    'นครสวรรค์',
    'นนทบุรี',
    'นราธิวาส',
    'น่าน',
    'บึงกาฬ',
    'บุรีรัมย์',
    'ปทุมธานี',
    'ประจวบคีรีขันธ์',
    'ปราจีนบุรี',
    'ปัตตานี',
    'พระนครศรีอยุธยา',
    'พะเยา',
    'พังงา',
    'พัทลุง',
    'พิจิตร',
    'พิษณุโลก',
    'เพชรบุรี',
    'เพชรบูรณ์',
    'แพร่',
    'ภูเก็ต',
    'มหาสารคาม',
    'มุกดาหาร',
    'แม่ฮ่องสอน',
    'ยโสธร',
    'ยะลา',
    'ร้อยเอ็ด',
    'ระนอง',
    'ระยอง',
    'ราชบุรี',
    'ลพบุรี',
    'ลำปาง',
    'ลำพูน',
    'เลย',
    'ศรีสะเกษ',
    'สกลนคร',
    'สงขลา',
    'สตูล',
    'สมุทรปราการ',
    'สมุทรสงคราม',
    'สมุทรสาคร',
    'สระแก้ว',
    'สระบุรี',
    'สิงห์บุรี',
    'สุโขทัย',
    'สุพรรณบุรี',
    'สุราษฎร์ธานี',
    'สุรินทร์',
    'หนองคาย',
    'หนองบัวลำภู',
    'อ่างทอง',
    'อำนาจเจริญ',
    'อุดรธานี',
    'อุตรดิตถ์',
    'อุทัยธานี',
    'อุบลราชธานี'
];
const PROVINCE_ALIAS = {
    'กทม': 'กรุงเทพมหานคร',
    'กรุงเทพ': 'กรุงเทพมหานคร',
    'อยุธยา': 'พระนครศรีอยุธยา',
    'โคราช': 'นครราชสีมา'
};
const PROVINCE_KEYS = [
    ...THAI_PROVINCES,
    ...Object.keys(PROVINCE_ALIAS)
].sort(_c = (a, b)=>b.length - a.length);
_c1 = PROVINCE_KEYS;
const DEST_NOT_FOUND = 'ไม่พบจังหวัดปลายทาง';
const SOURCE_NOT_FOUND = 'ไม่พบต้นทาง';
const ORDER_NUMBER_NOT_FOUND = 'ไม่พบเลขที่';
// startsWith ทำให้ชื่อที่ถูกตัดท้าย เช่น "กรุงเทพม" ก็ยังจับได้
function resolveProvince(word) {
    const w = String(word || '').replace(/[ฯ.]/g, '');
    for (const key of PROVINCE_KEYS)if (w.startsWith(key)) return PROVINCE_ALIAS[key] || key;
    return '';
}
// รหัสไปรษณีย์ 5 หลักที่ "ยืนเดี่ยว" (ไม่ใช่ส่วนของเลขยาว/วันที่/ทศนิยม)
function findPostalCodes(text) {
    const out = [];
    for (const m of text.matchAll(/\d+/g)){
        if (m[0].length !== 5) continue;
        const before = text.slice(Math.max(0, m.index - 2), m.index);
        const after = text.slice(m.index + 5, m.index + 7);
        if (/\d[\/.,\-]$/.test(before) || /^[\/.,\-]\d/.test(after)) continue;
        out.push({
            code: m[0],
            index: m.index
        });
    }
    return out;
}
// เลขไปรษณีย์ -> จังหวัด: POSTAL_DB ก่อน, ไม่เจอค่อยดูคำไทยที่อยู่หน้าเลข ("ชลบุรี 20150")
// ไม่ผ่านทั้งสองแบบ = ไม่ใช่รหัสไปรษณีย์ (กันรหัสสินค้า/รหัสสาขา 5 หลัก)
function provinceFromPostal(code, textBefore) {
    const rec = typeof POSTAL_DB !== 'undefined' && POSTAL_DB ? POSTAL_DB[code] : null;
    if (rec && rec.changwat) return resolveProvince(rec.changwat) || rec.changwat;
    const w = textBefore.trimEnd().match(/([ก-๙]+)$/);
    return w ? resolveProvince(w[1]) : '';
}
function findProvinceInSlice(slice) {
    for (const { code, index } of findPostalCodes(slice)){
        const province = provinceFromPostal(code, slice.slice(0, index));
        if (province) return {
            province,
            postcode: code,
            end: index + 5
        };
    }
    return null;
}
// ทางสำรอง (ไม่มีเลขไปรษณี): จ.xxx -> คำก่อนเลข 5 หลัก -> ชื่อจังหวัดตรงๆ
function scanProvinceName(t) {
    for (const m of t.matchAll(/(?:จ\s*\.|จังหวัด)\s*([ก-๙]+)/g)){
        const p = resolveProvince(m[1]);
        if (p) return p;
    }
    for (const m of t.matchAll(/([ก-๙]+)\s*\d{5}(?!\d)/g)){
        const p = resolveProvince(m[1]);
        if (p) return p;
    }
    for (const key of PROVINCE_KEYS){
        const hit = key.length <= 4 ? new RegExp(`(?:^|\\s|\\.)${key}(?=\\s|\\d|$)`).test(t) : t.includes(key);
        if (hit) return PROVINCE_ALIAS[key] || key;
    }
    return '';
}
// ---------- กติกาของแต่ละห้าง ----------
const RULES_LOTUS_MAKRO = {
    source: {
        label: [
            L.maker,
            L.orderer
        ],
        end: `${L.sendTo}|${FOOTER}`,
        maxLen: 300
    },
    dest: {
        label: [
            L.sendTo
        ],
        end: `${L.seq}|Page|${FOOTER}`,
        maxLen: 300
    }
};
const PROVINCE_RULES = {
    'CJ Express': {
        source: {
            label: [
                L.supplier,
                L.orderer
            ],
            end: `${L.shipTo}|${FOOTER}`,
            maxLen: 300,
            fallbackTop: true
        },
        dest: {
            label: [
                L.shipTo
            ],
            end: `${L.seq}|${L.code}(?!\\s*${L.postal})|${L.itemName}|${FOOTER}`,
            maxLen: 400
        }
    },
    'CP All': {
        source: {
            label: [
                L.seller
            ],
            end: `${NAMSONG}|${FOOTER}`,
            maxLen: 300
        },
        dest: {
            label: [
                NAMSONG
            ],
            end: `${L.seller}|${FOOTER}`,
            maxLen: 300
        }
    },
    Makro: RULES_LOTUS_MAKRO,
    Lotus: RULES_LOTUS_MAKRO
};
const LEADING_CODE = /^\d{4,14}\s*/; // รหัสผู้ขาย/สาขา/ร้านที่มาก่อนที่อยู่ (ไม่ใช่รหัสไปรษณีย์)
function locateProvince(rawText, customer, side) {
    const text = normalizePdfText(rawText);
    const rule = (PROVINCE_RULES[customer] || RULES_LOTUS_MAKRO)[side];
    const endRx = rule.end ? new RegExp(rule.end, 'i') : null;
    const groups = [];
    for (const label of rule.label || []){
        const group = [];
        for (const m of text.matchAll(new RegExp(label + SEP, 'gi'))){
            const rest = text.slice(m.index + m[0].length);
            const end = endRx && endRx.exec(rest);
            group.push((end ? rest.slice(0, end.index) : rest).slice(0, rule.maxLen).replace(LEADING_CODE, '').trim());
        }
        if (group.length) groups.push(group);
    }
    if (!groups.length && rule.fallbackTop) {
        const cut = new RegExp(L.shipTo, 'i').exec(text);
        groups.push([
            (cut && cut.index > 0 ? text.slice(0, cut.index) : text).slice(0, 800)
        ]);
    }
    for (const group of groups){
        for (const s of group){
            const hit = findProvinceInSlice(s);
            if (hit) return {
                province: hit.province,
                postcode: hit.postcode,
                snippet: s.slice(0, hit.end).trim()
            };
        }
        for (const s of group){
            const p = scanProvinceName(s);
            if (p) return {
                province: p,
                postcode: '',
                snippet: s.trim()
            };
        }
    }
    const first = groups[0] && groups[0][0];
    return {
        province: '',
        postcode: '',
        snippet: (first || '').slice(0, 200).trim()
    };
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
function preprocessForOcr(canvas) {
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height);
    const d = imageData.data;
    const gray = new Uint8ClampedArray(width * height);
    for(let i = 0, p = 0; i < d.length; i += 4, p++){
        gray[p] = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    }
    let sumB = 0, wB = 0, maxVar = 0, threshold = 127;
    const hist = new Array(256).fill(0);
    for(let p = 0; p < gray.length; p++)hist[gray[p]]++;
    let sum = 0;
    for(let t = 0; t < 256; t++)sum += t * hist[t];
    for(let t = 0; t < 256; t++){
        wB += hist[t];
        if (wB === 0) continue;
        const wF = gray.length - wB;
        if (wF === 0) break;
        sumB += t * hist[t];
        const mB = sumB / wB, mF = (sum - sumB) / wF;
        const varBetween = wB * wF * (mB - mF) * (mB - mF);
        if (varBetween > maxVar) {
            maxVar = varBetween;
            threshold = t;
        }
    }
    for(let i = 0, p = 0; i < d.length; i += 4, p++){
        const v = gray[p] > threshold ? 255 : 0;
        d[i] = d[i + 1] = d[i + 2] = v;
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
    'Order\\s*(?:No\\.?|Number|#)'
];
// ลบ \\s* ออกเพื่อบังคับให้เครื่องหมายโคลอนติดกับคำว่าเลขที่เสมอ
const LABEL_COLON = loose('เลขที่') + '[:：]';
const MAKRO_LABEL = loose('เลขที่ใบสั่งซื้อ') + '\\s*[:：]?\\s*(?:' + loose('วันที่') + '.{0,10}' + loose('สินค้า') + '\\s*[:：]?\\s*\\d+\\s*(?:วัน|วั)\\s*)?';
const CPALL_LABEL = loose('เลขที่') + '\\s*[:：]\\s*(?:' + loose('กำหนดส่ง') + '\\s*[:：]?\\s*\\d+\\s*(?:วัน|วั)\\s*(?:' + loose('ตามเงื่อนไข') + ')?\\s*)?';
const LOTUS_LABEL = loose('ใบสั่งซื้อสินค้า');
const ORDER_RULES = {
    'Makro': {
        labels: [
            MAKRO_LABEL,
            loose('เลขที่ใบสั่งซื้อ')
        ],
        relaxed: true
    },
    'Lotus': {
        labels: [
            LOTUS_LABEL,
            LABEL_COLON
        ],
        relaxed: true
    },
    'CP All': {
        labels: [
            CPALL_LABEL,
            LABEL_COLON
        ],
        relaxed: true
    }
};
const ORDER_PREFIX = '(?:(?:P\\.?\\s*O\\.?|No\\.?|Number|#)\\s*[:：.]?\\s*)?';
const ORDER_TOKEN = '([A-Za-z0-9][A-Za-z0-9\\-\\/_.]{2,24})';
function cleanOrderToken(tok, relaxed) {
    const v = String(tok || '').replace(/[.\-\/_]+$/, '');
    if (!/\d/.test(v)) return '';
    if (/^\d{13}$/.test(v)) return ''; // เลขผู้เสียภาษี
    if (/^\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{2,4}$/.test(v)) return ''; // วันที่
    if (relaxed) return v.length >= 4 ? v : '';
    if (v.length < 6) return '';
    if (/^\d{1,4}\/\d{1,4}$/.test(v)) return ''; // เลขที่บ้าน 188/1
    return v;
}
function extractAndCorrectAddress(rawText) {
    const cleaned = cleanOcrNoise(rawText);
    const postalMatch = cleaned.match(/\b\d{5}\b/);
    const houseMatch = cleaned.match(/\b(\d{1,4}\/\d{1,4}|\d{1,4})\b/);
    const mooMatch = cleaned.match(/ห[มน]ู?่?\s*(?:ที่)?\s*(\d{1,2})/);
    const result = {
        raw: rawText,
        cleaned,
        houseNo: houseMatch ? houseMatch[1] : null,
        moo: mooMatch ? mooMatch[1] : null,
        postcode: null,
        tambon: null,
        amphoe: null,
        changwat: null,
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
        return {
            text: r.cleaned || '(ไม่พบข้อความ)',
            formatted: false
        };
    }
    const text = [
        r.houseNo || '-',
        'หมู่ ' + (r.moo || '-'),
        'ต.' + r.tambon,
        'อ.' + r.amphoe,
        'จ.' + r.changwat,
        r.postcode
    ].join(' ');
    return {
        text,
        formatted: true
    };
}
function extractItemCodes(rawText) {
    const cleaned = (rawText || '').toUpperCase();
    const found = cleaned.match(ITEM_CODE_REGEX) || [];
    return [
        ...new Set(found.filter((c)=>!/^\d{5}$/.test(c)))
    ];
}
function extractPdfAddressText(rawText, customer) {
    return stripPhone(locateProvince(rawText, customer, 'dest').snippet);
}
function extractPdfOrderNumber(rawText, customer) {
    const text = normalizePdfText(rawText);
    // ================== [เริ่มส่วน Debug ] ==================
    //   console.log(`\n========== 🔍 กำลังตรวจสอบบิลของห้าง: ${customer} ==========`);
    //   // 1. สแกนหาคำว่า "เลขที่" ตรงๆ
    //   const searchKeyword = "เลขที่";
    //   const keywordIndex = text.indexOf(searchKeyword);
    //  if (keywordIndex !== -1) {
    //     console.log(`✅ คำว่า "${searchKeyword}" อยู่ที่ Index ${keywordIndex}`);
    //     // ปริ้นต์ข้อความรอบๆ ออกมาดูว่ามีอะไรแทรกอยู่ไหม
    //     console.log(`👉 ข้อความดิบแวดล้อม: >> "${text.slice(Math.max(0, keywordIndex - 30), keywordIndex + 80)}" <<`);
    //   } else {
    //     console.log(`❌ ไม่พบคำว่า "${searchKeyword}" เลย! (อาจเป็นรูปภาพที่ OCR อ่านเพี้ยน หรือตัวอักษรฉีกขาด)`);
    //     // ถ้าหาไม่เจอเลย ลองปริ้นต์ข้อความทั้งหน้าออกมาดู 500 ตัวอักษรแรก
    //     console.log(`📄 เนื้อหาดิบที่โค้ดเห็น: ${text.slice(0, 500)}...`);
    //   }
    // 2. 🎯 เรดาร์ตามหาเลข PO 
    // const targetPO = "43805348"; // <--- ⚠️ แก้เป็นเลข PO ของบิล Lotus ใบนี้
    // const poIndex = text.indexOf(targetPO);
    // if (poIndex !== -1) {
    //   console.log(`🎯 บิงโก! เจอเลข PO (${targetPO}) แอบอยู่ที่ Index ${poIndex}`);
    //   // ขยายวงการดึงข้อความรอบๆ ให้กว้างขึ้น จะได้เห็นบริบทชัดๆ
    //   console.log(`   👉 ข้อความรอบๆ ตัวเลข PO คือ: >> "${text.slice(Math.max(0, poIndex - 50), poIndex + 60)}" <<`);
    // } else {
    //   console.log(`🎯 ❌ ไม่เจอเลข ${targetPO} ในหน้านี้เลย`);
    // }
    // console.log("============================================================\n");
    // ================== [จบส่วน Debug] ==================
    if (ORDER_RULES[customer]) {
        const rule = ORDER_RULES[customer];
        for (const label of rule.labels){
            const regex = new RegExp(`${label}${SEP}${ORDER_PREFIX}${ORDER_TOKEN}`, 'gi');
            for (const m of text.matchAll(regex)){
                const v = cleanOrderToken(m[1], rule.relaxed);
                if (v) return v;
            }
        }
        // // 🚨 เรดาร์สายลับ: ถ้าหาตามกฎไม่เจอ ให้ปริ้นต์ Log ออกมาดูว่าเกิดอะไรขึ้น
        // console.log(`\n🚨 [${customer}] เจอบิลที่หาเลข PO ไม่พบ!`);
        // // ลองหาคำว่า "เลขที่" หรือ "ใบสั่งซื้อ" ว่ามันไปซ่อนอยู่ตรงไหน
        // const keywordIndex = text.indexOf("เลขที่") !== -1 ? text.indexOf("เลขที่") : text.indexOf("ใบสั่งซื้อ");
        // if (keywordIndex !== -1) {
        //   console.log(`👉 เจอคำคีย์เวิร์ด! ข้อความแวดล้อมคือ: >> "${text.slice(Math.max(0, keywordIndex - 20), keywordIndex + 80)}" <<`);
        // } else {
        //   console.log(`👉 หาคำคีย์เวิร์ดไม่เจอเลย! ข้อความ 300 ตัวอักษรแรกคือ: >> "${text.slice(0, 300)}" <<`);
        // }
        // console.log("--------------------------------------------------\n");
        return ORDER_NUMBER_NOT_FOUND;
    }
    for (const label of ORDER_LABELS){
        const regex = new RegExp(`${label}${SEP}${ORDER_PREFIX}${ORDER_TOKEN}`, 'gi');
        for (const m of text.matchAll(regex)){
            const v = cleanOrderToken(m[1]);
            if (v) return v;
        }
    }
    for (const m of text.matchAll(new RegExp(`${loose('เลขที่')}${SEP}${ORDER_TOKEN}`, 'gi'))){
        const v = cleanOrderToken(m[1]);
        if (v) return v;
    }
    console.log(`\n🚨 [${customer}] เจอบิลที่หาเลข PO ไม่พบ!`);
    console.log(`👉 ข้อความ 300 ตัวอักษรแรก: >> "${text.slice(0, 300)}" <<\n`);
    return ORDER_NUMBER_NOT_FOUND;
}
function extractPdfDestination(rawText, customer, addr, addressText) {
    const r = locateProvince(rawText, customer, 'dest');
    if (r.province) return r.province;
    if (addr && addr.changwat) return addr.changwat;
    return scanProvinceName(normalizePdfText(addressText || '')) || DEST_NOT_FOUND;
}
function normalizeOcrArtifacts(text) {
    let t = String(text || '').replace(/Ѽ\s*า/g, 'ำ').replace(/Ѽ/g, 'ื่').replace(/ҕ/g, '่').replace(/Ѱ/g, 'แ').replace(/นื่้า/g, 'น้ำ').replace(/นํ้า/g, 'น้ำ').replace(/น้ํา/g, 'น้ำ');
    for (const [from, to] of Object.entries(OCR_GLYPH_MAP)){
        t = t.split(from).join(to);
    }
    return t;
}
function extractPdfSource(rawText, customer) {
    return locateProvince(rawText, customer, 'source').province || SOURCE_NOT_FOUND;
}
function uniqueInOrder(values) {
    return [
        ...new Set(values.map((value)=>String(value || '').trim()).filter(Boolean))
    ];
}
function extractMakroBranch(rawText) {
    return rawText.match(/\b\d{10,14}\b\s*(สาขา[^\n|]+)/i)?.[1]?.trim() || '';
}
function extractPdfItems(rawText, customer) {
    const text = normalizePdfText(rawText);
    const results = [];
    if (customer === 'Lotus') {
        const lotusRegex = /\b\d{8,}_[A-Z0-9_]+_\s*(.+?)\s+\d+(?:\.\d+)?\s+\S+\s+[YNyn]\b/gi;
        for (const match of text.matchAll(lotusRegex)){
            let itemText = match[1].trim();
            itemText = itemText.replace(/นื่้า/g, 'น้ำ').replace(/นํ้า/g, 'น้ำ');
            results.push(itemText);
        }
        if (results.length > 0) {
            return [
                ...new Set(results)
            ];
        }
    }
    if (customer === 'CP All') {
        const cpAllRegex = /(?:^|\s)\d+\s+(\d{7})\s+(\d{13})\s+(.+?)(?=\s+\d+\.\d{2}\s+\d+\s+)/g;
        for (const match of text.matchAll(cpAllRegex)){
            let itemName = match[3].trim();
            itemName = itemName.replace(/นื่้า/g, 'น้ำ').replace(/นํ้า/g, 'น้ำ').replace(/^H\s*/i, '').replace(/น้ํา/g, 'น้ำ');
            results.push(itemName);
        }
        if (results.length > 0) {
            return [
                ...new Set(results)
            ];
        }
    }
    if (customer === 'Makro') {
        const makroRegex = /(?:^|\s)\d+\s+(.*?)\s*\(\s*(\d{13})\s*\/[^\)]+\)/g;
        for (const match of text.matchAll(makroRegex)){
            let itemName = match[1].trim();
            if (itemName.includes('สาขา')) {
                itemName = itemName.replace(/.*สาขา.*?(?:\d[\d,\.]*\s+)+/g, '');
            }
            itemName = itemName.replace(/นื่้า/g, 'น้ำ').replace(/นํ้า/g, 'น้ำ').replace(/^H\s*/i, '').replace(/น้ํา/g, 'น้ำ');
            results.push(itemName.trim());
        }
        if (results.length > 0) return [
            ...new Set(results)
        ];
    }
    if (customer === 'CJ Express') {
        const cjRegex = /(?:^|\s)\d+\s+(\d{13})\s+(\d{13})\s+(.+?)\s+\d+(?:\.\d+)?\s+[A-Za-z]+\/\d+/g;
        for (const match of text.matchAll(cjRegex)){
            let itemName = match[3].trim();
            itemName = itemName.replace(/นื่้า/g, 'น้ำ').replace(/นํ้า/g, 'น้ำ').replace(/^H\s*/i, '').replace(/น้ํา/g, 'น้ำ');
            results.push(itemName);
        }
        if (results.length > 0) return [
            ...new Set(results)
        ];
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
    return [
        ...new Set(results.filter(Boolean))
    ];
}
function getCustomerColumns(customer, headers) {
    const columnConfig = CUSTOMER_EXCEL_COLUMNS[customer] || CUSTOMER_EXCEL_COLUMNS.Lotus;
    const safeHeaders = headers || [];
    const normalized = safeHeaders.map(normalizeExcelHeader);
    const findColumn = (patterns, fallback)=>{
        if (!patterns) return fallback;
        const normalizedPatterns = patterns.map(normalizeExcelHeader);
        const index = normalized.findIndex((header)=>normalizedPatterns.some((pattern)=>header.includes(pattern)));
        return index >= 0 ? index : fallback;
    };
    switch(customer){
        case 'CJ Express':
            return {
                shipIdx: findColumn(columnConfig.ship, 0),
                descIdx: findColumn(columnConfig.description, 1)
            };
        case 'CP All':
            {
                const deliveryIdx = findColumn(columnConfig.delivery, 0);
                const addressIdx = findColumn(columnConfig.address, Math.min(deliveryIdx + 1, Math.max(0, safeHeaders.length - 1)));
                return {
                    shipIdx: addressIdx,
                    descIdx: findColumn(columnConfig.description, 1)
                };
            }
        case 'Makro':
            return {
                shipIdx: findColumn(columnConfig.ship, 0),
                descIdx: findColumn(columnConfig.description, 1)
            };
        case 'Lotus':
        default:
            return {
                shipIdx: findColumn(columnConfig.ship, 0),
                descIdx: findColumn(columnConfig.description, 1)
            };
    }
}
function mapExcelRows(rawRows, headers, customer) {
    const safeHeaders = headers || [];
    const { shipIdx, descIdx } = getCustomerColumns(customer, safeHeaders);
    const normalizedHeaders = safeHeaders.map(normalizeExcelHeader);
    const findHeaderValue = (row, patterns)=>{
        if (!patterns) return '';
        const normalizedPatterns = patterns.map(normalizeExcelHeader);
        const exactIndex = normalizedHeaders.findIndex((header)=>normalizedPatterns.includes(header));
        const index = exactIndex >= 0 ? exactIndex : normalizedHeaders.findIndex((header)=>normalizedPatterns.some((pattern)=>header.includes(pattern)));
        return index >= 0 ? repairExcelText(row[index]).trim() : '';
    };
    const safeRawRows = rawRows || [];
    return safeRawRows.filter((row)=>row && row.some((cell)=>String(cell || '').trim() !== '')).map((row)=>{
        // อัปเดตกลุ่มคำศัพท์ (Keywords) ให้ครอบคลุมไฟล์ SO, Log, Makro, Lotus, CP All ตามที่ระบุ
        const poNumber = findHeaderValue(row, [
            'ponumber',
            'purchaseorderno.'
        ]);
        const shipTo = findHeaderValue(row, [
            'shiptoparty',
            'shiptopartyname1',
            'ส่งสินค้าไปที่'
        ]);
        const soldTo = findHeaderValue(row, [
            'soldtoparty'
        ]);
        const productDesc = findHeaderValue(row, [
            'productdescription',
            'materialdescription'
        ]);
        return {
            // ใช้ค่าเริ่มต้นจาก column mapping หรือถ้าหาไม่เจอให้ดึงจาก dynamic search
            ship: repairExcelText(row[shipIdx]).trim() || shipTo,
            description: repairExcelText(row[descIdx]).trim() || productDesc,
            // ฟิลด์ข้อมูลหลักที่ใช้โชว์ในตาราง Excel ขวามือ
            ponumber: poNumber,
            soldToParty: soldTo,
            productdescription: productDesc,
            shipToParty: shipTo,
            // ฟิลด์ข้อมูลอ้างอิงเพิ่มเติม
            shipToName: findHeaderValue(row, [
                'name1',
                'shiptopartyname1'
            ]),
            source: findHeaderValue(row, [
                'soldtopartyname1',
                'soldtoname1'
            ]),
            salesorder: findHeaderValue(row, [
                'salesorder',
                'salesdocument'
            ]),
            raw: row
        };
    });
}
function CheckboxDropdown({ id, label, options, selected, onChange, disabled, hint }) {
    const toggleOption = (option)=>{
        onChange(selected.includes(option) ? selected.filter((value)=>value !== option) : [
            ...selected,
            option
        ]);
    };
    const selectAll = ()=>onChange([
            ...options
        ]);
    const clearAll = ()=>onChange([]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "filterGroup",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "filterDropdown",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        id: id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filterSummaryLabel",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this),
                            selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filterCount",
                                children: selected.length
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 657,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterMenu",
                        children: [
                            options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filterEmpty",
                                children: "ยังไม่มีข้อมูล"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this) : options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "filterOption",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            checked: selected.includes(option),
                                            disabled: disabled,
                                            onChange: ()=>toggleOption(option)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 664,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: option
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 665,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, option, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, this)),
                            options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterActions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: selectAll,
                                        disabled: disabled || options.length === 0,
                                        children: "เลือกทั้งหมด"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: clearAll,
                                        disabled: disabled || selected.length === 0,
                                        children: "ล้าง"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 669,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 654,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                className: "filterHint",
                children: hint
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 653,
        columnNumber: 5
    }, this);
}
_c2 = CheckboxDropdown;
// ================== ส่วนใหม่: ฟิลเตอร์แบบ Google Sheets ในหัวตาราง Excel ==================
function ColumnFilterDropdown({ options, selected, onChange }) {
    const toggleOption = (option)=>{
        onChange(selected.includes(option) ? selected.filter((v)=>v !== option) : [
            ...selected,
            option
        ]);
    };
    const isActive = selected.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "tableFilterDropdown",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: isActive ? 'active' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: isActive ? "currentColor" : "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 692,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 691,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 690,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tableFilterMenu",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tableFilterActions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "tableFilterSelectAll",
                                onClick: ()=>onChange([
                                        ...options
                                    ]),
                                children: "เลือกทั้งหมด"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 697,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "tableFilterClear",
                                onClick: ()=>onChange([]),
                                children: "ล้าง"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 696,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tableFilterOptions",
                        children: [
                            options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tableFilterEmpty",
                                children: "ไม่มีข้อมูล"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 701,
                                columnNumber: 36
                            }, this),
                            options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "tableFilterOption",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: selected.includes(opt),
                                            onChange: ()=>toggleOption(opt)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            title: opt,
                                            children: opt || '(ว่าง)'
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 705,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 700,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 695,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 689,
        columnNumber: 5
    }, this);
}
_c3 = ColumnFilterDropdown;
// =========================================================================================
const RESULTS_PER_PAGE = 10;
function PoChecker() {
    _s();
    const [pdfFiles, setPdfFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [excelSources, setExcelSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('CP All');
    const excelRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PoChecker.useMemo[excelRows]": ()=>excelSources.flatMap({
                "PoChecker.useMemo[excelRows]": (source)=>mapExcelRows(source.rawRows, source.headers, customer)
            }["PoChecker.useMemo[excelRows]"])
    }["PoChecker.useMemo[excelRows]"], [
        excelSources,
        customer
    ]);
    const [selectedSources, setSelectedSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSites, setSelectedSites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Excel Column Filters State ---
    const [excelFilters, setExcelFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ponumber: [],
        shipToParty: [],
        soldToParty: [],
        productdescription: []
    });
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        active: false,
        text: '',
        current: 0,
        total: 0
    });
    const [pageResults, setPageResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPage, setSelectedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewZoom, setPreviewZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [resultsPage, setResultsPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [printPagesList, setPrintPagesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPrintPages, setSelectedPrintPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Drag & Drop States ---
    const [isPdfDragging, setIsPdfDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExcelDragging, setIsExcelDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Drag & Drop Handlers ---
    const handlePdfDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handlePdfDragOver]": (e)=>{
            e.preventDefault();
            setIsPdfDragging(true);
        }
    }["PoChecker.useCallback[handlePdfDragOver]"], []);
    const handlePdfDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handlePdfDragLeave]": ()=>setIsPdfDragging(false)
    }["PoChecker.useCallback[handlePdfDragLeave]"], []);
    const handlePdfDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handlePdfDrop]": (e)=>{
            e.preventDefault();
            setIsPdfDragging(false);
            if (isProcessing) return;
            const files = [
                ...e.dataTransfer.files
            ].filter({
                "PoChecker.useCallback[handlePdfDrop].files": (f)=>f.type === 'application/pdf' || /\.pdf$/i.test(f.name)
            }["PoChecker.useCallback[handlePdfDrop].files"]);
            if (files.length) setPdfFiles({
                "PoChecker.useCallback[handlePdfDrop]": (curr)=>[
                        ...curr,
                        ...files
                    ]
            }["PoChecker.useCallback[handlePdfDrop]"]);
        }
    }["PoChecker.useCallback[handlePdfDrop]"], [
        isProcessing
    ]);
    const handleExcelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handleExcelChange]": async (e)=>{
            const input = e.target;
            const files = [
                ...input.files
            ];
            if (!files.length) return;
            try {
                const sources = (await Promise.all(files.map({
                    "PoChecker.useCallback[handleExcelChange].sources": (file)=>new Promise({
                            "PoChecker.useCallback[handleExcelChange].sources": (resolve, reject)=>{
                                const reader = new FileReader();
                                reader.onload = ({
                                    "PoChecker.useCallback[handleExcelChange].sources": (event)=>{
                                        try {
                                            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](new Uint8Array(event.target.result), {
                                                type: 'array'
                                            });
                                            const sheetSources = wb.SheetNames.map({
                                                "PoChecker.useCallback[handleExcelChange].sources.sheetSources": (sheetName)=>{
                                                    const sheet = wb.Sheets[sheetName];
                                                    const json = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet, {
                                                        header: 1,
                                                        defval: ''
                                                    });
                                                    return json.length ? {
                                                        headers: json[0],
                                                        rawRows: json.slice(1),
                                                        name: `${file.name} / ${sheetName}`
                                                    } : null;
                                                }
                                            }["PoChecker.useCallback[handleExcelChange].sources.sheetSources"]).filter(Boolean);
                                            resolve(sheetSources);
                                        } catch (error) {
                                            reject(error);
                                        }
                                    }
                                })["PoChecker.useCallback[handleExcelChange].sources"];
                                reader.onerror = ({
                                    "PoChecker.useCallback[handleExcelChange].sources": ()=>reject(new Error(`อ่านไฟล์ ${file.name} ไม่สำเร็จ`))
                                })["PoChecker.useCallback[handleExcelChange].sources"];
                                reader.readAsArrayBuffer(file);
                            }
                        }["PoChecker.useCallback[handleExcelChange].sources"])
                }["PoChecker.useCallback[handleExcelChange].sources"]))).flat();
                setSelectedSites([]);
                setSelectedSources([]);
                setSelectedItems([]);
                setExcelFilters({
                    ponumber: [],
                    shipToParty: [],
                    soldToParty: [],
                    productdescription: []
                });
                setExcelSources({
                    "PoChecker.useCallback[handleExcelChange]": (currentSources)=>[
                            ...currentSources,
                            ...sources
                        ]
                }["PoChecker.useCallback[handleExcelChange]"]);
            } catch (err) {
                const message = err instanceof Error ? err.message : String(err);
                alert('อ่านไฟล์ Excel ไม่สำเร็จ: ' + message);
            } finally{
                if ('value' in input) input.value = '';
            }
        }
    }["PoChecker.useCallback[handleExcelChange]"], []);
    const handleExcelDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handleExcelDragOver]": (e)=>{
            e.preventDefault();
            setIsExcelDragging(true);
        }
    }["PoChecker.useCallback[handleExcelDragOver]"], []);
    const handleExcelDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handleExcelDragLeave]": ()=>setIsExcelDragging(false)
    }["PoChecker.useCallback[handleExcelDragLeave]"], []);
    const handleExcelDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PoChecker.useCallback[handleExcelDrop]": (e)=>{
            e.preventDefault();
            setIsExcelDragging(false);
            const files = [
                ...e.dataTransfer.files
            ].filter({
                "PoChecker.useCallback[handleExcelDrop].files": (f)=>/\.(xlsx|xls|csv)$/i.test(f.name)
            }["PoChecker.useCallback[handleExcelDrop].files"]);
            if (files.length) handleExcelChange({
                target: {
                    files
                }
            });
        }
    }["PoChecker.useCallback[handleExcelDrop]"], [
        handleExcelChange
    ]);
    const clearPdfFiles = (e)=>{
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
    const clearExcelFiles = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setExcelSources([]);
        setSelectedSources([]);
        setSelectedSites([]);
        setSelectedItems([]);
        setExcelFilters({
            ponumber: [],
            shipToParty: [],
            soldToParty: [],
            productdescription: []
        });
    };
    const handlePdfChange = (e)=>{
        const files = [
            ...e.target.files
        ];
        if (!isProcessing && files.length) setPdfFiles((currentFiles)=>[
                ...currentFiles,
                ...files
            ]);
        e.target.value = '';
    };
    const handleCustomerChange = (event)=>{
        const nextCustomer = event.target.value;
        setCustomer(nextCustomer);
        setSelectedSites([]);
        setSelectedSources([]);
        setSelectedItems([]);
        setExcelFilters({
            ponumber: [],
            shipToParty: [],
            soldToParty: [],
            productdescription: []
        });
        setPageResults([]);
        setSelectedPage(null);
        setSelectedPrintPages([]);
        setPrintPagesList([]);
        setResultsPage(1);
        setPreviewZoom(1);
    };
    const processPdf = async ()=>{
        if (!pdfFiles.length || isProcessing) return;
        setIsProcessing(true);
        setStatus({
            active: true,
            text: 'กำลังเตรียมระบบ…',
            current: 0,
            total: 0
        });
        setPageResults([]);
        setSelectedPage(null);
        setSelectedPrintPages([]);
        setResultsPage(1);
        let tesseractWorker = null;
        try {
            const pdfDocs = [];
            for (const file of pdfFiles){
                const buf = await file.arrayBuffer();
                pdfDocs.push(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"]({
                    data: buf
                }).promise);
            }
            const total = pdfDocs.reduce((pageCount, pdfDoc)=>pageCount + pdfDoc.numPages, 0);
            const results = [];
            let pageNumber = 0;
            let currentDocumentPO = ORDER_NUMBER_NOT_FOUND;
            for (const [documentIndex, pdfDoc] of pdfDocs.entries()){
                currentDocumentPO = ORDER_NUMBER_NOT_FOUND;
                const poGroups = {};
                for(let p = 1; p <= pdfDoc.numPages; p++){
                    pageNumber += 1;
                    setStatus({
                        active: true,
                        text: `กำลังอ่านข้อความหน้า ${pageNumber} จาก ${total}…`,
                        current: pageNumber,
                        total
                    });
                    const page = await pdfDoc.getPage(p);
                    const viewport = page.getViewport({
                        scale: PREVIEW_SCALE
                    });
                    const canvas = document.createElement('canvas');
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    await page.render({
                        canvasContext: canvas.getContext('2d'),
                        viewport
                    }).promise;
                    const thumbDataUrl = canvas.toDataURL('image/png');
                    const textContent = await page.getTextContent();
                    let rawText = textContent.items.map((i)=>i.str).join(' ').trim();
                    let source = 'text-layer';
                    let ocrConfidence = null;
                    if (rawText.length < 8) {
                        source = 'ocr';
                        if (!tesseractWorker) {
                            setStatus({
                                active: true,
                                text: 'กำลังโหลดโมดูล OCR (ครั้งแรกอาจใช้เวลาสักครู่)…',
                                current: pageNumber,
                                total
                            });
                            tesseractWorker = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createWorker('tha+eng', 1);
                            await tesseractWorker.setParameters({
                                tessedit_pageseg_mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PSM.SPARSE_TEXT,
                                user_defined_dpi: String(Math.round(OCR_SCALE * 72)),
                                preserve_interword_spaces: '1'
                            });
                        }
                        setStatus({
                            active: true,
                            text: `กำลัง OCR หน้า ${pageNumber} จาก ${total} (ความละเอียดสูง)…`,
                            current: pageNumber,
                            total
                        });
                        const ocrViewport = page.getViewport({
                            scale: OCR_SCALE
                        });
                        const ocrCanvas = document.createElement('canvas');
                        ocrCanvas.width = ocrViewport.width;
                        ocrCanvas.height = ocrViewport.height;
                        await page.render({
                            canvasContext: ocrCanvas.getContext('2d'),
                            viewport: ocrViewport
                        }).promise;
                        preprocessForOcr(ocrCanvas);
                        const { data } = await tesseractWorker.recognize(ocrCanvas);
                        rawText = data.text.trim();
                        ocrConfidence = data.confidence;
                    }
                    const addressText = extractPdfAddressText(rawText, customer);
                    const addr = extractAndCorrectAddress(addressText);
                    const formattedAddr = formatAddress(addr);
                    const pdfDestination = extractPdfDestination(rawText, customer, addr, addressText);
                    const pdfSource = extractPdfSource(rawText, customer);
                    let extractedPO = extractPdfOrderNumber(rawText, customer);
                    const keywords = [
                        'ใบสั่งซื้อ',
                        'purchase order',
                        'ผู้สั่งซื้อ',
                        'กำหนดส่ง',
                        'สถานที่ส่งของ',
                        'ผู้จำหน่าย',
                        'เลขประจำตัวผู้เสียภาษี',
                        'เงื่อนไขการชำระเงิน',
                        'วันที่ส่งสินค้า'
                    ];
                    const isNewDoc = keywords.filter((kw)=>normalizePdfText(rawText).includes(kw)).length >= 2;
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
                        pages: [
                            pageNumber
                        ],
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
                        thumbDataUrls: [
                            thumbDataUrl
                        ]
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPdfPageResult"])(results, poGroups, rowData, documentIndex, ORDER_NUMBER_NOT_FOUND);
                }
            }
            setPageResults(results);
            if (results.length > 0) setSelectedPage(results[0]);
            setPreviewZoom(1);
        } catch (error) {
            console.error(error);
            const message = error instanceof Error ? error.message : String(error);
            alert(`เกิดข้อผิดพลาดในการประมวลผล PDF: ${message}`);
        } finally{
            try {
                if (tesseractWorker) await tesseractWorker.terminate();
            } catch (cleanupError) {
                console.error('ปิดระบบ OCR ไม่สำเร็จ', cleanupError);
            } finally{
                setStatus({
                    active: false,
                    text: '',
                    current: 0,
                    total: 0
                });
                setIsProcessing(false);
            }
        }
    };
    const getFilteredResults = ()=>{
        return pageResults.filter((result)=>{
            const matchesSource = selectedSources.length === 0 || selectedSources.includes(result.pdfSource);
            const matchesSite = selectedSites.length === 0 || selectedSites.includes(result.pdfDestination);
            const matchesItem = selectedItems.length === 0 || result.pdfItems.some((item)=>selectedItems.includes(item));
            return matchesSource && matchesSite && matchesItem;
        });
    };
    const triggerPrint = (pagesList)=>{
        setPrintPagesList((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortPdfResultsByPage"])(pagesList));
        setTimeout(()=>window.print(), 100);
    };
    const togglePrintPage = (id)=>{
        setSelectedPrintPages((ids)=>ids.includes(id) ? ids.filter((value)=>value !== id) : [
                ...ids,
                id
            ]);
    };
    const toggleFilteredPrintPages = ()=>{
        const filteredIds = filteredResults.map((result)=>result.id);
        const allSelected = filteredIds.length > 0 && filteredIds.every((id)=>selectedPrintPages.includes(id));
        setSelectedPrintPages((ids)=>allSelected ? ids.filter((id)=>!filteredIds.includes(id)) : [
                ...new Set([
                    ...ids,
                    ...filteredIds
                ])
            ]);
    };
    const sources = uniqueInOrder(pageResults.map((result)=>result.pdfSource));
    const sites = uniqueInOrder(pageResults.map((result)=>result.pdfDestination));
    const availableItems = uniqueInOrder(pageResults.flatMap((result)=>result.pdfItems));
    const filteredResults = getFilteredResults();
    const totalResultPages = Math.max(1, Math.ceil(filteredResults.length / RESULTS_PER_PAGE));
    const currentResultsPage = Math.min(resultsPage, totalResultPages);
    const activeSelectedPage = filteredResults.find((result)=>result.id === selectedPage?.id) || filteredResults[0] || null;
    const visibleResults = filteredResults.slice((currentResultsPage - 1) * RESULTS_PER_PAGE, currentResultsPage * RESULTS_PER_PAGE);
    const selectedResultIndex = filteredResults.findIndex((result)=>result.id === activeSelectedPage?.id);
    const selectedPrintResults = pageResults.filter((result)=>selectedPrintPages.includes(result.id));
    const allFilteredPagesSelected = filteredResults.length > 0 && filteredResults.every((result)=>selectedPrintPages.includes(result.id));
    const selectPreviewPage = (index)=>{
        if (index >= 0 && index < filteredResults.length) setSelectedPage(filteredResults[index]);
    };
    const paginationControls = filteredResults.length > RESULTS_PER_PAGE ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pagination paginationCompact",
        "aria-label": "เลือกหน้าผลการตรวจสอบ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                disabled: currentResultsPage === 1,
                onClick: ()=>setResultsPage(currentResultsPage - 1),
                children: "ก่อนหน้า"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1028,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "paginationCurrent",
                children: [
                    "หน้า ",
                    currentResultsPage,
                    " / ",
                    totalResultPages
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1029,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                disabled: currentResultsPage === totalResultPages,
                onClick: ()=>setResultsPage(currentResultsPage + 1),
                children: "ถัดไป"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1030,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 1027,
        columnNumber: 5
    }, this) : null;
    // --- Excel Filter Logic ---
    const handleExcelFilterChange = (column, newSelected)=>{
        setExcelFilters((prev)=>({
                ...prev,
                [column]: newSelected
            }));
    };
    const excelOptions = {
        ponumber: uniqueInOrder(excelRows.map((r)=>r.ponumber)),
        shipToParty: uniqueInOrder(excelRows.map((r)=>r.shipToParty)),
        soldToParty: uniqueInOrder(excelRows.map((r)=>r.soldToParty)),
        productdescription: uniqueInOrder(excelRows.map((r)=>r.productdescription))
    };
    const filteredExcelRows = excelRows.filter((row)=>{
        return (excelFilters.ponumber.length === 0 || excelFilters.ponumber.includes(row.ponumber)) && (excelFilters.shipToParty.length === 0 || excelFilters.shipToParty.includes(row.shipToParty)) && (excelFilters.soldToParty.length === 0 || excelFilters.soldToParty.includes(row.soldToParty)) && (excelFilters.productdescription.length === 0 || excelFilters.productdescription.includes(row.productdescription));
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "po-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "po-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brandLine",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge",
                                    children: "Transport PO Sorting Tool"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 1060,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1059,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "po-title",
                                children: "ระบบคัดแยกเอกสารใบสั่งซื้อสินค้า"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1062,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "อัปโหลด PDF ใบสั่งซื้อสินค้า และไฟล์ Excel รายการสินค้า/ที่อยู่ เพื่อดูข้อมูลแยกตามไฟล์"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1063,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1058,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "brandIcon",
                        src: "/Brf Logos 2.png",
                        alt: "",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1065,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1057,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "po-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "uploads",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: `dropzone ${pdfFiles.length ? 'filled' : ''} ${isPdfDragging ? 'dragging' : ''}`,
                                onDragOver: handlePdfDragOver,
                                onDragLeave: handlePdfDragLeave,
                                onDrop: handlePdfDrop,
                                children: [
                                    pdfFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearPdfFiles,
                                        disabled: isProcessing,
                                        className: "clearFilesButton",
                                        title: "ล้างไฟล์ PDF",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1084,
                                                    columnNumber: 162
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1084,
                                                    columnNumber: 200
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1084,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1077,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "uploadLabel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "30",
                                                    height: "30",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 160
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "14 2 14 8 20 8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 231
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "16",
                                                            y1: "13",
                                                            x2: "8",
                                                            y2: "13"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 267
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "16",
                                                            y1: "17",
                                                            x2: "8",
                                                            y2: "17"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 306
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "10 9 9 9 8 9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 345
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1088,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "label",
                                                        children: "ไฟล์ PDF ใบสั่งซื้อสินค้า (เลือกได้หลายไฟล์)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1092,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `file ${isPdfDragging ? 'dragging' : ''}`,
                                                        children: pdfFiles.length ? `${pdfFiles.length} ไฟล์โหลดแล้ว` : 'ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1093,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1091,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "hiddenFileInput",
                                                type: "file",
                                                accept: "application/pdf",
                                                multiple: true,
                                                onChange: handlePdfChange,
                                                disabled: isProcessing
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1095,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1087,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1070,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: `dropzone ${excelSources.length ? 'filled' : ''} ${isExcelDragging ? 'dragging' : ''}`,
                                onDragOver: handleExcelDragOver,
                                onDragLeave: handleExcelDragLeave,
                                onDrop: handleExcelDrop,
                                children: [
                                    excelSources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearExcelFiles,
                                        className: "clearFilesButton",
                                        title: "ล้างไฟล์ Excel",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1112,
                                                    columnNumber: 162
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1112,
                                                    columnNumber: 200
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "uploadLabel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "30",
                                                    height: "30",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "3",
                                                            y: "3",
                                                            width: "18",
                                                            height: "18",
                                                            rx: "2",
                                                            ry: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 161
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "3",
                                                            y1: "9",
                                                            x2: "21",
                                                            y2: "9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 218
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "9",
                                                            y1: "21",
                                                            x2: "9",
                                                            y2: "9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 255
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1117,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "label",
                                                        children: "ไฟล์ Excel (ship / description)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1120,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `file ${isExcelDragging ? 'dragging' : ''}`,
                                                        children: excelSources.length ? `${excelRows.length} แถวจาก ${excelSources.length} ไฟล์โหลดแล้ว` : 'ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1121,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "hiddenFileInput",
                                                type: "file",
                                                accept: ".xlsx,.xls,.csv",
                                                multiple: true,
                                                onChange: handleExcelChange
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1099,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1069,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "toolbar mainToolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "customer-filter",
                                        className: "customerLabel",
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "customer-filter",
                                        value: customer,
                                        onChange: handleCustomerChange,
                                        disabled: isProcessing,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Lotus",
                                                children: "Lotus"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CJ Express",
                                                children: "CJ Express"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Makro",
                                                children: "Makro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CP All",
                                                children: "CP All"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "processButton",
                                onClick: processPdf,
                                disabled: !pdfFiles.length || isProcessing,
                                children: isProcessing ? 'กำลังประมวลผล...' : 'ประมวลผล PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                id: "source-filter",
                                label: "ต้นทางจาก PDF",
                                options: sources,
                                selected: selectedSources,
                                onChange: (values)=>{
                                    setSelectedSources(values);
                                    setResultsPage(1);
                                },
                                disabled: !pageResults.length,
                                hint: "เรียงตามลำดับที่พบใน PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                id: "site-filter",
                                label: "ปลายทางจาก PDF",
                                options: sites,
                                selected: selectedSites,
                                onChange: (values)=>{
                                    setSelectedSites(values);
                                    setResultsPage(1);
                                },
                                disabled: !pageResults.length,
                                hint: "เรียงตามลำดับที่พบใน PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                id: "item-filter",
                                label: "รายการสินค้า",
                                options: availableItems,
                                selected: selectedItems,
                                onChange: (values)=>{
                                    setSelectedItems(values);
                                    setResultsPage(1);
                                },
                                disabled: !pageResults.length,
                                hint: "เรียงตามลำดับที่พบใน PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spacer"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pageIndicator",
                                children: pageResults.length === 0 ? 'ยังไม่มีข้อมูล' : selectedSources.length || selectedSites.length || selectedItems.length ? `พบ ${filteredResults.length} จาก ${pageResults.length} หน้า` : `ทั้งหมด ${pageResults.length} หน้า`
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                disabled: !selectedPrintResults.length,
                                onClick: ()=>triggerPrint(selectedPrintResults),
                                className: "printButton",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "buttonIcon",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "6 9 6 2 18 2 18 9"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1186,
                                                columnNumber: 179
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1186,
                                                columnNumber: 218
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "6",
                                                y: "14",
                                                width: "12",
                                                height: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1186,
                                                columnNumber: 305
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1186,
                                        columnNumber: 13
                                    }, this),
                                    "พิมพ์หน้าที่เลือก",
                                    selectedPrintResults.length > 0 ? ` (${selectedPrintResults.length})` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1128,
                        columnNumber: 9
                    }, this),
                    status.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "statusBar active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "statusRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "statusText",
                                        children: status.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "statusCount",
                                        children: status.total > 0 ? `${status.current}/${status.total}` : ''
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progressTrack",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                                    className: "progressFill",
                                    value: status.current,
                                    max: status.total || 1,
                                    "aria-label": "ความคืบหน้าการประมวลผล"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 1198,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workspace",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panelLeft",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "panel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "sectionHeading",
                                                children: [
                                                    "ผลการตรวจสอบรายหน้า ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "count",
                                                        children: pageResults.length > 0 ? `(${filteredResults.length} หน้า)` : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1206,
                                                columnNumber: 15
                                            }, this),
                                            paginationControls,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tableScroll",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "selectColumn",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: allFilteredPagesSelected,
                                                                            onChange: toggleFilteredPrintPages,
                                                                            disabled: !filteredResults.length,
                                                                            "aria-label": "เลือกทุกหน้าที่แสดง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1217,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1216,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "PO Number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1224,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "comparisonColumn",
                                                                        children: "เปรียบเทียบกับ Excel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1225,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "ต้นทางจาก PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1226,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "ปลายทางจาก PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1227,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1215,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1214,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: pageResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "5",
                                                                    className: "tableEmpty",
                                                                    children: "อัปโหลดไฟล์แล้วกด “ประมวลผล PDF”"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1232,
                                                                columnNumber: 23
                                                            }, this) : filteredResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "5",
                                                                    className: "tableEmpty tableEmptyWarning",
                                                                    children: "ไม่พบหน้าที่ตรงกับตัวกรองนี้"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1234,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1234,
                                                                columnNumber: 23
                                                            }, this) : visibleResults.map((r, idx)=>{
                                                                const isSelected = selectedPage?.id === r.id;
                                                                const isPrintSelected = selectedPrintPages.includes(r.id);
                                                                // 🎯 ลอจิกใหม่: เช็กว่าเลข PO ของ PDF หน้านี้ มีใน Excel หรือไม่
                                                                const hasPo = r.pdfOrderNumber && r.pdfOrderNumber !== ORDER_NUMBER_NOT_FOUND;
                                                                const matchInExcel = hasPo && excelRows.some((row)=>row.ponumber && row.ponumber.toString().trim() === r.pdfOrderNumber.toString().trim());
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: isSelected ? 'selected' : '',
                                                                    onClick: ()=>setSelectedPage(r),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "pageSelectCell",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                    checked: isPrintSelected,
                                                                                    onChange: ()=>togglePrintPage(r.id),
                                                                                    onClick: (event)=>event.stopPropagation(),
                                                                                    "aria-label": `เลือก PO ${r.pdfOrderNumber} สำหรับพิมพ์`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1253,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "mono pageNumber",
                                                                                    children: [
                                                                                        "หน้า ",
                                                                                        r.pages.join(', ')
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1259,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "                            "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1252,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "addrBefore dataCell",
                                                                            children: r.pdfOrderNumber || ORDER_NUMBER_NOT_FOUND
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1262,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "comparisonCell",
                                                                            children: hasPo ? excelRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "comparisonBadge comparisonBadgePdf",
                                                                                children: "เฉพาะ PDF"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1268,
                                                                                columnNumber: 37
                                                                            }, this) : matchInExcel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "comparisonBadge comparisonBadgeMatch",
                                                                                children: "✅ ตรงกัน"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1270,
                                                                                columnNumber: 39
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "comparisonBadge comparisonBadgeMissing",
                                                                                children: "❌ ไม่พบ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1271,
                                                                                columnNumber: 39
                                                                            }, this) : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1265,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "addrBefore dataCell",
                                                                            children: r.pdfSource || 'ไม่พบต้นทาง'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1274,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "addrBefore dataCell",
                                                                            children: r.pdfDestination && r.pdfDestination !== 'ไม่พบจังหวัดปลายทาง' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "destinationValue",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        width: "12",
                                                                                        height: "12",
                                                                                        viewBox: "0 0 24 24",
                                                                                        fill: "none",
                                                                                        stroke: "var(--teal)",
                                                                                        strokeWidth: "2",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/page.jsx",
                                                                                                lineNumber: 1278,
                                                                                                columnNumber: 177
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                cx: "12",
                                                                                                cy: "10",
                                                                                                r: "3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/page.jsx",
                                                                                                lineNumber: 1278,
                                                                                                columnNumber: 236
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/page.jsx",
                                                                                        lineNumber: 1278,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    r.pdfDestination
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1277,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "destinationMissing",
                                                                                children: r.pdfDestination
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1282,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1275,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, r.id || idx, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1247,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1230,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1213,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1212,
                                                columnNumber: 15
                                            }, this),
                                            paginationControls
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "panel excelDataPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "sectionHeading",
                                                children: [
                                                    "ข้อมูลจาก Excel ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "count",
                                                        children: filteredExcelRows.length > 0 ? `(${filteredExcelRows.length} แถว)` : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tableScroll",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "PO Number",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.ponumber,
                                                                                    selected: excelFilters.ponumber,
                                                                                    onChange: (val)=>handleExcelFilterChange('ponumber', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1306,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1304,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1303,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "Ship-to party",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.shipToParty,
                                                                                    selected: excelFilters.shipToParty,
                                                                                    onChange: (val)=>handleExcelFilterChange('shipToParty', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1312,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1310,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1309,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "Sold To Party",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.soldToParty,
                                                                                    selected: excelFilters.soldToParty,
                                                                                    onChange: (val)=>handleExcelFilterChange('soldToParty', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1318,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1316,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1315,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "Product Description",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.productdescription,
                                                                                    selected: excelFilters.productdescription,
                                                                                    onChange: (val)=>handleExcelFilterChange('productdescription', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1324,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1322,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1321,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1302,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1301,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: !filteredExcelRows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "4",
                                                                    className: "tableEmpty",
                                                                    children: excelRows.length > 0 ? 'ไม่พบข้อมูลที่ตรงกับตัวกรอง' : 'อัปโหลดไฟล์ Excel เพื่อแสดงข้อมูล'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1331,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1331,
                                                                columnNumber: 23
                                                            }, this) : filteredExcelRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "dataCell",
                                                                            children: row.ponumber || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1335,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            children: row.shipToParty || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1336,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            children: row.soldToParty || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1337,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            children: row.productdescription || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1338,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, `${row.source}-${index}`, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1334,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1329,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "panel previewPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "sectionHeading",
                                        children: "ตัวอย่างหน้าเอกสาร"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "previewBody",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "previewControls",
                                                "aria-label": "ควบคุมตัวอย่างเอกสาร",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: selectedResultIndex <= 0,
                                                        onClick: ()=>selectPreviewPage(selectedResultIndex - 1),
                                                        "aria-label": "หน้าก่อนหน้า",
                                                        children: "‹"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1352,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: activeSelectedPage?.id || '',
                                                        onChange: (event)=>selectPreviewPage(filteredResults.findIndex((result)=>result.id === event.target.value)),
                                                        disabled: !filteredResults.length,
                                                        "aria-label": "เลือกหน้าเอกสาร",
                                                        children: [
                                                            !filteredResults.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "ยังไม่มีหน้า"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1359,
                                                                columnNumber: 47
                                                            }, this),
                                                            filteredResults.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: result.id,
                                                                    children: result.pdfOrderNumber !== ORDER_NUMBER_NOT_FOUND ? `PO: ${result.pdfOrderNumber} (หน้า ${result.pages.join(', ')})` : `หน้า ${result.pages[0]}`
                                                                }, result.id, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1361,
                                                                    columnNumber: 21
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1353,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: selectedResultIndex < 0 || selectedResultIndex >= filteredResults.length - 1,
                                                        onClick: ()=>selectPreviewPage(selectedResultIndex + 1),
                                                        "aria-label": "หน้าถัดไป",
                                                        children: "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "previewDivider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1369,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: !activeSelectedPage || previewZoom <= 0.5,
                                                        onClick: ()=>setPreviewZoom((value)=>Math.max(0.5, value - 0.25)),
                                                        "aria-label": "ซูมออก",
                                                        children: "−"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "zoomValue",
                                                        children: [
                                                            Math.round(previewZoom * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: !activeSelectedPage || previewZoom >= 2,
                                                        onClick: ()=>setPreviewZoom((value)=>Math.min(2, value + 0.25)),
                                                        "aria-label": "ซูมเข้า",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        disabled: !activeSelectedPage || previewZoom === 1,
                                                        onClick: ()=>setPreviewZoom(1),
                                                        children: "รีเซ็ต"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1374,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1351,
                                                columnNumber: 15
                                            }, this),
                                            !activeSelectedPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "previewEmpty",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "previewEmptyIcon",
                                                        width: "48",
                                                        height: "48",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "var(--line)",
                                                        strokeWidth: "1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "3",
                                                                y: "3",
                                                                width: "18",
                                                                height: "18",
                                                                rx: "2",
                                                                ry: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1378,
                                                                columnNumber: 147
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "8.5",
                                                                cy: "8.5",
                                                                r: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1378,
                                                                columnNumber: 204
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "21 15 16 10 5 21"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1378,
                                                                columnNumber: 240
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1378,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1379,
                                                        columnNumber: 19
                                                    }, this),
                                                    "เลือกแถวในตารางด้านซ้าย",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1380,
                                                        columnNumber: 42
                                                    }, this),
                                                    "เพื่อดูตัวอย่างหน้านั้น"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1377,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "previewCanvas",
                                                        children: activeSelectedPage.thumbDataUrls.map((thumb, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "previewPage",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "previewPageNumber",
                                                                        children: [
                                                                            "หน้า ",
                                                                            activeSelectedPage.pages[idx]
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        className: `previewImage previewZoom${Math.round(previewZoom * 100)}`,
                                                                        src: thumb,
                                                                        alt: `Page ${activeSelectedPage.pages[idx]}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1390,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1386,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1384,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "previewDetail",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "หน้า"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "mono pageDetailValue",
                                                                    children: [
                                                                        activeSelectedPage.pages.join(', '),
                                                                        " / ",
                                                                        filteredResults.length,
                                                                        " PO"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 36
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "แหล่งข้อความ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1397,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: [
                                                                        activeSelectedPage.source === 'text-layer' ? 'ข้อความในไฟล์ PDF' : 'OCR (ไม่พบชั้นข้อความ)',
                                                                        activeSelectedPage.source === 'ocr' && activeSelectedPage.ocrConfidence !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `tag ${activeSelectedPage.ocrConfidence < OCR_LOW_CONFIDENCE ? 'tagReview' : 'tagMatch'} ocrConfidenceTag`,
                                                                            children: [
                                                                                "ความมั่นใจ OCR ",
                                                                                Math.round(activeSelectedPage.ocrConfidence),
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1401,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1398,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "ต้นทางจาก PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1406,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "previewSource",
                                                                    children: activeSelectedPage.pdfSource || 'ไม่พบต้นทาง'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1406,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "ปลายทางจาก PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1408,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `tag destinationTag ${activeSelectedPage.pdfDestination !== 'ไม่พบจังหวัดปลายทาง' ? 'tagMatch' : 'tagMismatch'}`,
                                                                        children: activeSelectedPage.pdfDestination || 'ไม่พบปลายทาง'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1410,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1409,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1395,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1394,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "note pageFooter",
                        children: "by Process Excellence Team 2026"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1068,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "printArea",
                children: printPagesList.flatMap((p)=>p.thumbDataUrls.map((thumb, idx)=>({
                            thumb,
                            pageNum: p.pages[idx]
                        }))).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "printPage",
                        children: item.thumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.thumb,
                            alt: `Print Page ${item.pageNum}`
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 1432,
                            columnNumber: 30
                        }, this)
                    }, i, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1431,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1427,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 1056,
        columnNumber: 5
    }, this);
}
_s(PoChecker, "3e9hoa9rbC3Ne1bbodMLkfa34LU=");
_c4 = PoChecker;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "PROVINCE_KEYS$[...THAI_PROVINCES, ...Object.keys(PROVINCE_ALIAS)].sort");
__turbopack_context__.k.register(_c1, "PROVINCE_KEYS");
__turbopack_context__.k.register(_c2, "CheckboxDropdown");
__turbopack_context__.k.register(_c3, "ColumnFilterDropdown");
__turbopack_context__.k.register(_c4, "PoChecker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Button({ className, variant = 'default', size = 'default', type = 'button', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ui-button', `ui-button-${variant}`, `ui-button-${size}`, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ui-card', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ui-card-header', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c1 = CardHeader;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ui-card-content', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c2 = CardContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/checkbox.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ui-checkbox', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Checkbox;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Select({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ui-select', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pdf-results.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPdfPageResult",
    ()=>addPdfPageResult,
    "sortPdfResultsByPage",
    ()=>sortPdfResultsByPage
]);
function addPdfPageResult(results, groups, rowData, documentIndex, missingOrderNumber) {
    if (rowData.pdfOrderNumber === missingOrderNumber) {
        results.push(rowData);
        return;
    }
    const groupId = `po-${documentIndex}-${rowData.pdfOrderNumber}`;
    const existing = groups[groupId];
    if (!existing) {
        rowData.id = groupId;
        groups[groupId] = rowData;
        results.push(rowData);
        return;
    }
    existing.pages.push(...rowData.pages);
    existing.thumbDataUrls.push(...rowData.thumbDataUrls);
    existing.pdfItems = [
        ...new Set([
            ...existing.pdfItems,
            ...rowData.pdfItems
        ])
    ];
}
function sortPdfResultsByPage(results) {
    return [
        ...results
    ].sort((left, right)=>(left.pages?.[0] ?? Infinity) - (right.pages?.[0] ?? Infinity));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0ct3g5j._.js.map