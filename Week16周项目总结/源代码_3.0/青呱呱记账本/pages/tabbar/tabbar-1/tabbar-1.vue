<template>
  <view class="page">
	  <cu-custom bgColor="bg-white" :isBack="true">
	  	<block slot="backText" @tap="return1()">退出</block>
	  	<block slot="content">首页</block>
	  </cu-custom>
	  

	  
    <view class="background-view flex-center">
      <view class="center-box">
        <view class="text flex-center"> 当前资产 </view>
        <view class="number flex-center"> {{user.money}} </view>
      </view>
      <view class="bottom-box">
        <view class="info"> 下拉刷新全部 ovo </view>
      </view>
    </view>
	
	
	

	<view class="message-box" @tap = "getLucky" data-target="Modal">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper style="height: 120rpx;" class="swiper" vertical="ture" circular="true"
					indicator-dots='false' indicator-color="rgba(0,0,0,.0)" indicator-active-color="rgba(0,0,0,.0)"
					autoplay="true" interval="4000">
					<swiper-item class="swiper-list" v-for="(item, index) in messageData" :key="index">
						<view class="message-tltle">{{item.title}}</view>
						<view class="message-content"><span>{{item.tag}}</span>{{item.content}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
	
	
	<!-- 导航栏 -->
	<view class="cu-list grid solids-bottom col-4 no-border">
		<view class="cu-item" v-for="(item, index) in categories" :key="index"
			:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]" @click="goCategorieslist"
			:data-mid="item.mid">
			<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
			</view>
			<text>{{ item.name }}</text>
		</view>
	</view>
	<!-- 幸运签模态框 -->
	<view class="cu-modal" :class="modalName=='Modal'?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content text-lg">收到了一个幸运签！</view>
				<view class="action" @tap="hideModal"> 
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl text-lg">
				“{{messageData[1].title}}”
			</view>
			<view class="fr padding-xl">
				—— from {{messageData[1].content}}
			</view>
		</view>
	</view>  
	
	<view class="cu-bar bg-white solid-bottom margin-top">
		<view class="action" @tap="getTemEventList">
			<text class="cuIcon-title text-orange "></text>未完成事项
		</view>
	</view>
	
    <view class="cu-list menu-avatar">
    	<view class="cu-item" :class="modalName1=='move-box-'+ index?'move-cur':''" v-for="(item,index) in temEventList" :key="index"
    	 @touchstart="ListTouchStart1" @touchmove="ListTouchMove1" @touchend="ListTouchEnd1" :data-target="'move-box-' + index">
    		<view class="cu-avatar round lg" :style="[{backgroundImage:'url(../../../static/message.png)'}]"></view>
    		<view class="content">
    			<view class="text-grey">{{item.remark}}</view>
    			<view class="text-gray text-sm">
    				<text class="cuIcon-infofill text-red  margin-right-xs"></text> 截止时间： {{item.to}}</view>
    		</view>
    		<view class="action">
    			<view class="text-grey text-xs">{{item.time}}</view>
    			<view class="cu-tag round bg-grey sm">尽快完成</view>
    		</view>
    		<view class="move">
    			<view class="bg-grey" @tap="compareTem(item.id)">完成</view>
    			<view class="bg-red" @tap="del(item.id,'temEventInfo')">删除</view>
    		</view>
    	</view>
    </view>
	 
	 
	 <view class="cu-bar bg-white solid-bottom margin-top">
	 	<view class="action" @tap="getDailyEventList">
	 		<text class="cuIcon-title text-orange "></text>今天还没做~
	 	</view>
	 </view>
	 
	 <view class="cu-list menu-avatar">
	 	<view class="cu-item" :class="modalName2=='move-box-'+ index?'move-cur':''" v-for="(item,index) in dailyEventList" :key="index"
	 	 @touchstart="ListTouchStart2" @touchmove="ListTouchMove2" @touchend="ListTouchEnd2" :data-target="'move-box-' + index">
	 		<view class="cu-avatar round lg" :style="[{backgroundImage:'url(../../../static/message.png)'}]"></view>
	 		<view class="content">
	 			<view class="text-grey">{{item.remark}}</view>
	 			<view class="text-gray text-sm">
	 				<text class="cuIcon-appreciate text-red  margin-right-xs"></text> 已经坚持了{{item.completes}}天，再接再厉！</view>
	 		</view>
	 		<view class="action">
	 			<view class="text-grey text-xs">{{item.time}}</view>
	 			<view class="cu-tag round bg-grey sm">上次完成</view>
	 		</view>
	 		<view class="move">
	 			<view class="bg-grey" @tap="compareDaily(item.id)">完成</view>
	 			<view class="bg-red" @tap="del(item.id,'dailyEventInfo')">删除</view>
	 		</view>
	 	</view>
	 </view>
	 
	 
  </view>
