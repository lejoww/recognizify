<template>
    <div id="users">
        <UserNavbar/>
        <LateralPanel/>
        <div class="dashboardContent">
            <UserRegistry/>
            <Profile/>
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
        }
    }

</script>