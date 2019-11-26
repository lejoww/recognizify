<template>
    <div class="boardsPresentationLayout">
        <div class="boardsPresentationBanner">
            <div class="boardsPresentationContent">
                <div class="contentWrapper">
                    <div class="presentationTitle">
                        <img src="@/assets/ilustrations/modules/BoardsModuleIcon.png" width="76px">
                        <h1>Boards</h1>
                    </div>
                    <span class="presentationSummary">
                        Conecta a tu equipo en un tablero, con la libertad de expresarse de cualquier forma y manteniendo todas las ideas en un solo lugar.
                    </span>
                    <button class="btn btn-blue btn-lg">
                        <router-link to="/dashboard/select/" class="text-white">Crea tu primer tablero</router-link>
                    </button>
                </div>
            </div>
            <div class="boardsPresentationImage"></div>
        </div>
        <div class="boardsPresentationFeatures">

        </div>
    </div>
</template>
<script>

    import '@/assets/css/presentation.css'
    export default {}

</script>