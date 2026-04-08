import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
    const tasks = ref([])

    const addTask = (text) => {
    tasks.value.push({
        id: Date.now(),
        text,
        completed: false
    })
    }

    const toggleTask = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.completed = !task.completed
    }

    return {
    tasks,
    addTask,
    toggleTask
    }
})