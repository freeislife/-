//点击添加地址
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
		var x = i+1;
		var trs = $('<tr><td class="xuhao">' + x + '</td><td class="zw_name">'+ dzNameArr[i] +'</td><td class="zw_shenzong">'+ dzShenArr[i]+dzCityArr[i]+dzQuArr[i] +'</td><td class="zw_xiangxi">'+dzXiangArr[i]+'</td><td class="zw_phone">'+ dzPhoneArr[i] +'</td><td>家里的地址</td><td><span class="moren" onclick="isMoRen(this)">'+moRenArr[i]+'</span><span class="xiugai" onclick="xiugai_click(this)">修改</span><span class="delete" onclick="del_click(this)">删除</span></td></tr>');
		$('.table_dizhi').append(trs);
	}
	$('.add').show();
} else {
	var dzNameArr = [];//存储收货人姓名 数组
	var dzShenArr = [];//省份
	var dzCityArr = [];//市
	var dzQuArr = [];//区
	var dzXiangArr = [];//详细地址
	var dzPhoneArr = [];//手机号
	var moRenArr = [];
	//如果没有则显示为空
	$('.dizhi_R_div').show();
	$('.addDizhi').hide();
	$('.table_shangmian_div').hide();
	$('.add').show();
}
//点击提交
$('#ensure').click(function() {
	if (kaiguan == 1) { //添加数据
		
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
			//判断是否是默认地址
			if ($('#rad').is(':checked')) { //设为默认地址
				for (var i = 0;i < moRenArr.length;i++) {
					moRenArr[i] = '设置为默认地址';
					$('.moren').text('设置为默认地址');
				}
				moRenArr.push('默认');
				var trs = $('<tr><td class="xuhao">' + dzNameArr.length + '</td><td class="zw_name">' + name + '</td><td class="zw_shenzong">' + shen + city + qu + '</td><td class="zw_xiangxi">' + xiangxi + '</td><td class="zw_phone">' + phone + '</td><td>家里的地址</td><td><span class="moren" onclick="isMoRen(this)">默认</span><span class="xiugai" onclick="xiugai_click(this)">修改</span><span class="delete" onclick="del_click(this)">删除</span></td></tr>');
				$('.table_dizhi').append(trs);//将数据显示到页面上
			} else{
				var trs = $('<tr><td class="xuhao">' + dzNameArr.length + '</td><td class="zw_name">' + name + '</td><td class="zw_shenzong">' + shen + city + qu + '</td><td class="zw_xiangxi">' + xiangxi + '</td><td class="zw_phone">' + phone + '</td><td>家里的地址</td><td><span class="moren" onclick="isMoRen(this)">设置为默认地址</span><span class="xiugai" onclick="xiugai_click(this)">修改</span><span class="delete" onclick="del_click(this)">删除</span></td></tr>');
				$('.table_dizhi').append(trs);//将数据显示到页面上
				moRenArr.push('设置为默认地址');
			}
			cunDZ(); //后台更新数据
			$('.addDizhi').slideUp();
			$('.table_shangmian_div').slideDown();
			$('.add').show();
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
			alert('请准确输入信息!')
		}	
	} else { //修改数据
		kaiguan = 1;
		dzNameArr[xiugai_t] = $('.shouhuoName').val();
		dzShenArr[xiugai_t] = $('#province1').val();
		dzCityArr[xiugai_t] = $('#city1').val();
		dzQuArr[xiugai_t] = $('#district1').val();
		dzXiangArr[xiugai_t] = $('.xiangxiDIZHI').val();
		dzPhoneArr[xiugai_t] = $('.phone1').val();
		//判断是否为默认
		if ($('#rad').is(':checked')) { //默认
			for (var i = 0;i < moRenArr.length;i++) {
				moRenArr[i] = '设置为默认地址';
				$('.moren').text('设置为默认地址');
			}
			moRenArr[xiugai_t] = '默认';
			$('.moren:eq('+xiugai_t+')').text('默认');
		} else{
			moRenArr[xiugai_t] = '设置为默认地址';
			$('.moren:eq('+xiugai_t+')').text('设置为默认地址');
		}
		cunDZ();
		$('.zw_name:eq('+xiugai_t+')').text($('.shouhuoName').val());
		$('.zw_shenzong:eq('+xiugai_t+')').text($('#province1').val() + $('#city1').val() + $('#district1').val());
		$('.zw_xiangxi:eq('+xiugai_t+')').text($('.xiangxiDIZHI').val());
		$('.zw_phone:eq('+xiugai_t+')').text($('.phone1').val());
		
		$('.addDizhi').slideUp(function () {
			$('.shouhuoName').val('');
			$('#province1').val('');
			$('#city1').val('');
			$('#district1').val('');
			$('.xiangxiDIZHI').val('');
			$('.phone1').val('');
		});
		$('.table_shangmian_div').slideDown();
		$('.add').show();
	}	
});

