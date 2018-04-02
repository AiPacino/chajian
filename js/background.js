!function () {
    chrome.storage.local.get("zqwbackv", function (e) {
        e = !$.isEmptyObject(e) ? e.zqwbackv : 0;
        chrome.storage.local.get("zqwjsonv", function (e1) {
            e1 = !$.isEmptyObject(e1) ? e1.zqwjsonv : 0;
            chrome.storage.local.get("zqwmainv", function (e2) {
                e2 = !$.isEmptyObject(e2) ? e2.zqwmainv : 0;
                chrome.storage.local.get("zqwpopv", function (e3) {
                    e3 = !$.isEmptyObject(e3) ? e3.zqwpopv : 0;
                    chrome.storage.local.get("zqwsetv", function (e4) {
                        e4 = !$.isEmptyObject(e4) ? e4.zqwsetv : 0;
                        post(e, e1, e2, e3, e4);
                    });
                });
            });
        });
    });

    function post(e, e1, e2, e3, e4) {
        var arr = [
            {"v": e, "n": "back", "c": "b"}, {"v": e1, "n": "json", "c": "j"}, {"v": e2, "n": "main", "c": "m"},
            {"v": e3, "n": "pop", "c": "p"}, {"v": e4, "n": "set", "c": "s"}];
        var newArr = [];
        var time = new Date().getTime();
        $.ajax({
            type: "get",
            // url: "http://www.leiqing.club/file/switch/version.json?t=" + time,
            url: "k/version.json?t=" + time,
            dataType: "json",
            success: function (e) {
                $.each(e, function (v, k) {
                    $.each(arr, function (v1, k1) {
                        if (k1.c == k.n) {
                            var name = k1.n == "json" ? ".json" : ".js";
                            if (k1.v != k.v) {
                                newArr.push({"link": "online/version/" + k.v + "/" + k1.n + name, "version": k.v, "name": k1.n});
                            }
                            return false;
                        }
                    })
                });
                a(newArr);
            },
            error: function () {
                b();
            }
        })
    }

    function a(e) {
        if (e.length == 0) {
            start();
            return
        }
        var count = e.length;
        var num = 0;

        function jia() {
            num += 1;
            if (num == count) {
                start();
            }
        }

        $.each(e, function (v, k) {
            var name = k.name;
            var url = k.link;
            var dataType = "html";
            var lurl = 'local/' + name + '.js';
            if (name == "json") {
                dataType = "json";
                lurl = 'local/' + name + '.json';
            }
            var vname = "zqw" + name + "v";
            var cname = "zqw" + name + "vdata";
            $.ajax({
                type: "get",
                // url: url,
                url: lurl + "1",
                dataType: dataType,
                success: function (e) {
                    chrome.storage.local.set({[cname]: e}, function () {
                        jia()
                    });
                    chrome.storage.local.set({[vname]: k.version})
                },
                error: function () {
                    chrome.storage.local.get([vname], function (data) {
                        if ($.isEmptyObject(data)) {
                            $.get(lurl, function (e) {
                                chrome.storage.local.set({[cname]: e}, function () {
                                    jia()
                                });
                            }, dataType);
                        } else {
                            jia()
                        }
                    });
                }
            })
        })
    }

    function b() {
        var arr = ["back", "main", "pop", "json", "set"];
        var count = 5;
        var num = 0;

        function jia() {
            num += 1;
            if (num == count) {
                start();
            }
        }

        $.each(arr, function (v, k) {
            var vname = "zqw" + k + "v";
            var cname = "zqw" + k + "vdata";
            var dataType = "html";
            var lurl = 'local/' + k + '.js';
            if (k == "json") {
                dataType = "json";
                lurl = 'local/' + k + '.json';
            }
            chrome.storage.local.get([vname], function (e) {
                if ($.isEmptyObject(e)) {
                    $.get(lurl, function (e) {
                        chrome.storage.local.set({[cname]: e}, function () {
                            jia()
                        });
                    }, dataType);
                } else {
                    jia()
                }
            });
        });
    }
}();

function start() {
    chrome.storage.local.get("zqwbackvdata", function (data) {
        new Function(data.zqwbackvdata)();
    });
}