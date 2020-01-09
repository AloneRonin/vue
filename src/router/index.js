import Vue from 'vue'
import VueRouter from 'vue-router'
// 项目初始化时加载路由
import Home from '@/views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')  // 当路由被访问时加载
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
