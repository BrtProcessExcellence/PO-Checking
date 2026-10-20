module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoChecker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tesseract.js/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf-results.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.jsx [app-ssr] (ecmascript)");
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
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobalWorkerOptions"].workerSrc = '/pdf.worker.min.mjs';
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
    },
    'Big C': {
        ship: [
            'Ship-to-Party Name1',
            'Ship-to Party',
            'Ship-to-Party City',
            'ส่งสินค้าที่'
        ],
        description: [
            'Material Description',
            'Product description',
            'Item'
        ]
    },
    'Mini Big C': {
        ship: [
            'Ship-to Name',
            'Store Name',
            'Address ( TH)',
            'Ship-to'
        ],
        description: [
            'Material Desc.',
            'Material Description',
            'Product Group'
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
    sendTo: loose('ส่งสินค้าไปที่'),
    bigcSendTo: '(?:ส\\s*่?\\s*ง\\s*ส\\s*ิ\\s*น\\s*ค\\s*้?\\s*า\\s*ท\\s*ี\\s*่?)',
    bigcBranch: '\\d{5}\\s+[A-Z0-9]{4,8}\\s*[:：]\\s*\\d{13}',
    bigcHeadOffice: '1\\s*HEAD\\s*OFFICE\\s*[:：]?\\s*\\d*',
    bigcVendor: '6003462\\s*[:：]\\s*\\d*'
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
    'อุบลราชธานี',
    'กทม'
];
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
    'NAKORNNAYOK': 'นครนายก',
    'NAKORN NAYOK': 'นครนายก',
    'BANGKOK': 'กรุงเทพมหานคร',
    'BKK': 'กรุงเทพมหานคร',
    'CHONBURI': 'ชลบุรี',
    'RAYONG': 'ระยอง',
    'KHONKAEN': 'ขอนแก่น',
    'KHON KAEN': 'ขอนแก่น',
    'SURAT THANI': 'สุราษฎร์ธานี',
    'SURATTHANI': 'สุราษฎร์ธานี',
    'CHIANG MAI': 'เชียงใหม่',
    'CHIANGMAI': 'เชียงใหม่',
    'AYUTTHAYA': 'พระนครศรีอยุธยา',
    'KORAT': 'นครราชสีมา',
    'NAKHON RATCHASIMA': 'นครราชสีมา',
    'PHUKET': 'ภูเก็ต',
    'RATCHABURI': 'ราชบุรี',
    'CHACHOENGSAO': 'ฉะเชิงเทรา',
    'PATHUM THANI': 'ปทุมธานี',
    'PATHUMTHANI': 'ปทุมธานี',
    'SAMUT PRAKAN': 'สมุทรปราการ',
    'SAMUTPRAKAN': 'สมุทรปราการ',
    'NONTHABURI': 'นนทบุรี',
    'NAKHON PATHOM': 'นครปฐม',
    'SAMUT SAKHON': 'สมุทรสาคร',
    'SAMUTSAKHON': 'สมุทรสาคร',
    'SONGKHLA': 'สงขลา',
    'UDON THANI': 'อุดรธานี',
    'UDONTHANI': 'อุดรธานี',
    'BURI RAM': 'บุรีรัมย์',
    'BURIRAM': 'บุรีรัมย์',
    'LAMPHUN': 'ลำพูน',
    'PRACHUAP KHIRI KHAN': 'ประจวบคีรีขันธ์',
    'PHITSANULOK': 'พิษณุโลก',
    'KANCHANABURI': 'กาญจนบุรี',
    'SA KAEO': 'สระแก้ว',
    'SAKAEO': 'สระแก้ว',
    'CHUMPHON': 'ชุมพร',
    'TRAT': 'ตราด',
    'PHANGNGA': 'พังงา',
    'PHANG NGA': 'พังงา',
    'TRANG': 'ตรัง',
    'SATUN': 'สตูล',
    'LOPBURI': 'ลพบุรี',
    'SARABURI': 'สระบุรี',
    'NONG KHAI': 'หนองคาย',
    'NONGKHAI': 'หนองคาย',
    'SI SA KET': 'ศรีสะเกษ',
    'SISAKET': 'ศรีสะเกษ',
    'LAMPANG': 'ลำปาง',
    'KAMPHAENG PHET': 'กำแพงเพชร',
    'KAMPHAENGPHET': 'กำแพงเพชร',
    'BUENG KAN': 'บึงกาฬ',
    'BUENGKAN': 'บึงกาฬ',
    'MAHA SARAKHAM': 'มหาสารคาม',
    'MAHASARAKHAM': 'มหาสารคาม',
    'PHICHIT': 'พิจิตร',
    'UTTARADIT': 'อุตรดิตถ์',
    'CHAI NAT': 'ชัยนาท',
    'CHAINAT': 'ชัยนาท',
    'PRACHINBURI': 'ปราจีนบุรี',
    'PRACHIN BURI': 'ปราจีนบุรี',
    'LOEI': 'เลย',
    'NONG BUA LAM PHU': 'หนองบัวลำภู',
    'NONGBUALAMPHU': 'หนองบัวลำภู',
    'PHAYAO': 'พะเยา',
    'PHRAE': 'แพร่',
    'AMNAT CHAROEN': 'อำนาจเจริญ',
    'YASOTHON': 'ยโสธร',
    'ROI ET': 'ร้อยเอ็ด',
    'ROIET': 'ร้อยเอ็ด',
    'KALASIN': 'กาฬสินธุ์',
    'MUKDAHAN': 'มุกดาหาร',
    'SUPHANBURI': 'สุพรรณบุรี',
    'SAMUT SONGKHRAM': 'สมุทรสงคราม',
    'NAKHON SI THAMMARAT': 'นครศรีธรรมราช',
    'NAKHON SAWAN': 'นครสวรรค์',
    'MAE HONG SON': 'แม่ฮ่องสอน',
    'NARATHIWAT': 'นราธิวาส',
    'KRABI': 'กระบี่',
    'TAK': 'ตาก',
    'NAN': 'น่าน',
    'YALA': 'ยะลา'
};
const PROVINCE_ALIAS = {
    'กทม': 'กรุงเทพมหานคร',
    'กรุงเทพ': 'กรุงเทพมหานคร',
    'อยุธยา': 'พระนครศรีอยุธยา',
    'โคราช': 'นครราชสีมา'
};
const PROVINCE_KEYS = [
    ...THAI_PROVINCES,
    ...Object.keys(PROVINCE_ALIAS)
].sort((a, b)=>b.length - a.length);
const DEST_NOT_FOUND = 'ไม่พบจังหวัดปลายทาง';
const SOURCE_NOT_FOUND = 'ไม่พบต้นทาง';
const ORDER_NUMBER_NOT_FOUND = 'ไม่พบเลขที่';
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
function scanProvinceName(t) {
    if (!t) return '';
    const found = [];
    // 3.1 หาจังหวัดภาษาไทยตรงๆ
    for (const p of THAI_PROVINCES){
        const idx = t.lastIndexOf(p);
        if (idx !== -1) found.push({
            idx,
            prov: p === 'กทม' ? 'กรุงเทพมหานคร' : p
        });
    }
    // 3.2 หาคำที่โดนสแกนขาดหายไป (Typos)
    for (const [typo, actual] of Object.entries(PROVINCES_TYPOS)){
        const idx = t.lastIndexOf(typo);
        if (idx !== -1) found.push({
            idx,
            prov: actual
        });
    }
    // 3.3 หาภาษาอังกฤษ (กรณี Lotus / ภาษาคาราโอเกะ)
    const tUp = t.toUpperCase();
    for (const [en, th] of Object.entries(PROVINCE_EN_ALIAS)){
        const idx = tUp.lastIndexOf(en);
        if (idx !== -1) found.push({
            idx,
            prov: th
        });
    }
    if (found.length > 0) {
        // เรียงลำดับเอาตัวที่โผล่มาหลังสุด (ท้ายที่อยู่)
        found.sort((a, b)=>b.idx - a.idx);
        return found[0].prov;
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
const RULES_BIGC = {
    source: {
        label: [
            L.bigcHeadOffice,
            L.bigcVendor,
            L.orderer
        ],
        end: `${L.seq}|${FOOTER}`,
        maxLen: 350
    },
    dest: {
        label: [
            L.bigcBranch,
            L.bigcSendTo
        ],
        end: `${L.bigcHeadOffice}|${L.bigcVendor}|${L.seq}|${FOOTER}`,
        maxLen: 400
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
    Lotus: RULES_LOTUS_MAKRO,
    'Big C': RULES_BIGC,
    'Mini Big C': RULES_BIGC
};
const LEADING_CODE = /^\d{4,14}\s*/; // รหัสผู้ขาย/สาขา/ร้านที่มาก่อนที่อยู่ (ไม่ใช่รหัสไปรษณีย์)
function locateProvince(rawText, customer1, side) {
    const text = normalizePdfText(rawText);
    const rule = (PROVINCE_RULES[customer1] || RULES_LOTUS_MAKRO)[side];
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
// ฟังก์ชันย่อภาพสแกนโดยล็อกเม็ดสีดำที่ผ่าน OCR แล้วไม่ให้จางหาย
const buildCrispPreviewDataUrl = (sourceCanvas, targetWidth = 1200)=>{
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
    for(let sy = 0; sy < srcH; sy++){
        const dy = Math.min(dstH - 1, Math.floor(sy * scale));
        const srcRowOffset = sy * srcW * 4;
        const dstRowOffset = dy * dstW * 4;
        for(let sx = 0; sx < srcW; sx++){
            const si = srcRowOffset + sx * 4;
            if (srcData[si + 3] < 10) continue;
            const gray = srcData[si] * 77 + srcData[si + 1] * 150 + srcData[si + 2] * 29 >> 8;
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
            pdfDocs.push(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"]({
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
                const baseViewport = page.getViewport({
                    scale: 1.0
                });
                const previewScale = Math.min(PREVIEW_SCALE, 1200 / baseViewport.width);
                const ocrScale = Math.min(OCR_SCALE, 2800 / baseViewport.width);
                const textContent = await page.getTextContent();
                let rawText = textContent.items.map((i)=>i.str).join(' ').trim();
                let source = 'text-layer';
                let ocrConfidence = null;
                let thumbDataUrl = '';
                if (rawText.length < 8) {
                    // ------ กรณีไฟล์ภาพสแกน (Mini Big C) ------
                    source = 'ocr';
                    if (!tesseractWorker) {
                        setStatus({
                            active: true,
                            text: 'กำลังโหลดโมดูล OCR (ครั้งแรกอาจใช้เวลาสักครู่)…',
                            current: pageNumber,
                            total
                        });
                        tesseractWorker = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createWorker('tha+eng', 1);
                        await tesseractWorker.setParameters({
                            tessedit_pageseg_mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PSM.SPARSE_TEXT,
                            user_defined_dpi: String(Math.round(ocrScale * 72)),
                            preserve_interword_spaces: '1'
                        });
                    }
                    setStatus({
                        active: true,
                        text: `กำลังประมวลผล ${pageNumber} จาก ${total} …`,
                        current: pageNumber,
                        total
                    });
                    const ocrViewport = page.getViewport({
                        scale: ocrScale
                    });
                    const ocrCanvas = document.createElement('canvas');
                    ocrCanvas.width = Math.floor(ocrViewport.width);
                    ocrCanvas.height = Math.floor(ocrViewport.height);
                    const ctxOcr = ocrCanvas.getContext('2d');
                    const tempOcrCanvas = document.createElement('canvas');
                    tempOcrCanvas.width = ocrCanvas.width;
                    tempOcrCanvas.height = ocrCanvas.height;
                    await page.render({
                        canvasContext: tempOcrCanvas.getContext('2d'),
                        viewport: ocrViewport
                    }).promise;
                    ctxOcr.fillStyle = '#ffffff';
                    ctxOcr.fillRect(0, 0, ocrCanvas.width, ocrCanvas.height);
                    ctxOcr.drawImage(tempOcrCanvas, 0, 0);
                    // 1. เร่งเส้นตัวหนังสือให้ดำสนิทบนพื้นขาวก่อน
                    preprocessForOcr(ocrCanvas);
                    // 2. ดึงภาพจาก ocrCanvas ที่เร่งสีดำแล้วมาทำรูปพรีวิว
                    thumbDataUrl = buildCrispPreviewDataUrl(ocrCanvas, 1200);
                    // 3. ส่งเข้า OCR อ่านข้อความ
                    const { data } = await tesseractWorker.recognize(ocrCanvas);
                    rawText = data.text.trim();
                    ocrConfidence = data.confidence;
                } else {
                    // ------ กรณีไฟล์ PDF ปกติ ------
                    const viewport = page.getViewport({
                        scale: previewScale
                    });
                    const canvas = document.createElement('canvas');
                    canvas.width = Math.floor(viewport.width);
                    canvas.height = Math.floor(viewport.height);
                    const ctxPreview = canvas.getContext('2d');
                    const tempPreviewCanvas = document.createElement('canvas');
                    tempPreviewCanvas.width = canvas.width;
                    tempPreviewCanvas.height = canvas.height;
                    await page.render({
                        canvasContext: tempPreviewCanvas.getContext('2d'),
                        viewport
                    }).promise;
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addPdfPageResult"])(results, poGroups, rowData, documentIndex, ORDER_NUMBER_NOT_FOUND);
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
function preprocessForOcr(canvas) {
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height);
    const d = imageData.data;
    const gray = new Uint8ClampedArray(width * height);
    // แปลงภาพโปร่งใสให้กลายเป็นพื้นหลังสีขาวก่อน
    for(let i = 0, p = 0; i < d.length; i += 4, p++){
        const alpha = d[i + 3] / 255; // ค่าความโปร่งใส
        const r = d[i] * alpha + 255 * (1 - alpha);
        const g = d[i + 1] * alpha + 255 * (1 - alpha);
        const b = d[i + 2] * alpha + 255 * (1 - alpha);
        gray[p] = 0.299 * r + 0.587 * g + 0.114 * b;
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
    'Order\\s*(?:No\\.?|Number|#)'
];
const LABEL_COLON = loose('เลขที่') + '[:：]';
const MAKRO_LABEL = loose('เลขที่ใบสั่งซื้อ') + '\\s*[:：]?\\s*(?:' + loose('วันที่') + '.{0,10}' + loose('สินค้า') + '\\s*[:：]?\\s*\\d+\\s*(?:วัน|วั)\\s*)?';
const CPALL_LABEL = loose('เลขที่') + '\\s*[:：]\\s*(?:' + loose('กำหนดส่ง') + '\\s*[:：]?\\s*\\d+\\s*(?:วัน|วั)\\s*(?:' + loose('ตามเงื่อนไข') + ')?\\s*)?';
const LOTUS_LABEL = loose('ใบสั่งซื้อสินค้า');
const BIGC_PO_LABEL = `BIGC\\s*EDI(?:\\s*\\|)?`;
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
    },
    'Big C': {
        labels: [
            BIGC_PO_LABEL,
            loose('เลขที่ใบสั่งซื้อ')
        ],
        relaxed: false
    },
    'Mini Big C': {
        labels: [
            BIGC_PO_LABEL,
            loose('เลขที่ใบสั่งซื้อ')
        ],
        relaxed: false
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
function extractPdfAddressText(rawText, customer1) {
    return stripPhone(locateProvince(rawText, customer1, 'dest').snippet);
}
function extractPdfOrderNumber(rawText, customer1) {
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
    if (ORDER_RULES[customer1]) {
        const rule = ORDER_RULES[customer1];
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
    console.log(`\n🚨 [${customer1}] เจอบิลที่หาเลข PO ไม่พบ!`);
    console.log(`👉 ข้อความ 300 ตัวอักษรแรก: >> "${text.slice(0, 300)}" <<\n`);
    return ORDER_NUMBER_NOT_FOUND;
}
function extractPdfDestination(rawText, customer1, addr, addressText) {
    if (customer1 === 'Big C' || customer1 === 'Mini Big C') {
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
    const r = locateProvince(rawText, customer1, 'dest');
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
function extractPdfSource(rawText, customer1) {
    if (customer1 === 'Big C' || customer1 === 'Mini Big C') {
        const text = rawText.replace(/\n/g, ' ');
        const bcMatch = text.match(/(1\s*HEAD\s*OFFICE\s*[:：].*?)(?=\s*(?:โทร|ร้านค[้]?า|6003462))/i);
        if (bcMatch) {
            const prov = scanProvinceName(bcMatch[1].replace(/\(สำนักงาน\s*ใหญ่\)/g, '(สำนักงานใหญ่)'));
            if (prov) return prov;
        }
        return SOURCE_NOT_FOUND;
    }
    return locateProvince(rawText, customer1, 'source').province || SOURCE_NOT_FOUND;
}
function uniqueInOrder(values) {
    return [
        ...new Set(values.map((value)=>String(value || '').trim()).filter(Boolean))
    ];
}
function extractMakroBranch(rawText) {
    return rawText.match(/\b\d{10,14}\b\s*(สาขา[^\n|]+)/i)?.[1]?.trim() || '';
}
function extractPdfItems(rawText, customer1) {
    const text = normalizePdfText(rawText);
    const results = [];
    if (customer1 === 'Lotus') {
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
    if (customer1 === 'CP All') {
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
    if (customer1 === 'Makro') {
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
    if (customer1 === 'CJ Express') {
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
    if (customer1 === 'Big C' || customer1 === 'Mini Big C') {
        const barcodes = [
            ...text.matchAll(/\b885099\d{7}\b/g)
        ];
        const footerRegex = /(?:หมายเหตุ|มูลค่ารวม|ส่วนลด\s*(?:\(บาท\)|\(%\))?|ภาษีมูลค่าเพิ่ม|รวมมูลค่า|ข้อความสำคัญ|ข้อควรระวัง)/i;
        for(let index = 0; index < barcodes.length; index++){
            const barcode = barcodes[index];
            const nextBarcode = barcodes[index + 1];
            let rowText = text.slice(barcode.index + barcode[0].length, nextBarcode?.index ?? text.length);
            const footer = footerRegex.exec(rowText);
            if (footer) rowText = rowText.slice(0, footer.index);
            rowText = rowText.replace(/^[\s|:：-]+/, '').trim();
            const thaiVolume = /\d+(?:[.,]\d+)?\s*(?:มล\.?|ลิตร)/i.exec(rowText);
            const englishVolume = /\d{2,4}\s*ML\b/i.exec(rowText);
            const firstAmount = /\s+\d{1,3}(?:,\d{3})*\.\d{2,3}\b/.exec(rowText);
            const endIndex = thaiVolume ? thaiVolume.index + thaiVolume[0].length : englishVolume ? englishVolume.index : firstAmount ? firstAmount.index : rowText.length;
            const itemName = rowText.slice(0, endIndex).replace(/น้้า/g, 'น้ำ').replace(/น้าดื่ม/g, 'น้ำดื่ม').replace(/([\u0e01-\u0e2e\u0e4c])\u0e4c+/g, '$1').replace(/สิงหน้าดื่ม/g, 'สิงห์น้ำดื่ม').replace(/น้ำดื่ม\s*สิงห์/g, 'สิงห์น้ำดื่ม').replace(/สิงห(?=[พิงค์|เลมอน|ยูซุ|บ๊วย|น้ำ])/g, 'สิงห์').replace(/[|]/g, ' ').replace(/\s+/g, ' ').trim();
            if (itemName) results.push(itemName);
        }
        return [
            ...new Set(results)
        ];
    }
    // ====================================================================
    const itemLabel = customer1 === 'CJ Express' ? 'ชื่อสินค้า' : 'รายการ';
    const itemMatch = rawText.match(new RegExp(`(?:${itemLabel})\\s*[:：-]?\\s*(.+)$`, 'im'));
    const extractedText = itemMatch?.[1]?.trim();
    const codes = extractItemCodes(extractedText || '');
    results.push(...codes);
    if (extractedText) results.push(extractedText);
    if (customer1 === 'Makro') {
        const branch = extractMakroBranch(rawText);
        if (branch) results.push(branch);
    }
    return [
        ...new Set(results.filter(Boolean))
    ];
}
function getCustomerColumns(customer1, headers) {
    const columnConfig = CUSTOMER_EXCEL_COLUMNS[customer1] || CUSTOMER_EXCEL_COLUMNS.Lotus;
    const safeHeaders = headers || [];
    const normalized = safeHeaders.map(normalizeExcelHeader);
    const findColumn = (patterns, fallback)=>{
        if (!patterns) return fallback;
        const normalizedPatterns = patterns.map(normalizeExcelHeader);
        const index = normalized.findIndex((header)=>normalizedPatterns.some((pattern)=>header.includes(pattern)));
        return index >= 0 ? index : fallback;
    };
    switch(customer1){
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
        case 'Big C':
        case 'Mini Big C':
            return {
                shipIdx: findColumn(columnConfig.ship, 0),
                descIdx: findColumn(columnConfig.description, 1)
            };
        default:
            return {
                shipIdx: findColumn(columnConfig.ship, 0),
                descIdx: findColumn(columnConfig.description, 1)
            };
    }
}
function mapExcelRows(rawRows, headers, customer1) {
    const safeHeaders = headers || [];
    const { shipIdx, descIdx } = getCustomerColumns(customer1, safeHeaders);
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
            'purchaseorderno.',
            'customerpono.'
        ]);
        const shipTo = findHeaderValue(row, [
            'shiptoparty',
            'shiptopartyname1',
            'shiptoname',
            'shipto',
            'storename',
            'ส่งสินค้าไปที่'
        ]);
        const soldTo = findHeaderValue(row, [
            'soldtoparty',
            'soldto',
            'soldtoname'
        ]);
        const productDesc = findHeaderValue(row, [
            'productdescription',
            'materialdescription',
            'materialdesc.'
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "filterGroup",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "filterDropdown",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        id: id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filterSummaryLabel",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1053,
                                columnNumber: 11
                            }, this),
                            selected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filterCount",
                                children: selected.length
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1054,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1052,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filterMenu",
                        children: [
                            options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filterEmpty",
                                children: "ยังไม่มีข้อมูล"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1058,
                                columnNumber: 13
                            }, this) : options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "filterOption",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            checked: selected.includes(option),
                                            disabled: disabled,
                                            onChange: ()=>toggleOption(option)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1061,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: option
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1062,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, option, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 1060,
                                    columnNumber: 13
                                }, this)),
                            options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filterActions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: selectAll,
                                        disabled: disabled || options.length === 0,
                                        children: "เลือกทั้งหมด"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1067,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: clearAll,
                                        disabled: disabled || selected.length === 0,
                                        children: "ล้าง"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1068,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1066,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1056,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1051,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                className: "filterHint",
                children: hint
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1073,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 1050,
        columnNumber: 5
    }, this);
}
// ================== ส่วนใหม่: ฟิลเตอร์แบบ Google Sheets ในหัวตาราง Excel ==================
function ColumnFilterDropdown({ options, selected, onChange }) {
    const toggleOption = (option)=>{
        onChange(selected.includes(option) ? selected.filter((v)=>v !== option) : [
            ...selected,
            option
        ]);
    };
    const isActive = selected.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "tableFilterDropdown",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: isActive ? 'active' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: isActive ? "currentColor" : "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1089,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 1088,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1087,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tableFilterMenu",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tableFilterActions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "tableFilterSelectAll",
                                onClick: ()=>onChange([
                                        ...options
                                    ]),
                                children: "เลือกทั้งหมด"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1094,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "tableFilterClear",
                                onClick: ()=>onChange([]),
                                children: "ล้าง"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1095,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1093,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tableFilterOptions",
                        children: [
                            options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tableFilterEmpty",
                                children: "ไม่มีข้อมูล"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1098,
                                columnNumber: 36
                            }, this),
                            options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "tableFilterOption",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: selected.includes(opt),
                                            onChange: ()=>toggleOption(opt)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            title: opt,
                                            children: opt || '(ว่าง)'
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 1100,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1097,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1092,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 1086,
        columnNumber: 5
    }, this);
}
// =========================================================================================
const RESULTS_PER_PAGE = 10;
function PoChecker() {
    const [pdfFiles1, setPdfFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [excelSources, setExcelSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customer1, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('CP All');
    const excelRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>excelSources.flatMap((source)=>mapExcelRows(source.rawRows, source.headers, customer1)), [
        excelSources,
        customer1
    ]);
    const [selectedSources, setSelectedSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSites, setSelectedSites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Excel Column Filters State ---
    const [excelFilters, setExcelFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ponumber: [],
        shipToParty: [],
        soldToParty: [],
        productdescription: []
    });
    const [isProcessing1, setIsProcessing1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        active: false,
        text: '',
        current: 0,
        total: 0
    });
    const [pageResults, setPageResults1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPage, setSelectedPage1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewZoom, setPreviewZoom1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [resultsPage, setResultsPage1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [printPagesList, setPrintPagesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPrintPages, setSelectedPrintPages1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Drag & Drop States ---
    const [isPdfDragging, setIsPdfDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExcelDragging, setIsExcelDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Drag & Drop Handlers ---
    const handlePdfDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsPdfDragging(true);
    }, []);
    const handlePdfDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsPdfDragging(false), []);
    const handlePdfDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsPdfDragging(false);
        if (isProcessing1) return;
        const files = [
            ...e.dataTransfer.files
        ].filter((f)=>f.type === 'application/pdf' || /\.pdf$/i.test(f.name));
        if (files.length) setPdfFiles((curr)=>[
                ...curr,
                ...files
            ]);
    }, [
        isProcessing1
    ]);
    const handleExcelChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        const input = e.target;
        const files = [
            ...input.files
        ];
        if (!files.length) return;
        try {
            const sources = (await Promise.all(files.map((file)=>new Promise((resolve, reject)=>{
                    const reader = new FileReader();
                    reader.onload = (event)=>{
                        try {
                            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](new Uint8Array(event.target.result), {
                                type: 'array'
                            });
                            const sheetSources = wb.SheetNames.map((sheetName)=>{
                                const sheet = wb.Sheets[sheetName];
                                const json = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet, {
                                    header: 1,
                                    defval: ''
                                });
                                return json.length ? {
                                    headers: json[0],
                                    rawRows: json.slice(1),
                                    name: `${file.name} / ${sheetName}`
                                } : null;
                            }).filter(Boolean);
                            resolve(sheetSources);
                        } catch (error) {
                            reject(error);
                        }
                    };
                    reader.onerror = ()=>reject(new Error(`อ่านไฟล์ ${file.name} ไม่สำเร็จ`));
                    reader.readAsArrayBuffer(file);
                })))).flat();
            setSelectedSites([]);
            setSelectedSources([]);
            setSelectedItems([]);
            setExcelFilters({
                ponumber: [],
                shipToParty: [],
                soldToParty: [],
                productdescription: []
            });
            setExcelSources((currentSources)=>[
                    ...currentSources,
                    ...sources
                ]);
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            alert('อ่านไฟล์ Excel ไม่สำเร็จ: ' + message);
        } finally{
            if ('value' in input) input.value = '';
        }
    }, []);
    const handleExcelDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsExcelDragging(true);
    }, []);
    const handleExcelDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsExcelDragging(false), []);
    const handleExcelDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsExcelDragging(false);
        const files = [
            ...e.dataTransfer.files
        ].filter((f)=>/\.(xlsx|xls|csv)$/i.test(f.name));
        if (files.length) handleExcelChange({
            target: {
                files
            }
        });
    }, [
        handleExcelChange
    ]);
    const clearPdfFiles = (e)=>{
        if (isProcessing1) return;
        e.preventDefault();
        e.stopPropagation();
        setPdfFiles([]);
        setPageResults1([]);
        setSelectedPage1(null);
        setSelectedPrintPages1([]);
        setPrintPagesList([]);
        setResultsPage1(1);
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
        if (!isProcessing1 && files.length) setPdfFiles((currentFiles)=>[
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
        setPageResults1([]);
        setSelectedPage1(null);
        setSelectedPrintPages1([]);
        setPrintPagesList([]);
        setResultsPage1(1);
        setPreviewZoom1(1);
    };
    const processPdf = async ()=>{
        if (!pdfFiles1.length || isProcessing1) return;
        setIsProcessing1(true);
        setStatus1({
            active: true,
            text: 'กำลังเตรียมระบบ…',
            current: 0,
            total: 0
        });
        setPageResults1([]);
        setSelectedPage1(null);
        setSelectedPrintPages1([]);
        setResultsPage1(1);
        let tesseractWorker = null;
        try {
            const pdfDocs = [];
            for (const file of pdfFiles1){
                const buf = await file.arrayBuffer();
                pdfDocs.push(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"]({
                    data: buf,
                    wasmUrl: '/pdfjs/wasm/'
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
                    setStatus1({
                        active: true,
                        text: `กำลังอ่านข้อความหน้า ${pageNumber} จาก ${total}…`,
                        current: pageNumber,
                        total
                    });
                    const page = await pdfDoc.getPage(p);
                    // 🎯 1. คำนวณขนาด (Scale) แบบฉลาด ไม่ให้ Canvas แตกหรือกินแรมจนค้าง
                    const baseViewport = page.getViewport({
                        scale: 1.0
                    });
                    const previewScale = Math.min(PREVIEW_SCALE, 1200 / baseViewport.width);
                    const ocrScale = Math.min(OCR_SCALE, 2800 / baseViewport.width);
                    const textContent = await page.getTextContent();
                    let rawText = textContent.items.map((i)=>i.str).join(' ').trim();
                    let source = 'text-layer';
                    let ocrConfidence = null;
                    let thumbDataUrl = '';
                    if (rawText.length < 8) {
                        // ------ กรณีไฟล์ภาพสแกน (Mini Big C) ------
                        source = 'ocr';
                        if (!tesseractWorker) {
                            setStatus1({
                                active: true,
                                text: 'กำลังโหลดโมดูล OCR (ครั้งแรกอาจใช้เวลาสักครู่)…',
                                current: pageNumber,
                                total
                            });
                            tesseractWorker = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createWorker('tha+eng', 1);
                            await tesseractWorker.setParameters({
                                tessedit_pageseg_mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PSM.SPARSE_TEXT,
                                user_defined_dpi: String(Math.round(ocrScale * 72)),
                                preserve_interword_spaces: '1'
                            });
                        }
                        setStatus1({
                            active: true,
                            text: `กำลังประมวลผล ${pageNumber} จาก ${total} …`,
                            current: pageNumber,
                            total
                        });
                        const ocrViewport = page.getViewport({
                            scale: ocrScale
                        });
                        const ocrCanvas = document.createElement('canvas');
                        ocrCanvas.width = Math.floor(ocrViewport.width);
                        ocrCanvas.height = Math.floor(ocrViewport.height);
                        const ctxOcr = ocrCanvas.getContext('2d');
                        const tempOcrCanvas = document.createElement('canvas');
                        tempOcrCanvas.width = ocrCanvas.width;
                        tempOcrCanvas.height = ocrCanvas.height;
                        await page.render({
                            canvasContext: tempOcrCanvas.getContext('2d'),
                            viewport: ocrViewport
                        }).promise;
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
                        const viewport = page.getViewport({
                            scale: previewScale
                        });
                        const canvas = document.createElement('canvas');
                        canvas.width = Math.floor(viewport.width);
                        canvas.height = Math.floor(viewport.height);
                        const ctxPreview = canvas.getContext('2d');
                        const tempPreviewCanvas = document.createElement('canvas');
                        tempPreviewCanvas.width = canvas.width;
                        tempPreviewCanvas.height = canvas.height;
                        await page.render({
                            canvasContext: tempPreviewCanvas.getContext('2d'),
                            viewport
                        }).promise;
                        ctxPreview.fillStyle = '#ffffff';
                        ctxPreview.fillRect(0, 0, canvas.width, canvas.height);
                        ctxPreview.drawImage(tempPreviewCanvas, 0, 0);
                        thumbDataUrl = canvas.toDataURL('image/png');
                    }
                    const addressText = extractPdfAddressText(rawText, customer1);
                    const addr = extractAndCorrectAddress(addressText);
                    const formattedAddr = formatAddress(addr);
                    const pdfDestination = extractPdfDestination(rawText, customer1, addr, addressText);
                    const pdfSource = extractPdfSource(rawText, customer1);
                    let extractedPO = extractPdfOrderNumber(rawText, customer1);
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
                    const pdfItems = extractPdfItems(rawText, customer1);
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addPdfPageResult"])(results, poGroups, rowData, documentIndex, ORDER_NUMBER_NOT_FOUND);
                }
            }
            setPageResults1(results);
            if (results.length > 0) setSelectedPage1(results[0]);
            setPreviewZoom1(1);
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
                setStatus1({
                    active: false,
                    text: '',
                    current: 0,
                    total: 0
                });
                setIsProcessing1(false);
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
        setPrintPagesList((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2d$results$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortPdfResultsByPage"])(pagesList));
        setTimeout(()=>window.print(), 100);
    };
    const togglePrintPage = (id)=>{
        setSelectedPrintPages1((ids)=>ids.includes(id) ? ids.filter((value)=>value !== id) : [
                ...ids,
                id
            ]);
    };
    const toggleFilteredPrintPages = ()=>{
        const filteredIds = filteredResults.map((result)=>result.id);
        const allSelected = filteredIds.length > 0 && filteredIds.every((id)=>selectedPrintPages.includes(id));
        setSelectedPrintPages1((ids)=>allSelected ? ids.filter((id)=>!filteredIds.includes(id)) : [
                ...new Set([
                    ...ids,
                    ...filteredIds
                ])
            ]);
    };
    const sources = uniqueInOrder(pageResults.map((result)=>result.pdfSource));
    const sites = uniqueInOrder(pageResults.map((result)=>result.pdfDestination));
    const getItemsForSites = (selectedSiteValues)=>uniqueInOrder(pageResults.filter((result)=>selectedSiteValues.length === 0 || selectedSiteValues.includes(result.pdfDestination)).flatMap((result)=>result.pdfItems));
    const availableItems = getItemsForSites(selectedSites);
    const filteredResults = getFilteredResults();
    const totalResultPages = Math.max(1, Math.ceil(filteredResults.length / RESULTS_PER_PAGE));
    const currentResultsPage = Math.min(resultsPage, totalResultPages);
    const activeSelectedPage = filteredResults.find((result)=>result.id === selectedPage?.id) || filteredResults[0] || null;
    const visibleResults = filteredResults.slice((currentResultsPage - 1) * RESULTS_PER_PAGE, currentResultsPage * RESULTS_PER_PAGE);
    const selectedResultIndex = filteredResults.findIndex((result)=>result.id === activeSelectedPage?.id);
    const selectedPrintResults = pageResults.filter((result)=>selectedPrintPages.includes(result.id));
    const allFilteredPagesSelected = filteredResults.length > 0 && filteredResults.every((result)=>selectedPrintPages.includes(result.id));
    const selectPreviewPage = (index)=>{
        if (index >= 0 && index < filteredResults.length) setSelectedPage1(filteredResults[index]);
    };
    const paginationControls = filteredResults.length > RESULTS_PER_PAGE ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pagination paginationCompact",
        "aria-label": "เลือกหน้าผลการตรวจสอบ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                disabled: currentResultsPage === 1,
                onClick: ()=>setResultsPage1(currentResultsPage - 1),
                children: "ก่อนหน้า"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "paginationCurrent",
                children: [
                    "หน้า ",
                    currentResultsPage,
                    " / ",
                    totalResultPages
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                disabled: currentResultsPage === totalResultPages,
                onClick: ()=>setResultsPage1(currentResultsPage + 1),
                children: "ถัดไป"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 1473,
        columnNumber: 5
    }, this) : null;
    // --- Excel Filter Logic แบบเชื่อมโยงกัน (Google Sheets Style) ---
    const handleExcelFilterChange = (column, newSelected)=>{
        setExcelFilters((prev)=>({
                ...prev,
                [column]: newSelected
            }));
    };
    // ฟังก์ชันช่วยหาตัวเลือกที่เหลืออยู่ โดยจำลองการกรองจากฟิลเตอร์ "ตัวอื่น"
    const getAvailableOptions = (columnKey)=>{
        // ต้องเอารายการที่ "กำลังแสดงอยู่" มาให้เลือก แต่อย่าตัดรายการของตัวเองที่ถูกเลือกไปแล้วทิ้ง
        const availableRows = excelRows.filter((row)=>{
            const checkFilter = (key, rowValue)=>key === columnKey || excelFilters[key].length === 0 || excelFilters[key].includes(rowValue);
            return checkFilter('ponumber', row.ponumber) && checkFilter('shipToParty', row.shipToParty) && checkFilter('soldToParty', row.soldToParty) && checkFilter('productdescription', row.productdescription);
        });
        return uniqueInOrder(availableRows.map((r)=>r[columnKey]));
    };
    // ดึงรายการตัวเลือกแบบอัปเดตตามสถานะ (Dynamic Options)
    const excelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ponumber: getAvailableOptions('ponumber'),
            shipToParty: getAvailableOptions('shipToParty'),
            soldToParty: getAvailableOptions('soldToParty'),
            productdescription: getAvailableOptions('productdescription')
        }), [
        excelRows,
        excelFilters
    ]);
    const filteredExcelRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return excelRows.filter((row)=>{
            return (excelFilters.ponumber.length === 0 || excelFilters.ponumber.includes(row.ponumber)) && (excelFilters.shipToParty.length === 0 || excelFilters.shipToParty.includes(row.shipToParty)) && (excelFilters.soldToParty.length === 0 || excelFilters.soldToParty.includes(row.soldToParty)) && (excelFilters.productdescription.length === 0 || excelFilters.productdescription.includes(row.productdescription));
        });
    }, [
        excelRows,
        excelFilters
    ]);
    function formatPageRange(pages) {
        if (!pages || !pages.length) return '';
        const sorted = [
            ...new Set(pages)
        ].sort((a, b)=>a - b);
        const ranges = [];
        let start = sorted[0];
        let end = sorted[0];
        for(let i = 1; i < sorted.length; i++){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "po-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "po-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brandLine",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge",
                                    children: "Transport PO Sorting Tool"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 1546,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "po-title",
                                children: "ระบบคัดแยกเอกสารใบสั่งซื้อสินค้า"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1548,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "อัปโหลด PDF ใบสั่งซื้อสินค้า และไฟล์ Excel รายการสินค้า/ที่อยู่ เพื่อดูข้อมูลแยกตามไฟล์"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1549,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "brandIcon",
                        src: "/Brf Logos 2.png",
                        alt: "",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1551,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "po-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "uploads",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: `dropzone ${pdfFiles1.length ? 'filled' : ''} ${isPdfDragging ? 'dragging' : ''}`,
                                onDragOver: handlePdfDragOver,
                                onDragLeave: handlePdfDragLeave,
                                onDrop: handlePdfDrop,
                                children: [
                                    pdfFiles1.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearPdfFiles,
                                        disabled: isProcessing1,
                                        className: "clearFilesButton",
                                        title: "ล้างไฟล์ PDF",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1570,
                                                    columnNumber: 162
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1570,
                                                    columnNumber: 200
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1570,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1563,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "uploadLabel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "30",
                                                    height: "30",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 160
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "14 2 14 8 20 8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 231
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "16",
                                                            y1: "13",
                                                            x2: "8",
                                                            y2: "13"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 267
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "16",
                                                            y1: "17",
                                                            x2: "8",
                                                            y2: "17"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 306
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "10 9 9 9 8 9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1575,
                                                            columnNumber: 345
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1575,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1574,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "label",
                                                        children: "ไฟล์ PDF ใบสั่งซื้อสินค้า (เลือกได้หลายไฟล์)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1578,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `file ${isPdfDragging ? 'dragging' : ''}`,
                                                        children: pdfFiles1.length ? `${pdfFiles1.length} ไฟล์โหลดแล้ว` : 'ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1579,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1577,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "hiddenFileInput",
                                                type: "file",
                                                accept: "application/pdf",
                                                multiple: true,
                                                onChange: handlePdfChange,
                                                disabled: isProcessing1
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1581,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1573,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: `dropzone ${excelSources.length ? 'filled' : ''} ${isExcelDragging ? 'dragging' : ''}`,
                                onDragOver: handleExcelDragOver,
                                onDragLeave: handleExcelDragLeave,
                                onDrop: handleExcelDrop,
                                children: [
                                    excelSources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearExcelFiles,
                                        className: "clearFilesButton",
                                        title: "ล้างไฟล์ Excel",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1598,
                                                    columnNumber: 162
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1598,
                                                    columnNumber: 200
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 1598,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1592,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "uploadLabel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "30",
                                                    height: "30",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "3",
                                                            y: "3",
                                                            width: "18",
                                                            height: "18",
                                                            rx: "2",
                                                            ry: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 160
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "3",
                                                            y1: "9",
                                                            x2: "21",
                                                            y2: "9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 217
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "9",
                                                            y1: "21",
                                                            x2: "9",
                                                            y2: "9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 254
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1603,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1602,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "label",
                                                        children: "ไฟล์ Excel (ship / description)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `file ${isExcelDragging ? 'dragging' : ''}`,
                                                        children: excelSources.length ? `${excelRows.length} แถวจาก ${excelSources.length} ไฟล์โหลดแล้ว` : 'ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1607,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1605,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "hiddenFileInput",
                                                type: "file",
                                                accept: ".xlsx,.xls,.csv",
                                                multiple: true,
                                                onChange: handleExcelChange
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1609,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1601,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1585,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1555,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "toolbar mainToolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "customer-filter",
                                        className: "customerLabel",
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "customer-filter",
                                        value: customer1,
                                        onChange: handleCustomerChange,
                                        disabled: isProcessing1,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Lotus",
                                                children: "Lotus"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1618,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CJ Express",
                                                children: "CJ Express"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1619,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Makro",
                                                children: "Makro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1620,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CP All",
                                                children: "CP All"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1621,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Big C",
                                                children: "Big C"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1622,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Mini Big C",
                                                children: "Mini Big C"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1623,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1617,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "processButton",
                                onClick: processPdf,
                                disabled: !pdfFiles1.length || isProcessing1,
                                children: isProcessing1 ? 'กำลังประมวลผล...' : 'ประมวลผล PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1627,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                id: "source-filter",
                                label: "ต้นทางจาก PDF",
                                options: sources,
                                selected: selectedSources,
                                onChange: (values)=>{
                                    setSelectedSources(values);
                                    setResultsPage1(1);
                                },
                                disabled: !pageResults.length,
                                hint: "เรียงตามลำดับที่พบใน PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                id: "site-filter",
                                label: "ปลายทางจาก PDF",
                                options: sites,
                                selected: selectedSites,
                                onChange: (values)=>{
                                    setSelectedSites(values);
                                    const allowedItems = new Set(getItemsForSites(values));
                                    setSelectedItems((current)=>current.filter((item)=>allowedItems.has(item)));
                                    setResultsPage1(1);
                                },
                                disabled: !pageResults.length,
                                hint: "เรียงตามลำดับที่พบใน PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxDropdown, {
                                id: "item-filter",
                                label: "รายการสินค้า",
                                options: availableItems,
                                selected: selectedItems,
                                onChange: (values)=>{
                                    setSelectedItems(values);
                                    setResultsPage1(1);
                                },
                                disabled: !pageResults.length,
                                hint: "เรียงตามลำดับที่พบใน PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1656,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spacer"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pageIndicator",
                                children: pageResults.length === 0 ? 'ยังไม่มีข้อมูล' : selectedSources.length || selectedSites.length || selectedItems.length ? `พบ ${filteredResults.length} จาก ${pageResults.length} หน้า` : `ทั้งหมด ${pageResults.length} หน้า`
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                disabled: !selectedPrintResults.length,
                                onClick: ()=>triggerPrint(selectedPrintResults),
                                className: "printButton",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "6 9 6 2 18 2 18 9"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1679,
                                                columnNumber: 179
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1679,
                                                columnNumber: 218
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "6",
                                                y: "14",
                                                width: "12",
                                                height: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1679,
                                                columnNumber: 305
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1679,
                                        columnNumber: 13
                                    }, this),
                                    "พิมพ์หน้าที่เลือก",
                                    selectedPrintResults.length > 0 ? ` (${selectedPrintResults.length})` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1673,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1614,
                        columnNumber: 9
                    }, this),
                    status.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "statusBar active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "statusRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "statusText",
                                        children: status.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1687,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "statusCount",
                                        children: status.total > 0 ? `${status.current}/${status.total}` : ''
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1688,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1686,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progressTrack",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                                    className: "progressFill",
                                    value: status.current,
                                    max: status.total || 1,
                                    "aria-label": "ความคืบหน้าการประมวลผล"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 1691,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1690,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1685,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workspace",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panelLeft",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "panel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "sectionHeading",
                                                children: [
                                                    "ผลการตรวจสอบรายหน้า ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "count",
                                                        children: pageResults.length > 0 ? `(${filteredResults.length} หน้า)` : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1700,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1699,
                                                columnNumber: 15
                                            }, this),
                                            paginationControls,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tableScroll",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "selectColumn",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: allFilteredPagesSelected,
                                                                            onChange: toggleFilteredPrintPages,
                                                                            disabled: !filteredResults.length,
                                                                            "aria-label": "เลือกทุกหน้าที่แสดง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1710,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1709,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "PO Number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1717,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "comparisonColumn",
                                                                        children: "เปรียบเทียบกับ Excel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1718,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "ต้นทางจาก PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1719,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: "ปลายทางจาก PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1720,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1708,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1707,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: pageResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "5",
                                                                    className: "tableEmpty",
                                                                    children: "อัปโหลดไฟล์แล้วกด “ประมวลผล PDF”"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1725,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1725,
                                                                columnNumber: 23
                                                            }, this) : filteredResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "5",
                                                                    className: "tableEmpty tableEmptyWarning",
                                                                    children: "ไม่พบหน้าที่ตรงกับตัวกรองนี้"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1727,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1727,
                                                                columnNumber: 23
                                                            }, this) : visibleResults.map((r, idx)=>{
                                                                const isSelected = selectedPage?.id === r.id;
                                                                const isPrintSelected = selectedPrintPages.includes(r.id);
                                                                // 🎯 ลอจิกใหม่: เช็กว่าเลข PO ของ PDF หน้านี้ มีใน Excel หรือไม่
                                                                const hasPo = r.pdfOrderNumber && r.pdfOrderNumber !== ORDER_NUMBER_NOT_FOUND;
                                                                const matchInExcel = hasPo && excelRows.some((row)=>row.ponumber && row.ponumber.toString().trim() === r.pdfOrderNumber.toString().trim());
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: isSelected ? 'selected' : '',
                                                                    onClick: ()=>setSelectedPage1(r),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "pageSelectCell",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                    checked: isPrintSelected,
                                                                                    onChange: ()=>togglePrintPage(r.id),
                                                                                    onClick: (event)=>event.stopPropagation(),
                                                                                    "aria-label": `เลือก PO ${r.pdfOrderNumber} สำหรับพิมพ์`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1746,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "mono pageNumber",
                                                                                    children: [
                                                                                        "หน้า ",
                                                                                        formatPageRange(r.pages)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1752,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "                         "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1745,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "addrBefore dataCell",
                                                                            children: r.pdfOrderNumber || ORDER_NUMBER_NOT_FOUND
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1755,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "comparisonCell",
                                                                            children: hasPo ? excelRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "comparisonBadge comparisonBadgePdf",
                                                                                children: "เฉพาะ PDF"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1761,
                                                                                columnNumber: 37
                                                                            }, this) : matchInExcel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "comparisonBadge comparisonBadgeMatch",
                                                                                children: "✅ ตรงกัน"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1763,
                                                                                columnNumber: 39
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "comparisonBadge comparisonBadgeMissing",
                                                                                children: "❌ ไม่พบ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1764,
                                                                                columnNumber: 39
                                                                            }, this) : '-'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1758,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "addrBefore dataCell",
                                                                            children: r.pdfSource || 'ไม่พบต้นทาง'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1767,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "addrBefore dataCell",
                                                                            children: r.pdfDestination && r.pdfDestination !== 'ไม่พบจังหวัดปลายทาง' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "destinationValue",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        width: "12",
                                                                                        height: "12",
                                                                                        viewBox: "0 0 24 24",
                                                                                        fill: "none",
                                                                                        stroke: "var(--teal)",
                                                                                        strokeWidth: "2",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/page.jsx",
                                                                                                lineNumber: 1771,
                                                                                                columnNumber: 177
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                cx: "12",
                                                                                                cy: "10",
                                                                                                r: "3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/page.jsx",
                                                                                                lineNumber: 1771,
                                                                                                columnNumber: 236
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/page.jsx",
                                                                                        lineNumber: 1771,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    r.pdfDestination
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1770,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "destinationMissing",
                                                                                children: r.pdfDestination
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.jsx",
                                                                                lineNumber: 1775,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1768,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, r.id || idx, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1740,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1723,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1706,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1705,
                                                columnNumber: 15
                                            }, this),
                                            paginationControls
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1698,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "panel excelDataPanel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "sectionHeading",
                                                children: [
                                                    "ข้อมูลจาก Excel ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "count",
                                                        children: filteredExcelRows.length > 0 ? `(${filteredExcelRows.length} แถว)` : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1790,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1789,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tableScroll",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "PO Number",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.ponumber,
                                                                                    selected: excelFilters.ponumber,
                                                                                    onChange: (val)=>handleExcelFilterChange('ponumber', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1799,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1797,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1796,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "Ship-to party",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.shipToParty,
                                                                                    selected: excelFilters.shipToParty,
                                                                                    onChange: (val)=>handleExcelFilterChange('shipToParty', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1805,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1803,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1802,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "Sold To Party",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.soldToParty,
                                                                                    selected: excelFilters.soldToParty,
                                                                                    onChange: (val)=>handleExcelFilterChange('soldToParty', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1811,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1809,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1808,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "excelColumnHeader",
                                                                            children: [
                                                                                "Product Description",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnFilterDropdown, {
                                                                                    options: excelOptions.productdescription,
                                                                                    selected: excelFilters.productdescription,
                                                                                    onChange: (val)=>handleExcelFilterChange('productdescription', val)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.jsx",
                                                                                    lineNumber: 1817,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1815,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1814,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1795,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1794,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: !filteredExcelRows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: "4",
                                                                    className: "tableEmpty",
                                                                    children: excelRows.length > 0 ? 'ไม่พบข้อมูลที่ตรงกับตัวกรอง' : 'อัปโหลดไฟล์ Excel เพื่อแสดงข้อมูล'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1824,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1824,
                                                                columnNumber: 23
                                                            }, this) : filteredExcelRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "dataCell",
                                                                            children: row.ponumber || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1828,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            children: row.shipToParty || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1829,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            children: row.soldToParty || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1830,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            children: row.productdescription || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1831,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, `${row.source}-${index}`, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1827,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1822,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 1793,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1792,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1788,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1697,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "panel previewPanel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "sectionHeading",
                                        children: "ตัวอย่างหน้าเอกสาร"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1842,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "previewBody",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "previewControls",
                                                "aria-label": "ควบคุมตัวอย่างเอกสาร",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: selectedResultIndex <= 0,
                                                        onClick: ()=>selectPreviewPage(selectedResultIndex - 1),
                                                        "aria-label": "หน้าก่อนหน้า",
                                                        children: "‹"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1845,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: activeSelectedPage?.id || '',
                                                        onChange: (event)=>selectPreviewPage(filteredResults.findIndex((result)=>result.id === event.target.value)),
                                                        disabled: !filteredResults.length,
                                                        "aria-label": "เลือกหน้าเอกสาร",
                                                        children: [
                                                            !filteredResults.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "ยังไม่มีหน้า"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1852,
                                                                columnNumber: 47
                                                            }, this),
                                                            filteredResults.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: result.id,
                                                                    children: result.pdfOrderNumber !== ORDER_NUMBER_NOT_FOUND ? `PO: ${result.pdfOrderNumber} (หน้า ${formatPageRange(result.pages)})` : `หน้า ${formatPageRange(result.pages)}`
                                                                }, result.id, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1854,
                                                                    columnNumber: 21
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1846,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: selectedResultIndex < 0 || selectedResultIndex >= filteredResults.length - 1,
                                                        onClick: ()=>selectPreviewPage(selectedResultIndex + 1),
                                                        "aria-label": "หน้าถัดไป",
                                                        children: "›"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1861,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "previewDivider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1862,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: !activeSelectedPage || previewZoom <= 0.5,
                                                        onClick: ()=>setPreviewZoom1((value)=>Math.max(0.5, value - 0.25)),
                                                        "aria-label": "ซูมออก",
                                                        children: "−"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1864,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "zoomValue",
                                                        children: [
                                                            Math.round(previewZoom * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1865,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        disabled: !activeSelectedPage || previewZoom >= 2,
                                                        onClick: ()=>setPreviewZoom1((value)=>Math.min(2, value + 0.25)),
                                                        "aria-label": "ซูมเข้า",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1866,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        disabled: !activeSelectedPage || previewZoom === 1,
                                                        onClick: ()=>setPreviewZoom1(1),
                                                        children: "รีเซ็ต"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1867,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1844,
                                                columnNumber: 15
                                            }, this),
                                            !activeSelectedPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "previewEmpty",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "previewEmptyIcon",
                                                        width: "48",
                                                        height: "48",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "var(--line)",
                                                        strokeWidth: "1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "3",
                                                                y: "3",
                                                                width: "18",
                                                                height: "18",
                                                                rx: "2",
                                                                ry: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1871,
                                                                columnNumber: 147
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "8.5",
                                                                cy: "8.5",
                                                                r: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1871,
                                                                columnNumber: 204
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "21 15 16 10 5 21"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1871,
                                                                columnNumber: 240
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1871,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1872,
                                                        columnNumber: 19
                                                    }, this),
                                                    "เลือกแถวในตารางด้านซ้าย",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1873,
                                                        columnNumber: 42
                                                    }, this),
                                                    "เพื่อดูตัวอย่างหน้านั้น"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1870,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "previewCanvas",
                                                        children: activeSelectedPage.thumbDataUrls.map((thumb, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "previewPage",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "previewPageNumber",
                                                                        children: [
                                                                            "หน้า ",
                                                                            activeSelectedPage.pages[idx]
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1880,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        className: `previewImage previewZoom${Math.round(previewZoom * 100)}`,
                                                                        src: thumb,
                                                                        alt: `Page ${activeSelectedPage.pages[idx]}`,
                                                                        style: {
                                                                            width: `${previewZoom * 100}%`,
                                                                            height: 'auto',
                                                                            display: 'block',
                                                                            margin: '0 auto'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1883,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/page.jsx",
                                                                lineNumber: 1879,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1877,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "previewDetail",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "หน้า"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1894,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "หน้า"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1894,
                                                                    columnNumber: 36
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "mono pageDetailValue",
                                                                    children: [
                                                                        formatPageRange(activeSelectedPage.pages),
                                                                        " / ",
                                                                        filteredResults.length,
                                                                        " PO"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1895,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "แหล่งข้อความ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1898,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: [
                                                                        activeSelectedPage.source === 'text-layer' ? 'ข้อความในไฟล์ PDF' : 'OCR (ไม่พบชั้นข้อความ)',
                                                                        activeSelectedPage.source === 'ocr' && activeSelectedPage.ocrConfidence !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `tag ${activeSelectedPage.ocrConfidence < OCR_LOW_CONFIDENCE ? 'tagReview' : 'tagMatch'} ocrConfidenceTag`,
                                                                            children: [
                                                                                "ความมั่นใจ OCR ",
                                                                                Math.round(activeSelectedPage.ocrConfidence),
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.jsx",
                                                                            lineNumber: 1902,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1899,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "ต้นทางจาก PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1907,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "previewSource",
                                                                    children: activeSelectedPage.pdfSource || 'ไม่พบต้นทาง'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1907,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: "ปลายทางจาก PDF"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1909,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `tag destinationTag ${activeSelectedPage.pdfDestination !== 'ไม่พบจังหวัดปลายทาง' ? 'tagMatch' : 'tagMismatch'}`,
                                                                        children: activeSelectedPage.pdfDestination || 'ไม่พบปลายทาง'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.jsx",
                                                                        lineNumber: 1911,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.jsx",
                                                                    lineNumber: 1910,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 1893,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 1892,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 1876,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 1843,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 1841,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1696,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "note pageFooter",
                        children: "by Process Excellence Team 2026"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1923,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1554,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "printArea",
                children: printPagesList.flatMap((p)=>p.thumbDataUrls.map((thumb, idx)=>({
                            thumb,
                            pageNum: p.pages[idx]
                        }))).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "printPage",
                        children: item.thumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.thumb,
                            alt: `Print Page ${item.pageNum}`
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 1933,
                            columnNumber: 30
                        }, this)
                    }, i, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 1932,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 1928,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 1542,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Button({ className, variant = 'default', size = 'default', type = 'button', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('ui-button', `ui-button-${variant}`, `ui-button-${size}`, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('ui-card', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('ui-card-header', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('ui-card-content', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/ui/checkbox.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('ui-checkbox', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/ui/select.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
function Select({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('ui-select', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/pdf-results.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1gzcyp6._.js.map