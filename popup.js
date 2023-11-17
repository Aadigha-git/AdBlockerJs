document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get('adBlockEnabled', function(data) {
    const adBlockEnabled = data.adBlockEnabled !== undefined ? data.adBlockEnabled : true;
    document.getElementById('toggleAdBlock').checked = adBlockEnabled;
  });

  // Toggle ad blocker when the checkbox is changed
  document.getElementById('toggleAdBlock').addEventListener('change', function() {
    const adBlockEnabled = this.checked;
    
    chrome.storage.sync.set({ 'adBlockEnabled': adBlockEnabled }, function() {
      chrome.runtime.sendMessage({ 'adBlockEnabled': adBlockEnabled });
    });
  });
});
