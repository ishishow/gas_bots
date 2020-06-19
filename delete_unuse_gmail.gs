JavaScript
function archiveThreads() {
  const searchQuery = 'in:inbox before:2020/3/7';
  const threads = GmailApp.search(searchQuery);
  GmailApp.moveThreadsToArchive(threads);
}
