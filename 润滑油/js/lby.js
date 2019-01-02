$(function(){
	//排序
	$(".st03_ul li:last").css('borderRight','none');
	$(".st03_ul li:eq(1)").css("background","#005BAC");
	$(".st03_ul li a:eq(0)").css("color","#FFFFFF");
		
	$(".st03_ul li:not(:first)").hover(function(){
		//:not(:first) 去除一个事件
		$(this).css("background","#005BAC");
		$(this).children("a").css("color","#FFFFFF");
	},function(){
		$(this).css("background","#FFFFFF");
		$(this).children("a").css("color","#666");
	})
})
