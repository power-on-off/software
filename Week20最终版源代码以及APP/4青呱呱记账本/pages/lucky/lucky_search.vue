<template>
	<view>
	<!-- 幸运签查询-->
	<cu-custom bgColor="bg-cyan" :isBack="true">
		<block slot="backText" @tap="onreturn()">返回</block>
		<block slot="content">幸运签审核结果查询</block>
	</cu-custom>
	
	
	<!-- 模态框 -->
	<view class="cu-modal" :class="modalName=='Modal'?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar text-xl bg-white justify-end">
				<view class="content">审核结果</view>
				<view class="action" @tap="hideModal"> 
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl text-xl">
				{{content}}
			</view>
		</view>
	</view>  
	
	
	<form>
		 <view class="cu-form-group">
			<view class="title from_width">id</view>
			<input type="number" v-model="id" placeholder="请输入待审核幸运签的ID"></input>
		 </view>
		
		<view class="bg-white align-center">
			<view class="flex flex-wrap">
				<view class="basis-df padding">
					<button class="bg-cyan xs text-lg" @tap="search_id()">提交</button>
				</view>
				<view class="basis-df  padding">
					<button class="bg-cyan xs text-lg" form-type="reset" refBtn>清空</button>
				</view>
			</view>
		</view>
	</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName:null,
				id: 0,
				content:'',
			}
		},
		methods: {
			showModal(e) {
				this.modalName = "Modal";
			},
			hideModal(e) {
				this.modalName = null;
				uni.navigateBack  ({
					url: '/pages/tabbar-1-home/home'
				});
			},
			//查询幸运签是否通过
			search_id() {
				var getid = this.id;
				//校验是否为正整数
				var r = /^\+?[1-9][0-9]*$/;
				if (!r.test(getid)) {
					uni.showToast({
						title:'请输入正整数',
						icon:"none"
					});
					return;
				}
				//防止因为请求而改变this，用that来指代
				var that = this;
				//判断联网状态
				uni.getNetworkType({
					success: function (all) {
						console.log(all.networkType);  //网络类型 wifi、2g、3g、4g、ethernet、unknown、none
						if(all.networkType === "none"){
							uni.showToast({
								title:'当前无网络',
								icon:"error"
							});
						} else {											
							uni.request({
								//获取幸运签
								url:'http://lucky.suweb.top/api/get.php?op=2&sel='+ getid,
								method:'GET',
								success: res => {
									console.log(res.data);
									if (res.data.code == 200) {
										that.content = '此幸运签尚未审核，或审核未通过，请耐心等待';
										if (res.data.data.if_pass == 1) {
											that.content = '恭喜！！此幸运签审核通过，内容将会分享给使用青呱呱APP的其他用户';
										}
										that.showModal();	
									}
									//返回错误情况
									else {
										uni.showToast({
											title: '查询出错,没有该编号的幸运签',
											icon:"error"
										});
									}
								}
							});
						}
					}
				});						   
		},
	}
}
</script>

<style>

</style>
