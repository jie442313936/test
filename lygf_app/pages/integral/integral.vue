<template>
	<view class="warp">
		<!-- <view class="example-title">商城详情</view> -->
		<view class="example-body">
			<uni-grid :column="3" :show-border="false" :square="false" @change="change">
				<uni-grid-item>
					<image class="image" src="../../static/img/youhui.png" mode="aspectFill" />
					<text class="text">优惠促销</text>
				</uni-grid-item>
				<!-- <uni-grid-item :hor="40" :ver="-55" :img-width="30" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png"> -->
				<uni-grid-item >
					<image class="image" src="../../static/img/jifenduihuan.png" mode="aspectFill" />
					<text class="text">积分消费</text>
				</uni-grid-item>
				<!-- <uni-grid-item>
					<image class="image" src="../../static/img/huodong.png" mode="aspectFill" />
					<text class="text">积分活动</text>
				</uni-grid-item> -->
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'

	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				if (index == 0 ) {
					console.log("优惠促销")
					uni.showModal({
						content: '程序猿小哥哥正在努力完善中....',
						showCancel: false
					})
				} else if (index == 1 ) {
					console.log("积分消费")
					uni.showModal({
						content: '程序猿小哥哥正在努力完善中....',
						showCancel: false
					})
				} else if (index == 2 ) {
					console.log("积分活动")
					uni.showModal({
						content: '程序猿小哥哥正在努力完善中....',
						showCancel: false
					})
				}
				
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: #031e3c
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.image {
		width: 50upx;
		height: 50upx;
	}

	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
</style>