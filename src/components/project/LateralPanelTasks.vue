<template>
    <div class="lateralPanelTasksContainer">
        <div class="lateralPanelTasksHeader">
            <h6 style="font-family: 'cooper_hewittsemibold'">Tareas en tu proyecto</h6>
        </div>
        <TaskSelector :task="task.todo" :publisher="task.creator" :id="task.id" :isDone="task.isDone" :key="task" v-for="task in tasks"/>
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