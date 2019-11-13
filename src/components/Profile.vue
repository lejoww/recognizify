<template>
    <div class="sidebarProfile">
        <div class="profileWrapper">
            <div class="profileData">
                <div class="profileContent">
                    <img class="profilePicture" v-bind:src="urlPhotoPath">
                </div>
                <div class="profileIdentity">
                    <span class="profileName text-white" v-text="currentAccount.name"></span>
                    <span class="profileUsername" v-text="'@' + currentAccount.username"></span>
                </div>
            </div>
            <div class="profileOptions">
                <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#settings"/>
                </svg>
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
                    name: '',
                    username: ''
                }
            }
        },
        mounted: function(){
            this.setProfilePicture()
            this.setIdentityData()
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
                        this.currentAccount.name = data.data()['name']
                        this.currentAccount.username = data.data()['user']
                    })
                })
            },
            closeSession: function(){
                firebase.auth().signOut()
                window.location = '/'
            }
        }
    }
</script>