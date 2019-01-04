$(function(){
	$("#dui").click(function(){
    	$("#dui>img").toggle();
	});
	
	$('#uers1').blur(function(){
        var username = $(this).val();
        var zz = {mobile: /^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/ };
        if(!zz.mobile.test(username)){
            alert('输入错误，请重新输入！');
        }
   });
   
    $('#uers2').blur(function(){
	    var username = $(this).val();
	    var zz = {mobile: /^[a-zA-Z]\w{5,7}$/ };
	    if(!zz.mobile.test(username)){
	        alert('以字母开头,长度在6-8之间,只能包含字符、数字和下划线,请重新输入！');
	    }
    });
   
//  $('#tiaozhuan').click(function(){
//  	if(!zz.mobile.test(username)){
//  		window.location.href="";
//  	}else{
//  		window.location.href="www.baidu.com";
//  	}
//  })
    
//  $.ajax(function(){
//		type:"POST",
//		url:"",//请求页面
//		data:"{id=tiaozhuan}",
//		complete:function(){location.href ="www.baidu.com"}//跳转页面
//	})
})
