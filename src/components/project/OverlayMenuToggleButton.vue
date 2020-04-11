<template>
    <div>
        <button class="OverlayMenuToggleButton" id="OverlayMenuToggleButton" data-toggle="tooltip" data-placement="bottom" title="Menú del proyecto" @click="toggleOverlayMenu">
            <svg class="feather-light">
                <use xlink:href="@/assets/svg/feather-sprite.svg#package" />
            </svg>
        </button>
    </div>
</template>
<style>

    .OverlayMenuToggleButton {
        width: 54px;
        height: 54px;
        border-radius: 27px;
        border: none;
        background: rgb(132, 0, 255);
        position: absolute;
        top: 114px;
        right: 14px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 2;
    }

    .forward {
        right: 340px;
    }

</style>
<script>

    import * as jquery from 'jquery'
    export default {
        updated: function(){
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        },
        methods: {
            toggleOverlayMenu: function(){
                document.getElementById('projectFeedPanel').classList.toggle('show')
                document.getElementById('OverlayMenuToggleButton').classList.toggle('forward')
                $('#OverlayMenuToggleButton').tooltip('disable')
            }
        }
    }

</script>