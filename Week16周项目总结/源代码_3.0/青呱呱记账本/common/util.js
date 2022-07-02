function friendlyDate(lasttime) {
	var laststamp = new Date(lasttime);
	var timestamp = laststamp.getTime();
	
	var formats = {
		'year': '%n% 年前',
		'month': '%n% 月前',
		'day': '%n% 天前',
		'hour': '%n% 小时前',
		'minute': '%n% 分钟前',
		'second': '%n% 秒前',
	};

	var now = Date.now();
	var seconds = Math.floor((now - timestamp) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						diffValue = seconds === 0 ? (seconds = 1) : seconds;
					}
				}
			}
		}
	}
	return formats[diffType].replace('%n%', diffValue);
}

function HowLongDate(to) {
	var formats = {
		'year': '%n% 年后',
		'month': '%n% 月后',
		'day': '%n% 天后',
		'hour': '%n% 小时后',
		'minute': '%n% 分钟后',
		'second': '%n% 秒后',
	};
	
	var toDate = new Date(to);
	var timestamp = toDate.getTime();
	var now = Date.now();

	var seconds = Math.floor((timestamp - now) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						diffValue = seconds === 0 ? (seconds = 1) : seconds;
					}
				}
			}
		}
	}
	return formats[diffType].replace('%n%', diffValue);
}

//获取时间
function getTime() {
	var date = new Date(),
	year = date.getFullYear(),
	month = date.getMonth() + 1,
	day = date.getDate(),
	hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
	minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
	second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	month >= 1 && month <= 9 ? (month = "0" + month) : "";
	day >= 0 && day <= 9 ? (day = "0" + day) : "";
	var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	return timer;
}
//获取年份
function getYear() {
	var date = new Date(),
	year = date.getFullYear();
	return year;
}
//获取月份
function getMonth() {
var date = new Date(),
	year = date.getFullYear(),
	month = date.getMonth() + 1;
	month >= 1 && month <= 9 ? (month = "0" + month) : "";
	return month;
}
//当前一个比后一个小return true,验证两个时间是否合理
function compareTime(timeA, timeB) {
	var oDate1 = new Date(timeA);
	var oDate2 = new Date(timeB);
	if(oDate1.getTime() >= oDate2.getTime()) {
		return false;
	} 
	return true;
}

//校验邮箱格式
function checkEmail(email){
    return RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(email);
}
//校验手机格式
function checkMobile(mobile){
    return RegExp(/^1[34578]\d{9}$/).test(mobile);
}

/**
 * 验证是否为电话号码（座机）
 *
 * @param {}
 *            source
 */
 
function isTelephone(source) {
    var regex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
    return regex.test(source);  //search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1
}

//验证是否是中文
function isChines(source){
    var regex = /^[\u4E00-\u9FA5]+$/;
    return regex.test(source);
}

//是否为非空&带有特殊符号
function checkText(source) {
	// 特殊符号
	var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
		regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
	var empty = "^[ ]+$";
	var re = new RegExp(empty);
	
	if (source == '' || re.test(source) || regEn.test(source) || regCn.test(source)) {
		return true;
	}
	return false;
} 

export default{
	getTime,
	getYear,
	getMonth,
	compareTime,
	HowLongDate,
	friendlyDate,
	checkEmail,
	checkMobile,
	checkText,
}
