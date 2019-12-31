<template>
    <div class="publicProfileLayout">
        <div class="alert alert-primary successAlert" id="successAlert" role="alert">
            La invitación ha sido correctamente enviada
        </div>
        <SendInvitationModal :profileId="user.id"/>
        <div class="publicProfileBrand">
            <img src="@/assets/logo-common-cutted.png" width="189px">
        </div>
        
        <div class="publicProfileBase">
            <div class="publicProfileContent">
                <div class="profilePhotoImage">
                    <img :src="user.url">
                </div>
                <div class="profileDescription">
                    <span class="publicProfileInd">Perfil de usuario</span>
                    <h1 style="letter-spacing: -1px">{{user.name}}</h1>
                    <span class="profileUsername">@{{user.user}}</span>

                    <div class="profileBiography">
                        <span style="font-weight: 700">Biografía</span>
                        <p>{{user.bio}}</p>
                    </div>
                    
                    <br>
                    <button v-if="invitationIsAvailable" class="btn btn-primary" data-toggle="modal" data-target="#invitationModal">Invitar a un proyecto</button>
                </div>
            </div>
            <div class="publicProfileContentNotAvailable">
                <img src="@/assets/ilustrations/nothing.png" class="publicProfileContentNotAvailableImage">
                <h3 style="color: #9e95aa;">No falta mucho para que conozcas más a esta persona</h3>
                <p style="color: #9e95aa;">Aquí en unos días, aparecerán datos interesantes de esta persona.</p>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    import '@/assets/css/publicProfile.css'
    import '@/assets/css/main.css'
    import profilePhotoUser from '@/assets/ilustrations/profile.png'

    import SendInvitationModal from '@/components/modals/SendInvitation.vue'

    export default {
        data: function() {
            return {
                user: {
                    name: '',
                    user: '',
                    bio: '',
                    id: ''
                },
                invitationIsAvailable: false
            }
        },
        components: {
            SendInvitationModal
        },
        created(){
            this.getUserData()
        },
        methods: {
            getUserData: function(){
                firebase.firestore()
                .collection('users')
                .where("user", "==", this.$route.params.username)
                .get()
                .then(user => {
                    if (!user.empty){
                        firebase.storage().ref(`/profile_photos/${user.docs[0].id}`)
                        .getDownloadURL()
                        .then(url => {
                            this.user = {
                                name: user.docs[0].data()['name'],
                                user: user.docs[0].data()['user'],
                                bio: user.docs[0].data()['bio'],
                                url: url,
                                id: user.docs[0].id
                            }

                            this.checkIfInvitationIsAvailable()
                        })
                        .catch(() => {
                            this.user = {
                                name: user.docs[0].data()['name'],
                                user: user.docs[0].data()['user'],
                                bio: user.docs[0].data()['bio'],
                                url: profilePhotoUser,
                                id: user.docs[0].id
                            }

                            this.checkIfInvitationIsAvailable()
                        })
                    }
                })
            },
            checkIfInvitationIsAvailable: function(){
                firebase.auth().onAuthStateChanged((user) => {
                    if (this.user.id == user.uid) {
                        this.invitationIsAvailable = false
                    } else {
                        this.invitationIsAvailable = true
                    }
                })
            }
        }
    }

</script>