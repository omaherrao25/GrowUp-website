/**
 * GROWUP — Discount Lead Capture → Google Sheets
 *
 * HOW TO DEPLOY:
 * 1. Go to https://sheets.google.com → create a new sheet
 *    and rename the first tab to "Leads"
 * 2. In the sheet, go to Extensions → Apps Script
 * 3. Delete all existing code and paste this entire file
 * 4. Click Save (floppy disk icon)
 * 5. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy → copy the Web app URL
 * 7. Paste that URL into DiscountBanner.jsx where it says SHEET_WEBHOOK_URL
 */

const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME);

    // Add header row automatically on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Brand / Company']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    const params = e.parameter;

    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      params.name  || '',
      params.email || '',
      params.phone || '',
      params.brand || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test this function manually inside Apps Script editor
function testDoPost() {
  const mock = { parameter: { name: 'Test User', email: 'test@example.com', phone: '9999999999', brand: 'Test Brand' } };
  const result = doPost(mock);
  Logger.log(result.getContent());
}
