<template>
	<view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">返回</block>
			<block slot="content">添加习惯事项</block>
		</cu-custom>

		<view class="margin-top">
			<form id="eform">
				
				<view class="cu-form-group margin-top">
					<view class="title">事项类型</view>
					<picker @change="PickerChange" :value="index" :range="dailyEvenType">
						<view class="picker" v-model="userdata.type" name="type" >
							  
							  {{index>-1?dailyEvenType[index]:'请选择事项类型'}}
						</view>
					</picker>
				</view>
				
				 <view class="cu-form-group">
				 	<view class="title from_width">事项内容</view>
				 	<input type="text" v-model="userdata.remark" placeholder="请输入事项内容" name="money"></input>
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
				userdata: {
					id: '0',
					year:uu.getYear(),
					month:uu.getMonth(),
					time: uu.getTime(), 
					last: uu.getTime(),
					completes: '0',
					type:'',
					remark:'',
				}, 
				dailyEvenType: ['学习','早起','早睡','运动','生活','其他'],
			}
		},
		onLoad() { 
		},
		onReady() { 
		},
		methods: {

			PickerChange(e) {
				console.log(e.detail);
				this.index = e.detail.value;
				this.userdata.type = e.detail.value;
			},
			
			backButton() {
				uni.navigateBack({
					delta: 1
				});
			},
			
			
			//录入记录
			tj() {
				var _self = this; 
				
				//验证是否选择 账单
				if(this.index < 0) {
					 uni.showToast({
					 	title: '请选择事项类型！',
					 	icon: 'none'
					 });
					 return;
				} 
				
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

				uni.showLoading({
					title: '提交中...'
				})
				//生成唯一ID
				this.userdata.id = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);

				//录入账单表
				
				let sqls = "insert into dailyEventInfo values('" + _self.userdata.id + "','" + _self.userdata.year + "','" + _self.userdata.month +
					"','"  + _self.userdata.time + "','" +  _self.userdata.time +  "','"  +  _self.userdata.completes + "','" + 
					 +  _self.userdata.type + "','" + _self.userdata.remark + "');";
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
						console.log('executeSql success!' + JSON.stringify(e));
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
