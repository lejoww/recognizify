<template>
    <div class="dropdown">
        <DeleteProject :projectId="this.projectId" :projectName="this.selectedProject.name"/>
        <a class="projectCardMenuOptions" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg class="feather-like-options">
                <use xlink:href="@/assets/svg/feather-sprite.svg#more-horizontal" />
            </svg>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdownOverline">Opciones</div>
            <a class="dropdown-item text-danger" data-toggle="modal" data-target="#exampleModalCenter">
                Salir del proyecto
            </a>
        </div>
    </div>
</template>
<script>

    import DeleteProject from '@/components/modals/DeleteProject.vue'

    export default {
        data(){
            return {
                selectedProject: {
                    name: ''
                }
            }
        },
        props: ['projectId', 'projectName'],
        components: {
            DeleteProject
        },
        methods: {
            getProjectInfo(){
                firebase.firestore()
                .collection('projects')
                .doc(this.projectId)
                .get()
                .then((project) => {
                    this.selectedProject.name = project.data()['name']
                })
            }
        }
    }

</script>