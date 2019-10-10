<template>
	<view class="content">
		<view>
			<view class="chongdian1">
				<view class="chongdian2">
					<view class="text">充电时间</view>
					<view class="text_sj">{{chongdiantime}}</view>
				</view>
			</view>
			<view class="avator_text">
				<view>
					<text class="je">{{yue}}</text>
					<view class="_p">可用余额</view>
				</view>
				<view class="np">
					<text>输出电压: 10V</text>
					<text>输出功率: 1W</text>
				</view>
			</view>
			<view class="avator_but">
				<button type="primary" v-if="show" class="chongdian" @click="kaiqi" >{{chongdian}}</button>
				<button type="primary" v-if="showe" class="chongdian" @click="cdz" >{{chongdianzhong}}</button>
				<button @click="jieshu">结束充电</button>
			</view>
			
			<view class="address-url">
				<navigator url="fankui">我要反馈</navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chongdian:'开启充电',
			chongdianzhong:'充电中',
			chongdiantime:'00:00:00',
			yue: '￥0',
			show: true,
			showe: false,
			second: 60,
			showText : false
		};
	},
	methods: {
		onShow() {
			var me = this;
			var serverUrl = me.serverUrl;
			var userInfo = me.getGlobalUser('globalUser');
			uni.request({
			url: serverUrl + '/inter_imitate',
			data: {
				username: userInfo['username'],
				zhuangid: 'G118112618195003',
				Chargport: 2,
				k: 'x'
			},
			method: 'POST',
			success: res => {
				// 获取真实数据之前，务必判断状态是否为200
				console.log(res.data.code);
				this.yue = '￥'+res.data.data;
			}
			});
		},
		kaiqi() {
			this.show = false;
			this.showe = true;
			var hour, minute, second; /*时 分 秒*/
				hour = minute = second = 0; //初始化
				var millisecond = 0; //毫秒
			var interval = setInterval(() => {
				// 充电状态
				var me = this;
				
				millisecond = millisecond + 3000;
				// console.log("---millisecond----"+millisecond);
				if (millisecond >= 3000) {
					millisecond = 0;
					second = second + 3;
				}
				if (second >= 60) {
					second = 0;
					minute = minute + 1;
				}
 
				if (minute >= 60) {
					minute = 0;
					hour = hour + 1;
				}
				// console.log("-------"+hour+'时'+minute+'分'+second+'秒');
				me.chongdiantime = hour+':'+minute+':'+second;
				
				var serverUrl = me.serverUrl;
				var userInfo = me.getGlobalUser('globalUser');
				uni.request({
				url: serverUrl + '/inter_imitate',
				data: {
					username: userInfo['username'],
					zhuangid: 'G118112618195003',
					Chargport: 2,
					k: 'k'
				},
				method: 'POST',
				success: res => {
					// 获取真实数据之前，务必判断状态是否为200
					console.log(res.data.data);
					this.yue = '￥'+res.data.data;
					 if(res.data.code == 201){
						uni.navigateTo({
							url: 'shibai'
						});
					  clearInterval(interval)
					  this.showText = true;
					  this.show = true;
					  this.showe = false;
					}else if(res.data.code == 100){
						uni.showModal({
							content: '充电结束',
							showCancel: false
						});
						clearInterval(interval)
						this.showText = true
					}
				}
				});
				--this.second
			}, 3000)
			// uni.showActionSheet({
			// 	itemList: ['开启充电', '温馨提示', '充电失败'],
			// 	success: function (res) {
			// 		if(res.tapIndex + 1 == 1 ){
						
			// 		}else if(res.tapIndex + 1 == 2 ){
			// 			uni.showModal({
			// 			    title: '温馨提示',
			// 			    content: '充电桩温度过高，请稍后再充电！',
			// 				showCancel:false,
			// 			    success: function (res) {
			// 			        if (res.confirm) {
			// 			           uni.switchTab({
			// 			           	url: '../index/index'
			// 			           });
			// 			        }
			// 			    }
			// 			});
			// 		}else if(res.tapIndex + 1 == 3 ){
			// 			uni.navigateTo({
			// 				url: 'shibai'
			// 			});
			// 		}
			// 	},
			// 	fail: function (res) {
			// 		console.log(res.errMsg);
			// 	}
			// });
		},
		jieshu() {
			console.log('结束充电');
			// uni.showModal({
			// 	content: '扫码事件',
			// 	showCancel: false
			// });
			// uni.scanCode({//扫一扫
			// 	onlyFromCamera: true,
			// 	success: function(res) {
			// 		console.log(JSON.stringify(res));
			// 	}
			// });
			uni.switchTab({
				url: '../index/index'
			});
		},
		cdz() {
			uni.showModal({
			    title: '充电中',
			    content: '充电中，是否要结束？',
				showCancel:true,
			    success: function (res) {
			        if (res.confirm) {
			           // uni.switchTab({
			           // 	url: '../index/index'
			           // });
					   uni.showModal({
					   	content: '结束充电',
					   	showCancel: false
					   });
			        }else{
						uni.showModal({
							content: '继续充电',
							showCancel: false
						});
					}
			    }
			});
		}
	}
};
</script>
	
<style>
	.content{
		background-color: #94AFCE;
		padding: 10%;
		margin: 0;
		height: 620upx;
	}
	.chongdian1{
		width: 270upx;
		height: 270upx;
		background-color: #A7B6D0;
		margin-top: 13%;
		margin-left: 26%;
		padding: 2%;
		border-radius: 50%;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
	}
	.chongdian2{
		width: 240upx;
		height: 240upx;
		background-color: #fff;
		padding: 6%;
		border-radius: 50%;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
	}
	.chongdian2 .text,.text_sj{
		padding-top: 20%;
		margin-left: 25%;
		font-size: 30upx;
	}
	.avator_text{
		padding: 5%;
		margin-top: 25%;
		background-color: #fff;
		text-align: center;
	}
	.avator_text .je{
		margin-top: 25%;
		color: red;
	}
	.avator_text ._p{
		color: #a7b6d0;
	}
	.avator_text .np{
		margin-top: 5%;
	}
	.avator_text .np text{
		margin-left: 3%;
		margin-top: 10%;
	}
	.avator_but{
		margin-top: 15%;
	}
	.avator_but button{
		width: 45%;
		float: left;
		margin-left: 2%;
	}
	.address-url{
		margin-left: -25%;
		margin-right: -25%;
		margin-top: 45%;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
</style>
