<template>
    <div class="container">
        <h1>TaskFlow</h1>

        <TaskForm /><br>
        <TaskList /><br><br>
        <p>Total: {{ taskStore.totalTasks }}</p>
        <p>Completadas: {{ taskStore.completedTasks }}</p>
        <p>Pendientes: {{ taskStore.pendingTasks }}</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

import TaskForm from '@/components/tasks/TaskForm.vue'
import TaskList from '@/components/tasks/TaskList.vue'

const taskStore = useTaskStore()

onMounted(() => {
    taskStore.loadTasks()
})
</script>

<style>
.container {
    max-width: 600px;
    margin: 50px auto;
    font-family: Arial;
}
</style>