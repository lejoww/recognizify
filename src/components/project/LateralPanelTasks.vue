<template>
    <div class="lateralPanelTasksContainer">
        <div class="lateralPanelTasksHeader">
            <h6 style="font-family: 'cooper_hewittsemibold'">Tareas en tu proyecto</h6>
            <a class="btn btn-outline-dark" :href="`/dashboard/project/${this.$route.params.projectId}/tasks`" style="width: 92px">Administrar</a>
        </div>
        <div v-if="tasks.length >= 1">
            <TaskSelector :task="task.todo" :publisher="task.creator" :id="task.id" :isDone="task.isDone" :key="task" v-for="task in tasks"/>
        </div>
        <div v-else class="nonTasksContent">
            <h6 style="font-family: 'cooper_hewittsemibold'; color: #9e95aa; margin: 0">No hay tareas aquí</h6>
            <small style="color: #9e95aa">Pero calma, con paciencia se logra.</small>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    import '@/assets/css/lateralPanelTasks.css'
    import TaskSelector from '@/components/project/TaskSelector.vue'
    export default {
        data(){
            return {
                tasks: []
            }
        },
        components: {
            TaskSelector
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .collection('tasks')
            .get()
            .then((tasks) => {
                tasks.forEach((task) => {
                    firebase.firestore()
                    .collection('users')
                    .doc(task.data()['creator'])
                    .get()
                    .then((creator) => {
                        this.tasks.push({
                            todo: task.data()['task'],
                            id: task.id,
                            creator: creator.data()['name'],
                            isDone: task.data()['isDone']
                        })
                    })
                    .catch(err => console.err(err))
                })
            })
            .catch(err => console.err(err))
        }
    }

</script>