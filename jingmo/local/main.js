!function () {
    function cnzzAppend() {
        if (!$('html').html().match(`1273435271`)) {
            $("<script></script>").html(`var _czc = _czc || [];_czc.push(["_setAccount", "1273435333"]);console.log(_czc);`).appendTo($("head"));
            $.getScript("https://s13.cnzz.com/z_stat.php?id=1273435271&web_id=1273435271",function () {
                $(document).on("click","[data-wtqClick]",function () {
                    var name = $(this).attr("data-wtqClick");
                    var myScript = document.createElement("script");
                    myScript.appendChild(document.createTextNode(`console.log(_czc);_czc.push(["_trackEvent", "${name}", "点击"]);`));
                    document.head.appendChild(myScript);
                });
                var clock;
                $(document).on("mouseenter","[data-wtqMove]",function () {
                    var that = $(this);
                    clock = setTimeout(function () {
                        var name = that.attr("data-wtqMove");
                        var myScript = document.createElement("script");
                        myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${name}", "移入"]);`));
                        document.head.appendChild(myScript);
                    },500);
                });
                $(document).on("mouseleave","[data-wtqMove]",function () {
                    clearInterval(clock);
                });
            });
        }
    }                //
    function cnzzEvent(n,e) {
        var myScript = document.createElement("script");
        myScript.appendChild(document.createTextNode(`_czc.push(["_trackEvent", "${n}", "${e}"]);`));
        document.head.appendChild(myScript);
    }              //CNZZ统计
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }           // 地址取参
    function getParam(url,name) {
        url = url.split("?")[1];
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = url.substr(0).match(reg);
        if (r != null) return r[2];
        return null;
    }          // 指定url取参
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
    }                      // md5
    function unicodeToUtf8(data) {
        str = unescape(data.replace(/\\u/g,"%u"));
        return str;
    }         //转义
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
    }                 //去掉浮点数的相减方法
    function openWindow(e) {
        window.open('javascript:window.name;','<script>location.replace("' + e + '")<\/script>');
    }               //
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
            'item.jd.hk':{'name':"jd",'dom':['#detail .tab-main']}
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
            // var cssStyle = '';
            var cssStyle = '#wtqB159,#wtqM159,#wtqT159{font-family:"Microsoft Yahei",serif;font-size:12px}.wtqClear{zoom:1}.wtqClear:after{visibility:hidden;clear:both;display:block;content:"";height:0}.wtqClear:before{content:" ";display:table}#wtqB159 i,#wtqM159 i,#wtqT159 i{display:inline-block}#wtqM159 button,#wtqM159 input,#wtqT159 button,#wtqT159 input{outline:0}#wtqB159 a,#wtqM159 a,#wtqT159 a{color:#666}#wtqB159 a:hover,#wtqM159 a:hover,#wtqT159 a:hover{color:#666;text-decoration:none}#wtqB159 li,#wtqB159 ul,#wtqM159 li,#wtqM159 ul,#wtqT159 li,#wtqT159 ul{margin:0;padding:0;list-style:none}#wtqB159 .fl,#wtqM159 .fl,#wtqT159 .fl{float:left}#wtqB159 .fr,#wtqM159 .fr,#wtqT159 .fr{float:right}#wtqM159{z-index:4000;margin-top:5px;background-color:#fff;width:423px;position:relative}.wtqM159-main{display:flex;height:36px}.wtqM159-logo{border-right:none;width:36px;height:36px}.wtqM159-logo a{display:inline-block;width:36px;height:36px;background:#FC3F47 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAXVBMVEX8P0f////+1Nb+paj+z9H9aW///f7/8/P/6On+29z+o6f9n6P9jpL9d338SlL/9/f+tbj8Vl3/4eL+w8X9lpv9hIn8UFj/7e7+ysz+vcD+q67+qq39Ymj8XmX8UlnhdBNgAAAAl0lEQVQ4y+WSyw6EIAxFbxFQQPHtvOf/P3MyYTqSoGHlyrMg4eYkbdPirDQVbVM1rJS0R8kK7XOQoqbvqyeVKC0HBWpNukbBQcuKEpETG0Lhz211XqvRIaIP2eI9AO+X8O0R8Q6ZdW7G7JzdUH7ZYMwDnTFDUug58ohM0u6FOJLS4i6lSIamiBEyt4ArxCFrzJ9U/jDPyge6qAWAJJfE7QAAAABJRU5ErkJggg==) center no-repeat}.wtqM159-price,.wtqM159-qrCode{flex:1;border:2px solid #fa1542;border-left:none}.wtqM159-title{height:32px;line-height:32px;cursor:pointer;font-size:14px;color:#333;text-align:center}.wtqM159-box{width:419px;min-height:98px;border:2px solid #fa1542;position:absolute;left:0;top:34px;display:none;background:#fff;z-index:10}.wtqM159-price-title i{width:0;height:0;vertical-align:-9px;margin-left:3px}.wtqM159-price-title i.down{width:27px;height:27px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAV1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNJt775AAAAHHRSTlMAlpAHA7Gl9os3JPHp5N6+oHhHQvLPnIRvay8cxiCx1QAAAHBJREFUKM/dz1cOgCAQBFCa2HvXuf85RUSJBjwA87XJy2Z2SRApGuE1CvmHETfjPrIPJjdmFUDdmJVxJ6Hrt+XBGTU/qSdC6noGu9miTouhV5OYIPllFpGn9raXkbXSZJDC/1XstI6p5IB7Rych4ecAikQF1uEGVREAAAAASUVORK5CYII=)}.wtqM159-price-title i.up{width:27px;height:27px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAP1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM12c1RAAAAFHRSTlMABqWQmIiyFNNbvpRB9OvhjH9kGBIeiJcAAABjSURBVCjP5c/dDoAgCIZhDMtS++f+r7XxrSmurqDeI7Zng0FfzAtKb5aZWZ1soUxukEXaXVOlno05L7PiTWTMddKdIxAEq+QoKIJglkjxiCDKW0tAkL3lyx9xJ1ulZ2uin3YB72IETf3e/+gAAAAASUVORK5CYII=)}#wtqM159-price-trend{width:419px;height:236px}.wtqM159-price-explain{position:absolute;bottom:16px;text-align:center;width:100%;color:#999;display:none}.wtqM159-price-back{width:100%;height:200px;display:none;color:#949494;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAAilBMVEUAAADx8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLMzMza2trPz8/k5OTq6urg4ODT09Pm5ubv7+/R0dHs7Ozd3d3X19fV1dV36P7oAAAAH3RSTlMA/gOVGPfyKOzo2LijiWZXSeZ8d8uYjW4l5c3Mgy8jEl0OcgAAAgdJREFUSMell+l6qjAQQBMQUFDqXu/tMiEJm8r7v14JtMbgoEDOz/k8H7PELKSHIHajcE6BzsPIjQMyHGe93IDJZrl2Brmz1QIwFqvZa9f1oA/Pfe47Ox+e4e+e5P+9h1fsT33ymw+v8d9w+ROG8YmVfIChHB6Ld2E4blfewRi2nYbBOIzWBd5I2wu07OxhLHvduXcYz/ttbfsTbH+GDGv02GbeJNtrP76Caayahi8m2gvV9jVMZV3by8n2srY3gEEpfYzlV54JHZ87JEDdPLkmeTcqM85YlurAF4lROWOMVR2dpkyR6UhMjohdXJgioViU68iRRIgtr0xRmbZMGjnRkYiESOKCtznKe/3cyOwqdSgkcyTvWm51Qe9kzngq8rMOwT/imZ8tinosjF+ESCvGyrS4k0tRmHP0SWdQSZL9SlTVyS/ylnYpoIvx7Tz7TfivhLKuM68/KHHZN+quWln3RWRMFStUFlrWdRs9Lxv7ctYRWbEWnsMjoTHvdiap7owqvpUFRezIWGtSTSWRyPLkZ0A4mutcpqkwf0dFY5eoHZMAcHTlXI2QAsJXz//bqLzMcHnuWO0tdvua3Z5qtZ/bnSVW55j1GWp/fhPnY7T837G6t1jfmTRbi/ua7V2ROO5wWXdsfPJby/s5zunj9ZxP9u8S+zeR/XvM/i2Iv0MPt3foofcd+gPkT12euCoLtwAAAABJRU5ErkJggg==) no-repeat center 40px;line-height:232px;text-align:center}.wtqM159-qrCode-img{width:75px;height:75px;margin-left:40px;margin-top:12px;background:#000}.wtqM159-qrCode-title{margin-left:16px;font-size:14px;color:#333;margin-top:30px}.wtqM159-qrCode-title span{color:#fa1542}.wtqM159-close{width:32px;height:32px;border:2px solid #fa1542;border-left:none;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAATlBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlpQKrPAAAAGnRSTlMA4Q7Je51uIBXqhgjXjlpMNMGmlVNBKLawYknDI8oAAAC0SURBVCjPvY/JEsMgDEOxWcIaEhKy/P+PFtMJhVNPrQ8aDY+RLfbnQWtOzTCZoEewe+UESLAoYB/IuRSZ9qlovgYi5maVGIiMzc6yB9G7okekNOwWCVjLk0tr4NKVDxyeQMDKA6UqshoeUpVrOm+t3nwnuqZtLe3wTwPgR7lA8o0TXbxXnw6AFJXfV+e+0NU1DayfbW72FgPhCy1QpDkN5AaFiVuwaCGyYbQ0wTE8jUX2i3kB9FQFvEFo2KsAAAAASUVORK5CYII=) center no-repeat;cursor:pointer}.wtqM159-box.wtqM159-box-close{right:0;width:115px;height:32px;color:#999;left:inherit;min-height:0;line-height:32px;font-size:14px;text-align:center}.wtqM159-ab{overflow:hidden;position:relative}.wtqM159-coupon{padding:16px 0 18px 0;border:2px solid #fa1542;transform:translate(0,-100px);transition:transform .5s;border-top:0}.wtqM159-coupon.active{transform:translate(0,0)}.wtqM159-coupon-img{width:227px;height:64px;margin-left:10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAABBCAMAAAAUhOObAAAAflBMVEUAAAD/+Ej/+Ej/+Ej/+Ej/+Ej/+Ej/+Ej/+Ej/+Ej/+Ej/+EjuISr8PkbvJC3zKzTwJi/6O0T4N0D0LjbyKTH5OUL1MDj3NT32Mzz2MTrrLjb/UwD/sir/1zr/hxf/8EX/exH/YQT/3z7/nSH/6EH/xTP/bgr/zjb/pyb/khxWjzr1AAAAC3RSTlMA1KFsJxkL7uZaiNKS6xIAAAKRSURBVGje7ZvZdtowEIbZQtJON7o3Mxqtluz3f8EKuST4QGOVXI3czxg43H1nkPx7GFbvrvHhCp8mfD3j44QvZ3x/4tfIzxM/Tnw+49sTh2feX+XxEaqR4HhYgOMy6nho3nExdTzc6PiwvZPgWFlHxw4u2KxWKwmOletRobr4bL0S4njkcJvjGymO83VkfIbhjL0Ux/n16FSGkFRmsih3UhzHffWm7+pGiuPITY6wk+FYjhcdqeDRU2G664hwnK8jToEJ92sJjnXrkVGB1lKzXNV69EgA0WihjjU5p0Nfno2W6ViRcwjN6VWLdJyv44Bo+AhilpToOL8eE/c0ojwmmLDZSnD8t/vHqeJ638j18e/cC8ly5bjRcSvE8TV1vJPiOK7Hth1r6hhIwRXeSnGsyTmEBHwllO+FOFbkHG0tpo7I4zC9uXrYyXCsqGOPwdgAkNBdtOY2Ehwr+jlo+mAjc0RmdgKz3Oy+qo0lVKpDTxlUAh1n66htguhLQyc/JDpW5ByVi5hUkutYqOkhk2DHupzjbUIVimOT+2qITltSqBLq7Njk9VGb2Fvt2DH2ml2bOSdYpJLoBjSh1byasIcwoAdlrWv0vgN6m9B2+Y0zVqBj1b6qA3R6fOeW1QdYQj9nCX25Rvurcn/veLmOPRdIFbRAx/nrYxeZKDLjEZGZvCLnMJXzqKdEOlbkHD7WkcBm1Q4lflczs46ROQuyB+hjo/MATOXsDUD0Tc51ZD+vlCHoMARMTc7n/Gl2EGik3upG56yYxtNb61udlyuOnoJCDG3OPeouRkbE6DpE1+j8KpqBurLnsLGu4TlkJkKjg0HSzc6Ts8Eh22ljdLP/C+hUgoLELPf//rEJx3I07vjqOv4G8b/CLXb0+JkAAAAASUVORK5CYII=);cursor:pointer}.wtqM159-coupon-img a{width:100%;height:100%;display:block;font-size:14px}.wtqM159-coupon-amount{color:#fff;width:185px;text-align:center;margin-top:3px}.wtqM159-coupon-amount span{font-weight:700;font-size:28px;line-height:36px;margin:0 6px 0 6px}.wtqM159-coupon-amountNeed{color:#fff;width:185px;text-align:center;height:16px;line-height:14px}.wtqM159-coupon-price{font-size:14px;color:#fa1643;margin:-15px 0 0 12px;line-height:36px;height:36px}.wtqM159-coupon-price span{font-size:22px;font-weight:700}.wtqM159-coupon-time{margin:0 0 0 12px;font-size:14px;color:#999}#wtqM159-coupon-time{display:inline-block}.wtqM159-coupon-qq{position:absolute;right:0;bottom:6px}.wtqM159-coupon-noBack{width:100px;height:57px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA5CAMAAAD3LH5PAAAAOVBMVEX////MzMz09fb9/f3Q0ND29vbe3t7V1dXp6enY2Nju7u7a2trg4ODm5ubw8PDS0tL4+Pjr6+vy8vKWdc+9AAABd0lEQVRYw+2Yy27rMAwFOSb1lp3m/v/HXqB1oCJVGxSggKboLLLQZmKK4pEtIqGwgrLJIBiLeGdJRBV/NJLkxkGRNRQOOenssoadOKoVZA1h1MtQWYNicgKyCviT/ElOfoBk+5JnkjzDnnSVFdQ2JAaXTfyJgI2J3GBb4cgq7+hcVHzJ2P0fb/SHHfutFtYL9WOG4SvJtFnm/xNPGnWW+bs4Ms/0K1EcUZg2Q18v6WTx5MLLbHFz7a7IVQbjquom0aMnIPVD746OW3Pp1bhheWi00MSJkKDsQUXDXiCFczkb6UV82IwydqOW2wQDmpcjGFFloBELb5IqTmgifmizpL7xmyl67y3kIXG4nKhNilIx9ZRU2nwge5Yrkqc1jJ6SRPjspQ6Whogo5imB1x8G54r7k9i9RLGn25NPu8vhPf7xOXH5IvH4xHf29bProKyfwpKIujpPJOBKqZNkFNkKrrT8mvG5MXLdF82T24o/WmMyLMWq8uv4D2vqC85YFYL+AAAAAElFTkSuQmCC);margin:0 auto 0 auto}.wtqM159-coupon-noTitle{color:#999;font-size:14px;margin-top:10px;text-align:center;height:21px;line-height:21px}.wtqM159-coupon-noQQ{position:absolute;right:0;bottom:37px}.wtqM159-coupon-noQQ,.wtqM159-coupon-qq{cursor:pointer;width:100px;height:29px;line-height:27px;color:#fff;font-size:16px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAdCAMAAABrETlvAAAAUVBMVEUAAADeKCvfKSzeKSzeKCveKSzeKCveKSzeKCveKCzeKizeKCzeKi3eKCveKCzlPT/gLC7kOjveKSzmQEPiNTbhMTPgLzDoREjnQkXjNjjhMzX1QFmQAAAAD3RSTlMAG/HZ0KyTMQngr69tbAjtS88NAAAAmElEQVRIx93WSw6DMAxFUYeUQEsp4bXlt/+FgoJFZgyQbAnfDVhHysd05N6lL+LRwP25Zflxc6rPdbkvN+2Ne8RVL2zFC0O6Po84HfIJSEVBiXsAEJa4JyAtqdkhKgmAuKQC5CUN5CUOCpIWCpJSQ+I1JIWGBGYk3szpamHlxlMDK68wBcDIz5j+eBvbClEdeMjtN0jhXXgF93jV7p6IPfsAAAAASUVORK5CYII=)}.wtqM159-coupon-noQQ i,.wtqM159-coupon-qq i{margin-left:8px;vertical-align:-5px;width:20px;height:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAB1L14Uvr1KcPxJKAbD0wI9zOubOhaGE4Jx7lyod7cFwXf0vxagAAALpJREFUGNN9kEmSwjAQBFuLZckL2MY7DAz5/0dihAPBhTzokFFVES35QTZYsF5L4nhhJz+8YwZ7a0TWuoX/PWcYlERUCa9sjk9LJVY9y7iQpGrjwEAlH9T0sT1LNoroSWTS0nDepOMeQC8wH6BRsEnLIn2+qqIL965QAbPJE9PXbXRxufiUnr/tDYYlueesxL5Ov+BiUOTMcVeqNpzixRo36/FaVWXvwEcnLYlLtndyYwtfVtfbqFf5wQORQQ6GAA+25wAAAABJRU5ErkJggg==)}';
            $("<style></style>").html(cssStyle).appendTo("head");
            var cssStyle1111 = '';
            $("<style></style>").html(cssStyle1111).appendTo("head");
            var mainUrl,setting,settingNew;
            var qqUrl = 'http://shang.qq.com/wpa/qunwpa?idkey=b2a29fab51e05037225e64ac8d5e2944f9c72259f2d2c9e883acef25c97e4ae5';
            var infoGroup = {
                id:"",plat:nowPlat,title:"",price:"",sameNew:{},pid:"",seller:"",cat:"",
                rCat:"",shop:"",pic:"",sale:"",amount:"",amountReq:"",startT:"",endT:""
            };  //淘宝产品的属性集合
            chrome.storage.local.get(null,function (e) {
                var id = e.wtqjsonData.myMmId;
                id = id[Math.floor((Math.random() * id.length))];
                mainUrl = {
                    myMmId:id,
                    website:e.wtqjsonData.website,
                    referC:'',
                    referD:''
                };
                setting = e.wtqSet; //每次重启会重置临时设置
                settingNew = !$.isEmptyObject(e.wtqSetNew) ? e.wtqSetNew : {wtqTop:'show',wtqMid:'show'}; //设置页面设置的永久性
                if ($("body").attr("wtqSign159357") != 1) {
                    start();
                    $("body").attr("wtqSign159357","1");
                }
            }); //
            function start() {
                var middleHtml = `<div id="wtqM159">
                    <div class="wtqM159-main">
                        <div class="wtqM159-logo"><a href="" target="_blank"></a></div>
                        <div class="wtqM159-qrCode">
                            <div class="wtqM159-title"><span>扫码领券</span></div>
                            <div class="wtqM159-box wtqM159-box-qrCode">
                            </div>
                        </div>
                        <div class="wtqM159-price">
                            <div class="wtqM159-title wtqM159-price-title"><span>价格趋势</span><i></i></div>
                            <div class="wtqM159-box wtqM159-box-price">
                                <div id="wtqM159-price-trend"></div>
                                <div class="wtqM159-price-explain">价格趋势数据仅供参考</div>
                                <div class="wtqM159-price-back">对不起，该商品的价格趋势正在收录中</div>
                            </div>
                        </div>
                        <div class="wtqM159-close">
                            <div class="wtqM159-box wtqM159-box-close">本次关闭</div>
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
                cnzzAppend();
                !function () {
                    if (setting.wtqMid == 'hidden' || settingNew.wtqMid == 'hidden') {
                        $("#wtqM159").css('display','none');
                    }
                }();                //插件顶部中部是否显示
                !function () {
                    $(".wtqM159-box-close").click(function () {
                        $("#wtqM159").fadeOut();
                    });
                    $("#wtqM159").on("mouseenter",".wtqM159-qrCode,.wtqM159-price,.wtqM159-close",function () {
                        $(this).children(".wtqM159-box").show();
                    });
                    $("#wtqM159").on("mouseleave",".wtqM159-qrCode,.wtqM159-price,.wtqM159-close",function () {
                        $(this).children(".wtqM159-box").hide();
                    });
                    $("#wtqM159").on("click",".wtqM159-coupon-noQQ,.wtqM159-coupon-qq",function () {
                        openWindow(qqUrl);
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
                                $(".wtqM159-price-title span").fadeOut(function () {
                                    $(this).html("价格上涨").fadeIn(1000);
                                    $(this).next().addClass("up").fadeIn(1000);
                                });
                            } else if (valueList[valueList.length - 1] < valueList[valueList.length - 2]) {
                                $(".wtqM159-price-title span").fadeOut(function () {
                                    $(this).html("价格下降").fadeIn(1000);
                                    $(this).next().addClass("down").fadeIn(1000);
                                });
                            } else {
                                $(".wtqM159-price-title span").fadeOut(function () {
                                    $(this).html("价格平稳").fadeIn(1000);
                                });
                            }
                            var dom = echarts.init($('#wtqM159-price-trend')[0]);
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
                                    itemStyle:{normal:{color:"#fa1542",label:{show:true}}},
                                    lineStyle:{normal:{color:"#fa1542"}},
                                    markPoint:{
                                        symbol:"rect",
                                        symbolSize:[50,10],
                                        symbolOffset:[0,-26],
                                        itemStyle:{normal:{color:"transparent",}},
                                        label:{normal:{textStyle:{color:'#fa1542'}}},
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
                            $(".wtqM159-price-explain").show();
                        },
                        error:function () {
                            $('#wtqM159-price-trend').hide();
                            $(".wtqM159-price-back").show();
                        }
                    });
                }       //历史价格
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
                            startCoupon();
                            var url = "https://item.taobao.com/item.htm?id=" + itemId;
                            if (infoGroup.plat == "tm") {
                                url = "https://detail.tmall.com/item.htm?id=" + itemId;
                            }
                            startPrice(url);
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
                                    $("body").append(`<iframe src="//h5.m.taobao.com/" id="wtq-H5-Toke" style="display:none"></iframe>`);
                                    setTimeout(function () {
                                        $("#wtq-H5-Toke").remove();
                                        getDan()
                                    },2000);
                                }
                            });
                        }   //查找单品优惠券
                        function noDan(e) {
                            //外面领券
                            var oli = `<div class="wtqM159-ab">
                                <div class="wtqM159-coupon active wtqClear">
                                    <div class="wtqM159-coupon-noBack"></div>
                                    <div class="wtqM159-coupon-noTitle">对不起 , 该商品暂无可用优惠券</div>
                                    <div class="wtqM159-coupon-noQQ">
                                        <i></i><span>领券咨询</span>
                                    </div>
                                </div>
                            </div>`;
                            $("#wtqM159").append(oli);
                            $(".wtqM159-coupon").css("padding","20px 0 24px 0");
                            //里面扫码
                            var html = `<div class="wtqM159-qrCode-img fl"></div>
                            <div class="wtqM159-qrCode-title fl">手机淘宝APP<br>扫码下单</div>`;
                            $(".wtqM159-box-qrCode").html(html);
                            var urls = e ? ("https://s.click.taobao.com/t?e=" + getParam(e.clickUrl,"e")) : (`https://h5.m.taobao.com/awp/core/detail.htm?id=${infoGroup.id}`);
                            makeQcode(urls);
                            $(".wtqM159-qrCode .wtqM159-title span").fadeOut(function () {
                                $(this).html(`扫码下单`).css({
                                    "color":"#ff0033"
                                }).fadeIn();
                            });
                        }//无优惠券渲染
                        function hasDan(e) {
                            //外面领券
                            var amount = infoGroup.amount;
                            var amountReq = infoGroup.amountReq;
                            var newPrice = numSub(infoGroup.price,amount);
                            var urls = "https://uland.taobao.com/coupon/edetail?e=" + getParam(e.clickUrl,"e");
                            var oli = `<div class="wtqM159-ab">
                                <div class="wtqM159-coupon wtqClear">
                                    <div class="wtqM159-coupon-img fl" data-wtqClick="MID-领券点击">
                                        <a class="wtqClear">
                                            <div class="wtqM159-coupon-amount">¥<span>${amount}</span>优惠券</div>
                                            <div class="wtqM159-coupon-amountNeed">${amountReq}</div>
                                        </a>
                                    </div>
                                    <div class="fl">
                                        <div class="wtqM159-coupon-price">券后价 <span>${newPrice}元</span></div>
                                        <div class="wtqM159-coupon-time">还剩
                                            <div id="wtqM159-coupon-time">
                                                <span class="day">00</span><span>日</span><span class="hour">00</span><span>时</span><span class="mini">00</span><span>分</span><span class="sec">00</span>.<span class="hm">0</span><span>秒</span>
                                            </div>
                                        </div>
                                        <div class="wtqM159-coupon-qq">
                                            <i></i> <span>领券咨询</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                            $("#wtqM159").append(oli);
                            $(".wtqM159-coupon-img").click(function () {
                                openWindow(urls);
                            });
                            setTimeout(function () {
                                $(".wtqM159-coupon").addClass("active");
                            },0);
                            try {
                                $("#wtqM159-coupon-time").fnTimeCountDown(infoGroup.endT);
                            } catch (e) {
                            }
                            //里面扫码
                            var html = `<div class="wtqM159-qrCode-img fl"></div>
                            <div class="wtqM159-qrCode-title fl">手机淘宝APP<br>扫码立减<span>${amount}</span>元</div>`;
                            $(".wtqM159-box-qrCode").html(html);
                            makeQcode(urls);
                            $(".wtqM159-qrCode .wtqM159-title span").fadeOut(function () {
                                $(this).html(`扫码领券`).css({
                                    "color":"#ff0033"
                                }).fadeIn();
                            });
                        }//有优惠券渲染
                    }//优惠券
                    function makeQcode(e) {
                        new QRCode($('.wtqM159-qrCode-img')[0],{
                            text:e,
                            width:75,
                            height:75,
                            colorDark:"#000000",
                            colorLight:"#ffffff",
                            correctLevel:QRCode.CorrectLevel.L
                        });
                    } //领券二维码
                }();               //淘宝天猫页面
                !function () {
                    if (infoGroup.plat != 'jd') {
                        return;
                    }
                    var locaHref = location.href;
                    $('.wtqM159-box-h5').css("left",154);
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
                            //外面领券
                            var amount = infoGroup.amount;
                            var amountReq = `满${parseInt(infoGroup.price)}元减${infoGroup.amount}元`;
                            var newPrice = numSub(infoGroup.price,amount);
                            var oli = `<div class="wtqM159-ab">
                                <div class="wtqM159-coupon wtqClear">
                                    <div class="wtqM159-coupon-img fl" data-wtqClick="MID-领券点击">
                                        <a class="wtqClear">
                                            <div class="wtqM159-coupon-amount">¥<span>${amount}</span>优惠券</div>
                                            <div class="wtqM159-coupon-amountNeed">${amountReq}</div>
                                        </a>
                                    </div>
                                    <div class="fl">
                                        <div class="wtqM159-coupon-price">券后价 <span>${newPrice}元</span></div>
                                        <div class="wtqM159-coupon-time">还剩<div id="wtqM159-coupon-time">
                                                <span class="day">00</span><span>日</span><span class="hour">00</span><span>时</span><span class="mini">00</span><span>分</span><span class="sec">00</span>.<span class="hm">0</span><span>秒</span>
                                            </div>
                                        </div>
                                        <div class="wtqM159-coupon-qq">
                                            <i></i>
                                            <span>领券咨询</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                            $("#wtqM159").append(oli);
                            setTimeout(function () {
                                $(".wtqM159-coupon").addClass("active");
                            },0);
                            $(".wtqM159-coupon-img").click(function () {
                                openWindow(e);
                            });
                            try {
                                $("#wtqM159-coupon-time").fnTimeCountDown(infoGroup.endT);
                            } catch (e) {
                            }
                            //里面扫码
                            var html = `<div class="wtqM159-qrCode-img fl"></div>
                            <div class="wtqM159-qrCode-title fl">手机微信APP<br>扫码立减<span>${amount}</span>元</div>`;
                            $(".wtqM159-box-qrCode").html(html);
                            makeQcode(e);
                            $(".wtqM159-qrCode .wtqM159-title span").fadeOut(function () {
                                $(this).html(`扫码领券`).css({
                                    "color":"#ff0033"
                                }).fadeIn();
                            });
                        }//有优惠券渲染
                        function noDan() {
                            //外面领券
                            var oli = `<div class="wtqM159-ab">
                                <div class="wtqM159-coupon active wtqClear">
                                    <div class="wtqM159-coupon-noBack"></div>
                                    <div class="wtqM159-coupon-noTitle">该商品暂无可用优惠券</div>
                                    <div class="wtqM159-coupon-noQQ">
                                        <i></i><span>领券咨询</span>
                                    </div>
                                </div>
                            </div>`;
                            $("#wtqM159").append(oli);
                            $(".wtqM159-coupon").css("padding","20px 0 24px 0");
                            //里面扫码
                            var html = `<div class="wtqM159-qrCode-img fl"></div>
                            <div class="wtqM159-qrCode-title fl">手机微信APP<br>扫码下单</div>`;
                            $(".wtqM159-box-qrCode").html(html);
                            var urls = `https://item.m.jd.com/product/${itemId}.html`;
                            makeQcode(urls);
                            $(".wtqM159-qrCode .wtqM159-title span").fadeOut(function () {
                                $(this).html(`扫码下单`).css({
                                    "color":"#ff0033"
                                }).fadeIn();
                            });
                        }//无优惠券渲染
                    }//
                    $("#wtqM159").css("z-index",3);//
                    function makeQcode(e) {
                        new QRCode($('.wtqM159-qrCode-img')[0],{
                            text:e,
                            width:75,
                            height:75,
                            colorDark:"#000000",
                            colorLight:"#ffffff",
                            correctLevel:QRCode.CorrectLevel.L
                        });
                    } //领券二维码
                }();               //京东页面
            }
        }
    }();
}();