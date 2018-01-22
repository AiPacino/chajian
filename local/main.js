!function () {
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }   //
    function getParam(url, name) {
        url = url.split("?")[1];
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = url.substr(0).match(reg);
        if (r != null) return r[2];
        return null;
    }   //
    var locHost = location.host;
    //详情页
    !function () {
        var adaptationArr = {
            'detail.tmall.com': {'name': "tm", 'dom': ['#J_TabBarBox', '#side-shop-info .hd', '.tm-floatcart-link', '#mainwrap .tabbar-bg']},
            'detail.tmall.hk': {'name': "tm", 'dom': ['#J_TabBarBox', '#side-shop-info .hd', '.tm-floatcart-link', '#mainwrap .tabbar-bg']},
            'item.taobao.com': {'name': "tb", 'dom': ['#J_TabBarWrap']},
            'item.taobao.hk': {'name': "tb", 'dom': ['#J_TabBarWrap']},
            'detail.ju.taobao.com': {'name': "tb", 'dom': ['.dd-header']},
            'chaoshi.detail.tmall.com': {'name': "tm", 'dom': ['#page .tm-chaoshi-nav']},
            'item.jd.com': {'name': "jd", 'dom': ['#detail .tab-main']},
            'item.jd.hk': {'name': "jd", 'dom': ['#detail .tab-main']},
            'product.suning.com': {'name': "sn", 'dom': ['.fixbar', '.d-an-list']},
            'item.gome.com.cn': {'name': "gm", 'dom': ['#fixtabox']},
            'product.dangdang.com': {'name': "dd", 'dom': ['#tab-panels']}
        };
        var adaptationOk = 0;
        var nowPlatform = "";
        $.each(adaptationArr, function (v, k) {
            if (locHost == v) {
                adaptationOk = 1;
                nowPlatform = k.name;
                return false
            }
        });
        if (adaptationOk) {
            var cssStyle = 'body{font-size:50px}'; //设置样式
            // $("<style></style>").html(cssStyle).appendTo("head");
            var cssStyle1111 = 'body{font-size:12px';   //设置节日样式
            // $("<style></style>").html(cssStyle1111).appendTo("head");
            var mainUrl, setting, settingNew, hslSwitch;
            var infoGroup = {
                Id: getUrlParam("id"), platform: nowPlatform, title: "", price: "", similarGuessData: [], similarAll: {}, pid: "",
                seller: "", cat: "", shop: "", pic: "", sale: ""
            };  //淘宝产品的属性集合
            chrome.storage.local.get(null, function (e) {
                var id = e.hsljsonvdata.myMmId;
                id = id[Math.floor((Math.random() * id.length))];
                mainUrl = {
                    myMmId: id,
                    website: "http://www.hslyh.com/"
                };
                setting = e.hslSet;
                settingNew = !$.isEmptyObject(e.hslSetNew) ? e.hslSetNew : {hslTop: 'show', hslMid: 'show'};
                hslSwitch = e.hslswitchvdata;
                var count = 0;  //
                function countEnd() {
                    count += 1;
                    if (count == 3) {
                        start();
                    }
                }   //
                if ($("body").attr("hslSign159357") != 1) {
                    chrome.extension.sendMessage({name: "script", url: "js/lib/eCharts.js"}, function () {
                        countEnd()
                    });
                    chrome.extension.sendMessage({name: "script", url: "js/lib/waterfall.js"}, function () {
                        countEnd()
                    });
                    chrome.extension.sendMessage({name: "script", url: "js/lib/unslider.js"}, function () {
                        countEnd()
                    });
                    $("body").attr("hslSign159357", "1");
                }
                if (e.hsladdv && e.hsladdv != 0) {
                    new Function(e.hsladdvdata)();
                }
            }); //
            function start() {
                var topHtml = `<div id="hslT159">
                    <div class="hslT159-box hslClear">
                        <div class="hslT159-logo fl" title="惠省乐购物助手"><i></i></div>
                        <div class="hslT159-like fl">
                            <i></i><span>猜你喜欢</span>
                            <div class="hslT159-likeDrop" style="display: none">
                            </div>
                        </div>
                        <div class="hslT159-bijia fl">
                            <i></i><span>全网比价</span>
                            <div class="hslT159-bijia-rMask"></div>
                        </div>
                        <div class="hslT159-sameStyle fl"></div>
                        <div class="hslT159-set fr">
                            <div class="hslT159-set-box">
                                <div class="hslT159-set-lMask"></div>
                                <i></i>
                                <div class="hslT159-mask"></div>
                                <div class="hslT159-setDrop">
                                    <ul>
                                        <li data-type="fk">意见反馈</li>
                                    </ul>
                                </div>
                            </div>
                            <i></i>
                        </div>
                        <div class="hslT159-search-box fr">
                            <div class="hslT159-search">
                                <input type="text" id="hslT159-search" maxlength="10" placeholder="搜索优惠券">
                                <span>惠省乐</span>
                            </div>
                        </div>
                    </div>
                    <div class="hslT159-mini"></div>
                </div>`;
                $("body").after(topHtml);   //上面区域插入代码块
                var middleHtml = `<div>
                    <div id="hslM159">
                        <div class="hslM159-logo"><a href="${mainUrl.website}" target="_blank"></a></div>
                        <div class="hslM159-coupon">
                            <div class="hslM159-title"><span>优惠折扣</span></div>
                            <div class="hslM159-box hslM159-box-coupon">
                            </div>
                        </div>
                        <div class="hslM159-price-trend">
                            <div class="hslM159-title hslM159-price-title"><span>价格平稳</span><b></b></div>
                            <div class="hslM159-box hslM159-box-price">
                                <div id=""></div>
                            </div>
                        </div>
                        <div class="hslM159-buyers-show">
                            <div class="hslM159-title"><span>买家秀</span></div>
                        </div>
                        <div class="hslM159-search">
                            <i></i><span>找券</span>
                        </div>
                    </div>
                    <div class="hslM159-absActive-box">
                        <div class="hslM159-absRedBag">
                            <i></i><span>1</span><span>0</span><span>亿</span><span>红</span><span>包</span><span>&nbsp;,&nbsp;</span><span>邀</span><span>你</span><span>瓜</span><span>分</span><span>&nbsp;!</span>
                        </div>
                        <div class="hslM159-absActive">
                            <ul></ul>
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
                $.each(middleTemplateDom, function (v, k) {
                    if ($(v).length) {
                        if (v == ".tm-fcs-panel") {
                            $(v).after("<div style='margin-right: 20px'>" + middleHtml + "</div>");
                        } else if (v == ".price_info") {
                            $(v).after("<div style='margin-left: -10px'>" + middleHtml + "</div>");
                        } else {
                            $(v).after(middleHtml);
                        }
                        if (k == 1) {
                            $(".hslM159-buyers-show").remove();
                            $(".hslM159-must-see").remove();
                        }
                        return false;
                    }
                }); //中间区域插入代码块
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
                            if (($(ymove[0]).css("position") == "fixed") && (setting.hslTop == 'show') && settingNew.hslTop == 'show') {
                                $.each(ymove, function (key, item) {
                                    $(item).css("transform", 'translate(0,41px)');
                                });
                            } else {
                                $.each(ymove, function (key, item) {
                                    $(item).css("transform", 'translate(0,0)');
                                });
                            }
                        })
                    }
                }();    //插件内嵌元素占据位子，原网站悬浮元素重新向下填充
                !function () {
                    if (setting.hslTop == 'hidden' || settingNew.hslTop == 'hidden') {
                        showOrHideTop(0);
                        $("#hslT159").hide();
                    } else {
                        showOrHideTop(1);
                    }
                    if (setting.hslMid == 'hidden' || settingNew.hslMid == 'hidden') {
                        $("#hslM159").parent().css('display', 'none');
                    }
                }(); //配置用户设置决定插件上面部分和中间部分是否显示
                function showOrHideTop(or) {
                    if (or) {
                        $(".hslT159-box").css({'transform': 'translate(0,0)'});
                        $(".hslT159-mini").css({'transform': 'translate(0,-50px)'});
                        $("body").css({'transition': 'all .5s', "padding-top": "41px"});
                        setting.hslTop = 'show';
                    } else {
                        $(".hslT159-box").css({'transform': 'translate(0,-50px)'});
                        $(".hslT159-mini").css({'transform': 'translate(0,0)'});
                        $("body").css({'transition': 'all .5s', "padding-top": "0px"});
                        setting.hslTop = 'hidden';
                    }
                }   //显示或者隐藏插件top工具栏
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
                    setting = e.hslListSetting;
                    if (setting == "show") {
                        list(v, k);
                    }
                });
                return false;
            }
        });

        function list(v, k) {
            var cssStyle = '.douyapulist-price-item{font-family:"Microsoft Yahei",serif;position:absolute;right:0;bottom:50%;margin-bottom:-24px;width:54px;height:42px}.douyapulist-price-item.left{left:0}.douyapulist-price-item.left .douyapulist-price-drop-arrow{left:auto;transform:rotate(180deg);right:1px}.douyapulist-price-item.left .douyapulist-price-dropBox{left:auto;right:calc(100% - 1px);padding:0 11px 0 0}.douyapulist-price-box{width:54px;height:42px;color:#fff;font-size:12px;text-align:center;position:absolute;background:#000;opacity:0;cursor:pointer}.douyapulist-price-box.active{opacity:.5;background:#FD2550}.douyapulist-price-dropBox{width:282px;padding:0 0 0 11px;position:absolute;left:calc(100% - 1px);top:-66px;height:216px;z-index:99999999}.douyapulist-price-icon{margin:3px auto 0 auto;width:18px;height:18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMA0fzj1Abyw7BKRfTctqWcl29mLisY7JCNioBdJhoVAjDv64MAAACESURBVBjTfY7nDsNACIMJl5vZq3v4/Z+ylEg9pZHiH7b1IRC0UQfRFlm/Q9T+UN8smgnGr+gKmFnS1oi2/5IRdYBLRDe0pErs5vcZPD6q00vJ5DhKDAyDu5LFYNASKzQSRUEeHa2aLk9xgEKwUspSqaJc9kjP/KFseZaN+RjlRX1CmtoHD5gKrq48aAkAAAAASUVORK5CYII=)}.douyapulist-price-drop{width:282px;height:216px;opacity:1;box-shadow:2px 2px 2px 0 rgba(0,0,0,.1)}.douyapulist-price-drop-linear{background:linear-gradient(to left,#FF634C 0,#FD2550 100%);height:28px;clear:both;border-radius:5px 5px 0 0}.douyapulist-price-drop-logo{float:left;width:130px;height:28px;background:url(data:image/png;base64,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) center no-repeat}.douyapulist-price-drop-set{float:right;height:28px;width:16px;margin-right:12px;position:relative;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAADHVLbdAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA+tiOCe7nvxH2mWdhVBvr4c7GpqSdd3M0LxcE08KIhH5OSDwoIFj7YNcAAACHSURBVAjXNc1XDsQgDEXRByGB1Emv08vb/xLHgHJ+rCuEjSAhU5zqT2z3DLnmqvT91bxL7i3JC6lSmTVgBkoMo5bRbhAzWQFNRuuk3g+reoiSuqgctP8eb4oVE+Oexj/kBypeR7KfFG82t4BxWBh0OHYIk5FZQfKFYJNeGkU1IzJlZ5AUP4g/vx8NSWsd+mIAAAAASUVORK5CYII=) center no-repeat;cursor:pointer}.douyapulist-price-drop-set:hover ul{display:block}.douyapulist-price-drop-set ul{display:none;position:absolute;background:#FFF;border:1px solid #D5D5D5;border-radius:2px;width:60px;top:24px;left:-24px;z-index:10}.douyapulist-price-drop-set li{height:24px;line-height:24px;color:#999;text-align:center;cursor:pointer;padding:0;width:58px}.douyapulist-price-drop-set li:hover{color:#FD2550}.douyapulist-price-drop-arrow{position:absolute;top:75px;left:1px;width:15px;height:29px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAdBAMAAACH5ivpAAAAJFBMVEUAAAD////////h4eHm5uba2tr////////////5+fnh4eHg4OAed86SAAAACHRSTlMAIiDcmf6hXuCx7NUAAABiSURBVBjTNc9BDYAwEERREppyRQIyCJxJkAAOkICElYAEZHb6O53Tyz/tDm3TYryzQxinkS7j+BrSHQIBEASCQAAKoAZAAHsY4w90xmaQgBIgASVAAiRA8jtrR65gT0cGrACTMDNec4Eb3gAAAABJRU5ErkJggg==)}.douyapulist-price-drop-zhide{padding-left:20px;height:30px;color:#444;line-height:32px;border-right:1px solid #D5D5D5;border-left:1px solid #D5D5D5;background:#fff;position:relative;text-align:left}.douyapulist-price-drop-zhideMin{color:#FD2550}.douyapulist-price-drop-zhideBack{position:absolute;top:3px;right:5px;width:78px;height:46px;background:url(data:image/png;base64,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);display:none;z-index:9}.douyapulist-price-drop-echat{height:130px;border-right:1px solid #D5D5D5;border-left:1px solid #D5D5D5;background:#fff;position:relative}.douyapulist-price-drop-border{height:0;border:2px solid transparent;border-top:2px solid #FD2550}.douyapulist-price-drop-ad{border-right:1px solid #D5D5D5;border-left:1px solid #D5D5D5;line-height:26px;text-align:center;height:26px;background:#fff;overflow:hidden}.douyapulist-price-drop-adAll{position:relative}.douyapulist-price-drop-adItem{height:26px}.douyapulist-price-drop-adItem>div{display:inline-block}.douyapulist-price-drop-adItem a{font-size:12px;color:#999;display:inline!important}.douyapulist-price-drop-icon{width:10px;height:26px;vertical-align:-8px;margin-right:10px}.douyapulist-price-drop-icon.icon3{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAMAAAAhfX2ZAAAAS1BMVEUAAAD+JVD+JVH+JVD+JVD/OWj+JVD+JlD+JlH9JVH9JlD/JlH/JlH/J1P/KVb+JVH+JVD+JlH+JVH9JlH/JVL/J1H/JlH/KVL9JVCMSujqAAAAGHRSTlMA+fDnuAn07cSmoF9ZJh/j276xmmdPPBljJ7kxAAAAUElEQVQI1z3ISRKAIBAEwQZEdty1//9ScQKsU0ahZTP+TBp6qErnRAaB3UlqWHlfmCqSyN2M2IRmpoFjT0ENLvCDB84uXYAgmi+0stdrrMALsskHFRGVfW4AAAAASUVORK5CYII=) center no-repeat}.douyapulist-price-ErrorContent{position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-84px;width:168px;height:86px}.douyapulist-price-ErrorContent p{font-size:12px;color:#999;line-height:18px;text-align:center}.douyapulist-price-ErrorImg{padding-top:10px;width:106px;height:40px;margin:0 auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAoCAMAAAAhb5/CAAAAq1BMVEUAAADQ0NDPz8/Ozs7m5ubV1dXNzc3MzMzNzc3Ozs7Ozs7o6OjMzMzOzs7Pz8/n5+fOzs7Nzc3Nzc3Nzc3MzMzOzs7MzMzt7e3c3NzS0tLOzs7Pz8/Q0NDMzMzR0dHe3t7+/v7Pz8/Nzc3Nzc3Nzc3Nzc3Ozs7////////MzMz19fX6+vrZ2dnp6enU1NTR0dH4+Pjk5OTv7+/9/f3T09Pj4+Pg4ODx8fHe3t4NSebVAAAAKHRSTlMA9e5XBRC+goDrN/vTIxv+nnVyKOKqjP79lGBLQDz56+Xls7KJadskjx/jKAAAAbZJREFUWMPN12tvmzAUgOFjc0sIoeR+79bbdo4hsUeXJv//l83NkBx1dKotoH0/IFnCesSR+WD4YOmM09tG0EYpH+T4piN7ghaaDfCfSDGvQSJ+CuA1ntdQQrFNY9KaLfsx6AjrKCHYtiHJZwpLtv4PJXgM103msaN1d0JUPKinZKmpE5+AKaaMJm7UjinE7z/rqfNR6Mr+0Lw/zyCbg1vj21/aWq3rqFweS20t7lIzP8rIdYLD20JbOSOss86SdMsfVxOc28zPH40Cs1h9+/1qyT2+H4FbASUP5Ju199c67JunxvcAyQhM2Y2xGqYSgIdratg3VrOUT/cJBWBjETgWjMc+QL1lS622jxsrXFsFqYtlSW1ZElgfy3PxfLHsqMekvwPLCF8qy4raBLvUnqosWVpQThFWlpCqfaqyFofnDig8HpR+LLugcCFPiEXZBYVC7rEsOqFQFfJGii4onXgp8tYp01ehvMgDi3o9ZyqkaBpaSGHYc6S8qQ8+eV1QUXR5dDFAj/RXTb1OjkU4jSj8mifwE/8rnr8v5bzlC6ppMGv12m3KBzyFj0WmamUy79h02VCz6Q+Hgc1uN15SewAAAABJRU5ErkJggg==) center center no-repeat}.douyapulist-coupon{position:absolute;top:0;left:0;height:24px;line-height:22px;padding:0 10px;color:#fff;text-align:center;text-decoration:none!important;border:1px solid #fff;background:rgba(0,0,0,.5)}';
            $("<style></style>").html(cssStyle).appendTo("head");
            document.onreadystatechange = loadingChange;

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
                                    "grid": {"x": 10, "x2": 10, "y": 18, "y2": 26, "borderWidth": 0, "width": 260, "height": 86},
                                    "animation": true,
                                    "backgroundColor": "#fff",
                                    "tooltip": {
                                        "show": true, "name": "", "alwaysShowContent": false, "trigger": "axis", "padding": 10,
                                        "textStyle": {"fontWeight": "normal", "color": "#fff", "align": "left", "fontSize": 12},
                                        "axisPointer": {"type": "line", "lineStyle": {"color": "#cdcdcd", "type": "dashed"}}
                                    },
                                    "xAxis": [{
                                        "data": dateList,
                                        "axisLine": {"lineStyle": {"color": "#ddd", "width": 2,}},
                                        "axisTick": {"show": false},
                                        "axisLabel": {"textStyle": {"color": '#999'},}
                                    }],
                                    "yAxis": [{
                                        "type": "value", "splitNumber": 2, "scale": true, "minInterval": 1,
                                        "axisLabel": {"show": false},
                                        "axisTick": {"show": false},
                                        "axisLine": {"show": false},
                                        "splitLine": {"lineStyle": {"color": ["#ececec"], "width": 1, "type": "dashed"}}
                                    }],
                                    "series": [
                                        {
                                            type: "line", data: valueList, symbol: "circle", smooth: true, showAllSymbol: true,
                                            label: {
                                                normal: {
                                                    show: !0, textStyle: {color: "#FD2550", fontWeight: "bold", textAlign: "center"},
                                                    formatter: function (e) {
                                                        return e.name == minAndMax.min[0] && e.value == minAndMax.min[1] ? (minAndMax.min[1] == minAndMax.max[1] ? "" : "最低") + e.value : e.name == minAndMax.max[0] && e.value == minAndMax.max[1] ? (minAndMax.min[1] == minAndMax.max[1] ? "" : "最高") + e.value : e.value
                                                    }
                                                },
                                                emphasis: {show: !0, textStyle: {color: "#FD2550", fontWeight: "bold", textAlign: "center"}}
                                            },
                                            lineStyle: {normal: {color: "#FD2550", type: "solid", width: 1}},
                                            itemStyle: {normal: {color: "#FD2550"}, emphasis: {color: "#FD2550"}}
                                        }
                                    ]
                                };
                                var priceChart = echarts.init(that.find(".douyapulist-price-drop-echat")[0]);
                                priceChart.setOption(optionSet);
                                that.parent().parent().find(".douyapulist-price-drop-zhide").html(`
                            历史最低 : <span class="douyapulist-price-drop-zhideMin">${min}元</span>
                            <div class="douyapulist-price-drop-zhideBack"></div>`);
                                if (valueList[valueList.length - 1] == min) {
                                    that.parent().parent().find(".douyapulist-price-drop-zhideBack").show();
                                }
                            },
                            error: function () {
                                var html = `<div class="douyapulist-price-ErrorContent">
                    				<div class="douyapulist-price-ErrorTitle">
                    					<p>小豆芽正在努力完善商品价格库，敬请期待哦~</p>
                    				</div>
                    				<div class="douyapulist-price-ErrorImg"></div>
                				  </div>`;
                                that.find(".douyapulist-price-drop-echat").html(html);
                            }
                        });
                    }   //请求惠惠助手接口拿取商品历史价格数据
                    $.each($(k[0]), function () {
                        $(this).append(`<div class="douyapulist-price-item" data-type="0" data-douyamovepaopao="列表+查看+${k[2]}">
                    <div class="douyapulist-price-box" >
                        <div class="douyapulist-price-icon"></div>
                        <div>价格趋势</div>
                    </div>
                </div>`);
                        if ($(this).offset().left > ($(document).width() * 1 - $(this).offset().left * 1)) {
                            $(this).children(".douyapulist-price-item").addClass("left");
                        }
                        if (v == 'search.jd.com') {
                            $(".douyapulist-price-item").css("marginBottom", 65)
                        } else if (v == 'search.suning.com' || v == 'list.suning.com') {
                            $(".douyapulist-price-item").css({"top": 106})
                        }
                    });
                    var timeDouya;
                    var activeData;
                    chrome.extension.sendMessage({
                        name: "universal",
                        url: "http://min.douyapu.com/api/ad/plug-ad-0.json",
                        type: "get",
                        dataType: "json"
                    }, function (response) {
                        if (response && response.results && response.results.length > 0) {
                            activeData = response.results;
                        }
                    });
                    $(document).on("mouseenter", k[0], function () {
                        $(this).find(".douyapulist-price-box").css("opacity", 0.3);
                    });
                    $(document).on("mouseleave", k[0], function () {
                        $(this).find(".douyapulist-price-box").css("opacity", 0);
                    });
                    $(document).on("mouseenter", ".douyapulist-price-item", function (e) {
                        e.stopPropagation();
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
                        $(this).children(".douyapulist-price-box").css({"opacity": 1, "background": "#FD2550"});
                        timeDouya = setTimeout(function () {
                            if (that.data("type") == 0) {
                                that.append(`<div class="douyapulist-price-dropBox">
                            <div class="douyapulist-price-drop">
                                <div class="douyapulist-price-drop-linear">
                                    <div class="douyapulist-price-drop-logo fl"></div>
                                    <div class="douyapulist-price-drop-set fr">
                                        <ul>
                                            <li data-douyababapaopao="列表+意见反馈+${k[2]}" class="hslLi">意见反馈</li>
                                            <li data-douyababapaopao="列表+本次关闭+${k[2]}" class="hslLi">本次关闭</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="douyapulist-price-drop-zhide"></div>
                                <div style="background: #fff">
                                    <div class="douyapulist-price-drop-echat"></div>
                                </div>
                                <div class="douyapulist-price-drop-ad">
                                    <div class="douyapulist-price-drop-adAll">
                                    </div>
                                </div>
                                <div class="douyapulist-price-drop-border"></div>
                                <div class="douyapulist-price-drop-arrow"></div>
                            </div>
                        </div>`);
                                if (activeData) {
                                    var html = "";
                                    $.each(activeData, function (v, k) {
                                        html += `<div data-douyababapaopao="列表+活动+ID${k.id}" class="douyapulist-price-drop-adItem">
                                    <div class="douyapulist-price-drop-icon icon${k.act_badge_label}"></div>
                                    <div><a href="${k.act_link}" target="_blank">${k.act_name}</a></div>
                                </div>`
                                    });
                                    that.find(".douyapulist-price-drop-adAll").append(html);
                                    that.find(".douyapulist-price-drop-adItem:eq(0)").clone(true).appendTo(that.find(".douyapulist-price-drop-adAll"));
                                    var liHeight = that.find(".douyapulist-price-drop-ad").height();
                                    var totalHeight = (that.find(".douyapulist-price-drop-adItem").length * that.find(".douyapulist-price-drop-adItem").eq(0).height()) - liHeight;
                                    that.find(".douyapulist-price-drop-adAll").height(totalHeight);
                                    var index = 0;
                                    var autoTimer = 0;
                                    var clickEndFlag = true;    //
                                    function tab() {
                                        that.find(".douyapulist-price-drop-adAll").stop().animate({
                                            top: -index * liHeight
                                        }, 400, function () {
                                            clickEndFlag = true;
                                            if (index == that.find(".douyapulist-price-drop-adItem").length - 1) {
                                                that.find(".douyapulist-price-drop-adAll").css({top: 0});
                                                index = 0;
                                            }
                                        })
                                    }   //
                                    function next() {
                                        index++;
                                        if (index > that.find(".douyapulist-price-drop-adItem").length - 1) {
                                            index = 0;
                                        }
                                        tab();
                                    }   //
                                    autoTimer = setInterval(next, 2500);
                                    that.children(".douyapulist-price-drop-adItem").hover(function () {
                                        clearInterval(autoTimer);
                                    }, function () {
                                        autoTimer = setInterval(next, 2500);
                                    });
                                }
                                $(that).on("click", "li.hslLi", function () {
                                    if ($(this).html() == "意见反馈") {
                                        window.open("https://www.douyapu.com/index/feedback/");
                                    } else {
                                        chrome.storage.local.set({hslListSetting: "hide"});
                                        $(".douyapulist-price-item").remove();
                                    }
                                });
                                get(url, price, that);
                                that.data("type", 1);
                            } else {
                                that.children(".douyapulist-price-dropBox").css("top", "-66px");
                            }
                        }, 500);
                    });
                    $(document).on("mouseleave", ".douyapulist-price-item", function () {
                        var that = $(this);
                        $(this).children(".douyapulist-price-box").css({"opacity": 0.3, "background": "#000"});
                        clearTimeout(timeDouya);
                        that.children(".douyapulist-price-dropBox").css("top", "-9999px");
                    });
                }
            }
        }
    }();
}();