$(function(){
	/*图片移动*/
	$(".bx_left a img").hover(function(){
		$(this).stop().animate({"marginLeft":-13},300);
	},function(){
		$(this).stop().animate({"marginLeft":0},300);
	})
	
	/*漂浮通知*/
	$(document).scroll(function() {
    	$(".piaofu").animate({"top":250+document.documentElement.scrollTop},20);
	});
	
	/*打开通知弹出框*/
	$(".piaofu").click(function(){
		$(".tck").css("display","block");
		$(".tck0").css("display","block");
	})
	
	/*关闭通知弹出框*/
	$(".guanbi").click(function(){
		$(".tck").css("display","none");
		$(".tck0").css("display","none");
	})
	
	/*TOP排行榜*/
	$(".bx_ulli").hover(function(){
		$(this).children(".div1").hide().siblings(".yc_dl").show();
	},function(){
		$(this).children(".div1").show().siblings(".yc_dl").hide();
	})
	
	
})
