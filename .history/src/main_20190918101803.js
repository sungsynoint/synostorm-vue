import Vue from 'vue'
import App from './App.vue'
import "./theme/js/vendor/moment"
import "./theme/js/app.min"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')