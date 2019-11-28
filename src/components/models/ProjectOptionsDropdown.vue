<template>
    <div class="dropdown">
        <DeleteProject :projectId="this.projectId"/>
        <button class="projectCardMenuOptions" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#more-vertical" />
            </svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdownOverline">Opciones</div>
            <a class="dropdown-item text-danger" data-toggle="modal" data-target="#exampleModalCenter">
                Salir del proyecto
            </a>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/main.css'
    import DeleteProject from '@/components/modals/DeleteProject.vue'

    export default {
        props: ['projectId'],
        components: {
            DeleteProject
        }
    }

</script>