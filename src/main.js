import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.css'

Vue.use(ElementUI);
//导入axios
import axios from 'axios'
//设置地址公共部分.
axios.defaults.baseURL = 'http://litc.pro:9999/v1';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 发送请求前带上token就不用每次发送请求都手动带上headers{"Authorization":token}
 let token = localStorage.getItem("token") 
 if(token){
   config.headers.Authorization = token
 }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


//将axios以$http为名作为属性挂载在vue原型上，后面用到axios的地方直接使用$http
Vue.prototype.$http=axios

// 路由导航守卫 作用：在每一次路由跳转的时候，都会触发一系列的回调函数，这些回调函数成为导航守卫，可以在这些会调函数中进行路由导航拦截操作
// 在进入某个路由前
router.beforeEach((to, from, next) => {
  
// 如添加了导航守卫的会调函数，必须调用next函数，将其引导到某个页面，如果不传参就是不干预路由跳转

let token=localStorage.getItem("token")
if(!token&&to.path!=="/login"){
// 判断如果不加上to.path!=="/login"会陷入死递归，会一直跳转login页面没有出口
  return next("/login")
}
 next()
})
// 在进入之后
router.afterEach((to, from) => {
 
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
