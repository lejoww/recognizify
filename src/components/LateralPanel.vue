<template>
    <div class="sidebarMenu">
      <div class="sidebarWrapper">
        <div class="sidebarBrand">
          <img src="@/assets/logo-white-cutted.svg" width="152px">
        </div>
        <div class="sidebarAccount">
          <Profile/>
        </div>
        <ul class="sidebarNav">
          
          <div class="overline">General</div>
          <li>
            <router-link :to="feedPath" class="lateralPanelOption">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#home"/>
              </svg>
              <span class="lateralMenuLink">Resumen</span>
            </router-link>
          </li>

          <li>
            <router-link to="/account/configuration" class="lateralPanelOption">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#settings" />
              </svg>
              <span class="lateralMenuLink">Ajustes</span>
            </router-link>
          </li>

          <li>
            <router-link to="/notifications" class="lateralPanelOption">
              <div class="stackable">
                <div class="littleStack">
                  <svg class="feather-menu" id="invitationsIcon">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#bell" />
                  </svg>
                  <span class="badge badge-danger" v-if="invitations > 0" v-text="invitations"></span>
                </div>
                <span class="lateralMenuLink" id="invitationsLink">Invitaciones</span>
              </div>
            </router-link>
          </li>

          <br><div class="overline">Módulos</div>
          <li>
            <router-link :to="goalsPath" class="lateralPanelOption">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
              </svg>
              <span class="lateralMenuLink">Goals</span>
            </router-link>
          </li>

          <li>
            <router-link :to="boardPath" class="lateralPanelOption">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
              </svg>
              <span class="lateralMenuLink">Boards</span>
            </router-link>
          </li>

          <li>
            <router-link :to="usersPath" class="lateralPanelOption">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
              </svg>
              <span class="lateralMenuLink">Users</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/lateralMenu.css'
    import '@/assets/css/mediaqueries.css'

    import Profile from '@/components/Profile.vue'

    export default {
      data(){
        return {
          activeProjects: '',
          currentProjectName: '',
          usersPath: '',
          feedPath: '',
          boardPath: '',
          goalsPath: '',
          invitations: ''
        }
      },
      components: {
        Profile
      },
      created(){
        this.setInvitationsNumber()
        this.getAndSetActiveProjects()
        firebase.auth().onAuthStateChanged(user => {
          const projectCode = this.$router.history.current.params.projectId
          this.usersPath = `/project/${projectCode}/membership`
          this.feedPath = `/project/${projectCode}/feed`
          this.boardPath = `/project/${projectCode}/board`
          this.goalsPath = `/project/${projectCode}/goals`
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