// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerInit from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-default/index.css'
import './styles/main.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

// Vue.use(router)
/* eslint-disable no-new */

Vue.filter('data', function(value) {
    function add(m) {
        return m < 10 ? '0' + m : m
    }
    let time = new Date(parseInt(value))
    let y = time.getFullYear()
    let m = time.getMonth() + 1
    let d = time.getDate()
    let hh = time.getHours()
    let mm = time.getMinutes()

    return y + '-' + add(m) + '-' + add(d) + '  ' + add(hh) + ':'+add(mm)
})

new Vue({
  el: '#app',
  router: routerInit(store),
  store,
  template: '<App/>',
  components: { App }
})
