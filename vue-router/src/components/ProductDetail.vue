<script setup>
import { ref, watchEffect } from 'vue'

const {id} = defineProps(['id'])
const loaded = ref(false)
const error = ref(false)
const product = ref(null)

watchEffect(() => {
    if (id) {
        fetch(`/api/products/${id}.json`)
            .then(res => res.json())
            .then(data => {
                product.value = data
                loaded.value = true
            })
            .catch(err => {
                console.error(`Error loading product: ${err}`)
                error.value = true
            })
    }
})
</script>

<template>
    <template v-if="id">
            <div v-if="loaded">
                <template v-if="product">
                    <h1>{{ product.id }} - {{ product.name }}</h1>
                    <p>{{ product.description }}</p>
                    <p>Price: Rp{{ product.price }}</p>        
                </template>
            </div>
            <div v-if="error">
                <h1>Error loading product : {{ $route.params.id }}</h1>
            </div>
            <div v-else>
                <h1>Loading product : {{ $route.params.id }}</h1>
            </div>
        </template>
        <template v-else>
            <h1>No product selected</h1>
        </template>
</template>

<style scoped>

</style>