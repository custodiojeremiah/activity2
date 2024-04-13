import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        Vue.set(state.products, index, updatedProduct);
      }
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(p => p.id !== productId);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product);
    },
    updateProduct({ commit }, updatedProduct) {
      commit('updateProduct', updatedProduct);
    },
    deleteProduct({ commit }, productId) {
      commit('deleteProduct', productId);
    }
  }
});
