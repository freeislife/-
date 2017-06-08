
		$('.nowPhone').val(localStorage.nowPhone);
		$('#phoneGenhuan').click(function () {
			window.location.href = '#';
		});



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
		$('.city').click(function () {
			window.location.href = 'city.html';
		});
		$('#phoneGenhuan').click(function () {
			window.location.href = 'phoneGengHuan.html';
		});
		
		//******************修改图片*************************************
		//下面用于图片上传预览功能
		function setImagePreview(val1,val2) {
			var docObj = document.getElementById(val1);
			var imgObjPreview = document.getElementById(val2);
			if(docObj.files && docObj.files[0]) {
				//火狐下，直接设img属性
//				imgObjPreview.style.display = 'block';
				imgObjPreview.style.width = '50px';
				imgObjPreview.style.height = '50px';
				//imgObjPreview.src = docObj.files[0].getAsDataURL();

				//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
				imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
			} else {
				//IE下，使用滤镜
				docObj.select();
				var imgSrc = document.selection.createRange().text;
				var localImagId = document.getElementById("localImag");
				//必须设置初始大小
				localImagId.style.width = "50px";
				localImagId.style.height = "50px";
				//图片异常的捕捉，防止用户修改后缀来伪造图片
				try {
					localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
					localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
				} catch(e) {
					alert("您上传的图片格式不正确，请重新选择!");
					return false;
				}
				imgObjPreview.style.display = 'none';
				document.selection.empty();
			}
			return true;
		}
		





//引入文件
$(document).ready(function () {
	$('.top1').load('my-Left.html');
	$('.tou').load('toubu.html');
})
