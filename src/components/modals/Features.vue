<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="featuresModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body" style="border: none">
                    <span class="subtitleOverline text-primary">Últimas novedades</span>
                    <h4>Destacar ideas en Boards</h4><br>

                    <p>En el  menú de opciones de las ideas de Boards puedes destacar ideas que puedan
                        ser relevantes para tu proyecto. Pronto tendremos otras opciones para uno de los
                        módulos más importantes de la familia. </p>
                    
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