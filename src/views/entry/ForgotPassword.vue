<template>
    <div class="forgotPasswordLayout">
        <div class="forgotPasswordContainer">
            <div class="forgotPasswordBrand">
                <img src="@/assets/logo-common-cutted.png" width="200px">
            </div>

            <h3>{{message}}</h3>
            <p>{{recommendation}}</p>
            <input v-model="email" 
            id="inputEmail"
            type="text" 
            class="form-control-special form-control-xl form-control-variable" 
            placeholder="Ingresa tu correo electrónico aquí"
            autocomplete="off"
            spellcheck="false"
            >

            <br><br>
            <button class="btn btn-success" @click="restorePassword">Enviar correo de restablecimiento</button>

        </div>
    </div>
</template>
<style scoped>

    .forgotPasswordLayout {
        width: 100vw;
        height: 100vh;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .forgotPasswordContainer {
        width: 100%;
        text-align: center
    }

    .forgotPasswordBrand {
        margin-bottom: 3rem;
    }

    h3 { 
        /* letter-spacing: -0.5px; */
        font-family: 'cooper_hewittsemibold';
    }

    p {
        color: #A9A8C3
    }

    input {
        color: #6710F2 !important;
        text-align: center
    }

    input:focus {
        background: transparent;
        border: none;
        box-shadow: none;
    }

</style>
<script>

    import firebase, { firestore } from 'firebase'
    export default {
        data(){
            return {
                email: '',
                message: '',
                recommendation: ''
            }
        },
        created: function() {
            this.message = 'Desea restablecer la contraseña para'
        },
        methods: {
            restorePassword: function() {
                firebase.auth().sendPasswordResetEmail(this.email)
                .then(() => {
                    this.message = 'Revisa tu correo electrónico'
                    this.recommendation = 'Enviamos un enlace para restablecer tu contraseña'
                    document.getElementById('inputEmail').style.display = 'none'

                    setTimeout(() => {
                        this.$router.push('/')
                    }, 10000);
                })
            }
        }
    }

</script>