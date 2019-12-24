<template>
    <div>
        <div class="baseLayout">
            <LateralPanel/>
            <OverlayMenu/>
            <router-view>
            </router-view>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/feed.css'
    import '@/assets/css/HeaderMenu.css'
    import LateralPanel from '@/components/HeaderMenu.vue'
    import OverlayMenu from '@/components/OverlayMenu.vue'

    import { CheckActiveSession } from '@/assets/scripts/checkActiveSession.js'
    import { CheckEmailVerification } from '@/assets/scripts/checkVerificatedEmail.js'

    export default {
        components: {
            LateralPanel,
            OverlayMenu
        },
        mixins: [CheckActiveSession, CheckEmailVerification]
    }

</script>