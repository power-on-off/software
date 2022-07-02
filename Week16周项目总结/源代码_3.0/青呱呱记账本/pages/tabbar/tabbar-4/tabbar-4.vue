<template>
	<view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">退出</block>
			<block slot="content">事项列表</block>
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
					<view class="cu-item" style="height: 300upx;margin-bottom: 20upx;;" v-for="(item,i) in listcontents_before" :key="i">
						<view class="content" style="left: 30upx;">
							<template>
									<view>
										<view class="text-grey">临时事项ID:{{item.id}}</view>
									</view>
									<view>
										<view class="text-grey">事项内容:&emsp;{{item.remark}}</view>
									</view>
									<view>
										<view class="text-grey">创建时间:&emsp;{{item.time}}</view>
									</view>
									<view>
										<view class="text-grey">起始时间:&emsp;{{item.from}}</view>
									</view>
									<view>
										<view class="text-grey">截止时间:&emsp;{{item.to}}</view>
									</view>
									<view>
										<view class="text-grey" v-if="item.if_finish==1" >完成情况:&emsp;已完成</view>
										<view class="text-grey" v-if="item.if_finish==0" >完成情况:&emsp;未完成</view>
									</view>
								
							</template>
						</view>
							<view class="action">
								  <view class="cu-btn round cuIcon-delete text-red lg" style="float: right;" @tap="del(item.id,'temEventInfo')" :data-index="i"></view>
							 </view>
					</view>
				</block>

				<block v-if="TabCur==1">
					<view class="cu-item" style="height: 300upx;margin-bottom: 20upx;" v-for="(item,i) in listcontents_after" :key="i">
						<view class="content" style="left: 30upx;">
								<template>
									<view>
										<view class="text-grey">习惯事项ID:{{item.id}}</view>
									</view>
									<view>
										<view class="text-grey">创建时间:&emsp;{{item.time}}</view>
									</view>
									<view>
										<view class="text-grey">习惯事项类型:&emsp;{{dailyEventType[item.type]}}</view>
									</view>
									<view>
										<view class="text-grey">上次完成时间:&emsp;{{item.last}}</view>
									</view>
									<view>
										<view class="text-grey">完成次数:&emsp;{{item.completes}}</view>
									</view>
									<view>
										<view class="text-grey">备注:&emsp;{{item.remark}}</view>
									</view> 
							       
								</template>
							</view>
								 <view class="action">
								      <view class="cu-btn round cuIcon-delete text-red lg" style="float: right;" @tap="del(item.id,'dailyEventInfo')" :data-index="i"></view>
								 </view>
		
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import ee from "@/common/event.js"
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				pid: 0,
				listcontents_before: [],
				listcontents_after: [],
				devtypelist: [{
						title: '临时事项',
						icon: 'cuIcon-goods'
					},
					{
						title: '习惯事项',
						icon: 'cuIcon-roundcheck'
					},
				],
				//日常事项类型
				dailyEventType: ['学习','早起','早睡','运动','生活','其他'],
			}
		}, 
		onShow() {
			this.geteventlist();
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
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				console.log('当前选项卡' + this.TabCur);

			},
			todetail() {
				uni.navigateTo({
					url: 'eventdetail'
				})
			},
			onPullDownRefresh() {
				//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
				this.geteventlist();
				console.log('refresh');
				setTimeout(function() {
					uni.stopPullDownRefresh(); //停止下拉刷新动画
				}, 1000);
			},
			
			//添加事项
			addevent() {
				var url = "/event_add/event_add_daily";
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
			//获取事项集合
			geteventlist() {
				//查询事项集合
				var _self = this;
				//前一个临时事项
				
				plus.sqlite.selectSql({
					name: 'mydata',
					sql: "select * from temEventInfo",
					success: (res) => {
						res.reverse();
						_self.listcontents_before = res;
						console.log(res);
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
				//后一个习惯事项
				plus.sqlite.selectSql({
					name: 'mydata',
					sql: "select * from dailyEventInfo",
					success: (res) => {
						_self.listcontents_after = res;
						console.log(res);
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
			},
			//删除事项
			del(id,type,e) {
				ee.delEvent(id,type);
				//数据更新慢，需要等待1秒再拿取数据
				setTimeout(()=>{
					this.geteventlist();
				},1000)
			},			
		}
	}
</script>

<style>
	
</style>
