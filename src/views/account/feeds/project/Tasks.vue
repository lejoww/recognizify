
<template>
    <div class="dashboardContent">
        <div class="tasksLayout">
            <TasksTable/>
            <div style="grid-column: 2 / 3; margin: 2rem 0">
                <a :href="`/dashboard/project/${this.$route.params.projectId}/tasks/create`" 
                class="btn btn-success">Nueva tarea</a>
            </div>
        </div>
    </div>
</template>
<script>

    // import '@/assets/css/tasks.css';
    import TasksTable from '@/components/project/statistics/TasksTable.vue'

    export default {
        components: {
            TasksTable
        }
    }

</script>