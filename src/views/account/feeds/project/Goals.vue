<template>
    <!-- <p>Las metas te ayudan a que todo lo que hagas en tu proyecto con Recognizify vaya entorno a ellas.</p><br> -->
    <div id="goals">
        <CreateGoal/>
            <div class="dashboardContent">
                <div class="goalsLayout">
                    <div class="projectSummaryTitle">
                        <h2>
                            <div style="letter-spacing: -0.8x">
                                Metas
                                <h6 style="color: #A9A8C3; font-family: 'cooper_hewittsemibold'">Panel de Goals</h6>
                            </div>
                            <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addGoalModal">
                                <svg width="18" height="18" stroke="#ffffff" stroke-width="2">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#plus"/>
                                </svg>
                                Crear una meta
                            </button>
                        </h2><br>
                    </div>
                    <div class="goalsField" v-if="goals.length > 0">
                        <div class="card goalCard" style="width: 18rem;" :key="goalData" v-for="goalData in goals">
                            <a class="goalCardStar" @click="setStar(goalData.id)" data-toggle="tooltip" data-placement="right" title="Marcar como importante">
                                <svg :class="goalData.active ? 'starActive' : 'feather-dark'">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#star"/>
                                </svg> 
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">{{goalData.name}}</h5>
                                <p class="card-text">{{goalData.motivation}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="nonGoalsField" v-if="goals.length == 0">
                        <div>
                            <h3 style="color: #9e95aa;">No tienes nuevas metas</h3>
                            <p style="color: #9e95aa;">Las metas te ayudan a que todo lo que hagas dentro de Recognizify gire en torno a ellas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectPanel/>
    </div>
</template>
<script>

    import firebase from 'firebase'

    import '@/assets/css/feed.css'
    import '@/assets/css/goals.css'

    import CreateGoal from '@/components/modals/CreateGoal.vue'
    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'
    import ProjectPanel from '@/components/project/ProjectPanel.vue'

    export default {
        data(){
            return {
                goals: []
            }
        },
        components: {
            CreateGoal,
            ProjectPanel
        },
        mixins: [CheckProjectMember],
        created: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/dashboard/select')
            } else {
                this.getGoals()
                this.setActiveStarGoal()
            }
        },
        methods: {
            getGoals: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('goals')
                .get()
                .then(goals => {
                    goals.forEach(goal => {
                        this.goals.push({
                            name: goal.data()['name'],
                            motivation: goal.data()['motivation'],
                            id: goal.id,
                            active: goal.data()['active']
                        })
                    })
                })
            },
            setStar: function(id, e){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('goals')
                .doc(id)
                .update({
                    star: true,
                    active: true
                })
                .then(() => {
                    console.log('Bien')
                })
                .catch((err) => console.log(err))
            }
        },
        updated: function(){
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }
    }

</script>