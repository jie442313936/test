<template>
	<view class="content">
		<view class="avator_img">
			<image src="../../static/icon/ok.png" mode=""></image>
			<view>充电结束</view>
		</view>
		<view class="avator_text">
			<view class="avator_t">
				流水编号：{{bianhao}}
			</view>
			<view class="avator_t">
				充电时间：{{shijian}}
			</view>
			<view class="avator_t">
				消费金额：{{jine}}
			</view>
		</view>
		<button class="avator_but" type="primary" @click="fanhui">返回首页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bianhao: '0000924152',
				shijian: '10小时',
				jine: '￥100'
			}
		},
		methods: {
			fanhui() {
				console.log('返回首页');
				uni.switchTab({
					url: '../index/index'
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
	.avator_text{
		margin-top: 10%;
	}
	.avator_text .avator_t{
		margin-top: 5%;
		margin-left: 25%;
	}
</style>
