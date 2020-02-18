<template>
    <li class="project-el">
        <ProjectOptionsDropdown :projectId="this.projectId" />
        <router-link :to="`/dashboard/project/${this.projectId}/feed`">
            <div class="card projectCard mb-3" :style="`background-image: url('${this.projectPhotoUrl}');`">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <span class="card-title projectTitle text-white">
                                {{this.projectName}}
                                <!-- <span class="badge badge-warning">Activo</span> -->
                            </span>
                            <!-- <span class="card-text text-muted projectLastActivity">
                                Última actividad hace {{this.lastActivity}}
                                Sin registro de la última actividad
                            </span> -->
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
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