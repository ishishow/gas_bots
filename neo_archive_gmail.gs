function archiveThreads() {
  const date = new Date();
  date.setDate(date.getDate() - 3);
  
  const searchQuery = `in:inbox before:${Utilities.formatDate(date, 'JST', 'yyyy/M/d')}`;
  const threads = GmailApp.search(searchQuery);
  GmailApp.moveThreadsToArchive(threads);
}
