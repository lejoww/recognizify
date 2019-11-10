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
                <a class="dropdown-item" href="#"><router-link class="text-dark" to="/select">Mis proyectos</router-link></a>
                <a class="dropdown-item" href="#"><router-link class="text-dark" to="/notifications" id="invitationsLink">Notificaciones</router-link></a>
                <a class="dropdown-item" href="#"><router-link class="text-dark" to="/account/configuration">Configuración</router-link></a>
                <a class="dropdown-item text-dark" href="#">Sobre Recognizify</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="#" @click="closeSession"><strong>Cerrar sesión</strong></a>
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