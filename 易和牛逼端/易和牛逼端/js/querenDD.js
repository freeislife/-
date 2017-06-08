var spLine = localStorage.isTrue;
var spNunArr = JSON.parse(localStorage.spNum);
for (var i = 0;i < localStorage.isTrue;i++) {
	var trObj = $('<li class="sp_li"> <span class="th_sev car_left"><img src="img/6.png" /><span>《寻龙诀》北京保利龙旗广场</span></span>  <span class=" th_two"><p>版本: 国行 32G</p><p>颜色: 星钻黑</p></span>  <span class=" th_three"><span>¥</span><span class="car_danjia">35.00</span></span>  <span class="car_num th_four">' + spNunArr[i] + '</span>  <span class=" th_five"><span>¥</span><span class="spJinE"></span></span>  </li>')
	trObj.insertBefore($('.car_tr_foot'));
}
//计算每一行中的金额
var heji = 0;
for (var i = 0;i < spLine;i++) {
	heji += 35*spNunArr[i];
	$('.spJinE:eq('+ i +')').text((35*spNunArr[i]).toFixed(2));//每一行中商品价钱
}
$('.heji_money').text((heji+5).toFixed(2));//店铺合计
$('.sp_money').text((heji).toFixed(2));//商品金额
//总计
$('.zongji_money').text((heji+5).toFixed(2));
//输入积分
$('.kuang').on('input',function () {
	var reg = /^\d+$/;
	if (reg.test($('.kuang').val())||$('.kuang').val('')) {
		if ($('.kuang').val()>1254) {
			alert('您最多只能使用1254积分');
			$('.kuang').val(1254);
			$('.kou_money').text(1254/100);
			$('.yingfu_money').text(($('.zongji_money').text() - $('.kou_money').text()).toFixed(2));
			$('.kehuode_jifen').text(($('.yingfu_money').text()/10).toFixed(1));
		} else if($('.kuang').val() == 0 || $('.kuang').val() == ''){
			$('.kou_money').text((0).toFixed(2));
			$('.yingfu_money').text(($('.zongji_money').text() - $('.kou_money').text()).toFixed(2));
			$('.kehuode_jifen').text(($('.yingfu_money').text()/10).toFixed(1));
		} else{
			$('.kou_money').text(($('.kuang').val()/100).toFixed(2));
			$('.yingfu_money').text(($('.zongji_money').text() - $('.kou_money').text()).toFixed(2));
			$('.kehuode_jifen').text(($('.yingfu_money').text()/10).toFixed(1));
		}
	}
});
//应付金额
$('.yingfu_money').text(($('.zongji_money').text() - $('.kou_money').text()).toFixed(2));
//可获得积分
$('.kehuode_jifen').text(($('.yingfu_money').text()/10).toFixed(1));


var imgs = document.getElementsByClassName("imgs");
//发票类型
for (var i = 0;i < imgs.length;i++) {
	imgs[i].onclick = function  () {
		for (var j = 0;j < imgs.length;j++) {
			if (this == imgs[j]) {
				this.src="img/gouwu2/1.png";
				if(j == 0){
					$('.fapiao_inp').attr('disabled','disabled');
				}else{
					$('.fapiao_inp').removeAttr('disabled');
				}
			} else{
				imgs[j].src="img/gouwu2/2.png";
			}
	   }
	}
}

var DZ_ShouHuo_Arr = [];
//点击提交订单
$('.dd_sub').click(function () {
	for (var i = 0;i < $('.IMGS').length;i++) {
		if ($('.IMGS:eq('+i+')').attr('src') == 'img/gouwu2/1.png') {
			DZ_ShouHuo_Arr.push(dzNameArr[i],dzShenArr[i],dzCityArr[i],dzQuArr[i],dzXiangArr[i],dzPhoneArr[i]);
			localStorage.DZ_ShouHuo_Arr = JSON.stringify(DZ_ShouHuo_Arr);
			localStorage.yinMoney = $('.yingfu_money').text();
			window.location.href = 'gouwu3.html';
			return;
		}
	}
	alert('请选择地址!');
});

