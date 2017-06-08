//封装cookie的功能函数
//功能一:添加cookie的功能
function addCookie(cookieKey, cookieValue, overSecones) {
	//document.cookie = 'QQ=1032166866;max-age='+ a;
	document.cookie = cookieKey + '=' + cookieValue + ';max-age=' + overSecones;
}
//功能二:删除cookie功能
function deleteCookie(key) {
	document.cookie = key + '=;max-age=-1';
}
//功能三:通过key获取cookie中key对应得value值
function getCookie(key) {
	//使用';'进行分割
	var arr = document.cookie.split(';');
	for (var i = 0; i < arr.length; i++) {
		//使用'='分割
		var arr2 = arr[i].split('=');
		//trim可以去除字符串中的前后空格
		if (key == arr2[0].trim()) {
			return arr2[1].trim(); //返回key对应的value值
		}
	}
}
//功能四:判断cookie是否存在(判断key值是否存在?) 如果存在,返回true,不存在则返回false;
function isCookieKey (key) {
	var arr = document.cookie.split(';');
	for (var i = 0;i < arr.length;i++) {
		var arr2 = arr[i].split('=');
		if (arr2[0].trim() == key) {
			return true;//找到该key值,说明存在
		}
	}
	return false;
}
