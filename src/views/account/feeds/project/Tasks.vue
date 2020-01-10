
<template>
    <div class="dashboardContent">
        <div class="tasksLayout">
            <div class="tasksModuleHeader">
                <h2>Tareas</h2>
                <h6 style="color: #A9A8C3; font-family: 'cooper_hewittsemibold'">Panel de Tasks</h6>
            </div>
            <div class="tasksContent">
                <TasksTable/>
                <div style="grid-column: 2 / 3; margin: 2rem 0">
                    <a :href="`/dashboard/project/${this.$route.params.projectId}/tasks/create`" 
                    class="btn btn-success">Nueva tarea</a>
                </div>
            </div>
            <ProjectPanel/>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase';

    import TasksTable from '@/components/project/statistics/TasksTable.vue'
    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'
    import ProjectPanel from '@/components/project/ProjectPanel.vue'

    export default {
        components: {
            TasksTable,
            ProjectPanel
        },
        mixins: [CheckProjectMember]
    }

</script>