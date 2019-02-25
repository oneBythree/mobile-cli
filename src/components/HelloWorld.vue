<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <van-tabbar v-model="active"
                active-color="#991100">
      <van-tabbar-item icon="home-o"
                       to="/">茶社</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       to="/list">预约中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o"
                       to="/my">个人中心</van-tabbar-item>
    </van-tabbar> -->
    <router-link to="/children">二级页面</router-link>
    <!-- 222222dddd -->
    <!-- <h2>Essential Links</h2> -->
    <!-- <ul>
      <li>
        <a href="https://vuejs.org"
           target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org"
           target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org"
           target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs"
           target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul> -->
    <!-- <h2>Ecosystem</h2> -->
    <!-- <ul>
      <li>
        <a href="http://router.vuejs.org/"
           target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/"
           target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/"
           target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue"
           target="_blank">
          awesome-vue
        </a>
      </li>
    </ul> -->
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
  
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10"
                 :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4"
                 :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6"
                 :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button> -->
    <div class="box hairlines"></div>
    <div class="test ignore"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
.box {
  width: 180px;
  height: 300px;
}
.hairlines {
  border-bottom: 0.5px solid red;
}
.test {
  width: 100px;
  height: 100px;
  background: #991100;
}
.ignore {
  margin-top: 10px;
}
</style>
