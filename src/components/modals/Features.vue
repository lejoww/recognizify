<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="featuresModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body" style="border: none">
                    <span class="subtitleOverline text-primary">Últimas novedades</span>
                    <h4>Envio de correos automático</h4><br>

                    <p>Ahora Recognizify es más inteligente, dependiendo de las acciones
                        en tus proyectos, se te enviarán correos con información a detalle
                        que siempre pueden resultarte útiles.</p>
                    
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" @click="setModalChecked">Continuar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .subtitleOverline {
        font-weight: 700;
        letter-spacing: -0.2px;
        font-size: 13px
    }

</style>
<script>

    export default {
        mounted: function() {
            // if (localStorage.getItem('featuresModalChecked') != 'checked'){
                $("#featuresModal").modal("show");
            // }
        },
        // methods: {
        //     setModalChecked: function(){
        //         localStorage.setItem('featuresModalChecked', 'checked')
        //     }
        // }
    }

</script>