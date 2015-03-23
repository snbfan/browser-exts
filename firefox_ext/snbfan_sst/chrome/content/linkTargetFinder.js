var linkTargetFinder = (function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	return {
		init : function () {
			gBrowser.addEventListener("load", function () {
				var autoRun = prefManager.getBoolPref("extensions.linktargetfinder.autorun");
				if (autoRun) {
					linkTargetFinder.run();
				}
			}, false);
		},
			
		run : function () {
			var serverRequestURL = 'http://%your_server_url%/chromeext/response.json',
				selection = content.document.getSelection().toString();
			
			if (selection.length == 0) {
				alert('Please select a text and try again');
		  		return;
			} else {
				// do ajax
			 	var req = new XMLHttpRequest();
			  	req.open("POST", serverRequestURL, true);
			  	req.onload = function() {alert('Your text "' + selection + '" was sent');}
			  	req.send('data=' + encodeURI(selection));
			}
		}
	};
})();
window.addEventListener("load", linkTargetFinder.init, false);