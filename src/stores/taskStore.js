import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
    tasks: [],
    currentFilter: 'all', //'all' | 'completed' | 'pending'
    isLoading: false,
    lastAddedTaskId: null
    }),

    getters: {
    filteredTasks(state) {
        switch (state.currentFilter) {
        case 'completed':
            return state.tasks.filter(task => task.completed)
        case 'pending':
            return state.tasks.filter(task => !task.completed)
        default:
            return state.tasks
        }
    },

    totalTasks(state) {
        return state.tasks.length
    },

    completedTasks(state) {
        return state.tasks.filter(task => task.completed).length
    },

    pendingTasks(state) {
        return state.tasks.filter(task => !task.completed).length
    }
    },    

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
        const newTask = {
            id: Date.now(),
            title: task,
            completed: false
        }

        this.tasks.push(newTask)
        this.lastAddedTaskId = newTask.id

        this.saveTasks()

        setTimeout(() => {
            this.lastAddedTaskId = null
        }, 1000)
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
    },

    setFilter(filter) {
    this.currentFilter = filter
    this.saveFilter()
    },

    saveFilter() {
        localStorage.setItem('taskflow_filter', this.currentFilter)
    },

    loadFilter() {
        const savedFilter = localStorage.getItem('taskflow_filter')
        if (savedFilter) {
            this.currentFilter = savedFilter
        }
    },

    async init() {
        this.isLoading = true

        await new Promise(resolve => setTimeout(resolve, 500)) // simulación

        this.loadTasks()
        this.loadFilter()

        this.isLoading = false
    }

    }
})