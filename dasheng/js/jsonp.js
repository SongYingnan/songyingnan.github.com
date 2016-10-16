//url,data,cbName,success 
function jsonp(options){
	options = options||{};
	if(!options.url){
		return;
	}
	options.data = options.data||{};
	options.cbName = options.cbName||'cb';
	options.timeout = options.timeout||10000;
	var timer = null;
	var fnName = 'jsonp_'+Math.random();
	fnName = fnName.replace('.','');
	window[fnName] = function(json){
		clearTimeout(timer);
		options.success&&options.success(json);
		document.head.removeChild(oS);	
	};
	options.data[options.cbName] = fnName;
	//json2url
	var arr = [];
	for(var name in options.data){
		arr.push(name+'='+options.data[name]);
	}
	timer = setTimeout(function(){
		options.error&&options.error();
		window[fnName] = null;
		
	},options.timeout);
	
	//调用abc
	var oS = document.createElement('script');
	//{} ?wd = aaa&cb = abc
	oS.src = options.url+'?'+arr.join('&');
	document.head.appendChild(oS);
}
