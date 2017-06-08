$(".nav li a").click(function  () {
	$(".nav li a").css("border","");
	$(".nav li a").css("color","");
	$(this).css("border-top","2px solid rgb(1,141,240)");
	$(this).css("color","rgb(1,141,240)");
})
$(".ul1:eq(0) >li").click(function  () {
	var t = $(".ul1:eq(0) >li").index($(this));
	$(".ul1 li").css("border","");
	$(".bigimg:eq(0)").height(0);
	$(this).css("border","2px solid rgb(244,107,43)");
	$(".bigimg:eq(0)").attr("src","img/fangda/p0"+ t +".jpg");
	$(".bigimg:eq(0)").animate({
		'height':250,
	})
})

//for (var i = 0;i < $(".ul1").length;i++) {
//	$(".ul1>li").click(function  () {
//		for (var j = 0;j < $('.ul1').length;j++) {
//			if (this) {
////				alert(j);
//				var t = $(".ul1:eq(" + j + ") >li").index($(this));
//				$(".ul1 li").css("border","");
//				$(".bigimg:eq(" + j + ")").height(0);
//				$(this).css("border","2px solid rgb(244,107,43)");
//				$(".bigimg:eq(" + j + ")").attr("src","img/fangda/p0"+ t +".jpg");
//				$(".bigimg:eq(" + j + ")").animate({
//					'height':250,
//				})
//			}
//		}
//	});
//	$(".bigimg:eq(" + i + ")").click(function () {
//		$(".bigimg:eq(" + i + ")").animate({
//			'height':0,
//		})
//	}
//	);
//}


$(".bigimg:eq(0)").click(function () {
	$(".bigimg:eq(0)").animate({
		'height':0,
	})
});
$(".ul1:eq(1) >li").click(function  () {
	var t = $(".ul1:eq(1) >li").index($(this));
	$(".ul1 li").css("border","");
	$(".bigimg:eq(1)").height(0);
	$(this).css("border","2px solid rgb(244,107,43)");
	$(".bigimg:eq(1)").attr("src","img/fangda/p0"+ t +".jpg");
	$(".bigimg:eq(1)").animate({
		'height':250,
	})
})
$(".bigimg:eq(1)").click(function () {
	$(".bigimg:eq(1)").animate({
		'height':0,
	})
});
$(".ul1:eq(2) >li").click(function  () {
	var t = $(".ul1:eq(2) >li").index($(this));
	$(".ul1 li").css("border","");
	$(".bigimg:eq(2)").height(0);
	$(this).css("border","2px solid rgb(244,107,43)");
	$(".bigimg:eq(2)").attr("src","img/fangda/p0"+ t +".jpg");
	$(".bigimg:eq(2)").animate({
		'height':250,
	})
})
$(".bigimg:eq(2)").click(function () {
	$(".bigimg:eq(2)").animate({
		'height':0,
	})
});
$(".ul1:eq(3) >li").click(function  () {
	var t = $(".ul1:eq(3) >li").index($(this));
	$(".ul1 li").css("border","");
	$(".bigimg:eq(3)").height(0);
	$(this).css("border","2px solid rgb(244,107,43)");
	$(".bigimg:eq(3)").attr("src","img/fangda/p0"+ t +".jpg");
	$(".bigimg:eq(3)").animate({
		'height':250,
	})
})
$(".bigimg:eq(3)").click(function () {
	$(".bigimg:eq(3)").animate({
		'height':0,
	})
});
$(".ul1:eq(4) >li").click(function  () {
	var t = $(".ul1:eq(4) >li").index($(this));
	$(".ul1 li").css("border","");
	$(".bigimg:eq(4)").height(0);
	$(this).css("border","2px solid rgb(244,107,43)");
	$(".bigimg:eq(4)").attr("src","img/fangda/p0"+ t +".jpg");
	$(".bigimg:eq(4)").animate({
		'height':250,
	})
})
$(".bigimg:eq(4)").click(function () {
	$(".bigimg:eq(4)").animate({
		'height':0,
	})
});
