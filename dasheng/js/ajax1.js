function ajax(url, fnSucc, fnError){
	// 1.准备自己的ajax、创建对象
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	// 2、建立链接
	oAjax.open('GET', url, true);

	// 3、发送请求
	oAjax.send();

	// 4、接收数据
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				// alert('成功'+oAjax.responseText);
				fnSucc && fnSucc(oAjax.responseText);
			}else{
				fnError && fnError(oAjax.status);
			}
		}
	};
}