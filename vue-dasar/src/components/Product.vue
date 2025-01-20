<script setup>
import { onWatcherCleanup,ref, watchEffect } from 'vue'
import ProductDetail from './ProductDetail.vue';

const productId = ref("product1")
const product = ref(null)

watchEffect(async () => {
    onWatcherCleanup(() => {
        console.log("cleanup")
    })

    const response = await fetch(`/${productId.value}.json`)
    product.value = await response.json()
})
</script>

<template>
    <label for="productId">
        Product ID :
        <select v-model="productId">
            <option value=""></option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
        </select>
    </label>
    <div v-if="product">
        <ProductDetail :id="product.id"
                       :price="product.price"
                       :name="product.name" />
    </div>
</template>