function addDZ () {
	$('.dizhi_R_div').slideUp();
	$('.addDizhi').slideDown();
	$('.table_shangmian_div').hide();
	$('.add').hide();
};
//点击添加新地址
$('.dizhi_R_div span').click(addDZ);
$('.add').click(addDZ);

//点击删除
function del_click (a) {
	//在本地将此数据删除
	var t = $(".delete").index($(a));//在数组中的下标
	dzNameArr.del(t);
	dzShenArr.del(t);
	dzCityArr.del(t);
	dzQuArr.del(t);
	dzXiangArr.del(t);
	dzPhoneArr.del(t);
	moRenArr.del(t);
	cunDZ();//后台更新数据
	$(a).parent().parent().remove();
	//判断地址是否为空
	if (dzNameArr.length == 0) {
		//如果没有则显示为空
		$('.dizhi_R_div').slideDown();
		$('.addDizhi').hide();
		$('.table_shangmian_div').slideUp();
		$('.add').show();
	}
}

//点击修改
var xiugai_t;//记录修改内容在数组中的下标
var checked_bool;//记录修改的地址是否是默认 如果是则 =true;
function xiugai_click (a) {
	kaiguan++;//kaiguan = 2;代表修改数据
	xiugai_t = $(".xiugai").index(a);//在数组中的下标
	$('.shouhuoName').val(dzNameArr[xiugai_t]);
	$('#province1').val(dzShenArr[xiugai_t]);
	$('.xiangxiDIZHI').val(dzXiangArr[xiugai_t]);
	$('.phone1').val(dzPhoneArr[xiugai_t]);
	//判断是否为默认
	if (moRenArr[xiugai_t] == '默认') { //是默认
		checked_bool = true;
		$('#rad').attr('checked','checked');
	} else{
		checked_bool = false;
		$('#rad').removeAttr('checked');
	}
	$('.addDizhi').slideDown();
	$('.table_shangmian_div').slideUp();
	$('.add').hide();
}

//点击收货地址
$('.dizhi_top_p').click(function () {
	location.reload(); //刷新页面
});
//点击设为默认
function isMoRen (a) {
	$('.moren').html('设置为默认地址');
	$(a).html('默认');
	var t = $('.moren').index(a);
	for (var i = 0;i < moRenArr.length;i++) {
		moRenArr[i] = '设置为默认地址';
	}
	localStorage.moRenArr = JSON.stringify(moRenArr);//还原所有
	moRenArr[t] = '默认';
	localStorage.moRenArr = JSON.stringify(moRenArr);
}


function cunDZ () {
	localStorage.dzNameArr = JSON.stringify(dzNameArr);
	localStorage.dzShenArr = JSON.stringify(dzShenArr);
	localStorage.dzCityArr = JSON.stringify(dzCityArr);
	localStorage.dzQuArr = JSON.stringify(dzQuArr);
	localStorage.dzXiangArr = JSON.stringify(dzXiangArr);
	localStorage.dzPhoneArr = JSON.stringify(dzPhoneArr);
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
