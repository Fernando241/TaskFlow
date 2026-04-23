<template>
    <div 
        class="task-item" 
        :class="{ 
            completed: task.completed,
            highlight: task.id === taskStore.lastAddedTaskId
        }">
    
    <input 
        type="checkbox" 
        :checked="task.completed"
        @change="toggle"
    />

    <span class="task-title">
        {{ task.title }}
    </span>

    <button class="delete-btn" @click="remove">
        ✕
    </button>

    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps({
    task: Object
})

const taskStore = useTaskStore()

const toggle = () => {
    taskStore.toggleTask(props.task.id)
}

const remove = () => {
    taskStore.deleteTask(props.task.id)
}
</script>

<style scoped>
.task-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    transition: background 0.2s ease;
}

/* Hover */
.task-item:hover {
    background: #f5f5f5;
}

/* Texto */
.task-title {
    flex: 1;
    transition: all 0.2s ease;
}

/* Estado completado */
.task-item.completed .task-title {
    text-decoration: line-through;
    opacity: 0.6;
}

/* Botón eliminar */
.delete-btn {
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
    background: none;
    border: none;
}

/* Mostrar botón en hover */
.task-item:hover .delete-btn {
    opacity: 1;
}

/* Cambiar cursor en checkbox */
.task-item input[type=checkbox] {
    cursor: pointer;
    transform: scale(1.1);
}

.highlight {
    background: #e0ffe0;
    transition: background 0.5s ease;
}

</style>