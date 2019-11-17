<template>
    <div id="users">
        <div class="dashboardContent">
            <UserRegistry/>
        </div>
    </div>
</template>
<script>

    import UserRegistry from '@/components/UserRegistry.vue'
    import LateralPanel from '@/components/LateralPanel.vue'
    import BurgerMenu from '@/components/BurgerMenu.vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/userRegistry.css'

    export default {
        components: {
            UserRegistry,
            LateralPanel,
            BurgerMenu
        },
        created: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/select')
            }
        }
    }

</script>