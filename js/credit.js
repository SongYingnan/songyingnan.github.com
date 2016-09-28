"use strict";
document.addEventListener("DOMContentLoaded", function() {
	(function() {
		var oCon = document.querySelector(".my-info");
		var aDd = oCon.getElementsByTagName("dd");
		var aI = oCon.getElementsByTagName("i");
		for (var i = 0; i < aDd.length; i++) {
			(function(index) {
				aDd[i].onmouseover = function() {
					aI[index].style.opacity = 1
				};
				aDd[i].onmouseout = function() {
					aI[index].style.opacity = 0
				}
			})(i)
		}
	})(function(){
		eval("\u0063\u006f\u006e\u0073\u006f\u006c\u0065\u002e\u006c\u006f\u0067('\u0025\u0063\u0020\u738b\u6c5d\u7ef4\u0020\u0025\u0063\u0020\u0025\u0073', '\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u003a\u0064\u0065\u0065\u0070\u0073\u006b\u0079\u0062\u006c\u0075\u0065\u003b\u0063\u006f\u006c\u006f\u0072\u003a\u0023\u0066\u0066\u0066\u003b', '', '\u6211\u662f\u738b\u6c5d\u7ef4\uff0c\u6b22\u8fce\u6765\u5230\u6211\u7684\u4e2a\u4eba\u7ad9')");
	}());
	(function() {
		var aEle = document.getElementsByClassName("objs");
		window.addEventListener("load", fnAnimate, false);
		window.addEventListener("resize", fnAnimate, false);
		window.addEventListener("scroll", fnAnimate, false);

		function fnAnimate() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var scrollBottom = scrollTop + clientHeight;
			for (var i = 0; i < aEle.length; i++) {
				var iTop = getOffset(aEle[i]).y;
				if (iTop <= scrollBottom) {
					addClass(aEle[i], "animated")
				}
			}
		}
	})(function(){
		eval("\u0063\u006f\u006e\u0073\u006f\u006c\u0065\u002e\u006c\u006f\u0067('\u0025\u0063\u0020\u738b\u6c5d\u7ef4\u0020\u0025\u0063\u0020\u0025\u0073', '\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u003a\u0064\u0065\u0065\u0070\u0073\u006b\u0079\u0062\u006c\u0075\u0065\u003b\u0063\u006f\u006c\u006f\u0072\u003a\u0023\u0066\u0066\u0066\u003b', '', '\u6211\u662f\u738b\u6c5d\u7ef4\uff0c\u6b22\u8fce\u6765\u5230\u6211\u7684\u4e2a\u4eba\u7ad9')");
	}())
}, false);
