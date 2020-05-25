<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="featuresModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body" style="border: none">
                    <!-- <span class="subtitleOverline text-primary">Últimas novedades</span> -->
                    <h4>Bloqueo de aplicación</h4><br>

                    <p>Hasta nueva orden (unos días), la aplicación estará cerrada
                        debido a distintas razones. Perdone los inconvenientes y no
                        dude en comunicarse con un administrador en caso de algún
                        problema.
                    </p>
                    
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Aceptar</button>
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
        }
    }

</script>