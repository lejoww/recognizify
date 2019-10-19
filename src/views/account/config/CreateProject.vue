<template>
    <div id="create-form">
        <UserNavbar style="display: none"/>
        <div class="content-flex">
            <a href="javascript: history.go(-1)"></a>
            <div class="bg-image">
                <div>
                    <img src="@/assets/ilustrations/office-work.png"><br>
                    <h3 style="color: #99A0C4">Es hora de ser el mejor.</h3>
                    <span style="color: #99A0C4">Asegúrate de escoger bien la información que pondrás aquí, de eso depende la ayuda que te podamos dar.</span>
                </div>
            </div>
            <div class="info-inputs">
                <h2>Crea un nuevo proyecto.</h2>
                <h5>Puedes comenzar por aquí</h5><br>
                <div class="form-container">
                    <div class="form-group">
                        <label>Nombre completo del proyecto</label>
                        <input type="text" v-model="largeName" class="form-control form-control-lg" placeholder="Un nombre largo para el proyecto">
                    </div>
                    <div class="form-group">
                        <label>Apodo para el proyecto</label>
                        <input type="text" v-model="shortName" class="form-control form-control-lg" placeholder="Un nombre más corto">
                    </div>
                    <div class="form-group">
                        <label>¿De qué se trata el proyecto?</label>
                        <textarea class="form-control form-textarea form-control-lg" v-model="description" rows="7"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Agrega una foto que represente el proyecto</label>
                        <input type="file" class="form-control-file" id="file" @change="uploadImageToServer">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" @click="createProjectOnDatabase">Listo, crear proyecto</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">Vector de Fondo creado por freepik - www.freepik.es</a> -->
</template>
<script>

    import UserNavbar from '@/components/UserNavbar.vue'
    import firebase from 'firebase'
    import uuidv1 from 'uuid/v1'
    
    import '@/assets/css/main.css'
    import '@/assets/css/mediaqueries.css'
    import '@/assets/scripts/checkActiveSession.js'
    export default {
        data() {
            return {
                largeName: '',
                shortName: '',
                description: '',
                projectuid: ''
            }
        },
        components: {
            UserNavbar
        },
        methods: {
            createProjectOnDatabase: function(){
                firebase.auth().onAuthStateChanged(user => {
                    if(this.projectuid == undefined || this.projectuid == ''){
                        this.projectuid = uuidv1()
                    }

                    firebase.firestore().collection('projects').doc(this.projectuid)
                    .set({
                        name: this.largeName,
                        shortName: this.shortName,
                        description: this.description,
                        admin: [ user.uid ]
                    })
                    .then(() => window.location = '/feed')
                    .catch(err => console.log(`Has tenido un error llamado ${err.name}`))
                })
            },
            uploadImageToServer: function(e, code){
                this.projectuid = uuidv1()
                let newImage = e.target.files[0]
                
                firebase.storage().ref(`projects/${this.projectuid}/project_photo`).put(newImage)
            }
        }
    }

</script>
