import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List.vue'
import My from '@/components/My.vue'
import Children from '@/components/Children.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/children',
      name: 'Children',
      component: Children
    }
  ]
})
