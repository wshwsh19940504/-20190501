import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,NavBar,Icon, Tabbar, TabbarItem} from 'vant';
import 'vant/lib/button/style';
import './assets/css/reset.css'
Vue.config.productionTip = false

Vue.use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
