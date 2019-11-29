<template>
    <div class="verifyScreen">
        <div class="alert alert-success alertSending" id="sendingAlert" role="alert" style="display:none">
            El enlace de verificación se ha reenviado correctamente.
        </div>

        <div class="wrapCenter">
            <h3>Verifica tu correo electrónico</h3>
            <p>Nos importa la seguridad. Por lo tanto, para poder continuar debes verificar tu correo electrónico para continuar.</p>
            <span class="muted-gray">Cuando haya verificado su cuenta, haga clic en el botón</span>
            <br>
            <button class="btn btn-danger" @click="sendEmailVerification">
                Enviar correo de verificación
            </button>
        </div>
    </div>
</template>
<style>

    .wrapCenter {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
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
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        user.sendEmailVerification().then(() => {
                            document.getElementById('sendingAlert').style.display = 'block'
                        })
                    }
                })
            }
        }
    }

</script>