<template>
    <div class="container">
        <h1>TaskFlow</h1>

        <TaskForm />
        <TaskList />
    </div>
</template>

<script setup>
import TaskForm from '@/components/tasks/TaskForm.vue';
import TaskList from '@/components/tasks/TaskList.vue';
</script>

<style>
.container {
    max-width: 600px;
    margin: 50px auto;
    font-family: Arial;
}
</style>