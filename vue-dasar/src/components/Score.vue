<script setup>
import { ref } from 'vue'

const score = ref(10)
</script>

<template>
    <h1>Score App</h1>
    <div v-if="score > 90">
        <p>Skor lu {{ score }}, Sungkem puh🙏</p>
    </div>
    <div v-else-if="score > 70">
        <p>Skor lu {{ score }}, Keren Bro👍</p>
    </div>
    <div v-else>
        <p>Skor lu {{ score }}, Yahaha Cupu Lu Dek🤣</p>
    </div>
</template>