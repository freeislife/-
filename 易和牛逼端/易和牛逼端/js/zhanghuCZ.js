
//获取当前时间
var nowTime = new Date();
var year = nowTime.getFullYear();
var month = nowTime.getMonth() + 1;
var day = nowTime.getDate();
var hour = nowTime.getHours();
var minter = nowTime.getMinutes();
var second = nowTime.getSeconds();
var time = year + "-" + month + "-" + day + " " + hour + ":" + minter + ":" + second;
var obj = {}; //创建一个空对象用来存储数据
obj.yu1e = [];
obj.jine = [];
obj.time = [];
obj.zonge = [];

$(".tcdPageCode").createPage({
	pageCount: 10,
	current: 1,
	backFn: function(p) {
	console.log(p);//p是当前页数
		if (p == 1) {
			obj = JSON.parse(localStorage.obj);
			for (var i = 10; i < obj.yu1e.length; i++) {
				$('.my-accointYuE_2_ul li:eq('+i+')').slideUp();
			}
			for(var i = 0; i <= 9; i++) {
				$('.my-accointYuE_2_ul li:eq('+i+')').slideDown();
			}
			$(".yu_e").html(obj.zonge[obj.zonge.length - 1]);
		} else if (p == 2) {
			obj = JSON.parse(localStorage.obj);
			for (var i = 0; i <= 9; i++) {
				$('.my-accointYuE_2_ul li:eq('+i+')').slideUp();
			}
			for(var i = 10; i < obj.yu1e.length; i++) {
				$('.my-accointYuE_2_ul li:eq('+i+')').slideDown();
			}
			$(".yu_e").html(obj.zonge[obj.zonge.length - 1]);
		} else {
			for (var i = 1; i <= obj.yu1e.length; i++) {
				$('.my-accointYuE_2_ul li:eq('+i+')').slideUp();
			}
		}
	}
});

//先判断数据库中是否有数据  有则打印
if(localStorage.obj) {
	obj = JSON.parse(localStorage.obj);
	if ( obj.yu1e.length <= 9) {
		for(var i = 0; i < obj.yu1e.length; i++) {
			var conT = '<li><p>' + obj.time[i] + '</p><p class="ppp1" >123123123123123</p><p class="ppp2">' + obj.jine[i] + '</p><p>' + obj.zonge[i] + '</p></li>';
			$('.my-accointYuE_2_ul').prepend(conT);
		}
	}
	if (obj.yu1e.length > 9) {
		for(var i = 0; i <= 9; i++) {
			var conT = '<li><p>' + obj.time[i] + '</p><p class="ppp1" >123123123123123</p><p class="ppp2">' + obj.jine[i] + '</p><p>' + obj.zonge[i] + '</p></li>';
			$('.my-accointYuE_2_ul').prepend(conT);
		}
		for(var i = 10; i < obj.yu1e.length; i++) {
			var conT = '<li><p>' + obj.time[i] + '</p><p class="ppp1" >123123123123123</p><p class="ppp2">' + obj.jine[i] + '</p><p>' + obj.zonge[i] + '</p></li>';
			$('.my-accointYuE_2_ul').prepend(conT);
			$('.my-accointYuE_2_ul li:eq('+i+')').hide();
		}
	}
	$(".yu_e").html(obj.zonge[obj.zonge.length-1]);
}
//点击充值
$(".my-accointYuE_1_inp").click(function() {
	//头部和尾部隐藏
	$('.toubu').hide();
	$('.wei').hide();
	
	if($(".jin_e").val() == "" || $(".jin_e").val() == "0") {
		return alert("请充值!");
	} else {
		//跳转到充值页面
		$('.wrap_my-accointYuE').hide();
		$('.zuida').show();
		$('body').css('backgroundColor','rgb(255,255,255)');
		//将填写的数据添加到数据库中
		var yu_e = Number($(".yu_e").html());
		var jin_e = Number($(".jin_e").val());
		obj.jine.push(jin_e);
		var zong = yu_e + jin_e;
		obj.zonge.push(zong);
		obj.yu1e.push(zong);
		obj.time.push(time);
		var str = JSON.stringify(obj);
		localStorage.obj = str;
		str = localStorage.obj;
		obj = JSON.parse(str);

		
		
		
		var conT = '<li><p>' + time + '</p><p class="ppp1" >123123123123123</p><p class="ppp2">' + jin_e + '</p><p>' + zong + '</p></li>';
		$('.my-accointYuE_2_ul').prepend(conT);
		$(".yu_e").html(zong);
	}
	$('.fujin_e').html(obj.jine[obj.jine.length-1]);
});

		//立即支付的点击事件   充值完成弹出一个弹出框 显示充值成功 设置一个延时器 5秒后回到账户充值页面
		$('.inp_zhiF').click(function () {
			
			$('.alert').show();
			var a = 0 ;
			var b;
			$('.miao').html(3);
			var timer = setInterval(function () {
				a++;
				b = 3 - a ;
				if (a == 3) {
					a = 0;
					$('.alert').hide();
					$('body').css('backgroundColor','rgb(234,234,234)');
					$('.zuida').hide();
					$('.wrap_my-accointYuE').show();
					$('.toubu').show();
					$('.wei').show();
					clearInterval(timer);
				}
				$('.miao').html(b);
			},1000);
				//清空输入框中的值
			$(".jin_e").val("");
		});
//		localStorage.removeItem('obj');//清空本地储存
