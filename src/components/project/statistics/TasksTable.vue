<template>
    <div class="tasksTableContainer">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Tarea</th>
                    <th scope="col">Creador</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody v-if="tasksList.length >= 1">
                <tr :key="task" v-for="task in tasksList">
                    <td>
                        <div class="taskTableField">
                            <span class="taskTitle">{{task.task}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="taskTableField">
                            <div class="taskCreatorProfile">
                                <!-- data-toggle="tooltip" data-placement="bottom" title="Ale Rodríguez" -->
                                <img :src="task.creatorPhoto" width="100%">
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="taskTableField">
                            <div class="taskOptions">
                                <a @click="deleteTask(task.id)" style="cursor: pointer">
                                    <svg class="feather-like-options">
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#trash" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <p style="margin: 25px">No hay tareas. Agrega una en el botón.</p>
            </tbody>
        </table>
    </div>
</template>
<script>

    import '@/assets/css/tasksTable.css'

    import firebase from 'firebase'
    export default {
        data: function (){
            return {
                tasksList: []
            }
        },
        created: function(){
            this.getTasks()
        },
        methods: {
            getTasks: function (){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('tasks')
                .get()
                .then(tasks => this.putTasksOnTable(tasks))
            },
            putTasksOnTable: function(tasks){
                tasks.forEach(task => {
                    firebase.storage().ref(`profile_photos/${task.data()['creator']}`).getDownloadURL()
                    .then(url => {
                        this.tasksList.push({
                            task: task.data()['task'],
                            creatorPhoto: url,
                            id: task.id
                        })
                    })
                    .catch(() => {
                       this.tasksList.push({
                            task: task.data()['task'],
                            creatorPhoto: '../../../../../assets/ilustrations/profile.png',
                            id: task.id
                       })
                    })
                })
            },
            deleteTask: function(id){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('tasks')
                .doc(id)
                .delete()
                .then(() => window.location.reload())
            }
        }
    }

</script>