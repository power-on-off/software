<template>
	<view class="center">
		
		<cu-custom>
			<block slot="content"></block>
		</cu-custom>
		
		<view class="logo">
			<image class="logo-img" src="../../../static/img/me.png"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，这里是个人中心</text>
			</view>
		</view>
		
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60f;</text>
				<text class="list-text" @tap = "setMoney">设置资产</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text" @tap = "output">数据导出</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text" @tap = "input">数据导入</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		
	</view>
</template>

<script>
import uu from "@/common/util.js";
	export default {
		data() {
			return {
				login: false,
				avatarUrl: "../../../static/img/me.png",
				uerInfo: {}
			}
		},
		methods: {
			setMoney() {
				uni.showModal({
					title: '修改资产',
					content: '注意，修改资产后账单仍然保留',
					showCancel:false,
					editable:true,
					placeholderText:"请输入整数数字",
					
					success: function (res) {
						if (res.confirm) {
							var newMoney = res.content;
							//校验是否为正整数
							var r = /^\+?[1-9][0-9]*$/;
							if ((!r.test(newMoney)) && newMoney != "0") {
								uni.showToast({
									title:'请输入非负整数',
									icon:"none"
								});
								return;
							}	
							plus.sqlite.selectSql({
								name: 'mydata',
								sql: "update user SET money = "  + "'" + newMoney + "'" + " WHERE id = 1;",
								success: (res) => {
									uni.showToast({
										title:'资产修改成功',
										icon:"success"
									});
									return;
								},
							});
						}
					}
				});
			},
			output() {
				uni.navigateTo({
					url: "mydata/output"
				});
			},
			input() {
				uni.navigateTo({
					url: "mydata/input"
				});
			},
		}
	}
</script>

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}

	page,
	view {
		display: flex;
	}

	page {
		background-color: #f8f8f8;
	}

	.center {
		flex-direction: column;
	}

	.logo {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #3cb79a;
		flex-direction: row;
		align-items: center;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}

	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}

	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}

	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}

	.center-list-item {
		height: 90upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0upx 20upx;
	}

	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #4cd964;
		text-align: center;
		font-family: texticons;
		margin-right: 20upx;
	}

	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		flex: 1;
		text-align: left;
	}

	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
</style>