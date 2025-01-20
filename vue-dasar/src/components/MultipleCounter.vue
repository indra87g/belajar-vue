<script setup>
import Counter from "./Counter.vue"
import CounterStateless from "./CounterStateless.vue"
import { ref } from "vue"

const counter = ref(0)

function increment(value) {
    counter.value += value
}
</script>

<template>
    <Counter name="Eko" initial-count="100" />
    <Counter name="Sandhika" initial-count="100" />
    <Counter name="Anton" initial-count="100" />
    <CounterStateless name="Indra" :counter="counter" :increment="2" @click="increment" />
    <CounterStateless name="Michael Zomboni" :counter="counter" :increment="3" @click="increment" />
</template>

<style scoped>

</style>