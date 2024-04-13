<template>
    <div>
      <h1>Edit Product</h1>
      <form @submit.prevent="updateProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedProduct.name" required><br>
        <label for="description">Description:</label>
        <textarea id="description" v-model="editedProduct.description" required></textarea><br>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="editedProduct.price" required><br>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    props: ['productId'],
    computed: {
      ...mapState(['products'])
    },
    data() {
      return {
        editedProduct: {}
      };
    },
    methods: {
      ...mapActions(['updateProduct']),
      updateProduct() {
        const productIndex = this.products.findIndex(p => p.id === this.productId);
        if (productIndex !== -1) {
          const updatedProduct = {
            ...this.products[productIndex],
            name: this.editedProduct.name,
            description: this.editedProduct.description,
            price: parseFloat(this.editedProduct.price)
          };
          this.$store.dispatch('updateProduct', updatedProduct);
          this.$router.push('/');
        }
      }
    },
    created() {
      const product = this.products.find(p => p.id === this.productId);
      if (product) {
        this.editedProduct = { ...product };
      }
    }
  }
  </script>
  