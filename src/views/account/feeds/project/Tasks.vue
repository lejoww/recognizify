
<template>
    <div class="dashboardContent">
        <NeedGoalsModal v-if="this.modalForGoals == true"/>
        <div class="tasksLayout">
            <div class="tasksModuleHeader bg-gradient">
                <div>
                    <h2 class="text-white" style="font-weight: 800; margin-bottom: 4px">Tasks</h2>
                    <span style="color: #A9A8C3; font-weight: 700">Panel de tareas</span>
                </div>
                <a :href="`/dashboard/project/${this.$route.params.projectId}/tasks/create`" 
                class="btn btn-success" style="margin-left: 2rem">Nueva tarea</a>
            </div>
            <div class="tasksContent">
                <TasksTable/>
            </div>
        </div>
        <ProjectPanel/>
    </div>
</template>
<script>

    import firebase from 'firebase';

    import TasksTable from '@/components/project/statistics/TasksTable.vue'
    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'
    import ProjectPanel from '@/components/project/ProjectPanel.vue'
    import NeedGoalsModal from '@/components/modals/NeedGoals.vue'

    export default {
        data() {
            return {
                modalForGoals: false
            }
        },
        components: {
            TasksTable,
            ProjectPanel,
            NeedGoalsModal
        },
        mixins: [CheckProjectMember],
        mounted() {
            this.checkGoalsLength()
        },
        methods: {
            checkGoalsLength: function() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        firebase.firestore()
                        .collection('projects')
                        .doc(this.$route.params.projectId)
                        .collection('goals')
                        .get()
                        .then(goals => {
                            if (goals.docs.length == 0) this.modalForGoals = true
                        })
                    }
                })
            }
        }
    }

</script>