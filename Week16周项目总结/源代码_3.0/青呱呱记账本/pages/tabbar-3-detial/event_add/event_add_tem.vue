<template>
	<view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">返回</block>
			<block slot="content">添加临时事项</block>
		</cu-custom>

		<view class="margin-top">
			<form id="eform">
				
				 <view class="cu-form-group">
				 	<view class="title from_width">事项内容</view>
				 	<input type="text" v-model="userdata.remark" placeholder="请输入事项内容" name="money"></input>
				 </view>
				 
				 <view class="cu-form-group">
				 	<view class="title">起始日期选择</view>
				 	<picker mode="date" :value="userdata.fromDate" start = userdata.time end="2099-09-01" @change="DateChangeFrom">
				 		<view class="picker">
				 			{{userdata.fromDate}}
				 		</view>
				 	</picker>
				 </view>
				 <view class="cu-form-group">
				 	<view class="title">起始时间选择</view>
				 	<picker mode="time" :value="userdata.fromTime" start="00:00" end="23:59" @change="TimeChangeFrom">
				 		<view class="picker">
				 			{{userdata.fromTime}}
				 		</view>
				 	</picker>
				 </view>
				 
				 <view class="cu-form-group">
				 	<view class="title">截止日期选择</view>
				 	<picker mode="date" :value="userdata.toDate" start="userdata.fromDate"f  end="2099-09-01" @change="DateChangeTo">
				 		<view class="picker">
				 			{{userdata.toDate}}
				 		</view>
				 	</picker>
				 </view>
				 <view class="cu-form-group">
				 	<view class="title">截止时间选择</view>
				 	<picker mode="time" :value="userdata.fromDate" start="00:00" end="23:59" @change="TimeChangeTo">
				 		<view class="picker">
				 			{{userdata.toTime}}
				 		</view>
				 	</picker>
				 </view>
				 
				
				<view class="bg-white align-center">
					<view class="flex flex-wrap">
						<view class="basis-df padding">
							<button class="bg-cyan xs text-lg" @tap="tj()">提交</button>
						</view>
						<view class="basis-df  padding">
							<button class="bg-cyan xs text-lg" form-type="reset" refBtn>清空</button>
						</view>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import uu from "@/common/util.js";

	export default {
		data() {
			
			return {
				index: -1,
				afterbegin:uu.getTime().substr(0,10),
				userdata: {
					id: '0',
					year:uu.getYear(),
					month:uu.getMonth(),
					time: uu.getTime(), 
					fromDate:uu.getTime().substr(0,10),
					fromTime:uu.getTime().substr(11,5),
					toDate:uu.getTime().substr(0,10),
					toTime:uu.getTime().substr(11,5),
					if_finish:'0',
					remark:'',
				}, 
			}
		},
		onLoad() { 
		},
		onReady() { 
		},
		methods: {
			DateChangeFrom(e) {
				this.userdata.fromDate = e.detail.value
				this.userdata.toDate = e.detail.value;
			},
			DateChangeTo(e) {
				this.userdata.toDate = e.detail.value
				
			},
			PickerChange(e) {
				console.log(e.detail);
				this.index = e.detail.value;
				 
			},
			
			TimeChangeFrom(e) {
				this.userdata.fromTime = e.detail.value
			},
			TimeChangeTo(e) {
				this.userdata.toTime = e.detail.value
			},
			
			backButton() {
				uni.navigateBack({
					delta: 1
				});
			},
			
			
			//录入记录
			tj() {
				var _self = this; 
				
				var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
					regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
				var thecon = this.userdata.remark;
				var empty = "^[ ]+$";
				var re = new RegExp(empty);
				//验证是否输入特殊字符串或者为空或者输入了多个空格
				if (thecon == '' || re.test(thecon) || regEn.test(thecon) || regCn.test(thecon)) {
					uni.showToast({
						title: '请输入正确的内容！',
						icon: 'none'
					});
					return;
				}	
				//验证两个时间是否合理，前一个比后一个小为真
				var ans = uu.compareTime(_self.userdata.fromDate +" " +  _self.userdata.fromTime + ":00",_self.userdata.toDate +" " +  _self.userdata.toTime + ":00");
				if(!ans) {
					uni.showToast({
						title: '截止时间不能早于起始时间！',
						icon: 'none'
					});
					return;
				} 
				uni.showLoading({
					title: '提交中...'
				})
				//生成唯一ID
				this.userdata.id = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);

				//录入账单表
				
				let sqls = "insert into temEventInfo values('" + _self.userdata.id + "','" + _self.userdata.year + "','" + _self.userdata.month +
					"','"  + _self.userdata.time + "','" + _self.userdata.fromDate +" " +  _self.userdata.fromTime + ":00','" + 
					_self.userdata.toDate +" " +  _self.userdata.toTime+ ":00','" + _self.userdata.if_finish + "','" +
					 _self.userdata.remark + "');";
				console.log(sqls);		
				//执行sql
				plus.sqlite.executeSql({
					name: 'mydata',
					sql: sqls,
					success: function(e) {
						//执行成功后返回
						uni.showToast({
							title: '添加事项成功！',
							icon: "success"
						});
						console.log('executeSql success!');
						uni.hideLoading();
					},
					fail: function(e) {
						
						uni.showToast({
							title: '添加失败！',
							icon: "none"
						});
						uni.hideLoading();
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				}); 
				 
				_self.backButton();
			},
			clearForm() {
				//h5端可以 //翻源码得知的清空表单方法
				console.log('触发清空表单事件');
				this.$refs.refBtn.$dispatch('Form', 'uni-form-reset', {
					type: 'reset'
				})
			}, 
		}
	}
</script>

<style>
	page {
		width: 100vw;
		position: relative;
		background-color: #fff;
	}

	.from_width {
		width: 200upx;
	}
</style>
