/**
 * Created by Administrator on 2016/10/15 0015.
 */
window.onload=function ()
{
    var oTxt=document.getElementById('txt1');
    var oUl=document.getElementById('ul1');
    var oScript=null;

    oTxt.onkeyup=function ()
    {
        if(oScript)
        {
            document.body.removeChild(oScript);
        }

        oScript=document.createElement('script');

        oScript.type='text/javascript';
        oScript.src='http://suggestion.baidu.com/su?wd='+encodeURI(oTxt.value)+'&cb=mySucc&t='+new Date().getTime();

        document.body.appendChild(oScript);
    };

    window.mySucc=function (json)
    {
        var w=json.q;
        var arr=json.s;
        var oUl=document.getElementById('ul1');

        if(arr.length)
        {
            oUl.style.display='block';
            oUl.innerHTML='';

            for(var i=0;i<arr.length;i++)
            {
                var oLi=document.createElement('li');

                oLi.innerHTML=arr[i].replace(new RegExp(w, 'ig'), '<strong>'+w+'</strong>');

                oLi.onmouseover=function ()
                {
                    this.style.background='#EEE';
                };
                oLi.onmouseout=function ()
                {
                    this.style.background='';
                };

                oUl.appendChild(oLi);
            }
        }
        else
        {
            oUl.style.display='none';
        }
    }
};
