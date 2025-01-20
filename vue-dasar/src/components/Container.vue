<script setup>
import { ref, useSlots } from 'vue'; 

const counter = ref(0)
</script>

<template>
    <div v-if="$slots.header">
        <slot name="header" :counter="counter" />
    </div>
    <div v-if="$slots.default">
        <slot name="default" :counter="counter" />
    </div>
    <div v-if="$slots.footer">
        <slot name="footer" :counter="counter" />
    </div>
    <div>
        <button @click="counter++">Increment</button>
    </div>
</template>