/*******************************处理地址************************************/
//获取地址显示到页面上
var kaiguan = 1;//记录点击提交是添加数据还是修改数据 1代表添加 2代表修改
if (localStorage.dzNameArr && localStorage.dzNameArr != '[]') {
	var dzNameArr = JSON.parse(localStorage.dzNameArr);
	var dzShenArr = JSON.parse(localStorage.dzShenArr);
	var dzCityArr = JSON.parse(localStorage.dzCityArr);
	var dzQuArr = JSON.parse(localStorage.dzQuArr);
	var dzXiangArr = JSON.parse(localStorage.dzXiangArr);
	var dzPhoneArr = JSON.parse(localStorage.dzPhoneArr);
	var moRenArr = JSON.parse(localStorage.moRenArr);
	//如果有数据,则显示到页面上
	for (var i = 0;i < dzNameArr.length;i++) {
		var trs = $('<div class="JTDZ2"><div class="JTDZ2_left"><img class="IMGS" onclick="imgClick(this)" src="img/gouwu2/2.png" /><span class="zw_name">'+dzNameArr[i]+'</span><span class="zw_shen">'+dzShenArr[i]+'</span><span class="zw_city">'+dzCityArr[i]+'</span><span class="zw_qu">'+dzQuArr[i]+'</span><span class="zw_xiangxi">'+dzXiangArr[i]+'</span><span class="zw_phone">手机号码'+dzPhoneArr[i]+'</span></div><div class="JTDZ2_right"><span class="dz_moRen" onclick="isMoren(this)">'+moRenArr[i]+'</span><a class="xiugai" onclick="xiugai_click(this)">修改</a><a class="delete" onclick="del_click(this)">删除</a></div></div>');
		$('.JTDZ').prepend(trs);
	}
	//$('.add').show();
} else {
	var dzNameArr = [];//存储收货人姓名 数组
	var dzShenArr = [];//省份
	var dzCityArr = [];//市
	var dzQuArr = [];//区
	var dzXiangArr = [];//详细地址
	var dzPhoneArr = [];//手机号
	var moRenArr = [];
	//如果没有则显示为空
	$('.kong_zeng_dz').show();
	$('.JTDZ').hide();
	$('.butt').hide();
}
//点击地址前面的选择框 方法
function imgClick(a) {
	$('.IMGS').attr('src','img/gouwu2/2.png');
	$(a).attr('src','img/gouwu2/1.png');//选中状态
}
//点击收起地址
$('.upDiZhi').click(function () {
	//判断选择框是否选中
	for (var i = 0;i < $('.IMGS').length;i++) {
		if ($('.IMGS:eq('+i+')').attr('src') == 'img/gouwu2/2.png') { //非选中状态
			$('.IMGS:eq('+i+')').parent().parent().slideUp();
		} else{
			//alert($('.IMGS').index());
			$('.IMGS:eq('+i+')').parent().parent().slideDown();
		}
	}
});
//点击展开其他地址
$('.downDiZhi').click(function () {
	$('.IMGS').parent().parent().slideDown();
});

//点击使用新地址
$('.butt').click(function () {
	$('.wrap_shiyongNewDZ').slideDown(function () {
		$('.wrap_con').css({
			transform:'scale(1,1)',
			transition:'all 0.5s ease-out'
		});
	});
});

//点击返回
$('.return_btn').click(function () {
	kaiguan = 1;
	$('.wrap_shiyongNewDZ').slideUp(function () {
		$('.shouhuoName').val('');
		$('#province1').val('');
		$('#city1').val('');
		$('#district1').val('');
		$('.xiangxiDIZHI').val('');
		$('.phone1').val('');
		$('.phone_GU1').val('');
		$('.phone_GU2').val('');
		
		$('.wrap_con').css({
			transform:'scale(0,0)',
			transition:'all 0.5s ease-out'
		});
	});
});
//添加数据方法
function addShuJv () {
	name = $('.shouhuoName').val();
	shen = $('#province1').val();
	city = $('#city1').val();
	qu = $('#district1').val();
	xiangxi = $('.xiangxiDIZHI').val();
	phone = $('.phone1').val();
	if(name != '' && shen != '' && city != '' && qu != '' && xiangxi != '' && phone != '') {
		//将数据存储
		dzNameArr.push(name);
		dzShenArr.push(shen);
		dzCityArr.push(city);
		dzQuArr.push(qu);
		dzXiangArr.push(xiangxi);
		dzPhoneArr.push(phone);
		moRenArr.push('设置为默认地址');
		cunDZ(); //后台更新数据
		//将数据显示到页面上
		var trs = $('<div class="JTDZ2"><div class="JTDZ2_left"><img class="IMGS" onclick="imgClick(this)" src="img/gouwu2/2.png" /><span class="zw_name">'+name+'</span><span class="zw_shen">'+shen+'</span><span class="zw_city">'+city+'</span><span class="zw_qu">'+qu+'</span><span class="zw_xaingxi">'+xiangxi+'</span><span class="zw_phone">手机号码'+phone+'</span></div><div class="JTDZ2_right"><span class="dz_moRen" onclick="isMoren(this)">设置为默认地址</span><a class="xiugai" onclick="xiugai_click(this)">修改</a><a class="delete" onclick="del_click(this)">删除</a></div></div>');
		$('.JTDZ').prepend(trs);
		$('.wrap_shiyongNewDZ').slideUp(function () {
			$('.JTDZ').slideDown();
		});
		//输入框数据清空
		$('.shouhuoName').val('');
		$('#province1').val('');
		$('#city1').val('');
		$('#district1').val('');
		$('.xiangxiDIZHI').val('');
		$('.phone1').val('');
		$('.phone_GU1').val('');
		$('.phone_GU2').val('');
	} else {
		alert('请准确输入信息!');
	}	
}

