<template>
    <div id="users">
        <div class="screenContent">
            <Profile/>
            
            <div class="dashboardContent">
                <LateralPanel/>
                <UserRegistry/>
            </div>
        </div>
    </div>
</template>
<script>

    import UserNavbar from '@/components/UserNavbar.vue'
    import UserRegistry from '@/components/UserRegistry.vue'
    import LateralPanel from '@/components/LateralPanel.vue'
    import Profile from '@/components/Profile.vue'

    import '@/assets/css/feed.css'

    export default {
        components: {
            UserNavbar,
            UserRegistry,
            LateralPanel,
            Profile
        },
        mounted: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/select')
            }
        }
    }

</script>