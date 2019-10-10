<template>
	<view class="">
		<text>请选择充值金额</text>
		<radio-group class="content-class" @change="chooseMaleLike">
			<label class="item" v-for="(item, index) in maleLike" :key="index" :class="{ on: item.isChecked }">
				<radio :value="item.value"></radio>
				<text class="item-text">{{ item.text }}</text>
			</label>
		</radio-group>
		<view class="address-view">
			<text>自定义金额 ： </text>
			<input :value="money" @input="moneymsg" class="zai-input" placeholder-class text placeholder="请输入金额" />
		</view>
		<button class="avator_but" type="primary" @click="chongzhi">微信充值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				maleLike: [
					{
					value: '500',
					text: '￥500'
					},{
					value: '200',
					text: '￥200'
					},{
					value: '100',
					text: '￥100'
					},{
					value: '50',
					text: '￥50'
					}
				],
				currentArr: '', // 当前用户想要的选项，最大为5
				oldArr: [], // 上一次的返回值
				hasPass: false ,// 用户之前是否选择过，是为true
				money:''
			}
		},
		methods: {
			moneymsg:function(e){
				this.money = e.target.value; // 把当前返回值赋值给上一次的返回值
			},
			chongzhi() {
				var me = this;
				var money = me.money;
				if(money != '' ){
					if(money > 0){
						var moneys = money;
					}else{
						uni.showModal({
							content: '自定义金额不能小于0',
							showCancel: false
						});
						return false;
					}
					
				}else{
					var moneys = me.oldArr;
				}
				var userInfo = me.getGlobalUser('globalUser');
				var userId = userInfo['id'];
				var username = userInfo['username'];
				
				// 发起充值的请求
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl + '/recharge',
					data: {
						money: moneys,
						id: userId,
						username: username
					},
					method: 'POST',
					success: res => {
						// 获取真实数据之前，务必判断状态是否为200
						if (res.data.code == 200) {
							// 切换页面跳转，使用tab切换的api
							uni.navigateTo({
								url: 'chongdian'
							});
						} else if (res.data.code == 201) {
							uni.showToast({
								title: res.data.msg,
								duration: 2000,
								image: '../../static/icon/error.png'
							});
						}
						
					}
				});
				// uni.showModal({
				// 	content: '充值成功',
				// 	showCancel: false
				// });
			},
			chooseMaleLike: function(e) {
				this.currentArr = e.detail.value;
				for (var i = 0, lenI = this.maleLike.length; i < lenI; ++i) {
					// 给用户的选项添加样式
					if (String(this.maleLike[i].value) === String(this.currentArr)) {
						this.maleLike[i].isChecked = true;
					}else{
						this.maleLike[i].isChecked = false;
					}
				}
				this.oldArr = e.detail.value; // 把当前返回值赋值给上一次的返回值
			}
		}
	}
</script>

<style>
	.content-class {
		width: 90%;
		margin: 20upx auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	.content-class .item {
		width: 30%;
		height: 60upx;
		font-size: 28upx;
		line-height: 60upx;
		border-radius: 30upx;
		margin-bottom: 20upx;
		text-align: center;
		box-sizing: border-box;
		border: 1upx solid #3f82e7;
	}
	.content-class .item radio {
		display: none;
	}
	.content-class .on {
		border: none;
		background-color: #3f82e7;
		color: #fff;
	}
	.address-view{
		padding-left: 5%;
	}
	.zai-input {
		background: #e2f5fc;
		margin-top: -70upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
		width: 100px;
		margin-left: 120px;
		
	}
	.input-placeholder,
	.zai-input {
		color: #94afce;
	}
	.avator_but{
		margin-top: 5%;
	}
</style>
