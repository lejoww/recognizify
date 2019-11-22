<template>
    <div class="headerProfile">
        <div class="profileWrapper">
            <div class="profileData">
                <div class="profileContent">
                    <img class="profilePicture" v-bind:src="urlPhotoPath">
                </div>
                <div class="profileIdentity">
                    <span class="profileName text-white">Hola, {{this.currentAccount.nickname}}</span>
                    <!-- <span class="profileUsername">{{'@' + currentAccount.username}}</span> -->
                </div>
            </div>
            <div class="profileOptions">
                <router-link to="/account/configuration">
                    <svg class="feather-menu">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#settings"/>
                    </svg>
                </router-link>
                <a href="#" @click="closeSession" style="margin-left: 7px" data-toggle="tooltip" data-placement="top" title="Cerrar sesión">
                    <svg class="feather-red">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#log-out"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase';
    import '@/assets/css/profile.css'
    import '@/assets/css/mediaqueries.css'

    export default {
        data: function(){
            return {   
                urlPhotoPath: '',
                currentAccount: {
                    nickname: '',
                    username: ''
                }
            }
        },
        created: function(){
            this.setProfilePicture()
            this.setIdentityData()
            this.checkExistentIdentity()
        },
        methods: {
            setProfilePicture: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.storage().ref(`profile_photos/${user.uid}`).getDownloadURL()
                    .then(path => this.urlPhotoPath = path)
                })
            },
            setIdentityData: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore().collection('users').doc(user.uid).get()
                    .then(data => {
                        this.currentAccount.nickname = data.data()['nickname']
                        this.currentAccount.username = data.data()['user']
                    })
                })
            },
            checkExistentIdentity: function(){
                if (this.currentAccount.nickname == '' ||
                    this.currentAccount.nickname == undefined ||
                    this.currentAccount.nickname == null ||

                    this.currentAccount.username == '' ||
                    this.currentAccount.username == undefined ||
                    this.currentAccount.username == null
                ){
                    this.$route.push('/register/info')
                }
            },
            closeSession: function(){
                firebase.auth().signOut()
                window.location = '/'
            }
        }
    }
</script>