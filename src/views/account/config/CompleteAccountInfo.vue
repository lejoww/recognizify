<template>
    <div class="view-content">
        <div id="welcomeAccountComplete" class="account-complete">
            <img src="@/assets/logo-common-cutted.svg" alt="Logotipo de Recognizify" width="148px"><br>

            <div class="form-content complete-account-form">
                <h2 style="width: 100%; letter-spacing: -0.7px">Ahora solo falta que completes algunos datos.</h2><br>
                <div class="form-row">
                    <label for="file">Tu foto de perfil (selecciona un archivo)</label>
                    <input class="form-control-file" type="file" v-on:change="checkUrlPath" id="file">
                </div><br>
                    <div class="form-group">
                        <label>¿Cuál es tu nombre?</label>
                        <input type="text" v-model="username" class="form-control" placeholder="Ejm. Pepito Gonzáles" spellcheck="false" autocomplete="off" required>
                    </div>
                    <div class="form-group">
                        <label>Descríbete tal y como eres</label>
                        <input type="text" v-model="bio" class="form-control" placeholder="Autentico" spellcheck="false" autocomplete="off" required>
                    </div>
                    <div class="form-group">
                        <label>Escoge un nombre de usuario</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" v-model="user" placeholder="Escribe un nombre de usuario" spellcheck="false" autocomplete="off" required>
                        </div>
                    </div>
                <button @click="saveInfoOnDatabase" class="btn btn-warning btn-save" style="margin-bottom: 2rem">Continuar</button>
            </div>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/login.css'
    import firebase from 'firebase'

    import { setInterval } from 'timers';
    export default {
        data (){
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
                    firebase.firestore().collection('users').doc(user.uid).set({
                        name: this.normalizeString(this.username),
                        bio: this.bio,
                        user: this.user,
                        roles: {
                            admin: false,
                            creator: false,
                            user: true
                        },
                        visibilityMode: 'public'
                        // betaAccess: localStorage.betaAccess
                    })
                    .then(() => {
                        this.$router.push('/dashboard/select')
                    })
                    .catch((err) => console.log(err))
                })
            },
            normalizeString: function() {
                const from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
                const to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
                let mapping = {};
                
                for(let i = 0, j = from.length; i < j; i++)
                    mapping[ from.charAt( i ) ] = to.charAt( i );
                
                // return function() {
                    let ret = [];
                    for(let i = 0, j = this.username.length; i < j; i++) {
                        var c = this.username.charAt(i);
                        if(mapping.hasOwnProperty(this.username.charAt( i )))
                            ret.push(mapping[ c ]);
                        else
                            ret.push(c);
                    }      
                    return ret.join('');
                // }
            }
        }
    }

</script>