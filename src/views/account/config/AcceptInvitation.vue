<template>
    <div id="invitation">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    export default {
        mounted: function() {
            firebase.auth().onAuthStateChanged(user => {
                let projectCode = this.$router.history.current.params['projectId']
                firebase.firestore().collection('users').doc(user.uid).get()
                .then(res => {
                    firebase.firestore().collection('projects').doc(projectCode).collection('members').doc(user.uid).set({
                        name: res.data()['name'],
                        user: res.data()['user'],
                        member: true,
                        role: ''
                    })
                    .then(() => {
                        this.$router.push('/select')
                    })
                })
            })
        }
    }    

</script>