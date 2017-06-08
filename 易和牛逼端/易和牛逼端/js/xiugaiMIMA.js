//手机号码的正则表达式函数
function checkPhone() {
	var phone = $('#tel').val();
	var reg = /^1[34578]\d{9}$/; //手机号码的正则
	if(!reg.test(phone)) { //手机号码格式错误
		$('.rel_li1:eq(0) img').hide();
		$('#noPhone').html('手机号码格式有误,请重新输入');
		$('.rel_tishi:eq(0)').css('visibility', 'inherit');
		$('#tel').val('');
	} else { //手机号码格式正确
		$('.rel_li1:eq(0) img').show();
		$('.rel_tishi:eq(0)').css('visibility', 'hidden');
	}
}

//密码的正则表达式函数
function checkPsd() {
	var psd = $('#psd').val();
	var reg = /^[0-9a-zA-Z]{6,20}$/g; //密码的正则
	if(!reg.test(psd)) {
		$('.rel_li1:eq(1) img').hide();
		$('#yesOrNoPsd').html('密码不正确,请重新输入');
		$('.rel_tishi:eq(1)').css('visibility', 'inherit');
		$('#psd').val('');
	} else {
		$('.rel_li1:eq(1) img').show();
		$('.rel_tishi:eq(1)').css('visibility', 'hidden');
	}
}

//确认密码是否正确函数
function againPsd() {
	var psd = $('#psd').val();
	var qurrenPsd = $('#psdAggin').val();
	if(psd != qurrenPsd) {
		$('.rel_li1:eq(2) img').hide();
		$('#again').html('两次密码输入不一致,请确认');
		$('.rel_tishi:eq(2)').css('visibility', 'inherit');
		$('#psdAggin').val('');
	} else {
		if (qurrenPsd == '') {
			$('.rel_li1:eq(2) img').hide();
			$('#again').html('请确认密码');
			$('.rel_tishi:eq(2)').css('visibility', 'inherit');
			$('#psdAggin').val('');
			return;
		}
		$('.rel_li1:eq(2) img').show();
		$('.rel_tishi:eq(2)').css('visibility', 'hidden');
	}
}

//随机验证码函数 0-10的随机数
function randomYZ () {
	var num1 = Math.floor(Math.random()*10);
	var num2 = Math.floor(Math.random()*10);
	var num3 = Math.floor(Math.random()*10);
	var num4 = Math.floor(Math.random()*10);
	var str = num1 + ' ' + num2 + ' ' + num3 + ' ' + num4;
	return str; //四位数验证码
}

//随机手机验证码
function randomPhoneYZ () {
	var num1 = Math.floor(Math.random()*10);
	var num2 = Math.floor(Math.random()*10);
	var num3 = Math.floor(Math.random()*10);
	var num4 = Math.floor(Math.random()*10);
	var num5 = Math.floor(Math.random()*10);
	var num6 = Math.floor(Math.random()*10);
	var str1 = num1 + '' + num2 + '' + num3 + '' + num4 +'' + num5 + '' + num6;
	return str1; //六位数手机验证码
}

//字符串去空格 
function cancelSpace (s) {
	var reg = /\s/g;
	var str = s.replace(reg,"");
	return str;
}
//点击 看不清换一张 按钮
$('#rel_kanbuq').click(chongzhiYZ);
function chongzhiYZ () {
	$('#code').val('');
	$('.rel_yanzhengma img').hide();
	//randomYZ()  这个函数返回的是四位随机数
	var yzNum = randomYZ()
	$('.rel_yanz_span').text(yzNum);
	//验证码去空格并存到本地
	localStorage.relYanzhenStr = cancelSpace(yzNum);
}

localStorage.relYanzhenStr = randomYZ ();
$('.rel_yanz_span').text(localStorage.relYanzhenStr);//验证码显示在页面上

//判断验证码
$('#code').blur(function  () { 
	var yanzShuRu = $('#code').val();
	//alert(yanzShuRu);
	if (yanzShuRu == cancelSpace(localStorage.relYanzhenStr)) { //验证码正确
		$('.rel_yanzhengma img').show();
		$('.rel_tishi:eq(3)').css('visibility', 'hidden');
	} else{ //验证码错误
		$('.rel_yanzhengma img').hide();
		$('#yanzhengma').text('验证码错误,请重试');
		$('.rel_tishi:eq(3)').css('visibility', 'inherit');
		$('#code').val('');
	}
});

