<template>
	<view class="zai-box">
		<image src="../../static/zaizai-login/register.png" mode="aspectFit" class="zai-logo"></image>
		<view class="zai-title">LOGO区域</view>
		<view class="zai-form">
			<form @submit="formSubmit">
				<input name="username" class="zai-input" placeholder-class placeholder="请输入手机号" />
				<input name="email" class="zai-input" placeholder-class placeholder="请输入密保邮箱" />
				<input name="password" class="zai-input" placeholder-class password placeholder="请输入新密码" />
				<input name="repassword" class="zai-input" placeholder-class password placeholder="再次确认密码" />
				<button form-type="submit" class="zai-btn">重置密码</button>
			</form>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		formSubmit(e) {
			var me = this;
			var username = e.detail.value.username;
			var email = e.detail.value.email;
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
			if (email == '') {
				uni.showModal({
					content: '邮箱不能为空，请重新输入',
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
			if (repassword == '') {
				uni.showModal({
					content: '确认密码不能为空，请重新输入',
					showCancel: false
				});
				return false;
			}
			if (repassword != password) {
				uni.showModal({
					content: '两次密码不一样，请重新输入',
					showCancel: false
				});
				return false;
			}
			// 发起注册/登录的请求
			var serverUrl = me.serverUrl;
			uni.request({
				url: serverUrl + '/re_login',
				data: {
					username: username,
					email: email,
					password: password
				},
				method: 'POST',
				success: res => {
					// 获取真实数据之前，务必判断状态是否为200
					console.log(res.data.code);
					if (res.data.code == 200) {
						var userInfo = res.data.data;
						// console.log(userInfo);
						// 保存用户信息到全局的缓存中
						uni.setStorageSync('globalUser', userInfo);
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
						});
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
		}
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
	margin-top: 100upx;
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
	margin-top: 60upx;
}
.zai-btn:after {
	border: 0;
}
/*按钮点击效果*/
.zai-btn.button-hover {
	transform: translate(1upx, 1upx);
}
</style>
