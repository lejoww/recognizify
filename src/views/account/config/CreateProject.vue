<template>
    <div class="dashboardContent">
        <div class="formLayout">
            <div class="projectForm">
                <div class="robotDialog">
                    <img src="@/assets/ilustrations/robot-wink.png" width="78px">
                    <div class="dialogFlow">
                        Fabuloso! Aquí es donde decides ejecutar tu creatividad, no solo tu proyecto, 
                        sino también tu capacidad de emprender lo que te imaginas. Responde con detalle, 
                        para que podamos ayudarte más. Bienvenido al camino de crear.
                    </div>
                </div>
                <h2 class="projectFormTitle">Crea un nuevo proyecto.</h2>
                <h6 class="projectFormSubtitle">Puedes comenzar por aquí</h6><br>
                    <div class="form-container">
                        <!-- <div class="form-group">
                            <label>¿Qué es el proyecto?</label> -->

                            <!-- <div class="categories">
                                <div class="categoryCard" @click="this.type = 'service'">
                                    <div class="cardIcon">
                                        <svg class="feather-blue">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#briefcase" />
                                        </svg>
                                    </div>
                                    <div class="cardHeader">
                                        <span class="header">Servicio</span>
                                    </div>
                                </div>

                                <div class="categoryCard" @click="this.type = 'product'">
                                    <div class="cardIcon">
                                        <svg class="feather-blue">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#package" />
                                        </svg>
                                    </div>
                                    <div class="cardHeader">
                                        <span class="header">Producto</span>
                                    </div>
                                </div>
                            
                                <div class="categoryCard" @click="this.type = 'project'">
                                    <div class="cardIcon">
                                        <svg class="feather-blue">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#star" />
                                        </svg>
                                    </div>
                                    <div class="cardHeader">
                                        <span class="header">Proyecto</span>
                                    </div>
                                </div>

                                <div class="categoryCard" @click="this.type = 'invent'">
                                    <div class="cardIcon">
                                        <svg class="feather-blue">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#tool" />
                                        </svg>
                                    </div>
                                    <div class="cardHeader">
                                        <span class="header">Invento</span>
                                    </div>
                                </div>

                                <div class="categoryCard" @click="this.type = 'task'">
                                    <div class="cardIcon">
                                        <svg class="feather-blue">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#zap" />
                                        </svg>
                                    </div>
                                    <div class="cardHeader">
                                        <span class="header">Tarea</span>
                                    </div>
                                </div>

                            </div> -->
                            
                        <!-- </div> -->
                        <div class="form-group">
                            <label>Nombre completo del proyecto</label>
                            <input type="text" v-model="largeName" class="form-control" placeholder="El nombre real y legítimo para el proyecto">
                        </div>
                        <div class="form-group">
                            <label>Apodo para el proyecto</label>
                            <input type="text" v-model="shortName" class="form-control" placeholder="Un nombre más corto y entendible" maxlength="17">
                        </div>
                        <div class="form-group">
                            <label>¿De qué se trata el proyecto?</label>
                            <input type="text" class="form-control" v-model="description" placeholder="Trata de ser específico y claro"/>
                        </div>
                        <div class="form-group">
                            <label>Agrega una foto que represente el proyecto</label>
                            <input type="file" class="form-control-file" id="file" @change="uploadImageToServer">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success" @click="createProjectOnDatabase">Comenzar la aventura</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

    import firebase from 'firebase'
    import uuidv1 from 'uuid/v1'
    
    import '@/assets/css/feed.css'
    import '@/assets/scripts/checkActiveSession.js'

    export default {
        data() {
            return {
                largeName: '',
                shortName: '',
                description: '',
                projectuid: '',
                type: ''
            }
        },
        methods: {
            createProjectOnDatabase: function(){
                firebase.auth().onAuthStateChanged(user => {
                    if(this.projectuid == undefined || this.projectuid == ''){
                        this.projectuid = uuidv1()
                    }

                    firebase.firestore()
                    .collection('projects')
                    .doc(this.projectuid)
                    .set({
                        name: this.largeName,
                        shortName: this.shortName,
                        description: this.description,
                        admin: [ user.uid ] 
                    })
                    .then(() => {
                        firebase.firestore()
                        .collection('users')
                        .doc(user.uid)
                        .get()
                        .then(userdata => {
                            firebase.firestore()
                            .collection('projects')
                            .doc(this.projectuid)
                            .collection('members')
                            .doc(user.uid)
                            .set({
                                name: userdata.data()['name'],
                                user: userdata.data()['user'],
                                member: true,
                                role: ''
                            })
                            .then(() => this.$router.push('/dashboard/select'))
                            .catch(err => console.error(err))
                        })
                        .catch(err => console.error(err))

                    })
                    .catch(err => console.error(err))
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
