export function addPdfPageResult(results, groups, rowData, documentIndex, missingOrderNumber) {
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
  existing.pdfItems = [...new Set([...existing.pdfItems, ...rowData.pdfItems])];
}

export function sortPdfResultsByPage(results) {
  return [...results].sort((left, right) => (
    (left.pages?.[0] ?? Infinity) - (right.pages?.[0] ?? Infinity)
  ));
}
