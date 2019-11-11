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

          <router-link to="/notifications" class="lateralPanelOption">
            <div class="row">
              <svg class="feather-menu" id="invitationsIcon">
                <use xlink:href="@/assets/svg/feather-sprite.svg#bell" />
              </svg>
              <span class="badge badge-danger" v-if="invitations > 0" v-text="invitations">1</span>
            </div>
            <span class="lateralMenuLink" id="invitationsLink">Invitaciones</span>
          </router-link>


          <div class="modules" id="modulesContainer">
            <br><div class="overline">Módulos</div>

            <router-link :to="goalsPath" class="lateralPanelOption">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
              </svg>
              <span class="lateralMenuLink">Goals</span>
            </router-link>

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
              <span class="lateralMenuLink">Users</span>
            </router-link>
          </div>

          <div class="btn-group dropup">
            <a class="lateralPanelOption modulesDropdown" id="dropdownModules" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg class="feather-menu">
                <use xlink:href="@/assets/svg/feather-sprite.svg#zap" />
              </svg>
              <span class="lateralMenuLink">Módulos</span>
            </a>
            <div class="dropdown-menu animate slideIn" aria-labelledby="dropdownModules">
              <a class="dropdown-item">
                <router-link :to="boardPath" class="lateralPanelOption dropdownOption">
                  <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
                  </svg>
                  <span class="lateralMenuLink">Boards</span>
                </router-link>
              </a>
              
              <a class="dropdown-item">
                <router-link :to="goalsPath" class="lateralPanelOption dropdownOption">
                  <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
                  </svg>
                  <span class="lateralMenuLink">Goals</span>
                </router-link>
              </a>

              <a class="dropdown-item">
                <router-link :to="usersPath" class="lateralPanelOption dropdownOption">
                  <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
                  </svg>
                  <span class="lateralMenuLink">Users</span>
                </router-link>
              </a>
            </div>
          </div>
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
          goalsPath: '',
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