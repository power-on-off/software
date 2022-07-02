//删除事项（临时、习惯）
function delEvent(id,eventtype,e) {
	uni.showModal({
		title: '删除事项',
		content: '确定要删除该事项吗？',
		cancelText: '取消',
		confirmText: '确定',
		
		success: res => {
			if (res.confirm) {
				let sqls = "delete from "+ eventtype + " where id='" + id + "'";

				plus.sqlite.executeSql({
					name: 'mydata',
					sql: sqls,
					success: function(e) {
						uni.showToast({
							title: '删除成功！',
							icon: "success"
						});
						console.log('删除成功 操作!'); 
					},
					fail: function(e) {
						uni.showToast({
							title: '删除失败！',
							icon: "none"
						});
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				});
			}
		}
	})
	return;
}
//获取临时
function getTemEventList() {
	plus.sqlite.selectSql({
		name: 'mydata',
		sql: "select * from temEventInfo",
		success: (res) => {
			return res;
		},
		fail: function(e) {
			console.log('selectSql failed: ' + JSON.stringify(e));
			return null;
		}
	});
}


//获取临时
function getDailyEventList() {
	plus.sqlite.selectSql({
		name: 'mydata',
		sql: "select * from dailyEventInfo",
		success: (res) => {
			return res;
		},
		fail: function(e) {
			console.log('selectSql failed: ' + JSON.stringify(e));
			return null;
		}
	});
}

export default{
	delEvent,
	getTemEventList,
	getDailyEventList,
}
