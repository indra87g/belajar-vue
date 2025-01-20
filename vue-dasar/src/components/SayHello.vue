<script setup>
import { reactive, computed } from "vue"

const person = reactive({
    firstName: '',
    lastName: ''
})

function sayHello(){
    person.firstName = document.getElementById('firstName').value 
    person.lastName = document.getElementById('lastName').value 
}

function changeFirstName(event) {
    person.firstName = event.target.value
}

function changeLastName(event) {
    person.lastName = event.target.value
}

const fullName = computed((oldName) => {
    console.log('change old name', oldName)
    return `${person.firstName} ${person.lastName}`
})
</script>

<template>
    <div>
        <input placeholder="First Name" type="text" name="" id="firstName" @input="changeFirstName"><br/>
        <input placeholder="Last Name" type="text" name="" id="lastName" @input="changeLastName"><br/>
        <button v-on:click.prevent="sayHello">Say Hello</button>
    </div>
    <h1>Hello {{ fullName }}!</h1>
</template>