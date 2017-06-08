
//鼠标移入精选品牌中的品牌边框出现颜色
$('.body_second_ad_block_right li').mouseenter(function () {
	$('.body_second_ad_block_right li').css('border', '1px solid #E4E4E4');
	$(this).css('border', '2px solid rgb(247,115,52)');
});

//滑块跟随鼠标移动
//模块1
$('#mokuai1 li').mouseenter(function () {
	$('.body_ad_block_right1').css('display','none');
	$('.body_ad_line:eq(0)').animate({
		left:326+$(this).index()*122,
	});
	$('.body_ad_block_right1:eq('+ $(this).index() +')').css('display','block');
});
//模块2
$('#mokuai2 li').mouseenter(function () {
	$('.body_ad_block_right2').css('display','none');
	$('.body_ad_line:eq(1)').animate({
		left:326+$(this).index()*122,
	});
	$('.body_ad_block_right2:eq('+ $(this).index() +')').css('display','block');
});
//模块3
$('#mokuai3 li').mouseenter(function () {
	$('.body_ad_block_right3').css('display','none');
	$('.body_ad_line:eq(2)').animate({
		left:326+$(this).index()*122,
	});
	$('.body_ad_block_right3:eq('+ $(this).index() +')').css('display','block');
});
//模块4
$('#mokuai4 li').mouseenter(function () {
	$('.body_ad_block_right4').css('display','none');
	$('.body_ad_line:eq(3)').animate({
		left:326+$(this).index()*122,
	});
	$('.body_ad_block_right4:eq('+ $(this).index() +')').css('display','block');
});

$('.list_style li').mouseenter(function () {
	$('.list_style li').css('backgroundColor','white');
	$('.qiche_div p').css('height','0px');
	$(this).css('backgroundColor','rgb(238,238,238)');
	
	$('.qiche_div0 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div1 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div2 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div3 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div4 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div5 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div6 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div7 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div8 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div9 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div10 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
	
	$('.qiche_div11 p:eq(' + $(this).index() + ')').animate({
		height:30,
	});
});
$('.list_style li').mouseleave (function () {
	$('.qiche_div p').css('height','0px');
});

//if ($('body').scrollTop>800) {
//	
//}

//边上的楼层会到顶部
	setInterval(function () {
		var SS = $("body").scrollTop();
		console.log(SS);
		if (SS>499 && SS<3709) {
			$(".LYL_gundongtiao").show();
		}else{
			$(".LYL_gundongtiao").hide();
		}
	},1);
	$(".louceng > li").click(function () {
	var x = $(this).index()*800+500;
	if ($(this).index()==5) {
		$("body").animate({
		'scrollTop':0});
	}else if($(this).index()==6){
		$("body").animate({
		'scrollTop':5000
		});
	}else{
		$("body").animate({
		'scrollTop':x
	})
	}
});

