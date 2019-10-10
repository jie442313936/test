<template>
	<view class="zai-box">
		<image src="../../static/zaizai-login/login.png" mode="aspectFit" class="zai-logo"></image>
		<view class="zai-title">LOGO区域</view>
		<view class="zai-form">
			<form @submit="formSubmit">
				<input name="username" class="zai-input" placeholder-class placeholder="请输入手机号" />
				<input name="password" class="zai-input" placeholder-class password placeholder="请输入密码" />
				<view class="zai-label"><navigator url="relogin">忘记密码？</navigator></view>
				<button form-type="submit" class="zai-btn">立即登录</button>
				<navigator url="register" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
			</form>
		</view>
	</view>
</template>

<script>
// login
export default {
	data() {
		return {};
	},
	methods: {
		formSubmit(e) {
			var me = this;
			var username = e.detail.value.username;
			var password = e.detail.value.password;
			var repassword = e.detail.value.repassword;
			// 				console.log(username);
			// 				console.log(password);
			if (username == '') {
				uni.showModal({
					content: '手机号不能为空，请重新输入',
					showCancel: false
				});
				return false;
			}
			if (username.length != 11) {
				uni.showModal({
					content: '请正确输入手机号',
					showCancel: false
				});
				return false;
			}
			if (password == '') {
				uni.showModal({
					content: '密码不能为空，请重新输入',
					showCancel: false
				});
				return false;
			}
			// 发起注册/登录的请求
			var serverUrl = me.serverUrl;
			uni.request({
				url: serverUrl + '/login',
				data: {
					username: username,
					password: password
				},
				method: 'POST',
				success: res => {
					// 获取真实数据之前，务必判断状态是否为200
					console.log(res.data.data);
					if (res.data.code == 200) {
						var userInfo = res.data.data;
						// console.log(userInfo);
						// 保存用户信息到全局的缓存中
						uni.setStorageSync('globalUser', userInfo);
						// 切换页面跳转，使用tab切换的api
						uni.switchTab({
							url: '../user/user'
						});
					} else if (res.data.code == 201) {
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							image: '../../static/icon/error.png'
						});
					} else if (res.data.code == 202) {
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							image: '../../static/icon/error.png'
						});
					} else if (res.data.code == 203) {
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							image: '../../static/icon/error.png'
						});
					}
				}
			});
		},
/* 		appOAuthLogin(e) {
			var me = this;
			// 获取用户的登录类型
			var logintype = e.currentTarget.dataset.logintype;
			// 授权登录
			uni.login({
				provider: logintype,
				success(loginRes) {
					// 授权登录成功以后，获取用户的信息
					uni.getUserInfo({
						provider: logintype,
						success(info) {
							// console.log(JSON.stringify(info));
		
							var userInfo = info.userInfo;
							var face = '';
							var nickname = '';
							var openIdOrUid = '';
							if (logintype == 'weixin') {
								face = userInfo.avatarUrl;
								nickname = userInfo.nickName;
								openIdOrUid = userInfo.openId;
							} else if (logintype == 'qq') {
								openIdOrUid = userInfo.openId;
								nickname = userInfo.nickname;
								face = userInfo.figureurl_qq_2;
							} else if (logintype == 'sinaweibo') {
								openIdOrUid = userInfo.id;
								nickname = userInfo.nickname;
								face = userInfo.avatar_large;
							}
		
							// 调用开发者后台，执行一键注册或登录
							uni.request({
								url: me.serverUrl + '/appUnionLogin/' + logintype,
								data: {
									openIdOrUid: openIdOrUid,
									nickname: nickname,
									face: face
								},
								method: 'POST',
								success(result) {
									if (result.data.status == 200) {
										var userInfo = result.data.data;
										// 保存用户信息到全局的缓存中
										uni.setStorageSync('globalUser', userInfo);
										// 切换页面跳转，使用tab切换的api
										uni.switchTab({
											url: '../me/me'
										});
									}
								}
							});
						}
					});
				}
			});
		},
		// 实现在微信小程序端的微信登录
		wxLogin(e) { 
			var me = this;
			// console.log(e);
			// 通过微信开发能力，获得微信用户的基本信息
			var userInfo = e.detail.userInfo;
		
			// 实现微信登录
			uni.login({
				provider: 'weixin',
				success(loginResult) {
					// console.log(loginResult);
					// 获得微信登录的code：授权码
					var code = loginResult.code;
					// 设置登录到哪个对于的微信小程序，大家可以根据自己的后端去实现业务参数
					// [0:NEXT超英预告][1:超英预告][2:NEXT学院电影预告]
					var loginToWhichMP = 1;
					uni.request({
						url: me.serverUrl + '/mpWXLogin/' + code,
						data: {
							avatarUrl: userInfo.avatarUrl,
							nickName: userInfo.nickName,
							whichMP: loginToWhichMP
						},
						method: 'POST',
						success(userResult) {
							console.log(userResult);
							var userInfo = userResult.data.data;
							// 保存用户信息到全局的缓存中
							uni.setStorageSync('globalUser', userInfo);
							// 切换页面跳转，使用tab切换的api
							uni.switchTab({
								url: '../me/me'
							});
						}
					});
				}
			});
		}*/
	}
};
</script>

<style>
.zai-box {
	padding: 0 100upx;
	position: relative;
}
.zai-logo {
	width: 100%;
	width: 100%;
	height: 310upx;
}
.zai-title {
	position: absolute;
	top: 0;
	line-height: 360upx;
	font-size: 68upx;
	color: #fff;
	text-align: center;
	width: 100%;
	margin-left: -100upx;
}
.zai-form {
	margin-top: 180upx;
}
.zai-input {
	background: #e2f5fc;
	margin-top: 30upx;
	border-radius: 100upx;
	padding: 20upx 40upx;
	font-size: 36upx;
}
.input-placeholder,
.zai-input {
	color: #94afce;
}
.zai-label {
	padding: 60upx 0;
	text-align: center;
	font-size: 30upx;
	color: #a7b6d0;
}
.zai-btn {
	background: #ff65a3;
	color: #fff;
	border: 0;
	border-radius: 100upx;
	font-size: 36upx;
}
.zai-btn:after {
	border: 0;
}
/*按钮点击效果*/
.zai-btn.button-hover {
	transform: translate(1upx, 1upx);
}
</style>
