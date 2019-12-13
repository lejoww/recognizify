import Vue from 'vue';
import firebase from 'firebase';

export const CheckProjectMember = {
    beforeCreate: function() {
        firebase.firestore()
        .collection('projects')
        .doc(this.$route.params.projectId)
        .collection('members')
        .get()
        .then((membership) => {
            membership.forEach(member => {
                if (member.id != firebase.auth().currentUser.uid){
                    this.$router.push('/error/project')
                }
            })
        });
    }
}

export default CheckProjectMember;