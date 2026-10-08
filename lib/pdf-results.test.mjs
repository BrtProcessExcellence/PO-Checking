import test from 'node:test';
import assert from 'node:assert/strict';
import { addPdfPageResult, sortPdfResultsByPage } from './pdf-results.mjs';

function createPage(orderNumber, page, item) {
  return {
    id: `page-${page}`,
    pages: [page],
    thumbDataUrls: [`page-${page}-image`],
    pdfOrderNumber: orderNumber,
    pdfItems: [item],
  };
}

test('groups pages with the same PO within one PDF document', () => {
  const results = [];
  const groups = {};

  addPdfPageResult(results, groups, createPage('PO1234', 1, 'item-a'), 0, 'missing');
  addPdfPageResult(results, groups, createPage('PO1234', 2, 'item-b'), 0, 'missing');

  assert.equal(results.length, 1);
  assert.deepEqual(results[0].pages, [1, 2]);
  assert.deepEqual(results[0].thumbDataUrls, ['page-1-image', 'page-2-image']);
  assert.deepEqual(results[0].pdfItems, ['item-a', 'item-b']);
});

test('keeps the same PO separate across different PDF documents', () => {
  const results = [];

  addPdfPageResult(results, {}, createPage('PO1234', 1, 'item-a'), 0, 'missing');
  addPdfPageResult(results, {}, createPage('PO1234', 2, 'item-b'), 1, 'missing');

  assert.equal(results.length, 2);
  assert.notEqual(results[0].id, results[1].id);
  assert.deepEqual(results.map(result => result.pages), [[1], [2]]);
});

test('does not group pages without a recognized PO number', () => {
  const results = [];
  const groups = {};

  addPdfPageResult(results, groups, createPage('missing', 1, 'item-a'), 0, 'missing');
  addPdfPageResult(results, groups, createPage('missing', 2, 'item-b'), 0, 'missing');

  assert.equal(results.length, 2);
  assert.deepEqual(results.map(result => result.pages), [[1], [2]]);
});

test('sorts print results by their first PDF page', () => {
  const results = [
    { pages: [8, 9] },
    { pages: [2, 3] },
    { pages: [5] },
  ];

  assert.deepEqual(sortPdfResultsByPage(results).map(result => result.pages[0]), [2, 5, 8]);
  assert.deepEqual(results.map(result => result.pages[0]), [8, 2, 5]);
});
