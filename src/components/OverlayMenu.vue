<template>
    <div class="overlayMenuHidden" id="overlayMenu">
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
            <router-link class="overlayMenuLink" :to="`/@${currentProfileUsername}`">Tu perfil</router-link>
        </div>
        <div class="overlayMenuOption" style="margin-top: 12px" @click="closeOverlayMenu">
            <router-link class="overlayMenuLink" :to="`/dashboard/select`">Tus proyectos</router-link>
        </div>
        <div class="overlayMenuOption" style="margin-top: 12px" @click="closeOverlayMenu">
            <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/feed`">Resumen</router-link>
        </div>

    </div>
</template>
<script>

    import '@/assets/css/overlayMenu.css'
    import '@/assets/css/main.css'
    import Profile from '@/components/Profile.vue'
    import firebase from 'firebase'

    export default {
        data(){
            return {
                routesPath: '',
                currentProfileUsername: ''
            }
        },
        components: {
            Profile,
        },
        created: function(){
            this.routesPath = this.$route.params.projectId
        },
        updated: function(){
            this.getCurrentUserProfile()
        },
        methods: {
            getCurrentUserProfile: function(){
                firebase.firestore()
                .collection('users')
                .doc(firebase.auth().currentUser.uid)
                .get()
                .then(user => {
                    this.currentProfileUsername = user.data()['user']
                })
            },
            closeOverlayMenu: function(){
                document.getElementById('overlayMenu').classList.toggle('overlayMenu')
            }
        }
    }

</script>