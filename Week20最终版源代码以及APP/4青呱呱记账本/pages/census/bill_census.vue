<template>
	<view>
		<!-- 幸运签查询-->
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">返回</block>
			<block slot="content">账本统计</block>
		</cu-custom>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">支出图</text>
				<text class="text-ABC text-blue">ColumnCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="ColumnOut" id="ColumnOut" class="charts" @touchstart="touchColumnOut"></canvas>
		</view>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">收入图</text>
				<text class="text-ABC text-blue">ColumnCharts</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="ColumnIn" id="ColumnIn" class="charts" @touchstart="touchColumnIn"></canvas>
		</view>
	</view>
</template>

<script>
	// 图表
	import uCharts from "@/common/u-charts/u-charts.js";
	var _self;
	
	var canvaColumn = null;
	
	var canvaColumnOut = null;

	var canvaColumnIn = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				// 柱状图
				"ColumnOut": {
					"categories": ['食物','游玩','衣物','通勤','生活','会员','学习','交往','医疗','其他'],
					
					"series": [{
						"name": "支出统计",
						"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}]
				},
				"ColumnIn": {
					"categories": ['工资','投资','兼职','奖金','利息','加班','中奖','家长给予','红包','其他'],
					
					"series": [{
						"name": "收入统计",
						"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					}]
				}
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(420);
			_self.getBillOut();
			_self.getBillIn();
			_self.showColumn("ColumnOut", this.ColumnOut);
			_self.showColumn("ColumnIn", this.ColumnIn);
			
		},
		methods: {
			//获取支出数据
			getBillOut() {
				let that = this;
				for (let i = 0; i < 10; i++) {
					let sqls = "select * from PayInfo where if_pay='1' and type = '"+i+"';";
					plus.sqlite.selectSql({
						name: 'mydata',
						sql: sqls, 
						success: (res) => {
							for (let j = 0; j < res.length; j++) {
								that.ColumnOut.series[0].data[i] += res[j].money;
							}
						},
						fail: function(e) {
							console.log('selectSql failed: ' + JSON.stringify(e));
						}
					});
				}
			},
			//获取收入数据
			getBillIn() {
				let that = this;
				for (let i = 0; i < 10; i++) {
					let sqls = "select * from PayInfo where if_pay='0' and type = '"+i+"';";
					plus.sqlite.selectSql({
						name: 'mydata',
						sql: sqls, 
						success: (res) => {
							for (let j = 0; j < res.length; j++) {
								that.ColumnIn.series[0].data[i] += res[j].money;
							}
						},
						fail: function(e) {
							console.log('selectSql failed: ' + JSON.stringify(e));
						}
					});
				}
			},
			// 柱状图
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});
				if (canvasId == "ColumnOut") canvaColumnOut = canvaColumn;
				else if (canvasId == "ColumnIn") canvaColumnIn = canvaColumn;
			},
			touchColumnOut(e) {
				canvaColumnOut.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},
			touchColumnIn(e) {
				canvaColumnIn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},
		}
	}
	
	
</script>

<style lang="scss" scoped>
	.chartsMain {
		width: 750rpx;
		height: 450rpx;
		padding-top: 15rpx;
		background: #fff;
		margin-bottom: 24rpx;
		border-top: 2rpx solid #f2f2f2;
		.charts {
			width: 750rpx;
			height: 450rpx;
			box-sizing: border-box;
		}
	}
</style>