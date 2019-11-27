import Vue from 'vue';
import firebase from 'firebase';

export const CheckProjectMember = {
    data(){
        return {
            members: ''
        }
    },
    created: function() {
        this.getProjectMembers();
    },
    methods: {
        getProjectMembers: function (){
            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('members')
                .get()
                .then((members) => this.checkMembership(members));
            });
        },
        checkMembership: function(membership){
            console.log(membership)
            // membership.forEach(member => {
            //     if (member.id == user.uid) {
            //       this.projects.push({
            //         name: project.data()["shortName"],
            //         id: project.id
            //       })
            //       count += 1;
            //     }
        }
    }
}