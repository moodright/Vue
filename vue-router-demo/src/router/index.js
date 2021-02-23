// index.js: vue-router 配置文件

// 导入需要的依赖
import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入跳转需要的组件
import Main from '../components/Main';
import Content from '../components/Content';

// 通过 Vue.use() 安装路由功能
Vue.use(VueRouter);

// 导出创建并配置好的 VueRouter 实例
export default new VueRouter({
  // 使用 routes 选项定义路由
  routes: [
    {
      // 定义路由的名字
      name: '主页面',
      // 定义跳转路径
      path: '/main',
      // 定义跳转的组件
      component: Main
    },
    {
      name: '内容页',
      path: '/content',
      component: Content
    }
  ]
});
