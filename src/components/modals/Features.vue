<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="featuresModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body" style="border: none">
                    <span class="subtitleOverline text-primary">Últimas novedades</span>
                    <h4>Buscador de usuarios</h4><br>

                    <p>Ahora puedes buscar usuarios en el buscador del encabezado. 
                    Escribe su nombre y podrás ver un listado de los posibles usuarios que buscas. </p>
                    
                    <p> Ten en cuenta que ahí
                    solo puedes buscar perfiles que este configurados como públicos.</p>
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
            if (localStorage.getItem('featuresModalChecked') != 'checked'){
                $("#featuresModal").modal("show");
            }
        },
        methods: {
            setModalChecked: function(){
                localStorage.setItem('featuresModalChecked', 'checked')
            }
        }
    }

</script>