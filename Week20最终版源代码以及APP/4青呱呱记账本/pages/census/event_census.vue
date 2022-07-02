<!-- 薪资排行 -->
<template>
	<view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">返回</block>
			<block slot="content">习惯事项统计</block>
		</cu-custom>
		
		<view class="contaier" style="background-color: #FFFFFF;">
			<view class="top_bg">
				<view class="one_box">
					<!-- 第二名 -->
					<view class="top3">
						<view class="num_two">
							<image class="huangguan2" src="../../static/rank/two.png"></image>
							<image class="top3_head" :src="SecondPic"></image>
							<view class="top_name">{{Second.remark}}</view>
							<view class="top_sy">{{Second.completes}}<span></span></view>
						</view>
					</view>

					<!-- 第一名 -->
					<view class="top3">
						<view class="num_one">
							<image class="huangguan1" src="../../static/rank/one.png"></image>
							<image class="top3_head" :src="FirstPic"></image>
							<view class="top_name text-bold" style="font-size: 30rpx;">{{First.remark}}</view>
							<view class="top_sy">{{First.completes}}<span></span></view>
						</view>
					</view>

					<!-- 第三名 -->
					<view class="top3">
						<view class="num_three">
							<image class="huangguan2" src="../../static/rank/three.png"></image>
							<image class="top3_head" :src="ThirdPic"></image>
							<view class="top_name">{{Third.remark}}</view>
							<view class="top_sy">{{Third.completes}}<span></span></view>
						</view>
					</view>
				</view>


				<view class="number_sy_box">
					<view class="number_sy_box_title">
						<text>事项统计</text>
						<text style="position: absolute; right: 20rpx;z-index: 9999; font-size: 24rpx;color: #c3c3c3;">
							截止：{{nowTime}}
						</text>
					</view>
					<view class="number_sy_main">
						<view style="width: 50%; text-align: center; border-right: 1px solid #eee;">
							<view class="number_num1">{{amount}}</view>
							<view class="danwei">习惯事项数量</view>
						</view>
						<view style="width: 50%; text-align: center; z-index: 9999;">
							<view class="number_num2">{{allcomplete}}</view>
							<view class="danwei">总完成次数</view>
						</view>

						</view>
				</view>
			</view>

			<view class="rankList_box">
				<view class="rankItem" v-for="(item,index) in rankList" :key="index">
					<view class="rankIndex">
						<text>{{ index + 1 }}</text>
					</view>
					<view class="HeardBox">
						<image class="rankHeard" :src="item.pic "></image>
					</view>

					<view class="NameBox">
						<view class="userName text-bold">{{item.remark}}</view>
						<view class="userPost text-gray">{{item.time.substr(0,10)}}开始</view>
						<view class="color_ccc">{{item.completes}}｜<text class="text-blue"> {{item.type}}</text></view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uu from "@/common/util.js";
	export default {
		data() {
			return {
				//总共的事项数量
				amount:'',
				//总共完成次数
				allcomplete:0,
				//日常事项类型
				dailyEventType: ['学习','早起','早睡','运动','生活','其他'],
				//日常事项类型
				dailyEventPic: ['learn.png','wake.png','sleep.png','sport.png','live.png','other.png'],
				nowTime: '',
				
				First:{
					'remark':"虚席以待",
				},
				Second:{
					'remark':"虚席以待",
				},
				Third:{
					'remark':"虚席以待",
				},
				FirstPic:'../../static/event/ques.png',
				SecondPic:'../../static/event/ques.png',
				ThirdPic:'../../static/event/ques.png',
				rankList: [],
			}
		},
		onLoad() {
			this.nowTime = uu.getTime();
			this.getRank();
		},
		methods: {
		
			getRank() {
				//获取所有事项的排名
				let that = this;
				
				plus.sqlite.selectSql({
					name: 'mydata',
					sql: "select * from dailyEventInfo order by completes and type desc",
					success: (res) => {
						let len = res.length;
						that.amount = len;
						
						for (let i = 0; i < len; i++) {
							that.allcomplete += res[i].completes;
							
							let newone = new Object();
							newone.pic =  '../../static/event/' + that.dailyEventPic[(res[i].type)];
							newone.type = that.dailyEventType[(res[i].type)];
							newone.time = res[i].time; 
							
							newone.completes = "坚持了" + res[i].completes + "天";
							newone.remark = res[i].remark;
							that.rankList.push(newone);
							
							if (i == 0) {
								that.First = newone;
								that.FirstPic = newone.pic;
							}
							if (i == 1) {
								that.Second = newone;
								that.SecondPic = newone.pic;
							}
							if (i == 2) {
								that.Third = newone;
								that.ThirdPic = newone.pic;
							}
						}
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
			}
		},
		filters: {

		}
	}
</script>

<style lang="scss">
	.top_bg {
		width: 750rpx;
		//650
		height: 450rpx;
		background:#1cbbb4;
		background-size: 750rpx;
		position: relative;
	}

	.one_box {
		width: 750rpx;
		height: 260rpx;
		position: absolute;
		left: 0;
		bottom: 110rpx;
		display: flex;
		justify-content: space-around;
	}

	.one_box .top3 {
		width: 210rpx;
		height: 280rpx;
	}

	.top_name {
		width: 100%;
		height: 55rpx;
		line-height: 60rpx;
		color: #f2f2f2;
		font-size: 26rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy {
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, .7);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy span {
		font-size: 20rpx !important;
	}

	.num_one {
		position: relative;
	}

	.huangguan1 {
		width: 60px;
		height: 60px;
		position: absolute;
		right: -10rpx;
		top: -18*2rpx;
	}

	.num_one .top3_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 15rpx 0 0 30rpx;
		border: 4rpx solid #ffdd3c;
	}

	.num_two {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_two .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #bcdcdf;
	}

	.num_three {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_three .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #e29d85;
	}

	// 第二块
	.number_sy_box {
		width: 700rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: 25rpx;
		border-radius: 20rpx;
		bottom: -115rpx;
		z-index: 999;
		padding: 22rpx;
		box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
	}

	.number_sy_box_title {
		color: #888888;
		// font-weight: 500;
		font-size: 28rpx;
		display: flex;
		z-index: 9999;
		justify-content: space-between;
	}

	.number_sy_main {
		width: 100%;
		height: 124rpx;
		padding-top: 20rpx;
		line-height: 52rpx;
		// background: red;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.xiaoding_bg {
		position: absolute;
		right: -22rpx;
		bottom: -30rpx;
		width: 180rpx;
	}

	.number_num1 {
		font-size: 40rpx;
		font-weight: 500;
		color: #2fc04f;
	}

	.number_num2 {
		font-size: 40rpx;
		font-weight: 500;
		color: #4bac7f;
	}

	.danwei {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #c9c9c9;
	}

	// 列表
	.rankList_box {
		width: 750rpx;
		min-height: 200rpx;
		margin-top: 130rpx;
	}

	.rankItem:last-child {
		border: none;
	}

	.rankItem {
		width: 700rpx;
		height: 140rpx;
		margin: 0px auto;
		border-bottom: 1px solid #e9e9e9;
	}

	.rankIndex {
		width: 60rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #CCCCCC;
		font-size: 40rpx;
		float: left;
	}

	.HeardBox {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
		border-radius: 100%;
		overflow: hidden;
		float: left;
		margin-right: 25rpx;
		margin-left: 10rpx !important;
	}

	.HeardBox image {
		width: 100%;
		height: 100%;
	}

	.NameBox {
		width: 400rpx;
		height: 140rpx;
		float: left;
		padding-top: 10rpx;
		box-sizing: border-box;
	}

	.NameBox view {
		height: 50rpx;
		line-height: 70rpx;
	}

	.userName {
		min-width: 90rpx;
		font-size: 30rpx;
		float: left;
		margin-right: 20rpx;
	}

</style>
