<template>
    <div class="dropdown">
        <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    
            <div class="current-profile">
                <div class="profile-content">
                    <img v-bind:src="urlPhotoPath">
                </div>
                <!-- <strong v-text="username"></strong> -->
            </div>
        </a>
        <div class="profileMenu">
            <div class="dropdown-menu profileMenuList" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Mi cuenta</a>
                <a class="dropdown-item" href="#">Sobre Recognizify</a>
                <a class="dropdown-item" href="#">Configuración</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="closeSession" style="color: #FF524C">Cerrar sesión</a>
        </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase';
    import '@/assets/css/mediaqueries.css'

    export default {
        data(){
            return {   
                urlPhotoPath: '',
            }
        },
        mounted: function(){
            firebase.auth().onAuthStateChanged(user => {
                firebase.storage().ref(`profile_photos/${user.uid}`).getDownloadURL()
                    .then(path => this.urlPhotoPath = path)
            })
        },
        methods: {
            closeSession: function(){
                firebase.auth().signOut()
                window.location = '/'
            }
        }
    }
</script>