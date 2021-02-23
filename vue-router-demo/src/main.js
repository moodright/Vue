import Vue from 'vue'
import App from './App'
// 导入 vue-router 实例
import VueRouter from './router/index';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 给 Vue 实例注入路由
  // 踩坑： 一开始直接使用 VueRouter 写法报了异常：
  //       TypeError: Cannot read property 'matched' of undefined
  //       VueRouter,
  //       正确简写应是在导入时就将导入名改为 router 并使用此参数进行配置：
  //       router,
  //       若要使用自定义导入名则按下述方法写
  router: VueRouter,
  components: { App },
  template: '<App/>'
})
