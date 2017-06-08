$(".tcdPageCode").createPage({
			pageCount: 10,
			current: 1,
			backFn: function(p) {
				console.log(p);
			}
		});

		//li的鼠标移入事件
		$("li").mouseenter(function() {
			var a = $(this).index();
			for(var i = 0; i < $(".ul li").length; i++) {
				if(i == a) {
					$("li:eq(" + a + ")").css("borderColor", "rgb(242,86,11)");
				}
			}
		});
		//li的鼠标移出事件
		$("li").mouseleave(function() {
			var b = $(this).index();
			for(var i = 0; i < $(".ul li").length; i++) {
				if(i == b) {
					$("li:eq(" + b + ")").css("borderColor", "rgb(201,201,201)");
				}
			}
		});
		//兑换的点击事件	
		//点击兑换  弹出框弹出
		$(".collect").each(function(i) {
			$(this).click(function () {
//				$('.wrap_jifen').hide();
			 	$('.jifenAlert').show();
			});
		});
		//返回按钮的点击事件
		$('.btn1').click(function () {
//			$('.wrap_jifen').show();
			$('.jifenAlert').hide();
		});
		//保存按钮的点击事件
		$('.btn2').click(function () {
//			$('.wrap_jifen').show();
			$('.jifenAlert').hide();
		});