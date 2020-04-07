import Vue from 'vue'
import firebase from 'firebase'

export const checkAdmin = {
    methods: {
        checkAdminProperties() {
            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore()
                .collection('users')
                .doc(user.uid)
                .get()
                .then((user) => {
                    let admin = user.data()['roles']['admin'];
                    if (admin != true) {
                        this.$router.push('/dashboard/select')
                    }
                })
                .catch(() => this.$router.push('/dashboard/select'))
            })
        }
    }
}