import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import BotNav from '../views/BotNav.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
 
    redirect:'/botnav'
  },
  {
    path: '/botnav',
    name: 'botnav',
    component:BotNav,
    children:[
        {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
        }
    ]
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
