import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import creditProve from '@/components/creditProve/creditProve'
import privacyPolicy from "@/components/privacy";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'privacyPolicy',
      component: privacyPolicy
    }
  ]
})
