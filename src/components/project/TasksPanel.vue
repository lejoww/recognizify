<template>
    <div class="tasksPanel">
        <div class="tasksPanelWrapper">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#check-circle" />
            </svg>
            <span class="tasksPanelTitle"> Tareas de tu equipo</span>
            <div class="tasksPanelList" v-if="tasks.length > 0">
                <Task :key="task" v-for="task in tasks" :todo="task.message" :publisher="`por ${task.name}`" :id="task.publisherId"/>
            </div>

            <div class="tasksPanelList" v-if="tasks.length == 0">
                <Task todo="Mantente sincronizado ⌚ con nuevas tareas para tu equipo aquí 🚀. Agrega alguna 💡." :publisher="`por Recognizify`"/>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>

        <NewTask/>
    </div>
</template>
<script>

    import '@/assets/css/tasksPanel.css'
    import Task from '@/components/models/Task.vue'
    import NewTask from '@/components/models/NewTask.vue'

    import firebase from 'firebase'

    export default {
        data: function(){
            return {
                tasks: []
            }
        },
        components: {
            Task,
            NewTask
        },
        created: function(){
            this.getTasks()
        },
        methods: {
            getTasks: function() {

                    firebase.firestore()
                    .collection('projects')
                    .doc(this.$route.params.projectId)
                    .collection('tasks')
                    .get()
                    .then((tasks) => {
                        tasks.forEach(task => {
                            this.tasks.push({
                                name: task.data()['name'],
                                message: task.data()['task'],
                                publisherId: task.data()['publisherId']
                            })
                        })
                    })
            }
        }
    }

</script>