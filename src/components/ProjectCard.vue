<template>
    <li class="project-el">
        <ProjectOptionsDropdown :projectId="this.projectId" />
        <a :href="`/dashboard/project/${this.projectId}/feed`">
            <div class="card projectCard mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4 projectImageContainer">
                        <img class="card-img projectImage" :src="this.projectPhotoUrl">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">
                                {{this.projectName}}
                                <span class="badge badge-secondary">Activo</span>
                            </h6>
                            <!-- <span class="card-text text-muted projectLastActivity">
                                Última actividad hace {{this.lastActivity}}
                                Sin registro de la última actividad
                            </span> -->
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>

</template>
<script>

    import '@/assets/css/select.css'
    import ProjectOptionsDropdown from '@/components/models/ProjectOptionsDropdown.vue';

    export default {
        props: [
            'projectName',
            'projectPhotoUrl',
            'projectId',
            'lastActivity'
        ],
        components: {
            ProjectOptionsDropdown
        }
    }

</script>