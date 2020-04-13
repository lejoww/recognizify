<template>
    <div class="projectSummaryGoalNotice">
        <div class="goalNoticeContent">
            <div class="goalNoticeOpacity" v-if="featuredGoal.name != ''">
                <h3><span class="badge badge-success">Tu principal objetivo</span></h3>
                <h4 class="text-white" style="line-height: 1.2; font-weight: 700">{{featuredGoal.name}}</h4>
                <br>
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br>
                <span style="font-size: 12px; font-weight: 800; color: #8772AA; margin-left: 37px">El equipo está en proceso</span>
                <div class="goalNoticeLastTask">
                    <div class="profilePhotoContainer">    
                        <img :src="this.tasks[0].profile" alt="profile">
                    </div>
                    <span class="text-white" style="font-size: 13px"><b>{{this.tasks[0].name}}</b> pidió {{this.tasks[0].task.toLowerCase()}}</span>
                </div>
                <!-- <p class="text-white" v-text="featuredGoal.motivation"></p> -->
            </div>

            <div class="goalNonNoticeOpacity" v-if="featuredGoal.name == ''">
                    <h2 class="text-white" style="font-weight: 800">Calcula hasta dónde puedes llegar</h2>
                    <p class="text-white">Este es tu <span style="font-weight: 700">primer paso para continuar.</span> Añade una meta y una tarea, únelas y podrás seguirlas.</p>
                    <a href="#" class="btn btn-warning">
                        <router-link class="text-white" :to="`/dashboard/project/${this.$route.params.projectId}/goals`">
                            Crea nuevas metas
                        </router-link>
                    </a>
            </div>
        </div>
    </div>
</template>
<script>
    
    import firebase from 'firebase'

    import '@/assets/css/featuredGoal.css'

    export default {
        data(){
            return {
                importances: [],
                highImportance: 0,
                featuredGoal: {
                    name: '',
                    motivation: ''
                },
                tasks: []
            }
        },
        created: function(){
            if (this.$route.params["projectId"] == 'undefined') {
                this.$router.push('/select')
            } else {
                this.getFeaturedGoal()
                this.getLastTasks()
            }
        },
        methods: {
            getFeaturedGoal: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('goals')
                .get()
                .then(goals => {
                    goals.forEach(goal => {
                        if (goal.data()['star'] != false) {
                            this.featuredGoal.name = goal.data()['name']
                            this.featuredGoal.motivation = goal.data()['motivation']
                        }
                    })
                })
            },
            getLastTasks: function() {
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('tasks')
                .get()
                .then(tasks => {
                    tasks.forEach(task => {
                        firebase.firestore()
                        .collection('users')
                        .doc(task.data().creator)
                        .get()
                        .then(creator => {
                            firebase.storage()
                            .ref(`/profile_photos/${task.data().creator}`).getDownloadURL()
                            .then(url => {
                                this.tasks.push({
                                    profile: url,
                                    name: creator.data().name,
                                    task: task.data().task
                                })
                            })
                        })
                    })
                })
            }
        }
    }

</script>