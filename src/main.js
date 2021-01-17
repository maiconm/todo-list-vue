import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { max } from 'vee-validate/dist/rules'
import { routes } from './routes'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
})

extend('required', {
  ...required,
  message: 'Campo obrigatório'
})
extend('max', {
  ...max,
  message: (campo, regra) => `Necessário ter no máximo ${regra.length} caracteres`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
