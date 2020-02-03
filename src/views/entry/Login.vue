<template>
    <div>
        <img class="loginSpaceBackground" src="@/assets/ilustrations/space.png">
        <div class="instructCopy">
            <span class="text-gray">Las imagenes en la aplicación no son de nuestra autoría. Si deseas saber más, ingresa a <router-link to="/credits" class="text-dark">nuestro sitio de referencias.</router-link></span>
        </div>
        <div id="login">
            <div class="form-container">
                <img src="@/assets/logo-common-cutted.png" alt="Logotipo de Recognizify" width="148px">
                <h1 class="loginTitle">Conéctate de nuevo.</h1>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-lg form-control-login" v-on:keyup.enter="signInWithEmailAndPassword" v-model="email" aria-describedby="emailHelp" placeholder="Correo electrónico" spellcheck="false">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control form-control-lg form-control-login" v-on:keyup.enter="signInWithEmailAndPassword" v-model="password" placeholder="Tu contraseña personal">
                    </div>
                <button class="btn btn-success btn-login" id="dynamicButton" v-on:click="signInWithEmailAndPassword">Iniciar sesión</button>
                <button class="btn btn-warning btn-login" style="margin-left: .7em">
                    <router-link to="/signup" class="text-white">
                        Registrarse
                    </router-link>
                </button>
                <div style="margin-top: 12px">
                    <span style="font-size: 13px">También puedes
                        <a href="/forgot" class="forgot-password">restablecer tu contraseña</a>
                    </span>
                </div>
            </div>

            <div class="alert alert-danger" id="loginAlert" role="alert">
                Parece que no ingresaste bien los datos. Vuelve a intentarlo.
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/login.css'

    import BannerNotice from '@/components/models/BannerNotice.vue'

    export default {
        name: 'login_entry',
        data (){
            return {
                email: '',
                password: '',
                account: true
            }
        },
        components: {
            BannerNotice
        },
        created: function (){
            firebase.auth().onAuthStateChanged(user => {
                if (user) { window.location = '/dashboard/select' }
            })
        },
        methods: {
            signInWithEmailAndPassword: function(){
                var loginButton = document.getElementById('dynamicButton')
                loginButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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
                    setTimeout(() => { 
                        $loginAlert.style.display = 'none' 
                    }, 3000)
                    loginButton.innerHTML = 'Iniciar sesión'
                })
            }
        }
    }

    // <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">Vector de Fondo creado por pikisuperstar - www.freepik.es</a>

</script>