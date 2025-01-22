<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const products = ref([])
const {product} = defineProps(['product'])
const route = useRoute()
const search = ref(route.query.product || '')
const router = useRouter()

watchEffect(() => {
    router.replace({
        name: 'product-search',
        query: {product: search.value}
      }
    )
    fetch('/api/products.json')
        .then(response => response.json())
        .then(products => products.filter(product => product.name.toLowerCase().includes(search.value))
        ).then(data => products.value = data)
})
</script>

<template>
    <h1>Products</h1>
    <form action="">
        <input type="text" name="product" v-model="search" placeholder="Search Product">
    </form>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
            </tr>
        </tbody>
    </table>
</template>