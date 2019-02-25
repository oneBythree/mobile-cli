<template>
  <div id="app">
    <van-tabbar v-model="active"
                active-color="#991100">
      <van-tabbar-item icon="home-o"
                       to="/">茶社</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       to="/list">预约中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o"
                       to="/my">个人中心</van-tabbar-item>
    </van-tabbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
