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
            var state = false;
            membership.forEach(member => {
                if (member.id == firebase.auth().currentUser.uid){
                    state = true
                }
            })

            setInterval(() => {
                if (state == false) {
                    this.$router.push('/error/project')
                }
            }, 500)
        });
    }
}

export default CheckProjectMember;