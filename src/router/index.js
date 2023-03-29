import Vue from 'vue'
import VueRouter from 'vue-router'

//Components
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Services from '../views/ServiceView.vue'
//import Contact from '../views/HomeView.vue'
//import Request from '../views/HomeView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/services',
    name: 'home',
    component: Services
  },
  {
    path: '/about',
    name: 'about',
   component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
