import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';


const fakeStore = {
  state: {
    a: 1
  },
}
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    products,
    fakeStore
  }
})