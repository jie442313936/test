<template>
	<view class="">
		<view class="avator_img">
			<image src="../../static/icon/x.png" mode=""></image>
			<view>余额不足</view>
		</view>
		<button class="avator_but" type="primary" @click="chongzhi()">充值</button>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chongzhi() {
				console.log('充值跳转');
				uni.navigateTo({
					url: '../scan/chongzhi'
				});
			}
		}
	}
</script>

<style>
	.content .avator_img{
		margin-top: 5%;
	}
	.avator_img{
		margin-top: 20%;
		text-align: center;
	}
	.avator_img image{
		width: 256upx;
		height: 256upx;
	}
	.avator_but{
		margin-top: 10%;
	}
</style>
