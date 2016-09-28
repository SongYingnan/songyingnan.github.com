var TGAdsShow = (function() {
    var l = document,
        _r = 1 * new Date,
        nu = navigator.userAgent.toLowerCase(),
        ie = nu.indexOf("msie") != -1,
        opera = nu.indexOf("opera") != -1,
        strAttribute = "data-TGAD",
        strAttributeTitle = "title-TGAD",
        strAttributeSubTitle = "data-subtitle",
        arrLinks = [],
        arrLength, arrLoadLinks = [],
        preview = document.getElementById("preview"),
        adJsPre = 'http://game.qq.com/time/qqadv/Info_new_',
        adImgPre = 'http://ossweb-img.qq.com/upload/adw/',
        sendClickUrl = 'http://apps.game.qq.com/adw_sendclick/api/send_click.php',
        LogCgi = "http://apps.game.qq.com/eas/comm/eas.php",
        UrlHost = window.location.host,
        /*����ع�List*/
        ShowAdList = new Array();
    if (preview != null) {

        var s = document.getElementById("preview").src;
        var env = getParameter(s, 'env');

        if (env == 'DevelopEcho') {
            adJsPre = 'http://echoweb.qq.com/data/ad/js/qqadv/Info_new_';
            adImgPre = 'http://echoweb.qq.com/data/ad/img/';
            sendClickUrl = 'http://echoweb.qq.com/apps/adw_sendclick/api/send_click.php';
        } else if (env == 'Develop') {
            adJsPre = 'http://game.qq.com/time/qqadv_develop/Info_new_';
            adImgPre = 'http://ossweb-img.qq.com/upload/adw_develop/';
            sendClickUrl = 'http://apps.game.qq.com/adw_sendclick/api/send_click.php';
        } else if (env == 'Beta') {
            adJsPre = 'http://game.qq.com/time/qqadv_beta/Info_new_';
            adImgPre = 'http://ossweb-img.qq.com/upload/adw_beta/';
            sendClickUrl = 'http://apps.game.qq.com/adw_sendclick/api/send_click.php';
        } else {
            adJsPre = 'http://game.qq.com/time/qqadv/Info_new_';
            adImgPre = 'http://ossweb-img.qq.com/upload/adw/';
            sendClickUrl = 'http://apps.game.qq.com/adw_sendclick/api/send_click.php';
        }

    }


    function attach(d, a, c, b) {
        if (d.addEventListener) {
            d.addEventListener(a, c, b)
        } else {
            if (d.attachEvent) {
                d.attachEvent("on" + a, c)
            }
        }
    }

    function loadJson(a, b, c) {
        var d = l.createElement("script"),
            e = l.getElementsByTagName('head')[0],
            bFn1 = bFn2 = true,
            f = l.getElementsByTagName("script"),
            j = f.length,
            h = false;
        if (b == null || typeof(b) == 'undefined') {
            bFn1 = false
        }
        if (c == null || typeof(c) == 'undefined') {
            bFn2 = false
        }
        d.src = a;
        d.onloadDone = false;
        if (ie) {
            attach(d, "readystatechange", function(e) {
                if (("loaded" === d.readyState || "complete" === d.readyState) && !d.onloadDone) {
                    d.onloadDone = true;
                    if (bFn1) {
                        b()
                    }
                    d.onreadystatechange = null
                }
            });
            if (d.readyState === 'loaded' && d.nextSibling == null) {
                if (bFn2) {
                    c()
                }
            }
        } else {
            d.onload = function() {
                d.onloadDone = true;
                if (bFn1) {
                    b()
                }
                d.onload = null
            };
            d.onerror = function() {
                if (bFn2) {
                    c()
                }
                d.onerror = null
            }
        }
        while (j--) {
            if (f[j].src === a) {
                b();
                h = true;
                break
            }
        }
        if (!h) {
            l.documentElement.firstChild.insertBefore(d, null)
        }
    }

    function loadADs(c) {
        var a = c;
        if (a < arrLength) {
            var d = arrLinks[a],
                o = d.o,
                ad = d.a.split(","),
                _0 = ad[0],
                _1 = ad[1],
                _load = false;
            if (!(isNaN(_0) || isNaN(_1))) {
                var b = adJsPre + _0 + ".js?v=" + _r,
                    s = function() {
                        arrLoadLinks[_0] = 1;
                        _load = true;
                        setTimeout(function() {
                            removeScript(b)
                        }, 250);
                        show(o, _0, _1, a)
                    };
                if (1 == arrLoadLinks[_0]) {
                    show(o, _0, _1, a)
                } else {
                    setTimeout(function() {
                        loadJson(b, function() {
                            if (!_load) {
                                s()
                            }
                        }, function() {
                            if (!_load) {
                                s()
                            }
                        })
                    }, 0)
                }
                if (opera) {
                    setTimeout(function() {
                        if (!_load) {
                            s()
                        }
                    }, 250)
                }
            }
        }
    }

    function show(o, a, b, c) {
        var d = o,
            _c = c,
            objJson = null,
            strTitle;
        try {
            objJson = (new Function("return oDaTaNew" + a))()
        } catch (e) {
            objJson = eval("oDaTaNew" + a + '={"pos' + b + '":["Json Error!!","' + adJsPre + a + '.js","ad-loading.gif","50","50"]}')
        }
        for (var k in objJson) {
            if (b == k.toString().substring(3)) {
                var f = eval("oDaTaNew" + a + "." + k),
                    strTitle = decodeURI(f[0]),
                    strHref = f[1],
                    strlistdate = f[8],
                    strSubTitle = decodeURI(f[9]);
                /*����ϱ�����tas_code�ϱ�*/
                var tas_code = fn.getUrlVar(strHref, 'e_code');
                if (tas_code == null || tas_code == undefined) {
                    tas_code = fn.getUrlVar(strHref, 'tas_code');
                    if (tas_code == null || tas_code == undefined) {
                        tas_code = 0;
                    }
                }

                if (strlistdate == null || strlistdate == undefined) {
                    strlistdate = 0;
                }

                if (d.attributes[strAttribute]) {
                    if (f) {
                        var pgv = 'ad.' + a + '.' + b;
                        var ad_id = strlistdate;
                        if (strlistdate) {
                            pgv = pgv + '.' + strlistdate
                        }
                        d.onclick = function() {
                            var head = document.getElementsByTagName('head')[0];
                            var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.onload = script.onreadystatechange = function() {
                                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {

                                    pgvSendClick({
                                        hottag: "ad." + a + "." + b + "." + strlistdate + ""
                                    });
                                    var iImgObj = new Image();
                                    iImgObj.onload = function() {
                                        iImgObj = null;
                                    };
                                    iImgObj.onerror = function() {
                                        iImgObj = null;
                                    };

                                    iImgObj.src = sendClickUrl + '?channel_id=' + a + '&banner_id=' + b + '&ad_id=' + strlistdate + '&tas_code=' + tas_code + '&ad_url=' + encodeURIComponent(strHref) + '&js_type=1&click_type=2&t=' + (new Date()).getTime()
                                    script.onload = script.onreadystatechange = null;

                                    if (UrlHost == "x5.qq.com" || UrlHost == "cf.qq.com") {
                                        var ShowAdClick = a + "." + b + "." + strlistdate + "." + tas_code;
                                        var ShowAdClickUrl = LogCgi + '?m=SendLog&show_ads=' + ShowAdClick + '&ad_url=' + encodeURIComponent(strHref) + '&click_type=2&t=' + (new Date()).getTime();
                                        fn.loadjs(ShowAdClickUrl, function() {

                                        });

                                        pgvSendClick({
                                            hottag: "adClick." + a + "." + b + "." + strlistdate + "." + tas_code
                                        });
                                    }
                                }
                            };
                            script.src = 'http://pingjs.qq.com/tcss.ping.js';
                            head.appendChild(script);
                        };
                        d.target = '_blank';
                        d.href = strHref;
                        d.innerHTML = "<img  src='" + adImgPre + f[2] + "' alt=" + strTitle + " width=" + f[3] + " height=" + f[4] + " />";
                        /*�ع������ϱ�*/
                        /*����һ���ϱ��������������*/
                        var ShowAdInfo = a + "." + b + "." + strlistdate + "." + tas_code;
                        ShowAdList.push(ShowAdInfo);
                        if (_c == arrLength - 1) {
                            var ShowAdStr = ShowAdList.join("|");
                            if (UrlHost == "x5.qq.com" || UrlHost == "cf.qq.com" || UrlHost == "speed.qq.com" || UrlHost == "bns.qq.com" || UrlHost == "wefire.qq.com") {
                                var ShowUrl = LogCgi + '?m=SendLog&show_ads=' + ShowAdStr + '&click_type=1&t=' + (new Date()).getTime();
                            } else {
                                var ShowUrl = sendClickUrl + '?show_ads=' + ShowAdStr + '&js_type=1&click_type=1&t=' + (new Date()).getTime();
                            };
                            fn.loadjs(ShowUrl, function() {

                            });
                        };

                        d.removeAttribute(strAttribute)
                    }
                } else if (d.attributes[strAttributeTitle]) {
                    d.innerHTML = strTitle;
                    if (d.nodeName == "A") {
                        d.href = strHref
                    }
                    d.removeAttribute(strAttributeTitle)
                } else if (d.attributes[strAttributeSubTitle]) {
                    d.innerHTML = strSubTitle;
                    d.removeAttribute(strAttributeSubTitle)
                }
            }
        }
        _c++;
        loadADs(_c)
    }

    function removeScript(a) {
        var b = l.getElementsByTagName('script'),
            intScrLen = b.length,
            _obj = null;
        while (intScrLen--) {
            _obj = b[intScrLen];
            if (_obj.src == a) {
                var p = _obj.parentNode;
                if (p && p.nodeType === 1) {
                    p.removeChild(_obj)
                }
            }
        }
    }

    function getParameter(str, paraname) {

        var sValue = str.match(new RegExp("[?&]" + paraname + "=([^&]*)(&?)", "i"));
        if (sValue ? sValue[1] : sValue == null) return sValue ? sValue[1] : sValue;

    }

    fn = {
        getUrlVars: function(url) {
            var vars = [],
                hash;
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(url, name) {
            return fn.getUrlVars(url)[name];
        },
        loadjs: function(url, callback, charset) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (charset) {
                script.setAttribute("charset", charset);
            }
            if (script.readyState) {
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                        document.getElementsByTagName("head")[0].removeChild(this);
                    }
                };
            } else {
                script.onload = function() {
                    callback();
                    document.getElementsByTagName("head")[0].removeChild(this);
                };
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };

    return {
        init: function(a) {
            var b = ((typeof(a) == "object") ? a : l.getElementById(a)) || l,
                arrAllEls = l.getElementsByTagName("*"),
                iArrAllEls = arrAllEls.length,
                oCurrEl, oAttribute, index = 0;
            while (iArrAllEls--) {
                oCurrEl = arrAllEls[iArrAllEls];
                oAttribute = oCurrEl.getAttribute && oCurrEl.getAttribute(strAttribute) || oCurrEl.getAttribute(strAttributeTitle) || oCurrEl.getAttribute(strAttributeSubTitle);
                if (typeof oAttribute == "string" && oAttribute.length > 0 && oAttribute.split(",").length == 2) {
                    arrLinks[index] = {};
                    arrLinks[index].o = oCurrEl;
                    arrLinks[index].a = oAttribute;
                    index++
                }
            }
            arrLength = arrLinks.length;
            if (arrLength > 0) {
                loadADs(0)
            }
        }
    }
})();
TGAdsShow.init();/*  |xGv00|98997de69de297371e7a6b910ec5ab1a */