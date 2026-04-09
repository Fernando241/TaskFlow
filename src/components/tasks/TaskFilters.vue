<script setup>
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()

const filters = ['all', 'completed', 'pending']

const setFilter = (filter) => {
    taskStore.setFilter(filter)
}
</script>

<template>
    <div class="filters">
    <button
        v-for="f in filters"
        :key="f"
        @click="setFilter(f)"
        :class="{ active: taskStore.filter === f }"
    >
        {{ f }}
    </button>
    </div>
</template>