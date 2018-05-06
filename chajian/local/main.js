!function () {
    function cnzzAppend() {
        if (!$('html').html().match(`1273367929`)) {
            $("<script></script>").html(`var _czc = _czc || [];_czc.push(["_setAccount", "1273367929"]);`).appendTo($("head"));
            $.getScript("https://s13.cnzz.com/z_stat.php?id=1273367929&web_id=1273367929",function () {
                $(document).on("click","[data-zqwClick]",function () {
                    var name = $(this).attr("data-zqwClick");
                    var myScript = document.createElement("script");
                    myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${name}", "点击"]);`));
                    document.head.appendChild(myScript);
                });
                var clock;
                $(document).on("mouseenter","[data-zqwMove]",function () {
                    var that = $(this);
                    clock = setTimeout(function () {
                        var name = that.attr("data-zqwMove");
                        var myScript = document.createElement("script");
                        myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${name}", "移入"]);`));
                        document.head.appendChild(myScript);
                    },500);
                });
                $(document).on("mouseleave","[data-zqwMove]",function () {
                    clearInterval(clock);
                });
            });
        }
    }               //
    function cnzzEvent(n,e) {
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
    function getParam(url,name) {
        url = url.split("?")[1];
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = url.substr(0).match(reg);
        if (r != null) return r[2];
        return null;
    }        // 指定url取参
    function md5(t) {
        function e(t,e) {
            return t << e | t >>> 32 - e
        }

        function n(t,e) {
            var n,i,r,o,a;
            return r = 2147483648 & t, o = 2147483648 & e, n = 1073741824 & t, i = 1073741824 & e, a = (1073741823 & t) + (1073741823 & e), n & i ? 2147483648 ^ a ^ r ^ o : n | i ? 1073741824 & a ? 3221225472 ^ a ^ r ^ o : 1073741824 ^ a ^ r ^ o : a ^ r ^ o
        }

        function i(t,e,n) {
            return t & e | ~t & n
        }

        function r(t,e,n) {
            return t & n | e & ~n
        }

        function o(t,e,n) {
            return t ^ e ^ n
        }

        function a(t,e,n) {
            return e ^ (t | ~n)
        }

        function s(t,r,o,a,s,u,l) {
            return t = n(t,n(n(i(r,o,a),s),l)), n(e(t,u),r)
        }

        function u(t,i,o,a,s,u,l) {
            return t = n(t,n(n(r(i,o,a),s),l)), n(e(t,u),i)
        }

        function l(t,i,r,a,s,u,l) {
            return t = n(t,n(n(o(i,r,a),s),l)), n(e(t,u),i)
        }

        function c(t,i,r,o,s,u,l) {
            return t = n(t,n(n(a(i,r,o),s),l)), n(e(t,u),i)
        }

        function p(t) {
            var e,n,i = "",r = "";
            for (n = 0; 3 >= n; n++) e = t >>> 8 * n & 255, r = "0" + e.toString(16), i += r.substr(r.length - 2,2);
            return i
        }

        var f,d,h,g,m,v,y,b,k,x = [];
        for (t = function (t) {
            t = t.replace(/\r\n/g,"\n");
            for (var e = "",n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
            }
            return e
        }(t), x = function (t) {
            for (var e,n = t.length,i = n + 8,r = (i - i % 64) / 64,o = 16 * (r + 1),a = new Array(o - 1),s = 0,u = 0; n > u;) e = (u - u % 4) / 4, s = u % 4 * 8, a[e] = a[e] | t.charCodeAt(u) << s, u++;
            return e = (u - u % 4) / 4, s = u % 4 * 8, a[e] = a[e] | 128 << s, a[o - 2] = n << 3, a[o - 1] = n >>> 29, a
        }(t), v = 1732584193, y = 4023233417, b = 2562383102, k = 271733878, f = 0; f < x.length; f += 16) d = v, h = y, g = b, m = k, v = s(v,y,b,k,x[f + 0],7,3614090360), k = s(k,v,y,b,x[f + 1],12,3905402710), b = s(b,k,v,y,x[f + 2],17,606105819), y = s(y,b,k,v,x[f + 3],22,3250441966), v = s(v,y,b,k,x[f + 4],7,4118548399), k = s(k,v,y,b,x[f + 5],12,1200080426), b = s(b,k,v,y,x[f + 6],17,2821735955), y = s(y,b,k,v,x[f + 7],22,4249261313), v = s(v,y,b,k,x[f + 8],7,1770035416), k = s(k,v,y,b,x[f + 9],12,2336552879), b = s(b,k,v,y,x[f + 10],17,4294925233), y = s(y,b,k,v,x[f + 11],22,2304563134), v = s(v,y,b,k,x[f + 12],7,1804603682), k = s(k,v,y,b,x[f + 13],12,4254626195), b = s(b,k,v,y,x[f + 14],17,2792965006), y = s(y,b,k,v,x[f + 15],22,1236535329), v = u(v,y,b,k,x[f + 1],5,4129170786), k = u(k,v,y,b,x[f + 6],9,3225465664), b = u(b,k,v,y,x[f + 11],14,643717713), y = u(y,b,k,v,x[f + 0],20,3921069994), v = u(v,y,b,k,x[f + 5],5,3593408605), k = u(k,v,y,b,x[f + 10],9,38016083), b = u(b,k,v,y,x[f + 15],14,3634488961), y = u(y,b,k,v,x[f + 4],20,3889429448), v = u(v,y,b,k,x[f + 9],5,568446438), k = u(k,v,y,b,x[f + 14],9,3275163606), b = u(b,k,v,y,x[f + 3],14,4107603335), y = u(y,b,k,v,x[f + 8],20,1163531501), v = u(v,y,b,k,x[f + 13],5,2850285829), k = u(k,v,y,b,x[f + 2],9,4243563512), b = u(b,k,v,y,x[f + 7],14,1735328473), y = u(y,b,k,v,x[f + 12],20,2368359562), v = l(v,y,b,k,x[f + 5],4,4294588738), k = l(k,v,y,b,x[f + 8],11,2272392833), b = l(b,k,v,y,x[f + 11],16,1839030562), y = l(y,b,k,v,x[f + 14],23,4259657740), v = l(v,y,b,k,x[f + 1],4,2763975236), k = l(k,v,y,b,x[f + 4],11,1272893353), b = l(b,k,v,y,x[f + 7],16,4139469664), y = l(y,b,k,v,x[f + 10],23,3200236656), v = l(v,y,b,k,x[f + 13],4,681279174), k = l(k,v,y,b,x[f + 0],11,3936430074), b = l(b,k,v,y,x[f + 3],16,3572445317), y = l(y,b,k,v,x[f + 6],23,76029189), v = l(v,y,b,k,x[f + 9],4,3654602809), k = l(k,v,y,b,x[f + 12],11,3873151461), b = l(b,k,v,y,x[f + 15],16,530742520), y = l(y,b,k,v,x[f + 2],23,3299628645), v = c(v,y,b,k,x[f + 0],6,4096336452), k = c(k,v,y,b,x[f + 7],10,1126891415), b = c(b,k,v,y,x[f + 14],15,2878612391), y = c(y,b,k,v,x[f + 5],21,4237533241), v = c(v,y,b,k,x[f + 12],6,1700485571), k = c(k,v,y,b,x[f + 3],10,2399980690), b = c(b,k,v,y,x[f + 10],15,4293915773), y = c(y,b,k,v,x[f + 1],21,2240044497), v = c(v,y,b,k,x[f + 8],6,1873313359), k = c(k,v,y,b,x[f + 15],10,4264355552), b = c(b,k,v,y,x[f + 6],15,2734768916), y = c(y,b,k,v,x[f + 13],21,1309151649), v = c(v,y,b,k,x[f + 4],6,4149444226), k = c(k,v,y,b,x[f + 11],10,3174756917), b = c(b,k,v,y,x[f + 2],15,718787259), y = c(y,b,k,v,x[f + 9],21,3951481745), v = n(v,d), y = n(y,h), b = n(b,g), k = n(k,m);
        return (p(v) + p(y) + p(b) + p(k)).toLowerCase()
    }                     // md5
    function unicodeToUtf8(data) {
        str = unescape(data.replace(/\\u/g,"%u"));
        return str;
    }        //转义
    function numSub(a,b) {
        var c,d,e;    //
        function mul(a,b) {
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
            return Number(d.replace(".","")) * Number(e.replace(".","")) / Math.pow(10,c);
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
        e = Math.pow(10,Math.max(c,d));
        return (mul(a,e) - mul(b,e)) / e;
    }               //去掉浮点数的相减方法
    function openWindow(e) {
        window.open('javascript:window.name;','<script>location.replace("' + e + '")<\/script>');
    }   //
    var locHost = location.host;
    //详情页
    !function () {
        var adaptationArr = {
            'detail.tmall.com':{'name':"tm",'dom':['#J_TabBarBox','#side-shop-info .hd','.tm-floatcart-link','#mainwrap .tabbar-bg']},
            'detail.tmall.hk':{'name':"tm",'dom':['#J_TabBarBox','#side-shop-info .hd','.tm-floatcart-link','#mainwrap .tabbar-bg']},
            'item.taobao.com':{'name':"tb",'dom':['#J_TabBarWrap']},
            'item.taobao.hk':{'name':"tb",'dom':['#J_TabBarWrap']},
            'detail.ju.taobao.com':{'name':"tm",'dom':['.dd-header']},
            'chaoshi.detail.tmall.com':{'name':"tm",'dom':['#page .tm-chaoshi-nav']},
            'item.jd.com':{'name':"jd",'dom':['#detail .tab-main']},
            'item.jd.hk':{'name':"jd",'dom':['#detail .tab-main']},
            // 'product.suning.com': {'name': "sn", 'dom': ['.fixbar', '.d-an-list']},
            // 'item.gome.com.cn': {'name': "gm", 'dom': ['#fixtabox']},
            // 'product.dangdang.com': {'name': "dd", 'dom': ['#tab-panels']}
        };
        var adaptationOk = 0;
        var nowPlat = "";
        $.each(adaptationArr,function (v,k) {
            if (locHost == v) {
                adaptationOk = 1;
                nowPlat = k.name;
                return false
            }
        });
        if (adaptationOk) {
            var cssStyle = '#zqwB159,#zqwM159,#zqwT159{font-family:"Microsoft Yahei",serif;font-size:12px}.zqwClear{zoom:1}.zqwClear:after{visibility:hidden;clear:both;display:block;content:"";height:0}.zqwClear:before{content:" ";display:table}#zqwB159 i,#zqwM159 i,#zqwT159 i{display:inline-block}#zqwM159 button,#zqwM159 input,#zqwT159 button,#zqwT159 input{outline:0}#zqwB159 a,#zqwM159 a,#zqwT159 a{color:#666}#zqwB159 a:hover,#zqwM159 a:hover,#zqwT159 a:hover{color:#666;text-decoration:none}#zqwB159 li,#zqwB159 ul,#zqwM159 li,#zqwM159 ul,#zqwT159 li,#zqwT159 ul{margin:0;padding:0;list-style:none}#zqwB159 .fl,#zqwM159 .fl,#zqwT159 .fl{float:left}#zqwB159 .fr,#zqwM159 .fr,#zqwT159 .fr{float:right}.zqwT159-logo-fix{position:fixed;top:0;left:0;cursor:pointer;width:110px;height:49px;border-bottom:1px solid #D0090F;background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAxCAMAAAAMXWzrAAAAYFBMVEUAAABmZmbQCQ9mZmbQCQ/QCQ9mZmaiODrQCQ9mZmbQCQ9mZmZmZmZmZmbQCQ/QCQ9mZmZmZmZmZmbQCQ/QCQ9mZmbQCQ/QCQ/QCQ9mZmZmZmZmZmbQCQ/QCQ/QCQ9mZmYm4O2/AAAAHnRSTlMAwEBAwICAEPCg4GDw4DAg0JAwoJCwcGDQIFBwsFCBoLqyAAADt0lEQVRYw+yVsY7kIAyGEbIFoggFEUkx873/Y56H+MLObrOJrrhivgJsR+LHYJPw4cOH/4NV3FANIcV6ODEGI+ni7pgni2zhHoIbYMuip2NsNHcluO5Bp7n1L+Uaz3e5xnf2FH5Nte3t2FDNKVMuKqiRWXVA0fiK8wqsOslcOFXFUU+zavT4D3TIraG2vBznWrSGp8V/TVTVgg1dRDIy8KyNwhZP6iuuawOX64Coxht3F5mcX57I9yrGkGc82ATI/Wap6LyGxZPTOHmlpKXtfGV/oDflnqwz9hPPlKwnK4SabsrVsWKro/VFIMugADatZ0tM4E6b1z62mEmh+3Lp4RVhaKbE4HhveHb5hlyD7k29wBDZTMEMpwo0P7SNr2zhIluBrHWYyNG1qcAjBcflc3XtaAg9GhfvLfUCbMm9jL+RuxTeKL3J8TTzjiwX5HaQQnCWzGP+JySzi7PDsWyhiJGB/TD2C3K91VmZHSjhJGXq6fxtL0qyMWZMpx47vF6ZXop0QacCLZwoerZBUmjpT3tluNs2DANhMgSoEZJWSYu22sbG93/LneTWTZE/Tn5tQL8AQQSLutzhlLz++XYZ08/J/ZxVfDkKQT+mkXu5cIW1UeTR58flUOw9uWsYx95fu8n1kPsOay/7JPTQ4YesoWlT4HJ5K8+M8Pf0euwZuy7vYf56Oar1+orq0APgzu3396Od13G34PVmD7j/CQOX48/oacLxfhwKjs+fTg9Y/vtEpZ3aaOkEPtY7JkSNW72Zqbc2RYROIA6obPsislDl48C8sKwp4uPibextaTxkjDAp7/MHyxk5bovvM0xVIZcyg0jBXGnIpyKkeC6QW7tCTqHVrIiM7wCM6STCrM59mzPs7jlbsYJTSxYituJbtzAsGp4WtoXYsJkdvMnoY3Ip+pgJ3hjZWa0VBppslp23kdHmoGHXhDNepHuefiBn5aj2GJSXQrxWyitvrG0P+C3YtZg0hbnkMsM85AQgVxDOykEhxzG7ZrctweV0V2RSlEQza2fvUuEBI8xklfSZMMVjot4RZvK0iW8xE8tN6ZQio0CN2KLHd7kyPbI/lOYS3bRgb8JsDBxTD0lpjN64g4SGQFvyKOseJvo85NoR5rk0LSdbAgXljhWLLqVQm3KJJ2nKcV6DuSFDyVi4Z8zqo2Fuvq4ISKO5Trml5K7JA+SyTrIiBPdaU6reU1SuKtWj1jmyqKZKJxlJrYE6s4Up13qQakKf5chaQJ6EhtKkGwz3MRKYK33xxf/EX6cqVrA1c4ftAAAAAElFTkSuQmCC);z-index:2147483647}.zqwT159-logo-arrow{position:fixed;top:0;left:110px;cursor:pointer;width:69px;height:49px;z-index:2147483647;border-bottom:1px solid #D0090F;background:#B5090E url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMA0LTzques2raxnoJ7OBAG7eHIxcG3o5uTdmphW1NKLiITVM2tHAAAAIRJREFUKM990lsOgzAMRNEBmgIthb7fLTD7XySy4CNIGd/fo0iRbcR9O8huJ20NK2kfcqPsT3Ir7ECNA6170tpAK+Rx1fKFkslgXdNWmNXU+KTGPSWaadx5aKoRuYc4e9iVDqItnPGhn/WYrbpE69SX8PMQb3kJVmMvZQ/W0GXBwfGFdRMX7S4MlF6c5AAAAABJRU5ErkJggg==) no-repeat center}.zqwT159-box{transition:all .5s;transform:translate(-100%,0);position:fixed;z-index:2147483647;top:0;left:0;min-width:1200px;width:100%;border-bottom:1px solid #D0090F;background-color:#FFF;color:#333}.zqwT159-box>div{height:49px}.zqwT159-bijia,.zqwT159-like,.zqwT159-logo{border-right:1px solid #F2F2F2}.zqwT159-like:hover{background:#FCE5E6}.zqwT159-logo i{width:110px;height:49px}.zqwT159-bijia,.zqwT159-like{width:117px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;position:relative}.zqwT159-like>i{width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAY1BMVEUAAADQCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/////wrrD20NHsnJ7eT1T+9/f88fL42NnxuLnpio3iZ2raP0TUICaIMJPhAAAAE3RSTlMA4/Br+tOzCXkeEhF6JPPYyrII+KaLEgAAALBJREFUKM+FklkSgyAQREVAiXtst+y5/ykzU5kgSqp8n/2qmIYhOaLUmTJNm+lyE/cuhZBW+ZqfLALsyecKG5SYvsOO7nuaQ4TjvKC54xAwUoOChAYwbKBAkzj/ExkJrvSagvzBxUgYEO+rz2cQhkQD5u7F8hMtmPWsJwglw7EMnsnwcKk7X4LhN6lbpFFdviDh4pu7hMktdlhZSb1/9joR6nhRQl6Fq40/g1H8GQ74ALnWG8zzGFQBAAAAAElFTkSuQmCC)}.zqwT159-bijia i{width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAADQCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/////SFRr//f3+9/fZNTr++vr31tfaOkD65ebbP0T98/T87u742tvqj5LohYjRDhT76Oj429z2zs/zvsDiZ2rgX2PWKS5vO9/HAAAAEXRSTlMA4/CzaxEIedMh+frz2MoceMgyYPMAAADPSURBVCjPhVJZFoMgDCyi4m5jXepWtfv9T1hIULR+OF+8mSFMEk5HcGzOgijmtrOhXWGBhiVcw/serOD5M58y2ICluk4CiGl49F3fjAAJVTsTf7lmBHkWmMcy/FCOWaESqGw28TfJV/KAN8CWAjd18vf0QRW4FBj5Cfcs6zCYFAL0G7yUEEghAniu+OI7CzFAsRJK6pEeL6vF3wKC67h1TnyOfopLDdZYrUI/NSghgO4YPwgaoodK07TL4F29jv+x+weL2q129xnCkKnPcIAfTCQaXpESsxMAAAAASUVORK5CYII=)}.zqwT159-sameStyle div{width:117px;align-items:center;justify-content:center;display:flex;height:49px;cursor:pointer;position:relative;font-size:14px;font-weight:700;color:#d0090f}.zqwT159-sameStyle i{height:25px;width:25px;margin-right:4px;opacity:.7}.zqwT159-sameStyle i.tm{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAACLlBMVEX/ATcRERECAAD/////ADsAEwz+ATfR0NDBvr+vrq6cmZqJh4h5eXlycnJmZWVPTk48PDwnJiaBCiZhDSASEhIQERAOERAQEBANDQ0IBwcREBAPDg/+ATgAAAARERH/ADj/ADb+ABQAEwz////+ACoEBQX8AAD/ADz/ADEgEBT/AD7/ADvyATb9ADX+ACf3///9AC/9ASX7rrv+jKH+g5n/ACMhISH/AB/+ABoUFBQNDw8JCQkAFQb6AAD7///609r6o7L5lqX9maT6lKD9iZyPj4/8dYj7TXD+RGb7OV/5K0r+HEpBQkL/AkH9BDv0ATf6CTL7Cy76ASv8ABcvDxQUEhL8AA/9AAn38/L74OL63N761tz60Nj4ztT7yNH8yMz6wsv6vMn8x8f8ucf9v8b9vb/7qLb6rbT+nq78nKv8lKWkpKT5kqT8kKKbm5z5hZX+gpL4fJD6YHt4eHj9R2pnZ2f5UWT5S1X9JlLIBTAWGxsjExkJEA/49/n5+ffv8fDv7+/u7u765uro6OjR0dH2zM7Gxsa9vr62t7ezs7P7ra+pqan2oKempqb5kKT5kp3+lpn5bIr4fYf9bYeEhoX4bYP5ZH/3a3dxcXH5V2r/OmT5TV5cXFz7TFz5NFr8K1ZTVFP6LUz+E0T9FkL6MkD4Jzr8MTn6DDfsAzfcAzfoAjfCBzAsLCyiCCyuByooKimeCifvACYgHyD6AB9fCx5ZDx34Axs6DRQADgUADgQVBMNWAAAAHHRSTlPy8vLy8vLl8vLy8vLy8vLy8vLy8vLy8vLy8uXlHXTrkwAAAgJJREFUKM91zlV32zAYgGHVacfMEDlOHMPs2WFmaBgbKjMzrV1hzMzMzMz/bobb9r2QdfRY3xFYAZZMOFcuFxBIpZL34gcTV0wEQRitWs7AqS2MoaDXFnhJVJb4oMl0w2wajL65/FgdG0smx+I0J96xxIfNYa9xfCSauX5qpt3b0+NtyWlFSZdJkmzTk2RFm6+/lg/y+UCiTpyG1d0Km80NA+PhSC7km7jS2tXR6uf0kkz0B0d0HVf7TblyX6fxdVfvS99BaVrGbicTuknSrjYMHw4OzBr9D7qTkiixyjPdbNNtD51+Feg2nm9s6mt+LgnHP9JFyHu6Owbe0B7q9UQmPW3SNO7HxUMzFaqcON75uzng8bc0NPpCBfFtFHv/hZpVUnb9dOaJnueisdg0jVEAVH/4+o1WCrG0DeNpirbZbBbs0+dqsEXjLs0xmEBymBJj3hbdmq2gZhHVON9TEsmxTNGNojVgB4qWNEWWUcmxKir9SwB0O6gSVuffP3PZ7H6p7Luf/xaFsypBHBB+h3Bhn9wCAechLInigNbRqUvzUCMHYe3UUAqKQliPHXXVn7ASqJjLdRp3XsBTxDawEw7hd+EBvBY6XBA6hN05+BE/CXcBJzyDP4RP8bOQ+DKaIuBN4R8rfoQgwB5kjWIdsl6xFtm9eeVGBNmgWI1sUqxC9v4HbN2KTs43/bQAAAAASUVORK5CYII=)}.zqwT159-sameStyle i.tb{background:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAHAAcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAZABkDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAUHAwYI/8QAKBAAAgIABQMEAgMAAAAAAAAAAQIDBAAFBhEhBxNhEjFCURVBFCKR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAwUGBwj/xAAkEQACAAUDBQEBAAAAAAAAAAABEQIDBAUhABIxEyJBUWEGcf/aAAwDAQACEQMRAD8A6V07pW/qiDMpqQhKUIe/N3ZAp9PPt9ng+POGlzpdqGlXqzvVi7NiFZ+486xrGD8XLlQG8c4XdM7Va7NmNWxQWRYq73vyY5an2lLKWB3VoywAKkckj64r0ctfUGn8xr6kVbNjL8vTNJI7laRjHK6uTJsrgMnBCou2wXzjlCx/mbfc6ERzGJhBzuULBJRcJXb63A5yCCBuFyr6qhqTDCtoWEyihhHOfaPGMhxvN9MZlklSK3ZrqacrehLMEqTRFvr1ISAfBwn7oxWNSUEyjpRqqu0MNcw36zrHBA0KAssJ3CszHkNyd/8AMQ/+d5xLX+yQWqolypb7odyJaO6KEhgB5hfA506tc+KvlRxnxEsYYQIKZ9+9Ycv6kXss0hmenYErpUzCRHmmEe0xA+Hq/an6Ptzt7nDih171XUhq1pM1klqRKkbKiJHLJEvw7wX1jjcb77jffEuwYZyrjWyNolToodoQRIwyV9DJ596tZlnoZr6kqEsvIBygH8KA41V9Z9bbGqNPJklem1KkZFlmee21qeUqNlBdgP6jYcbfr3999A/J+cJ8GAVtTOuE3rVMW6JLwMD4ENFpbbTUUvpU8KDfk5/pZ1//2Q==)}.zqwT159-sameStyle i.jd{background:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAZABkDAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABwgBAwUG/8QAKRAAAgIBAgQGAgMAAAAAAAAAAQIDBAUREgAGByEIEyIxMnJhwRVBUv/EABsBAAICAwEAAAAAAAAAAAAAAAQGAAcBAgMI/8QALREAAQMCBQIFAwUAAAAAAAAAAQIDEQAEBRIhMUEGEwcUUXGxIiNhkaHB8PH/2gAMAwEAAhEDEQA/AMDpD0Qs9VUey+Xr4LHR3oaJsWYWfzHfuwTTQbgNoAJAJdRqOK3ssPVeAqzBIBA1/PpXs7qTqxjp1aGS0XXFJUqEkaBPKuYOuomACYpssd4cOjnT5Kf8riZc/XeJ1nyGXaZ9swK7dfKZY4lI3+6HU6eoaaM2tYPaNiFJzH8158vvEPH7teZp0NJ9EAfJkn9aWrxJch8h8iXcVHyjlpMlevSWLVqIeWIasBKiGNAige+/Q6kkDueF7GLe3t1oSyIJ3/irf8O8XxfGGLh3EXM6EkBJIEzqVCQBIAj2JoLcL1W9WgOYMmuGTEjI2VxaTmytMSkRCXt69P8AXYd/xx07q8nbzHLvHE0F5K1NwbstDukZc0a5fSfTXamE6ddfcxi+mebs5fnnzc7HWdcNTmrRyyh1VzumlYepW2aKD3101+Q1ZLbEXE2yy47Ko+kR8n4qm8a6Os38YYTaWOVkqHdUFECCRolI2ImVEaRtsYX3mLmPJ825mzlczfnyeRsNuls2H3M39AfgAdgBoAPYcLbji3VlazJNXLZ2dvYMJtrVAQhOwGw/vJ3PNZvHOjKInRq7iKN/KtlqVG2ZEqxVWvLE4jlayikqknZvSWJJKhVUkn2BOtCgE5wON/elfHm7hxtsW61CMxOWRICCdSNtYA0JJMAb1397mjlMZifIUaGGnWOtkqfnwVqiNPZezHDBKsEiMuuxmkU67SrEkjYQTi4zmKkgbKHG8gAx+/8AlLLdniBZDLq1iS2qCVmEhClKBUCDEgJOkyIAOYGh91fiwkeUlHL16C7i4cjbqRlIKsbhY2UIxMKLvR1OqsdQdD7EHgG6CM32zIkjjj2pnwM3RaHnEFKyhCjqsiSDI+omCDoQNduKHvANM9Vz/A/U/rjFbpqJ/kfof3xKgqwfIfUcSscVPGa1r//Z)}.zqwT159-sameStyle i.wph{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAACVBMVEXVEoXYC4z///sQolpuAAAAPUlEQVQI12MgCERDQ0MdQPTSKDAtBaOXrVoJplehia9atQqsfmXoUhT+0qVLIXQmGh0KpaOmOkDtQ9DEAgAkRh3hA8v04AAAAABJRU5ErkJggg==)}.zqwT159-sameStyle i.dd{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAZlBMVEX/Myn/////+vr/pqH/7+7/mZT/XFT/zcr/hH7/a2T/Ny3/wr//joj/OjD//Pz/8/L/5OP/3tz/1dP/lpH/d3D/YVn/T0f/+Pf/6un/xsP/t7T/q6b/nZj/f3n/enP/dG3/V0//VUwBLfu0AAAAfUlEQVQoz9XORxbCMAwE0BnFuDuVhN7uf0lewk7mAPA3WoykN/gZJQFBApZUVHJiQsMbHB0UB1zo16lFDCRHG6FdyeHekw8oe5onANvxVT37WDipJDQbj2OnEuHmjJH6ZreaPIzBd5ZZd2vFRpRZpNr1LQ+9UGbUsqHJ+AtvbSwD9JE8NeAAAAAASUVORK5CYII=)}.zqwT159-sameStyle i.sn{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB9VBMVEXmACbmACXlACLkACnmACboACjhAB/lACX3tAD////lACfnACXjACXlASPmACriASLnACf0tATkACvjACjkASD3sgL3vQHpACrnACL/wQL5swL70wH4uQH4sQH4yQD3wwD3sAD6/////v363orfACnoACjgACXnFh/uNhX+vAP4tQP4wAL6rgL0uwH6twH6tQH1rwH82QD8///6yUzhACndASjnByPmAR/qRhb3vQn3pAnwggnyjgb6vQP6sAL3qwL7swHysgH4zwD2zAD2uAD5qwAAAAD66rL73pDhADDmAC7sACffASLuNCHkLR7uKBzjGBzoMhvnHxvmKRrrPBnlNxH3kA/yhQ30fAztcgz/yQvVnQP/ywL8xQL6ugL5xgHwtgH0wQD/tgD/rgD19//6/vLv8eb//d29xNTKzcr76r+lp6n/5qL/7p724JWVmJSHi5SSlZCGh4r74Ij/7H95eXn72nFPT0/etUb2zUH6xT/ywTb8xDU2NjX4wzPlDyfjIiLvuR/dBx/sLxvwXBflMxbkQRT5fxP2dhLrXA/sdw7qXA7sUgqkfAiZcQfukwb5pwUcFAX9zAL6wgLdowLzmQLviQIAAAL9sAHjpwGMZQHw5AD32ADx1gD90AD7xwD5wgDzuADvrwD7pwC6fwB9UwA2IwAla36WAAAAB3RSTlPy8vLy5vLyOBIYtgAAAhNJREFUKM9NkmVz20AQhs92nbPuTpJlZqqZHTOzw2mYOWVmZmZm5t9ZSUmbvje3M7vP7Pthd8E2sCkJkAOp5G/G1yFEiP8QIxXLQiVUIig8CAFAdNYzwAM9e+/OmFqvoSHW0wIABBu8GKpZcjfxIT+uJm5iYCEWCPYwTGbM55s1W6zN2uQVn09DNohyMH2jysXDixHOGg5Fnobzs7RHdEOYTCd0odVgJahQcBZ7udnYoSKim1rz2mZSbCkS8nuRSLzMTPM/YoroNnsIIqUvCq0xoOXLMWPUGl2e7FPyRDrA3LQFrdGX76LtaoWbd1hMLwojBEuBhDww67Rrxme/jReTcz/fPFowaRuFkZQUyIZtZS4YC7x/fIhy7jn7a34p9nYlUXTLQJf/uYVTVKxrJylBc+vcSm3dPJWVAsDeN7e0dUdy99FjR47vPXgtrqjblobV/NRVg8XFWv0wtfNSp9M5QO260C5bbqmVAABDv+aV7rKTdzp1Zh/lonocxpxbnBsNUzP2885uF8XL5XLu1+rGERIJgtP2eA/VLRA+Jh2BoRQtEIhg6WM4f7p3O6/eE+ccocYoopGwhSzJLdtWY7rv7R/Vb4GW3fwkw0CxJ40NV2/7h0qfW3H714ejE/4MSzwbbixm3Hp0fSrxaSGXVvWp+jUaiASAIUNjQhi6WJjwMtgAoV4JIdy6N7msSy4Dkn/39gcc51+B1YUDKwAAAABJRU5ErkJggg==)}.zqwT159-sameStyle i.ymx{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAA+VBMVEXMzMzMzMz///8AAAD8/Pz+//9paWn6/PyLi4v///z5/PjMzMzJycn34Lz0fQDp6em6urqbm5v6zpX0pDz39/f7+PLt7e3l5eXW1tbPz8/51qr42aednZ300JmIiIj3w4D0wnz6wHZzc3NsbGxkZGRZWVlVVVX0p0IvLy8lJSUTExPzjw0MDAz0iQD7///7+/X19fX79Of37+Dg4OD26tX16cj558j35Mb+58K+vr6xsbH12KysrKynp6egoKD30JqQkJDyyIR/f4B8fHx7e3v4tWD0slzysVhSUlJKSko+Pj43Nzf1nTXynCn1myMcHBzxiQH0ggDxfwBmh5klAAAAAnRSTlPy5YB5WPAAAAEGSURBVCjPddJnb8IwEAZg9xxjJ2SQhL2hpZQC3XvvPfn/PwaPiMjBvB9i6R6dfZEOrSFjeD1vmZNHyAJTLJRK4J67ZYNUBxOM8SRXzIqLk2wVddnb5sVcX3xDXQq81FSd67qULxgDHi4by7PVbp7exJ1ZYb+YxyCbYqxHtixXyQPZCVRLBaDCj74uH7x0CNDmx6cuA156rzWxSDvzpyojNQJJBR4khHSEGRBCbCmlS2HV8O46AAgKcNZ98YgUpxXXCaQ57n6/KqHQGH/VnR15PdmN4tZ9Y/HO/tCfDnvRbdSLp38dx7PtRAiQk+fxzPf9/59OSfRKSXaHOkeed3pA6WJ3Vu/bHD1pFn0k9oiZAAAAAElFTkSuQmCC)}.zqwT159-sameStyle i.gm{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAC/VBMVEX/ACbdAKfnAIP1AFD6ADjrANfmAM7iAMTbALnaAK7wAGH2AEn4AEP9ADH0AOfxAOLtAN3kAMrfAL/ZALPiAJLkAIvqAHXsAG/xAFvyAFf5AD79ACv1AOzoANLeAaLeAKDgAJzgAZboAHvoAHruAGn/ACj3AfDfAJzwAGT+Byz/////ACf5ADvjAI/2AEf9ACz//P7+9fr96fb+7PPbALnnAH7nAGvuAGj0AE/1AEv4AD77ADb++fz60OjpANXxh8/gAMLYALLXAK7bAKTbAJbdAJHlAIjkAHvpAHrrAHH98fr97vX95vT60u32vOr93ejvAOD9zNrmAM7xfsjjAMf0hL/dALvZALT3f7PYAKjdAJ/YAJ7iAJTiAIbjAITlAIPgAIDvGXjiAHTwF2/vAGLrAGHtAFvyAFr0AlPwAFDkAE7xAEr1ADX7ADD+9/7+7vn62vX61PT5v/T50fH4qfD72O/4xurzoeb2tOPvhOD9zt75wN7wmdnsANj1otfxjtXoU9Hzi8X6nMTzd730fLjxZLLaBLLfE7DZAK/dAK7hFqrrQanjGqjxTZvgAZrXAJr4Z5jiAJj0UZXvPZPYAI3lA4zsHovfAIrZAIfcAIPpAHboAHPsAG3tAGvkAGbpAGPpAFzxBFbtAFbtAFTwAFP4AEL5ADf3ACf+AB7/8fP64vL94u794+z3xOz0Aen4zej5y+fxAOXxe+PyXuPvluH8x9/uft7tR934tdv9xdbqUNb3q9LpMNL6tc/td830k8jnW8jnUsL2jr/vcL/pT77hKr7+q7zcELrmNbfcFbb4jbPdErP0cLLvXa3sUa3za6zlK6v8jKr1d6rkI6nzaqjeBKf6habsN6PiFqLkJKHiEZ75bpz5bZvlFJvgAJfsK5XWAJTiCZP0TIzyO4j8YofuJ4fpD4HrDH35SnzdAHrdAHnuEnT0LXPzKWrhAGryD2XvCGTcAGT4GVn2HFb2Bk78HEnoAETwAEPxAELqAD78BTX3ADPkADPyAC/zACSz9sTeAAAAKnRSTlPx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8eTk5OSQXl7qAAACfklEQVQozxXOY3AcYBgE4C+2ndTum1OOOeTM2LZtO43R2GaT2rZt27bd6WVn9tczO7No8WwFBQUNDSN1dUM1NQNV1ZkqKvp6urozFqGWRn+Bf4DAj8/n+XC5nlxPd3c229V14zpkHNgiatiX6+zsvHYLmey9Kyc9PXMzu8hVD5lgu24SAdZnZzvlVPHzANIyADLZRfpIURxaDE63REJhU4DfUYBSH+89ybDdXQUpUkLswKPn3o2GuqsBB8DmOI/snQqbPFXRPClFLi/vOgLLSXgQiCf5PuQ0yOMaINPeXjsoD++oLwaC6AjYV/vV8FJhG1kNmcmoO6AgPPxjPdiLLgCceNB02h5KawzRgv6hNgC7/WUbwAbblQuswkIiZFTx1JEmjRbVttvBgeiYVRkc9NAjKyVlVUm1oNYIaUbSxr4Ny/qkfYPvxB1Br0J7utu72wW1GsgiJrrVN2xYNvS84ixFIrl+mMPhlHDq/BWQUtz4GnD5MBpVACCllgGADQuIl4WzkBLdNh9g2U9fAAdqJ0C5JFiMxQY2zkFaOHo+yEleUtRygE4qJSQ4CBs4F2kzcG5wais4+gIpWi6sZAKBcC4Ua4wsMQw3aP58++0jII21AuFQhZeX132J2AQpJ2Hc4Nq/xL/NQIp7DBD2Jz4+fpASooh0kpgucHESl3gHYGRkNbhcunL+TOUzqSKywuOPrXwyOZH4grQz9sebvTYwffwpdT5C1vhfX5krMAzGpy902+8J7yMiIsJeD8hM5WI9NYVnMjGY3xgc3dY2ISFufDSa1m8mB3nw+KTp2QRObrGxMTGRkbQBtBRNZ6GVjo6ysrKltraWlpKShbm55pL/xJbfpL3YpRYAAAAASUVORK5CYII=)}.zqwT159-sameStyle i.yhd{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAABa1BMVEXMzMzMzMz////8/fzg3+DKCiP7+vpycXE6OTorKSrj4+Ti4eLR0tLMzMzLysphYWFRUFBOTk5BP0D6+fn29vb18/Tu7u7Dw8PAv8Ctra2XlpaMi4yAfn9zc3NlZGVKSUlEQ0MwMDDPDCYgICD59vfs7Ozb29vX19f/w8zrxcnowsjHx8e9vb3fsba1tLWnp6egn6CcnJ2Eg4NeXV1VU1TLMUTVKT/WIzo2NTXSGzPHFCvPEysmJSbFDCTHBh8bGRr7///z+fjx8PH37fDe8O/27O7v6uvo6Ojf6Ofx3eHc29vj1NbPz8/nyMyyzMnCyMjmwce/xMT/uMLst73ZtLapqananKaLqKPal6DmipiTk5OOjo6IiYjYeYXRe4SDgYPRb33ebXp4dXbFaXbNZ3TXYG9bcG5tbW1SbmvXWWjMTltZWFnBPE/NOEvDLUDSLEDLJTzSJDu8IjfaIDe7BiEdGxwaGhoSERHAAApkt2RhAAAAAnRSTlPy5YB5WPAAAAFDSURBVCjPddLVbsNAFEVR95jDzMzMjGVmZmbm9vOrOIpkV85+mJel0R2NLjFCyDdCqEn51ARBAsD0BKSRRF+2H6dkZez0twwZMaafO4GrWRUDKmJkxLJwUX5rnk2upcIqp/1AI76DYzpwCXh0VpMyMiOeM3rfpPeg92qDVghRAzE/1en1HQ6wc2Yw1qyL28prBJl7rdKxWycAnwJU0GCouXX7giQaFTq23FUxWj0QNUDBnTgYQXbbL+0N2EtFDwCLF0qOLZgEOaIr9fQKlSlobMqkvgSFd/CCu0D1Y/Oa9zlZf07xxcP9Y7AJYnnvND6XkOl6UiARdun0msOWqifm1Xg8EQJpY79zvUFBE+Au9n900CJPAeP8PKC9kQp0DgAu3sH6lf+kluyded8DBbFEs34tBknkvMVCXkKARIbvzvB9+wMfoyop9H3IYQAAAABJRU5ErkJggg==)}.zqwT159-sameStyle i.jm{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAACQ1BMVEX+LIj8FGX5KH/5JXruFVztA038KoX7KYL0IHHyH2nwG2bsGmD0FFzvElvwFFrwC1nxA1j+LIj8FGXzS4nwP3/0MH35Hnb2G3H0EWj3A2TqAUn+Kob3FGH5KID7KYL0FFzvElvwFFruFFv////8///43ef41OL1vNL6JXv4AmTvD1n59Pf3ydv58PT2w9bwlLX5JHvpCFP+///7/f764uz45Ov63ejy0d/3z972xdj1v9T0sszwpcHwnr3zZp7sV4v5PonvQ4DxNHv6H3b5Em/5BGftF1/vDVbtAUrmAErpAETnADz++vv55O703uf22uT12OL4zN70y9v0uM71tc7yq8bzqMPunLrvmrnxmLjsmbXvkbPvjrDtja70hq72eqvyg6nweqf2caXxd6Dza6DuYpT5Ro/wW471OoT3MYHnR4D6LIDoSnnzKnnwIG/5EW/0A1z6AFzuElrxAFntDVjuBVLqAVDvAEHoAEDpADP69vn/9fj79Pf57fL86/L47vH26/H+6PD06O784+383+z51+X71OT7yuDzzt/5v9b7xtX1wNXzxtTvvtD6s9Dxus76rcz7qsv0rcn6qMn1r8jxrsf5ncP5o8Hvor/woL72m7v3j7n3irb4frDwhKbsgKbze6Ptc5vscJvuZJf7TpX0UJPsUov6QYvzQ4r5NYTnUYDtQHzqQXnqPnj2HnT6GXT5GHPsMXLnMG7kLG32EGzxDmfzGmXuF2DoFl3sElrwDFroEFbwAFHlAEfrAEbmAEXlADecrpCiAAAAG3RSTlPy8vLy8vLy8vLy8vLy8vLy8uXl8vLy8vLy8vJgkiOJAAABuUlEQVQoz3XJU3ckYRgE4HdnJuZmjSz6a013j82MM4ht28batm3Etn9a+uS657moOqcKDoMgfj8TDkSGOSIh6pywKBClChOByN3t8XR7lLRSqaTp9lnpXDvt9dKpYjg+7vj/x9FES3lud2/r55Ze6dcvS14xnLJrMs0y7di7+y9eNs20VqN7K3XoRotDDCeWSaKStf+99ZNFnQ3XSYLFNfpcQnYMonueyZ6wna7sKm1tv4viCkxIazEZ7Scheush9y3zdfMlhLt6+q1yikP6fLm8KxmSG66aK3RZD8wdFtxZrSdz76JrHEneOQJJ/wzEY9xUTDz62Nb1u0RRXvLUWqFQ2I5CzHCjNedtBqqvJ+qGqyjqlU2XX0RRhbGQ5KwpL1t8jxp/EIX+2oLSYoTUHxSWohiISMuTkwbjFYS37W0MhYZq1DbZJ1UoGMs/OtbYcVszka2+Od18GeFlo1M4yuDiIML5PC0w+iYvtPndMD+ZVbkQZPxrv3JKT0PcwO4O41OpVgeD2wPrgRE/5vMNjgRUEpD0MRiGpafzwWB9fB1gGAkkXBCWAIkXhSVC/Hlh8XA2HEg5JCxlH2vVifaOJ9i4AAAAAElFTkSuQmCC)}.zqwT159-sameStyle i.kl{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB3VBMVEXEI0THI0XEH0DABy/acYfaaH/VXnjOTmjOO1vKLVHJH0XBFTrDDjf////9///GIUTFIkTHIUTHI0T8//7GI0a9AirEJkXJIkXABy7GJUa/BS3GI0LEFzzDETe+DTPCCzLBCDK+ACf//f7hnKrUXHfKM1TGLE/GJkjGHkHDGj/BFjq+CC2/AyvrwcrkpbTLPFvIJUbDFDnCDTbDDTK7AiS/ACH6+vn89/n48fL04OPw0djvx9HwxM7ejJ3ehZraeY3VZ4HVYHrSYXnUWHTQUm7PUGzOSWbORWbJLEzHKEzJI0jFHT/DGj3DFjjBFDjAEzbDCDHACzC9CDC+Ay3BAS3BAiu9ACP5///9/Pz68/X27+/55+zz2ODw19vtz9bvzNTpvsXtvMXntcDosr/oqrnmp7Pnn7Djnq3jl6fflaTgjKDfiJzffpTafJHYcYrWb4bQSmrOQ2HNQF/JN1jLLFHJME/JKU3GIEPIIELEI0HGGkDDID7EGzrCETXADzLAACe6ACC4ABe1ABD3+Pb26u/05+rx4ujw5eb53+b34eTu1Nbsw87rucXktMDkl6vhlandmKjcgZjZgZLcepHZbYbRWXHRVW7OTWbMTGTJOVTEN1HLJEvJGT/DET67ACEG7jdPAAAADXRSTlPx8fHx8fHx8fHx8fHx1LU+TAAAAjZJREFUKM89kkOXZFEQhG9Pj2fiPqNe2XZV27Zt27bGtvFb5/Zm8mTmIr9zIhcRhOM4nhf2Ra5N79J1w35kEkSOE3iOcCIvCOq+o7uxYsm9sFpvVSwmmed4gbAl+1uVukkA+RLF8EooIoiywDE1s5q2upG38NX7a29rrRhPNpRj8zXhm9LBIiwHzx3JFktKMeoLUeE0MzVOtXQUoeaiXdRE9vcw0GObhEeRGdEy8/hyoYlmkU/InGj2n+lj1J9SiZyOY/5S10OJY6vN8VsOpMLZPUxENCIaU5K1q6ba7+zYrq1r7rPXe7avlhA/Ja2NWOwqobTQ834Q/UWV7ygKqkL0bZjoHnhLQfG/KAU1RUesxCiVEsVwSYxJ1OViwAVUrzziiT6X114CF332PQqgv2oZErC5Tn0kPEcdlQCe/pwYKI3S2k8ARjNljETK6K5zbSyPAu6rhnxQaXhmNztbwJPOGlR1OxQ3gIqsZRQo8DpTfwrHbaTlYGC6R81WA/TzZdsIUBw+sf1AWS8xRWLwdR5a3wDS9EvGv9mb+map75Rw7Q10qi/QGvwwnk/pi5kNu0mJI9arEk52fsTq30Cz0dLg3TGdOZrCwcdDlqTA3D5yxlDe28kHLMlQUDvJ+J7TeMTPEcFsShoxvPYaPfa0vaO7bR3SVkZlnrLgJEJKOVBSXrtZV+keRLTxXNUEpsbLB1qzsrM4BFDWrzw2m8jc1UgOIWxyHuTeuHv75q079x7m3si5f336B/iCdPR/UHcoAAAAAElFTkSuQmCC)}.zqwT159-sameStyle i.yx{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAeFBMVEWxnnaxnnaxnnayn3eum3KzoHnIup6tmXDa0L6sl22qlWrMv6a1o32rlmzh2srTyLLKvKHFt5q+ro2ok2ff18bc1MLVzLfRxq7DtZa5p4S3pYGmkWSljmDk3c/VyrXBsZG7qofr5tzo49f////Wzbi9rYqgiluXfkl8ORrpAAAAAnRSTlPy5YB5WPAAAADKSURBVCjPzdJHbgMxDAVQmaJ6l6Z3O+3+Nww8kJFNZhvkbx/4IYEkN/J7bgSuQsgV/K0g6nnRjKGj4JD+CJ3sbkJCtINSSWj2EnHEtfF3ORfO7ebfP1QVqmzymW89jJINTRNGTeuM69quk30TxepN7rM5RBUWuzRNEwMt42jacADWNlTeFkQEMfDFbPxrrG3sM8jlfDu0D8ltiLLO6LQK8RSXW853fn97MHGKMrmcn6Mwz0Wxod9fbc4xqHlyWTSlQP7BfuAq1/f2DR5mDVjXD1zpAAAAAElFTkSuQmCC)}.zqwT159-sameStyle i.mgj{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAilBMVEXMzMzMzMz////oRHjpR3rlKWXnOnHnNG3mMGrkJWL+8/f0nbjxgaXmLWfkHVz84+v71ODMzMztaJLoPXP+9/n72uX5x9b1qsHtbZXsYo7oQXbkIF/97vP95+31pL7zkK/vdpzucpnqT4HkIl/73uf4v9H3t8zzl7TxianwhKfvfKDvep/sXInpTH6OZpcSAAAAAnRSTlPx5NxTO6UAAADVSURBVCjPddLXcsMgEEBRArt0ULOaFff08v+/F8bJ2rJM7iNnhjbLHli2tF7xfBVjeVixJPmuUr4exnHvnpZSHBQGrQNKb2+kbE6NOCfjdzGTokEQf8HpaK9SmwQXmt4v0oW1mCVlQfKGIObhlqTW4lY8ydevKER1Pgj3JD4CgAyDcyM2AGJyJJvjhEa+lH3fboPBWFsSbneD33TKGNGWn4Nb/Nuj1gAImR/tTTp8rbt7eTbpuVK197Kqo1LRZ3bj9kPAji+ELmF5XiiSKj8gvPp/3n4Ar0wM6fgDPQUAAAAASUVORK5CYII=)}.zqwT159-active{margin-right:20px;overflow:hidden}.zqwT159-active li{height:49px;display:flex;align-items:center;font-size:14px}.zqwT159-active a{height:18px;line-height:16px}.zqwT159-active i{margin-right:10px;width:33px;height:18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAASCAMAAADi1EdeAAAAP1BMVEXQCQ/////camzopab11tf34OHTLC/wvsDWREfZWFr89fb66+vrsrPlmJniiovhY2fYMjfVIifSExjfe3zxysoiY2wnAAAAxUlEQVQoz4XS266CMBAF0D3X3sEj5/+/1QJSxERdDw1kdjpNp6Bww2e3QNA7vrkrZnw34w/dhEPEk+xfex2eLWpXiAwsHYMYr6JVkWaBE/ZEY2rMPgIp+fqjgoPS6tymkgg98SatXZQxyFaw0BdXI9MKSiiMU8TZZSpwMOF62BKVjtbWQuixa2KhuG+gjCX7Qq7hmgiGkcimSv+96q+J3KAqXWFUEa6kPBn5uNWU05lYtRzZct3qY3Ipbqu/jQfz7+n/fkEP4F0FVe0N9nMAAAAASUVORK5CYII=)}.zqwT159-guide{display:flex;align-items:center;margin-right:20px}.zqwT159-guide i{width:38px;height:38px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAB71BMVEUAAAAAAAAAAAADAAAAAAAAAAD5rggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5rggAAADnHx8AAAAAAAAAAAD/xgn/vAkxBgb5rAjwqgcAAAAAAACtfQL5rghmQgA8IgAAAAD5rgj/wgkcCwD8IiIAAAAAAADiHh4AAAA3JwL/xAkAAAAAAADRHBwAAADyICAAAAAAAAAAAAAAAAAAAAD/////IiLpHx/nHh7nEBD/vAj//f319vh+fn7pIiLnFRXmCgoHBAG+vr5paWkwMTT2ISHrHh7fHh6nFhb/yQn/xAn/wQlyVAPlAQH+7e3CwsKzs7Nra2tlZWXrPDwpKSnoHBznGhoNDQ3+9vb82tq1xMSusLWmpqaUlJSDg4OZbW1ZX2tWWmM4QFPtTk4sMj87OzvqLy/pKSkQFyYCDSX/JCT3ISHrICDCGhqwFxfsFRWIEhJ+ERF0EBBxDw9kDg5YCwxOCAv/4Qr/3AroCQn/tAj5rQjfpQg6CAjamwfKlge/hwbSlQWndgWddgWSaQSCWwR7WwRMOQMWAwMTAwM7KgIZEgERDAGrdQCWZgDn5+f84+Pg4OD72dnY2Nj719fPz8/GxsauvLySuLiptLT8sbGsrKyrq6v8qKiQp6ebm5t6enrxeXnvXl7sREQVFRX+pgIAAAAANHRSTlMACpYn9Ojg2tS5tHxJRCsbGfv69e3k5OTj4eHd3NfVycS+uLayqZ6FgmxkYVdKNSIeDwYFcBFVSgAAAltJREFUOMud0mVv21AAheFwkyZlZmZuzw20KSRNGy6tuDIzMzPDmBl+6K6TKIsdb9L2frFkPbZ0r47gvxIrFQlSaYJCKf4LKhOFw1O4qOxPqlQOn+Sl/EoYAFYBQl6WBVpbPWj1baBl8akglyJkAPhKiEsH8bBU0F6QL8YuPGlufmUAkOqvgsGkf4bW9p8fWwded4EW7MeUYDKS6r4uNBPSAialHwsEk0lPhoFhojeBKZCryj23MWWCwQDTlOdOyjksVALg7vL84f744OD4/uH88g6AJJTvBGebW1Z7Jc1u3do84ztDMWi3jsNKm81ut9kqDx23oBVzpwF3NxcnR0cnFzdwxx1KkWV1/wqsrvZXLUUclqlWN5jnLUsra+sbG+trK0uWeXODWp3JViVhWm0jfe1bQ6NWG1bCYjkz6ln6VsM0N+d60O9m1TM5vqoiZnnBvLjdUaPRdNTSdLo6p3N70bywHFPhw1QArgc/aWuZv3R2dtRM/Pj+7f3gNQCVD8sG7S2p0WnqHvU8f9nztInQPoOW7TNvKWhv3Ix4+wCaVMgeLh5XuViVl7WAPeFcD6tz6pwTXJbL2do7Mjo52Tn6m/VxNidHvAjoJ6S7qambeOsHRPGQe1kkVGKgnnBqBcQqRHoZFAKhBO1c1g6JUKCAlxXQQ4sAI1sZARG9rAL2yiMwzmbjiAgV+FUIVPuqaqBQwFMedSyVx6fy008NGOvVM0bfOwbDaXq+HwqR7e5Y9xzA9MjQ0Mg04Niz7uzKQrgsLUkWGx0Vl5ickpGRkpwYFxUdK0tKo+xf+gWwsMinzMgxOgAAAABJRU5ErkJggg==)}.zqwT159-guide a{font-size:16px;color:#39f!important;height:20px;line-height:20px;border-bottom:1px solid #39f}.zqwT159-guide a:hover{color:#39f!important}.zqwT159-open{width:69px;background:#B5090E url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMA0LTzques2raxnoJ7OBAG7eHIxcG3o5uTdmphW1NKLiITVM2tHAAAAIRJREFUKM990lsOgzAMRNEBmgIthb7fLTD7XySy4CNIGd/fo0iRbcR9O8huJ20NK2kfcqPsT3Ir7ECNA6170tpAK+Rx1fKFkslgXdNWmNXU+KTGPSWaadx5aKoRuYc4e9iVDqItnPGhn/WYrbpE69SX8PMQb3kJVmMvZQ/W0GXBwfGFdRMX7S4MlF6c5AAAAABJRU5ErkJggg==) no-repeat center;cursor:pointer}.zqwT159-likeDrop::-webkit-scrollbar{width:6px}.zqwT159-likeDrop::-webkit-scrollbar-thumb{background:#D0090F;border-radius:12px}.zqwT159-likeDrop::-webkit-scrollbar-thumb:hover{opacity:.7}.zqwT159-likeDrop{position:absolute;left:0;top:49px;border-top:1px solid #D10D12;border-bottom:4px solid #D10D12;height:469px;width:359px;overflow:auto;display:none}.zqwT159-likeBack{position:absolute;left:348px;top:50px;width:16px;height:469px;background:#F3F3F3;border-bottom:4px solid #D10D12;display:none}.zqwT159-likeDrop ul{width:348px;padding-top:8px!important;background:#fff}.zqwT159-likeDrop li{float:left;margin-left:10px!important;margin-bottom:10px!important}.zqwT159-likeDrop a{display:block;width:100%;height:100%}.zqwT159-like-img img{width:130px;height:130px;margin-right:10px;vertical-align:middle}.zqwT159-like-title{text-indent:18px;color:#000;width:180px;font-size:15px;line-height:24px;height:48px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:2px;position:relative}.zqwT159-like-title i{width:14px;height:14px;position:absolute;top:6px;left:0}.zqwT159-like-title i.tm{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAZlBMVEXnIQkAAAD////uZlVWDAP98e/84+DwdGXqOSQRAQHrRjLfHwiuFwZGCAIkAwD+9vX60cz4x8H2sKf1ppz0nZOtkY+iiIbxgnTsTzzqPyrUHQfPHAe3GQa0GAaCEQN8EAMZAQAYAQC05omIAAAAVklEQVQI15XHRw6AIABE0UFFOvbe739JCSTI1pfMJB81R8QbJIUQS+5JBFPm9QgkY7RibEZUUne/Ux/Kfde6U7vGba8N3nraB4QIU3hGEAK3j8CQ5vgCFsgDJPZ7Mf0AAAAASUVORK5CYII=)}.zqwT159-like-title i.tb{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAMAAACuAq9NAAAArlBMVEX/////kmf/glH/Zyz/2cr/rYz/+/n/qYf/l2//j2P/iVvvURX/5tz/ybP/n3n/jWD/f03/fEr/ZCf//fz+9/T/7eb/6eH/t5v+r5D/eEPvTQ/79fP/8ez/zrv4pIT/pIH/nHb/hlj/ekf/dkD/bjb/XyH/XR3tVhzuVBj/WRfyURPvTA7/3c//0L7/y7j/w6z/w6v/spT4n3z4mXPybDj2Zi3zXibsThH/UQ7qRg3I1tKNAAAAoUlEQVQI1yWORQLDMBADtbFjO8xUbrApM/z/Y01a3eYgaTDNyDOUqY3Rp5AuVjkKzfN8tl0g8B15FMs557YKN1jXxUmmIFVfosBCobDssxkckqAdtNLJBE9i6eswJjD7Fvsc0Vn745u4zlI7NH8YsMSduzwWDo1dsqFTishf2cmw7IIzRmt1mAlv+M3vVcOaNjTMcrSKb59H9ew6y7JeV/EFR34MjlVF2n4AAAAASUVORK5CYII=)}.zqwT159-like-sale{margin:6px 0 0 0}.zqwT159-like-price span{color:#D10D12;font-size:16px;font-weight:700}.zqwT159-like-but{height:28px;font-size:14px;line-height:28px;color:#fff;text-align:center;background:#D10D12;margin-top:7px}#zqwM159{z-index:4000;margin-top:5px;background-color:#fff;width:442px;position:relative}.zqwM159-main{display:flex;height:32px}.zqwM159-logo{border-right:none;width:33px;height:32px}.zqwM159-logo a{display:inline-block;width:33px;height:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAMAAACrZuH4AAAAUVBMVEUAAADQCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/////camz01dbopab34OHZWFrTLC/89fblmJnrsrPuvr/iiovWREfxysrfe3z66+szbv6bAAAACnRSTlMAtGZA5duCfw0MKO7yfgAAAMRJREFUOMvdzdkOhCAMheHZl55SEHCb93/QkSg4KUbv578wNfloT3Pvy/lO283gkcYdcaW9DkESdCSeR+JFR+KSJ5Z++rZCKeFVnPMkYKIeLaUgq7gtg2sRmCOEU2i5iDwYqCrheEoQOafE0sc3Za6vTFl4U3JaQMf1lQA/vxs9TF9fYQObFzcRPmjhADtyKVgEvUM6/Bb1jrSaR//hJQvSIhXRlY2booOhPdEMsE352boyYFgAY8rUwnGeehHpSIm6/xRfc9Mrb+IEniMAAAAASUVORK5CYII=)}.zqwM159-coupon,.zqwM159-h5,.zqwM159-price,.zqwM159-same{flex:1;border:2px solid #D0090F;border-right:none}.zqwM159-close{width:28px;height:28px;border:2px solid #D0090F;border-radius:0 10px 0 0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAPFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxsLSlzAAAAE3RSTlMAdWJBLYhJ15hWN+vcelpPKh8UbhGtlgAAAExJREFUCNc9jAkOgDAIBFdae3jr/v+vSlw6IUACO6gNolecnP49cQayN6DQfCx+S/GQaV9BPGRBcJEHEJ5+e0QeOeWR02jhbFj3Ed1exS8Ci2Vd3Z4AAAAASUVORK5CYII=) center no-repeat;cursor:pointer}.zqwM159-title{height:30px;line-height:28px;cursor:pointer;font-size:14px;color:#333;text-align:center}.zqwM159-box{width:438px;min-height:100px;border:2px solid #D0090F;position:absolute;left:0;top:30px;display:none;background:#fff;z-index:10;border-radius:0 0 10px 10px}.zqwM159-box.zqwM159-box-h5{width:136px;height:168px;left:105px;top:30px;padding-top:8px;border:0;background:0 0}.zqwM159-h5-box{background:#fff;border:1px solid #D0090F;border-radius:10px 10px 10px 10px}.zqwM159-h5-arrow{position:relative}.zqwM159-h5-arrow>div{height:0;position:absolute}.zqwM159-h5-arrow .zqwM159-up1{width:10px;height:0;border-top:1px solid #D0090F;transform:rotate(45deg);left:69px;top:-4px}.zqwM159-h5-arrow .zqwM159-up2{width:10px;height:0;border-top:1px solid #D0090F;transform:rotate(-45deg);left:62px;top:-4px}.zqwM159-h5-arrow .zqwM159-up3{width:11px;height:0;border-top:1px solid #fff;left:65px;top:-1px}.zqwM159-h5-qCode{margin:14px auto 5px auto;width:106px;height:106px}.zqwM159-h5-title{color:#D0090F;text-align:center;margin-bottom:5px}.zqwM159-load{font-size:14px;position:absolute;top:0;left:0;text-align:center;width:100%;height:100px;line-height:100px;z-index:-1}.zqwM159-couponDan{background:#fff;padding:17px 0 0 0}.zqwM159-couponDan-noIcon{width:62px;height:62px;margin:0 auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAgVBMVEUAAADy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLMzMzp6env7+/S0tLg4ODj4+Pc3NzPz8/W1tbr6+vn5+fY2NjX19eiwy+ZAAAAHXRSTlMAA+eV9/InF+zMuKOJfHdmSiwZ2NeYjW5ZVWVJg6Xhz1cAAAIkSURBVEjHtZfncqswEEZlirFxwTX9A4nuvP8DXljCTWRWAazJ+QEeDwd2V138EcvIDS8rAKtL6EbLOerisHGg42wOi2lysHXA4WyDcfnkejDhuaeRsPc+fsPf/5bCco0x1uYqvvoYx3812B+Yxgeb9hVTuTIFcDEdd2DvMYfdnf2CebzoLeZhHt7yZ9nWmMv6R/meMZ9n0RP4mI8fMG0Wj3PfeoH3kO4FgtjiIR3bruwOqxd0zW90V5zuUPHfwemZvHXPtmYqc0bHe6tveJ1EBdn8LgFW37S6w+jkS9VcsuYdsrly+qqJfomhTlSNI3FrdbKHOo5CvHF6igEpo78J8cTpeUIAMunJGf1JiJDTO0rIwtTuRCjE2azLLmKzfhFixegpGJKh7gjh6c+kRZ+6/Eq8AuhO5S/SBN/4Qpg+kvZ9pahQ/y9BAg36uo4ipya792UZEwoaPuWuISl6CVRpTwagylX7JgnouZ/v7M+uw1fag7X8yupTQq98OIy86aZprMoSKIkKZZFWahh/yPc6goYbUYFUttdFJp2GG9H9zff5o0nPgbKPwjTijONd1UBGM1aRoeb11cIw2+QVWjuuQdx4fWOa6xKgVpRAg8xjXj+YZlpFnUSDm2nt5nm7VeZkvcYRgf+A7gd267v17sJ+b2O/syJ2Fvs6+12lWLjT7a5sD8a/s9vPW58m7M8y9icp+3Oc/SmS5xhdwzOdYc/hNToKnn9KJE01xcBC+gAAAABJRU5ErkJggg==)}.zqwM159-couponDan-noTitle{margin-top:10px;text-align:center}.zqwM159-couponDan-img{width:189px;height:83px;margin-left:8px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAABTBAMAAAA4txvxAAAAKlBMVEUAAADQCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ/QCQ+YAAVXXB9nAAAADHRSTlMA8hatpCaTjoBFPgY1hZqJAAAA3klEQVRYw+3ZoQoCQRSF4YugKBYfwLBWkwabQcwb9FGsPp1jEMXjO4nuwqoDU8YbfphTL3zhcNux/lK5uVuTsX4SVmZ7Zefc+r3oEna2zvdvrT9SlIVN8/1L6w8UZWLKT6gaf6Yop3/42jR+7eVf3/xQXr62r++p/fxwrOYH+fnSQ108fMH9rp/ixyn/kw6/f7ovuE/vn+4L7tP7p/uC+/T+6b7gPr1/ui+4T++f7gvu0/un+4L79P6Ln0r5/3T4/dN9of3P/QK4v3ztR7z9K7Xfee+P3vup9/7rvV8/AYVyG6j6XJkNAAAAAElFTkSuQmCC);cursor:pointer}.zqwM159-couponDan-img a{width:100%;height:100%;display:block}.zqwM159-couponDan-amount{color:#FFFC1E;font-weight:700;width:146px;text-align:center;margin-top:15px}.zqwM159-couponDan-amount span{font-size:24px;line-height:36px}.zqwM159-couponDan-amountNeed{color:#fff;width:146px;text-align:center}.zqwM159-couponDan-button{color:#fff;width:20px;font-size:13px;padding:4px 6px 0 0}.zqwM159-couponDan-price{margin:-6px 0 0 36px;line-height:36px;height:36px}.zqwM159-couponDan-price span{font-size:24px;color:#D2171D;font-weight:700}.zqwM159-couponDan-time{margin:-3px 0 0 36px}#zqwM159-couponDan-time{display:inline-block}.zqwM159-couponRec{background:#FFF;margin:13px 0 18px 0}.zqwM159-couponRec-slider{margin:0 0 0 32px;width:364px;height:148px;position:relative}.zqwM159-couponRec-sliderL{position:absolute;width:15px;height:15px;left:-22px;top:62px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAS1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwrhPl3AAAAGXRSTlMAzg8H2saijTgc5tTAt7EkrJt/SkExKygVc9+/FgAAAFBJREFUCNdVx0cOgDAQBMFZr3Mkw/9firigcR1aavzCAqKrjbSml0H7VJdoh3RDe1qvtIcEMBFMongFu0szYMm5BGaavcDU54hJyDsmW/36AuEuAdkfVqV7AAAAAElFTkSuQmCC)}.zqwM159-couponRec-sliderR{position:absolute;width:15px;height:15px;right:-20px;top:62px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAS1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwrhPl3AAAAGXRSTlMAzg8H2saijTgc5tTAt7EkrJt/SkExKygVc9+/FgAAAFFJREFUCNdVj0kOwDAIAwMh+9a9/f9Lq1wi7BOMhLHN1BYMKMpuAYzSGUBy9QPAnQYA6+VG10AXAiI8oKgNW3nhoUtqfaSxDpy9DnxmLFSPNf7e8gHZ7tXNRgAAAABJRU5ErkJggg==)}.zqwM159-couponRec-title{margin:0 0 7px 10px}.zqwM159-couponRec li{float:left;width:75px;height:148px;margin:0 8px 0 8px!important}.zqwM159-couponRec li a{width:100%;height:100%;display:block}.zqwM159-couponRec-img{width:75px;height:75px}.zqwM159-couponRec-img img{width:75px;height:75px}.zqwM159-couponRec-itemT{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:6px;font-size:14px;color:#333}.zqwM159-couponRec-price{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:-4px}.zqwM159-couponRec-price span{font-size:16px;font-weight:700;color:#D0090F}.zqwM159-couponRec-button{height:24px;text-align:center;line-height:26px;color:#fff;background:#D0090F;margin-top:2px}#zqwM159-price-trend{width:440px;height:236px}.zqwM159-price-explain{position:absolute;bottom:16px;text-align:center;width:100%;color:#999;display:none}.zqwM159-price-explain span{color:#d0090f}.zqwM159-price-back{width:100%;height:200px;display:none;color:#949494;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAAilBMVEUAAADx8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLMzMza2trPz8/k5OTq6urg4ODT09Pm5ubv7+/R0dHs7Ozd3d3X19fV1dV36P7oAAAAH3RSTlMA/gOVGPfyKOzo2LijiWZXSeZ8d8uYjW4l5c3Mgy8jEl0OcgAAAgdJREFUSMell+l6qjAQQBMQUFDqXu/tMiEJm8r7v14JtMbgoEDOz/k8H7PELKSHIHajcE6BzsPIjQMyHGe93IDJZrl2Brmz1QIwFqvZa9f1oA/Pfe47Ox+e4e+e5P+9h1fsT33ymw+v8d9w+ROG8YmVfIChHB6Ld2E4blfewRi2nYbBOIzWBd5I2wu07OxhLHvduXcYz/ttbfsTbH+GDGv02GbeJNtrP76Caayahi8m2gvV9jVMZV3by8n2srY3gEEpfYzlV54JHZ87JEDdPLkmeTcqM85YlurAF4lROWOMVR2dpkyR6UhMjohdXJgioViU68iRRIgtr0xRmbZMGjnRkYiESOKCtznKe/3cyOwqdSgkcyTvWm51Qe9kzngq8rMOwT/imZ8tinosjF+ESCvGyrS4k0tRmHP0SWdQSZL9SlTVyS/ylnYpoIvx7Tz7TfivhLKuM68/KHHZN+quWln3RWRMFStUFlrWdRs9Lxv7ctYRWbEWnsMjoTHvdiap7owqvpUFRezIWGtSTSWRyPLkZ0A4mutcpqkwf0dFY5eoHZMAcHTlXI2QAsJXz//bqLzMcHnuWO0tdvua3Z5qtZ/bnSVW55j1GWp/fhPnY7T837G6t1jfmTRbi/ua7V2ROO5wWXdsfPJby/s5zunj9ZxP9u8S+zeR/XvM/i2Iv0MPt3foofcd+gPkT12euCoLtwAAAABJRU5ErkJggg==) no-repeat center 40px;line-height:232px;text-align:center}.zqwM159-box-same{height:286px}.zqwM159-same-toggle{position:absolute;top:14px;left:31px;border:1px solid #D0090F}.zqwM159-same-toggle>div{width:74px;height:24px;line-height:26px;text-align:center;color:#D0090F;background:#fff;cursor:pointer}.zqwM159-same-toggle>div.active{color:#fff;background:#D0090F}.zqwM159-same-back{position:absolute;right:0;top:0;width:16px;height:100%;background:#F3F3F3;border-radius:0 0 10px 0}.zqwM159-same-sameStyle,.zqwM159-same-similar{position:absolute;top:52px;left:31px;width:403px;height:234px;overflow:auto}.zqwM159-same-sameStyle::-webkit-scrollbar,.zqwM159-same-similar::-webkit-scrollbar{width:6px}.zqwM159-same-sameStyle::-webkit-scrollbar-thumb,.zqwM159-same-similar::-webkit-scrollbar-thumb{background:#D0090F;border-radius:12px}.zqwM159-same-sameStyle::-webkit-scrollbar-thumb:hover,.zqwM159-same-similar::-webkit-scrollbar-thumb:hover{opacity:.7}.zqwM159-box-same img{width:62px;height:62px;margin-right:12px}.zqwM159-same-itemT{margin-bottom:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:280px;font-size:14px;height:18px;line-height:16px}.zqwM159-same-itemS{margin-bottom:4px}.zqwM159-same-itemP{height:18px;line-height:16px}.zqwM159-same-itemP span{font-size:14px;color:#D0090F;font-weight:700}.zqwM159-same-itemB{width:76px;height:22px;position:absolute;bottom:0;left:265px;line-height:24px;color:#fff;background:#D0090F;margin-top:42px;text-align:center}.zqwM159-box-same li{position:relative;margin-bottom:8px!important}.zqwM159-box-same li a{display:block;width:100%;height:100%}.zqwM159-ab{border:2px solid #D0090F;border-top:0;border-radius:0 0 10px 10px}.zqwM159-ab-slider{height:32px;margin-left:10px;overflow:hidden}.zqwM159-ab-slider li{height:32px;display:flex;align-items:center}.zqwM159-ab-slider a{font-size:14px;line-height:16px;height:18px;margin-left:10px}.zqwM159-ab-slider i{width:33px;height:18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAASCAMAAADi1EdeAAAAP1BMVEXQCQ/////camzopab11tf34OHTLC/wvsDWREfZWFr89fb66+vrsrPlmJniiovhY2fYMjfVIifSExjfe3zxysoiY2wnAAAAxUlEQVQoz4XS266CMBAF0D3X3sEj5/+/1QJSxERdDw1kdjpNp6Bww2e3QNA7vrkrZnw34w/dhEPEk+xfex2eLWpXiAwsHYMYr6JVkWaBE/ZEY2rMPgIp+fqjgoPS6tymkgg98SatXZQxyFaw0BdXI9MKSiiMU8TZZSpwMOF62BKVjtbWQuixa2KhuG+gjCX7Qq7hmgiGkcimSv+96q+J3KAqXWFUEa6kPBn5uNWU05lYtRzZct3qY3Ipbqu/jQfz7+n/fkEP4F0FVe0N9nMAAAAASUVORK5CYII=)}.zqwM159-ab-title{height:26px;margin-left:53px}.zqwM159-ab-title a{font-size:14px;text-decoration:underline!important;color:#D0090F!important}.zqwD159-box{font-family:"Microsoft Yahei",sans-serif;box-shadow:0 2px 30px rgba(0,0,0,.2);position:fixed;cursor:pointer;top:0;left:0;z-index:2147483647;width:92px;height:92px;transform:translate3d(0,0,0);border-radius:50%;overflow:hidden}.zqwD159-wave{position:relative;width:92px;height:92px;background-color:#F2A611;border-radius:50%}.zqwD159-wave:after,.zqwD159-wave:before{content:"";position:absolute;width:184px;height:184px;top:11px;left:50%;background-color:#ED0334;opacity:.3;border-radius:45%;transform:translate3d(-50%,-70%,0) rotate(0);animation:zqwDrotate 6s linear infinite;z-index:10}.zqwD159-wave:after{border-radius:47%;opacity:1;animation:zqwDrotate 10s linear -5s infinite;z-index:20}.zqwD159-amount,.zqwD159-title{position:absolute;letter-spacing:2px;left:0;width:100%;z-index:30;user-select:none;text-align:center}.zqwD159-amount{font-size:14px;color:#f4d407;top:0;line-height:82px}.zqwD159-title{font-size:14px;font-weight:700;color:#eb2b46;top:62px;height:32px;line-height:32px}@keyframes zqwDrotate{50%{transform:translate3d(-50%,-73%,0) rotate(180deg)}100%{transform:translate3d(-50%,-70%,0) rotate(360deg)}}.zqwMask{position:fixed;text-align:center;font-family:"Microsoft Yahei",serif;padding:40px;box-sizing:border-box;left:50%;top:50%;margin-left:-290px;margin-top:-125px;background:rgba(0,0,0,.8);width:580px;height:230px;z-index:2147483647;color:#fff;display:none}.zqwMask-title{line-height:24px}.zqwMask-but{font-size:20px;width:100px;height:40px;line-height:40px;background:#ff464e;margin:24px auto;padding:5px;border-radius:5px;cursor:pointer}.zqwMask-but:hover{opacity:.85}.zqwMask-input input{vertical-align:-2px}.zqwMask-close{position:absolute;right:2px;top:10px;display:inline-block;width:20px;height:5px;background:red;line-height:0;font-size:0;vertical-align:middle;transform:rotate(45deg);cursor:pointer}.zqwMask-close:after{content:\'/\';cursor:pointer;display:block;width:20px;height:5px;background:red;transform:rotate(-90deg)}';//
            // $("<style></style>").html(cssStyle).appendTo("head");
            var cssStyle1111 = '';
            // $("<style></style>").html(cssStyle1111).appendTo("head");
            var mainUrl,setting,settingNew,maskSign;
            var qqUrl = 'http://shang.qq.com/wpa/qunwpa?idkey=b2a29fab51e05037225e64ac8d5e2944f9c72259f2d2c9e883acef25c97e4ae5';
            var infoGroup = {
                id:"",plat:nowPlat,title:"",price:"",sameNew:{},pid:"",seller:"",cat:"",
                rCat:"",shop:"",pic:"",sale:"",amount:"",amountReq:"",startT:"",endT:""
            };  //淘宝产品的属性集合
            chrome.storage.local.get(null,function (e) {
                var id = e.zqwjsonData.myMmId;
                id = id[Math.floor((Math.random() * id.length))];
                mainUrl = {
                    myMmId:id,
                    website:e.zqwjsonData.website,
                    referC:'',
                    referD:''
                };
                setting = e.zqwSet; //每次重启会重置   临时设置
                settingNew = !$.isEmptyObject(e.zqwSetNew) ? e.zqwSetNew : {zqwTop:'show',zqwMid:'show'}; //设置页面设置的永久性
                maskSign = !$.isEmptyObject(e.zqwMaskSign) ? e.zqwMaskSign : {zqwUland:1,zqwClick:1};
                if ($("body").attr("zqwSign159357") != 1) {
                    start();
                    $("body").attr("zqwSign159357","1");
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
                        <div class="zqwT159-active fr" style="display: none">
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
                    mode:'vertical',captions:true,auto:true,controls:false,autoHover:true,pager:false,
                });
                var middleHtml = `<div id="zqwM159">
                    <div class="zqwM159-main">
                        <div class="zqwM159-logo"><a href="" target="_blank"></a></div>
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
                        <div class="zqwM159-douYin">
                            <div class="zqwM159-title"><span>抖音同款</span></div>
                            <div class="zqwM159-box zqwM159-box-same">
                                <ul></ul>
                            </div>
                        </div>
                        <div class="zqwM159-QQ">
                            <div class="zqwM159-title"><span>领券咨询</span></div>
                        </div>
                        <div class="zqwM159-close">
                        </div>
                    </div>
                </div>`;
                var middleTemplateDom = {
                    ".tm-fcs-panel":0,
                    ".tb-promo-meta":0,
                    ".tb-meta":0,
                    ".summary-price-wrap":0,
                    ".proinfo-focus":1,
                    ".prd-price-1":1,
                    ".price_info":1,
                    ".J_statusBanner":1
                };
                $.each(middleTemplateDom,function (v) {
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
                $(".zqwM159-ab-title a").click(function (e) {
                    e.preventDefault();
                    showMask(0,"https://ai.taobao.com/search/index.htm?key=连衣裙&pid=mm_114987072_44144030_416992187");
                });
                var maskHtml = `<div class="zqwMask">
                    <div class="zqwMask-title">您当前点击领取后将跳转至找券窝购物助手处理的<br>淘宝优惠券领取页面，您是否同意？</div>
                    <div class="zqwMask-but">同意</div>
                    <div class="zqwMask-input">
                        <label for="zqw-input">
                            <input name="" type="checkbox" value="" id="zqw-maskInput" checked="checked">下次不要提示
                        </label>
                    </div>
                    <div class="zqwMask-close"></div>
                </div>`;
                $("body").after(maskHtml);
                // !function () {
                //     var arr = [
                //         {
                //             title:"女装新品上市，低至八折",
                //             url:"https://s.click.taobao.com/t?e=m%3D2%26s%3DKjtYERxDrEIcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMX33xjhNn6hf1aH1Hk3GeOhhE4JgUcxmp93gsobh4%2B9CakSuo6sRMG8EgLbkv24tHSrLl%2FOK5gEfhUr3ztDeup8zuTGl041QAuwp8p4vTdVWJUfDrzjia7vAUxBJ7QMuvG%2BD6WrfU2jH1X8Z5AY4M4AgS3KvKkZpXQYck56cNVlpXe9LydyejthO8RI790SOpRLtUT65CO5HUbBD8YT%2BcXE70tp3ufVCsRGAbom8%2F44QhbGF%2BXDqnl2V%2BRkS3roM%2FX83i5VeXbypXP5t0DiGMFzG7U9h9rop0tCLRXIEfj1LyAGOsUs3rBRYSxAOO%2FItx%2BFUMIn5CtmnA5Lz4gIeCbjAZ0eSV0w%2ByAT48B4cP0IVj3Yjwgr6qJY0S74854sguaJn5AyUbPoV"
                //         },
                //         {
                //             title:"T恤来潮，穿出时尚态度",
                //             url:"https://s.click.taobao.com/t?e=m%3D2%26s%3Dqa6a6j9TJZUcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMYxlOBU7btzV79%2FTFaMDK6RhE4JgUcxmp93gsobh4%2B9CakSuo6sRMG8EgLbkv24tHfBk%2BhpxKYl6G%2FN6Jx5YutMzuTGl041QAuwp8p4vTdVWJUfDrzjia7vAUxBJ7QMuvG%2BD6WrfU2jH1X8Z5AY4M4AgS3KvKkZpXb0Ljby9gvKNX2MxdGkHs5Zr%2BYQIjaKylBLtUT65CO5HUbBD8YT%2BcXE70tp3ufVCsRGAbom8%2F44QhbGF%2BXDqnl2V%2BRkS3roM%2FX83i5VeXbypXP5t0DiGMFz1iZO0Uh79f09r9CmGhj6GyAGOsUs3rBRYSxAOO%2FItx%2BFUMIn5CtmnME53WteESeO%2Fa0GQOHWycwT48B4cP0IViXUBLt7a3FiVktWxgQB2n6Jn5AyUbPoV"
                //         },
                //         {
                //             title:"夏装爆款热卖",
                //             url:"https://s.click.taobao.com/t?e=m%3D2%26s%3DYcfAPW6xNvEcQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMUWOdoCgWrH78sviUM61dt1hE4JgUcxmp93gsobh4%2B9CakSuo6sRMG8EgLbkv24tHfYVeAre9LnFGzPMiJzkmC2R4ypTBJBwtPYWcY%2FzhDkdIfvlvJCwBfuytgoIOaqLNCXDS%2FDHK66tXPx0Xx47xcBlLtYbCZ78fax1U7yipldn9j4%2B0rzyRPWXeCe%2B%2FhaVVy5iv3xEGskSyuKTF%2BHk15VSMYxbuZzEmAvE7AQMT65hQrpJk8hNczL%2BUay6xcDnJTH3dvcTo%2BA2dtX8KqIbk1fRzYG%2FJAYelK09U1kq6ScfidPMU0j4fD0EjLL5opygaL%2Bh5stJcxQCH1tmSmEf%2FlshhQs2DjqgEA%3D%3D"
                //         }
                //     ];
                //     var html = "";
                //     $.each(arr,function (v,k) {
                //         html += `<li>
                //             <i></i>
                //             <a href="${k.url}" target="_blank">${k.title}</a>
                //         </li>`
                //     });
                //     $('.zqwM159-ab-slider ul').html(html);
                //     $('.zqwM159-ab-slider ul').bxSlider({
                //         mode:'vertical',auto:true,controls:false,autoHover:true,pager:false,
                //     }); //
                // }();                //中间轮播广告
                cnzzAppend();
                !function () {
                    var ymove = [];
                    $.each(adaptationArr,function (key,item) {
                        if (locHost == key) {
                            ymove = item.dom;
                            return false
                        }
                    });
                    if (ymove.length) {
                        $(document).scroll(function () {
                            if (($(ymove[0]).css("position") == "fixed") && (setting.zqwTop == 'show') && (settingNew.zqwTop == 'show')) {
                                $.each(ymove,function (key,item) {
                                    $(item).css("transform",'translate(0,50px)');
                                });
                            } else {
                                $.each(ymove,function (key,item) {
                                    $(item).css("transform",'translate(0,0)');
                                });
                            }
                        })
                    }
                    if (setting.zqwTop == 'hidden' || settingNew.zqwTop == 'hidden') {
                        $('.zqwT159-logo-arrow').show();
                        $(".zqwT159-box").css({'transform':'translate(-100%, 0)'});
                        $("body").css({'transition':'all .5s',"padding-top":"0px"});
                    } else {
                        $('.zqwT159-logo-arrow').hide();
                        $(".zqwT159-box").css({'transition':'none','transform':'translate(0,0)'});
                        $("body").css({'transition':'all .5s',"padding-top":"50px"});
                    }
                    if (setting.zqwMid == 'hidden' || settingNew.zqwMid == 'hidden') {
                        $("#zqwM159").parent().css('display','none');
                    }
                }();                //插件顶部中部是否显示
                !function () {
                    $(".zqwT159-open").click(function () {
                        $('.zqwT159-logo-arrow').show();
                        $(".zqwT159-box").css({'transition':'all .5s','transform':`translate(-100%,0)`});
                        $("body").css({'transition':'all .5s',"padding-top":"0px"});
                        setting.zqwTop = 'hidden';
                        chrome.storage.local.set({zqwSet:{zqwTop:'hidden',zqwMid:setting.zqwMid}});
                    });
                    $(".zqwT159-logo-fix,.zqwT159-logo-arrow").click(function () {
                        $(".zqwT159-box").css({'transition':'all .5s','transform':'translate(0,0)'});
                        $("body").css({'transition':'all .5s',"padding-top":"50px"});
                        setting.zqwTop = 'show';
                        chrome.storage.local.set({zqwSet:{zqwTop:'show',zqwMid:setting.zqwMid}});
                    });
                    $(".zqwM159-close").click(function () {
                        $("#zqwM159").fadeOut();
                    });
                    $("#zqwM159").on("mouseenter",".zqwM159-coupon,.zqwM159-h5,.zqwM159-price,.zqwM159-same",function () {
                        $(this).children(".zqwM159-box").show();
                    });
                    $("#zqwM159").on("mouseleave",".zqwM159-coupon,.zqwM159-h5,.zqwM159-price,.zqwM159-same",function () {
                        $(this).children(".zqwM159-box").hide();
                    });
                    $('.zqwM159-same-similar,.zqwM159-same-sameStyle,.zqwT159-like').on("mouseenter",function () {
                        var scrollHeight = $(window).scrollTop();
                        $(window).on('scroll.zqwScroll',function () {
                            $(window).scrollTop(scrollHeight);
                        });
                    });
                    $('.zqwM159-same-similar,.zqwM159-same-sameStyle,.zqwT159-like').on("mouseleave",function () {
                        $(window).off('scroll.zqwScroll');
                    });
                    $('.zqwT159-like').on("mouseenter",function () {
                        $(this).children(".zqwT159-likeDrop").show();
                        $(this).children(".zqwT159-likeBack").show();
                    });
                    $('.zqwT159-like').on("mouseleave",function () {
                        $(this).children(".zqwT159-likeDrop").hide();
                        $(this).children(".zqwT159-likeBack").hide();
                    });
                    $('.zqwM159-same-toggle').on("click","div",function () {
                        $('.zqwM159-same-toggle div').removeClass('active');
                        $(this).addClass('active');
                        if ($(this).data("num") == 1) {
                            $('.zqwM159-same-sameStyle').show();
                            $('.zqwM159-same-similar').hide();
                        } else {
                            $('.zqwM159-same-similar').show();
                            $('.zqwM159-same-sameStyle').hide();
                        }
                    });
                    $(".zqwMask-close").click(function () {
                        $(".zqwMask").fadeOut();
                    });
                    $(".zqwMask-but").click(function () {
                        $(".zqwMask").hide();
                        openWindow($(this).attr("data-href"));
                        if ($("#zqw-maskInput").prop("checked")) {
                            if ($(this).attr("data-type") == 1) {
                                maskSign.zqwUland = 0;
                            } else {
                                maskSign.zqwClick = 0;
                            }
                            chrome.storage.local.set({zqwMaskSign:maskSign});
                        }
                    });
                }();                //事件绑定
                function startPrice(url) {
                    $.ajax({
                        url:"https://zhushou.huihui.cn/productSense",
                        data:{phu:url,type:"canvas"},
                        type:'GET',
                        timeout:5000,
                        dataType:'json',
                        success:function (response) {
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
                                newData[newData.length - 1] = {price:infoGroup.price,time:nowTime};
                            } else {
                                newData[newData.length] = {price:infoGroup.price,time:nowTime};
                            }
                            var isOne = true;
                            if (newData.length == 1) {
                                var obj = newData[0];
                                newData = [obj,obj,obj];
                                isOne = false;
                            }
                            var arrSlice = newData.slice(-7);
                            $.each(arrSlice,function (v,k) {
                                valueList.push(k.price);
                                var res1 = [];
                                res1[0] = k.time.split('-')[1].replace(/^[0]/,'');
                                res1[1] = k.time.split('-')[2].replace(/^[0]/,'');
                                res1 = res1.join('/');
                                dateList.push(res1);
                            });
                            if (isOne == false) {
                                dateList[0] = "";
                                var res2 = [];
                                res2[0] = trueObj.time.split('-')[1].replace(/^[0]/,'');
                                res2[1] = trueObj.time.split('-')[2].replace(/^[0]/,'');
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
                                    $(this).next().fadeIn(1000).css("display","inline-block").addClass("up");
                                });
                            } else if (valueList[valueList.length - 1] < valueList[valueList.length - 2]) {
                                $(".zqwM159-price-title span").fadeOut(function () {
                                    if (window.innerWidth && window.innerWidth < 1200) {
                                        $(this).html("下降").fadeIn(1000);
                                    } else {
                                        $(this).html("价格下降").fadeIn(1000);
                                    }
                                    $(this).next().fadeIn(1000).css("display","inline-block").addClass("down");
                                });
                            }
                            var dom = echarts.init($('#zqwM159-price-trend')[0]);
                            var optionSet = {
                                tooltip:{trigger:'axis'},
                                xAxis:[{
                                    data:dateList,
                                    axisLine:{lineStyle:{color:"#ccc",width:1,}},
                                    axisTick:{show:false},
                                    axisLabel:{textStyle:{color:'#999'},}
                                }],
                                yAxis:[{
                                    scale:"true",
                                    splitNumber:2,
                                    minInterval:1,
                                    axisLine:{show:false},
                                    axisTick:{show:false},
                                    splitLine:{"show":false},
                                    axisLabel:{textStyle:{color:'#999'},}
                                }],
                                grid:[{
                                    bottom:'70',
                                    top:'50',
                                    left:'12%',
                                    right:'8%'
                                }],
                                series:[{
                                    type:'line',
                                    smooth:false,
                                    symbol:"circle",
                                    symbolSize:6,
                                    data:valueList,
                                    label:{normal:{show:true,color:"#000",fontFamily:"Microsoft Yahei",position:"top"}},
                                    itemStyle:{normal:{color:"#d0090f",label:{show:true}}},
                                    lineStyle:{normal:{color:"#d0090f"}},
                                    markPoint:{
                                        symbol:"rect",
                                        symbolSize:[50,10],
                                        symbolOffset:[0,-26],
                                        itemStyle:{normal:{color:"transparent",}},
                                        label:{normal:{textStyle:{color:'#D0090F'}}},
                                        data:[{
                                            type:'max',name:'最大值',
                                            label:{
                                                normal:{show:isOne,formatter:"最高"},
                                            }
                                        },{
                                            type:'min',name:'最小值',
                                            label:{
                                                normal:{show:isOne,formatter:"最低"},
                                            }
                                        }]
                                    },
                                    areaStyle:{
                                        normal:{
                                            color:{
                                                x:0,
                                                y:0,
                                                x2:0,
                                                y2:1,
                                                type:"linear",
                                                global:false,
                                                colorStops:[
                                                    {
                                                        offset:0,
                                                        color:"rgba(208, 9, 15, 0.2)"
                                                    },
                                                    {
                                                        offset:1,
                                                        color:"rgba(208, 9, 15, 0)"
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
                        error:function () {
                            $('#zqwM159-price-trend').hide();
                            $(".zqwM159-price-back").show();
                        }
                    });
                }       //历史价格
                function startParity(url) {
                    var num = Number.POSITIVE_INFINITY;
                    var smlArr = {
                        jd:{list:[],min:num,value:14,url:""},
                        tb:{list:[],min:num,value:13,url:""},
                        tm:{list:[],min:num,value:12,url:""},
                        wph:{list:[],min:num,value:11,url:""},
                        dd:{list:[],min:num,value:10,url:""},
                        sn:{list:[],min:num,value:9,url:""},
                        ymx:{list:[],min:num,value:8,url:""},
                        gm:{list:[],min:num,value:7,url:""},
                        yhd:{list:[],min:num,value:6,url:""},
                        yoho:{list:[],min:num,value:5,url:""},
                        jm:{list:[],min:num,value:4,url:""},
                        kl:{list:[],min:num,value:3,url:""},
                        yx:{list:[],min:num,value:2,url:""},
                        mgj:{list:[],min:num,value:1,url:""},
                        qt:{list:[],min:num,value:0,url:""},
                    };//
                    function makeObj(a,k) {
                        smlArr[a].list.push(k);
                        if (k.cutprice * 1 < smlArr[a].min) {
                            smlArr[a].min = k.cutprice * 1;
                            smlArr[a].url = k.url;
                        }
                    }   //
                    function getSameNew(url) {
                        chrome.extension.sendMessage({
                            name:"universal",url:"http://pricecomparison.browser.qq.com/get_comparison_info",type:"get",dataType:"json",data:{url:url}
                        },function (e) {
                            if (e && e.product && e.product.length) {
                                var data = e.product;
                                $.each(data,function (v,k) {
                                    var name = k.sitename;
                                    switch (name) {
                                        case (name.match("京东") || {}).input:
                                            makeObj("jd",k);
                                            break;
                                        case (name.match("淘宝") || {}).input:
                                            makeObj("tb",k);
                                            break;
                                        case (name.match("天猫") || {}).input:
                                            makeObj("tm",k);
                                            break;
                                        case (name.match("唯品会") || {}).input:
                                            makeObj("wph",k);
                                            break;
                                        case (name.match("当当") || {}).input:
                                            makeObj("dd",k);
                                            break;
                                        case (name.match("苏宁") || {}).input:
                                            makeObj("sn",k);
                                            break;
                                        case (name.match("亚马逊") || {}).input:
                                            makeObj("ymx",k);
                                            break;
                                        case (name.match("国美") || {}).input:
                                            makeObj("gm",k);
                                            break;
                                        case (name.match("号店") || {}).input:
                                            makeObj("yhd",k);
                                            break;
                                        case (name.match("YOHO") || {}).input:
                                            makeObj("yoho",k);
                                            break;
                                        case (name.match("聚美") || {}).input:
                                            makeObj("jm",k);
                                            break;
                                        case (name.match("考拉") || {}).input:
                                            makeObj("kl",k);
                                            break;
                                        case (name.match("严选") || {}).input:
                                            makeObj("yx",k);
                                            break;
                                        case (name.match("蘑菇") || {}).input:
                                            makeObj("mgj",k);
                                            break;
                                        default:
                                            makeObj("qt",k);
                                    }
                                });
                                appendParity();
                            }
                        });
                    }   //新的获取不同商家同款数据
                    function appendParity() {
                        var obj = {
                            "tm":"天猫","tb":"淘宝","jd":"京东","wph":"唯品会","dd":"当当","sn":"苏宁","ymx":"亚马逊",
                            "gm":"国美","yhd":"1号店","yoho":"YOHO","jm":"聚美","kl":"考拉","yx":"严选","mgj":"蘑菇街","qt":"其他"
                        };
                        infoGroup.sameNew = smlArr;
                        var html = "";
                        $.each(infoGroup.sameNew,function (v,k) {
                            if (k.url) {
                                var name = "";
                                $.each(obj,function (m,n) {
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
                                "width":$(".zqwT159-box").width() - 835
                            });
                            var m = totalWithArr.length;
                            if (m < 2) {
                                return;
                            }
                            var totalWith = 0;
                            $.each(totalWithArr,function (v,k) {
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
                        $(window).on("resize",function () {
                            initBiWidth();
                        });
                    }   //
                    getSameNew(url);
                }      //顶部全网比价
                function startLike(cat) {
                    var data = "";
                    var html = "";
                    $.ajax({
                        url:`https://uland.taobao.com/cp/coupon_list?pid=${mainUrl.myMmId}&category=${cat}&queryCount=500`,
                        success:function (e) {
                            if (e && e.result && e.result.couponList && e.result.couponList.length) {
                                data = e.result.couponList;
                                var type = "";
                                $.each(data,function (k,v) {
                                    type = (v.item.tmall == "0") ? "tb" : "tm";
                                    html += `<li>
                                        <a href="#" class="zqwClear" data-href="${v.item.shareUrl}">
                                            <div class="zqwT159-like-img fl"><img src="${v.item.picUrl}_130x130"></div>
                                            <div class="fl">
                                                <div class="zqwT159-like-title">${v.item.title}<i class="${type}"></i></div>
                                                <div class="zqwT159-like-sale">月销量 : ${v.item.biz30Day}</div>
                                                <div class="zqwT159-like-price">券后 : ¥
                                                    <span>${numSub(v.item.discountPrice,v.amount)}</span>&nbsp;
                                                    <s>¥ ${v.item.discountPrice}</s>
                                                </div>
                                                <div class="zqwT159-like-but">点击领${v.amount}元券</div>
                                            </div>
                                        </a>
                                    </li>`;
                                });
                                $(".zqwT159-likeDrop ul").html(html);
                                $(".zqwT159-likeDrop").on("click","a",function (e) {
                                    e.preventDefault();
                                    showMask(1,"https:" + $(this).data("href"));
                                })
                            }
                        }
                    })
                }        //值得买
                function makeDrag(amount,urls) {
                    $("#zqwT159").after(`<div class="zqwD159-box" data-zqwClick="MID-悬浮球领券点击">
                        <div class="zqwD159-wave"></div>
                        <div class="zqwD159-amount">¥${amount}元券</div>
                        <div class="zqwD159-title">领取</div>
                    </div>`);
                    var top = $('.zqwM159-close').offset().top - $(window).scrollTop();
                    var left = $('.zqwM159-close').offset().left;
                    $(".zqwD159-box").css("transform",`translate3d(${left}px, ${top}px, 0px)`);
                    var swi = 1,offsetX,offsetY,clientX,clientY;
                    $(".zqwD159-box").on({
                        mousedown:function (e) {
                            setTimeout(function () {
                                swi = 0;
                            },200);
                            var el = $(this);
                            offsetX = e.offsetX;
                            offsetY = e.offsetY;
                            $(document).on('mousemove.zqwDrag',function (e) {
                                clientX = e.clientX;
                                clientY = e.clientY;
                                clientX -= offsetX;
                                clientY -= offsetY;
                                el.css('transform',`translate3d(${clientX}px, ${clientY}px, 0px)`);
                            });
                        },
                        mouseup:function () {
                            setTimeout(function () {
                                swi = 1;
                            },200);
                            $(document).off('mousemove.zqwDrag');
                        }
                    });
                    $('.zqwD159-box').click(function () {
                        if (swi) {
                            showMask(1,urls);
                        }
                    })
                }//浏览器悬浮球
                function showMask(t,url) {
                    if (t) {
                        $(".zqwMask-title").html(`您当前点击领取后将跳转至找券窝购物助手处理的<br>淘宝优惠券领取页面，您是否同意？`);
                        if (maskSign.zqwUland) {
                            $(".zqwMask").show();
                            $(".zqwMask-but").attr("data-href",url);
                            $(".zqwMask-but").attr("data-type","1");
                        } else {
                            openWindow(url);
                        }
                    } else {
                        $(".zqwMask-title").html(`您当前点击领取后将跳转至找券窝购物助手处理的<br>淘宝商品详情页面，您是否同意？`);
                        if (maskSign.zqwClick) {
                            $(".zqwMask").show();
                            $(".zqwMask-but").attr("data-href",url);
                            $(".zqwMask-but").attr("data-type","2");
                        } else {
                            openWindow(url);
                        }
                    }
                }      //中转页显示
                $.extend($.fn,{
                    fnTimeCountDown:function (d) {
                        this.each(function () {
                            var $this = $(this);
                            var o = {
                                hm:$this.find(".hm"),
                                sec:$this.find(".sec"),
                                mini:$this.find(".mini"),
                                hour:$this.find(".hour"),
                                day:$this.find(".day"),
                                month:$this.find(".month"),
                                year:$this.find(".year")
                            };
                            var f = {
                                haomiao:function (n) {
                                    if (n < 10) return "00" + n.toString();
                                    if (n < 100) return "0" + n.toString();
                                    return n.toString();
                                },
                                zero:function (n) {
                                    var _n = parseInt(n,10); //解析字符串,返回整数
                                    if (_n > 0) {
                                        if (_n <= 9) {
                                            _n = "0" + _n
                                        }
                                        return String(_n);
                                    } else {
                                        return "00";
                                    }
                                },
                                dv:function () {
                                    var _d = $this.data("end") || d;
                                    var now = new Date(),
                                        endDate = new Date(_d);
                                    var dur = (endDate - now.getTime()) / 1000,
                                        mss = endDate - now.getTime(),
                                        pms = {hm:"000",sec:"00",mini:"00",hour:"00",day:"00",month:"00",year:"0"};
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
                                ui:function () {
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
                                    setTimeout(f.ui,1);
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
                    function obtain(my,name,e) {
                        return infoGroup[my] = infoGroup[my] ? infoGroup[my] : (e[name] ? e[name] : "");
                    }//
                    function count() {
                        num += 1;
                        if (num == 3) {
                            // console.log(infoGroup);
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
                        url:"https://s.taobao.com/search?app=i2i&nid=" + itemId,
                        success:function (e) {
                            var r = e.match(/g_page_config\s=\s(.*)/);
                            if (r && r[1] && r[1].match(/({.*});/) && r[1].match(/({.*});/)[1] && JSON.parse(r[1].match(/({.*});/)[1])) {
                                var obj = JSON.parse(r[1].match(/({.*});/)[1]);
                                if (obj && obj.mods && obj.mods.singleauction && obj.mods.singleauction.data) {
                                    obj = obj.mods.singleauction.data;
                                    obtain("pid","pid",obj);
                                    obtain("price","view_price",obj);
                                    obtain("cat","category",obj);
                                    obtain("title","title",obj);
                                    obtain("seller","user_id",obj);
                                }
                            }
                        },complete:function () {
                            count();
                        }
                    }); //拿商品数据
                    $.ajax({
                        url:"https://pub.alimama.com/items/search.json?q=https://item.taobao.com/item.htm?id=" + itemId,
                        success:function (e) {
                            if (e && e.data && e.data.pageList && e.data.pageList[0]) {
                                var data = e.data.pageList[0];
                                obtain("price","zkPrice",data);
                                obtain("cat","leafCatId",data);
                                obtain("rCat","rootCatId",data);
                                obtain("title","title",data);
                                obtain("seller","sellerId",data);
                                infoGroup.startT = data.couponEffectiveStartTime + ' 00:00:00';
                                infoGroup.endT = data.couponEffectiveEndTime + ' 23:59:59';
                                infoGroup.amountReq = data.couponInfo;
                            }
                        },
                        complete:function () {
                            count();
                        }
                    }); //拿商品数据
                    $.ajax({
                        url:"https://acs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",
                        data:{data:`{"itemNumId":"${itemId}"}`},
                        success:function (e) {
                            if (e && e.data && e.data.item) {
                                var data = e.data.item;
                                obtain("title","title",data);
                                obtain("cat","categoryId",data);
                                obtain("rCat","rootCategoryId",data);
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
                                obtain("seller","userId",seller);
                            }
                        },
                        complete:function () {
                            count();
                        }
                    }); //拿商品数据
                    function startCoupon() {
                        var page = 1;
                        var getDanNum = 0;//
                        getDan();//
                        function getDan() {
                            chrome.extension.sendMessage({
                                name:"getCook",url:"https://www.taobao.com/",key:"_m_h5_tk"
                            },function (d) {
                                if (d && d[0] && d[0].value) {
                                    var time = Date.now();
                                    var title = infoGroup.title;
                                    var s = `{"q":"${title}","pid":"${mainUrl.myMmId}","page":${page},"lunaUrlParam":"{'algo_sort':'mixcoupon'}","useItemCouponPage":"1"}`;
                                    $.ajax({
                                        url:"https://acs.m.taobao.com/h5/mtop.aitaobao.item.search/7.0/",type:"get",dataType:"json",
                                        data:{
                                            v:"7.0",api:"mtop.aitaobao.item.search",appKey:"12574478",t:time,
                                            sign:md5(d[0].value.split("_")[0] + "&" + time + "&12574478&" + s),data:s
                                        },
                                        success:function (r) {
                                            if (r && r.ret && r.ret[0] && r.ret[0].match("调用成功")) {
                                                if (r && r.data && r.data.items && r.data.items.length) {
                                                    var data = r.data.items;
                                                    var hasSwi = 1;
                                                    $.each(data,function (v,k) {
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
                                    },2000);
                                }
                            });
                        }   //查找单品优惠券
                        function noDan(k) {
                            var oli1 = `<div class="zqwM159-couponDan-noIcon"></div><div class="zqwM159-couponDan-noTitle">对不起 , 暂无可用优惠券</div>`;
                            $(".zqwM159-couponDan").html(oli1);
                            k ? makeQcode("https://s.click.taobao.com/t?e=" + getParam(k.clickUrl,"e")) : makeQcode(`https://h5.m.taobao.com/awp/core/detail.htm?id=${infoGroup.id}`);
                            $(".zqwM159-h5 .zqwM159-title span").fadeOut(function () {
                                $(this).html(`扫码下单`).fadeIn();
                            });
                            $('.zqwM159-h5-title').html(`打开淘宝APP<br>扫码下单更方便`);
                            getRec();
                        }//无优惠券渲染
                        function hasDan(e) {
                            var data = e;
                            makeQcode("https://uland.taobao.com/coupon/edetail?e=" + getParam(data.clickUrl,"e"));
                            var amount = infoGroup.amount;
                            var amountReq = infoGroup.amountReq;
                            var newPrice = numSub(infoGroup.price,amount);
                            var urls = "https://uland.taobao.com/coupon/edetail?e=" + getParam(data.clickUrl,"e");
                            makeDrag(amount,urls);
                            var oli = `<div class="zqwM159-couponDan-img fl" data-zqwClick="MID-里面领券点击">
                                <a>
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
                            $(".zqwM159-couponDan-img").click(function () {
                                showMask(1,urls)
                            });
                            $(".zqwM159-coupon .zqwM159-title span").fadeOut(function () {
                                $(this).html(`领${amount}元劵`).css({
                                    "color":"#ff0033",
                                    "fontWeight":"bold"
                                }).fadeIn();
                            });
                            $(".zqwM159-h5 .zqwM159-title span").fadeOut(function () {
                                $(this).html(`扫码领券`).fadeIn();
                            });
                            try {
                                $("#zqwM159-couponDan-time").fnTimeCountDown(infoGroup.endT);
                            } catch (e) {
                            }
                        }//有优惠券渲染
                        function getRec() {
                            $.getJSON("https://uland.taobao.com/cp/coupon_recommend",{
                                recommendType:0,count:10,onlySimilar:0,pid:mainUrl.myMmId,itemId:itemId
                            },function (e) {
                                if (e && e.result && e.result.couponList) {
                                    var html = '';
                                    $.each(e.result.couponList,function (v,k) {
                                        var data = k.item;
                                        var newPrice = numSub(data.discountPrice,k.amount);
                                        var urls = "https://s.click.taobao.com/t?e=" + getParam(data.clickUrl,"e");
                                        html += `<li>
                                            <a href="#" target="_blank" data-href="${urls}">
                                                <div class="zqwM159-couponRec-img">
                                                    <img src="${data.picUrl}_80x80">
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
                                        prevBtn:".zqwM159-couponRec-sliderL",
                                        nextBtn:".zqwM159-couponRec-sliderR",
                                        listCont:"#zqwM159-couponRec-slider",
                                        scrollWhere:"next",delayTime:2500,speed:300,amount:1,showNum:4,autoPlay:true
                                    });//
                                    $("#zqwM159-couponRec-slider").on("click","a",function (e) {
                                        e.preventDefault();
                                        showMask(0,$(this).data("href"));
                                    })
                                } else {
                                }
                            });
                        }   //查找相关优惠券
                    }//优惠券
                    function startSame() {
                        if (infoGroup.pid) {
                            getSameByPid(infoGroup.pid,infoGroup.id);
                        } else {
                            $('.zqwM159-same-toggle div').eq(0).hide();
                            $('.zqwM159-same-toggle div').eq(1).addClass("active");
                            $('.zqwM159-same-sameStyle').hide();
                            $('.zqwM159-same-similar').show();
                        }
                        setTimeout(function () {
                            getSameByTitle(infoGroup.id);
                        },1500);//
                        function getSameByPid(pid,id) {
                            var url = "https://s.taobao.com/search?type=samestyle&app=i2i&uniqpid=" + pid + "&nid=" + id + "&sort=sale-desc";
                            chrome.extension.sendMessage({name:"clearCook",url:url},function () {
                                $.ajax({
                                    type:"get",url:url,
                                    success:function (e) {
                                        var r = e.match(/<script>\s+g_page_config\s=\s(.*)/);
                                        if (r && r[1] && r[1].match(/({.*});/) && r[1].match(/({.*});/)[1] && JSON.parse(r[1].match(/({.*});/)[1])) {
                                            var data = JSON.parse(r[1].match(/({.*});/)[1]);
                                            if (data.mods && data.mods.recitem && data.mods.recitem.data && data.mods.recitem.data.items) {
                                                data = data.mods.recitem.data.items;
                                                appendSame(data,0);
                                            }
                                        }
                                    }
                                });
                            });
                        }   //根据pid请求同款商品
                        function getSameByTitle(id) {
                            var url = `https://s.taobao.com/search?app=i2i&nid=${id}&type=similar&sort=sale-desc`;
                            chrome.extension.sendMessage({name:"clearCook",url:url},function () {
                                $.ajax({
                                    type:"get",url:url,
                                    success:function (e) {
                                        var r = e.match(/<script>\s+g_page_config\s=\s(.*)/);
                                        if (r && r[1] && r[1].match(/({.*});/) && r[1].match(/({.*});/)[1] && JSON.parse(r[1].match(/({.*});/)[1])) {
                                            var data = JSON.parse(r[1].match(/({.*});/)[1]);
                                            if (data.mods && data.mods.recitem && data.mods.recitem.data && data.mods.recitem.data.items) {
                                                data = data.mods.recitem.data.items;
                                                appendSame(data,1);
                                            }
                                        }
                                    }
                                });
                            });
                        }   //根据similar请求相似商品
                        function appendSame(data,type) {
                            var domStyle = ".zqwM159-same-sameStyle ul";
                            if (type) {
                                domStyle = ".zqwM159-same-similar ul";
                            }
                            var html = "";
                            $.each(data,function (k,v) {
                                html += `<li>
                                    <a href="${v.detail_url}" class="zqwClear" target="_blank">
                                        <div class="fl">
                                            <img src="${v.pic_url}_80x80">
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
                        new QRCode($('.zqwM159-h5-qCode')[0],{
                            text:e,
                            width:106,
                            height:106,
                            colorDark:"#000000",
                            colorLight:"#ffffff",
                            correctLevel:QRCode.CorrectLevel.L
                        });
                    } //领券二维码
                }();    //淘宝天猫页面
                !function () {
                    if (infoGroup.plat != 'jd') {
                        return;
                    }
                    var locaHref = location.href;
                    $('.zqwM159-box-h5').css("left",154);
                    var itemId = locaHref.match(/item.jd.com\/(\d+).html/) ? locaHref.match(/item.jd.com\/(\d+).html/)[1] : 0;
                    $.ajax({
                        url:"https://p.3.cn/prices/mgets?skuIds=J_" + itemId,
                        type:'GET',
                        dataType:'json',
                        success:function (e) {
                            infoGroup.price = e[0].p;
                            startPrice(locaHref);
                            startCoupon();
                        }
                    });//
                    function startCoupon() {
                        var couUrl = "";
                        chrome.extension.sendMessage({
                            name:"universal",url:"http://www.jingfenbang.com/?searchType=1&searchKey=" + itemId,type:"get",dataType:"html"
                        },function (e) {
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
                                    name:"universal",url:"http://www.haojingke.com/index.php/index/unionurl",type:"post",dataType:"json",
                                    data:{"unionId":1000405866,"positionId":1045184007,"couponurl":url,"materialIds":itemId}
                                },function (d) {
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
                            var newPrice = numSub(infoGroup.price,amount);
                            var urls = mainUrl.referC + data;
                            makeQcode(data);
                            makeDrag(amount,urls);
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
                                    "color":"#ff0033",
                                    "fontWeight":"bold"
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
                    $("#zqwM159").css("z-index",3);
                    $(".zqwM159-same").hide();//
                    function makeQcode(e) {
                        new QRCode($('.zqwM159-h5-qCode')[0],{
                            text:e,
                            width:106,
                            height:106,
                            colorDark:"#000000",
                            colorLight:"#ffffff",
                            correctLevel:QRCode.CorrectLevel.L
                        });
                    } //领券二维码
                }();    //京东页面
            }
        }
    }();
    //列表页
    !function () {
        var listAdaptationArr = {
            's.taobao.com':['.J_PicBox','mainsrp-itemlist','淘宝'],
            'list.tmall.com':['.productImg-wrap','J_ItemList','天猫'],
            'search.jd.com':['.gl-i-wrap','J_goodsList','京东'],
            'search.suning.com':['.res-img','filter-results','苏宁'],
            'list.suning.com':['.res-img','filter-results','苏宁']
        };
        $.each(listAdaptationArr,function (v,k) {
            if (locHost == v) {
                chrome.storage.local.get(null,function (e) {
                    setting = e.zqwListSet;
                    if (setting == "show") {
                        list(v,k);
                    }
                });
                return false;
            }
        });//
        function list(v,k) {
            // var cssStyle = '';
            var cssStyle = '.zqwClear{zoom:1}.zqwClear:after{visibility:hidden;clear:both;display:block;content:"";height:0}.zqwClear:before{content:" ";display:table}.zqwList-item .fl{float:left}.zqwList-item .fr{float:right}.zqwList-coupon{position:absolute;top:0;left:0;font-family:"Microsoft Yahei",serif;color:#fff;font-size:16px;background:#000}.zqwList-item{font-family:"Microsoft Yahei",serif;position:absolute;right:0;bottom:50%;margin-bottom:-24px;width:54px;height:42px}.zqwList-item.left{left:0}.zqwList-box{width:54px;height:42px;color:#fff;font-size:12px;text-align:center;position:absolute;background:#000;opacity:0;cursor:pointer}.zqwList-box.active{opacity:.5;background:#FD2550}.zqwList-icon{margin:3px auto 0 auto;width:18px;height:18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMA0fzj1Abyw7BKRfTctqWcl29mLisY7JCNioBdJhoVAjDv64MAAACESURBVBjTfY7nDsNACIMJl5vZq3v4/Z+ylEg9pZHiH7b1IRC0UQfRFlm/Q9T+UN8smgnGr+gKmFnS1oi2/5IRdYBLRDe0pErs5vcZPD6q00vJ5DhKDAyDu5LFYNASKzQSRUEeHa2aLk9xgEKwUspSqaJc9kjP/KFseZaN+RjlRX1CmtoHD5gKrq48aAkAAAAASUVORK5CYII=)}.zqwList-dropBox{width:397px;padding:0 0 0 11px;position:absolute;left:calc(100% - 1px);top:-66px;height:297px;z-index:99999999}.zqwList-item.left .zqwList-dropBox{left:auto;right:calc(100% - 1px);padding:0 11px 0 0}.zqwList-drop-arrow{position:absolute;top:75px;left:1px;width:15px;height:29px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAdBAMAAACH5ivpAAAAJFBMVEUAAAD////////h4eHm5uba2tr////////////5+fnh4eHg4OAed86SAAAACHRSTlMAIiDcmf6hXuCx7NUAAABiSURBVBjTNc9BDYAwEERREppyRQIyCJxJkAAOkICElYAEZHb6O53Tyz/tDm3TYryzQxinkS7j+BrSHQIBEASCQAAKoAZAAHsY4w90xmaQgBIgASVAAiRA8jtrR65gT0cGrACTMDNec4Eb3gAAAABJRU5ErkJggg==)}.zqwList-item.left .zqwList-drop-arrow{left:auto;transform:rotate(180deg);right:1px}.zqwList-drop{width:395px;height:295px;opacity:1;border:1px solid #ccc;border-radius:10px}.zqwList-drop-header{background:#D0090F;height:58px;border-radius:10px 10px 0 0;overflow:hidden}.zqwList-drop-logo{width:100px;height:58px;margin-left:12px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAMAAADT9S0cAAAAyVBMVEUAAACiDBH////////////////////////25ub////////////////+/Pz89/j//////v7////////////68fL////////9+fn68vL//////f3////////////////////////+/Pz+/Pz//v7////////////////////////89vf//////v7+/f3//////////////////////////////////v7//////////////////////////////f3///////////////9qJ5NKAAAAQnRSTlMAA/30Jff5YARO1+3KRw/DNyIcawLq4gwH5ikXiHHy79kuHxHPQse/khQKoD4zp31TPIFZS62OeHS2ZprTsTrdupYwPklOAAAFAUlEQVRIx52WaYOiMAyG2aLlRjxAQQUZUVEOWe9bJ///R22hwKDrns+HaUhrXhqSdpicpjDpFnanO+4xv4Cfd5k/0AuTiH8708Zis7DHq61Ahv6J6xcu95SMM6P/GUy+nFzrTaj+DILuH0VaU9iTQWPNW+Easo0aGVInHpa/sY2w3P28ltO8TWHrlk9q5/ciSPpeuA5ItrJYeyRppTI2w0JDedhsAQJc2nqs/aUIn4l0eJ7vzmA25impyIShL2pdANXfgAEeaUrVhCMEyDyQ4TtPRZZVkfFwMEPmeUA42yDvBhTiZOPBhO4U42sibJJTIhRwyUYQ1g3kJGS+JgIiAKR/zukXm8/A75GJ+GzRyvPg1yyzJTvwyNr+4aGU1eOvQhJkYuB2GmKqE2zAkq5L/i0Mw8kUrgoZNptJmIr2gwZldsFgzBpVplwWcmnGrRY3Y+FaFKQggbFd962HwWWV3yfs8UgjxvjIOo6DATsESXJ0l/aNmjFeIvvUVavQjuKbCrcT68AeSb4pt/iOEXtZCVbv9cN3ZjR3KKceMRVaMsgt5g2tzxEGgLsf1kpcLjCJz9wKvdfqsjTCDpvrSMuodhW/ROyJeUe/AZLoIUcUR1+II9ucGRgGnRcRSmJjWleU2prL2JtgHLgXaH5Oq40rA5aeqCO0ipbbCfNWxJUQVxHhWPg15QkyqSNfeYIbwXXRmffei8xF8Pm08KJFVijeSBRFHQCTkWKmJW9cRPE+WBTlVGetl5PyDEc6+05kEcOUvGA3MPbpe6o1QuIBCqxazmZbB/xIiNXvlCL1desJ6/hGRFX8kJ5EQzAjpsNJsMsX9RQZ4aBV+dTtEULeSf3yuCYY8hMehqD3LHJfPhw406ChQ87aUIQpTQDvDnSw/f7TxWKdJbC3Gl8mZynBC9jTmAqdPU67YzSkn/GjAXE0A13I5qzVBcG9TfW/6CYN4t73y2dheBgSfAlthymHtls559XJ2UBgN4ZFd/I+mBdUP/DFC2B5bTVrLzS1gQHmJN9Iv/aR0Vrr9UOL2s3mOJf5WMc2AtDb8y9dQQeoD8Z5cU7jK2vb7CtSg9tc/fzG3MvFgjr5aXmdXGm/f3/YgAwP0erKCQ1Au3mRB1cd2uRyQC93BgIzmffpPgYYcOEl4HKJke1UM7C3sg7VEu4oUwS42o/NjbA56HDcCBXOdbjm5WUZcFynvs3aA4J8oisDDAGf5r/d/ug89YnaNoAlEcdMFX4FTvLkmW9Bznf7XUIT6ls6IIuAY5dm8Qoyn/36uRk71tkGY7hEdrkVGsd4le0sUUVES0NpMQvy7XbEyFN4+mZU5Lnjx5yH0HTTqTVgWqtEdGc0vb8RWUQrA9CMqLV8B4y2+iuRKLbB+Ux7kLPRoFfVYPe9n0SmXyJR7fMOoO+yMAuSccf/eBbpBuB9pIbikJbIOlLdgr4uDjNBBnagMs+oAcgVkWgEZjypnEPI743jXERdc6fAgc9Fprba1fJ2cS9woRdj5OsgrbqV8DeFsGPpV8rTxS93WmWv1va+U/w6bPnsiQWCHDHfUhYLMlI4HcVq+rRDSOSIVcC4jfS/DoycU+64SVhjujxdkvtaiqhjJCXEJB0/m04bvpvPVUL1lt6aTy3lErjVAOQL6SbBI0cddWiiETHULmHGnm567R6NyRO+vUO16NhzFy8TNyXlo3SMJ4r67RU+pEuIyP/B/MuqH611wXeBzfq8AAAAAElFTkSuQmCC) center no-repeat}.zqwList-drop-title{color:#fff;font-size:18px;margin:21px 0 0 10px}.zqwList-drop-set{height:58px;width:60px;background:#B5090E url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAVFBMVEUAAAD4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl/4Wl+tAPQCAAAAG3RSTlMA9+cYgakqouKHFN4sJZ6NLhDww4bStJt4ajd6AsBcAAAAmklEQVQoz32QbQ+DIBCDNzc3RAWne+///596ScmF1NgPHKF5Gq6nA+Vw08f02Y4rzmK1aGx0Yt3RXGwK1SKYQWqsiIdNoRIJt4YS1TtRvsGoWBmkjGBUTU3ZCNUXwGKE6gX8d42EGWHQd9s8/spe2lXHvaQrtqGEd+gGFyQ1eRTbLRbGKsr1NIpElA6NepOoKWzn3O+UmBe/i1aEoQiVnNgEsAAAAABJRU5ErkJggg==) center no-repeat;cursor:pointer}.zqwList-drop-back{height:237px;background:#fff;border-radius:0 0 10px 10px}.zqwList-price-trend{width:350px;height:180px;margin:28px auto;background:#fff;border-radius:0 0 10px 10px;position:relative;overflow:hidden}.zqwList-ErrorContent{position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-84px;width:168px;height:86px}.zqwList-ErrorContent p{font-size:12px;color:#999;line-height:18px;text-align:center}.zqwList-ErrorImg{padding-top:10px;width:106px;height:40px;margin:0 auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAoCAMAAAAhb5/CAAAAq1BMVEUAAADQ0NDPz8/Ozs7m5ubV1dXNzc3MzMzNzc3Ozs7Ozs7o6OjMzMzOzs7Pz8/n5+fOzs7Nzc3Nzc3Nzc3MzMzOzs7MzMzt7e3c3NzS0tLOzs7Pz8/Q0NDMzMzR0dHe3t7+/v7Pz8/Nzc3Nzc3Nzc3Nzc3Ozs7////////MzMz19fX6+vrZ2dnp6enU1NTR0dH4+Pjk5OTv7+/9/f3T09Pj4+Pg4ODx8fHe3t4NSebVAAAAKHRSTlMA9e5XBRC+goDrN/vTIxv+nnVyKOKqjP79lGBLQDz56+Xls7KJadskjx/jKAAAAbZJREFUWMPN12tvmzAUgOFjc0sIoeR+79bbdo4hsUeXJv//l83NkBx1dKotoH0/IFnCesSR+WD4YOmM09tG0EYpH+T4piN7ghaaDfCfSDGvQSJ+CuA1ntdQQrFNY9KaLfsx6AjrKCHYtiHJZwpLtv4PJXgM103msaN1d0JUPKinZKmpE5+AKaaMJm7UjinE7z/rqfNR6Mr+0Lw/zyCbg1vj21/aWq3rqFweS20t7lIzP8rIdYLD20JbOSOss86SdMsfVxOc28zPH40Cs1h9+/1qyT2+H4FbASUP5Ju199c67JunxvcAyQhM2Y2xGqYSgIdratg3VrOUT/cJBWBjETgWjMc+QL1lS622jxsrXFsFqYtlSW1ZElgfy3PxfLHsqMekvwPLCF8qy4raBLvUnqosWVpQThFWlpCqfaqyFofnDig8HpR+LLugcCFPiEXZBYVC7rEsOqFQFfJGii4onXgp8tYp01ehvMgDi3o9ZyqkaBpaSGHYc6S8qQ8+eV1QUXR5dDFAj/RXTb1OjkU4jSj8mifwE/8rnr8v5bzlC6ppMGv12m3KBzyFj0WmamUy79h02VCz6Q+Hgc1uN15SewAAAABJRU5ErkJggg==) center center no-repeat}';
            $("<style></style>").html(cssStyle).appendTo("head");
            document.onreadystatechange = loadingChange; //
            function loadingChange() {
                if (document.readyState == "complete") {
                    function get(url,price,that) {
                        $.ajax({
                            url:"https://zhushou.huihui.cn/productSense",
                            data:{phu:url,type:"canvas"},
                            type:'GET',
                            timeout:5000,
                            dataType:'json',
                            success:function (response) {
                                var data = response.priceHistoryData.list;
                                var time = new Date();
                                var nowTime = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
                                var valueList = [],dateList = [],newData = [],t = 0;
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
                                    newData[newData.length - 1] = {price:price * 1,time:nowTime};
                                } else {
                                    newData[newData.length] = {price:price * 1,time:nowTime};
                                }
                                var isOne = true;
                                if (newData.length == 1) {
                                    var obj = newData[0];
                                    newData = [obj,obj,obj];
                                    isOne = false;
                                }
                                var arrSlice = newData.slice(-7);
                                $.each(arrSlice,function (v,k) {
                                    valueList.push(k.price * 1);
                                    var res1 = [];
                                    res1[0] = k.time.split('-')[1].replace(/^[0]/,'');
                                    res1[1] = k.time.split('-')[2].replace(/^[0]/,'');
                                    res1 = res1.join('/');
                                    dateList.push(res1);
                                });
                                if (isOne == false) {
                                    dateList[0] = "";
                                    var res2 = [];
                                    res2[0] = trueObj.time.split('-')[1].replace(/^[0]/,'');
                                    res2[1] = trueObj.time.split('-')[2].replace(/^[0]/,'');
                                    res2 = res2.join('/');
                                    dateList[1] = res2;
                                }
                                var minAndMax = {min:[],max:[]};
                                var min = Math.min.apply(null,valueList);
                                var max = Math.max.apply(null,valueList);
                                if (min != max) {
                                    $.each(valueList,function (v,k) {
                                        if (k == min) {
                                            minAndMax.min = [dateList[v],k];
                                            return false;
                                        }
                                    });
                                    $.each(valueList,function (v,k) {
                                        if (k == max) {
                                            minAndMax.max = [dateList[v],k];
                                            return false;
                                        }
                                    });
                                }
                                var optionSet = {
                                    "grid":{"x":14,"x2":12,"y":24,"y2":36,"borderWidth":0,"width":324,"height":120},
                                    "animation":true,
                                    "backgroundColor":"#fff",
                                    "tooltip":{
                                        "show":true,"name":"","alwaysShowContent":false,"trigger":"axis","padding":10,
                                        "textStyle":{"fontWeight":"normal","color":"#fff","align":"left","fontSize":12},
                                        "axisPointer":{"type":"line","lineStyle":{"color":"#cdcdcd","type":"dashed"}}
                                    },
                                    "xAxis":[{
                                        "data":dateList,
                                        "axisLine":{"lineStyle":{"color":"#ccc","width":1,}},
                                        "axisTick":{"show":false},
                                        "axisLabel":{"textStyle":{"color":'#999899'},}
                                    }],
                                    "yAxis":[{
                                        "type":"value","splitNumber":2,"scale":true,"minInterval":1,
                                        "axisLabel":{"show":false},
                                        "axisTick":{"show":false},
                                        "axisLine":{"show":false},
                                        "splitLine":{"show":false}
                                    }],
                                    "series":[
                                        {
                                            type:"line",data:valueList,symbol:"circle",smooth:false,showAllSymbol:true,
                                            label:{
                                                normal:{
                                                    show:!0,textStyle:{color:"#FD2550",fontWeight:"bold",textAlign:"center"},
                                                    formatter:function (e) {
                                                        return e.name == minAndMax.min[0] && e.value == minAndMax.min[1] ? (minAndMax.min[1] == minAndMax.max[1] ? "" : "最低") + e.value : e.name == minAndMax.max[0] && e.value == minAndMax.max[1] ? (minAndMax.min[1] == minAndMax.max[1] ? "" : "最高") + e.value : e.value
                                                    }
                                                },
                                                emphasis:{show:!0,textStyle:{color:"#d0090f",fontWeight:"bold",textAlign:"center"}}
                                            },
                                            lineStyle:{normal:{color:"#d0090f",type:"solid",width:1}},
                                            itemStyle:{normal:{color:"#d0090f"},emphasis:{color:"#d0090f"}},
                                            areaStyle:{
                                                normal:{
                                                    color:{
                                                        x:0,
                                                        y:0,
                                                        x2:0,
                                                        y2:1,
                                                        type:"linear",
                                                        global:false,
                                                        colorStops:[
                                                            {
                                                                offset:0,
                                                                color:"rgba(208, 9, 15, 0.2)"
                                                            },
                                                            {
                                                                offset:1,
                                                                color:"rgba(208, 9, 15, 0)"
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
                            error:function () {
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
                    $.each($(k[0]),function () {
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
                            $(".zqwList-item").css("marginBottom",65)
                        } else if (v == 'search.suning.com' || v == 'list.suning.com') {
                            $(".zqwList-item").css({"top":106})
                        }
                    });
                    var time;
                    $(document).on("mouseenter",k[0],function () {
                        $(this).find(".zqwList-box").css("opacity",0.3);
                    });
                    $(document).on("mouseleave",k[0],function () {
                        $(this).find(".zqwList-box").css("opacity",0);
                    });
                    if (v == 's.taobao.com' || v == 'list.tmall.com') {
                        $(document).on("mouseenter",k[0],function () {
                            var that = $(this);
                            var swi = 1;
                            if (!that.data("zqwsign") && swi) {
                                swi = 0;
                                var id = (v == 's.taobao.com') ? that.find(".pic-link").data("nid") : that.closest(".product").data("id");
                                var dom = (v == 's.taobao.com') ? that.siblings(".ctx-box").find(".J_ClickStat").text() : that.siblings(".productTitle").children().attr("title");
                                $.ajax({
                                    url:"https://pub.alimama.com/items/search.json?q=https://item.taobao.com/item.htm?id=" + id,
                                    success:function (e) {
                                        if (e && e.data && e.data.pageList && e.data.pageList[0] && e.data.pageList[0].couponAmount) {
                                            var amount = e.data.pageList[0].couponAmount;
                                            chrome.extension.sendMessage({
                                                name:"getCook",url:"https://www.taobao.com/",key:"_m_h5_tk"
                                            },function (d) {
                                                if (d && d[0] && d[0].value) {
                                                    var time = Date.now();
                                                    var s = `{"q":"${dom}","pid":"mm_114987072_44144030_416992187","page":1,"lunaUrlParam": "{'algo_sort':'mixcoupon','rank':'rank_profile:FirstRankScorer_atbh5','PS':'tk_item_score_atbh5','appBucket':'a'}","useItemCouponPage":"1"}`;
                                                    $.ajax({
                                                        url:"https://acs.m.taobao.com/h5/mtop.aitaobao.item.search/7.0/",type:"get",dataType:"json",
                                                        data:{
                                                            v:"7.0",api:"mtop.aitaobao.item.search",appKey:"12574478",t:time,
                                                            sign:md5(d[0].value.split("_")[0] + "&" + time + "&12574478&" + s),data:s
                                                        },
                                                        success:function (r) {
                                                            if (r && r.ret && r.ret[0] && r.ret[0].match("调用成功")) {
                                                                if (r && r.data && r.data.items && r.data.items.length) {
                                                                    var data = r.data.items;
                                                                    var hasSwi = 1;
                                                                    $.each(data,function (v,k) {
                                                                        if (k.nid == id) {
                                                                            var url = `https://uland.taobao.com/coupon/edetail?e=${getParam("https:" + k.clickUrl,"e")}`;
                                                                            that.append(`<a href="${url}" target="_blank" rel="noreferrer">
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
                                                    },2000);
                                                }
                                            });
                                        }
                                    },
                                    complete:function () {
                                        swi = 1;
                                        that.data("zqwsign",1);
                                    }
                                });
                            }
                        });
                        $(document).on("mouseleave",k[0],function () {
                        });
                    }
                    $(document).on("mouseenter",".zqwList-item",function () {
                        var that = $(this);
                        var url,price;
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
                        $(this).children(".zqwList-box").css({"opacity":1,"background":"#FD2550"});
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
                                $(that).on("click",".zqwList-drop-set",function () {
                                    chrome.storage.local.set({zqwListSet:"hide"});
                                    $(".zqwList-item").remove();
                                });
                                get(url,price,that);
                                that.data("type",1);
                            } else {
                                that.children(".zqwList-dropBox").css("top","-66px");
                            }
                        },500);
                    });
                    $(document).on("mouseleave",".zqwList-item",function () {
                        var that = $(this);
                        $(this).children(".zqwList-box").css({"opacity":0.3,"background":"#000"});
                        clearTimeout(time);
                        that.children(".zqwList-dropBox").css("top","-9999px");
                    });
                }
            }
        }
    }();
}();