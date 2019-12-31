<template>
    <div class="dashboardContent">
        <AdsPanel/>
        <ProjectPanel/>
    </div>
</template>
<script>

    import AdsPanel from '@/components/project/AdsPanel.vue'
    import ProjectPanel from '@/components/project/ProjectPanel.vue'
    export default {
        components: {
            AdsPanel,
            ProjectPanel
        }
    }

</script>