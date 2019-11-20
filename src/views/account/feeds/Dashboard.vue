<template>
    <div class="baseLayout">
        <LateralPanel/>
        <router-view></router-view>
    </div>
</template>
<script>

    import '@/assets/css/feed.css'
    import '@/assets/css/lateralMenu.css'
    import LateralPanel from '@/components/LateralPanel.vue'
    import BurgerMenu from '@/components/BurgerMenu.vue'

    export default {
        components: {
            LateralPanel,
            BurgerMenu
        }    
    }

</script>