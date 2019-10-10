<template>
	<view class="content">
		<view v-if="!hasLogin" class="hello">
			<view>
				<page-head :title="title"></page-head>
				<view class="uni-common-mt">
					<view><map id="map1" ref="map1" :latitude="latitude" :longitude="longitude" :markers="covers" @click="mapClick"></map></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			title: 'map',
			latitude: 34.635878,
			longitude: 112.408979,
			covers: [
				{
					latitude: 34.635878,
					longitude: 116.3502,
					// #ifdef APP-PLUS
					iconPath: '../../static/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '../../static/location.png'
					// #endif
				},
				{
					latitude: 39.9,
					longitude: 116.39,
					// #ifdef APP-PLUS
					iconPath: '../../static/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '../../static/location.png'
					// #endif
				}
			],
			polyline: [
				{
					points: [{ latitude: 39.9085, longitude: 116.39747 }, { latitude: 39.9, longitude: 116.39 }],
					color: '#000000 ',
					width: 3
				}
			]
		};
	},
	onLoad() {
		var me = this;
		var serverUrl = me.serverUrl;
		uni.request({
			url: serverUrl + '/inter',
			dataType: 'JSON',
			success: function(res) {
				console.log(res);
				var data = JSON.parse(res.data);
				console.log(data);
			}
		});
	},
	methods: {
		// 使用时 tap 和 click 只使用一个就好
		click() {
			uni.scanCode({
				onlyFromCamera: true,
				success: function(res) {
					console.log(JSON.stringify(res));
				}
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
	height: 800upx;
}
</style>
