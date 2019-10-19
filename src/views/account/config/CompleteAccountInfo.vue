<template>
    <div class="view-content">
        <div id="welcomeAccountComplete" class="account-complete">
            <h1 class="welcome-title">Comenzarás a hacer de tu proyecto un éxito</h1>
            <strong>Solo falta que completes algunos datos</strong><br><br>

            <div class="photo-container">
                <img v-bind:src="urlPhotoPath" class="photo-profile">    
            </div><br>
            <input type="file" v-on:change="checkUrlPath" id="file"><br>
            <div class="form-content">
                <div class="form-row">
                    <div class="form-group" style="margin-right: 12px">
                        <label>¿Cómo quieres que te llamemos?</label>
                        <input type="text" v-model="username" class="form-control" placeholder="Ejm. Pepito Gonzáles">
                    </div>
                    <div class="form-group">
                        <label>Descríbete tal y como eres</label>
                        <input type="text" v-model="bio" class="form-control" placeholder="Autentico">
                    </div>
                    <div class="form-group">
                        <label>Escoge un nombre de usuario</label>
                        <input type="text" v-model="user" class="form-control" value="@">
                    </div>
                </div>
            </div>
            <button @click="saveInfoOnDatabase" class="btn btn-primary">Continuar</button>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/login.css'
    import firebase from 'firebase'

    import { setInterval } from 'timers';
    export default {
        data(){
            return {
                username: '',
                urlPhotoPath: '',
                bio: '', 
                user:''
            }
        },
        mounted: function (){},
        methods: {
            checkUrlPath(e) {
                firebase.auth().onAuthStateChanged(user => {
                    if (!user){
                        console.log('El usuario no existe')
                    } else {
                        let profilePictureObtained = e.target.files[0]
                        let profilePhotoStorage = firebase.storage().ref(`profile_photos/${user.uid}`)
                        
                        profilePhotoStorage.put(profilePictureObtained)
                            .then(() => this.setPhotoProfileSelectedOnField(user.uid))
                            .catch((err) => console.log(`No se ha podido subir la foto de perfil por ${err}`))
                    }
                })
            },

            setPhotoProfileSelectedOnField(uidCode) {
                let url = firebase.storage().ref(`profile_photos/${uidCode}`).getDownloadURL()
                    .then(picture => this.urlPhotoPath = picture)
                    .catch(err => console.log(err))
            },

            saveInfoOnDatabase() {
                firebase.auth().onAuthStateChanged(user => {
                    if (!user){}
                    else {
                        firebase.firestore().collection('users').doc(user.uid).set({
                            name: this.username,
                            bio: this.bio,
                            user: this.user
                        })
                            .then(() => window.location = '/feed')
                            .catch(err => console.log('Ha ocurrido un error'))
                    }
                })
            }
        }
    }

</script>