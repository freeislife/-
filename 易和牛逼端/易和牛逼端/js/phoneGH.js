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
$('#tel').blur(checkPhone);

var boolGH = 0; //记录用户操作 (0:刚进来页面,1:第一次点击提交;2:第二次点击提交)
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
// $('#code').blur(function  () { 
// 	var yanzShuRu = $('#code').val();
// 	//alert(yanzShuRu);
// 	if (yanzShuRu == cancelSpace(localStorage.relYanzhenStr)) { //验证码正确
// 		$('.rel_yanzhengma img').show();
// 		$('.rel_tishi:eq(1)').css('visibility', 'hidden');
// 	} else{ //验证码错误
// 		$('.rel_yanzhengma img').hide();
// 		$('#yanzhengma').text('验证码错误,请重试');
// 		$('.rel_tishi:eq(1)').css('visibility', 'inherit');
// 		$('#code').val('');
// 	}
// });

//判断手机验证码
//点击获取验证码
var timer;
var phoneYZ = '';
// $('#rel_huoqu').click(function () {
// 	//按钮内容改变
// 	$('#rel_huoqu').html('<span id="atherTime">60</span>s 重新获取')
// 	//改变按钮状态为不可选
// 	$('#rel_huoqu').attr('disabled','true');

// 	//定时器,按钮内容改变
// 	var shijian = 60;
// 	timer = setInterval(function () {
// 		shijian--;
// 		$('#atherTime').text(shijian);
// 		if (shijian == 0) {
// 			clearInterval(timer);
// 			//按钮可点并且内容改变
// 			$('#rel_huoqu').removeAttr('disabled')
// 			$('#rel_huoqu').text('获取验证码');
// 		}
// 	},1000);
	
// 	phoneYZ = randomPhoneYZ();//弹出的验证码
// 	//验证码存到cookie
// 	addCookie('phoneCode', phoneYZ, 60);//时效为1分钟
// 	//延迟3s获得验证码
// 	setTimeout(function () {
// 		alert(phoneYZ);
// 	},3000);
	
// });
// $('#phoneCode').blur(function () {
// 	$('.rel_tishi:eq(2)').css('visibility', 'hidden');
// });

