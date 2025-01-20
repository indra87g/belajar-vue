<script setup>
import { reactive, ref, useTemplateRef } from 'vue'

const notes = reactive([])
const note = ref("")
const noteInput = useTemplateRef("noteInput")
const notesList = useTemplateRef("notesList")

function addNote() {
    notes.push(note.value)
    note.value = ""
    noteInput.value.focus()
    if (notesList.value) {
        notesList.value.forEach((li) => {
            console.info(li.textContent)
        })
    }
}
</script>
<template>
    <h1></h1>
    <div>
        <input ref="noteInput" type="text"
                v-model="note" placeholder="Tulis note here..."/>
        <button @click="addNote">Omke Gams</button>
    </div>
    <h1>Daftar FufuFafa</h1>
    <ul>
        <li v-for="note in notes" ref="notesList">
            {{ note }}
        </li>
    </ul>
</template>useTemplateRef, 