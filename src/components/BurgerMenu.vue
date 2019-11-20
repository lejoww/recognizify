<template>
    <div @click="openMenu" id="menu">
        <svg class="feather-light">
            <use xlink:href="@/assets/svg/feather-sprite.svg#menu"/>
        </svg>
    </div>
</template>
<script>

export default {
    methods: {
        openMenu: function(){
            let menu = document.getElementById('sidebarMenu')
            let drawableContent = document.getElementById('drawable')
            menu.classList.remove('headerMenu')
            menu.classList.add('headerMobileMenu')
            drawableContent.style.display = 'block'
        }
    }
}

</script>