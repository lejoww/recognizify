<template>
    <div class="loader" id="loader"></div>
</template>
<style scoped>

    .loader {
        width: 100vw;
        height: 100vh;
        background: green;
        position: absolute;
        z-index: 20;
        top: 0;
    }

</style>
<script>

    export default {
        beforeCreate(){
            window.onload = document.getElementById('loader').style.display = 'block'
        }
    }

</script>
