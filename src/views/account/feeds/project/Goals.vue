<template>
    <!-- <p>Las metas te ayudan a que todo lo que hagas en tu proyecto con Recognizify vaya entorno a ellas.</p><br> -->
    <div id="goals">
        <CreateGoal/>
            <div class="dashboardContent">
                <div class="goalsLayout">
                    <div class="projectSummaryTitle">
                        <h3>
                            Metas
                            <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addGoalModal">
                                <svg width="18" height="18" stroke="#ffffff" stroke-width="2">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#plus"/>
                                </svg>
                                Crear una meta
                            </button>
                        </h3><br>
                    </div>
                    <div class="goalsField" v-if="goals.length > 0">
                        <div class="card goalCard" style="width: 18rem;" :key="goalData['name']" v-for="(goalData, name, motivation) in goals">
                            <a @click="setStar(goalData['id'])">
                                <svg width="18" height="18" stroke="#000" stroke-width="2" fill="none">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#star"/>
                                </svg> 
                            </a>
                            <div class="card-body">
                                <h5 class="card-title" :key="name">{{goalData['name']}}</h5>
                                <p class="card-text" :key="motivation">{{goalData['motivation']}}</p>
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
    </div>
</template>
<script>

    import firebase from 'firebase'

    import '@/assets/css/feed.css'
    import '@/assets/css/goals.css'

    import CreateGoal from '@/components/modals/CreateGoal.vue'

    export default {
        data(){
            return {
                goals: []
            }
        },
        components: {
            CreateGoal
        },
        created: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/dashboard/select')
            } else {
                this.getGoals()
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
                            id: goal.id
                        })
                    })
                })
            },
            setStar: function(id){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('goals')
                .doc(id)
                .update({
                    star: true
                })
                .then(() => console.log('correcto'))
                .catch(() => console.log('nope'))
            }
        }
    }

</script>