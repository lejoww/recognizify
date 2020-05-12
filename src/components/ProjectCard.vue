<template>
    <li class="project-el">
            <div class="card projectCard mb-3">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between; width: 100%">
                                <router-link :to="`/dashboard/project/${this.projectId}/feed`" style="width: 100%">
                                    <div style="width: 100%; display: flex; justify-content: space-between;">
                                        <span class="card-title projectTitle">
                                            {{this.projectName}}
                                        </span>
                                        <!-- <div style="margin-top: 1rem">
                                            <span class="state-badge-success">Activo</span>
                                        </div> -->
                                        <a data-toggle="tooltip" data-placement="right" title="Característica inhabilitada.">
                                            <svg class="feather-like-options">
                                                <use xlink:href="@/assets/svg/feather-sprite.svg#star" />
                                            </svg>
                                        </a>
                                        <!-- <ProjectOptionsDropdown :projectId="this.projectId" /> -->
                                    </div>
                                </router-link>
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