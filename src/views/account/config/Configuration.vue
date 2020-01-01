<template>
    <div id="configuration" style="overflow-y: scroll">
            <div class="dashboardContent">
                    <div class="alert alert-secondary" role="alert" style="display: none" id="alert-success">
                        Bien! Tus datos han sido correctamente cambiados.
                    </div>
                    <div class="configurationView">
                        <div class="configurationAlignment">
                            <a href="javascript: history.go(-1)" style="display: flex; margin-bottom: 1rem">
                                <svg class="feather-dark">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"/>
                                </svg>
                                <h6>Volver atrás</h6>
                            </a>

                            <h2>Configuración</h2><br>

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">General</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Cuenta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="security-tab" data-toggle="tab" href="#security" role="tab" aria-controls="security" aria-selected="false">Seguridad</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <div style="display: flex; flex-direction: column; align-items: center">
                                        <img src="@/assets/ilustrations/nothing.png" width="400px">
                                        <h3 style="color: #9e95aa;">Seguimos trabajando en este apartado</h3>
                                        <p style="color: #9e95aa;">Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab"><br>
                                    <h4>Cambiar datos de tu cuenta</h4>
                                    <p>Escribe cómo eres. Recuerda que si no completas todos los datos no podrás actualizar tu información.</p><br>
                                    <div class="changeForm">
                                        <div class="form-group">
                                            <label for="name">Tu nombre completo</label>
                                            <input type="text" class="form-control" id="name" placeholder="Como deseas que te llamemos" spellcheck="false" autocomplete="off" v-model="name">
                                        </div>
                                        <div class="form-group">
                                            <label for="bio">Tu descripción</label>
                                            <input type="text" class="form-control" id="bio" placeholder="Descríbete como eres" spellcheck="false" autocomplete="off" v-model="description">
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Escribe un nombre de usuario" aria-label="Username" aria-describedby="basic-addon1" v-model="user">
                                        </div>
                                        <button class="btn btn-secondary" @click="saveNewDataConfig">Guardar cambios</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                                    <div style="display: flex; flex-direction: column; align-items: center">
                                        <img src="@/assets/ilustrations/nothing.png" width="400px">
                                        <h3 style="color: #9e95aa;">Seguimos trabajando en este apartado</h3>
                                        <p style="color: #9e95aa;">Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/feed.css'

    export default {
        data(){
            return {
                name: '',
                description: '',
                user: ''
            }
        },
        methods: {
            saveNewDataConfig: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore().collection('users').doc(user.uid).update({
                        name: this.name,
                        bio: this.description,
                        user: this.user
                    }).then(() => {
                        let alert = document.getElementById('alert-success')
                        alert.style.display = 'block'
                    })
                })
            }
        }
    }

</script>