<template>
	<view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">返回</block>
			<block slot="content">添加收入账单</block>
		</cu-custom>

		<view class="margin-top">
			<form id="eform">
				<view class="cu-form-group margin-top">
					<view class="title">账单类型</view>
					<picker @change="PickerChange" :value="index" :range="incomeType">
						<view class="picker" v-model="userdata.type" name="type" >
							  
							  {{index>-1?incomeType[index]:'请选择账单类型'}}
						</view>
					</picker>
				</view>
				
				 <view class="cu-form-group">
				 	<view class="title from_width">账单金额</view>
				 	<input type="digit" v-model="userdata.money" placeholder="请输入账单金额" name="money"></input>
				 </view>
				<view class="cu-form-group ">
					<view class="title  from_width">账单备注</view>
					<input type="text" v-model="userdata.remark" placeholder="请输入备注" name="remark"></input>
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
					money:'',
					if_pay:'0',
					type:'',
					remark:'',
				}, 
				//收入账单10个类型
				incomeType: ['工资','投资','兼职','奖金','利息','加班','中奖','家长给予','红包','其他'],
				oldMoney: '',
				newMoney: '',
			}
		},
		onLoad() { 
		},
		onReady() { 
		},
		methods: {
			DateChange(e) {
				this.date = e.detail.value
			},
			PickerChange(e) {
				console.log(e.detail);
				this.index = e.detail.value;
				 
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
					 	title: '请选择账单类型！',
					 	icon: 'none'
					 });
					 return;
				}
				//验证是否填写金额
				if(this.userdata.money < 0.005) {
					 uni.showToast({
					 	title: '请输入正确的金额！（不得低于0.005）',
					 	icon: 'none'
					 });
					 return;
				}

				uni.showLoading({
					title: '提交中...'
				})
				//生成唯一ID
				this.userdata.id = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);

				this.userdata.type = this.index;
				//录入账单表
				//保留小数点后两位
				_self.userdata.money = parseFloat(_self.userdata.money).toFixed(2);
			
				let sqls = "insert into PayInfo values('" + _self.userdata.id + "','" + _self.userdata.year + "','" + _self.userdata.month +
					"','"  + _self.userdata.time + "','" + _self.userdata.money + "','" + _self.userdata.if_pay + "','" + _self.userdata.type + "','" + _self.userdata.remark + "');";
				console.log(sqls);		
				//执行添加sql
				plus.sqlite.executeSql({
					name: 'mydata',
					sql: sqls,
					success: function(e) {
						//执行成功后返回
						uni.showToast({
							title: '添加成功！',
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
				//修改资本
				plus.sqlite.selectSql({
					name: 'mydata',
					sql: "update user SET money = (money + " + _self.userdata.money + ") WHERE id = 1;",
					success: (res) => {
						console.log("ok");
					},
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
