import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Routes from './routes.js'
import store from './store'



Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueGlobalVariable, {
//   globals:{
//     username: "",
//   },
// });


import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter,
  store
}).$mount('#app')
