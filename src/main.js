import Vue from 'vue'
import App from './App.vue'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { max } from 'vee-validate/dist/rules'

Vue.config.productionTip = false

extend('required', {
  ...required,
  message: 'Campo obrigatório'
})
extend('max', {
  ...max,
  message: (campo, regra) => `Necessário ter no máximo ${regra.length} caracteres`
})

new Vue({
  render: h => h(App),
}).$mount('#app')
