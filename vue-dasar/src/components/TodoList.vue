<script setup>
const items = [{
    id: 1,
    text: "Learn Vue",
}, {
    id: 2,
    text: "Learn Vue Router",
}, {
    id: 3,
    text: "Learn Pinia",
}, {
    id: 4,
    text: "Learn React🤣"
}]
</script>
<template>
    <h1>Todo List</h1>
    <ul v-for="item in items" v-bind:key="item.id">
        <li v-for="(value, key) in item" v-bind:key="key">
            {{ key }}: {{ value }}
        </li>
    </ul>

    <div v-for="n in 10">
        <h1>IShowSpeed: MINGGIR LU MISKIN ({{ n }})</h1>
    </div>
</template>