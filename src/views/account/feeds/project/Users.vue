<template>
    <div id="users">
        <div class="dashboardContent">
            <UserRegistry/>
        </div>
    </div>
</template>
<script>

    import UserRegistry from '@/components/UserRegistry.vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/userRegistry.css'

    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'

    export default {
        components: {
            UserRegistry,
        },
        mixins: [CheckProjectMember],
        created: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/dashboard/select')
            }
        }
    }

</script>