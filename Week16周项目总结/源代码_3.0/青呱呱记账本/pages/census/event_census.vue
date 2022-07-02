<!-- 薪资排行 -->
<template>
	<view>

		
		<view class="contaier" style="background-color: #FFFFFF;">
			<view class="top_bg">
				<view class="one_box">
					<!-- 第二名 -->
					<view class="top3">
						<view class="num_two">
							<image class="huangguan2" src="../../static/rank/two.png"></image>
							<image class="top3_head" src="../../static/event/learn.png"></image>
							<!-- <view class="top_name">{{twoName}}</view> -->
							<view class="top_name">学习</view>
							<view class="top_sy">1<span>次</span></view>
						</view>
					</view>

					<!-- 第一名 -->
					<view class="top3">
						<view class="num_one">
							<image class="huangguan1" src="../../static/rank/one.png"></image>
							<image class="top3_head" src="../../static/event/wake.png"></image>
							<!-- <view class="top_name" style="font-size: 30rpx;">{{oneName}}</view> -->
							<view class="top_name text-bold" style="font-size: 30rpx;">早起</view>
							<view class="top_sy">2<span>次</span></view>
						</view>
					</view>

					<!-- 第三名 -->
					<view class="top3">
						<view class="num_three">
							<image class="huangguan2" src="../../static/rank/three.png"></image>
							<image class="top3_head" src="../../static/event/sleep.png"></image>
							<view class="top_name">早睡</view>
							<view class="top_sy">1<span>次</span></view>
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
							<view class="number_num1">4</view>
							<view class="danwei">总习惯事项</view>
						</view>
						<view style="width: 50%; text-align: center; z-index: 9999;">
							<view class="number_num2">4次</view>
							<view class="danwei">总完成次数</view>
						</view>

						</view>
				</view>
			</view>

			<view class="rankList_box">
				<view class="rankItem" v-for="(item,index) in rankList" :key="index">
					<view class="rankIndex">
						<text>{{ index + 4 }}</text>
					</view>
					<view class="HeardBox">
						<image class="rankHeard" :src="item.headimgurl "></image>
					</view>

					<view class="NameBox">
						<!-- <view class="userName">{{item.name}}</view> -->
						<view class="userName text-bold">{{item.name}}</view>
						<view class="userPost text-gray">{{item.post}}</view>
						<view class="color_ccc">{{item.city}} ｜ <text class="text-blue">{{item.salary}}</text></view>
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
				nowTime: '',
				rankList: [{
						headimgurl: '../../static/event/sport.png',
						name: '运动',
						post: '2022-6-3 16:11',
						city: '完成0次',
					}
				]
			}
		},
		onLoad() {
			this.nowTime = uu.getTime();
			
		},
		methods: {
		
		},
		filters: {

		}
	}
</script>

<style lang="scss">
	.top_bg {
		width: 750rpx;
		height: 650rpx;
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
