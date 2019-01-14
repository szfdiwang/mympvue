import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

//打开微信小程序 云开发的环境id
wx.cloud.init({
    env:"manning-8430ec"
})

const app = new Vue(App)
app.$mount()
