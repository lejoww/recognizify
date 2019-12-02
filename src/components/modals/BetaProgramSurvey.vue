<template>
    <div class="betaProgramSurvey">
        <div class="modal show" id="surveyModal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header" style="border: none">
                    <div>
                        <img src="@/assets/logo-common-beta.png" width="190px">
                        <h3 class="modal-title" style="margin-top: .5em">Te elegimos para mejorar juntos</h3>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <svg class="feather-dark">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#x" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="modal-body">
                    <span>Estas inscrito en nuestro programa de usuarios BETA y por eso eres importante. Porque gracias a tí y por tí mejoramos cada día más, nos adaptamos a tus necesidades porque eres importante para nosotros. Hoy tienes otra oportunidad de contarnos qué te parece Recognizify ¿Te apuntas?</span>
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
                    <a href="/surveys/beta/last" class="btn btn-success">Completar a la encuesta</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        mounted: function() {
            $("#surveyModal").modal("show");
        }
    }

</script>