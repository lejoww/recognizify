<template>
    <div class="view-content">
        <div id="welcomeAccountComplete" class="account-complete">
            <img src="@/assets/logo-common-cutted.svg" alt="Logotipo de Recognizify" width="148px"><br>
            <h3 style="width: 100%">Solo falta que completes algunos datos</h3>
            <p style="width: 100%">Comenzarás a hacer de tu proyecto un éxito, queremos conocerte.</p><br><br>
<!-- 
            <div class="account-image">
                <div class="photo-container">
                    <img v-bind:src="urlPhotoPath" class="photo-profile">    
                </div>
            </div> -->

            <div class="form-content">
                <div class="form-row">
                    <label for="file">Tu foto de perfil (selecciona un archivo)</label>
                    <input class="form-control-file" type="file" v-on:change="checkUrlPath" id="file">
                </div><br>
                <div class="form-row">
                    <div class="form-group">
                        <label>¿Cómo quieres que te llamemos?</label>
                        <input type="text" v-model="username" class="form-control" placeholder="Ejm. Pepito Gonzáles" spellcheck="false" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Descríbete tal y como eres</label>
                        <input type="text" v-model="bio" class="form-control" placeholder="Autentico" spellcheck="false" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Escoge un nombre de usuario</label>
                        <input type="text" v-model="user" class="form-control" value="@" spellcheck="false" autocomplete="off">
                    </div>
                </div>
            </div>
            <button @click="saveInfoOnDatabase" class="btn btn-secondary" style="margin-bottom: 2rem">Continuar</button>
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
        mounted: function (){
            firebase.auth().onAuthStateChanged(user => {
                !user ? this.$router.push('/') : console.log('Complete los datos')
            })
        },
        methods: {
            checkUrlPath(e) {
                firebase.auth().onAuthStateChanged(user => {
                    if (user){
                        let profilePictureObtained = e.target.files[0]
                        let profilePhotoStorage = firebase.storage().ref(`profile_photos/${user.uid}`)
                        
                        profilePhotoStorage.put(profilePictureObtained)
                            .then(() => console.log('Foto subida correctamente'))
                            .catch((err) => console.log(`No se ha podido subir la foto de perfil por ${err}`))
                    }
                })
            },

            saveInfoOnDatabase() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user){
                        firebase.firestore().collection('users').doc(user.uid).set({
                            name: this.username,
                            bio: this.bio,
                            user: this.user,
                            betaAccess: localStorage.betaAccess
                        })
                            .then(() => this.$router.push('/dashboard/select'))
                            .catch(err => console.error(err))
                    }
                })
            }
        }
    }

</script>