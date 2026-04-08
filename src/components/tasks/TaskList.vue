<template>
    <div>
    <TaskItem
        v-for="task in store.tasks"
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