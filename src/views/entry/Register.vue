<template>
    <div id="register">
    <div class="alert alert-warning" role="alert">
        La app esta cerrada temporalmente por mantenimiento. Próximamente volverá a ser abierta. Gracias por hacer parte de Recognizify
    </div>
    <div class="form-images">
        <img src="@/assets/ilustrations/rocket.svg" alt="Personas hablando y admirando estadísticas">
    </div>
        <div class="form-container">
            <img src="@/assets/logo-common-cutted.png" alt="Logotipo de Recognizify" width="148px">
            <h4 style="margin-top: 1em">Crea una cuenta y comienza a progresar.</h4>
                <div class="form-group">
                    <label>Un correo electrónico</label>
                    <input type="email" class="form-control form-control-lg form-control-login" v-model="email" aria-describedby="emailHelp" placeholder="alguien@recognizify.com" spellcheck="false" value="test@recognizify.com" disabled>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control form-control-lg form-control-login" v-model="password" placeholder="Tu clave personal e intransferible" value="test123" disabled>
                </div>
                <div class="form-group betacheckbox">
                    <label class="betaswitch">
                        <input type="checkbox" id="checkbox" disabled>
                        <div class="slider round"></div>
                    </label>
                    <p>Deseas participar en el programa BETA de Recognizify para darnos retroalimentación de la aplicación.</p>
                </div>
            <button class="btn btn-danger btn-login">
                <router-link class="text-white" to="/">
                    Cancelar
                </router-link>
            </button>
            <button class="btn btn-success btn-login" id="dynamicButton" style="margin-left: .7em" @click="createAccountWithEmailAndPassword" disabled>Crear cuenta</button>
            <!-- <button class="btn btn-warning btn-login" v-on:click="signInWithEmailAndPasswordofTest">Iniciar con cuenta de prueba</button> -->
        </div>

        <div class="alert alert-warning" id="loginAlert" role="alert">
            Parece que no ingresaste bien los datos. Vuelve a intentarlo.
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/login.css'

    export default {
        data(){
            return {
                email: '',
                password: ''
            }
        },
        created: function(){
            this.checkbox()
        },
        methods: {
            createAccountWithEmailAndPassword: function(){
                let checkbox = document.getElementById('checkbox').checked
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        firebase.auth().onAuthStateChanged(user => {
                            if (user.emailVerified){
                                firebase.firestore().collection('users').doc(user.uid).get()
                                    .then(res => {
                                        if (res.data() == null | res.data() == undefined){
                                            this.$router.push('/register/info')
                                        } else {
                                            this.$router.push('/dashboard/select')
                                        }
                                    })
                            } else {
                                this.$router.push('/verify')
                            }
                        })
                    })
                    .catch(err => {
                        let $loginAlert = document.querySelector('#loginAlert')
                        $loginAlert.style.display = 'block'
                        loginButton.innerHTML = 'Iniciar sesión'
                    })
            }
        }
    }

</script>