!function () {
    function cnzzAppend() {
        if (!$('html').html().match(`1264352198`)) {
            $("<script></script>").html(`var _czc = _czc || [];_czc.push(["_setAccount", "1264352198"]);`).appendTo($("head"));
            $.getScript("https://s13.cnzz.com/z_stat.php?id=1264352198&web_id=1264352198", function () {
                $(document).on("click", "[data-zqwClick357]", function () {
                    var name = $(this).attr("data-douyababapaopao");
                    var myScript = document.createElement("script");
                    myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${name}", "点击"]);`));
                    document.head.appendChild(myScript);
                });
                var clock;
                $(document).on("mouseenter", "[data-zqwMove357]", function () {
                    var that = $(this);
                    clock = setTimeout(function () {
                        var name = that.attr("data-douyamovepaopao");
                        var myScript = document.createElement("script");
                        myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${name}", "移入"]);`));
                        document.head.appendChild(myScript);
                    }, 500);
                });
                $(document).on("mouseleave", "[data-zqwMove357]", function () {
                    clearInterval(clock);
                });
            });
        }
    }               //
    function cnzzEvent(n, e) {
        var myScript = document.createElement("script");
        myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${n}", "${e}"]);`));
        document.head.appendChild(myScript);
    }            //CNZZ统计
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }          // 地址取参
    function getParam(url, name) {
        url = url.split("?")[1];
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = url.substr(0).match(reg);
        if (r != null) return r[2];
        return null;
    }        // 指定url取参
    function md5(t) {
        function e(t, e) {
            return t << e | t >>> 32 - e
        }

        function n(t, e) {
            var n, i, r, o, a;
            return r = 2147483648 & t, o = 2147483648 & e, n = 1073741824 & t, i = 1073741824 & e, a = (1073741823 & t) + (1073741823 & e), n & i ? 2147483648 ^ a ^ r ^ o : n | i ? 1073741824 & a ? 3221225472 ^ a ^ r ^ o : 1073741824 ^ a ^ r ^ o : a ^ r ^ o
        }

        function i(t, e, n) {
            return t & e | ~t & n
        }

        function r(t, e, n) {
            return t & n | e & ~n
        }

        function o(t, e, n) {
            return t ^ e ^ n
        }

        function a(t, e, n) {
            return e ^ (t | ~n)
        }

        function s(t, r, o, a, s, u, l) {
            return t = n(t, n(n(i(r, o, a), s), l)), n(e(t, u), r)
        }

        function u(t, i, o, a, s, u, l) {
            return t = n(t, n(n(r(i, o, a), s), l)), n(e(t, u), i)
        }

        function l(t, i, r, a, s, u, l) {
            return t = n(t, n(n(o(i, r, a), s), l)), n(e(t, u), i)
        }

        function c(t, i, r, o, s, u, l) {
            return t = n(t, n(n(a(i, r, o), s), l)), n(e(t, u), i)
        }

        function p(t) {
            var e, n, i = "", r = "";
            for (n = 0; 3 >= n; n++) e = t >>> 8 * n & 255, r = "0" + e.toString(16), i += r.substr(r.length - 2, 2);
            return i
        }

        var f, d, h, g, m, v, y, b, k, x = [];
        for (t = function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
            }
            return e
        }(t), x = function (t) {
            for (var e, n = t.length, i = n + 8, r = (i - i % 64) / 64, o = 16 * (r + 1), a = new Array(o - 1), s = 0, u = 0; n > u;) e = (u - u % 4) / 4, s = u % 4 * 8, a[e] = a[e] | t.charCodeAt(u) << s, u++;
            return e = (u - u % 4) / 4, s = u % 4 * 8, a[e] = a[e] | 128 << s, a[o - 2] = n << 3, a[o - 1] = n >>> 29, a
        }(t), v = 1732584193, y = 4023233417, b = 2562383102, k = 271733878, f = 0; f < x.length; f += 16) d = v, h = y, g = b, m = k, v = s(v, y, b, k, x[f + 0], 7, 3614090360), k = s(k, v, y, b, x[f + 1], 12, 3905402710), b = s(b, k, v, y, x[f + 2], 17, 606105819), y = s(y, b, k, v, x[f + 3], 22, 3250441966), v = s(v, y, b, k, x[f + 4], 7, 4118548399), k = s(k, v, y, b, x[f + 5], 12, 1200080426), b = s(b, k, v, y, x[f + 6], 17, 2821735955), y = s(y, b, k, v, x[f + 7], 22, 4249261313), v = s(v, y, b, k, x[f + 8], 7, 1770035416), k = s(k, v, y, b, x[f + 9], 12, 2336552879), b = s(b, k, v, y, x[f + 10], 17, 4294925233), y = s(y, b, k, v, x[f + 11], 22, 2304563134), v = s(v, y, b, k, x[f + 12], 7, 1804603682), k = s(k, v, y, b, x[f + 13], 12, 4254626195), b = s(b, k, v, y, x[f + 14], 17, 2792965006), y = s(y, b, k, v, x[f + 15], 22, 1236535329), v = u(v, y, b, k, x[f + 1], 5, 4129170786), k = u(k, v, y, b, x[f + 6], 9, 3225465664), b = u(b, k, v, y, x[f + 11], 14, 643717713), y = u(y, b, k, v, x[f + 0], 20, 3921069994), v = u(v, y, b, k, x[f + 5], 5, 3593408605), k = u(k, v, y, b, x[f + 10], 9, 38016083), b = u(b, k, v, y, x[f + 15], 14, 3634488961), y = u(y, b, k, v, x[f + 4], 20, 3889429448), v = u(v, y, b, k, x[f + 9], 5, 568446438), k = u(k, v, y, b, x[f + 14], 9, 3275163606), b = u(b, k, v, y, x[f + 3], 14, 4107603335), y = u(y, b, k, v, x[f + 8], 20, 1163531501), v = u(v, y, b, k, x[f + 13], 5, 2850285829), k = u(k, v, y, b, x[f + 2], 9, 4243563512), b = u(b, k, v, y, x[f + 7], 14, 1735328473), y = u(y, b, k, v, x[f + 12], 20, 2368359562), v = l(v, y, b, k, x[f + 5], 4, 4294588738), k = l(k, v, y, b, x[f + 8], 11, 2272392833), b = l(b, k, v, y, x[f + 11], 16, 1839030562), y = l(y, b, k, v, x[f + 14], 23, 4259657740), v = l(v, y, b, k, x[f + 1], 4, 2763975236), k = l(k, v, y, b, x[f + 4], 11, 1272893353), b = l(b, k, v, y, x[f + 7], 16, 4139469664), y = l(y, b, k, v, x[f + 10], 23, 3200236656), v = l(v, y, b, k, x[f + 13], 4, 681279174), k = l(k, v, y, b, x[f + 0], 11, 3936430074), b = l(b, k, v, y, x[f + 3], 16, 3572445317), y = l(y, b, k, v, x[f + 6], 23, 76029189), v = l(v, y, b, k, x[f + 9], 4, 3654602809), k = l(k, v, y, b, x[f + 12], 11, 3873151461), b = l(b, k, v, y, x[f + 15], 16, 530742520), y = l(y, b, k, v, x[f + 2], 23, 3299628645), v = c(v, y, b, k, x[f + 0], 6, 4096336452), k = c(k, v, y, b, x[f + 7], 10, 1126891415), b = c(b, k, v, y, x[f + 14], 15, 2878612391), y = c(y, b, k, v, x[f + 5], 21, 4237533241), v = c(v, y, b, k, x[f + 12], 6, 1700485571), k = c(k, v, y, b, x[f + 3], 10, 2399980690), b = c(b, k, v, y, x[f + 10], 15, 4293915773), y = c(y, b, k, v, x[f + 1], 21, 2240044497), v = c(v, y, b, k, x[f + 8], 6, 1873313359), k = c(k, v, y, b, x[f + 15], 10, 4264355552), b = c(b, k, v, y, x[f + 6], 15, 2734768916), y = c(y, b, k, v, x[f + 13], 21, 1309151649), v = c(v, y, b, k, x[f + 4], 6, 4149444226), k = c(k, v, y, b, x[f + 11], 10, 3174756917), b = c(b, k, v, y, x[f + 2], 15, 718787259), y = c(y, b, k, v, x[f + 9], 21, 3951481745), v = n(v, d), y = n(y, h), b = n(b, g), k = n(k, m);
        return (p(v) + p(y) + p(b) + p(k)).toLowerCase()
    }                     // md5
    function unicodeToUtf8(data) {
        str = unescape(data.replace(/\\u/g, "%u"));
        return str;
    }        //转义
    function numSub(a, b) {
        var c, d, e;    //
        function mul(a, b) {
            var c = 0,
                d = a.toString(),
                e = b.toString();
            try {
                c += d.split(".")[1].length;
            } catch (f) {
            }
            try {
                c += e.split(".")[1].length;
            } catch (f) {
            }
            return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
        }   //
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        e = Math.pow(10, Math.max(c, d));
        return (mul(a, e) - mul(b, e)) / e;
    }               //去掉浮点数的相减方法
    var locHost = location.host;
    //详情页
    !function () {
        var adaptationArr = {
            'detail.tmall.com': {'name': "tm", 'dom': ['#J_TabBarBox', '#side-shop-info .hd', '.tm-floatcart-link', '#mainwrap .tabbar-bg']},
            'detail.tmall.hk': {'name': "tm", 'dom': ['#J_TabBarBox', '#side-shop-info .hd', '.tm-floatcart-link', '#mainwrap .tabbar-bg']},
            'item.taobao.com': {'name': "tb", 'dom': ['#J_TabBarWrap']},
            'item.taobao.hk': {'name': "tb", 'dom': ['#J_TabBarWrap']},
            'detail.ju.taobao.com': {'name': "tm", 'dom': ['.dd-header']},
            'chaoshi.detail.tmall.com': {'name': "tm", 'dom': ['#page .tm-chaoshi-nav']},
            'item.jd.com': {'name': "jd", 'dom': ['#detail .tab-main']},
            'item.jd.hk': {'name': "jd", 'dom': ['#detail .tab-main']},
            // 'product.suning.com': {'name': "sn", 'dom': ['.fixbar', '.d-an-list']},
            // 'item.gome.com.cn': {'name': "gm", 'dom': ['#fixtabox']},
            // 'product.dangdang.com': {'name': "dd", 'dom': ['#tab-panels']}
        };
        var adaptationOk = 0;
        var nowPlat = "";
        $.each(adaptationArr, function (v, k) {
            if (locHost == v) {
                adaptationOk = 1;
                nowPlat = k.name;
                return false
            }
        });
        if (adaptationOk) {
            var cssStyle = 'body{font-size:50px}'; //设置样式
            // $("<style></style>").html(cssStyle).appendTo("head");
            var cssStyle1111 = '';   //设置节日样式
            // $("<style></style>").html(cssStyle1111).appendTo("head");
            var mainUrl, setting, settingNew, zqwSwitch;
            var qqUrl = 'http://shang.qq.com/wpa/qunwpa?idkey=b2a29fab51e05037225e64ac8d5e2944f9c72259f2d2c9e883acef25c97e4ae5';
            var infoGroup = {
                id: "", plat: nowPlat, title: "", price: "", sameNew: {}, pid: "", seller: "", cat: "",
                rCat: "", shop: "", pic: "", sale: "", amount: "", amountReq: "", startT: "", endT: ""
            };  //淘宝产品的属性集合
            chrome.storage.local.get(null, function (e) {
                var id = e.zqwjsonvdata.myMmId;
                id = id[Math.floor((Math.random() * id.length))];
                mainUrl = {
                    myMmId: id,
                    website: e.zqwjsonvdata.website,
                    referC: '',
                    referD: ''
                };
                setting = e.zqwSet; //每次重启会重置   临时设置
                settingNew = !$.isEmptyObject(e.zqwSetNew) ? e.zqwSetNew : {zqwTop: 'show', zqwMid: 'show'}; //设置页面设置的永久性
                zqwSwitch = e.zqwswitchvdata;
                if ($("body").attr("zqwSign159357") != 1) {
                    start();
                    $("body").attr("zqwSign159357", "1");
                }
            }); //
            function start() {
                var topHtml = `<div id="zqwT159">
                    <div class="zqwT159-logo-arrow"></div>
                    <div class="zqwT159-box zqwClear">
                        <div class="zqwT159-logo fl" title="惠省乐购物助手"><i></i></div>
                        <div class="zqwT159-like fl">
                            <i></i>
                            <span>值得买</span>
                            <div class="zqwT159-likeBack">
                            </div>
                            <div class="zqwT159-likeDrop">
                                <ul class="zqwClear"></ul>
                            </div>
                        </div>
                        <div class="zqwT159-bijia fl">
                            <i></i>
                            <span>全网比价</span>
                        </div>
                        <div class="zqwT159-sameStyle fl"></div>
                        <div class="zqwT159-open fr"></div>
                        <div class="zqwT159-guide fr">
                            <i></i>
                            <a href="${qqUrl}" target="_blank">领券咨询</a>
                        </div>
                        <div class="zqwT159-active fr">
                            <ul>
                                <li>
                                    <i></i>
                                    <a href="" target="_blank">必备春装 , 领取100元优惠券 !</a>
                                </li>
                                <li>
                                    <i></i>
                                    <a href="" target="_blank"> 领取100元优惠券 !</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="zqwT159-logo-fix"></div>
                </div>`;
                $("body").after(topHtml);
                $('.zqwT159-active ul').bxSlider({
                    mode: 'vertical', captions: true, auto: true, controls: false, autoHover: true, pager: false,
                });
                var middleHtml = `<div id="zqwM159">
                    <div class="zqwM159-main">
                        <div class="zqwM159-logo"><a href="" target="_blank"></a></div>
                        <div class="zqwM159-coupon">
                            <div class="zqwM159-title"><span>折扣优惠</span></div>
                            <div class="zqwM159-box zqwM159-box-coupon">
                                <div class="zqwM159-load">正在加载中...</div>
                                <div class="zqwM159-couponDan zqwClear"></div>
                                <div class="zqwM159-couponRec"></div>
                            </div>
                        </div>
                        <div class="zqwM159-h5">
                            <div class="zqwM159-title"><span>扫码</span></div>
                            <div class="zqwM159-box zqwM159-box-h5">
                                <div class="zqwM159-h5-box">
                                    <div class="zqwM159-h5-arrow">
                                        <div class="zqwM159-up1"></div>
                                        <div class="zqwM159-up2"></div>
                                        <div class="zqwM159-up3"></div>
                                    </div>
                                    <div class="zqwM159-h5-qCode"></div>
                                    <div class="zqwM159-h5-title">打开淘宝APP<br>扫码领券</div>
                                </div>
                            </div>
                        </div>
                        <div class="zqwM159-price">
                            <div class="zqwM159-title zqwM159-price-title"><span>价格趋势</span><b></b></div>
                            <div class="zqwM159-box zqwM159-box-price">
                                <div id="zqwM159-price-trend"></div>
                                <div class="zqwM159-price-explain">价格趋势由<span>找券窝</span>提供</div>
                                <div class="zqwM159-price-back">对不起，该商品的价格趋势正在收录中</div>
                            </div>
                        </div>
                        <div class="zqwM159-same">
                            <div class="zqwM159-title"><span>同款推荐</span></div>
                            <div class="zqwM159-box zqwM159-box-same">
                                <div class="zqwM159-same-toggle">
                                    <div class="fl active" data-num="1">同款推荐</div>
                                    <div class="fl" data-num="2">相似推荐</div>
                                </div>
                                <div class="zqwM159-same-back"></div>
                                <div class="zqwM159-same-sameStyle">
                                    <ul></ul>
                                </div>
                                <div class="zqwM159-same-similar" style="display: none">
                                    <ul></ul>
                                </div>
                            </div>
                        </div>
                        <div class="zqwM159-close">
                        </div>
                    </div>
                    <div class="zqwM159-ab">
                        <div class="zqwM159-ab-slider">
                            <ul>
                                <li>
                                    <i></i>
                                    <a href="" target="_blank">必备春装 , 领取100元优惠券 !</a>
                                </li>
                                <li>
                                    <i></i>
                                    <a href="" target="_blank"> 领取100元优惠券 !</a>
                                </li>
                            </ul>
                        </div>
                        <div class="zqwM159-ab-title">
                            <a href="" target="_blank">连衣裙打折, 快来抢</a>
                        </div>
                    </div>
                </div>`;
                var middleTemplateDom = {
                    ".tm-fcs-panel": 0,
                    ".tb-promo-meta": 0,
                    ".tb-meta": 0,
                    ".summary-price-wrap": 0,
                    ".proinfo-focus": 1,
                    ".prd-price-1": 1,
                    ".price_info": 1,
                    ".J_statusBanner": 1
                };
                $.each(middleTemplateDom, function (v) {
                    if ($(v).length) {
                        if (v == ".tm-fcs-panel") {
                            $(v).after("<div style='margin-right: 20px'>" + middleHtml + "</div>");
                        } else if (v == ".price_info") {
                            $(v).after("<div style='margin-left: -10px'>" + middleHtml + "</div>");
                        } else {
                            $(v).after(middleHtml);
                        }
                        return false;
                    }
                }); //中间区域插入代码块
                $('.zqwM159-ab-slider ul').bxSlider({
                    mode: 'vertical', auto: true, controls: false, autoHover: true, pager: false,
                }); //
                !function () {
                    var ymove = [];
                    $.each(adaptationArr, function (key, item) {
                        if (locHost == key) {
                            ymove = item.dom;
                            return false
                        }
                    });
                    if (ymove.length) {
                        $(document).scroll(function () {
                            if (($(ymove[0]).css("position") == "fixed") && (setting.zqwTop == 'show') && (settingNew.zqwTop == 'show')) {
                                $.each(ymove, function (key, item) {
                                    $(item).css("transform", 'translate(0,50px)');
                                });
                            } else {
                                $.each(ymove, function (key, item) {
                                    $(item).css("transform", 'translate(0,0)');
                                });
                            }
                        })
                    }
                    if (setting.zqwTop == 'hidden' || settingNew.zqwTop == 'hidden') {
                        $('.zqwT159-logo-arrow').show();
                        $(".zqwT159-box").css({'transform': 'translate(-100%, 0)'});
                        $("body").css({'transition': 'all .5s', "padding-top": "0px"});
                    } else {
                        $('.zqwT159-logo-arrow').hide();
                        $(".zqwT159-box").css({'transition': 'none', 'transform': 'translate(0,0)'});
                        $("body").css({'transition': 'all .5s', "padding-top": "50px"});
                    }
                    if (setting.zqwMid == 'hidden' || settingNew.zqwMid == 'hidden') {
                        $("#zqwM159").parent().css('display', 'none');
                    }
                }();                //插件顶部中部是否显示
                !function () {
                    $(".zqwT159-open").click(function () {
                        $('.zqwT159-logo-arrow').show();
                        $(".zqwT159-box").css({'transition': 'all .5s', 'transform': `translate(-100%,0)`});
                        $("body").css({'transition': 'all .5s', "padding-top": "0px"});
                        setting.zqwTop = 'hidden';
                        chrome.storage.local.set({zqwSet: {zqwTop: 'hidden', zqwMid: setting.zqwMid}});

                    });
                    $(".zqwT159-logo-fix,.zqwT159-logo-arrow").click(function () {
                        $(".zqwT159-box").css({'transition': 'all .5s', 'transform': 'translate(0,0)'});
                        $("body").css({'transition': 'all .5s', "padding-top": "50px"});
                        setting.zqwTop = 'show';
                        chrome.storage.local.set({zqwSet: {zqwTop: 'show', zqwMid: setting.zqwMid}});
                    });
                    $(".zqwM159-close").click(function () {
                        $("#zqwM159").fadeOut();
                    });
                    $("#zqwM159").on("mouseenter", ".zqwM159-coupon,.zqwM159-h5,.zqwM159-price,.zqwM159-same", function () {
                        $(this).children(".zqwM159-box").show();
                    });
                    $("#zqwM159").on("mouseleave", ".zqwM159-coupon,.zqwM159-h5,.zqwM159-price,.zqwM159-same", function () {
                        $(this).children(".zqwM159-box").hide();
                    });
                    $('.zqwM159-same-similar,.zqwM159-same-sameStyle,.zqwT159-like').on("mouseenter", function () {
                        var scrollHeight = $(window).scrollTop();
                        $(window).on('scroll.zqwScroll', function () {
                            $(window).scrollTop(scrollHeight);
                        });
                    });
                    $('.zqwM159-same-similar,.zqwM159-same-sameStyle,.zqwT159-like').on("mouseleave", function () {
                        $(window).off('scroll.zqwScroll');
                    });
                    $('.zqwT159-like').on("mouseenter", function () {
                        $(this).children(".zqwT159-likeDrop").show();
                        $(this).children(".zqwT159-likeBack").show();
                    });
                    $('.zqwT159-like').on("mouseleave", function () {
                        $(this).children(".zqwT159-likeDrop").hide();
                        $(this).children(".zqwT159-likeBack").hide();
                    });
                    $('.zqwM159-same-toggle').on("click", "div", function () {
                        $('.zqwM159-same-toggle div').removeClass('active');
                        $(this).addClass('active');
                        if ($(this).data("num") == 1) {
                            $('.zqwM159-same-sameStyle').show();
                            $('.zqwM159-same-similar').hide();
                        } else {
                            $('.zqwM159-same-similar').show();
                            $('.zqwM159-same-sameStyle').hide();
                        }
                    })
                }();                //事件绑定
                function startPrice(url) {
                    $.ajax({
                        url: "https://zhushou.huihui.cn/productSense",
                        data: {phu: url, type: "canvas"},
                        type: 'GET',
                        timeout: 5000,
                        dataType: 'json',
                        success: function (response) {
                            var data = response.priceHistoryData.list;
                            var time = new Date();
                            var nowTime = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
                            var valueList = [];
                            var dateList = [];
                            var newData = [];
                            var t = 0;
                            for (var i = 0; i < data.length; i++) {
                                var beforPrice = 0;
                                if (i > 0) {
                                    beforPrice = data[i - 1].price;
                                }
                                if (data[i].price != beforPrice) {
                                    newData[t] = data[i];
                                    t++;
                                }
                            }
                            var trueObj = newData[newData.length - 1];
                            if (newData[newData.length - 1].price == infoGroup.price) {
                                newData[newData.length - 1] = {price: infoGroup.price, time: nowTime};
                            } else {
                                newData[newData.length] = {price: infoGroup.price, time: nowTime};
                            }
                            var isOne = true;
                            if (newData.length == 1) {
                                var obj = newData[0];
                                newData = [obj, obj, obj];
                                isOne = false;
                            }
                            var arrSlice = newData.slice(-7);
                            $.each(arrSlice, function (v, k) {
                                valueList.push(k.price);
                                var res1 = [];
                                res1[0] = k.time.split('-')[1].replace(/^[0]/, '');
                                res1[1] = k.time.split('-')[2].replace(/^[0]/, '');
                                res1 = res1.join('/');
                                dateList.push(res1);
                            });
                            if (isOne == false) {
                                dateList[0] = "";
                                var res2 = [];
                                res2[0] = trueObj.time.split('-')[1].replace(/^[0]/, '');
                                res2[1] = trueObj.time.split('-')[2].replace(/^[0]/, '');
                                res2 = res2.join('/');
                                dateList[1] = res2;
                            }
                            if (valueList[valueList.length - 1] > valueList[valueList.length - 2]) {
                                $(".zqwM159-price-title span").fadeOut(function () {
                                    if (window.innerWidth && window.innerWidth < 1200) {
                                        $(this).html("上涨").fadeIn(1000);
                                    } else {
                                        $(this).html("价格上涨").fadeIn(1000);
                                    }
                                    $(this).next().fadeIn(1000).css("display", "inline-block").addClass("up");
                                });
                            } else if (valueList[valueList.length - 1] < valueList[valueList.length - 2]) {
                                $(".zqwM159-price-title span").fadeOut(function () {
                                    if (window.innerWidth && window.innerWidth < 1200) {
                                        $(this).html("下降").fadeIn(1000);
                                    } else {
                                        $(this).html("价格下降").fadeIn(1000);
                                    }
                                    $(this).next().fadeIn(1000).css("display", "inline-block").addClass("down");
                                });
                            }
                            var dom = echarts.init($('#zqwM159-price-trend')[0]);
                            var optionSet = {
                                tooltip: {trigger: 'axis'},
                                xAxis: [{
                                    data: dateList,
                                    axisLine: {lineStyle: {color: "#ccc", width: 1,}},
                                    axisTick: {show: false},
                                    axisLabel: {textStyle: {color: '#999'},}
                                }],
                                yAxis: [{
                                    scale: "true",
                                    splitNumber: 2,
                                    minInterval: 1,
                                    axisLine: {show: false},
                                    axisTick: {show: false},
                                    splitLine: {"show": false},
                                    axisLabel: {textStyle: {color: '#999'},}
                                }],
                                grid: [{
                                    bottom: '70',
                                    top: '50',
                                    left: '12%',
                                    right: '8%'
                                }],
                                series: [{
                                    type: 'line',
                                    smooth: false,
                                    symbol: "circle",
                                    symbolSize: 6,
                                    data: valueList,
                                    label: {normal: {show: true, color: "#000", fontFamily: "Microsoft Yahei", position: "top"}},
                                    itemStyle: {normal: {color: "#d0090f", label: {show: true}}},
                                    lineStyle: {normal: {color: "#d0090f"}},
                                    markPoint: {
                                        symbol: "rect",
                                        symbolSize: [50, 10],
                                        symbolOffset: [0, -26],
                                        itemStyle: {normal: {color: "transparent",}},
                                        label: {normal: {textStyle: {color: '#D0090F'}}},
                                        data: [{
                                            type: 'max', name: '最大值',
                                            label: {
                                                normal: {show: isOne, formatter: "最高"},
                                            }
                                        }, {
                                            type: 'min', name: '最小值',
                                            label: {
                                                normal: {show: isOne, formatter: "最低"},
                                            }
                                        }]
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: {
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                type: "linear",
                                                global: false,
                                                colorStops: [
                                                    {
                                                        offset: 0,
                                                        color: "rgba(208, 9, 15, 0.2)"
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: "rgba(208, 9, 15, 0)"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }]
                            };
                            dom.setOption(optionSet);
                            $(".zqwM159-price-explain").show();
                        },
                        error: function () {
                            $('#zqwM159-price-trend').hide();
                            $(".zqwM159-price-back").show();
                        }
                    });
                }       //历史价格
                function startParity(url) {
                    var num = Number.POSITIVE_INFINITY;
                    var smlArr = {
                        jd: {list: [], min: num, value: 14, url: ""},
                        tb: {list: [], min: num, value: 13, url: ""},
                        tm: {list: [], min: num, value: 12, url: ""},
                        wph: {list: [], min: num, value: 11, url: ""},
                        dd: {list: [], min: num, value: 10, url: ""},
                        sn: {list: [], min: num, value: 9, url: ""},
                        ymx: {list: [], min: num, value: 8, url: ""},
                        gm: {list: [], min: num, value: 7, url: ""},
                        yhd: {list: [], min: num, value: 6, url: ""},
                        yoho: {list: [], min: num, value: 5, url: ""},
                        jm: {list: [], min: num, value: 4, url: ""},
                        kl: {list: [], min: num, value: 3, url: ""},
                        yx: {list: [], min: num, value: 2, url: ""},
                        mgj: {list: [], min: num, value: 1, url: ""},
                        qt: {list: [], min: num, value: 0, url: ""},
                    };//
                    function makeObj(a, k) {
                        smlArr[a].list.push(k);
                        if (k.cutprice * 1 < smlArr[a].min) {
                            smlArr[a].min = k.cutprice * 1;
                            smlArr[a].url = k.url;
                        }
                    }   //
                    function getSameNew(url) {
                        chrome.extension.sendMessage({
                            name: "universal", url: "http://pricecomparison.browser.qq.com/get_comparison_info", type: "get", dataType: "json", data: {url: url}
                        }, function (e) {
                            if (e && e.product && e.product.length) {
                                var data = e.product;
                                $.each(data, function (v, k) {
                                    var name = k.sitename;
                                    switch (name) {
                                        case (name.match("京东") || {}).input:
                                            makeObj("jd", k);
                                            break;
                                        case (name.match("淘宝") || {}).input:
                                            makeObj("tb", k);
                                            break;
                                        case (name.match("天猫") || {}).input:
                                            makeObj("tm", k);
                                            break;
                                        case (name.match("唯品会") || {}).input:
                                            makeObj("wph", k);
                                            break;
                                        case (name.match("当当") || {}).input:
                                            makeObj("dd", k);
                                            break;
                                        case (name.match("苏宁") || {}).input:
                                            makeObj("sn", k);
                                            break;
                                        case (name.match("亚马逊") || {}).input:
                                            makeObj("ymx", k);
                                            break;
                                        case (name.match("国美") || {}).input:
                                            makeObj("gm", k);
                                            break;
                                        case (name.match("号店") || {}).input:
                                            makeObj("yhd", k);
                                            break;
                                        case (name.match("YOHO") || {}).input:
                                            makeObj("yoho", k);
                                            break;
                                        case (name.match("聚美") || {}).input:
                                            makeObj("jm", k);
                                            break;
                                        case (name.match("考拉") || {}).input:
                                            makeObj("kl", k);
                                            break;
                                        case (name.match("严选") || {}).input:
                                            makeObj("yx", k);
                                            break;
                                        case (name.match("蘑菇") || {}).input:
                                            makeObj("mgj", k);
                                            break;
                                        default:
                                            makeObj("qt", k);
                                    }
                                });
                                appendParity();
                            }
                        });
                    }   //新的获取不同商家同款数据
                    function appendParity() {
                        var obj = {
                            "tm": "天猫", "tb": "淘宝", "jd": "京东", "wph": "唯品会", "dd": "当当", "sn": "苏宁", "ymx": "亚马逊",
                            "gm": "国美", "yhd": "1号店", "yoho": "YOHO", "jm": "聚美", "kl": "考拉", "yx": "严选", "mgj": "蘑菇街", "qt": "其他"
                        };
                        infoGroup.sameNew = smlArr;
                        var html = "";
                        $.each(infoGroup.sameNew, function (v, k) {
                            if (k.url) {
                                var name = "";
                                $.each(obj, function (m, n) {
                                    if (v == m) {
                                        name = n;
                                        return false;
                                    }
                                });
                                html += `<a href="${k.url}" target="_blank" class="fl">
                                    <div id="zqwT159-sameStyle-${v}">
                                        <i class="${v}"></i>
                                        <span class="zqwT159-sameStyle-price">¥${k.min}</span>
                                    </div>
                                </a>`;
                            }
                        });
                        $(".zqwT159-sameStyle").html(html);
                        var totalWithArr = [];  //
                        $(".zqwT159-sameStyle>a").each(function () {
                            totalWithArr.push($(this).width());
                        });//
                        function initBiWidth() {
                            $(".zqwT159-sameStyle").css({
                                "width": $(".zqwT159-box").width() - 835
                            });
                            var m = totalWithArr.length;
                            if (m < 2) {
                                return;
                            }
                            var totalWith = 0;
                            $.each(totalWithArr, function (v, k) {
                                totalWith += k;
                                totalWith += 24;
                                if (totalWith > $(".zqwT159-sameStyle").width()) {
                                    m = v;
                                    return false;
                                }
                            });
                            $(".zqwT159-sameStyle>a").eq(m - 1).nextAll().hide();
                            $(".zqwT159-sameStyle>a").eq(m - 1).prevAll().show();
                            $(".zqwT159-sameStyle>a").eq(m - 1).show();
                        }   //顶部比价的宽度加载后js设定
                        initBiWidth();
                        $(window).on("resize", function () {
                            initBiWidth();
                        });
                    }   //
                    getSameNew(url);
                }      //顶部全网比价
                function startLike(cat) {
                    var data = "";
                    var html = "";
                    $.ajax({
                        url: `https://uland.taobao.com/cp/coupon_list?pid=${mainUrl.myMmId}&category=${cat}&queryCount=500`,
                        success: function (e) {
                            if (e && e.result && e.result.couponList && e.result.couponList.length) {
                                data = e.result.couponList;
                                var type = "";
                                $.each(data, function (k, v) {
                                    type = (v.item.tmall == "0") ? "tb" : "tm";
                                    html += `<li>
                                        <a href="${v.item.shareUrl}" target="_blank" class="zqwClear">
                                            <div class="zqwT159-like-img fl"><img src="${v.item.picUrl}_130x130"></div>
                                            <div class="fl">
                                                <div class="zqwT159-like-title">${v.item.title}<i class="${type}"></i></div>
                                                <div class="zqwT159-like-sale">月销量 : ${v.item.biz30Day}</div>
                                                <div class="zqwT159-like-price">券后 : ¥
                                                    <span>${numSub(v.item.discountPrice, v.amount)}</span>&nbsp;
                                                    <s>¥ ${v.item.discountPrice}</s>
                                                </div>
                                                <div class="zqwT159-like-but">点击领${v.amount}元券</div>
                                            </div>
                                        </a>
                                    </li>`;
                                });
                                $(".zqwT159-likeDrop ul").html(html);
                            }
                        }
                    })
                }        //值得买
                function makeDrag(amount, urls) {
                    $("#zqwT159").after(`<div class="zqwD159-box">
                        <div class="zqwD159-wave"></div>
                        <div class="zqwD159-amount">¥${amount}元券</div>
                        <div class="zqwD159-title">领取</div>
                    </div>`);
                    var top = $('.zqwM159-close').offset().top - $(window).scrollTop();
                    var left = $('.zqwM159-close').offset().left;
                    $(".zqwD159-box").css("transform", `translate3d(${left}px, ${top}px, 0px)`);
                    var swi = 1, offsetX, offsetY, clientX, clientY;
                    $(".zqwD159-box").on({
                        mousedown: function (e) {
                            setTimeout(function () {
                                swi = 0;
                            }, 200);
                            var el = $(this);
                            offsetX = e.offsetX;
                            offsetY = e.offsetY;
                            $(document).on('mousemove.zqwDrag', function (e) {
                                clientX = e.clientX;
                                clientY = e.clientY;
                                clientX -= offsetX;
                                clientY -= offsetY;
                                el.css('transform', `translate3d(${clientX}px, ${clientY}px, 0px)`);
                            });
                        },
                        mouseup: function () {
                            setTimeout(function () {
                                swi = 1;
                            }, 200);
                            $(document).off('mousemove.zqwDrag');
                        }
                    });
                    $('.zqwD159-box').click(function () {
                        if (swi) {
                            window.open(urls);
                        }
                    })
                }//浏览器悬浮球
                $.extend($.fn, {
                    fnTimeCountDown: function (d) {
                        this.each(function () {
                            var $this = $(this);
                            var o = {
                                hm: $this.find(".hm"),
                                sec: $this.find(".sec"),
                                mini: $this.find(".mini"),
                                hour: $this.find(".hour"),
                                day: $this.find(".day"),
                                month: $this.find(".month"),
                                year: $this.find(".year")
                            };
                            var f = {
                                haomiao: function (n) {
                                    if (n < 10) return "00" + n.toString();
                                    if (n < 100) return "0" + n.toString();
                                    return n.toString();
                                },
                                zero: function (n) {
                                    var _n = parseInt(n, 10); //解析字符串,返回整数
                                    if (_n > 0) {
                                        if (_n <= 9) {
                                            _n = "0" + _n
                                        }
                                        return String(_n);
                                    } else {
                                        return "00";
                                    }
                                },
                                dv: function () {
                                    var _d = $this.data("end") || d;
                                    var now = new Date(),
                                        endDate = new Date(_d);
                                    var dur = (endDate - now.getTime()) / 1000,
                                        mss = endDate - now.getTime(),
                                        pms = {hm: "000", sec: "00", mini: "00", hour: "00", day: "00", month: "00", year: "0"};
                                    if (mss > 0) {
                                        pms.hm = parseInt(f.haomiao(mss % 1000) / 100);
                                        pms.sec = f.zero(dur % 60);
                                        pms.mini = Math.floor((dur / 60)) > 0 ? f.zero(Math.floor((dur / 60)) % 60) : "00";
                                        pms.hour = Math.floor((dur / 3600)) > 0 ? f.zero(Math.floor((dur / 3600)) % 24) : "00";
                                        pms.day = Math.floor((dur / 86400)) > 0 ? f.zero(Math.floor((dur / 86400)) % 30) : "00";
                                        pms.month = Math.floor((dur / 2629744)) > 0 ? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
                                        pms.year = Math.floor((dur / 31556926)) > 0 ? Math.floor((dur / 31556926)) : "0";
                                    } else {
                                        pms.year = pms.month = pms.day = pms.hour = pms.mini = pms.sec = "00";
                                        pms.hm = "000";
                                        return;
                                    }
                                    return pms;
                                },
                                ui: function () {
                                    if (o.hm) {
                                        o.hm.html(f.dv().hm);
                                    }
                                    if (o.sec) {
                                        o.sec.html(f.dv().sec);
                                    }
                                    if (o.mini) {
                                        o.mini.html(f.dv().mini);
                                    }
                                    if (o.hour) {
                                        o.hour.html(f.dv().hour);
                                    }
                                    if (o.day) {
                                        if (f.dv().day > 99) {
                                            o.day.html("99+");
                                        }
                                        o.day.html(f.dv().day);
                                    }
                                    if (o.month) {
                                        o.month.html(f.dv().month);
                                    }
                                    if (o.year) {
                                        o.year.html(f.dv().year);
                                    }
                                    setTimeout(f.ui, 1);
                                }
                            };
                            f.ui();
                        });
                    }
                });
                !function () {
                    if (infoGroup.plat != 'tm' && infoGroup.plat != 'tb') {
                        return
                    }
                    infoGroup.id = getUrlParam("id");
                    var itemId = infoGroup.id;
                    var htmlT = $('html').html();
                    if (locHost.indexOf("detail.ju.taobao") != -1) {
                        infoGroup.id = getUrlParam("item_id");
                        itemId = infoGroup.id;
                    }
                    if (infoGroup.plat == 'tm') {
                        infoGroup.cat = htmlT.match(/"categoryId":"(\d+)",/) ? htmlT.match(/"categoryId":"(\d+)",/)[1] : "";
                        infoGroup.rCat = htmlT.match(/"rootCatId":"(\d+)",/) ? htmlT.match(/"rootCatId":"(\d+)",/)[1] : "";
                        infoGroup.title = htmlT.match(/"title":"(.+?)"/) ? htmlT.match(/"title":"(.+?)"/)[1] : "";
                    } else if (infoGroup.plat == 'tb') {
                        infoGroup.cat = htmlT.match(/(\s+)cid(\s+):(\s+)'(\d+)'/) ? htmlT.match(/(\s+)cid(\s+):(\s+)'(\d+)'/)[4] : "";
                        infoGroup.rCat = htmlT.match(/(\s+)rcid(\s+):(\s+)'(\d+)'/) ? htmlT.match(/(\s+)rcid(\s+):(\s+)'(\d+)'/)[4] : "";
                        infoGroup.title = htmlT.match(/title(\s+):(\s+)'(.*?)'/) ? unicodeToUtf8(htmlT.match(/title(\s+):(\s+)'(.*?)'/)[3]) : "";
                    }   //
                    var num = 0;//
                    function obtain(my, name, e) {
                        return infoGroup[my] = infoGroup[my] ? infoGroup[my] : (e[name] ? e[name] : "");
                    }//
                    function count() {
                        num += 1;
                        if (num == 3) {
                            console.log(infoGroup);
                            startCoupon();
                            var url = "https://item.taobao.com/item.htm?id=" + itemId;
                            if (infoGroup.plat == "tm") {
                                url = "https://detail.tmall.com/item.htm?id=" + itemId;
                            }
                            startPrice(url);
                            startSame();
                            startParity(url);
                            startLike(infoGroup.cat);
                        }
                    }   //
                    $.ajax({
                        url: "https://s.taobao.com/search?app=i2i&nid=" + itemId,
                        success: function (e) {
                            var r = e.match(/g_page_config\s=\s(.*)/);
                            if (r && r[1] && r[1].match(/({.*});/) && r[1].match(/({.*});/)[1] && JSON.parse(r[1].match(/({.*});/)[1])) {
                                var obj = JSON.parse(r[1].match(/({.*});/)[1]);
                                if (obj && obj.mods && obj.mods.singleauction && obj.mods.singleauction.data) {
                                    obj = obj.mods.singleauction.data;
                                    obtain("pid", "pid", obj);
                                    obtain("price", "view_price", obj);
                                    obtain("cat", "category", obj);
                                    obtain("title", "title", obj);
                                    obtain("seller", "user_id", obj);
                                }
                            }
                        }, complete: function () {
                            count();
                        }
                    }); //拿商品数据
                    $.ajax({
                        url: "https://pub.alimama.com/items/search.json?q=https://item.taobao.com/item.htm?id=" + itemId,
                        success: function (e) {
                            if (e && e.data && e.data.pageList && e.data.pageList[0]) {
                                var data = e.data.pageList[0];
                                obtain("price", "zkPrice", data);
                                obtain("cat", "leafCatId", data);
                                obtain("rCat", "rootCatId", data);
                                obtain("title", "title", data);
                                obtain("seller", "sellerId", data);
                                infoGroup.startT = data.couponEffectiveStartTime + ' 00:00:00';
                                infoGroup.endT = data.couponEffectiveEndTime + ' 23:59:59';
                                infoGroup.amountReq = data.couponInfo;
                            }
                        },
                        complete: function () {
                            count();
                        }
                    }); //拿商品数据
                    $.ajax({
                        url: "https://acs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",
                        data: {data: `{"itemNumId":"${itemId}"}`},
                        success: function (e) {
                            if (e && e.data && e.data.item) {
                                var data = e.data.item;
                                obtain("title", "title", data);
                                obtain("cat", "categoryId", data);
                                obtain("rCat", "rootCategoryId", data);
                            }
                            if (e && e.data && e.data.apiStack && e.data.apiStack[0] && e.data.apiStack[0].value) {
                                try {
                                    var p = JSON.parse(e.data.apiStack[0].value);
                                    if (p && p.skuCore && p.skuCore.sku2info && p.skuCore.sku2info[0] && p.skuCore.sku2info[0].price) {
                                        p = p.skuCore.sku2info[0].price;
                                        infoGroup.price = infoGroup.price ? infoGroup.price : (p.priceMoney ? p.priceMoney / 100 : "");
                                    }
                                } catch (err) {
                                }
                            }
                            if (e && e.data && e.data.seller) {
                                var seller = e.data.seller;
                                obtain("seller", "userId", seller);
                            }
                        },
                        complete: function () {
                            count();
                        }
                    }); //拿商品数据
                    function startCoupon() {
                        var page = 1;
                        var getDanNum = 0;//
                        getDan();//
                        function getDan() {
                            chrome.extension.sendMessage({
                                name: "getCook", url: "https://www.taobao.com/", key: "_m_h5_tk"
                            }, function (d) {
                                if (d && d[0] && d[0].value) {
                                    var time = Date.now();
                                    var title = infoGroup.title;
                                    var s = `{"q":"${title}","pid":"${mainUrl.myMmId}","page":${page},"lunaUrlParam":"{'algo_sort':'mixcoupon'}","useItemCouponPage":"1"}`;
                                    $.ajax({
                                        url: "https://acs.m.taobao.com/h5/mtop.aitaobao.item.search/7.0/", type: "get", dataType: "json",
                                        data: {
                                            v: "7.0", api: "mtop.aitaobao.item.search", appKey: "12574478", t: time,
                                            sign: md5(d[0].value.split("_")[0] + "&" + time + "&12574478&" + s), data: s
                                        },
                                        success: function (r) {
                                            if (r && r.ret && r.ret[0] && r.ret[0].match("调用成功")) {
                                                if (r && r.data && r.data.items && r.data.items.length) {
                                                    var data = r.data.items;
                                                    var hasSwi = 1;
                                                    $.each(data, function (v, k) {
                                                        if (k.nid == itemId) {
                                                            if (k.couponAmount) {
                                                                infoGroup.amount = k.couponAmount / 100;
                                                                hasDan(k);
                                                            } else {
                                                                noDan(k);
                                                            }
                                                            hasSwi = 0;
                                                            return false;
                                                        }
                                                    });
                                                    if (hasSwi) {
                                                        if (page == 3) {
                                                            noDan(0);
                                                            return false
                                                        } else {
                                                            page++;
                                                            getDan();
                                                        }
                                                    }
                                                } else {
                                                    noDan(0);
                                                }
                                            } else {
                                                getDanNum++;
                                                if (getDanNum == 3) {
                                                    noDan(0);
                                                    return false
                                                } else {
                                                    getDan();
                                                }
                                            }
                                        }
                                    });
                                } else {
                                    $("body").append(`<iframe src="//h5.m.taobao.com/" id="zqw-H5-Toke" style="display:none"></iframe>`);
                                    setTimeout(function () {
                                        $("#zqw-H5-Toke").remove();
                                        getDan()
                                    }, 2000);
                                }
                            });
                        }   //查找单品优惠券
                        function noDan(k) {
                            var oli1 = `<div class="zqwM159-couponDan-noIcon"></div><div class="zqwM159-couponDan-noTitle">对不起 , 暂无可用优惠券</div>`;
                            $(".zqwM159-couponDan").html(oli1);
                            k ? makeQcode("s.click.taobao.com/t?e=" + getParam(k.clickUrl, "e")) : makeQcode(`h5.m.taobao.com/awp/core/detail.htm?id=${infoGroup.id}`);
                            $(".zqwM159-h5 .zqwM159-title span").fadeOut(function () {
                                $(this).html(`扫码下单`).fadeIn();
                            });
                            $('.zqwM159-h5-title').html(`打开淘宝APP<br>扫码下单更方便`);
                            getRec();
                        }//无优惠券渲染
                        function hasDan(e) {
                            var data = e;
                            makeQcode("uland.taobao.com/coupon/edetail?e=" + getParam(data.clickUrl, "e"));
                            var amount = infoGroup.amount;
                            var amountReq = infoGroup.amountReq;
                            var newPrice = numSub(infoGroup.price, amount);
                            var urls = mainUrl.referC + data.clickUrl;
                            makeDrag(amount, urls);
                            var oli = `<div class="zqwM159-couponDan-img fl">
                                <a href="${urls}" target="_blank" rel="noreferrer">
                                    <div class="fl">
                                        <div class="zqwM159-couponDan-amount">¥<span>${amount}</span></div>
                                        <div class="zqwM159-couponDan-amountNeed">${amountReq}</div>
                                    </div>
                                    <div class="zqwM159-couponDan-button fr">立即领取</div>
                                </a>
                            </div>
                            <div class="fl">
                                <div class="zqwM159-couponDan-price">券后价 : <span>${newPrice}</span> 元</div>
                                <div class="zqwM159-couponDan-time">还剩 :
                                    <div id="zqwM159-couponDan-time">
                                        <span class="day">00</span><span>日</span>
                                        <span class="hour">00</span><span>时</span>
                                        <span class="mini">00</span><span>分</span>
                                        <span class="sec">00</span>.<span class="hm">0</span><span>秒</span>
                                    </div>
                                </div>
                            </div>`;
                            $(".zqwM159-couponDan").html(oli);
                            $(".zqwM159-coupon .zqwM159-title span").fadeOut(function () {
                                $(this).html(`领${amount}元劵`).css({
                                    "color": "#ff0033",
                                    "fontWeight": "bold"
                                }).fadeIn();
                            });
                            $(".zqwM159-h5 .zqwM159-title span").fadeOut(function () {
                                $(this).html(`扫码领券`).fadeIn();
                            });
                            try {
                                $("#zqwM159-couponDan-time").fnTimeCountDown(infoGroup.endT);
                            } catch (e) {
                            }
                            getRec();
                        }//有优惠券渲染
                        function getRec() {
                            $.getJSON("https://uland.taobao.com/cp/coupon_recommend", {
                                recommendType: 0, count: 10, onlySimilar: 0, pid: mainUrl.myMmId, itemId: itemId
                            }, function (e) {
                                if (e && e.result && e.result.couponList) {
                                    var html = '';
                                    $.each(e.result.couponList, function (v, k) {
                                        var data = k.item;
                                        var newPrice = numSub(data.discountPrice, k.amount);
                                        html += `<li>
                                            <a href="${data.clickUrl}" target="_blank">
                                                <div class="zqwM159-couponRec-img">
                                                    <img src="${data.picUrl}_70x70">
                                                </div>
                                                <div class="zqwM159-couponRec-itemT" title="${data.title}">${data.title}</div>
                                                <div class="zqwM159-couponRec-price" title="${newPrice}元">券后:<span>${newPrice}</span>元</div>
                                                <div class="zqwM159-couponRec-button"><span>领${k.amount}元券</span></div>
                                            </a>
                                        </li>`
                                    });
                                    $('.zqwM159-couponRec').html(`<div class="zqwM159-couponRec-title">相似优惠券推荐</div>
                                    <div class="zqwM159-couponRec-slider">
                                        <a href="javascript:void(0);" class="zqwM159-couponRec-sliderL"></a>
                                        <a href="javascript:void(0);" class="zqwM159-couponRec-sliderR"></a>
                                        <div>
                                            <ul class="zqwClear" id="zqwM159-couponRec-slider">${html}</ul>
                                        </div>
                                    </div>`);
                                    $(".zqwM159-couponRec-slider").superSlider({
                                        prevBtn: ".zqwM159-couponRec-sliderL",
                                        nextBtn: ".zqwM159-couponRec-sliderR",
                                        listCont: "#zqwM159-couponRec-slider",
                                        scrollWhere: "next", delayTime: 2500, speed: 300, amount: 1, showNum: 4, autoPlay: true
                                    });//
                                } else {
                                }
                            });
                        }   //查找相关优惠券
                    }//优惠券
                    function startSame() {
                        if (infoGroup.pid) {
                            getSameByPid(infoGroup.pid, infoGroup.id);
                        } else {
                            $('.zqwM159-same-toggle div').eq(0).hide();
                            $('.zqwM159-same-toggle div').eq(1).addClass("active");
                            $('.zqwM159-same-sameStyle').hide();
                            $('.zqwM159-same-similar').show();
                        }
                        setTimeout(function () {
                            getSameByTitle(infoGroup.id);
                        }, 1500);//
                        function getSameByPid(pid, id) {
                            var url = "https://s.taobao.com/search?type=samestyle&app=i2i&uniqpid=" + pid + "&nid=" + id + "&sort=sale-desc";
                            chrome.extension.sendMessage({name: "clearCook", url: url}, function () {
                                $.ajax({
                                    type: "get", url: url,
                                    success: function (e) {
                                        var r = e.match(/<script>\s+g_page_config\s=\s(.*)/);
                                        if (r && r[1] && r[1].match(/({.*});/) && r[1].match(/({.*});/)[1] && JSON.parse(r[1].match(/({.*});/)[1])) {
                                            var data = JSON.parse(r[1].match(/({.*});/)[1]);
                                            if (data.mods && data.mods.recitem && data.mods.recitem.data && data.mods.recitem.data.items) {
                                                data = data.mods.recitem.data.items;
                                                appendSame(data, 0);
                                            }
                                        }
                                    }
                                });
                            });
                        }   //根据pid请求同款商品
                        function getSameByTitle(id) {
                            var url = `https://s.taobao.com/search?app=i2i&nid=${id}&type=similar&sort=sale-desc`;
                            chrome.extension.sendMessage({name: "clearCook", url: url}, function () {
                                $.ajax({
                                    type: "get", url: url,
                                    success: function (e) {
                                        var r = e.match(/<script>\s+g_page_config\s=\s(.*)/);
                                        if (r && r[1] && r[1].match(/({.*});/) && r[1].match(/({.*});/)[1] && JSON.parse(r[1].match(/({.*});/)[1])) {
                                            var data = JSON.parse(r[1].match(/({.*});/)[1]);
                                            if (data.mods && data.mods.recitem && data.mods.recitem.data && data.mods.recitem.data.items) {
                                                data = data.mods.recitem.data.items;
                                                appendSame(data, 1);
                                            }
                                        }
                                    }
                                });
                            });
                        }   //根据similar请求相似商品
                        function appendSame(data, type) {
                            var domStyle = ".zqwM159-same-sameStyle ul";
                            if (type) {
                                domStyle = ".zqwM159-same-similar ul";
                            }
                            var html = "";
                            $.each(data, function (k, v) {
                                html += `<li>
                                    <a href="${v.detail_url}" class="zqwClear" target="_blank">
                                        <div class="fl">
                                            <img src="${v.pic_url}_70x70">
                                        </div>
                                        <div class="fl">
                                            <div class="zqwM159-same-itemT">${v.title}</div>
                                            <div class="zqwM159-same-itemS">销量 : ${parseInt(v.view_sales)}</div>
                                            <div class="zqwM159-same-itemP">价格 : ¥ <span>${v.view_price}</span></div>
                                        </div>
                                        <div class="fl zqwM159-same-itemB">点击购买</div>
                                    </a>
                                </li>`
                            });
                            $(domStyle).html(html);
                        }   //append相似商品标题
                    }  //商品同款相似
                    function makeQcode(e) {
                        new QRCode($('.zqwM159-h5-qCode')[0], {
                            text: 'https://' + e,
                            width: 106,
                            height: 106,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: QRCode.CorrectLevel.L
                        });
                    } //领券二维码
                }();    //淘宝天猫页面
                !function () {
                    if (infoGroup.plat != 'jd') {
                        return;
                    }
                    var locaHref = location.href;
                    $('.zqwM159-box-h5').css("left", 154);
                    var itemId = locaHref.match(/item.jd.com\/(\d+).html/) ? locaHref.match(/item.jd.com\/(\d+).html/)[1] : 0;
                    $.ajax({
                        url: "https://p.3.cn/prices/mgets?skuIds=J_" + itemId,
                        type: 'GET',
                        dataType: 'json',
                        success: function (e) {
                            infoGroup.price = e[0].p;
                            startPrice(locaHref);
                            startCoupon();
                        }
                    });//
                    function startCoupon() {
                        var couUrl = "";
                        chrome.extension.sendMessage({
                            name: "universal", url: "http://www.jingfenbang.com/?searchType=1&searchKey=" + itemId, type: "get", dataType: "html"
                        }, function (e) {
                            if (e) {
                                if (!e.match(/i-sp-list-else([\s\S]*?)div/)) {
                                    noDan();
                                    return
                                }
                                infoGroup.endT = e.match(/i-sp-list-time([\s\S]*?)((\d+)-(\d+)-(\d+))([\s\S]*?)div/) ? e.match(/i-sp-list-time([\s\S]*?)((\d+)-(\d+)-(\d+))([\s\S]*?)div/)[2] : "";
                                e = e.match(/i-sp-list-else([\s\S]*?)div/)[0];
                                var url = e.match(/href="([\s\S]*?)"/) ? e.match(/href="([\s\S]*?)"/)[1] : "";
                                infoGroup.amount = e.match(/span([\s\S]*?)(\d+)([\s\S]*?)span/) ? e.match(/span([\s\S]*?)(\d+)([\s\S]*?)span/)[2] : "";
                                chrome.extension.sendMessage({
                                    name: "universal", url: "http://www.haojingke.com/index.php/index/unionurl", type: "post", dataType: "json",
                                    data: {"unionId": 1000405866, "positionId": 1045184007, "couponurl": url, "materialIds": itemId}
                                }, function (d) {
                                    if (d && d.data) {
                                        couUrl = d.data;
                                        hasDan(couUrl);
                                    } else {
                                        noDan();
                                    }
                                })
                            } else {
                                noDan();
                            }
                        });//
                        function hasDan(e) {
                            var data = e;
                            var amount = infoGroup.amount;
                            var amountReq = infoGroup.price;
                            var newPrice = numSub(infoGroup.price, amount);
                            var urls = mainUrl.referC + data;
                            makeQcode(data);
                            makeDrag(amount, urls);
                            var oli = `<div class="zqwM159-couponDan-img fl">
                                <a href="${urls}" target="_blank" rel="noreferrer">
                                    <div class="fl">
                                        <div class="zqwM159-couponDan-amount">¥<span>${amount}</span></div>
                                        <div class="zqwM159-couponDan-amountNeed">满${Math.round(amountReq)}元减${Math.round(amount)}元</div>
                                    </div>
                                    <div class="zqwM159-couponDan-button fr">立即领取</div>
                                </a>
                            </div>
                            <div class="fl">
                                <div class="zqwM159-couponDan-price">券后价 : <span>${newPrice}</span> 元</div>
                                <div class="zqwM159-couponDan-time">还剩 :
                                    <div id="zqwM159-couponDan-time">
                                        <span class="day">00</span><span>日</span>
                                        <span class="hour">00</span><span>时</span>
                                        <span class="mini">00</span><span>分</span>
                                        <span class="sec">00</span>.<span class="hm">0</span><span>秒</span>
                                    </div>
                                </div>
                            </div>`;
                            $(".zqwM159-couponDan").html(oli);
                            $(".zqwM159-coupon .zqwM159-title span").fadeOut(function () {
                                $(this).html(`领${amount}元劵`).css({
                                    "color": "#ff0033",
                                    "fontWeight": "bold"
                                }).fadeIn();
                            });
                            $('.zqwM159-h5-title').html(`打开京东APP或微信<br>扫码领券`);
                            $(".zqwM159-h5 .zqwM159-title span").fadeOut(function () {
                                $(this).html(`扫码领券`).fadeIn();
                            });
                            try {
                                $("#zqwM159-couponDan-time").fnTimeCountDown(infoGroup.endT);
                            } catch (e) {
                            }
                        }//有优惠券渲染
                        function noDan() {
                            var oli1 = `<div class="zqwM159-couponDan-noIcon"></div><div class="zqwM159-couponDan-noTitle">对不起 , 暂无可用优惠券</div>`;
                            $(".zqwM159-couponDan").html(oli1);
                            makeQcode(`https://item.m.jd.com/product/${itemId}.html`);
                            $(".zqwM159-h5 .zqwM159-title span").fadeOut(function () {
                                $(this).html(`扫码下单`).fadeIn();
                            });
                            $('.zqwM159-h5-title').html(`打开京东APP或微信<br>扫码下单更方便`);
                        }//无优惠券渲染
                    }//
                    startParity(locaHref);
                    startLike("");
                    $("#zqwM159").css("z-index", 3);
                    $(".zqwM159-same").hide();//
                    function makeQcode(e) {
                        new QRCode($('.zqwM159-h5-qCode')[0], {
                            text: e,
                            width: 106,
                            height: 106,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: QRCode.CorrectLevel.L
                        });
                    } //领券二维码
                }();    //京东页面
            }
        }
    }();
    //列表页
    !function () {
        var listAdaptationArr = {
            's.taobao.com': ['.J_PicBox', 'mainsrp-itemlist', '淘宝'],
            'list.tmall.com': ['.productImg-wrap', 'J_ItemList', '天猫'],
            'search.jd.com': ['.gl-i-wrap', 'J_goodsList', '京东'],
            'search.suning.com': ['.res-img', 'filter-results', '苏宁'],
            'list.suning.com': ['.res-img', 'filter-results', '苏宁']
        };
        $.each(listAdaptationArr, function (v, k) {
            if (locHost == v) {
                chrome.storage.local.get(null, function (e) {
                    setting = e.zqwListSet;
                    if (setting == "show") {
                        list(v, k);
                    }
                });
                return false;
            }
        });//
        function list(v, k) {
            // var cssStyle = '';
            var cssStyle = '.zqwClear{zoom:1}.zqwClear:after{visibility:hidden;clear:both;display:block;content:"";height:0}.zqwClear:before{content:" ";display:table}.zqwList-item .fl{float:left}.zqwList-item .fr{float:right}.zqwList-item{font-family:"Microsoft Yahei",serif;position:absolute;right:0;bottom:50%;margin-bottom:-24px;width:54px;height:42px}.zqwList-item.left{left:0}.zqwList-box{width:54px;height:42px;color:#fff;font-size:12px;text-align:center;position:absolute;background:#000;opacity:0;cursor:pointer}.zqwList-box.active{opacity:.5;background:#FD2550}.zqwList-icon{margin:3px auto 0 auto;width:18px;height:18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMA0fzj1Abyw7BKRfTctqWcl29mLisY7JCNioBdJhoVAjDv64MAAACESURBVBjTfY7nDsNACIMJl5vZq3v4/Z+ylEg9pZHiH7b1IRC0UQfRFlm/Q9T+UN8smgnGr+gKmFnS1oi2/5IRdYBLRDe0pErs5vcZPD6q00vJ5DhKDAyDu5LFYNASKzQSRUEeHa2aLk9xgEKwUspSqaJc9kjP/KFseZaN+RjlRX1CmtoHD5gKrq48aAkAAAAASUVORK5CYII=)}.zqwList-dropBox{width:397px;padding:0 0 0 11px;position:absolute;left:calc(100% - 1px);top:-66px;height:297px;z-index:99999999}.zqwList-item.left .zqwList-dropBox{left:auto;right:calc(100% - 1px);padding:0 11px 0 0}.zqwList-drop-arrow{position:absolute;top:75px;left:1px;width:15px;height:29px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAdBAMAAACH5ivpAAAAJFBMVEUAAAD////////h4eHm5uba2tr////////////5+fnh4eHg4OAed86SAAAACHRSTlMAIiDcmf6hXuCx7NUAAABiSURBVBjTNc9BDYAwEERREppyRQIyCJxJkAAOkICElYAEZHb6O53Tyz/tDm3TYryzQxinkS7j+BrSHQIBEASCQAAKoAZAAHsY4w90xmaQgBIgASVAAiRA8jtrR65gT0cGrACTMDNec4Eb3gAAAABJRU5ErkJggg==)}.zqwList-item.left .zqwList-drop-arrow{left:auto;transform:rotate(180deg);right:1px}.zqwList-drop{width:395px;height:295px;opacity:1;border:1px solid #ccc;border-radius:10px}.zqwList-drop-header{background:#D0090F;height:58px;border-radius:10px 10px 0 0;overflow:hidden}.zqwList-drop-logo{width:100px;height:58px;margin-left:12px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAMAAADT9S0cAAAAyVBMVEUAAACiDBH////////////////////////25ub////////////////+/Pz89/j//////v7////////////68fL////////9+fn68vL//////f3////////////////////////+/Pz+/Pz//v7////////////////////////89vf//////v7+/f3//////////////////////////////////v7//////////////////////////////f3///////////////9qJ5NKAAAAQnRSTlMAA/30Jff5YARO1+3KRw/DNyIcawLq4gwH5ikXiHHy79kuHxHPQse/khQKoD4zp31TPIFZS62OeHS2ZprTsTrdupYwPklOAAAFAUlEQVRIx52WaYOiMAyG2aLlRjxAQQUZUVEOWe9bJ///R22hwKDrns+HaUhrXhqSdpicpjDpFnanO+4xv4Cfd5k/0AuTiH8708Zis7DHq61Ahv6J6xcu95SMM6P/GUy+nFzrTaj+DILuH0VaU9iTQWPNW+Easo0aGVInHpa/sY2w3P28ltO8TWHrlk9q5/ciSPpeuA5ItrJYeyRppTI2w0JDedhsAQJc2nqs/aUIn4l0eJ7vzmA25impyIShL2pdANXfgAEeaUrVhCMEyDyQ4TtPRZZVkfFwMEPmeUA42yDvBhTiZOPBhO4U42sibJJTIhRwyUYQ1g3kJGS+JgIiAKR/zukXm8/A75GJ+GzRyvPg1yyzJTvwyNr+4aGU1eOvQhJkYuB2GmKqE2zAkq5L/i0Mw8kUrgoZNptJmIr2gwZldsFgzBpVplwWcmnGrRY3Y+FaFKQggbFd962HwWWV3yfs8UgjxvjIOo6DATsESXJ0l/aNmjFeIvvUVavQjuKbCrcT68AeSb4pt/iOEXtZCVbv9cN3ZjR3KKceMRVaMsgt5g2tzxEGgLsf1kpcLjCJz9wKvdfqsjTCDpvrSMuodhW/ROyJeUe/AZLoIUcUR1+II9ucGRgGnRcRSmJjWleU2prL2JtgHLgXaH5Oq40rA5aeqCO0ipbbCfNWxJUQVxHhWPg15QkyqSNfeYIbwXXRmffei8xF8Pm08KJFVijeSBRFHQCTkWKmJW9cRPE+WBTlVGetl5PyDEc6+05kEcOUvGA3MPbpe6o1QuIBCqxazmZbB/xIiNXvlCL1desJ6/hGRFX8kJ5EQzAjpsNJsMsX9RQZ4aBV+dTtEULeSf3yuCYY8hMehqD3LHJfPhw406ChQ87aUIQpTQDvDnSw/f7TxWKdJbC3Gl8mZynBC9jTmAqdPU67YzSkn/GjAXE0A13I5qzVBcG9TfW/6CYN4t73y2dheBgSfAlthymHtls559XJ2UBgN4ZFd/I+mBdUP/DFC2B5bTVrLzS1gQHmJN9Iv/aR0Vrr9UOL2s3mOJf5WMc2AtDb8y9dQQeoD8Z5cU7jK2vb7CtSg9tc/fzG3MvFgjr5aXmdXGm/f3/YgAwP0erKCQ1Au3mRB1cd2uRyQC93BgIzmffpPgYYcOEl4HKJke1UM7C3sg7VEu4oUwS42o/NjbA56HDcCBXOdbjm5WUZcFynvs3aA4J8oisDDAGf5r/d/ug89YnaNoAlEcdMFX4FTvLkmW9Bznf7XUIT6ls6IIuAY5dm8Qoyn/36uRk71tkGY7hEdrkVGsd4le0sUUVES0NpMQvy7XbEyFN4+mZU5Lnjx5yH0HTTqTVgWqtEdGc0vb8RWUQrA9CMqLV8B4y2+iuRKLbB+Ux7kLPRoFfVYPe9n0SmXyJR7fMOoO+yMAuSccf/eBbpBuB9pIbikJbIOlLdgr4uDjNBBnagMs+oAcgVkWgEZjypnEPI743jXERdc6fAgc9Fprba1fJ2cS9woRdj5OsgrbqV8DeFsGPpV8rTxS93WmWv1va+U/w6bPnsiQWCHDHfUhYLMlI4HcVq+rRDSOSIVcC4jfS/DoycU+64SVhjujxdkvtaiqhjJCXEJB0/m04bvpvPVUL1lt6aTy3lErjVAOQL6SbBI0cddWiiETHULmHGnm567R6NyRO+vUO16NhzFy8TNyXlo3SMJ4r67RU+pEuIyP/B/MuqH611wXeBzfq8AAAAAElFTkSuQmCC) center no-repeat}.zqwList-drop-title{color:#fff;font-size:18px;margin:21px 0 0 10px}.zqwList-drop-set{height:58px;width:60px;background:#B5090E url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAVFBMVEUAAAD4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl+tAPQCAAAAG3RSTlMA9+cYgakqouKHFN4sJZ6NLhDww4bStJt4ajd6AsBcAAAAmklEQVQoz32QbQ+DIBCDNzc3RAWne+///596ScmF1NgPHKF5Gq6nA+Vw08f02Y4rzmK1aGx0Yt3RXGwK1SKYQWqsiIdNoRIJt4YS1TtRvsGoWBmkjGBUTU3ZCNUXwGKE6gX8d42EGWHQd9s8/spe2lXHvaQrtqGEd+gGFyQ1eRTbLRbGKsr1NIpElA6NepOoKWzn3O+UmBe/i1aEoQiVnNgEsAAAAABJRU5ErkJggg==) center no-repeat;cursor:pointer}.zqwList-drop-back{height:237px;background:#fff;border-radius:0 0 10px 10px}.zqwList-price-trend{width:350px;height:180px;margin:28px auto;background:#fff;border-radius:0 0 10px 10px;position:relative;overflow:hidden}.zqwList-ErrorContent{position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-84px;width:168px;height:86px}.zqwList-ErrorContent p{font-size:12px;color:#999;line-height:18px;text-align:center}.zqwList-ErrorImg{padding-top:10px;width:106px;height:40px;margin:0 auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAoCAMAAAAhb5/CAAAAq1BMVEUAAADQ0NDPz8/Ozs7m5ubV1dXNzc3MzMzNzc3Ozs7Ozs7o6OjMzMzOzs7Pz8/n5+fOzs7Nzc3Nzc3Nzc3MzMzOzs7MzMzt7e3c3NzS0tLOzs7Pz8/Q0NDMzMzR0dHe3t7+/v7Pz8/Nzc3Nzc3Nzc3Nzc3Ozs7////////MzMz19fX6+vrZ2dnp6enU1NTR0dH4+Pjk5OTv7+/9/f3T09Pj4+Pg4ODx8fHe3t4NSebVAAAAKHRSTlMA9e5XBRC+goDrN/vTIxv+nnVyKOKqjP79lGBLQDz56+Xls7KJadskjx/jKAAAAbZJREFUWMPN12tvmzAUgOFjc0sIoeR+79bbdo4hsUeXJv//l83NkBx1dKotoH0/IFnCesSR+WD4YOmM09tG0EYpH+T4piN7ghaaDfCfSDGvQSJ+CuA1ntdQQrFNY9KaLfsx6AjrKCHYtiHJZwpLtv4PJXgM103msaN1d0JUPKinZKmpE5+AKaaMJm7UjinE7z/rqfNR6Mr+0Lw/zyCbg1vj21/aWq3rqFweS20t7lIzP8rIdYLD20JbOSOss86SdMsfVxOc28zPH40Cs1h9+/1qyT2+H4FbASUP5Ju199c67JunxvcAyQhM2Y2xGqYSgIdratg3VrOUT/cJBWBjETgWjMc+QL1lS622jxsrXFsFqYtlSW1ZElgfy3PxfLHsqMekvwPLCF8qy4raBLvUnqosWVpQThFWlpCqfaqyFofnDig8HpR+LLugcCFPiEXZBYVC7rEsOqFQFfJGii4onXgp8tYp01ehvMgDi3o9ZyqkaBpaSGHYc6S8qQ8+eV1QUXR5dDFAj/RXTb1OjkU4jSj8mifwE/8rnr8v5bzlC6ppMGv12m3KBzyFj0WmamUy79h02VCz6Q+Hgc1uN15SewAAAABJRU5ErkJggg==) center center no-repeat}';
            $("<style></style>").html(cssStyle).appendTo("head");
            document.onreadystatechange = loadingChange; //
            function loadingChange() {
                if (document.readyState == "complete") {
                    function get(url, price, that) {
                        $.ajax({
                            url: "https://zhushou.huihui.cn/productSense",
                            data: {phu: url, type: "canvas"},
                            type: 'GET',
                            timeout: 5000,
                            dataType: 'json',
                            success: function (response) {
                                var data = response.priceHistoryData.list;
                                var time = new Date();
                                var nowTime = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
                                var valueList = [], dateList = [], newData = [], t = 0;
                                for (var i = 0; i < data.length; i++) {
                                    var beforPrice = 0;
                                    if (i > 0) {
                                        beforPrice = data[i - 1].price;
                                    }
                                    if (data[i].price != beforPrice) {
                                        newData[t] = data[i];
                                        t++;
                                    }
                                }
                                var trueObj = newData[newData.length - 1];
                                if (newData[newData.length - 1].price == price) {
                                    newData[newData.length - 1] = {price: price * 1, time: nowTime};
                                } else {
                                    newData[newData.length] = {price: price * 1, time: nowTime};
                                }
                                var isOne = true;
                                if (newData.length == 1) {
                                    var obj = newData[0];
                                    newData = [obj, obj, obj];
                                    isOne = false;
                                }
                                var arrSlice = newData.slice(-7);
                                $.each(arrSlice, function (v, k) {
                                    valueList.push(k.price * 1);
                                    var res1 = [];
                                    res1[0] = k.time.split('-')[1].replace(/^[0]/, '');
                                    res1[1] = k.time.split('-')[2].replace(/^[0]/, '');
                                    res1 = res1.join('/');
                                    dateList.push(res1);
                                });
                                if (isOne == false) {
                                    dateList[0] = "";
                                    var res2 = [];
                                    res2[0] = trueObj.time.split('-')[1].replace(/^[0]/, '');
                                    res2[1] = trueObj.time.split('-')[2].replace(/^[0]/, '');
                                    res2 = res2.join('/');
                                    dateList[1] = res2;
                                }
                                var minAndMax = {min: [], max: []};
                                var min = Math.min.apply(null, valueList);
                                var max = Math.max.apply(null, valueList);
                                if (min != max) {
                                    $.each(valueList, function (v, k) {
                                        if (k == min) {
                                            minAndMax.min = [dateList[v], k];
                                            return false;
                                        }
                                    });
                                    $.each(valueList, function (v, k) {
                                        if (k == max) {
                                            minAndMax.max = [dateList[v], k];
                                            return false;
                                        }
                                    });
                                }
                                var optionSet = {
                                    "grid": {"x": 14, "x2": 12, "y": 24, "y2": 36, "borderWidth": 0, "width": 324, "height": 120},
                                    "animation": true,
                                    "backgroundColor": "#fff",
                                    "tooltip": {
                                        "show": true, "name": "", "alwaysShowContent": false, "trigger": "axis", "padding": 10,
                                        "textStyle": {"fontWeight": "normal", "color": "#fff", "align": "left", "fontSize": 12},
                                        "axisPointer": {"type": "line", "lineStyle": {"color": "#cdcdcd", "type": "dashed"}}
                                    },
                                    "xAxis": [{
                                        "data": dateList,
                                        "axisLine": {"lineStyle": {"color": "#ccc", "width": 1,}},
                                        "axisTick": {"show": false},
                                        "axisLabel": {"textStyle": {"color": '#999899'},}
                                    }],
                                    "yAxis": [{
                                        "type": "value", "splitNumber": 2, "scale": true, "minInterval": 1,
                                        "axisLabel": {"show": false},
                                        "axisTick": {"show": false},
                                        "axisLine": {"show": false},
                                        "splitLine": {"show": false}
                                    }],
                                    "series": [
                                        {
                                            type: "line", data: valueList, symbol: "circle", smooth: false, showAllSymbol: true,
                                            label: {
                                                normal: {
                                                    show: !0, textStyle: {color: "#FD2550", fontWeight: "bold", textAlign: "center"},
                                                    formatter: function (e) {
                                                        return e.name == minAndMax.min[0] && e.value == minAndMax.min[1] ? (minAndMax.min[1] == minAndMax.max[1] ? "" : "最低") + e.value : e.name == minAndMax.max[0] && e.value == minAndMax.max[1] ? (minAndMax.min[1] == minAndMax.max[1] ? "" : "最高") + e.value : e.value
                                                    }
                                                },
                                                emphasis: {show: !0, textStyle: {color: "#d0090f", fontWeight: "bold", textAlign: "center"}}
                                            },
                                            lineStyle: {normal: {color: "#d0090f", type: "solid", width: 1}},
                                            itemStyle: {normal: {color: "#d0090f"}, emphasis: {color: "#d0090f"}},
                                            areaStyle: {
                                                normal: {
                                                    color: {
                                                        x: 0,
                                                        y: 0,
                                                        x2: 0,
                                                        y2: 1,
                                                        type: "linear",
                                                        global: false,
                                                        colorStops: [
                                                            {
                                                                offset: 0,
                                                                color: "rgba(208, 9, 15, 0.2)"
                                                            },
                                                            {
                                                                offset: 1,
                                                                color: "rgba(208, 9, 15, 0)"
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                };
                                var priceChart = echarts.init(that.find(".zqwList-price-trend")[0]);
                                priceChart.setOption(optionSet);
                            },
                            error: function () {
                                var html = `<div class="zqwList-ErrorContent">
                    				<div class="zqwList-ErrorTitle">
                    					<p>小券窝正在努力完善商品价格库，敬请期待哦~</p>
                    				</div>
                    				<div class="zqwList-ErrorImg"></div>
                				  </div>`;
                                that.find(".zqwList-price-trend").html(html);
                            }
                        });
                    }   //请求惠惠助手接口拿取商品历史价格数据
                    $.each($(k[0]), function () {
                        $(this).append(`<div class="zqwList-item" data-type="0">
                            <div class="zqwList-box" >
                                <div class="zqwList-icon"></div>
                                <div>价格趋势</div>
                            </div>
                        </div>`);
                        if ($(this).offset().left > ($(document).width() * 1 - $(this).offset().left * 1)) {
                            $(this).children(".zqwList-item").addClass("left");
                        }
                        if (v == 'search.jd.com') {
                            $(".zqwList-item").css("marginBottom", 65)
                        } else if (v == 'search.suning.com' || v == 'list.suning.com') {
                            $(".zqwList-item").css({"top": 106})
                        }
                    });
                    var time;
                    $(document).on("mouseenter", k[0], function () {
                        $(this).find(".zqwList-box").css("opacity", 0.3);
                    });
                    $(document).on("mouseleave", k[0], function () {
                        $(this).find(".zqwList-box").css("opacity", 0);
                    });
                    if (v == 's.taobao.com' || v == 'list.tmall.com') {
                        $(document).on("mouseenter", k[0], function () {
                            var that = $(this);
                            var swi = 1;
                            if (!that.data("zqwsign") && swi) {
                                swi = 0;
                                var id = (v == 's.taobao.com') ? that.find(".pic-link").data("nid") : that.closest(".product").data("id");
                                var dom = (v == 's.taobao.com') ? that.siblings(".ctx-box").find(".J_ClickStat").text() : that.siblings(".productTitle").children().attr("title");
                                $.ajax({
                                    url: "https://pub.alimama.com/items/search.json?q=https://item.taobao.com/item.htm?id=" + id,
                                    success: function (e) {
                                        if (e && e.data && e.data.pageList && e.data.pageList[0] && e.data.pageList[0].couponAmount) {
                                            var amount = e.data.pageList[0].couponAmount;
                                            chrome.extension.sendMessage({
                                                name: "getCook", url: "https://www.taobao.com/", key: "_m_h5_tk"
                                            }, function (d) {
                                                if (d && d[0] && d[0].value) {
                                                    var time = Date.now();
                                                    var s = `{"q":"${dom}","pid":"mm_124537623_39457386_147497025","page":1,"lunaUrlParam": "{'algo_sort':'mixcoupon','rank':'rank_profile:FirstRankScorer_atbh5','PS':'tk_item_score_atbh5','appBucket':'a'}","useItemCouponPage":"1"}`;
                                                    $.ajax({
                                                        url: "https://acs.m.taobao.com/h5/mtop.aitaobao.item.search/7.0/", type: "get", dataType: "json",
                                                        data: {
                                                            v: "7.0", api: "mtop.aitaobao.item.search", appKey: "12574478", t: time,
                                                            sign: md5(d[0].value.split("_")[0] + "&" + time + "&12574478&" + s), data: s
                                                        },
                                                        success: function (r) {
                                                            if (r && r.ret && r.ret[0] && r.ret[0].match("调用成功")) {
                                                                if (r && r.data && r.data.items && r.data.items.length) {
                                                                    var data = r.data.items;
                                                                    var hasSwi = 1;
                                                                    $.each(data, function (v, k) {
                                                                        if (k.nid == id) {
                                                                            var url = `https://s.click.taobao.com/t?e=${getParam("https:" + k.clickUrl, "e")}`;
                                                                            that.append(`<a href="${url}" target="_blank">
                                                                                <div class="zqwList-coupon">领取${amount}优惠券</div>
                                                                            </a>`);
                                                                            hasSwi = 0;
                                                                            return false;
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    $("body").append(`<iframe src="//h5.m.taobao.com/" id="zqw-H5-Toke" style="display:none"></iframe>`);
                                                    setTimeout(function () {
                                                        $("#zqw-H5-Toke").remove();
                                                    }, 2000);
                                                }
                                            });
                                        }
                                    },
                                    complete: function () {
                                        swi = 1;
                                        that.data("zqwsign", 1);
                                    }
                                });
                            }
                        });
                        $(document).on("mouseleave", k[0], function () {
                        });
                    }
                    $(document).on("mouseenter", ".zqwList-item", function () {
                        var that = $(this);
                        var url, price;
                        if (v == 's.taobao.com') {
                            url = that.parent().children(".pic-box-inner").children(".pic").children("a").attr("href");
                            price = that.parent().parent().find(".g_price").children("strong").html();
                        } else if (v == 'list.tmall.com') {
                            url = that.parent().children("a").attr("href");
                            price = that.parent().parent().find(".productPrice").find("em").text().split("¥")[1];
                        } else if (v == 'search.jd.com') {
                            url = that.parent().children(".p-img").children("a").attr("href");
                            price = that.parent().find(".p-price").find("i").html();
                        } else if (v == 'search.suning.com' || v == 'list.suning.com') {
                            url = that.parent().children(".img-block").children("a").attr("href");
                            price = that.parent().parent().find(".price").text().split("¥")[1];
                        } else if (v == 'search.gome.com.cn') {
                            url = that.parent().children("a").attr("href");
                            price = that.parent().parent().find(".price").text().split("¥")[1];
                        }
                        $(this).children(".zqwList-box").css({"opacity": 1, "background": "#FD2550"});
                        time = setTimeout(function () {
                            if (that.data("type") == 0) {
                                that.append(`<div class="zqwList-dropBox">
                                    <div class="zqwList-drop">
                                        <div class="zqwList-drop-header">
                                            <div class="zqwList-drop-logo fl"></div>
                                            <div class="zqwList-drop-title fl">购物省钱助手</div>
                                            <div class="zqwList-drop-set fr"></div>
                                        </div>
                                        <div class="zqwList-drop-back zqwClear">
                                            <div class="zqwList-price-trend"></div>
                                        </div>
                                        <div class="zqwList-drop-arrow"></div>
                                    </div>
                                </div>`);
                                $(that).on("click", ".zqwList-drop-set", function () {
                                    chrome.storage.local.set({zqwListSet: "hide"});
                                    $(".zqwList-item").remove();
                                });
                                get(url, price, that);
                                that.data("type", 1);
                            } else {
                                that.children(".zqwList-dropBox").css("top", "-66px");
                            }
                        }, 500);
                    });
                    $(document).on("mouseleave", ".zqwList-item", function () {
                        var that = $(this);
                        $(this).children(".zqwList-box").css({"opacity": 0.3, "background": "#000"});
                        clearTimeout(time);
                        that.children(".zqwList-dropBox").css("top", "-9999px");
                    });
                }
            }
        }
    }();
}();