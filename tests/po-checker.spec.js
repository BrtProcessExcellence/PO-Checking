import { expect, test } from '@playwright/test';

function createPdf(text) {
  const escapedText = text.replace(/[\\()]/g, '\\$&');
  const content = Buffer.from(`BT /F1 14 Tf 72 720 Td (${escapedText}) Tj ET\n`, 'ascii');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];

  const parts = [Buffer.from('%PDF-1.4\n', 'ascii')];
  const offsets = [0];
  let length = parts[0].length;

  objects.forEach((object, index) => {
    const bytes = Buffer.from(`${index + 1} 0 obj\n${object}\nendobj\n`, 'ascii');
    offsets.push(length);
    parts.push(bytes);
    length += bytes.length;
  });

  const streamObject = Buffer.concat([
    Buffer.from(`5 0 obj\n<< /Length ${content.length} >>\nstream\n`, 'ascii'),
    content,
    Buffer.from('endstream\nendobj\n', 'ascii'),
  ]);
  offsets.push(length);
  parts.push(streamObject);
  length += streamObject.length;

  const xrefOffset = length;
  const xref = [
    'xref',
    `0 ${offsets.length}`,
    '0000000000 65535 f ',
    ...offsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n `),
    'trailer',
    `<< /Size ${offsets.length} /Root 1 0 R >>`,
    'startxref',
    String(xrefOffset),
    '%%EOF',
    '',
  ].join('\n');

  parts.push(Buffer.from(xref, 'ascii'));
  return Buffer.concat(parts);
}

async function uploadPdf(page, text) {
  await page.locator('input[type="file"][accept="application/pdf"]').setInputFiles({
    name: 'qa-sample.pdf',
    mimeType: 'application/pdf',
    buffer: createPdf(text),
  });
}

async function uploadCsv(page, csv) {
  await page.locator('input[type="file"][accept=".xlsx,.xls,.csv"]').setInputFiles({
    name: 'qa-sample.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from(csv),
  });
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('shows the PO checker and enables processing only after a PDF is selected', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: 'ระบบคัดแยกเอกสารใบสั่งซื้อสินค้า' })).toBeVisible();

  const processButton = page.getByRole('button', { name: 'ประมวลผล PDF' });
  await expect(processButton).toBeDisabled();

  await uploadPdf(page, 'Purchase Order No: PO-12345');

  await expect(page.getByText('1 ไฟล์โหลดแล้ว')).toBeVisible();
  await expect(processButton).toBeEnabled();

  await processButton.click();
  await expect(page.locator('.panelLeft table tbody tr').first()).toContainText('PO-12345');

  await page.locator('button[title="ล้างไฟล์ PDF"]').click();
  await expect(page.getByText('ลากไฟล์มาวาง หรือ คลิกเพื่อเลือก').first()).toBeVisible();
  await expect(processButton).toBeDisabled();
  await expect(page.locator('.panelLeft table tbody tr').first()).toContainText('อัปโหลดไฟล์แล้วกด');
});

test('switches the results table to the NDC columns', async ({ page }) => {
  await page.getByLabel('Customer').selectOption('NDC');

  await expect(page.getByRole('columnheader', { name: 'Destination' }).first()).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'PO Number' }).first()).toBeVisible();
});

test('imports CSV rows and displays them in the Excel table', async ({ page }) => {
  const csv = [
    'PO Number,Sold To Party,Delivery,Address,Product description',
    'PO-12345,QA Store,DEL-10,Bangkok QA Branch,QA Sample Product',
  ].join('\n');

  await uploadCsv(page, csv);

  await expect(page.getByText('1 แถวจาก 1 ไฟล์โหลดแล้ว')).toBeVisible();
  const importedRow = page.locator('.excelDataPanel tbody tr').filter({ hasText: 'PO-12345' });
  await expect(importedRow).toContainText('QA Store');
  await expect(importedRow).toContainText('QA Sample Product');
});

test('shows the red missing badge when the PDF PO is not in Excel', async ({ page }) => {
  await uploadCsv(page, [
    'PO Number,Sold To Party,Delivery,Ship-to Party,Product description',
    'PO-99999,QA Store,DEL-10,Bangkok QA Branch,QA Sample Product',
  ].join('\n'));

  await expect(page.getByText('1 แถวจาก 1 ไฟล์โหลดแล้ว')).toBeVisible();
  await uploadPdf(page, 'Purchase Order No: PO-12345');
  await page.getByRole('button', { name: 'ประมวลผล PDF' }).click();

  const resultRow = page.locator('.panelLeft table tbody tr').first();
  await expect(resultRow).toContainText('PO-12345');
  await expect(resultRow.locator('.comparisonBadgeMissing')).toHaveText('❌ ไม่พบ');
});

test('shows the missing-number result when the PDF has no PO number and no Excel is uploaded', async ({ page }) => {
  await uploadPdf(page, 'QA sample document without an order identifier');
  await page.getByRole('button', { name: 'ประมวลผล PDF' }).click();

  const resultRow = page.locator('.panelLeft table tbody tr').first();
  await expect(resultRow).toContainText('ไม่พบเลขที่');
  await expect(resultRow.locator('td').nth(2)).toHaveText('-');
});

test('filters the Excel table to the selected QA Store only', async ({ page }) => {
  await uploadCsv(page, [
    'PO Number,Sold To Party,Delivery,Ship-to Party,Product description',
    'PO-12345,QA Store,DEL-10,QA Store,QA Sample Product',
    'PO-67890,Other Store,DEL-20,Other Store,Other Sample Product',
  ].join('\n'));

  const excelRows = page.locator('.excelDataPanel tbody tr');
  await expect(excelRows).toHaveCount(2);

  const shipToFilter = page.locator('.excelDataPanel th')
    .filter({ hasText: 'Address' })
    .locator('details.tableFilterDropdown');
  await shipToFilter.locator('summary').click();
  await shipToFilter.getByLabel('QA Store').check();

  await expect(excelRows).toHaveCount(1);
  await expect(excelRows.first()).toContainText('QA Store');
  await expect(excelRows.first()).not.toContainText('Other Store');
});
