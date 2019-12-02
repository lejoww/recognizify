<template>
    <div id="notifications">
            <div class="dashboardContent">
                <div class="notificationsContent" id="notificationsContent">
                    <a href="javascript: history.go(-1)" style="display: flex; margin-bottom: 1rem">
                        <svg class="feather-dark">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"/>
                        </svg>
                        <span>Volver atrás</span>
                    </a>

                    <h2>Notificaciones</h2>
                    <p>Próximamente podrás ver quién de qué se trata el proyecto al que te invitaron, por el momento esta función no esta disponible.</p>
                    <Invitation :key="invitation" v-for="invitation in invitationsList" :name="invitation.name" :id="invitation.id"/>

                    <h6 v-if="invitationsList.length == 0">
                        <svg class="feather-dark">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#alert-circle" />
                        </svg>
                        No tienes invitaciones por el momento.
                    </h6>
                </div>
            </div>
    </div>
</template>
<script>
    
    import firebase from 'firebase'
    import Invitation from '@/components/models/Invitation.vue'

    import '@/assets/css/feed.css'

    export default {
        data: function(){
            return {
                invitationsList: []
            }
        },
        components: {
            Invitation
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
                                this.invitationsList.push({
                                    name: invitation.data()['pname'],
                                    id: invitation.id
                                })
                            })
                        })
                })
            }
        }
    }

</script>