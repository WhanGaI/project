$(function(){
	var _index= 0;
	$(".xiaoyuandian li").click(function(){
		_index=$(this).index();
		$(this).addClass("dianji").siblings("li").removeClass("dianji");
		/*淡入淡出轮播图*/
		$(".my_lunbo li").eq(_index).fadeIn().siblings("li").hide();
	})
	
	/*封装自动轮播方法*/
	function lunbo(){
		zidong=setInterval(function(){
			_index++;
			if(_index>1){
				_index=0;
			}
			$(".xiaoyuandian li").eq(_index).addClass("dianji").siblings("li").removeClass("dianji");
			/*淡入淡出轮播图*/
			$(".my_lunbo li").eq(_index).fadeIn().siblings("li").hide();
		},2500)
	}
	lunbo();
	
	/*焦点进入与焦点离开*/
	$(".lunbo").mousemove(function(){
		clearInterval(zidong);
	})
	$(".lunbo").mouseout(function(){
		lunbo();
	})
})