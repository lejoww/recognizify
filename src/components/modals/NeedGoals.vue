<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="needGoalsModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body" style="border: none">
                    <span class="subtitleOverline text-primary">Acción requerida</span>
                    <h3 style="font-weight: 800">Primero necesitas crear metas</h3><br>

                    <p>La regla es que toda tarea que añadas necesita tener un <b>por qué</b>, así
                    podemos hacer seguimiento constante. Entonces <b>primero crear una meta que
                    persigas con esta tarea, luego vuelve y podrás crearla.</b></p>
                    
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="() => this.$router.push(`/dashboard/project/${this.$route.params.projectId}/goals`)">Ir a crear meta</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

    .subtitleOverline {
        font-weight: 700;
    }

</style>
<script>

    export default {
        mounted: function() {
            $("#needGoalsModal  ").modal("show");
        },
    }

</script>