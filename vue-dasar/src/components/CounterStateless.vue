<script setup>
const { counter, name, increment } = defineProps({
    counter: Number,
    name: String,
    increment: Number
})
</script>

<template>
    <h1>Counter {{ name }} : {{ counter }}</h1>
    <button @click="$emit('click', increment)">Increment {{ name }}</button>
</template>

<style scoped>

</style>