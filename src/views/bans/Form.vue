<template>
    <div class="completeViewContainer">
        <h3>Desea banear a</h3>
        <input class="form-control-special form-control-lg" type="text" placeholder="Escribe '@' y su usuario aquí">
        <br><br>
        <button class="btn btn-danger" @click="banUser" disabled>Enviar solicitud de baneo (no disponible)</button>
    </div>
</template>
<style>

    h3 {
        font-weight: 700;
    }

    .completeViewContainer {
        width: 100vw;
        height: calc(100vh - 55px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        text-align: center;
    }

</style>
<script>
    
    import Vue from 'vue';
    import firebase from 'firebase'
    import { checkAdmin } from '@/assets/scripts/checkAdminPermissions.js'
    export default {
        mixins: [checkAdmin],
        created(){
            this.checkAdminProperties()
        },
        methods: {
            banUser() {}
        }
    }

</script>