<template>
    <div id="notifications">
       <LateralPanel/>

       <div class="dashboardContent">
           <Profile/>

           <div class="notificationsContent" id="notificationsContent">
               
           </div>
       </div>
    </div>
</template>
<script>
    
    import firebase from 'firebase'

    import LateralPanel from '@/components/LateralPanel.vue'
    import Profile from '@/components/Profile.vue'

    import '@/assets/css/feed.css'

    export default {
        components: {
            LateralPanel,
            Profile
        },
        mounted: function() {
            this.getInvitations()
        },
        methods: {
            getInvitations: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore().collection('users').doc(user.uid).collection('invitations').get()
                        .then(invitations => {
                            let notificationsContent = document.getElementById('notificationsContent')
                            invitations.forEach(invitation => {
                                notificationsContent.insertAdjacentHTML('beforeend', `
                                    <div class="card w-75">
                                        <div class="card-body">
                                            <h5 class="card-title">Te acaban de invitar a ${invitation.data()['pname']}</h5>
                                            <p class="card-text">Esto es una solicitud hacia el proyecto de alguien que probablemente te conoce. Tu decides aceptarla o rechazarla</p>
                                            <a href="/account/${invitation.id}/accept" class="btn btn-warning">Aceptar</a>
                                        </div>
                                    </div>
                                `)
                            })
                        })
                })
            },
            acceptInvitation: function(){
                console.log('Hola mundo')
            }
        }
    }

</script>