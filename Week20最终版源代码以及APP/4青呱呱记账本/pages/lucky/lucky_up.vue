<template>
	<view>
		<!-- 幸运签上传 -->
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="onreturn()">返回</block>
			<block slot="content">幸运签上传</block>
		</cu-custom>
		
		<!-- 模态框 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar text-xl bg-white justify-end">
					<view class="content">上传成功！</view>
					<view class="action" @tap="hideModal"> 
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-xl">
					您上传的幸运签编号为
					<view class="padding-lg text-sl">
						{{uploadId}}
					</view>
				</view>
				<view class="fr padding-lg text-lg">
					等待审核，请记住编号以便查询审核情况。
				</view>
			</view>
		</view>  
		
		<form>
			 <view class="cu-form-group">
				<view class="title from_width">署名</view>
				<input type="text" v-model="form.name" placeholder="请输入幸运签署名(不超过10字符)" name="name"></input>
			 </view>
			<view class="cu-form-group ">
				<view class="title  from_width">内容</view>
				<input type="text" v-model="form.content" placeholder="请输入幸运签内容(不超过22字符)" name="content"></input>
			</view>
			
			<view class="bg-white align-center">
				<view class="flex flex-wrap">
					<view class="basis-df padding">
						<button class="bg-cyan xs text-lg" @tap="submit()">提交</button>
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
				uploadId:-1,
				form:{
					name:'',
					content:'',
				}
			};
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
			//录入记录（防止因为请求而改变this，用_self来指代
			submit() {
				var _self = this; 
				if (this.form.name == undefined) this.form.name = '';
				if (this.form.content == undefined) this.form.content = '';
				
				console.log("test"+this.form.name+this.form.content);
				//验证署名是否正确
				// 特殊符号
				var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
					regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
				var thename = this.form.name;
				var empty = "^[ ]+$";
				var re = new RegExp(empty);
				
				if (thename == '' || re.test(thename) || regEn.test(thename) || regCn.test(thename)) {
					uni.showToast({
						title: '请输入正确的署名！',
						icon: 'none'
					});
					return;
				}
				if (thename.length > 10) {
					uni.showToast({
						title: '署名过长！',
						icon: 'none'
					});
					return;
				}
				
				if (this.form.content == '' || re.test(this.form.content)) {
					 uni.showToast({
					 	title: '请输入幸运签内容！',
					 	icon: 'none'
					 });
					 return;
				}
				if (this.form.content.length > 22) {
					uni.showToast({
						title: '内容过长！',
						icon: 'none'
					});
					return;
				}
				uni.showLoading({
					title: '提交中...'
				})
				
				//通过本地校验后
				//判断联网状态
				uni.getNetworkType({
					success: function (all) {
						console.log(all.networkType);  //网络类型 wifi、2g、3g、4g、ethernet、unknown、none
						if(all.networkType === "none") {
							uni.showToast({
								title:'当前无网络'
							})
						} else {
						   var sign = _self.form.name;
						   var cont = _self.form.content;
						   uni.request({
								//获取幸运签
								url:'http://lucky.suweb.top/api/upload.php?ls='+ sign + '&lc='+ cont,
								method:'POST',
								success: res => {
									console.log(res.data);
									if (res.data.code == 200) {
										uni.hideLoading();
										_self.uploadId = res.data.id;
										_self.showModal();
									}
									//返回错误情况
									else {
										uni.showToast({
											title:'未知错误'
										})
									}
								}
						   });
						}
					}
				});
			},
			clearForm() {
				//h5端可以 //翻源码得知的清空表单方法
				console.log('触发清空表单事件');
				this.$refs.refBtn.$dispatch('Form', 'uni-form-reset', {
					type: 'reset'
				})
			}, 
		},
			
		onLoad() {
			
		}
	}
</script>

<style>
	
</style>
