$('.fenlei_img').rotate(180);
$(".SJ").click(function() {
	$(".SJ").css("background-color", "rgb(0,140,221)");
	$(".SP").css("background-color", "white");
	$(".div1").show();
	$(".div2").hide();
})
$(".SP").click(function() {
	$(".SP").css("background-color", "rgb(0,140,221)");
	$(".SJ").css("background-color", "white");
	$(".div1").hide();
	$(".div2").show();
})

//下拉菜单
$('.xiala a').mouseenter(function() {
	$('.yiru').hide();
	$('.yiru' + $(this).index()).show();
});
var bol = false;
$('.henYeFenLei').mouseenter(function() {
	$('#lalal').slideDown();
	//图片旋转
	$('.fenlei_img').rotate(0);
});
$('#lalal').mouseleave(function() {
	$('#lalal').slideUp();
	$('.yiru').hide();
	//图片旋转
	$('.fenlei_img').rotate(180);
});

//换城市
$('.city').text(localStorage.nowCity);
$(".head_left").click(function() {
	window.location.href = "city.html";
});
//点击左上角易和生活港跳转首页
$(".search_left").click(function() {
	window.location.href = "index.html";
})

//点击登录,判断是否已经被登录
if(localStorage.nowPhone) { //已登录
	$('.login_a').html('您好,' + localStorage.nowPhone + '<span class="tou_Tuichu"> 退出</span>');
	$('.shopping_xinxi').show();
	$('.shopping_num_xinxi').text(localStorage.carCont);
} else {
	$('.login_a').html('<span class="log" onclick="log_click()">登录</span>');
	$('.shopping_xinxi').hide();
}
//点击登录
function log_click() {
	window.location.href = 'login.html';
}
//点击退出
$('.tou_Tuichu').click(function() {
	var con = confirm('确认退出吗？'); //弹出确认框
	if(con) {
		$('.login_a').html('<span class="log" onclick="log_click()">登录</span>');
		localStorage.removeItem('nowPhone');
		$('.shopping_xinxi').hide();
	}
});
//输入框中输入内容,动态获取百度接口内容
$('.INP').on('input',function () {
//	var urls = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+ $('.INP').val() +"&cb=callback"; //百度API
	var urls = "https://suggest.taobao.com/sug?code=utf-8&q="+$('.INP').val()+"&_ksTS=1480133657762_877&callback=callback&k=1&area=c2c&bucketid=3";
	var scri = document.createElement("script");
	scri.src = urls;//添加属性
	document.getElementsByTagName("head")[0].appendChild(scri);//将scri追加到head中
	//只需要请求到数据就可以删除了
	scri.remove();
});
function callback(json) {
	//json  是得到的数据
	//console.log(json);
	var arr = json.result;
	var html = '';
	for(var i = 0; i < arr.length; i++) {
		html += '<li onclick="liClick(this)">' + arr[i][0] + '</li>';
	}
	$('.baidu_res').html(html);
	$('.baidu_ul_div').slideDown();
	if ($('.INP').val() == '') {
		$('.baidu_ul_div').hide();
	}
};
function liClick (a) {
	$('.INP').val($(a).text());
	$('.baidu_ul_div').slideUp();
}
//点击购物和个人中心
$('.index_shopping111').click(function () {
	if (!localStorage.nowPhone) {//判断是否被登录
		alert('您还没有登录,请登录后重试!');
	}else{
		window.location.href = 'shoppingCar.html';
	}
});
$('.index_wode111').click(function () {
	if (!localStorage.nowPhone) {
		alert('您还没有登录,请登录后重试!');
	}else{
		window.location.href = 'my-account.html';
	}
});
//点击搜索
$('.but').click(function () {
	if ($('.INP').val().indexOf('海澜') == -1) { //不对则跳转到搜索为空
		window.location.href = 'searchKong.html';
	} else{ //跳转至海澜之家
//		alert(1)
		window.location.href = '商家.html';
	}
});