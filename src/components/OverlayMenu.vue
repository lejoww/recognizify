<template>
    <div class="overlayMenu" id="overlayMenu">
        <div class="overlayMenuOption" style="cursor: pointer;" @click="closeOverlayMenu">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left" />
            </svg>
            <span class="overlayMenuLink" style="margin-left: 12px">Cerrar menú</span>
        </div>

        <br>
        <Profile/>
        <br>
        
        <div class="overlayMenuSearch">
            <input type="text" class="form-control-navbar inputSearch" placeholder="Buscar en tus proyectos...">
        </div><br>
        <div class="overline">General</div>
        <div class="overlayMenuOption" @click="closeOverlayMenu">
            <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/feed`">Resumen</router-link>
        </div>
        <div class="overlayMenuOption" style="margin-top: 12px" @click="closeOverlayMenu">
            <router-link class="overlayMenuLink" to="/account/notifications">Invitaciones</router-link>
        </div>
        <br>
        <div class="overline">Módulos</div>
        <div class="overlayMenuOption" @click="closeOverlayMenu">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
            </svg>
            <div class="optionContent">
                <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/board`">Boards</router-link>
                <small>Concentra las ideas en un tablero</small>
            </div>
        </div>
        <div class="overlayMenuOption" @click="closeOverlayMenu">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
            </svg>
            <div class="optionContent">
                <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/goals`">Goals</router-link>
                <small>Mantén tus objetivos presentes</small>
            </div>
        </div>
        <div class="overlayMenuOption" @click="closeOverlayMenu">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
            </svg>
            <div class="optionContent">
                <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/membership`">Users</router-link>
                <small>Administra amigos en tu proyecto</small>
            </div>
        </div>
        <div class="overlayMenuOption" @click="closeOverlayMenu">
            <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#clock" />
            </svg>
            <div class="optionContent">
                <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/tasks`">Tasks</router-link>
                <small>Sincronizate con tareas de tu equipo</small>
            </div>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/overlayMenu.css'
    import '@/assets/css/main.css'
    import Profile from '@/components/Profile.vue'

    export default {
        data: function(){
            return {
                routesPath: ''
            }
        },
        components: {
            Profile,
        },
        mounted: function(){
            this.routesPath = this.$route.params.projectId
        },
        methods: {
            closeOverlayMenu: function(){
                document.getElementById('overlayMenu').classList.remove('show')
            }
        }
    }

</script>