//点击确认并设为默认地址
$('.sub_btn').click(function () {
	name = $('.shouhuoName:eq(1)').val();
	shen = $('#province').val();
	city = $('#city').val();
	qu = $('#district').val();
	xiangxi = $('.xiangxiDIZHI:eq(1)').val();
	phone = $('.phone1:eq(1)').val();
	if(name != '' && shen != '' && city != '' && qu != '' && xiangxi != '' && phone != '') {
		//将数据存储
		dzNameArr.push(name);
		dzShenArr.push(shen);
		dzCityArr.push(city);
		dzQuArr.push(qu);
		dzXiangArr.push(xiangxi);
		dzPhoneArr.push(phone);
		moRenArr.push('默认');
		
		cunDZ(); //后台更新数据
		//将数据显示到页面上
		var trs = $('<div class="JTDZ2"><div class="JTDZ2_left"><img class="IMGS" onclick="imgClick(this)" src="img/gouwu2/2.png" /><span class="zw_name">'+name+'</span><span class="zw_shen">'+shen+'</span><span class="zw_city">'+city+'</span><span class="zw_qu">'+qu+'</span><span class="zw_xaingxi">'+xiangxi+'</span><span class="zw_phone">手机号码'+phone+'</span></div><div class="JTDZ2_right"><span class="active_moRen" onclick="isMoren(this)">默认</span><a class="xiugai" onclick="xiugai_click(this)">修改</a><a class="delete" onclick="del_click(this)">删除</a></div></div>');
		$('.JTDZ').prepend(trs);
		$('.kong_zeng_dz:eq(1)').slideUp(function () {
			$('.JTDZ').slideDown();
			$('.butt').show();
		});
		//输入框数据清空
		$('.shouhuoName:eq(1)').val('');
		$('.province').val('');
		$('.city_que').val('');
		$('.district').val('');
		$('.xiangxiDIZHI:eq(1)').val('');
		$('.phone1:eq(1)').val('');
		$('.phone_GU1:eq(1)').val('');
		$('.phone_GU2:eq(1)').val('');
	} else {
		alert('请准确输入信息!')
	}
});

//点击保存
$('.baoCun_btn').click(function() {
	if (kaiguan == 1) { //添加数据
		addShuJv();
	} else { //修改数据
		kaiguan = 1;
		dzNameArr[xiugai_t2] = $('.shouhuoName').val();
		dzShenArr[xiugai_t2] = $('#province1').val();
		dzCityArr[xiugai_t2] = $('#city1').val();
		dzQuArr[xiugai_t2] = $('#district1').val();
		dzXiangArr[xiugai_t2] = $('.xiangxiDIZHI').val();
		dzPhoneArr[xiugai_t2] = $('.phone1').val();
		cunDZ();
		//显示到页面上
		$('.zw_name:eq('+xiugai_t+')').text($('.shouhuoName').val());
		$('.zw_shen:eq('+xiugai_t+')').text($('#province1').val());
		$('.zw_city:eq('+xiugai_t+')').text($('#city1').val());
		$('.zw_qu:eq('+xiugai_t+')').text($('#district1').val());
		$('.zw_xiangxi:eq('+xiugai_t+')').text($('.xiangxiDIZHI').val());
		$('.zw_phone:eq('+xiugai_t+')').text($('.phone1').val());
		$('.wrap_shiyongNewDZ').slideUp(function () {
			$('.shouhuoName').val('');
			$('#province1').val('');
			$('#city1').val('');
			$('#district1').val('');
			$('.xiangxiDIZHI').val('');
			$('.phone1').val('');
		});
	}	
});

