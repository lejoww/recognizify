<template>
    <div id="register">
        <Features/>
        <div class="form-images">
            <img src="@/assets/ilustrations/rocket.svg" alt="Personas hablando y admirando estadísticas">
        </div>
        <div class="form-container">
            <img src="@/assets/logo-common-cutted.png" alt="Logotipo de Recognizify" width="148px">
            <h3 style="margin-top: 1em">No está habilitada la creación de cuentas</h3><br>
            <a href="/" class="text-primary">Volver a la página de inicio</a>
        </div>

        <div class="alert alert-warning" id="loginAlert" role="alert">
            Parece que no ingresaste bien los datos. Vuelve a intentarlo.
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import Features from '@/components/modals/Features.vue'
    import '@/assets/css/login.css'

    export default {
        data(){
            return {
                email: '',
                password: ''
            }
        },
        components: {
            Features
        },
        methods: {
            createAccountWithEmailAndPassword: function(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$router.push('/verify')
                    })
                    .catch(err => {
                        let $loginAlert = document.querySelector('#loginAlert')
                        $loginAlert.style.display = 'block'
                    })
            }
        }
    }

</script>