</template>
 
<script>
import uu from "@/common/util.js";
import ee from "@/common/event.js"
//import {  } from "@/common/api/{$}.js";
export default {
  data() {
    return {
		//导航栏
		InxputBottom:0,
		user:{
			money:'',
		},
		dailyEventList:{},
		temEventList:{},
		
		categories: [{
				cuIcon: 'presentfill',
				color: 'red',
				badge: 2,
				mid: '1',
				name: '上传幸运签'
			},
			{
				cuIcon: 'colorlens',
				color: 'orange',
				badge: 1,
				mid: '2',
				name: '账单列表'
			},
			{
				cuIcon: 'goodsnewfill',
				color: 'yellow',
				badge: 12,
				mid: '3',
				name: '事项列表'
			},
			{
				cuIcon: 'calendar',
				color: 'cyan',
				badge: 22,
				mid: '4',
				name: '个人数据'
			},
			{
				cuIcon: 'searchlist',
				color: 'red',
				badge: 22,
				mid: '5',
				name: '审核情况'
			},
			{
				cuIcon: 'recharge',
				color: 'orange',
				badge: 22,
				mid: '6',
				name: '账单统计'
			},
			{
				cuIcon: 'selection',
				color: 'yellow',
				badge: 22,
				mid: '7',
				name: '事项统计'
			}
		],
		
		//幸运签弹窗
		modalName1: null,
		modalName2: null,
		modalName:null,
		
		listTouchDirection1:null,
		listTouchStart1:0,
		
		listTouchDirection2:null,
		listTouchStart2:0,
		
		//轮播盒子
		messageData: [{
				title: '今天要做的事，你做了吗',
				tag: 'by',
				content: 'syw'
			},
			{
				title: '学无止境',
				tag: 'by',
				content: 'syw'
			}
		],
		
		//未完成的在时间范围内的临时事项
		//未完成的习惯事项
    };
  },
  //监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad
  onInit() {},
  //监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
  onLoad() {
	  var _self = this;
	  plus.sqlite.selectSql({
	  	name: 'mydata',
	  	sql: "select * from user where id = 1;",
	  	success: (res) => {
	  		_self.user.money = parseFloat(res[0].money).toFixed(2);
	  		console.log(_self.user.money);
	  	},
	  	fail: function(e) {
	  		console.log('selectSql failed: ' + JSON.stringify(e));
	  	}
	  });
	  //更新事项列表
	  _self.getTemEventList();
	  _self.getDailyEventList();
  },
  //监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
  onReady() {},
  //监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
  beforeDestroy() {
	  
  },
  //页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。
  onReachBottom() {},
  onShareAppMessage(res) {},
  created() {},
	onPullDownRefresh(){
		console.log("下拉刷新的");
		setTimeout(()=>{	 
			var _self = this;
			
			plus.sqlite.selectSql({
				name: 'mydata',
				sql: "select * from user where id = 1;",
				success: (res) => {
					_self.user.money = parseFloat(res[0].money).toFixed(2);
					_self.renewAll();
					uni.stopPullDownRefresh();
					console.log(_self.user.money);
				},
				fail: function(e) {
					console.log('selectSql failed: ' + JSON.stringify(e));
					uni.stopPullDownRefresh();
				}
			});
			
		},100)	
	},
  methods: {
	  renewAll() {
		  this.getDailyEventList();
		  this.getTemEventList();
	  },
	  InputFocus(e) {
	  	this.InputBottom = e.detail.height
	  },
	  InputBlur(e) {
	  	this.InputBottom = 0
	  },
	  showModal(e) {
	  	this.modalName = "Modal";
	  },
	  hideModal(e) {
	  	this.modalName = null
	  },
	  //列表选择
	  goCategorieslist: function(e) {
	  	// console.log(e.currentTarget.dataset.mid)
	  	if (e.currentTarget.dataset.mid == 1) {
	  		uni.navigateTo({
	  			url: "../../lucky/lucky_up"
	  		});
	  	} else if (e.currentTarget.dataset.mid == 2) {
	  		uni.switchTab({
	  			url: "../tabbar-2/tabbar-2"
	  		});
	  	} else if (e.currentTarget.dataset.mid == 3) {
	  		uni.switchTab({
	  			url: "../tabbar-4/tabbar-4"
	  		});
	  	} else if (e.currentTarget.dataset.mid == 4) {
	  		uni.switchTab({
	  			url: "../tabbar-5/tabbar-5"
	  		});
	  	}  else if (e.currentTarget.dataset.mid == 5) {
	  		uni.navigateTo({
	  			url: "../../lucky/lucky_search"
	  		});
	  	}  else if (e.currentTarget.dataset.mid == 6) {
	  		uni.navigateTo({
	  			url: "../../census/bill_census"
	  		});
	  	}  else if (e.currentTarget.dataset.mid == 7) {
	  		uni.navigateTo({
	  			url: "../../census/event_census"
	  		});
	  	}
	  },
	  // ListTouch触摸开始
	  ListTouchStart1(e) {
	  	this.listTouchStart1 = e.touches[0].pageX
	  },
	  
	  // ListTouch计算方向
	  ListTouchMove1(e) {
	  	this.listTouchDirection1 = e.touches[0].pageX - this.listTouchStart1 > 0 ? 'right' : 'left'
	  },
	  
	  // ListTouch计算滚动
	  ListTouchEnd1(e) {
	  	if (this.listTouchDirection1 == 'left') {
	  		this.modalName1 = e.currentTarget.dataset.target
	  	} else {
	  		this.modalName1 = null
	  	}
	  	this.listTouchDirection1 = null
	  },
	  
	  // ListTouch触摸开始
	  ListTouchStart2(e) {
	  	this.listTouchStart2 = e.touches[0].pageX
	  },
	  
	  // ListTouch计算方向
	  ListTouchMove2(e) {
	  	this.listTouchDirection2 = e.touches[0].pageX - this.listTouchStart2 > 0 ? 'right' : 'left'
	  },
	  
	  // ListTouch计算滚动
	  ListTouchEnd2(e) {
	  	if (this.listTouchDirection2 == 'left') {
	  		this.modalName2 = e.currentTarget.dataset.target
	  	} else {
	  		this.modalName2 = null
	  	}
	  	this.listTouchDirection2 = null
	  },
	  //随机获取幸运签
	  getLucky() {
		  var that = this;
		  //判断联网状态
		  uni.getNetworkType({
		      success: function (all) {
		          console.log(all.networkType);  //网络类型 wifi、2g、3g、4g、ethernet、unknown、none
		          if(all.networkType === "none"){
		  			uni.showToast({
		  				title: '网络错误',
		  				icon: 'none'
		  			});
		  			return;
		          } else {
		             uni.request({
		  				//获取幸运签
		  				url:'http://lucky.suweb.top/api/get.php?op=1',
		  				method:'GET',
		  				success: res => {
		  					console.log(res.data);
		  					if (res.data.code == 200) {
								that.messageData[1].title = res.data.data.content;
								that.messageData[1].content = res.data.data.sign;
								that.showModal("Modal");
		  					}
		  					//返回错误情况
		  					else {
		  						uni.showToast({
		  							title: '网络错误',
		  							icon: 'none'
		  						});
		  						return;
		  					}
		  				}
		             });
		          }
		      }
		  });
	  },
	//未完成的临时事项，1.未完成 2.起始时间不晚于现在 3.截止时间不早于现在
	 getTemEventList() {
		 var that = this;
		 plus.sqlite.selectSql({
		 	name: 'mydata',
		 	sql: "select * from temEventInfo where if_finish = 0;",
		 	success: (res) => {
				//数据清洗
				var newList = [];
				var nowtime = uu.getTime();		
						
				res.forEach((item,index)=>{
					if (uu.compareTime(item.from, nowtime)&& (!uu.compareTime(item.to, nowtime))) {
						//距离截止日期还有的时间
						item.time = uu.HowLongDate(item.to);
						newList.push(item);
					}
			
				})
		 		that.temEventList = newList;
		 	},
		 	fail: function(e) {
		 		console.log('selectSql failed: ' + JSON.stringify(e));
		 	}
		 });
	 },
	 //获取今日待完成习惯事项，不显示的：1、今天完成过的
	 getDailyEventList() {
		var that = this;
		plus.sqlite.selectSql({
			name: 'mydata',
			sql: "select * from dailyEventInfo",
			
			success: (res) => {
				//数据清洗
				var newList = [];
				var nowtime = uu.getTime();		
			
				res.forEach((item,index)=>{
					//判断今天是否做过了(last日期与今日日期是否相同，相同则做过了，否则没做)
					if (item.completes == 0) {
						//item.time = uu.friendlyDate(item.last);
						item.time = "还没做过噢";
						newList.push(item);
					}
					else if(item.last.substr(0,10)!=nowtime.substr(0,10)) {
						item.time = uu.friendlyDate(item.last);
						newList.push(item);
					}		
				})
				that.dailyEventList = newList;
				console.log(newList);
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
		 	this.renewAll();
		 },1000)
	 },
	 compareTem(id) {
		 var that = this;
		 var nowTime = uu.getTime();
		 plus.sqlite.selectSql({
			name: 'mydata',
			sql: "update temEventInfo set if_finish = 1 where id = '" + id + "';",	
			success: (res) => {
				uni.showToast({
					title: '太棒啦',
					icon: 'success'
				});
				that.getTemEventList();
			},
			fail: function(e) {
				console.log('selectSql failed: ' + JSON.stringify(e));
			}
		 });		 
	 },
	 compareDaily(id) {
		 var that = this;
		 var nowTime = uu.getTime();
		 plus.sqlite.selectSql({
			name: 'mydata',
			sql: "update dailyEventInfo set completes = (completes + 1), last = '"
			+ nowTime + "' where id = '" + id + "';",	
			success: (res) => {
				uni.showToast({
					title: '又完成一件事呢',
					icon: 'success'
				});
				that.getDailyEventList();
			},
			fail: function(e) {
				console.log('selectSql failed: ' + JSON.stringify(e));
			}
		 });
	 }
  },
};
</script>

<style lang="scss" scoped>
//轮播盒子
	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
	.message-box {
		width: 100%;
		height: 120rpx;
		background: url('../../../static/clock.gif') #FFFFFF;
		background-repeat: no-repeat;
		background-size: 100rpx 100rpx;
		background-position: 15rpx 10rpx;
		margin: 0rpx 0rpx 10rpx 0rpx;
		padding-left: 130rpx;

		.message-tltle {
			height: 65rpx;
			line-height: 70rpx;
			font-weight: 600;
			font-size: 28rpx;
		}

		.message-content {
			color: #0081ff;

			span {
				background-color: #0081ff;
				color: #FFFFFF;
				padding: 2rpx 8rpx;
				border-radius: 8rpx;
				margin-right: 8rpx;
			}
		}
	}
	
//资产
.page {
  position: relative;
  height: 100vh;
  background-color: #f2f2f2;
}
.flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.background-view {
  height: 25%;
  flex-direction: column;
  background-color: #3cb79a;
  .center-box {
    width: 50%;
    color: white;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    .text {
      height: 40%;
      font-size: 1.2em;
    }
    .number {
      height: 60%;
      font-size: 3.5em;
    }
    // background-color: lightcoral;
  }
	.bottom-box {
		width: 100%;
		height: 20%;
		color:white;
		display: flex;
		font-size: 1.1em;
		align-items: flex-end;
		flex-direction: row-reverse;
		.info {
			width: 50%;
			height: 100%;
			display: flex;
			align-items: flex-end;
			flex-direction: row-reverse;
			padding-right: 40rpx;
		}
	}
}
	.gird{
	  height: 60%;
	  // background-color: yellow;
	  padding: 80rpx 80rpx;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  align-items: flex-start;
	  .card{
		background-color: white;
		border-radius: 26rpx;
		width: 48%;
		height: 250rpx;
		display: flex;
		flex-direction: column;
		.item1{
		  height: 70%;
		  image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		  }
		}
		.item2{
		  height: 30%;
		  display: flex;
		  justify-content: space-around;
		}
	  }
	}
	.nuter{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-around;
		font-size: 35rpx;
	}
	.nuter view{
		flex: 1;
		font-size: 30rpx;
		text-align: center;
		transition: all 0.5s ease .1s;
		background-color: #f0f0f0;
	}
	.active{
		box-sizing: border-box;
		color: #007AFF;
		border-bottom: 5rpx solid #00aaff;
		background-color: #f3ffff;
		border-radius: 10rpx;
		box-shadow: 3px 3px 5px #888888;
	}

</style>

