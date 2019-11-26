<template>
  <div class="headerMenu">
    <div class="headerWrapper">
      <div class="headerBrand">
        <img src="@/assets/logo-white-cutted.svg" width="142px">
      </div>
      <div class="headerSearch">
        <input type="text" class="form-control-navbar inputSearch" placeholder="Buscar en tus proyectos...">
      </div>
    </div>
    <div class="headerWrapperRight">
      <a class="headerMenuButton" @click="openOverlayMenu">
        <svg class="feather-light">
          <use xlink:href="@/assets/svg/feather-sprite.svg#menu" />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/lateralMenu.css'

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
        openOverlayMenu: function(){
          document.getElementById('overlayMenu').classList.toggle('show');
        }
      }
    }

</script>