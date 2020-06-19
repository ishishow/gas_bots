function createDraft() {
  const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  const to = values[1][1];
  const subject = values[2][1];
  let body = '';
  body += values[3][1] + '\n\n';
  body += values[4][1] + '\n\n';
  body += values[5][1];
  
  GmailApp.createDraft(to, subject, body);
}
