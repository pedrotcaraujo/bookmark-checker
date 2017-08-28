document.addEventListener('DOMContentLoaded', function() {
    chrome.bookmarks.getTree(function(bookmarksTree) {
        console.log(bookmarksTree);
    })
})