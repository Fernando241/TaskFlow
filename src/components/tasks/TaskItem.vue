<template>
    <div @click="store.toggleTask(task.id)">
    <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
        {{ task.text }}
    </span>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps({
    task: Object
})

const store = useTaskStore()
</script>