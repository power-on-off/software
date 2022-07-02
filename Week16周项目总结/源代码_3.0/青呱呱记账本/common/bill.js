//创建账单信息表(8个输入)
function insert_PayInfo(id, year, month, time, money, if_pay, type, remark) {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: 'create table if not exists PayInfo("id" varchar(100) ,"year" varchar(10), "month" varchar(5),"time" varchar(20), "money" REAL, "if_pay" varchar(1), "type" varchar(10),"remark" varchar(100))',
		success: function(e) { 
			var sqls = '';
			sqls = "insert into PayInfo values('" + id + "','" + year + "','" + month + 
			"','"  + time + "','" + money + "','" + if_pay + "','" + type + "','" + remark + "');";
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
			console.log('账单信息表新建 success!');
		},
		fail: function(e) {
			console.log('executeSql failed: ' + JSON.stringify(e));
		}
	});
}

//删除某个账单信息表
function delete_PayInfo(id) {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: "delete from PayInfo where id = '" + id + "';",
		success: function(e) {
		},
		fail: function(e) {
		}
	});
}

//删除整个账单信息表
function delete_PayInfo(id) {
	plus.sqlite.executeSql({
		name: 'mydata',
		sql: "drop table PayInfo;",
		success: function(e) {
		},
		fail: function(e) {
		}
	});
}



export default {
	insert_PayInfo,
	delete_PayInfo,
	drop_PayInfo,
}
