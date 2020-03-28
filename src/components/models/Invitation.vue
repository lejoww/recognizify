<template>
    <div class="card w-75">
        <div class="card-body">
            <h5 class="card-title">
                {{this.invite ? `${this.invite} te invitó a un proyecto que se llama ${this.name}` : 
                `Estas invitado a un proyecto que se llama ${this.name}`
                }}
            </h5>
            <p class="card-text" style="text-align: left">{{this.description}}</p>
            <a :href="`/account/${this.id}/accept`" class="btn btn-warning">Aceptar</a>
            <!-- <a href="#" class="btn btn-info">Rechazar</a> -->
        </div>
    </div>
</template>
<style scoped>

    .card {
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03)
    }
    
    .card-body {
        background: #fafafa;
    }

    .card-title {
        margin-bottom: 4px !important;
    }

    .card-text {
        font-size: 13px;
        font-weight: 600;
        color: #A9A8C1;
    }

</style>
<script>

    export default {
        props: [
            'name',
            'id',
            'description',
            'invite'
        ]    
    }

</script>