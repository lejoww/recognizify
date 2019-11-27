<template>
    <li class="project-el">
        <a :href="`/dashboard/project/${this.projectId}/feed`">
            <div class="card projectCard mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4 projectImageContainer">
                        <img class="card-img projectImage" :src="this.projectPhotoUrl">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{this.projectName}}</h5>
                            <p class="card-text"><small class="text-muted">Última actividad hace {{this.lastActivity}}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>
<script>

    import '@/assets/css/select.css'

    export default {
        props: [
            'projectName',
            'projectPhotoUrl',
            'projectId',
            'lastActivity'
        ]    
    }

</script>