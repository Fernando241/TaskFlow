<template>
    <div>

    <p v-if="!store.filteredTasks.length">
        No hay tareas en este filtro
    </p>

    <TaskItem
        v-for="task in store.filteredTasks"
        :key="task.id"
        :task="task"
    />
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from './TaskItem.vue'

const store = useTaskStore()
</script>