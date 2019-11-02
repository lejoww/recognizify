<template>
    <div id="login">

        <div class="form-images">
            <img src="@/assets/ilustrations/leader-people.png" alt="Personas hablando y admirando estadísticas">
        </div>
        <div class="form-container">
            <img src="@/assets/logo-common-cutted.png" alt="Logotipo de Recognizify" width="148px">
            <h2 style="margin-top: 1em">Conéctate de nuevo.</h2>
                <div class="form-group">
                    <label>Correo electrónico</label>
                    <input type="email" class="form-control form-control-lg form-control-login" v-on:keyup.enter="signInWithEmailAndPassword" v-model="email" aria-describedby="emailHelp" placeholder="alguien@recognizify.com" spellcheck="false" value="test@recognizify.com">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control form-control-lg form-control-login" v-on:keyup.enter="signInWithEmailAndPassword" v-model="password" placeholder="Tu clave personal e intransferible" value="test123">
                </div>
            <button class="btn btn-primary btn-login" id="dynamicButton" v-on:click="signInWithEmailAndPassword">Iniciar sesión</button>
        </div>

        <div class="alert alert-warning" id="loginAlert" role="alert">
            Parece que no ingresaste bien los datos. Vuelve a intentarlo.
        </div>

        <div class="instructCopy">
            <small class="text-gray">Las imagenes en la aplicación no son de nuestra autoría. Si deseas saber más, ingresa a <router-link to="/credits" style="color: #362f46">nuestro sitio de referencias.</router-link></small>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/login.css'
    // import '@/assets/scripts/serverConnection.js'

    export default {
        name: 'login_entry',
        data (){
            return {
                email: '',
                password: ''
            }
        },
        mounted: function (){
            firebase.auth().onAuthStateChanged(user => {
                user ? this.$router.push('/select') : console.log('Usuario existente');
            })
        },
        methods: {
            signInWithEmailAndPassword: function(){
                var loginButton = document.getElementById('dynamicButton')
                loginButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    firebase.auth().onAuthStateChanged(user => {
                        firebase.firestore().collection('users').doc(user.uid).get()
                            .then(res => {
                                if (res.data() == null | res.data() == undefined){
                                    console.log('Accediendo a configuración de cuenta')
                                    this.$router.push('/welcome/account')
                                } else {
                                    console.log('Sin función de configuración')
                                    this.$router.push('/select')
                                }
                            })
                    })
                })
                .catch(err => {
                    let $loginAlert = document.querySelector('#loginAlert')
                    $loginAlert.style.display = 'block'
                })
            }
        }
    }

    // <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">Vector de Fondo creado por pikisuperstar - www.freepik.es</a>

</script>

