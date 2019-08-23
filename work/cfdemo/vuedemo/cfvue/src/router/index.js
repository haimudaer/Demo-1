import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import creditProve from '@/components/creditProve/creditProve'
import privacyPolicy from "@/components/privacyPolicy";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
