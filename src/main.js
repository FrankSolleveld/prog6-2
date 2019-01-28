// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

let AppLayout = require('./components/App.vue')

// Show list items template 
const Listitems = Vue.component('Listitems', require ('./components/Listitems.vue'))

// Add item template
const Additem = Vue.component('Additem', require ('./components/Additem.vue'))

// Edit item template
const Edititem = Vue.component('Edititem', require ('./components/Edititem.vue'))

// Delete item template
const Deleteitem = Vue.component('Deleteitem', require ('./components/Deleteitem.vue'))

// View single item template
const Viewitem = Vue.component('Viewitem', require ('./components/Viewitem.vue'))

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Listitems',
    path:'/',
    component: Listitems
  },
  {
    name: 'Additem',
    path:'/add',
    component: Additem
  },
  {
    name: 'Edititem',
    path:'/edit/:id',
    component: Edititem
  },
  {
    name: 'Deleteitem',
    path:'/delete',
    component: Deleteitem
  },
  {
    name: 'Viewitem',
    path:'/items/:id',
    component: Viewitem
  }
]

const router = new VueRouter({
  mode:'history',
  routes: routes
})

new Vue ({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})