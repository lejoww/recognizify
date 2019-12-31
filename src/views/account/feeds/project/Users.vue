<template>
    <div id="users">
        <div class="dashboardContent">
            <UserRegistry/>
        </div>
        <ProjectPanel/>
    </div>
</template>
<script>

    import UserRegistry from '@/components/UserRegistry.vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/userRegistry.css'

    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'
    import ProjectPanel from '@/components/project/ProjectPanel.vue'

    export default {
        components: {
            UserRegistry,
            ProjectPanel
        },
        mixins: [CheckProjectMember],
        created: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/dashboard/select')
            }
        }
    }

</script>