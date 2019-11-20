<template>
    <div class="headerMenu" id="sidebarMenu">
      <div class="headerCentre">
        <div class="headerWrapper">
          <div class="headerBrand">
            <img src="@/assets/logo-white-cutted.svg" width="142px">
          </div>

          <div class="headerSearch">
            <div class="searchInput">
              <input class="form-control-navbar" type="text" placeholder="Buscar en tus proyectos..." aria-label="Search" spellcheck="false" autocomplete="off">
            <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
            </div>
          </div>
          <div class="headerNav">
            <div class="headerNavList">
              <div>
                <router-link :to="feedPath" class="lateralPanelOption">
                  <span class="lateralMenuLink">Resumen</span>
                </router-link>
              </div>

              <div>
                <router-link to="/account/notifications" class="lateralPanelOption">
                  <div class="stackable">
                    <div class="littleStack">
                      <span class="badge badge-danger" v-if="invitations > 0" v-text="invitations"></span>
                    </div>
                    <span class="lateralMenuLink" id="invitationsLink">Invitaciones</span>
                  </div>
                </router-link>
              </div>

              <!-- <br><div class="overline">Módulos</div> -->
              <div class="dropdown">
                <a class="dropdown-toggle lateralPanelOption" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="lateralMenuLink text-white">Módulos</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    <router-link :to="goalsPath" class="lateralPanelOption">
                      <svg class="feather-menu">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
                      </svg>
                      <span class="lateralMenuLink text-dark">Goals</span>
                    </router-link>
                  </a>
                  <a class="dropdown-item" href="#">
                    <router-link :to="boardPath" class="lateralPanelOption">
                      <svg class="feather-menu">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
                      </svg>
                      <span class="lateralMenuLink text-dark">Boards</span>
                    </router-link>
                  </a>
                  <a class="dropdown-item" href="#">
                    <router-link :to="usersPath" class="lateralPanelOption">
                      <svg class="feather-menu">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
                      </svg>
                      <span class="lateralMenuLink text-dark">Users</span>
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
            <div class="headerAccount">
              <Profile/>
            </div>
          </div>
        </div>
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
      mounted: function(){
        this.setInvitationsNumber()
        this.getAndSetActiveProjects()
        
        firebase.auth().onAuthStateChanged(user => {
          const projectCode = this.$route.params.projectId
          this.usersPath = `/dashboard/project/${projectCode}/membership`
          this.feedPath = `/dashboard/project/${projectCode}/feed`
          this.boardPath = `/dashboard/project/${projectCode}/board`
          this.goalsPath = `/dashboard/project/${projectCode}/goals`
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