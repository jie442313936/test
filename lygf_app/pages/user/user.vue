<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view @tap="denglu()">
							<view class="avator"><img src="../../static/icon/avatar.png" /></view>
							<view class="phone-number">{{ login_info }}</view>
						</view>
					</view>
					<view class="box-bd">
						<view class="item" @tap="yue()">
							<view class="icon">0</view>
							<view class="text">余额</view>
						</view>
						<view class="item" @tap="jifen()">
							<view class="icon">0</view>
							<view class="text">积分</view>
						</view>
						<view class="item" @tap="kaquan()">
							<view class="icon">0</view>
							<view class="text">卡券</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder" @tap="mingpian()">
					<view class="icon"><image src="../../static/wkiwi-user/card.png"></image></view>
					<view class="text">我的名片</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li" @tap="chongdian()">
					<view class="icon"><image src="../../static/wkiwi-user/chongdian.png"></image></view>
					<view class="text">我的充电</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
				<view class="li" @tap="zhangdan()">
					<view class="icon"><image src="../../static/wkiwi-user/zhangdan.png"></image></view>
					<view class="text">我的账单</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
				<view class="li" @tap="qianbao()">
					<view class="icon"><image src="../../static/wkiwi-user/qianbao.png"></image></view>
					<view class="text">我的钱包</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
				<view class="li" @tap="xiaoxi()">
					<view class="icon"><image src="../../static/wkiwi-user/xiaoxi.png"></image></view>
					<view class="text">我的消息</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li " @tap="shuoming()">
					<view class="icon"><image src="../../static/wkiwi-user/help.png"></image></view>
					<view class="text">帮助中心</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
				<view class="li " @tap="guanyu()">
					<view class="icon"><image src="../../static/wkiwi-user/about.png"></image></view>
					<view class="text">关于我们</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
				<view class="li " @tap="yijian()">
					<view class="icon"><image src="../../static/wkiwi-user/opinion.png"></image></view>
					<view class="text">意见反馈</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li noborder" @tap="shezhi()">
					<view class="icon"><image src="../../static/wkiwi-user/set.png"></image></view>
					<view class="text">系统设置</view>
					<image class="to" src="../../static/wkiwi-user/to.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			login_info: '',
			login_url: ''
		};
	},
	onLoad() {},
	methods: {
		onShow() {
			var me = this;
			// 使用挂载方法获取用户数据
			var userInfo = me.getGlobalUser('globalUser');
			if (userInfo != null) {
				var username = userInfo['username'];
				console.log(userInfo['id'])
				me.login_info = username;
				me.login_url = 'user';
			} else {
				me.login_info = '点击登录';
				me.login_url = 'login';
			}
		},
		denglu() {
			if(this.login_url == 'user'){
				// console.log(this.login_url);
				// uni.navigateTo({
				// 	url: 'user'
				// });
			}else if(this.login_url == 'login'){
				console.log(this.login_url);
				uni.navigateTo({
					url: '../login/login'
				});
			}
		},
		jifen() {
			//积分事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		yue() {
			//余额事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		kaquan() {
			//我的卡券事件
			uni.navigateTo({
				url: '../coupon/coupon'
			});
		},
		mingpian() {
			//我的名片事件
			uni.navigateTo({
				url: 'user_info'
			});
		},
		chongdian() {
			//我的充电事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		zhangdan() {
			//我的账单事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		qianbao() {
			//我的钱包事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		xiaoxi() {
			//我的消息事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		shuoming() {
			//帮助中心事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		guanyu() {
			//关于我们事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		yijian() {
			//意见反馈事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		shezhi() {
			//系统设置事件
			uni.showModal({
				content: '程序猿小哥哥正在努力完善中....',
				showCancel: false
			});
		},
		
	}
};
</script>

<style lang="scss">
page {
	background-color: #f1f1f1;
	font-size: 30upx;
}
.header {
	background: #fff;
	height: 290upx;
	padding-bottom: 110upx;
	.bg {
		width: 100%;
		height: 200upx;
		padding-top: 100upx;
		background-color: #4191ea;
	}
}
.box {
	width: 650upx;
	height: 280upx;
	border-radius: 20upx;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, 0.2);
	.box-hd {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		.avator {
			width: 160upx;
			height: 160upx;
			background: #fff;
			border: 5upx solid #fff;
			border-radius: 50%;
			margin-top: -80upx;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.phone-number {
			width: 100%;
			text-align: center;
		}
	}
	.box-bd {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		.item {
			flex: 1 1 auto;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			border-right: 1px solid #f1f1f1;
			margin: 15upx 0;
			&:last-child {
				border: none;
			}
			.icon {
				width: 60upx;
				height: 60upx;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.text {
				width: 100%;
				text-align: center;
				margin-top: 10upx;
			}
		}
	}
}
.list-content {
	background: #fff;
}
.list {
	width: 100%;
	border-bottom: 15upx solid #f1f1f1;
	background: #fff;
	&:last-child {
		border: none;
	}
	.li {
		width: 92%;
		height: 100upx;
		padding: 0 4%;
		border-bottom: 1px solid rgb(243, 243, 243);
		display: flex;
		align-items: center;
		&.noborder {
			border-bottom: 0;
		}
		.icon {
			flex-shrink: 0;
			width: 50upx;
			height: 50upx;
			image {
				width: 50upx;
				height: 50upx;
			}
		}
		.text {
			padding-left: 20upx;
			width: 100%;
			color: #666;
		}
		.to {
			flex-shrink: 0;
			width: 40upx;
			height: 40upx;
		}
	}
}
</style>
