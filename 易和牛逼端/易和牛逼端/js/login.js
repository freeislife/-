//localStorage.removeItem('relUserName');//清空电话号码的本地储存
//localStorage.removeItem('relPassWord');//清空密码的本地储存

//点击切换登录方式
var loginFangShiBool = false;//记录登录方式 false代表账号密码登录
$('.login_choose_span').click(function () {
	loginFangShiBool = !loginFangShiBool;
	if (loginFangShiBool) { //true代表手机验证码登录
		$('.login_choose_span').html('账号密码登录 <img src="img/2lo.png"/>');
		$('.rel_phoneyanzhen').slideDown();
		$('.rel_tishi:eq(3)').slideDown();
		$('.rel_li1:eq(1)').slideUp();
		$('.rel_tishi:eq(1)').slideUp();
	} else{
		$('.login_choose_span').html('手机验证码登录 <img src="img/iPhonePotrait.png"/>');
		$('.rel_phoneyanzhen').slideUp();
		$('.rel_tishi:eq(3)').slideUp();
		$('.rel_li1:eq(1)').slideDown();
		$('.rel_tishi:eq(1)').slideDown();
	}
	
});


//手机号码的正则表达式函数
function checkPhone() {
	var phone = $('#tel').val();
	var reg = /^1[34578]\d{9}$/; //手机号码的正则
	if(!reg.test(phone)) { //手机号码格式错误
		$('.rel_li1:eq(0) img').hide();
		$('#noPhone').html('手机号码不正确,请重新输入');
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
$('#rel_kanbuq').click(function () {
	$('#code').val('');
	$('.rel_yanzhengma img').hide();
	//randomYZ()  这个函数返回的是四位随机数
	var yzNum = randomYZ()
	$('.rel_yanz_span').text(yzNum);
	//验证码去空格并存到本地
	localStorage.relYanzhenStr = cancelSpace(yzNum);
});
localStorage.relYanzhenStr = randomYZ ();
$('.rel_yanz_span').text(localStorage.relYanzhenStr);//验证码显示在页面上

//判断验证码
$('#code').blur(function  () { 
	var yanzShuRu = $('#code').val();
	//alert(yanzShuRu);
	if (yanzShuRu == cancelSpace(localStorage.relYanzhenStr)) { //验证码正确
		$('.rel_yanzhengma img').show();
		$('.rel_tishi:eq(2)').css('visibility', 'hidden');
	} else{ //验证码错误
		$('.rel_yanzhengma img').hide();
		$('#yanzhengma').text('验证码错误,请重试');
		$('.rel_tishi:eq(2)').css('visibility', 'inherit');
		$('#code').val('');
	}
});
$('#tel').blur(checkPhone); //判断手机号
$('#psd').blur(checkPsd); //判断密码

//判断手机验证码
//点击获取验证码
$('#rel_huoqu').click(function () {
	//按钮内容改变
	$('#rel_huoqu').html('<span id="atherTime">60</span>s 重新获取')
	//改变按钮状态为不可选
	$('#rel_huoqu').attr('disabled','true');

	//定时器,按钮内容改变
	var shijian = 60;
	var timer = setInterval(function () {
		shijian--;
		$('#atherTime').text(shijian);
		if (shijian == 0) {
			clearInterval(timer);
			//按钮可点并且内容改变
			$('#rel_huoqu').removeAttr('disabled')
			$('#rel_huoqu').text('获取验证码');
		}
	},1000);
	
	var phoneYZ = randomPhoneYZ();//弹出的验证码
	//验证码存到cookie
	addCookie('phoneCode', phoneYZ, 60);//时效为1分钟

	//延迟3s获得验证码
	setTimeout(function () {
		alert(phoneYZ);
	},3000);
	
});

/****************************点击登录******************************/
$('#loginBtn').click(function () {
	//验证码不能为空
	if ($('#code').val() == '') {
		$('.rel_yanzhengma img').hide();
		$('#yanzhengma').text('请输入验证码');
		$('.rel_tishi:eq(2)').css('visibility', 'inherit');
	} else{
		changeUsers();//登录
	}
});
//点击登录需要 判断手机号与密码或者验证码是否匹配 的方法
function changeUsers() {
	var phone = $('#tel').val();
	var psd = $('#psd').val();
	var uesrsArr = []; //存储用户名(手机号)的数组
	var psdArr = []; //存储密码的数组
	if(!localStorage.relUserName) { //数据库中没有数据
		alert('还没有账号?赶紧注册吧!')
	} else {
		uesrsArr = localStorage.relUserName.split("|");
		psdArr = localStorage.relPassWord.split("|");
		//判断是否已被注册的方法
		function renYON() {
			var rArr = []
			for(var i = 0; i <= uesrsArr.length; i++) {
				if(phone == uesrsArr[i]) {
					rArr = [true, i];
					return rArr; //已注册
				}
			}
			rArr = [false];
			return rArr;
		}
		var bol = renYON()[0];
		var index = renYON()[1]
		if(bol) { //如果该号码已经注册,则判断登录模式哪一种
			if (loginFangShiBool) { //手机验证码登录
				var phoneCodeShuRu = $('#phoneCode').val();
				//判断是否存在手机验证码
				if (isCookieKey('phoneCode')) { //存在
					//判断手机验证码输入是否正确
					if (phoneCodeShuRu == getCookie('phoneCode')) {
						$('.rel_tishi:eq(3)').css('visibility', 'hidden');
						//存储登录的手机号
						localStorage.nowPhone = uesrsArr[index];
						//登录成功
						$('.tiaozhuan_cont').css({
							transform: 'scale(1,1)',
							transition:'all 0.5s ease-out',
						});
						//定时器 倒数时间 实现跳转
						var x = 3;
						var times = setInterval(function () {
							x--;
							$('.tiaozhuan_time').text(x+' ');
							if (x == 0) {
								clearInterval(times);
								//跳转
								window.location.href = 'index.html';
							}
						},1000);
						
					} else{
						$('#rel_phone_yz').text('输入的手机验证码有误请确认后重试');
						$('.rel_tishi:eq(3)').css('visibility', 'inherit');
					}
				} else{
					$('#rel_phone_yz').text('请重新获取手机验证码');
					$('.rel_tishi:eq(3)').css('visibility', 'inherit');
				}
			}else{ //账号密码登录
				//判断密码是否正确
				if (psd == psdArr[index]) { //密码正确
					localStorage.nowPhone = uesrsArr[index];//存储登录的手机号
					$('.tiaozhuan_cont').css({
						transform: 'scale(1,1)',
						transition:'all 0.5s ease-out',
					})
					//定时器 倒数时间 实现跳转
						var x = 3;
						var times = setInterval(function () {
							x--;
							$('.tiaozhuan_time').text(x + ' ');
							if (x == 0) {
								clearInterval(times);
								//跳转
								window.location.href = 'index.html';
							}
						},1000);
				} else{ //密码错误
					alert('密码有误,请重试!');
				}	
			}
		} else {//如果没有被注册
			alert('该账号还没有被注册哦');
		}
	}
}

/****************************记住密码操作******************************/
//点击选框
$('#check').click(function() {
	if($('#check').is(':checked')) { //选中打钩,需要记住密码
		addCookie('loginUser', $('#tel').val(), 60 * 60 * 24 * 30); //记住账号 事件30天
		addCookie('loginPsd', $('#psd').val(), 60 * 60 * 24 * 30); //记住密码
	} else {
		//记住账号密码
		addCookie('loginUser', $('#tel').val(), 60 * 60 * 24 * 30); //只记住账号
		deleteCookie('loginPsd'); //删除密码
	}
});
if(isCookieKey('loginUser')) {
	//让保存过的账号显示在账号输入框中
	$('#tel').val(getCookie('loginUser'));
	$('.rel_li1:eq(0) img').show();
}
if(isCookieKey('loginPsd')) {
	//让保存过的密码显示在账号输入框中
	$('#psd').val(getCookie('loginPsd'));
	$('.rel_li1:eq(1) img').show();
	$('#check').attr('checked','true');
}



