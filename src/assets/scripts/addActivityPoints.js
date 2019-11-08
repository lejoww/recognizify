import Vue from 'vue'
import firebase from 'firebase'

export const AddPoints = {
    methods: {
        addActivityPoint(){
            let date = new Date()
            let today = `${date.getUTCDate()}${date.getMonth()}${date.getFullYear()}`

            firebase.firestore()
            .collection("projects")
            .doc(this.$route.params.projectId)
            .collection("dates")
            .doc(today)
            .get()
            .then(amount => {
               let amounted = amount.data() === undefined || amount.data() === NaN ? 0 : amount.data()['activityPoints']
               this.setActivityPoint(today, amounted)
            })
        },
        setActivityPoint(date, point){
            firebase.firestore()
            .collection("projects")
            .doc(this.$route.params.projectId)
            .collection("dates")
            .doc(date)
            .set({
                activityPoints: point + 1
            })
        }
    }
}