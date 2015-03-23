function speakSelection() {
	var focused = document.activeElement,
		serverRequestURL = 'http://%your_server_url%/chromeext/response.json',
  		selectedText;
	
  	if (focused) {
	    try {
	    	selectedText = focused.value.substring(focused.selectionStart, focused.selectionEnd);
		} catch (err) {
			
		}
  	}
  
  	if (selectedText == undefined) {
	  	var sel = window.getSelection();
	  	var selectedText = sel.toString();

	  	if (selectedText.length == 0) {
	  		alert('Please select a text and try again');
	  		return;
	  	}
  	}
  
  	var req = new XMLHttpRequest();
  	req.open("POST", serverRequestURL, true);
  	req.onload = function() {alert('Your text "' +selectedText+ '" was sent');}
  	req.send('data=' + encodeURI(selectedText));
}

function onExtensionMessage(request) {
	if (request['speakSelection'] != undefined) {
		if (!document.hasFocus()) {
			return;
		}
		speakSelection();
	} 
}

chrome.extension.onRequest.addListener(onExtensionMessage);