<template>
    <a @click="openMenu" id="menu">
        <svg class="feather-burger">
            <use xlink:href="@/assets/svg/feather-sprite.svg#menu"/>
        </svg>
    </a>
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