//购物车中的内容根据 localStorage.carCont 创建节点(商品)
var carSp = localStorage.carCont;
//localStorage.isTrue = 3;
//将节点添加到 car_table 中
for (var i = 0;i < localStorage.carCont;i++) {
	var trObj = $('<li class="sp_li"> <span class=" th_one"><input type="checkbox" name="" class="check checkDan" /></span> <span class="th_sev car_left"><img src="img/6.png" /><span>《寻龙诀》北京保利龙旗广场</span></span>  <span class=" th_two"><p>版本: 国行 32G</p><p>颜色: 星钻黑</p></span>  <span class=" th_three"><span>¥</span><span class="car_danjia">35.00</span></span>  <span class="car_num th_four"><span class="jianhao">-</span><input class="spNum" type="text" value="1" /><span class="add">+</span></span>  <span class=" th_five"><span>¥</span><span class="spJinE">35.00</span></span> <span class="th_six delet">删除</span> </li>');
	trObj.insertBefore($('.car_tr_foot'));
}
//点击删除
$('.delet').click(function () {
	//判断单选框的选中状态
	var con = confirm('确定删除所选商品吗？'); //弹出确认框
	if (con) {
		$(this).parent().slideUp(function () {
			$(this).remove();
			isKong ();
			carSp--;
			localStorage.carCont = carSp;
		});
	}
});
	
	
	// 点击选择框
	var selectInputs = document.getElementsByClassName('check'); // 所有勾选框
    var checkAllInputs = document.getElementsByClassName('check-all') // 全选框
    for(var i = 0; i < selectInputs.length; i++ ){
        selectInputs[i].onclick = function () {
            if (this.className.indexOf('check-all') >= 0) { //如果是全选，则吧所有的选择框选中
                for (var j = 0; j < selectInputs.length; j++) {
                    selectInputs[j].checked = this.checked;
                }
            }
            if (!this.checked) { //只要有一个未勾选，则取消全选框的选中状态
                for (var i = 0; i < checkAllInputs.length; i++) {
                    checkAllInputs[i].checked = false;
                }
            }
            //getTotal();//选完更新总计
        }
    }
    // 点击批量删除
	$('.check_del').click(function () {
		//判断单选框的选中状态
		var con = confirm('确定删除所选商品吗？'); //弹出确认框
		if (con) {
			for (var i = 0;i < $('.checkDan').length;i++) {
				if ($('.checkDan')[i].checked == true) {
					//删除选中的商品
					for (var j = 0;j < $('.checkDan').length;j++) {
						if (j == i) {
							$('.checkDan:eq('+i+')').parent().parent().slideUp(function () {
								$(this).remove();
								isKong ();
								carSp--;
								localStorage.carCont = carSp;
							});
						}
					}
				}
			}
		}
	});
	
	//判断单选框选中个数
	function isKong () {
		if ($('.checkDan').length == 0) {
			$('.car_table').hide();
			$('.car_foot').hide();
			$('.wrap_Kong').slideDown();
		}
	}
	isKong ();
	function isTrue () {
		//var isTrue = $('.checkDan').length;
		var arr = [];//存储商品数量
		var isTrue = 0;
		for (var i = 0;i < $('.checkDan').length;i++) {
			if ($('.checkDan')[i].checked == true) {
				//alert(1)
				//单选框选中状态
				arr.push($('.spNum:eq('+i+')').val());
				isTrue++;
			}
		}
		//console.log(arr);
		var str = JSON.stringify(arr);
		//存入 
		localStorage.spNum = str;
		localStorage.isTrue = isTrue;
	}
	isTrue();
	$('.checkDan').click(function () {
		spJingE();
		isTrue();
	});
	$('.check-all').click(function () {
		spJingE();
		isTrue();
	});
	//点击+ - 号;
	$('.jianhao').click(function () {
		var t = $(".jianhao").index($(this));
		var x = $('.spNum:eq(' + t + ')').val();
		x--;
		if (x <= 0) {
			x = 0;
		}
		$('.spNum:eq(' + t + ')').val(x);
		jiSuan(t);
		spJingE();
		isTrue()
	});
	$('.add').click(function () {
		var t = $(".add").index($(this));
		var x = $('.spNum:eq(' + t + ')').val();
		x++;
		$('.spNum:eq(' + t + ')').val(x);
		jiSuan(t);
		spJingE();
		isTrue();
	});
	$('.spNum').blur(function () {
		var t = $(".spNum").index($(this));
		var x = $('.spNum:eq(' + t + ')').val();
		var reg = /^\d+$/;
		if (reg.test(x)) {
			$('.spNum:eq(' + t + ')').val(x);
			jiSuan(t);
			spJingE();
			isTrue();
		}else{
			$('.spNum:eq(' + t + ')').val(1);
			$('.spJinE:eq(' + t + ')').text((35).toFixed(2));
			alert('请输入正确的商品数目!')
		}
		
	});
	//每行的金额
	function jiSuan (t) {
		var dan = $('.car_danjia:eq(' + t + ')').text();
		var num = $('.spNum:eq(' + t + ')').val();
		//alert(dan)
		var zong = dan * num;
		$('.spJinE:eq(' + t + ')').text(zong.toFixed(2));
	}
	//商品金额
	function spJingE () {
		var num = 0;
		for (var i = 0;i < $('.checkDan').length;i++) {
			if ($('.checkDan')[i].checked == true) {
				num += $('.spJinE:eq(' + i + ')').text() - 0;
			}
		}
		localStorage.allMoney = num.toFixed(2);
		$('.onemoney').text(num.toFixed(2));
		$('.jiesuanPress').text(num.toFixed(2));
	}
	spJingE ();
	//点击去结算
	$('#goBuyBtn').click(function () {
		if (localStorage.isTrue == 0) {
			alert('请选择商品')
		} else{
			window.location.href = 'querenDD.html';
		}
	})
	