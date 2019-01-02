$(function(){
	//全选
	$(".qx1 input,.tr11_an").click(function(){
//		alert(1);
		$(".www input").attr("checked",this.checked);
		//加背景色
		if(this.checked == true){
			$(".tr00").css("background","#DFDFDF");
		}else{
			$(".tr00").css("background","");
		}
		
	})
	
	//删除选中商品
	$(".tr11_sc").click(function(){
		$(".www input").each(function(){
			if(this.checked == true){
				$(this).parents(".tr00").remove();
			}
		})
	})
	
	//清空购物车
	$(".qx2 input").click(function(){
//		alert(1)
		$(".BG_table").detach();  //detach()  分离
	})
	
	//删除单一商品
	$(".tr00 td a").click(function(){
		$(this).parents(".tr00").remove();
	})
	
	
	//添加背景色
	$(".www input").click(function(){
		if(this.checked == true){
			$(this).parents(".tr00").css("background","#DFDFDF");
		}else{
			$(this).parents(".tr00").css("background","");
		}
	})
	
	//增加数量
//	$("#jia").click(function(){
//		alert(1)
		
//	})
})