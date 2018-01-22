chrome.storage.local.get("hslsetvdata", function (data) {
    new Function(data.hslsetvdata)();
});