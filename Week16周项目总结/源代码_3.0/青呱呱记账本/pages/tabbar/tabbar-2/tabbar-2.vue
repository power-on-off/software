<template>
	<view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="return1()">退出</block>
			<block slot="content">账单列表</block>
		</cu-custom>


		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-cyan cur':''" v-for="(item,index) in devtypelist" :key="index"
			 @tap="tabSelect" :data-id="index">
				<block>
					<text :class="devtypelist[index].icon" type="default"></text>
					<text style="padding-left: 5px;" type="default">
						{{devtypelist[index].title}}</text>
				</block>

			</view>
		</scroll-view>
		
		<scroll-view scroll-y :style="[{top:CustomBar+300 + 'px'}]">

			<view class="cu-list menu-avatar" style="margin-top: 100upx;">
				<block v-if="TabCur==0">
					<view class="cu-item" style="height: 220upx;margin-bottom: 20upx;;" v-for="(item,i) in listcontents_before" :key="i">

						<view class="content" style="left: 30upx;">
							<template>
								<view>
									<view class="text-grey">账单ID:{{item.id}}</view>
								</view>
								<view>
									<view class="text-grey">账单时间:&emsp;{{item.time}}</view>
								</view>
								<view>
									<view class="text-grey">账单类型:&emsp;{{payType[item.type]}}</view>
								</view>
								<view>
									<view class="text-grey">金额:&emsp;{{item.money}}</view>
								</view>
								<view>
									<view class="text-grey">备注:&emsp;{{item.remark}}</view>
								</view> 
                               
							</template>
						</view>
							 <view class="action">
							       <view class="cu-btn round cuIcon-delete text-red lg" style="float: right;" @tap="del(item.id, item.money, 1)" :data-index="i"></view>
							 </view>
					</view>
				</block>

				<block v-if="TabCur==1">
					<view class="cu-item" style="height: 220upx;margin-bottom: 20upx;" v-for="(item,i) in listcontents_after" :key="i">
						<view class="content" style="left: 30upx;">
							<template>
								<view>
									<view class="text-grey">账单ID:{{item.id}}</view>
								</view>
								<view>
									<view class="text-grey">账单时间:&emsp;{{item.time}}</view>
								</view>
								<view>
									<view class="text-grey">账单类型:&emsp;{{incomeType[item.type]}}</view>
								</view>
								<view>
									<view class="text-grey">金额:&emsp;{{item.money}}</view>
								</view>
								<view>
									<view class="text-grey">备注:&emsp;{{item.remark}}</view>
								</view>
							</template>
						</view>
							<view class="action">
							      <view class="cu-btn round cuIcon-delete text-red lg" style="float: right;" @tap="del(item.id, item.money, 2)" :data-index="i"></view>
							 </view>				
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				pid: 0,
				listcontents_before: [],
				listcontents_after: [],
				devtypelist: [{
						title: '支出',
						icon: 'cuIcon-goods'
					},
					{
						title: '收入',
						icon: 'cuIcon-roundcheck'
					},
				],
				//支出账单10个类型
				payType: ['食物','游玩','衣物','通勤','生活','会员','学习','交往','医疗','其他'],
				//收入账单10个类型
				incomeType: ['工资','投资','兼职','奖金','利息','加班','中奖','家长给予','红包','其他'],
			}
		}, 
		onShow() {
			this.getorderlist();
		},
		onLoad(event) {
			this.pid = 0;
			console.log('当前选项卡' + this.pid);
			this.TabCur = this.pid;
		},
		onBackPress(options) {
			// Android 实体返回键 (from = backbutton)
			// 顶部导航栏左边的返回按钮 (from = backbutton)
			// 返回 API，即 uni.navigateBack() (from = navigateBack)

			if (options.from === 'navigateBack') {
				return false;
			}
			this.backButton();
			return true;

		},
		 
		methods: {
			// 全文展开收起
			toggleDescription(num) {
				//this.showText = !this.showText;
				uni.showModal({
					content: num
				})
			},
			backButton() {
				uni.switchTab({
					url: "../tabbar-1/tabbar-1"
				});
			},
			return1() {
				uni.switchTab({
					url: "../tabbar-1/tabbar-1"
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				console.log('当前选项卡' + this.TabCur);

			},
			todetail() {
				uni.navigateTo({
					url: 'orderdetail'
				})
			},
			onPullDownRefresh() {
				//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
				this.getorderlist();
				console.log('refresh');
				setTimeout(function() {
					uni.stopPullDownRefresh(); //停止下拉刷新动画
				}, 1000);
			},
			
			//添加账单
			addPay() {
				var url = "/bill/bill_add";
				if (!url) {
					uni.showToast({
						title: '模板未包含此页面',
						icon: "none"
					});
					return;
				}
				uni.navigateTo({
					url: url
				})
			},
			
			getorderlist() {
				//查询账单集合
				var _self = this;
				plus.sqlite.selectSql({
					name: 'mydata',
					sql: "select * from PayInfo where 1=1 and if_pay='1'",
					success: (res) => {
						res.reverse();
						_self.listcontents_before = res;
						console.log(res);
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});

				plus.sqlite.selectSql({
					name: 'mydata',
					sql: "select * from PayInfo where 1=1 and if_pay='0'",
					success: (res) => {
						_self.listcontents_after = res;
						console.log(res);
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
			},
			//删除 账单
			del(id, billMoney, number, e) {
				var that = this;
				uni.showModal({
					title: '删除账单',
					content: '确定要删除该账单吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							let sqls = "delete from Payinfo where id='" + id + "'";
			
							plus.sqlite.executeSql({
								name: 'mydata',
								sql: sqls,
								
								success: function(e) {
									plus.sqlite.selectSql({
										name: 'mydata',
										sql: "select * from user where id = 1;",
										success: (res) => {
											let oldMoney = Number(res[0].money);
											var newMoney;
											if (number == 1) {
												newMoney = Number(oldMoney) + Number(billMoney);
											}
											else {
												newMoney = Number(oldMoney) - Number(billMoney);
											}
											
											plus.sqlite.selectSql({
												name: 'mydata',
												sql: "update user SET money = "  + "'" + newMoney + "'" + " WHERE id = 1;",
												success: (res) => {
													console.log("ok");
												},
											});
										}
									});	
									uni.showToast({
										title: '删除成功！',
										icon: "success"
									});
									console.log('删除成功 操作!'); 
									that.getorderlist();
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
			},
			
		}
	}
</script>

<style>
	
</style>
