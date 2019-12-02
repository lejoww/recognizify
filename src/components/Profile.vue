<template>
    <div class="headerProfile">
        <div class="profileWrapper">
            <div class="profileData">
                <div class="profileContent">
                    <img class="profilePicture" id="profilePicture" src="@/assets/ilustrations/profile.png">
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

    export default {
        data: function(){
            return {
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
                    .then(path => {
                        document.getElementById('profilePicture').setAttribute('src', path)
                    })
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
                setTimeout(() => {
                    if (this.currentAccount.nickname == '' ||
                        this.currentAccount.nickname == undefined ||
                        this.currentAccount.nickname == null
                    ){
                        this.$router.push('/register/nickname')
                    }
                    if(
                        this.currentAccount.username == '' ||
                        this.currentAccount.username == undefined ||
                        this.currentAccount.username == null
                    ){
                        this.$router.push('/register/info')
                    }
                }, 4000)
            },
            closeSession: function(){
                firebase.auth().signOut()
                window.location = '/'
            }
        }
    }
</script>