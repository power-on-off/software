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
	import uu from "@/common/util.js"
    var that = this;
    export default {
        components:{
 
        },
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
            }
        },
        onLoad() {
            that = this;
			uni.showModal({
				title: '数据导入',
				content: '注意：导入会将原始数据清空，请确保数据是由该APP导出，且包含bill,tem,daily三个xlsx文件',
				editable:true,
				placeholderText:"请输入导入的文件夹名",
				
				success: function (res) {
					let outputFile = res.content;
					if (res.confirm) {
						if (uu.checkText(outputFile)) {
							uni.showToast({
								title: '请输入正确的文件名！',
								icon: 'none'
							});
							setTimeout(()=>{
								uni.navigateBack({
									delta: 1
								});
							},500)
							return;
						}	
					} else if(res.cancel) {
						uni.navigateBack({
							delta: 1
						});
					}
					that.getData(outputFile);
					
				}
			});
			
        },
        methods: {
			NumSteps() {
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1				
			},
			getData(filename) {
				
				var that = this;
				that.NumSteps();
				//获取账单信息
					plus.sqlite.selectSql({
					name: 'mydata',
					sql: "select * from PayInfo",
					success: (res) => {
						that.outputBillData = res;
						console.log(filename);
						that.tableToExcel("bill", filename);
						
						plus.sqlite.selectSql({
							name: 'mydata',
							sql: "select * from temEventInfo",
							success: (res) => {
								that.outputTemData = res;
								that.tableToExcel("temEventInfo", filename);
								
								plus.sqlite.selectSql({
									name: 'mydata',
									sql: "select * from dailyEventInfo",
									success: (res) => {
										that.outputDailyData = res;
										that.tableToExcel("dailyEventInfo", filename);
									},
									fail: function(e) {}
								});
								
							},
							fail: function(e) {}
						});
						
						
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
			},
            tableToExcel(type, filename) {
				that = this;
                //列标题
                let worksheet = "1";
				var str = '';
				
				if (type == "bill") {
					str = '<tr><td>id</td><td>year</td><td>month</td><td>time</td><td>money</td><td>if_pay</td><td>type</td><td>remark</td></tr>';
					//循环遍历，每行加入tr标签，每个单元格加td标签
					for (let i = 0; i < that.outputBillData.length; i++) {
					    str += '<tr>';
					    for (let item in that.outputBillData[i]) {
					        //增加\t为了不让表格显示科学计数法或者其他格式
					        str += `<td>${ that.outputBillData[i][item] + '\t'}</td>`;
					    }
					    str += '</tr>';
					}
				}
				else if (type == "daily") {
					str = '<tr><td>id</td><td>year</td><td>month</td><td>time</td><td>last</td><td>completes</td><td>type</td><td>remark</td></tr>';
					//循环遍历，每行加入tr标签，每个单元格加td标签
					for (let i = 0; i < that.outputDailyData.length; i++) {
					    str += '<tr>';
					    for (let item in that.outputDailyData[i]) {
					        //增加\t为了不让表格显示科学计数法或者其他格式
					        str += `<td>${ that.outputDailyData[i][item] + '\t'}</td>`;
					    }
					    str += '</tr>';
					}
				}
				else if (type == "tem") {
					str = '<tr><td>id</td><td>year</td><td>month</td><td>time</td><td>from</td><td>to</td><td>if_finish</td><td>remark</td></tr>';
					//循环遍历，每行加入tr标签，每个单元格加td标签
					for (let i = 0; i < that.outputTemData.length; i++) {
					    str += '<tr>';
					    for (let item in that.outputTemData[i]) {
					        //增加\t为了不让表格显示科学计数法或者其他格式
					        str += `<td>${ that.outputTemData[i][item] + '\t'}</td>`;
					    }
					    str += '</tr>';
					}
				}
				
	        
                //下载的表格模板数据
                let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:x="urn:schemas-microsoft-com:office:excel"
        xmlns="http://www.w3.org/TR/REC-html40">
        <head><!--[if gte mso 9]><xml encoding="UTF-8">
		<x:ExcelWorkbook>
		<x:ExcelWorksheets>
		<x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions>
		<x:DisplayGridlines/>
		</x:WorksheetOptions>
		</x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head>
		<body><table>${str}</table></body></html>`;
                //下载模板 
				
                exportFile(template, type, filename);
				
				
				//console.log("ans"+ tmp);
            },

        }
    }
 
    //导出文件到手机 fileData:要写入到文件的数据，返回参数为文档路径
    function exportFile (fileData, type, fileName = "默认") {
        /*
        PRIVATE_DOC: 应用私有文档目录常量
        PUBLIC_DOCUMENTS: 程序公用文档目录常量
        */
	   let documentName = "青呱呱记账文件";
	
	   let xlsxName = type;
	  
        plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, function(fs) {
			
            let rootObj = fs.root;
            let fullPath = rootObj.fullPath;
            // let reader = rootObj.createReader();
            // console.log(reader);
            // reader.readEntries((res)=>{
            //     console.log(res); //这里拿到了该目录下所有直接文件和目录
            // },(err)=>{console.log(err);})
 
            console.log("---开始导出数据");
            // 创建文件夹
            rootObj.getDirectory(documentName, {
                create: true
            }, function(dirEntry) {
                dirEntry.getDirectory(`${fileName}`,{
                    create:true
                }, function(dirEntry1) {
                    dirEntry1.getFile(`${xlsxName}.xlsx`, {
                        create: true
                    }, function(fileEntry) {
                        fileEntry.createWriter(function(writer) {
                            writer.onwritestart = (e)=>{
                              
                            }
                            //storage/emulated/0指的就是系统路径
                            let pathStr = fullPath.replace("/storage/emulated/0","");
                            writer.onwrite = (e) => {
                                // 成功导出数据;			
                                setTimeout(()=>{	
                                    that.NumSteps();
									that.filePath = `数据导入成功！文件夹位置： ${pathStr}/${documentName}/${fileName}`;
                                },500) 
                            };
                            // 写入内容;
                            writer.write(fileData);
					       }, function(e) {
                            console.log(e.message);
                        });
                    });
                })
			}); 
        });
    }
</script>