$(".nav>li").click(function  () {
	$(".nav>li").css("border","");
	$(this).css("border","none");
	$(this).css("border-top","2px solid rgb(0,139,221)");
	$("this>a").css("color","rgb(0,139,221)");
})
$(".nav>li>a").click(function  () {
	$(".nav>li>a").css("color","");
	$(this).css("color","rgb(0,139,221)");
})