//刚进来页面
$('#tel').val(localStorage.nowPhone);//显示当前手机号
//点击提交修改
$('#relBtn').click(function () {
	boolGH++;
	if (boolGH == 1) {
		if ($('#tel').val() != localStorage.nowPhone) {
			boolGH = 0;
			$('.rel_li1:eq(0) img').hide();
			$('#noPhone').html('请正确输入当前手机号');
			$('.rel_tishi:eq(0)').css('visibility', 'inherit');
		} else if ($('#code').val() == '') {
			boolGH = 0;
			$('.rel_yanzhengma img').hide();
			$('#yanzhengma').text('请正确输入验证码');
			$('.rel_tishi:eq(1)').css('visibility', 'inherit');
		} 
		// else if ($('#phoneCode').val() == '' || $('#phoneCode').val() !== getCookie('phoneCode')){
		// 	boolGH = 0;
		// 	$('#rel_phone_yz').html('请输入正确的手机验证码');
		// 	$('.rel_tishi:eq(2)').css('visibility', 'inherit');
		// } 
		else {
			
			//重置验证码 和 手机验证码
			$('.rel_li1:eq(0) img').hide();
			chongzhiYZ ();//重置验证码
			deleteCookie('phoneCode');//删除手机验证码
			$('#phoneCode').val('');
			//按钮可点并且内容改变
			$('#rel_huoqu').removeAttr('disabled')
			$('#rel_huoqu').text('获取验证码');
			clearInterval(timer);
			
			
			//更换标题
			$('.title_span1').css({
				'backgroundColor':'rgb(229,229,229)',
				'color':'black'
			});
			$('.border_span1').css('borderLeftColor','rgb(229,229,229)');
			$('.title_span2').css({
				'backgroundColor':'rgb(244,107,43)',
				'color':'white'
			});
			$('.border_span2').css({
				'borderTopColor':'rgb(244,107,43)',
				'borderBottomColor':'rgb(244,107,43)',
				'borderRightColor':'rgb(244,107,43)',
			});
			$('.border_span3').css('borderLeftColor','rgb(244,107,43)');
			tijiaoPhone ();
		}
	} else if (boolGH == 2) {
		//判断该号码是否已被注册
		var phone = $('#tel').val();
		var uesrsArr = []; //存储用户名(手机号)的数组
		uesrsArr = localStorage.relUserName.split("|");//得到所有手机号存进数组
		for(var i in uesrsArr){
			if (phone == uesrsArr[i]) { //已经被注册
				$('.rel_li1:eq(0) img').hide();
				$('#noPhone').html('此号码已被注册,换个号码试试吧');
				$('.rel_tishi:eq(0)').css('visibility', 'inherit');
				boolGH = 1;
				return;
			}
		}
		if(phone == ''){
			$('.rel_li1:eq(0) img').hide();
			$('#noPhone').html('请输入手机号');
			$('.rel_tishi:eq(0)').css('visibility', 'inherit');
		} else if ($('#code').val() == '') {
			boolGH = 1;
			$('.rel_yanzhengma img').hide();
			$('#yanzhengma').text('请正确输入验证码');
			$('.rel_tishi:eq(1)').css('visibility', 'inherit');
		} else if ($('#phoneCode').val() == '' || $('#phoneCode').val() !== getCookie('phoneCode')){
			boolGH = 1;
			$('#rel_phone_yz').html('请输入正确的手机验证码');
			$('.rel_tishi:eq(2)').css('visibility', 'inherit');
		} else {
			$('.title_span2').css({
			'backgroundColor':'rgb(229,229,229)',
			'color':'black'
			});
			$('.border_span2').css({
				'borderTopColor':'rgb(229,229,229)',
				'borderBottomColor':'rgb(229,229,229)',
				'borderRightColor':'rgb(229,229,229)',
			});
			$('.border_span3').css('borderLeftColor','rgb(229,229,229)');
			$('.title_span3').css({
				'backgroundColor':'rgb(244,107,43)',
				'color':'white'
			});
			$('.border_span4').css({
				'borderTopColor':'rgb(244,107,43)',
				'borderBottomColor':'rgb(244,107,43)',
				'borderRightColor':'rgb(244,107,43)',
			});
			xiugaiPhone ()
		}
	}	
});
//boolGH = 1 时方法 得到修改的号码在数组中的下标
var index;
function tijiaoPhone () {
	var phone = $('#tel').val();
	if (phone == localStorage.nowPhone) {
		//查找数据库中的手机号
		var uesrsArr = []; //存储用户名(手机号)的数组
		uesrsArr = localStorage.relUserName.split("|");//得到所有手机号存进数组
		for(var i in uesrsArr){
			if (phone == uesrsArr[i]) {
				$('#tel').val('');
				index = i; //该号码是数组中的第i个元素(需要修改数组中的此号码);
			}
		}
	}
}
//当boolGH = 2 时方法 将手机号修该
function xiugaiPhone () {
	var phone = $('#tel').val();//修改后的手机号
	localStorage.nowPhone = phone;
	$('.login_a').html('您好,' + phone + '<span class="tou_Tuichu"> 退出</span>');
	
	var uesrsArr = []; //存储用户名(手机号)的数组
	uesrsArr = localStorage.relUserName.split("|");//得到所有手机号存进数组
	//alert(index);
	uesrsArr[index] = phone;
	//alert(uesrsArr);
	var phoneStr = uesrsArr.join('|');//改变后的数组转化为字符串
	//存到本地
	localStorage.relUserName = phoneStr; //修改成功
	$('.rel_content').hide();
	$('.ok_img').show();
}