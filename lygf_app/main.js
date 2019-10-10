import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero";			// 生产环境
Vue.prototype.serverUrl = "http://192.168.2.124/tp5/public/index.php";		// 开发环境

//定义全局变量方法
Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
