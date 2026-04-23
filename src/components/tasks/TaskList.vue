<template>
    <div>

    <p v-if="!taskStore.filteredTasks.length">
        No hay tareas en este filtro
    </p>

    <TransitionGroup name="task" tag="div" class="task-list">
        <TaskItem
            v-for="task in taskStore.filteredTasks"
            :key="task.id"
            :task="task"
        />
    </TransitionGroup>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from './TaskItem.vue'

const taskStore = useTaskStore()
</script>

<style scoped>
/* Entrada */
.task-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.task-enter-active {
    transition: all 0.3s ease;
}

.task-enter-to {
    opacity: 1;
    transform: translateY(0);
}

/* Salida */
.task-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.task-leave-active {
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
}

.task-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Movimiento */
.task-move {
    transition: transform 0.3s ease;
}

.task-list {
    position: relative;
}
</style>