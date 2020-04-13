import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 在main.js封装request请求http函数
// 所有数组都可以使用this.http()调用
// async 不是直接结果，二是返回的结果会自动给你写上promise
Vue.prototype.http= async function(options){
  // options对象
  // 请求之前显示加载状态
  uni.showLoading({
    title: '加载中'
  })
  // 基地址
  let baseURL="https://www.uinav.com"
    let res= await uni.request({
      url: baseURL+options.url,
      method: options.method?options.method:"get",
      data: options.data?options.data:{},
      header: options.header?options.header:{}
    })
    // console.log(res);
    // 返回时间隐藏
    uni.hideLoading()
    return res[1].data
}
const app = new Vue({
  ...App
})
app.$mount()
