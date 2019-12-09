<template>
    <div class="projectSummaryGoalNotice">
        <div class="goalNoticeContent">
            <div class="goalNoticeOpacity" v-if="featuredGoal.name != ''">
                <h1><span class="badge badge-secondary">Tu principal objetivo</span></h1>
                <h2 class="text-white" v-text="featuredGoal.name"></h2>
                <p class="text-white" v-text="featuredGoal.motivation"></p>
            </div>

            <div class="goalNonNoticeOpacity" v-if="featuredGoal.name == ''">
                    <h2 class="text-white">Calcula hasta dónde puedes llegar</h2>
                    <p class="text-white">Crea metas y motívate en ellas todos los días, el éxito comienza hoy.</p>
                    <a href="#" class="btn btn-warning btn-sm">
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
                }
            }
        },
        created: function(){
            if (this.$route.params["projectId"] == 'undefined') {
                this.$router.push('/select')
            } else {
                this.getFeaturedGoal()
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
            }
        }
    }

</script>