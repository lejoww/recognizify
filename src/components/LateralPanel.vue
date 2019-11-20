<template>
    <div class="headerMenu" id="sidebarMenu">
      <div class="headerCentre">
        <div class="headerWrapper">
          <div class="headerBrand">
            <img src="@/assets/logo-white-cutted.svg" width="142px">
          </div>

          <div class="drawable" id="drawable">
            <div class="headerSearch" id="headerSearch">
              <div class="searchInput">
                <input class="form-control-navbar" type="text" placeholder="Buscar en tus proyectos..." aria-label="Search" spellcheck="false" autocomplete="off">
              <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
              </div>
            </div>
            <div class="headerNav">
              <div class="headerNavList">
                <div @click="closeHeaderMenu">
                  <router-link :to="feedPath" class="lateralPanelOption">
                    <span class="lateralMenuLink">Resumen</span>
                  </router-link>
                </div>

                <div @click="closeHeaderMenu">
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
                  <a class="lateralPanelOption" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="lateralMenuLink text-white">Módulos</span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click="closeHeaderMenu">
                      <router-link :to="goalsPath" class="lateralPanelOption">
                        <span class="lateralMenuDropdownLink text-dark">Goals</span>
                        <div><small>Controla los objetivos</small></div>
                      </router-link>
                    </a>
                    <a class="dropdown-item" href="#" @click="closeHeaderMenu">
                      <router-link :to="boardPath" class="lateralPanelOption">
                        <span class="lateralMenuDropdownLink text-dark">Boards</span>
                        <div><small>Llama ideas en un tablero</small></div>
                      </router-link>
                    </a>
                    <a class="dropdown-item" href="#" @click="closeHeaderMenu">
                      <router-link :to="usersPath" class="lateralPanelOption">
                        <span class="lateralMenuDropdownLink text-dark">Users</span>
                        <div><small>Administra usuarios</small></div>
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
      <BurgerMenu/>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/lateralMenu.css'
    import '@/assets/css/mediaqueries.css'

    import Profile from '@/components/Profile.vue'
    import BurgerMenu from '@/components/BurgerMenu.vue'

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
        Profile,
        BurgerMenu
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
        },
        closeHeaderMenu: function(){
          // document.getElementById('sidebarMenu').style.position = 'absolute'
          // document.getElementById('sidebarMenu').style.left = '782px'
        }
      }
    }

</script>