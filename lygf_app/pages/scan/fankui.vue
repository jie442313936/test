<template>
	<view class="content">
		<view class="avator_text">设备编号：23153352</view>
		<checkbox-group class="content-class" @change="chooseMaleLike">
			<label class="item" v-for="(item, index) in maleLike" :key="index" :class="{ on: item.isChecked }">
				<checkbox :value="item.value"></checkbox>
				<text class="item-text">{{ item.text }}</text>
			</label>
		</checkbox-group>
		<button type="primary" @click="fanhui()">提交</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			maleLike: [
				{
				value: '001',
				text: '无法启动'
				},{
				value: '002',
				text: '充电断电'
				},{
				value: '003',
				text: '电压不稳'
				},{
				value: '004',
				text: '其他'
				}
			],
			currentArr: [], // 当前用户想要的选项，最大为5
			oldArr: [], // 上一次的返回值
			hasPass: false // 用户之前是否选择过，是为true
		};
	},
	methods: {
		fanhui() {
			console.log(this.oldArr);
			// uni.navigateTo({
			// 	url: '../index/index'
			// });
		},
		chooseMaleLike: function(e) {
			if (e.detail.value.length > 5) {
				// 如果选择的个数超过5个
				if (!this.hasPass) {
					// 当用户选择数量是第一次超过5
					this.hasPass = true;
					if (e.detail.value.length > this.oldArr.length) {
						// 如果当前选择总数大于上一次选择总数（用户没有取消过选择）
						this.currentArr = e.detail.value.slice(0, 5);
						uni.showToast({
							title: '最多5个',
							icon: 'none'
						});
					} else {
						// 如果当前选择总数小于上一次选择总数（用户取消部分选择）
						let arr = [];
						for (var i = 0; i < this.currentArr.length; i++) {
							for (var j = 0; j < 5; j++) {
								if (this.currentArr[i] === e.detail.value[j]) {
									arr.push(this.currentArr[i]);
								} else {
									continue;
								}
							}
						}
						this.currentArr = arr;
					}
				} else {
					// 当用户选择数量不是第一次超过5（这时候change事件的返回值里有不一定是用户想要的值，所以需要做判断）
					if (e.detail.value.length > this.oldArr.length) {
						// 用户又增加了选项
						let n = e.detail.value.length;
						if (this.currentArr.length < 5) {
							this.currentArr.push(e.detail.value[n - 1]);
						} else {
							uni.showToast({
								title: '最多5个',
								icon: 'none'
							});
						}
					} else {
						// 用户取消了部分选项
						let arr = [];
						for (var i = 0; i < this.currentArr.length; i++) {
							let n = e.detail.value.indexOf(this.currentArr[i]);
							if (n !== -1) {
								arr.push(this.currentArr[i]);
							} else {
								continue;
							}
						}
						this.currentArr = arr;
					}
				}
			} else {
				// 如果选择的个数小于等于5
				if (this.hasPass) {
					// 不是第一次小于5，即之前多选过，后来又取消选择
					if (e.detail.value.length < this.oldArr.length) {
						// 用户取消了部分选择
						let arr = [];
						for (var i = 0; i < this.currentArr.length; i++) {
							let n = e.detail.value.indexOf(this.currentArr[i]);
							if (n !== -1) {
								arr.push(this.currentArr[i]);
							} else {
								continue;
							}
						}
						this.currentArr = arr;
					} else {
						// 用户增加选择，增加的新选项在数组最后
						let n = e.detail.value.length;
						this.currentArr.push(e.detail.value[n - 1]);
					}
				} else {
					// 是第一次小于5，这个最简单了，直接选了什么就给什么
					this.currentArr = e.detail.value;
				}

				if (e.detail.value.length === 0) {
					// 如果用户取消了全部选择，让hasPass为false，即下一次再选时就会判断为第一次选择
					this.hasPass = false;
				}
			}
			for (var i = 0, lenI = this.maleLike.length; i < lenI; ++i) {
				// 给用户的选项添加样式
				this.maleLike[i].isChecked = false;
				for (var j = 0, lenJ = this.currentArr.length; j < lenJ; ++j) {
					if (String(this.maleLike[i].value) === String(this.currentArr[j])) {
						this.maleLike[i].isChecked = true;
						break;
					}
				}
			}
			this.oldArr = e.detail.value; // 把当前返回值赋值给上一次的返回值
		}
	}
};
</script>

<style>
.avator_text {
	font-size: 24px;
	margin-top: 10%;
}
.content-class {
	width: 90%;
	margin: 20upx auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
}
.content-class .item {
	width: 100%;
	height: 40px;
	font-size: 32upx;
	line-height: 40px;
	border-radius: 30upx;
	margin-bottom: 20upx;
	text-align: center;
	box-sizing: border-box;
	border: 1upx solid #3f82e7;
}
.content-class .item checkbox {
	display: none;
}
.content-class .on {
	border: none;
	background-color: #3f82e7;
	color: #fff;
}
</style>
