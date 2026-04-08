import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
    tasks: []
    }),

    actions: {
    loadTasks() {
        const data = localStorage.getItem('tasks')
        if (data) {
        this.tasks = JSON.parse(data)
        }
    },

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    addTask(task) {
        this.tasks.push({
        id: Date.now(),
        title: task,
        completed: false
        })
        this.saveTasks()
    },

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id)
        if (task) {
        task.completed = !task.completed
        this.saveTasks()
        }
    },

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id)
        this.saveTasks()
    }
    }
})