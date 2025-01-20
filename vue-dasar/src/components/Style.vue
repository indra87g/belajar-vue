<script setup>
import { ref } from 'vue'

const red = ref(false)
const bold = ref(false)
const myStyle = {
    color: "green",
    textTransform: "lowercase"
}

function toggleRed() {
    red.value = !red.value
}

function toggleBold() {
    bold.value = !bold.value
}
</script>

<template>
    <h1 :class="{red: red, bold: bold}">Style</h1>
    <h1 :class="['red', 'bold']">Style</h1>
    <h2 :style="myStyle">My Style</h2>
    <button v-on:click="toggleRed">Red</button>
    <button v-on:click="toggleBold">Bold</button>
</template>

<style scoped>
.red {
    color: red;
}

.bold {
    text-transform: uppercase;
    font-weight: bold;
}
</style>