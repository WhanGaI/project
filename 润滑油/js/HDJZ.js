$(function(){
	$(".st0301 li").click(function(){
		var _index = $(this).index();

		$(this).addClass("xxz").siblings().removeClass("xxz");
//		$(this).addClass("xxz2").siblings().removeClass("xxz2");
		$('.st0302 div').eq(_index).addClass('xxz2').siblings().removeClass('xxz2');

	})
	
	
})
