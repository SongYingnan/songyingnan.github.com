//var json={
//	act:'add',
//	user:oUser.value,
//	pass:oPass.value,
//}
//user.php?act=xxx&user=用户名&pass=密码

function jsonStr(json){
	var arr=[];
	json.t=Math.random();
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}

function ajax(url,data,fnSucc, fnFaild)
{
	//1.创建Ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//2.连接服务器（打开和服务器的连接）
	oAjax.open('GET', url+'?'+jsonStr(data), true);
	
	
	//3.发送
	oAjax.send();
	
	//4.接收
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				//alert('成功了：'+oAjax.responseText);
				fnSucc && fnSucc(oAjax.responseText);
			}
			else
			{
				//alert('失败了');
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
}