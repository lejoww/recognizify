<template>
    <div class="nonProjectsBanner" id="bgNoneProjects">
        <div class="image-representation">
            <img src="@/assets/ilustrations/MoonIcon.png" width="190px"/>
        </div><br>
        <div class="bannerInstructions">
            <h2 class="nonProjectsTitle">Parece que aún no tienes proyectos nuevos</h2>
            <p style="font-size: 14px">¿Qué esperas? Empieza de una vez.</p>
            <br>

            <button class="btn btn-success actionButton">
                <router-link class="text-white" to="/account/create/project">Crea un nuevo proyecto</router-link>
            </button>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/Banners.css'
    export default {
        
    }

</script>