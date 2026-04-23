<template>
    <div>

        <div v-if="taskStore.isLoading" class="loading">
            Cargando tareas...
        </div>

        <div v-else-if="!taskStore.filteredTasks.length" class="empty-state">
            <p>No hay tareas aquí</p>
            <small>Agrega una nueva tarea para comenzar</small>
        </div>

        <TransitionGroup
            v-else
            name="task"
            tag="div"
            class="task-list"
        >
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

    .empty-state {
        text-align: center;
        padding: 20px;
        opacity: 0.7;
    }

    .empty-state small {
        display: block;
        margin-top: 5px;
        font-size: 12px;
    }

    .loading {
        text-align: center;
        padding: 20px;
        font-size: 14px;
    }
</style>