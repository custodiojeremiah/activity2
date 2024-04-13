<template>
  <div>
    <h2>Product List</h2>
    <div v-if="products.length === 0">No products available.</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>Description: {{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="editProduct(product.id)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </div>
    </div>
    <router-link to="/add">Add Product</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['deleteProduct']),
    editProduct(id) {
      this.$router.push({ path: `/edit/${id}` });
    }
  }
}
</script>
