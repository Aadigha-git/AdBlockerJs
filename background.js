let adBlockEnabled = true;

chrome.runtime.onInstalled.addListener(function() {
  // Set the default ad blocker status on installation
  chrome.storage.sync.set({ 'adBlockEnabled': adBlockEnabled });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.adBlockEnabled !== undefined) {
    adBlockEnabled = request.adBlockEnabled;
  }
});
