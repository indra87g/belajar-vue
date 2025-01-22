<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <h1>Not Found : {{ route.path }}</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
</template>