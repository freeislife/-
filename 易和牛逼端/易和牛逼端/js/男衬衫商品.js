var areaDiv = document.getElementById('area');
var smallDiv = document.getElementById('small');
var bigImgDiv = document.getElementById('big');
var bigImg = document.querySelector('#big>img');
var big = document.getElementById("big");
var wrap = document.getElementById("wrap");
//给small div添加鼠标移入,移出事件
		smallDiv.onmouseenter = function() {
			areaDiv.style.display = 'block';
			bigImgDiv.style.display = 'block';
		}
		smallDiv.onmouseleave = function() {
			areaDiv.style.display = 'none';
			bigImgDiv.style.display = 'none';
		}
//		alert(wrap.offsetLeft);
//给small div添加鼠标移动事件
		smallDiv.onmousemove = function(e) {
			var event = window.event || e;
			event.cancelBubble = true;
			//获取鼠标在small中的位置 (也就是为了设置areaDiv的left top 值)
			var x = event.clientX - wrap.offsetLeft - areaDiv.offsetWidth/ 2-20;
			var y = event.clientY - wrap.offsetTop - areaDiv.offsetHeight / 2-20;
			var maxX =areaDiv.offsetWidth; //滑块移动x轴的最大值
			var maxY = areaDiv.offsetHeight; //滑块移动y轴的最大值
			//为了不让滑块出small的范围,合理的设置左边距和上边距的值
			if (x < 0) { //左侧超出
				x = 0;
			}
			if (x > maxX) { //右侧超出
				x = maxX;
			}
			if (y < 0) { //上侧超出
				y = 0
			}
			if (y > maxY) { //下侧超出
				y = maxY;
			}
			//修改滑块位置
			areaDiv.style.left = x + 'px';
			areaDiv.style.top = y + 'px';
			//修改右侧大图位置
			//当滑块滑动到某一位置时,占总滑动距离的百分比:x / maxX    y / maxY
			bigImg.style.left = -(bigImg.offsetWidth - big.clientWidth) *(x / maxX) + 'px';
			bigImg.style.top = -(bigImg.offsetHeight - big.clientHeight) *(y / maxY) + 'px';
		}
$(".aa img").click(function  () {
	$(".Aa").attr("src","img/fangda/"+$(this).index()+".jpg");
	$(".AA").attr("src","img/fangda/"+$(this).index()+".jpg")
})
var a = 0;
//小图的动画
$(".you").click(function () {
	a++;
	if (a > 2) {
		a = 2;
	}
	$(".aa").animate({
		left: a*'-80'
	})
})
$(".zuo").click(function () {
	a--;
	if (a < 0) {
		a = 0;
	}
	$(".aa").animate({
		left: a*'-80'
	})
})
 

//点击选尺码 
$(".lianx_shang li").click(function  () {
	if($(this).index()==0 || $(this).index()==3){
		$(this).css("border","");
	}else{
		$(".lianx_shang li").css("border","");
		$(this).css("border","2px solid rgb(244,107,43)");
	}
});
//选择颜色
$(".lianx_xia li").click(function  () {
	if($(this).index()==0){
		$(this).css("border","");
	}else{
		$(".lianx_xia li").css("border","");
		$(this).css("border","2px solid rgb(244,107,43)");
	}
});

//收藏的星
var bool = false;
$(".shouC").click(function  () {
	bool = !bool;
	if (bool) {
		$(".shouC").attr("src","img/fangda/xing.png");
	} else{
		$(".shouC").attr("src","img/fangda/xingx.png");
	}
})

//加减框
var a = 1;
$(".jian").click(function () {
	--a;
	
	if (a<=0) {
		a=0;
	}
	$(".num").html(a);
})
$(".jia").click(function () {
	$(".num").html(++a);
})
//副页面

//点击加入购物车
$(".inp").click(function () {
	if (!localStorage.nowPhone) {
		alert('您还没有登录,请先登录后重试!');
	} else {
		var x = $('.num').text();
		$(".fu").slideDown(function () {
			localStorage.carCont = x;
			//alert(localStorage.carCont);
		});
	}
	
})
$(".inp1").click(function () {
	$(".fu").slideUp();
})
//点击立即购买
$('.lyl_liji_btn').click(function () {
	if (!localStorage.nowPhone) {
		alert('您还没有登录,请先登录后重试!');
	} else{
		//购物车里面内容为1
		localStorage.carCont = 1;
		window.location.href = 'shoppingCar.html';
	}
	
});



//localStorage.removeItem('carCont');