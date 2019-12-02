<template>
    <div class="verifyScreen">
        <div class="alert alert-success alertSending" id="sendingAlert" role="alert" style="display:none">
            No ha verificado su cuenta aún.
        </div>

        <div class="wrapCenter">
            <h3>Verifica tu correo electrónico</h3>
            <p>Nos importa la seguridad. Por lo tanto, para poder continuar debes verificar tu correo electrónico para continuar.</p>
            <span class="muted-gray">Cuando haya verificado su cuenta, haga clic en el botón</span>
            <br>
            <button class="btn btn-danger" @click="sendEmailVerification">
                Enviar correo de verificación
            </button><br>
            <button class="btn btn-outline-dark" @click="checkVerificationProccess">
                Comprobar verificación
            </button>
        </div>
    </div>
</template>
<style>
/* 
    .verifyScreen {
        padding: 2rem;
    } */

    .wrapCenter {
        width: 100vw;
        height: 100vh;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
    }

    .link {
        font-weight: 600;
        margin-top: 12px;
        cursor: pointer
    }

</style>
<script>

    import firebase from 'firebase';
    import '@/assets/css/feed.css';

    export default {
        methods: {
            restoreAccountToCheckVerification: function(){
                firebase.auth().signOut()
                .then(() => this.$router.push('/'))
            },
            sendEmailVerification: function(){
                firebase.auth().currentUser.sendEmailVerification()
            },
            checkVerificationProccess: function(){
                this.$router.push('/dashboard/select')
            }
        }
    }

</script>