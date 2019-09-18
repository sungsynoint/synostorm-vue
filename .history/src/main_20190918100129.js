import Vue from 'vue'
import App from './App.vue'
import "./theme/js/app"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')