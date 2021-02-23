<template>
  <div id="app">
      <h1>Hello App!</h1>
      <div>
        <!-- 使用 router-link 组件来导航 -->
        <!-- 通过传入 `to` 属性来指定链接 -->
        <!-- <router-link> 默认会渲染成一个 `<a>` 标签 -->
        <router-link to="/main">主页面</router-link>
        <router-link to="/content">内容页</router-link>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
