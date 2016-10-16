/**
 * Created by Administrator on 2016/10/15 0015.
 */
;(function(){
    function change(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
    }
    change();
    window.addEventListener('resize', change, false);
})();

document.addEventListener('DOMContentLoaded', function(){
    var oNews=document.querySelector('#news');
    var aDl=oNews.children;
    var oLoading=document.querySelector('#loding');

    var x=0;
    var y=0;
    var dir='';
    var iNow=0;
    oNews.addEventListener('touchstart', function(ev){
        var downX=ev.targetTouches[0].pageX;
        var downY=ev.targetTouches[0].pageY;
        var disX=downX-x;
        var disY=downY-y;


        oNews.style.transition='none';
        function fnMove(ev){
            if(dir){
                if(dir=='lr'){
                    x=ev.targetTouches[0].pageX-disX;
                    oNews.style.transform='translate3d('+x+'px, 0, 0)';
                }else if(dir=='bottom'){
                    y=ev.targetTouches[0].pageY-disY;

                    y>80 && (y=80);

                    oLoading.style.height=y+'px';


                }
            }else{
                if(Math.abs(ev.targetTouches[0].pageX-downX)>20){
                    dir='lr';
                }else if(Math.abs(ev.targetTouches[0].pageY-downY)>20){
                    dir='bottom';
                }
            }
        }
        function fnEnd(ev){
            document.removeEventListener('touchmove', fnMove, false);
            document.removeEventListener('touchend', fnEnd, false);

            if(dir=='lr'){
                var upX=ev.changedTouches[0].pageX;
                if(Math.abs(upX-downX)>50){
                    if(downX>upX){
                        iNow++;
                        if(iNow>=aDl.length)iNow=aDl.length-1;
                    }else{
                        iNow--;
                        if(iNow<0)iNow=0;
                    }
                }
                x=-iNow*aDl[0].offsetWidth;
                oNews.style.transition='.4s all ease';
                oNews.style.transform='translate3d('+x+'px, 0, 0)';
            }else if(dir=='bottom'){

                oLoading.style.transition='.4s all ease';
                oLoading.style.height=0;

                //以下为下拉刷新交互
                if(oLoading.offsetHeight==80){
                    var oDl = document.getElementById('news_roller');

                    function show(){
                        ajax('list.data',function(str){
                            var arr = eval('('+str+')');
                            arr.sort(function(){
                                return Math.random()-0.5;
                            });
                            for(var i=0; i<4; i++){
                                var oDd = document.createElement('dd');
                                oDd.innerHTML = '<h4><a href="'+arr[i].href+'">'+arr[i].title+'</a><span></span><li class="information">{{user}}</li><li class="information">'+arr[i].num+'</li><li class="information">{{time}}</li></h4><img src="'+arr[i].src+ '" />';
                                oDl.insertBefore(oDd,oDl.children[1]);
                            }
                        },function(){
                            alert('error');
                        })
                    }
                    show();


                }
            }

            dir='';
        }
        document.addEventListener('touchmove', fnMove, false);
        document.addEventListener('touchend', fnEnd, false);
    }, false);



}, false);