//点击修改
var xiugai_t;//记录修改内容在数组中的下标
function xiugai_click (a) {
	kaiguan++;//kaiguan = 2;代表修改数据
	xiugai_t = $(".xiugai").index(a);//在数组中的下标
	xiugai_t2 = $(".xiugai").length - xiugai_t - 1;
	$('.shouhuoName').val(dzNameArr[xiugai_t2]);
	$('#province1').val(dzShenArr[xiugai_t2]);
	$('.xiangxiDIZHI').val(dzXiangArr[xiugai_t2]);
	$('.phone1').val(dzPhoneArr[xiugai_t2]);
	$('.wrap_shiyongNewDZ').slideDown(function () {
		$('.wrap_con').css({
			transform:'scale(1,1)',
			transition:'all 0.5s ease-out'
		});
	});
}

//更新后台
function cunDZ () {
	localStorage.dzNameArr = JSON.stringify(dzNameArr);
	localStorage.dzShenArr = JSON.stringify(dzShenArr);
	localStorage.dzCityArr = JSON.stringify(dzCityArr);
	localStorage.dzQuArr = JSON.stringify(dzQuArr);
	localStorage.dzXiangArr = JSON.stringify(dzXiangArr);
	localStorage.dzPhoneArr = JSON.stringify(dzPhoneArr);
	localStorage.moRenArr = JSON.stringify(moRenArr);
}
//点击删除
function del_click (a) {
	var t = $(".delete").index($(a));//在数组中的下标
	t = dzNameArr.length - 1 - t;
	dzNameArr.del(t);
	dzShenArr.del(t);
	dzCityArr.del(t);
	dzQuArr.del(t);
	dzXiangArr.del(t);
	dzPhoneArr.del(t);
	moRenArr.del(t);
	cunDZ();//后台更新数据
	$(a).parent().parent().slideUp(function () {
		$(this).remove()
	});
	
	//判断地址是否为空
	if (dzNameArr.length == 0) {
		//如果没有则显示为空
		$('.kong_zeng_dz').slideDown();
		$('.JTDZ').hide();
		$('.butt').hide();
	}
}
//点击设为默认
var dz_moRen = document.querySelectorAll(".JTDZ2_right span");
//设置样式
for (var i = 0;i < dz_moRen.length;i++) {
	if (dz_moRen[i].innerText == '默认') {
		dz_moRen[i].className = "active_moRen";
	} else{
		dz_moRen[i].className = "dz_moRen";
	}
}
function isMoren (a) {
	dz_moRen = document.querySelectorAll(".JTDZ2_right span");
  for (var i = 0;i < dz_moRen.length;i++) {
	   dz_moRen[i].className = "dz_moRen";
	   dz_moRen[i].innerText = "设置为默认地址";
  }
	$(a).text('默认');
	a.className = "active_moRen";
	
	var t = $(".JTDZ2_right span").index($(a));//在数组中的下标
	t = moRenArr.length - 1 - t;
	for (var i = 0;i < moRenArr.length;i++) {
		moRenArr[i] = '设置为默认地址';
	}
	localStorage.moRenArr = JSON.stringify(moRenArr);//还原所有
	moRenArr[t] = '默认';
	localStorage.moRenArr = JSON.stringify(moRenArr);
}

//删除指定下标数组元素   方法
Array.prototype.del = function(index) {
	if(isNaN(index) || index >= this.length) {
		return false;
	}
	for(var i = 0, n = 0; i < this.length; i++) {
		if(this[i] != this[index]) {
			this[n++] = this[i];
		}
	}
	this.length -= 1;
};
//localStorage.removeItem('dzNameArr');
//localStorage.removeItem('dzShenArr');
//localStorage.removeItem('dzCityArr');
//localStorage.removeItem('dzQuArr');
//localStorage.removeItem('dzXiangArr');
//localStorage.removeItem('dzPhoneArr');
//localStorage.removeItem('moRenArr');