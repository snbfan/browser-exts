(function() {
	loadContentScriptInAllTabs();

	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {});

	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.sendRequest(tab.id, {
			'speakSelection' : true
		});
	});
})();
