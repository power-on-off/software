//初始化支出账单表
//支出账单10个类型
var payType = ['食物','游玩','衣物','通勤','生活','会员','学习','交往','医疗','其他'];
//收入账单10个类型
var incomeType = ['工资','投资','兼职','奖金','利息','加班','中奖','家长给予','红包','其他'];


//习惯事项类型
var dailyEvenType = ['学习','早起','早睡','运动','生活','其他'];


//账单初始化
var payInfolist = [];

//临时项初始化
var temEventList = [];

//习惯事项初始化
var dailyEventList = [];

 
//创建数据库:mydata
function opendb() {
	plus.sqlite.openDatabase({
		name: 'mydata',
		path: '_doc/mydata.db',
		success: function(e) {
			console.log('openDatabase success!');
		},
		fail: function(e) {
			console.log('openDatabase failed: ' + JSON.stringify(e));
		}
	});
}
//关闭数据库mydata
function closedb() {
	plus.sqlite.closeDatabase({
		name: 'mydata',
		success: function(e) {
			console.log('closeDatabase success!');
		},
		fail: function(e) {
			console.log('closeDatabase failed: ' + JSON.stringify(e));
		}
	});
}


//创建账单信息表
function executesql_PayInfo() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: 'create table if not exists PayInfo("id" varchar(100) ,"year" varchar(10), "month" varchar(5),"time" varchar(20), "money" REAL, "if_pay" varchar(1), "type" varchar(10),"remark" varchar(100))',
		success: function(e) { 
			var sqls = '';
			for (var i = 0; i < payInfolist.length; i++) {
				var pay = payInfolist[i];
				sqls = "insert into PayInfo values('" + pay.id + "','" + pay.year + "','" + pay.month + 
				"','"  + pay.time + "','" + pay.money + "','" + pay.if_pay + "','" + pay.type + "','" + pay.remark + "');";
				plus.sqlite.executeSql({
					name: 'mydata',
					sql: sqls,
					success: function(e) {
						console.log('账单信息表新建 sucess： ' + JSON.stringify(e));
					},
					fail: function(e) {
						console.log('账单信息表新建 failed: ' + JSON.stringify(e));
					}
				});
			}
			console.log('账单信息表新建 success!');
		},
		fail: function(e) {
			console.log('executeSql failed: ' + JSON.stringify(e));
		}
	});
}

//清空账单信息表
function truncate_PayInfo() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: "delete from PayInfo",
		success: function(e) {
			console.log('清空账单信息表 success!');
		},
		fail: function(e) {
			console.log('清空账单信息表 failed: ' + JSON.stringify(e));
		}
	});
}


//事项表
/**********************************/
//创建临时事项信息表
function executesql_EventInfo_tem() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: 'create table if not exists temEventInfo("id" varchar(100) ,"year" varchar(10), "month" varchar(5),"time" varchar(20), "from" varchar(10), "to" varchar(10), "if_finish" varchar(2), "remark" varchar(100))',
		success: function(e) { 
			var sqls = '';
			for (var i = 0; i < temEventList.length; i++) {
				var event = temEventList[i];
				sqls = "insert into temEventInfo values('" + event.id + "','" + event.year + "','" + event.month + 
				"','"  + event.time + "','" + event.from + "','" + event.to + "','" + event.if_finish + "','" + pay.remark + "');";
				
				plus.sqlite.executeSql ({
					name: 'mydata',
					sql: sqls,
					success: function(e) {
						console.log('账单信息表新建 sucess： ' + JSON.stringify(e));
					},
					fail: function(e) {
						console.log('账单信息表新建 failed: ' + JSON.stringify(e));
					}
				});
			}
			console.log('账单信息表新建 success!');
		},
		fail: function(e) {
			console.log('executeSql failed: ' + JSON.stringify(e));
		}
	});
}

//清空临时事项信息表
function truncate_EventInfo_tem() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: "delete from temEventInfo",
		success: function(e) {
			console.log('清空账单信息表 success!');
		},
		fail: function(e) {
			console.log('清空账单信息表 failed: ' + JSON.stringify(e));
		}
	});
}

//创建日常事项信息表
function executesql_EventInfo_daily() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: 'create table if not exists dailyEventInfo("id" varchar(100) ,"year" varchar(10), "month" varchar(5),"time" varchar(20), "last" varchar(20), "completes" INTEGER,"type" varchar(5), "remark" varchar(100))',
		success: function(e) { 
			var sqls = '';
			for (var i = 0; i < dailyEventList.length; i++) {
				var event = dailyEventList[i];
				sqls = "insert into dailyEventInfo values('" + event.id + "','" + event.year + "','" + event.month + 
				"','"  + event.time + "','" + event.last + "','" + event.completes + "','" + event.type + "','" + pay.remark + "');";
				
				plus.sqlite.executeSql ({
					name: 'mydata',
					sql: sqls,
					success: function(e) {
						console.log('日常事项表新建 sucess： ' + JSON.stringify(e));
					},
					fail: function(e) {
						console.log('日常事项表新建 failed: ' + JSON.stringify(e));
					}
				});
			}
			console.log('日常事项表新建 success!');
		},
		fail: function(e) {
			console.log('executeSql failed: ' + JSON.stringify(e));
		}
	});
}

//清空日常事项信息表
function truncate_EventInfo_daily() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: "delete from dailyEventInfo",
		success: function(e) {
			console.log('清空日常事项表 success!');
		},
		fail: function(e) {
			console.log('清空日常事项表 failed: ' + JSON.stringify(e));
		}
	});
}

//创建用户表
function executesql_user() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: 'create table if not exists user("id" vaechar(2), "money" DECIMAL(30,5))',
		success: function(e) { 
			var	sqls = "insert into user values('1', '0');";
			plus.sqlite.executeSql ({
				name: 'mydata',
				sql: sqls,
				success: function(e) {
					console.log('资产新建 sucess： ' + JSON.stringify(e));
				},
				fail: function(e) {
					console.log('资产新建 failed: ' + JSON.stringify(e));
				}
			});
			console.log('资产新建success!');
		},
		fail: function(e) {
			console.log('executeSql failed: ' + JSON.stringify(e));
		}
	});
}

//清空用户表
function truncate_user() {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: "drop table user",
		success: function(e) {
			console.log('清空资产success!');
		},
		fail: function(e) {
			console.log('清空资产 failed: ' + JSON.stringify(e));
		}
	});
}


export default {
	opendb,
	closedb,
	executesql_PayInfo,truncate_PayInfo,
	
	executesql_EventInfo_daily,truncate_EventInfo_daily,
	
	executesql_EventInfo_tem,truncate_EventInfo_tem,
	executesql_user, truncate_user,
}
