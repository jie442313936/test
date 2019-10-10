<template>
	<view class="">
		<text>充电桩温度过高，请稍后再充</text>
		<button type="primary">返回首页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			fanhui() {
				console.log('返回首页');
				uni.navigateTo({
					url: '../index/index'
				});
			
			}
		}
	}
</script>

<style>
</style>
