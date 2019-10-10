<template>
	<view class="content">
		<view v-if="hasLogin" class="hello">
			<view class="title">您好 {{ userName }}，您已成功登录。</view>
			<view>
				<page-head :title="title"></page-head>
				<view class="uni-common-mt">
					<view><map :latitude="latitude" :longitude="longitude" :markers="covers"></map></view>
				</view>
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">欢迎光临。</view>
			<view>
				<page-head :title="title"></page-head>
				<view class="uni-common-mt">
					<view><map id="map1" ref="map1" @click="mapClick"></map></view>
				</view>
				<view style="margin-top: 10px;"><button class="fdf_417" @click="click">扫码开锁</button></view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
uni.getLocation({
    type: 'wgs84',
    success: function (res) {
        console.log('位置名称：' + res.name);
                console.log('详细地址：' + res.address);
                console.log('纬度：' + res.latitude);
                console.log('经度：' + res.longitude);
    }
});

export default {
	methods: {
		// 使用时 tap 和 click 只使用一个就好
		click() {
			console.log('单击事件');
			uni.showModal({
				content: '扫码事件',
				showCancel: false
			});
		},
		mapClick(e){
		console.log(e);
		},
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
</style>
