<template>
    <form @submit.prevent="handleSubmit">
    <input v-model="newTask" placeholder="Nueva tarea..." />
    <button>Agregar</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const newTask = ref('')
const store = useTaskStore()

const handleSubmit = () => {
    if (!newTask.value.trim()) return

    store.addTask(newTask.value)
    newTask.value = ''
}
</script>