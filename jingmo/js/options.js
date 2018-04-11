chrome.storage.local.get("wtqsetData",function (data) {
    new Function(data.wtqsetData)();
});