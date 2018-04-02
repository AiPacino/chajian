chrome.storage.local.get("zqwsetvdata", function (data) {
    new Function(data.zqwsetvdata)();
});