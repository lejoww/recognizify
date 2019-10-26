<template>
    <div id="configuration">

        <div class="screenContent">
            <Profile/>
            <div class="dashboardContent">
                <!-- <div class="alert alert-secondary" role="alert" style="display: none" id="alert-success">
                    Bien! Tus datos han sido correctamente cambiados.
                </div> -->
                <div class="configurationView">
                    <a href="javascript: history.go(-1)" style="display: flex; margin-bottom: 1rem">
                        <svg class="feather-dark">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left"/>
                        </svg>
                        <h6>Volver atrás</h6>
                    </a>

                    <h2>Configuración</h2><br>

                    <div class="row tabSelector">
                        <div class="tabsLinks">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link" id="v-pills-general-tab" data-toggle="pill" href="#v-pills-general" role="tab" aria-controls="v-pills-general" aria-selected="true">General</a>
                                <a class="nav-link active" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-home" aria-selected="false">Cuenta</a>
                                <a class="nav-link" id="v-pills-security-tab" data-toggle="pill" href="#v-pills-security" role="tab" aria-controls="v-pills-security" aria-selected="false">Seguridad</a>
                            </div>
                        </div>
                        <div clas="tabsContent">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab">
                                    <div class="tabInputControls">
                                        <div style="display: flex; flex-direction: column; align-items: center">
                                            <img src="@/assets/ilustrations/nothing.png" width="400px">
                                            <h3 style="color: #9e95aa;">Seguimos trabajando en este apartado</h3>
                                            <p style="color: #9e95aa;">Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.</p>
                                        </div>
                                    </div>
                                </div>
                            <div class="tab-pane fade show active" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">
                                <div class="tabInputControls">

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
                            </div>
                            <div class="tab-pane fade" id="v-pills-security" role="tabpanel" aria-labelledby="v-pills-security-tab">
                                <div style="display: flex; flex-direction: column; align-items: center">
                                    <img src="@/assets/ilustrations/nothing.png" width="400px">
                                    <h3 style="color: #9e95aa;">Aún no tenemos opciones de seguridad</h3>
                                    <p style="color: #9e95aa;">Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.</p>
                                </div>
                            </div>
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

    import LateralPanel from '@/components/LateralPanel.vue'
    import Profile from '@/components/Profile.vue'
    import UserNavbar from '@/components/UserNavbar.vue'

    import '@/assets/css/feed.css'

    export default {
        components: {
            LateralPanel,
            Profile,
            UserNavbar
        },
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
                        user: `@${this.user}`
                    }).then(() => {
                        let alert = document.getElementById('alert-success')
                        alert.style.display = 'block'
                    })
                })
            }
        }
    }

</script>