import Vue from 'vue'
import router from './routes'
import FastClick from 'fastclick'
import App from './src/app'
import Baobab from '../src'
import './css/reset.styl'

Vue.use(Baobab)

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  ...App
})
