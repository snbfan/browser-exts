Extension for Firefox

1. To install the FF ext you should drag /firefox_ext/snbfan_sst.xpi into FF window.
2. /firefox_ext/snbfan_sst.xpi is a FF ext file (actually a zip-archive of source files with .xpi extention).
3. Service URL : /firefox_ext/chrome/content/linkTargetFinder.js:14
4. Reference : http://blog.mozilla.org/addons/2009/01/28/how-to-develop-a-firefox-extension/
5. How to use: on any page select text and click "LTF" button next to the adress bar.

Extension for Chrome

1. To install ext in Chrome first go to chrome://extensions/
2. Check "Developer mode" checkbox in extensions tab.
3. Click "Load unpacked extension". In the popup window select sources folder. (/chrome_ext.zip).
4. Service URL : content_script.js:3
5. Reference manuals : http://developer.chrome.com/extensions/samples.html#fe3bfa0dd0b9d2a0aab933bd6d3aab88
http://developer.chrome.com/extensions/getstarted.html
http://developer.chrome.com/extensions/devguide.html
http://developer.chrome.com/extensions/tut_debugging.html
http://developer.chrome.com/extensions/samples.html#fe3bfa0dd0b9d2a0aab933bd6d3aab88
7. To distribute the extension in Chrome Webstore you have to pack it:
7.1. Click "Pack extension" (next to "Load unpacked extension"). 
7.2. In dialog box select a path to a folder with source files ("Extension root directory"). 
7.3. Click "Pack extension" and get back packed extension and it's private key file (it is created automatically on a first run). 
Private key file is needed for ext update.

