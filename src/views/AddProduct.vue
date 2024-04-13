<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <input type="text" v-model="name" placeholder="Product Name" required>
      <textarea v-model="description" placeholder="Product Description" required></textarea>
      <input type="number" v-model.number="price" placeholder="Product Price" required>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: 0
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    addProduct() {
      if (!this.name || !this.description || this.price <= 0) {
        alert('Please fill all fields and provide a valid price.');
        return;
      }
      const product = {
        id: Date.now(), // simple unique ID generation
        name: this.name,
        description: this.description,
        price: parseFloat(this.price)
      };
      this.$store.dispatch('addProduct', product);
      this.$router.push('/');
    }
  }
}
</script>
