<script setup>
import {ref, onMounted } from 'vue'

console.info('Hello Vue')

const hello = "<h1>Hello Vue</h1>"
const buttonDisabled = true
const data = {
    id: "hello",
    class: "hello",
}
</script>

<template>
    <h1 :v-bind="data">{{ hello.toUpperCase() }}</h1>  <!-- html not rendered --> 
    <h2>{{ 150 * 500 }}</h2>
    <div :class="data.class" v-html="hello"></div> <!-- html rendered -->
    <button :disabled="buttonDisabled">This is Button</button>
</template>

<style scoped>
.hello{
    color: green;
}
</style>

