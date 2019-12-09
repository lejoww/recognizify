<template>
    <div class="goalStepsBanner">
        <GoalStep   number="1" 
                    :step="this.goalSteps.one"
                    :value="0"/>
        <GoalStep   number="2" 
                    :step="this.goalSteps.two"
                    :value="7"/>
        <GoalStep   number="3" 
                    :step="this.goalSteps.third"
                    :value="0"/>
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