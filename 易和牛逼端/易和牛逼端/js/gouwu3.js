var IMGS = document.getElementsByClassName("IMGS");
for (var i = 0;i < IMGS.length;i++) {
	IMGS[i].onclick = function  () {
		for (var j = 0;j < IMGS.length;j++) {
			if (this == IMGS[j]) {
				this.src="img/gouwu2/1.png";
			} else{
				IMGS[j].src="img/gouwu2/2.png";
			}
	   }
	}
}
//点击支付
$(".inp").click(function  () {
	$(".fu").show();
	localStorage.carCont = localStorage.carCont-localStorage.isTrue;
});
//支付失败
$(".inp2").click(function () {
	$(".fu").hide();
})
