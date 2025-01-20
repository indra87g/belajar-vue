<script setup>
import MyButton from './MyButton.vue';
import Container from './Container.vue';

const now = new Date()

function clickHandler() {
    alert('Ouch, You click me!')
}
</script>

<template>
    <Container title="Contoh Button">
        <template #header="attributes">
            <h1>Button App {{ attributes.counter }}</h1>
        </template>
        <template v-slot:default="attributes"> 
            <MyButton class="button" @click="clickHandler" :name="attributes.counter" />
        </template>
        <template #footer>
            <p>Copyright {{ now.getFullYear() }} Asterix Technology </p>
        </template>
    </Container>
</template>

<style scoped>
.button {
    background-color: #3489db;
    color: white;
    border: none;
}
</style>