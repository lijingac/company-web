function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload!='function'){
         window.onload=func;   
        }else{
        window.onload=function(){
              oldonload();
              func();   
            }
    }
}
addLoadEvent(goto_top);
addLoadEvent(autochange);


/*-------------------------------------------------------------------------------------------*/
//回到顶部
function goto_top(){
	//回到顶部按钮
    var obtn = document.getElementById('btn');
    var timer = null;
    var isTop = true;
    var clientHeight= document.documentElement.clientHeight || document.body.clientHeight;
      
	obtn.onclick = function(){
		
		//设置定时器
		timer = setInterval(function(){
			//获取滚动条距离顶部的高度
			var osTop=document.documentElement.scrollTop || document.body.scrollTop;
            if (osTop >= clientHeight){
    		 //显示按钮
    		obtn.style.dispaly="block";
			}else {
				//隐藏按钮
				obtn.style.dispaly="none";
			}
			if (!isTop){
				clearInterval(timer);
			}
			isTop = false;
		
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;
			isTop = true;
			if (osTop == 0){
				clearInterval(timer);
			}
		},30);
	}
}	


function autochange () {
/*-----------------------------------------------------------*/
//焦点图切换

    var ad=document.getElementById('ad'),
        ad_pic=document.getElementById('ad_pic'),
        ad_pics=ad_pic.getElementsByTagName('li'),
        ad_list=document.getElementById('ad_list').getElementsByTagName('li'),
        index=0,
        ad_timer=null;

      // 定义并调用自动播放函数
      ad_timer=setInterval(autoplay,2000);
      function autoplay(){
      	index++;
     	if (index>=ad_pics.length) {
     		index=0;
     	};
     	changepic(index);
      }
      // 定义图片切换函数
     function changepic(currindex){
     	for (var j = 0; j < ad_pics.length; j++) {
     		ad_pics[j].style.display="none";
     		ad_list[j].className="";
     	};
     	ad_list[currindex].className="on";
     	ad_pics[currindex].style.display="";
     	index=currindex;
     }
     
     // 鼠标划过整个容器时停止自动播放
     ad.onmouseover=function  () {
     	clearInterval(ad_timer);
     }
 
     // 鼠标离开整个容器时继续播放至下一张
     ad.onmouseout=function(){
     	ad_timer=setInterval(autoplay,2000);
     }
     // 遍历所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < ad_pics.length; i++) {
     	ad_list[i].id=i;
	    ad_list[i].onclick=function(){
	     	changepic(this.id);
	    }
 	};

}


