<script setup>
import { provide, reactive } from 'vue';
import Profile from './Profile.vue';
import ProfileAddress from './ProfileAddress.vue';

const profile = reactive({
    name: "Indra",
    email: "echo@indra87g.my.id"
})

provide("profile", profile)
</script>

<template>
    <input v-model="profile.name" type="text" placeholder="Name" >
    <Profile />
    <ProfileAddress />
</template>