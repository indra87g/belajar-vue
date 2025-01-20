<script setup>
import { ref, onMounted, nextTick } from "vue"

const props = defineProps(["name", "initialCount"])

// reactive state
console.log(`Counter component loaded`)
let counter = ref({
    count: Number(props.initialCount),
    name: 'Indra'
})

// function that mutate state and trigger updates
async function increment() {
    console.log(`Increment count`)
    counter.value = {
        ...counter.value,
        count: counter.value.count + 1
    }
    await nextTick()
    console.log(`Increment count after nextTick`)
}

// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is: ${counter.value.count}.`)
})
</script>

<template>
    <div>
        <h1>Counter {{ props.name }} : {{ counter.count }}</h1>
        <button v-on:click="increment">Increment</button>
    </div>
</template>
