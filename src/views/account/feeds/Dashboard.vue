<template>
    <div class="baseLayout">
        <LateralPanel/>
        <BurgerMenu/>
        <router-view></router-view>
    </div>
</template>
<script>

    import '@/assets/css/feed.css'
    import LateralPanel from '@/components/LateralPanel.vue'
    import BurgerMenu from '@/components/BurgerMenu.vue'

    export default {
        components: {
            LateralPanel,
            BurgerMenu
        }    
    }

</script>