<template>
    <div class="goalStepsBanner">
        <div class="nonGoalStepsBannerNotice"  v-if="
        goalSteps.one == '' || goalSteps.one == undefined || goalSteps.one == null &&
        goalSteps.two == '' || goalSteps.two == undefined || goalSteps.two == null &&
        goalSteps.third == '' || goalSteps.third == undefined || goalSteps.third == null
        ">
            <img src="@/assets/ilustrations/robot-wink.png" width="92px">
            <div style="margin: auto 2rem;">
              <h4>Crea un objetivo y haz un seguimiento</h4>
              <p>Crea una meta ese ese botón de arriba. Luego crea tareas y enlazalas a ese objetivo. Así podrás hacer seguimiento al trabajo de tu equipo y el tuyo (aparecerá aquí).</p>
            </div>  
        </div>
        <div class="goalStepsBannerContent" v-else>
            <GoalStep   number="1" 
                        :step="this.goalSteps.one"
                        :value="0"
                        />
            <GoalStep   number="2" 
                        :step="this.goalSteps.two"
                        :value="7"
                        />
            <GoalStep   number="3" 
                        :step="this.goalSteps.third"
                        :value="0"
                    />
        </div>
    </div>
</template>
<script>

    import '@/assets/css/goalSteps.css'

    import firebase from 'firebase'
    import GoalStep from '@/components/models/GoalStep.vue'
    export default {
        data: function(){
            return {
                goalSteps: {
                    one: '',
                    two: '',
                    third: ''
                }
            }
        },
        components: {   
            GoalStep
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .collection('goals')
            .get()
            .then(goals => {
                // console.log(this.goals.docs[0].data())
                goals.forEach(goal => {
                    if (goal.data()['star'] != false) {
                        this.goalSteps.one = goal.data().steps['one'];
                        this.goalSteps.two = goal.data().steps['two'];
                        this.goalSteps.third = goal.data().steps['third'];                 
                    }
                })
            })
        }
    }

</script>