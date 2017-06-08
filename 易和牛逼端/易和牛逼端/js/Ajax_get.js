/*
 此文件是用来处理Ajax网络请求 get请求的封装;
 如果使用该文件,则直接导入该JS文件,调用函数 getAjax(url, succeedFn, errorFn)
 其中的参数:
 url:发送请求的网址 
 succeedFn:处理请求数据成功之后要执行的函数 
 errorFn:处理请求数据失败之后要执行的函数
*/

function getAjax(url, succeedFn, errorFn) {
	var ajax;
	//1.判断是否IE浏览器,创建XMLHTTPRequest对象
	if(window.XMLHttpRequest) { //非IE浏览器
		ajax = new XMLHttpRequest();
	} else { //IE浏览器
		ajax = ActiveXObject("Microsoft.XMLHTTP");
	}
	//2.创建请求
	var time = new Date().getTime(); //获取时间戳
	ajax.open('GET', url + '?t=' + time, true); //添加时间戳,防止数据缓存
	//3.向服务器发送请求
	ajax.send(null);
	//4.检测状态
	ajax.onreadystatechange = function() {
		//两个状态 1:发送请求成功   4:接收成功
		if(ajax.readyState == 4) { //说明数据接收成功
			if(ajax.status >= 200 && ajax.status < 207 || ajax.status == 304) { //请求成功
				//在这里得到请求成功的数据 试用函数回调处理数据
				//ajax.responseText 返回请求成功的数据
				if(succeedFn) {
					succeedFn(ajax.responseText); //请求数据成功
				}
			} else { //请求失败
				if(errorFn) {
					errorFn(ajax.status); //返回请求数据失败的状态码
				}
			}
		}
	}
}
