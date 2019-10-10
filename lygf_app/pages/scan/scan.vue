<template>
	<view class="content">
		<view v-if="!hasLogin" class="hello">
			<view class="avator_text">扫描充电桩上的二维码即可充电！</view>
				<view style="margin-top: 10px;" @click="click">
					<view class="avator_img one"><p></p><span></span></view>
					<view class="avator_img"></span><img src="../../static/img/soucang.png"/></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	methods: {
		// 使用时 tap 和 click 只使用一个就好
		click() {
			console.log('单击事件');
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
			uni.navigateTo({
				url: 'chongdian'
			});

		},
		mapClick(e) {
			console.log(e);
		}
	}
};
</script>

<style>
.hello {
	display: flex;
	flex: 1;
	flex-direction: column;
}

.title {
	color: #8f8f94;
	margin-top: 20upx;
}

.ul {
	font-size: 30upx;
	color: #8f8f94;
	margin-top: 50upx;
}

.ul > view {
	line-height: 50upx;
}
map {
	width: 100%;
	height: 600upx;
}
.avator_text{
	margin-top: 15%;
	margin-left: 15%;
	font-size: 38rpx;
	font-weight: 800;
}
.avator_img{
	margin-top: 37%;
	margin-left: 41%;
}
.avator_img img{
	width: 128rpx;
	height: 128rpx;
}
.content p, .content span{
	width: 13px;
	height: 13px;
	border-radius:40%;
	animation: myfirst 1.5s  infinite;
	box-shadow: 0px 0px 1px #009FD9; 
	margin: 0px;
}
.content  img{
	animation-delay: 0.8s;
}

.content .one{position: absolute;left:7%; top:20.5%;}  
.content .ten{background: #A2A9B4;position: absolute;left:300px; top:350px;}

@keyframes myfirst{
	10% {transform: scale(1);}
	100% {transform: scale(8);}
}
</style>
