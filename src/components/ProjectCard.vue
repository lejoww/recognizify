<template>
    <li class="project-el">
            <div class="card projectCard mb-3">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between">
                                <router-link :to="`/dashboard/project/${this.projectId}/feed`">
                                    <div style="display: flex; flex-direction: column">
                                        <span class="card-title projectTitle">
                                            {{this.projectName}}
                                        </span>
                                        <small class="projectAutor muted-gray" style="font-weight: 600">Participas en él</small>
                                    </div>
                                </router-link>
                                <div>
                                    <a data-toggle="tooltip" data-placement="right" title="Característica inhabilitada.">
                                        <svg class="feather-like-options">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#star" />
                                        </svg>
                                    </a>
                                    <ProjectOptionsDropdown :projectId="this.projectId" />
                                </div>
                            </div>
                        <br><br>
                        <div style="display: flex; justify-content: space-between; align-items: center">
                            <span class="card-text text-muted projectLastActivity">
                                Activo hace {{this.lastActivity}}
                            </span>
                            <span class="state-badge-success">Activo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            'projectAutor',
            'lastActivity'
        ],
        components: {
            ProjectOptionsDropdown
        },
        mounted () {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }
    }

</script>