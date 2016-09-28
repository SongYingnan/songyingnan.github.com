"use strict";
document.addEventListener("DOMContentLoaded", function() {
	var oHd = document.querySelector("header");
	var oSimShow = document.querySelector(".sim-show");
	var oMe = document.querySelector(".me");
	var oSha = oMe.querySelector(".shadow");
	var oOther = document.querySelector(".others");
	var oFace = document.querySelector(".face");
	oHd.style.width = document.documentElement.clientWidth + "px";
	oHd.style.height = document.documentElement.clientHeight + "px";
	oHd.style.backgroundSize = document.documentElement.clientWidth + "px auto";
	oOther.style.width = document.documentElement.clientWidth + "px";
	oOther.style.height = document.documentElement.clientHeight + "px";
	oOther.style.backgroundSize = document.documentElement.clientWidth + "px auto";
	window.onresize = window.onscroll = function() {
		var oHd = document.querySelector("header");
		var oSimShow = document.querySelector(".sim-show");
		oHd.style.width = document.documentElement.clientWidth + "px";
		oHd.style.height = document.documentElement.clientHeight + "px";
		oHd.style.backgroundSize = document.documentElement.clientWidth + "px auto";
		oOther.style.width = document.documentElement.clientWidth + "px";
		oOther.style.height = document.documentElement.clientHeight + "px";
		oOther.style.backgroundSize = document.documentElement.clientWidth + "px auto";
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scale = oMe.offsetTop - scrollTop;
		oMe.style.backgroundPosition = "center " + (scale / 3 - 200) + "px";
		oSha.style.opacity = 0.8 * (1 - scale / 200)
	};
	(function() {
		var oUl = oMe.getElementsByTagName("ul")[0];
		var oOl = oMe.getElementsByTagName("ol")[0];
		var aLi = oUl.children;
		var aBtn = oOl.children;
		for (var i = 0; i < aBtn.length; i++) {
			(function(index) {
				aBtn[i].onmouseover = function() {
					for (var i = 0; i < aBtn.length; i++) {
						aBtn[i].className = "";
						aLi[i].style.opacity = 0
					}
					aBtn[index].className = "on";
					aLi[index].style.opacity = 1
				}
			})(i)
		}
	})(function(){
		eval("\u0063\u006f\u006e\u0073\u006f\u006c\u0065\u002e\u006c\u006f\u0067('\u0025\u0063\u0020\u738b\u6c5d\u7ef4\u0020\u0025\u0063\u0020\u0025\u0073', '\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u003a\u0064\u0065\u0065\u0070\u0073\u006b\u0079\u0062\u006c\u0075\u0065\u003b\u0063\u006f\u006c\u006f\u0072\u003a\u0023\u0066\u0066\u0066\u003b', '', '\u6211\u662f\u738b\u6c5d\u7ef4\uff0c\u6b22\u8fce\u6765\u5230\u6211\u7684\u4e2a\u4eba\u7ad9')");
	}());
	(function() {
		var oBtn = oHd.querySelector(".me-btn");
		oBtn.onmouseover = function() {}
	})(function(){
		eval("\u0063\u006f\u006e\u0073\u006f\u006c\u0065\u002e\u006c\u006f\u0067('\u0025\u0063\u0020\u738b\u6c5d\u7ef4\u0020\u0025\u0063\u0020\u0025\u0073', '\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u003a\u0064\u0065\u0065\u0070\u0073\u006b\u0079\u0062\u006c\u0075\u0065\u003b\u0063\u006f\u006c\u006f\u0072\u003a\u0023\u0066\u0066\u0066\u003b', '', '\u6211\u662f\u738b\u6c5d\u7ef4\uff0c\u6b22\u8fce\u6765\u5230\u6211\u7684\u4e2a\u4eba\u7ad9')");
	}())
}, false);
