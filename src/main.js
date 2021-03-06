import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/styles/styles.scss';

console.log(store);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  created(){
    this.$store.dispatch('loadAllProducts');
  }
}).$mount('#app')


