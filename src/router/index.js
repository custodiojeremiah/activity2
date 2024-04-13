import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from '../views/ProductList.vue';
import AddProduct from '../views/AddProduct.vue';
import EditProduct from '../views/EditProduct.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ProductList },
  { path: '/add', component: AddProduct },
  { path: '/edit/:id', component: EditProduct, props: true }
];

const router = new VueRouter({
  routes
});

export default router;
