// $("<link>").attr({rel:"stylesheet",type:"text/css",href:chrome.runtime.getURL("css/main.css")}).appendTo("head");
// $("<link>").attr({rel:"stylesheet",type:"text/css",href:chrome.runtime.getURL("css/mainList.css")}).appendTo("head");
chrome.storage.local.get("wtqmainData",function (data) {
    new Function(data.wtqmainData)();
});