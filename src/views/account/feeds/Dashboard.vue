<template>
    <div class="baseLayout">
        <LateralPanel/>
        <OverlayMenu/>
        <router-view></router-view>
    </div>
</template>
<script>

    import '@/assets/css/feed.css'
    import '@/assets/css/lateralMenu.css'
    import LateralPanel from '@/components/LateralPanel.vue'
    import OverlayMenu from '@/components/OverlayMenu.vue'

    import { CheckEmailVerification } from '@/assets/scripts/checkVerificatedEmail.js'

    export default {
        components: {
            LateralPanel,
            OverlayMenu
        },
        mixins: [CheckEmailVerification]
    }

</script>