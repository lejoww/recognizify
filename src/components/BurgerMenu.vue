<template>
    <div @click="openMenu" id="menu">
        <svg class="feather-dark">
            <use xlink:href="@/assets/svg/feather-sprite.svg#light"/>
        </svg>
    </div>
</template>
<script>

export default {
    methods: {
        openMenu: function(){
            let menu = document.getElementById('sidebarMenu')
            menu.classList.toggle('sidebarActive')
        }
    }
}

</script>