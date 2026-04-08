<template>
    <div>
    <button @click="remove">❌</button>
    <span 
        @click="toggle"
        :style="{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }"
    >  ----- 
        {{ task.title }}
    </span>

    
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps({
    task: Object
})

const store = useTaskStore()

const toggle = () => {
    store.toggleTask(props.task.id)
}

const remove = () => {
    store.deleteTask(props.task.id)
}
</script>