<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <h1>User</h1>
    <RouterView name="header" />
    <RouterView v-slot="{Component}">
        <component :is="Component" :request-id="$route.query.requestId" />
    </RouterView>
    <RouterView name="footer" />
    <div>put footer here</div>
</template>