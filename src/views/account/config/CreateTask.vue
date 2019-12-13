<template>
    <div class="formCuttedLayout">
        <input type="text" v-model="task.name" class="form-control-special form-control-xl form-control-variable" spellcheck="false" placeholder="Un nombre para la tarea">
        <br>
        <div class="formContent">
            <span class="formSubtitle">Información de la tarea</span>
            <p class="formText">Recopilamos la mayor cantidad de información de tu equipo</p>
            <div class="form-group">
                <input type="text" v-model="task.because" class="form-control" placeholder="¿Por qué deben hacer esto?">
            </div>
            <div class="form-row">
                <div class="col">
                    <select class="form-control" style="border: 1px solid #e0e0e0;" @change="getGoals">
                        <option selected>¿Con qué objetivo hacen esto?</option>
                        <option :key="objective" v-for="objective in objectivesAchieved">{{objective['name']}}</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-control" style="border: 1px solid #e0e0e0;" id="steps">
                        <option selected>¿Qué relación tiene esta tarea con el objetivo?</option>
                        <option :key="step" v-for="step in objectivesStepsAchieved">{{step}}</option>
                    </select>
                </div>
            </div><br>
            <button class="btn btn-success" @click="saveTask">Guardar tarea</button>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/tasksTable.css'

    import firebase from 'firebase'
    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'

    export default {
        data: function(){
            return {
                task: {
                    name: ''
                },
                objectivesAchieved: [],
                objectivesStepsAchieved: []
            }
        },
        mixins: [CheckProjectMember],
        mounted: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .collection('goals')
            .get()
            .then(goals => {
                goals.forEach(goal => this.objectivesAchieved.push({
                    name: goal.data()['name'],
                    id: goal.id
                }))
            })
        },
        methods: {
            getGoals: function(e){
                this.objectivesAchieved.forEach(objective => {
                    if(e.target.value == objective['name']){
                        firebase.firestore()
                        .collection('projects')
                        .doc(this.$route.params.projectId)
                        .collection('goals')
                        .doc(objective['id'])
                        .get()
                        .then(goal => {
                            this.objectivesStepsAchieved.push(
                                goal.data().steps['one'], 
                                goal.data().steps['two'],
                                goal.data().steps['third']
                            )
                        })
                    }
                })
            },
            saveTask: function(){
                let stepsList = document.getElementById('steps');
                let taskFor = stepsList.options[stepsList.selectedIndex].text;
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('tasks')
                .add({
                    task: this.task.name,
                    for: taskFor,
                    creator: firebase.auth().currentUser.uid
                })
                .then(() => this.$router.push(`/dashboard/project/${this.$route.params.projectId}/tasks`))
            }
        }
    }

</script>