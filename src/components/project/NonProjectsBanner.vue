<template>
    <div class="nonProjectsBanner" id="bgNoneProjects">
        <div class="image-representation">
            <img src="@/assets/ilustrations/MoonIcon.png" width="190px"/>
        </div><br>
        <div class="bannerInstructions">
            <h1>Parece que aún no tienes proyectos nuevos</h1>
            <p>¿Qué esperas? Empieza de una vez.</p>
            <br>

            <a href="#" class="btn btn-success btn-lg actionButton">
                <router-link class="text-white" to="/account/create/project" style="font-weight: 800">Crea un nuevo proyecto</router-link>
            </a>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/Banners.css'
    export default {
        
    }

</script>