$(function(){
	$(".footer_ul li:last").css('borderRight','none');
	$("#uers1").focus(function(){
		$(".zh").html('请输入账号！');
	})
	$("#uers2").focus(function(){
		$(".mm").html('请输入密码！');
	})
	$('#uers1').blur(function(){
        var username = $(this).val();
        var zz = {mobile: /^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/ };
        if(!zz.mobile.test(username)){
            $(".zh").html('输入错误，请重新输入！');
        }else{
        	$(".zh").html('');
        }
   });
   
    $('#uers2').blur(function(){
	    var username = $(this).val();
	    var zz = {mobile: /^[a-zA-Z]\w{5,7}$/ };
	    if(!zz.mobile.test(username)){
	    	 $(".mm").html('请重新输入，以字母开头，6-8位！');
	    }else{
        	$(".mm").html('');
        }
	});
})