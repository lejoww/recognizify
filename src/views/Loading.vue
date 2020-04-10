<template>
    <div class="loadingScreen">
        <div class="loader">
            <div class="loader-inner ball-pulse-sync">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span class="tooltip">
                <p>loading...</p>
            </span>
        </div>
    </div>
</template>
<style>

    .loadingScreen {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ball-pulse-sync > div {
        background-color: #5900C6;
    }

</style>
<script>

    import '../assets/css/loaders.css'
    export default {
    }

</script>