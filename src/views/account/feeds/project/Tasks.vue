
<template>
    <div class="dashboardContent">
        <div class="tasksLayout">
            <TasksPanel/>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/tasks.css';
    import TasksPanel from '@/components/project/TasksPanel.vue';

    export default {
        components: {
            TasksPanel
        }
    }

</script>