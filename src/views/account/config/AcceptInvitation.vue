<template>
    <div id="invitation">
        <div class="text-left">
            <div class="spinner-grow text-primary" role="status" style="width: 3rem; height: 3rem;">
                <span class="sr-only">Loading...</span>
            </div>
        </div><br>
        <h1>Procesando tu invitación...</h1>
    </div>
</template>
<style scoped>
    #invitation {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }
</style>
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
                    }).then(() => {
                        firebase.firestore().collection('users').doc(user.uid).collection('invitations').doc(projectCode).delete()
                            .then(() => {
                                this.$router.push('/select')
                            })   
                    })
                })
            })
        }
    }    

</script>