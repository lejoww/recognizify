<template>
    <div class="card w-75">
        <div class="card-body">
            <h5 class="card-title">Te acaban de invitar a {{this.name}}</h5>
            <p class="card-text" style="text-align: left">Esto es una solicitud hacia el proyecto de alguien que probablemente te conoce. Tu decides aceptarla o rechazarla.</p>
            <a :href="`/account/${this.id}/accept`" class="btn btn-warning">Aceptar</a>
        </div>
    </div>
</template>
<script>

    export default {
        props: [
            'name',
            'id'
        ]    
    }

</script>