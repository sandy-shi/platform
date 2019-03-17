import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import Login from '@/components/login'
import Register from '@/components/register'

import InfoMachineLearning from '@/pages/course-introduce/mechine-learning'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/info-machine-learning',
      name: 'InfoMachineLearning',
      component: InfoMachineLearning
    }
  ]
})
