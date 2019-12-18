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
            <router-link class="overlayMenuLink" :to="`/dashboard/project/${routesPath}/feed`">Resumen</router-link>
        </div>
        <div class="overlayMenuOption" style="margin-top: 12px" @click="closeOverlayMenu">
            <router-link class="overlayMenuLink" to="/account/notifications">
                Invitaciones
                <span class="badge badge-danger" v-if="invitations >= 1">
                    <svg class="feather-mini-light">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#bell" />
                    </svg>
                    {{invitations}}
                </span>
            </router-link>
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
    import firebase from 'firebase'

    export default {
        data(){
            return {
                routesPath: '',
                invitations: '',
                currentProfileUsername: ''
            }
        },
        components: {
            Profile,
        },
        created: function(){
            this.getInvitations()
            this.routesPath = this.$route.params.projectId
        },
        mounted: function(){
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
            getInvitations: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore()
                    .collection('users')
                    .doc(user.uid)
                    .collection('invitations')
                    .get()
                    .then(invitations => {
                        this.invitations = invitations.docs.length
                    })
                })
            },
            closeOverlayMenu: function(){
                document.getElementById('overlayMenu').classList.toggle('overlayMenu')
            }
        }
    }

</script>