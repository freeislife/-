var spanA = document.getElementsByClassName("spanA");
		for ( var i = 0 ; i < spanA.length ; i ++ ){
			spanA[i].index = i ;//记录按钮的下标
			spanA[i].onclick = function ( ) {	
				for ( var j =0 ; j < spanA.length ; j++  ){
					spanA[j] .style.backgroundColor = "white";
				}
		//设置点击的class样式
				this.style.backgroundColor = "rgb(255,227,209)";	
			}
		}
		//分页
		$(".tcdPageCode").createPage({
	        pageCount:10,
	        current:1,
	        backFn:function(p){
	            console.log(p);
	        }
   	 	});
   	 	//删除订单
   	 	$('.deleteDan').click(function () {
   	 		$(this).parent().parent().parent().parent().slideUp(function () {
   	 			$(this).remove();
   	 		});
   	 		$('.wrap_order').css('height','3000px');
   	 	});
   	 	//全部的点击事件
   	 	$('.spanA:eq('+0+')').click(function () {
   	 		$('.wrap_order').css('height','3250px');
   	 		$('.rightCon_order_ul1').slideDown();
   	 	});
//// 	 	待付款的点击事件
		$('.spanA:eq('+1+')').click(function () {
			YOU_AND_ME(0,2,3,4,5,6,7,8,9,1);
   	 		$('.wrap_order').css('height','700px');
   	 	});
   	 	//已付款显示待发货
   	 	$('.spanA:eq('+2+')').click(function () {
			YOU_AND_ME(0,1,3,4,5,6,7,8,9,2);
   	 		$('.wrap_order').css('height','700px');
   	 	});
   	 	//待收货的点击事件
   	 	$('.spanA:eq('+3+')').click(function () {
			YOU_AND_ME(0,1,2,4,5,6,7,8,9,3);
   	 		$('.wrap_order').css('height','700px');
   	 	});
   	 	//已发货的点击事件
   	 	$('.spanA:eq('+4+')').click(function () {
			YOU_AND_ME(0,1,2,3,5,6,7,8,9,4);
   	 		$('.wrap_order').css('height','700px');
   	 	});
   	 	//已收货的点击事件
   	 	$('.spanA:eq('+5+')').click(function () {
			YOU_AND_ME(0,1,2,4,3,6,7,8,9,5);
   	 		$('.wrap_order').css('height','700px');
   	 	});
   	 	//退款的点击事件  (包括退款中和申请退款)
   	 	$('.spanA:eq('+6+')').click(function () {
   	 		$('.rightCon_order_ul1:eq('+0+')').slideUp();
			$('.rightCon_order_ul1:eq('+1+')').slideUp();
			$('.rightCon_order_ul1:eq('+2+')').slideUp();
			$('.rightCon_order_ul1:eq('+3+')').slideUp();
			$('.rightCon_order_ul1:eq('+4+')').slideUp();
			$('.rightCon_order_ul1:eq('+5+')').slideUp();
			$('.rightCon_order_ul1:eq('+6+')').slideUp();
			$('.rightCon_order_ul1:eq('+9+')').slideDown();
			$('.rightCon_order_ul1:eq('+7+')').slideUp();
			$('.rightCon_order_ul1:eq('+8+')').slideDown();
   	 		$('.wrap_order').css('height','850px');
   	 	});
   	 	var tru1 = false;//记录第一个要删除订单的删除状态
   	 	var ScCon ;//记录被删除的内容
   	 	$('.deleteDan').each(function (i) {
   	 		$(this).click(function(){
   	 			tru1 = true;
   	 			
   	 		});
   	 		tru1 = false;
   	 	})
   	 	
   	 	//订单回收站的点击事件
   	 	$('.spanA:eq('+7+')').click(function () {
			$('.rightCon_order_ul1').slideUp();
			if (tru1 == true) {
				$('.kongOrder').hide();
				$('.rightCon_order_ul1:eq('+1+')').slideUp();
				$('.rightCon_order_ul1:eq('+2+')').slideUp();
				$('.rightCon_order_ul1:eq('+3+')').slideUp();
				$('.rightCon_order_ul1:eq('+4+')').slideUp();
				$('.rightCon_order_ul1:eq('+5+')').slideUp();
				$('.rightCon_order_ul1:eq('+6+')').slideUp();
				$('.rightCon_order_ul1:eq('+7+')').slideUp();
				$('.rightCon_order_ul1:eq('+8+')').slideUp();
				$('.rightCon_order_ul1:eq('+9+')').slideUp();
				$('.rightCon_order_ul1:eq('+0+')').slideDown();
				
				//改变其中的内容  orderLi_active
				$('.rightCon_order_ul1:eq('+0+') .orderLi_active').html('已删除');
				$('.rightCon_order_ul1:eq('+0+') .contRight_2 p:eq('+0+')' ).css('margin-top','120px');
				$('.rightCon_order_ul1:eq('+0+') .contRight_2 p:eq('+1+')' ).css('display','none');
				$('.rightCon_order_ul1:eq('+0+') .contRight_2 p:eq('+2+')' ).css('display','none');
				$('.wrap_order').css('height','700px');
			}else{
				$('.kongOrder').show();
				$('.wrap_order').css('height','600px');
			}
   	 	});
   	 	//谁显示谁隐藏的函数
   	 	function YOU_AND_ME (a,b,c,d,e,f,g,h,j,k) {
   	 		$('.rightCon_order_ul1:eq('+a+')').slideUp();
			$('.rightCon_order_ul1:eq('+b+')').slideUp();
			$('.rightCon_order_ul1:eq('+c+')').slideUp();
			$('.rightCon_order_ul1:eq('+d+')').slideUp();
			$('.rightCon_order_ul1:eq('+e+')').slideUp();
			$('.rightCon_order_ul1:eq('+f+')').slideUp();
			$('.rightCon_order_ul1:eq('+g+')').slideUp();
			$('.rightCon_order_ul1:eq('+h+')').slideUp();
			$('.rightCon_order_ul1:eq('+j+')').slideUp();
			$('.rightCon_order_ul1:eq('+k+')').slideDown();
   	 	}
   	 	
   	 	//引入的文件
   	 	$(document).ready(function () {
   	 		$('.left').load("my-Left.html");
   	 		$('.tou').load('toubu.html');
   	 		$('.wei').load('weibu.html');
   	 	}); 	 	