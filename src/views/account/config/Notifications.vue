<template>
    <div id="notifications">
        <div class="screenContent">
            <Profile/>
            
            <div class="dashboardContent">
                <br>
                <div class="notificationsContent" id="notificationsContent">
                    <a href="javascript: history.go(-1)" style="display: flex; margin-bottom: 1rem">
                        <svg class="feather-dark">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"/>
                        </svg>
                        <h6>Volver atrás</h6>
                    </a>

                    <h2>Notificaciones</h2>
                    <p>Puede haber cosas aquí que no salgan muy bien. Recuerda que estamos en versión BETA.</p>
               
                </div>
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
                            if(invitations.docs.length >= 1){
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
                            } else {
                                notificationsContent.insertAdjacentHTML('beforeend', `
                                    <p>Aún no tienes invitaciones a otros proyectos</p>
                                `)
                            }
                        })
                })
            },
            acceptInvitation: function(){
                console.log('Hola mundo')
            }
        }
    }

</script>