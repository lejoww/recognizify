<template>
    <div class="presentationLayout">
        <div class="presentationBanner">
            <div class="presentationContent">
                <div class="contentWrapper">
                    <ModuleShortPresentation
                        presentationTitle="Boards"
                        presentationSummary="Conecta a tu equipo con un tablero. Donde no hay límites y todos tienen la libertad de compartir ideas para convertirlas en algo grande."
                        callToAction="Crea tu tablero"
                        callToActionRef="/dashboard/select"
                    />
                </div>
            </div>
            <div class="presentationImage"></div>
        </div>
        <div class="presentationFeatures">
            <div class="presentationColumn">
                <img src="@/assets/ilustrations/modules/EyeIcon.png" width="82px">
                <ModuleFeature
                featureName="Controla" 
                featureDescription="Controla el flujo de ideas, decide hasta donde y cómo son necesarias."/>
            </div>
            <div class="presentationColumn">
                <img src="@/assets/ilustrations/modules/ExpressionIcon.png" width="82px">
                <ModuleFeature
                featureName="Exprésate" 
                featureDescription="Todos tienen acceso a las ideas y la libertad de expresarse."/>
            </div>
            <div class="presentationColumn">
                <img src="@/assets/ilustrations/modules/IdeaIcon.png" width="82px">
                <ModuleFeature
                featureName="Automatiza" 
                featureDescription="Las ideas no son objetos. Pero aquí puedes tratarlas como uno."/>
            </div>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/presentation.css'
    import ModuleFeature from '@/components/models/ModuleFeature.vue'
    import ModuleShortPresentation from '@/components/models/ModuleShortPresentation.vue'

    export default {
        components: {
            ModuleFeature,
            ModuleShortPresentation
        }
    }

</script>