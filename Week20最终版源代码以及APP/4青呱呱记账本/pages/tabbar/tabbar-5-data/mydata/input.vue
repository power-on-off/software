<template>
    <view>
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText" @tap="return1()">退出</block>
			<block slot="content">数据导入</block>
		</cu-custom>
		 
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 完成进度
			</view>
			
		</view>
		
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="cu-timeline">
			<view class="cu-time">导入情况</view>
			<view class="cu-item cur cuIcon-noticefill">
				<view class="content bg-green shadow-blur">
					<text> 正在导入... </text>  
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-cyan content">
					<text>  </text>  {{filePath}} 
				</view>
			</view>
		</view>
    </view>
</template>
 
<script>
	import db from "@/common/db.js";
	import uu from "@/common/util.js"
    var that = this;
    export default {
        data() {
            return {
				//进度条
				num: 0,
				filePath:"",
				numList: [{
					name: '开始'
				}, {
					name: '账单'
				}, {
					name: '临时事项'
				}, {
					name: '习惯事项'
				}, {
					name: '完成'
				},],
				outputDailyData:{},
				outputTemData:{},
				outputBillData:{},
				excelData: '',
            }
        },
        onLoad() {
			that = this;
			console.log("------开始导入------");
			
			uni.showModal({
				title: '数据导入',
				content: '注意!!!!!导入操作会将原始数据清空，此操作不可逆！请确保填写的文件夹名正确',
				editable:true,
				placeholderText:"请输入导入的文件夹名",
				
				success: function (res) {
					let outputFile = res.content;
					if (res.confirm) {
						//文件名没有通过检测
						if (uu.checkText(outputFile)) {
							uni.showToast({
								title: '请输入正确的文件名！',
								icon: 'none'
							});
							//自动返回
							setTimeout(()=>{
								uni.navigateBack({
									delta: 1
								});
							},1000)
							return;
						}	
						//删除原来的内容
						db.truncate_PayInfo();					
						db.truncate_EventInfo_daily();
						db.truncate_EventInfo_tem();
						//开始导入账单数据
						getData("bill",outputFile);
						setTimeout(()=>{
						    that.NumSteps();
						},500) 
						//开始导入临时事项数据
						getData("tem",outputFile);
						setTimeout(()=>{
						    that.NumSteps();
							that.filePath = `数据导入完成！`;
						},500) 
						//开始导入日常事项数据
						getData("daily",outputFile);
						setTimeout(()=>{
						    that.NumSteps();
						},500) 
						setTimeout(()=>{
						    that.NumSteps();
						},500) 
					} else if(res.cancel) {
						uni.navigateBack({
							delta: 1
						});
					}
					
				}
			});
			
        },
        methods: {
			NumSteps() {
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1				
			},
        }
    }
	function getData(type, fileName = "默认") {
		let documentName = "青呱呱记账文件";
		//let self = this;
		let xlsxName = type;
		
		plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, function(fs) {
			
		    let rootObj = fs.root;
		    let fullPath = rootObj.fullPath;
		 
		    //console.log("---开始导入数据");
			var insertname = "PayInfo";
			if (type == "daily")  insertname = "dailyEventInfo";
			if (type == "tem")  insertname = "temEventInfo";
			//let realpath = "/storage/emulated/0/Android/data/io.dcloud.Hbuilder/documents/青呱呱记账文件/20220603测试/" + insertname + ".xlsx";
			var realpath = "";
			if (type == "bill")  {
				realpath = fullPath + "/" + documentName + "/" + fileName + "/bill.xlsx";
			}  else {
				realpath = fullPath + "/" + documentName + "/" + fileName + "/" + insertname + ".xlsx";
			}
			console.log("文件路径:" + realpath);
			
			rootObj.getFile(realpath, {
				create: false ,// 文件不存在则创建
			},  function(entry) {
					entry.file(function(file) {
						var fileReader = new plus.io.FileReader();
						fileReader.readAsText(file, 'utf-8');
						fileReader.onloadend = function(evt) {
							let _test = evt.target.result;
							_test = _test.replace(/([\t])/g, ""); 
							var re = _test.match(/<td>([\s\S]*?)<\/td>/g); 
							
							for (let i = 0; i < re.length; i = i + 8) {
								if (i == 0) {
									continue;
								}
								var input = [];
								for (let j = 0; j < 8; j++) {
								   var temp;
								   temp = re[i+j];
								   temp = temp.replace(/([<td>])/g, ""); 
								   input[j] = temp.replace(/([</td>])/g, ""); 
								}
								
								let sqls = "insert into " + insertname + " values('" + input[0] + "','" + input[1] + "','" + input[2] +
									"','"  + input[3] + "','" + input[4] + "','" + input[5] + "','" + input[6] + "','" + input[7] + "');";
								
								plus.sqlite.selectSql({
									name: 'mydata',
									sql: sqls,
									success: (res) => {
										console.log("成功导入一条" + insertname);
									},
									fail: function(e) {
										console.log("导入" + insertname + "失败");
									}
								});
							}
						}
					});
				});
			},
				e => {}
			);
		}
</script>