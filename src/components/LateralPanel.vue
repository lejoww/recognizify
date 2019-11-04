<template>
    <div class="lateral-menu-container">
        <div class="lateral-menu-header">
          <div class="logotype"></div>
        </div>

        <div class="lateral-menu-body">
          <div class="overline">General</div>
          <router-link :to="feedPath" class="lateralPanelOption">
            <svg class="feather-menu">
              <use xlink:href="@/assets/svg/feather-sprite.svg#home"/>
            </svg>
            <span class="lateralMenuLink">Resumen</span>
          </router-link>
          
          <router-link to="/account/configuration" class="lateralPanelOption">
            <svg class="feather-menu">
              <use xlink:href="@/assets/svg/feather-sprite.svg#settings" />
            </svg>
            <span class="lateralMenuLink">Ajustes</span>
          </router-link>

          <router-link to="#" class="lateralPanelOption">
            <svg class="feather-menu">
              <use xlink:href="@/assets/svg/feather-sprite.svg#package" />
            </svg>
            <span class="lateralMenuLink">Paquetes</span>
          </router-link>

          <router-link to="/notifications" class="lateralPanelOption">
            <svg class="feather-menu" id="invitationsIcon">
              <use xlink:href="@/assets/svg/feather-sprite.svg#bell" />
            </svg>
            <span class="badge badge-danger" v-if="invitations > 0" v-text="invitations">1</span>
            <span class="lateralMenuLink" id="invitationsLink">Invitaciones</span>
          </router-link>

          <br><div class="overline">Módulos</div>

          <router-link :to="boardPath" class="lateralPanelOption">
            <svg class="feather-menu">
              <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
            </svg>
            <span class="lateralMenuLink">Boards</span>
          </router-link>

          <router-link :to="usersPath" class="lateralPanelOption">
            <svg class="feather-menu">
              <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
            </svg>
            <span class="lateralMenuLink">Usuarios</span>
          </router-link>
        </div>

    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/lateralMenu.css'
    import '@/assets/css/mediaqueries.css'

    export default {
      data(){
        return {
          activeProjects: '',
          currentProjectName: '',
          usersPath: '',
          feedPath: '',
          boardPath: '',
          invitations: ''
        }
      },
      created(){
        this.setInvitationsNumber()
        this.getAndSetActiveProjects()
        firebase.auth().onAuthStateChanged(user => {
          const projectCode = this.$router.history.current.params.projectId
          this.usersPath = `/project/${projectCode}/membership`
          this.feedPath = `/project/${projectCode}/feed`
          this.boardPath = `/project/${projectCode}/board`
        })
      },
      methods: {
        getAndSetActiveProjects: function(){
          firebase.auth().onAuthStateChanged(user => {
            firebase.firestore().collection('users').doc(user.uid).collection('projects').get()
              .then(activeProjects => {
                this.activeProjects = activeProjects.docs.length
              })
          })
        },
        setInvitationsNumber: function(){
          firebase.auth().onAuthStateChanged(user => {
            firebase.firestore().collection('users').doc(user.uid).collection('invitations').get()
              .then(invitations => {
                if (invitations.docs.length > 0) {
                  this.invitations = invitations.docs.length
                  let invitationsLink = document.getElementById('invitationsLink')
                  let invitationsIcon = document.getElementById('invitationsIcon')
                  invitationsLink.style.color = '#FF524C'
                  invitationsIcon.style.stroke = '#FF524C'
                }
              })
          })
        }
      }
    }

</script>