//判断手机验证码
//点击获取验证码
var timer;
var phoneYZ = '';
$('#rel_huoqu').click(function () {
	//按钮内容改变
	$('#rel_huoqu').html('<span id="atherTime">60</span>s 重新获取')
	//改变按钮状态为不可选
	$('#rel_huoqu').attr('disabled','true');

	//定时器,按钮内容改变
	var shijian = 60;
	timer = setInterval(function () {
		shijian--;
		$('#atherTime').text(shijian);
		if (shijian == 0) {
			clearInterval(timer);
			//按钮可点并且内容改变
			$('#rel_huoqu').removeAttr('disabled')
			$('#rel_huoqu').text('获取验证码');
		}
	},1000);
	
	phoneYZ = randomPhoneYZ();//弹出的验证码
	//验证码存到cookie
	addCookie('phoneCode', phoneYZ, 60);//时效为1分钟
	//延迟3s获得验证码
	setTimeout(function () {
		alert(phoneYZ);
	},3000);
	
});
$('#phoneCode').blur(function () {
	$('.rel_tishi:eq(2)').css('visibility', 'hidden');
});

$('#tel').blur(checkPhone); //判断手机号
$('#tel').focus(function () {
	$('.rel_li1:eq(0) img').hide();
});
$('#psd').blur(checkPsd); //判断密码
$('#psd').focus(function () {
	$('.rel_li1:eq(1) img').hide();
});
$('#psdAggin').blur(againPsd); //判断确认密码
$('#psdAggin').focus(function () {
	$('.rel_li1:eq(2) img').hide();
});

//点击提交修改
$('.xiugai_sub').click(function () {
	var phone = $('#tel').val();//手机号
	var psd = $('#psd').val();//密码
	var qurrenPsd = $('#psdAggin').val();//确认密码
	var yanzShuRu = $('#code').val(); //验证码
	var phoneCodeShuRu = $('#phoneCode').val(); //手机验证码
	if (phone == '') {
		$('#noPhone').html('请输入手机号');
		$('.rel_tishi:eq(0)').css('visibility', 'inherit');
	}
	else if (psd == '') {
		$('#yesOrNoPsd').html('请输入密码');
		$('.rel_tishi:eq(1)').css('visibility', 'inherit');
	}
	else if (qurrenPsd == '') {
		$('#again').html('请输入密码');
		$('.rel_tishi:eq(2)').css('visibility', 'inherit');
	}
	else if (yanzShuRu == '') {
		$('#code').html('请输入密码');
		$('.rel_tishi:eq(3)').css('visibility', 'inherit');
	}
	else if (phoneCodeShuRu == '' || phoneCodeShuRu !== getCookie('phoneCode')) {
		$('#rel_phone_yz').html('请输入正确的手机验证码');
		$('.rel_tishi:eq(4)').css('visibility', 'inherit');
	} else {
		//修改密码
		tijiaoPsd ();
	}
});
//修改密码的方法
function tijiaoPsd () {
	var phone = $('#tel').val();
	if (phone == localStorage.nowPhone) {
		var index;
		//查找数据库中的密码 得到对应手机号的密码下标
		var uesrsArr = []; //存储用户名(手机号)的数组
		uesrsArr = localStorage.relUserName.split("|");//得到所有手机号存进数组
		for(var i in uesrsArr){
			if (phone == uesrsArr[i]) {
				$('#tel').val('');
				index = i; //该号码是数组中的第i个元素(需要修改数组中的此号码);
			}
		}
		var psd = $('#psd').val();//修改后的密码
		var psdArr = []; //存储密码的数组
		psdArr = localStorage.relPassWord.split("|");//得到所有密码存进数组
		//alert(index);
		psdArr[index] = psd;
		//alert(uesrsArr);
		var psdStr = psdArr.join('|');//改变后的数组转化为字符串
		//存到本地
		localStorage.relPassWord = psdStr; //修改成功
		
		//修改成功
		$('.tiaozhuan_title').html('恭喜您成功修改&nbsp; 请重新<a href="login.html">登录</a>');
		$('.tiaozhuan_cont').css({
			transform: 'scale(1,1)',
			transition:'all 0.5s ease-out',
		});
		//定时器 倒数时间 实现跳转
		var x = 1;
		var times = setInterval(function () {
			x--;
			if (x == 0) {
				clearInterval(times);
				//跳转
				window.location.href = 'login.html';
			}
		},1000);
		
	} else {
		//alert('您输入的手机号有误,请重试!');
		//修改失败
		$('.tiaozhuan_title').html('您输入的手机号有误,请重试!');
		$('.tiaozhuan_cont').css({
			transform: 'scale(1,1)',
			transition:'all 0.5s ease-out',
		});
		//定时器 倒数时间 
		var x = 1;
		var times = setInterval(function () {
			x--;
			if (x == 0) {
				$('.tiaozhuan_cont').css({
					transform: 'scale(0,0)',
					transition:'all 0.5s ease-out',
				});
			}
		},1000);
	}
}
