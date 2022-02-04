import Vue from 'vue'
import VueRouter from 'vue-router'
import Presentation from '@/views/Presentation'
import Hypnotherapie from '@/views/Hypnotherapie'
import Naturotherapie from '@/views/Naturotherapie'
import PageNotFound from '@/views/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Presentation
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: Presentation
  },
  {
    path: '/hypnotherapie',
    name: 'hypnotherapie',
    component: Hypnotherapie
  },
  {
    path: '/naturotherapie',
    name: 'naturotherapie',
    component: Naturotherapie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
