<template>
	<view>
		<!-- <page-head :title="title"></page-head> -->
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline"></map>
				<view class="store-tips">
					<cover-view class="store-des-box" v-if="storeFlag" @tap="storeDesEvn">
						<cover-image class="store-img" src="../../static/hch-position/1.jpg"></cover-image>
						<cover-view class="store-des">
							<cover-view class="store-name">{{ store.name }}</cover-view>
							<cover-view class="store-address">地址:{{ store.address }}</cover-view>
							<cover-view class="store-tel">电话:{{ store.tel }}</cover-view>
						</cover-view>
					</cover-view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'map',
			latitude: 34.635878,
			longitude: 112.408979,
			markers: [
				{
					title: '公司测试',
					latitude: '34.635878',
					longitude: '112.408979',
					iconPath: '..\/..\/static\/location.png',
					label: {
						content: '公司测试',
						borderRadius: 10,
						padding: 10,
						display: 'ALWAYS'
					}
				},
				{
					title: '测试',
					latitude: '34.620888',
					longitude: '112.408999',
					iconPath: '..\/..\/static\/location.png',
					label: {
						content: '测试',
						borderRadius: 10,
						padding: 10,
						display: 'ALWAYS'
					}
				}
			],
			scale: 16 //地图缩放程度
		};
	},
	onLoad() {
		// var me = this;
		// var serverUrl = me.serverUrl;
		// uni.request({
		// 	url: serverUrl + '/inter',
		// 	success: function(res) {
		// 		me.markers = res.data.data.list;
		// 		console.log(me.markers)
		// 	}
		// });
	},
	onShow() {},
	methods: {}
};
</script>
<style>
map {
	width: 100%;
	height: 1100upx;
}
.test {
	background: #fff;
	height: 100upx;
	text-align: center;
	display: flex;
	margin: 30upx;
}
.store-tips {
	width: 600upx;
	height: 100upx;
	margin: 10upx auto;
	border-radius: 10upx;
	position: absolute;
	top: 10upx;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 2;
	overflow: hidden;
}
.store-des-box {
	background: #fff;
}
.store-img {
	width: 80upx;
	height: 80upx;
	border-radious: 10upx;
	margin: 10upx;
	float: left;
}
.store-des {
	padding-top: 8upx;
	float: left;
	line-height: 1;
	font-size: 22upx;
	color: #666;
	padding-left: 20upx;
}
.store-name {
	font-weight: 600;
	color: deeppink;
}
.store-clear {
	width: 30upx;
	height: 30upx;
	position: absolute;
	top: 7rpx;
	right: 7upx;
	maigin: 30upx;
}
</style>
