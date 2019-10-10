<template>
	<view class="content">
		<view v-if="!hasLogin" class="hello">
				<view style="margin-top: 10px;"><button class="fdf_417" @click="xiangqing()">积分详情</button></view>
				<view style="margin-top: 10px;"><button class="fdf_417" @click="jilu()">兑换记录</button></view>
				<view style="margin-top: 10px;"><button class="fdf_417" @click="shp()">积分商城</button></view>
				<view style="margin-top: 10px;"><button class="fdf_417" @click="huodong()">积分活动</button></view>
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
			// console.log('单击事件');
			// uni.showModal({
			// 	content: '扫码事件',
			// 	showCancel: false
			// });
			uni.scanCode({
				onlyFromCamera: true,
				success: function(res) {
					console.log(JSON.stringify(res));
				}
			});
		},
		xiangqing(){
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			})
		},
		jilu(){
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			})
		},
		shp(){
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			})
		},
		huodong(){
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			})
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
</style>
