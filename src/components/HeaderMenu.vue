<template>
  <div>
    <div class="headerMenu">
      <div class="headerWrapper">
        <div class="headerBrand">
          <router-link to="/dashboard/select">
            <img src="@/assets/isotipe-color.svg" width="48px">
          </router-link>
          <input type="text" 
          class="form-control-navbar inputSearch" 
          placeholder="Busca aquí usuarios" 
          spellcheck="false" 
          autocomplete="off" 
          v-model="searchWord" 
          @keyup.enter="searchWordOnApp">
        </div>
      </div>
      <div class="headerWrapperRight">
        <Profile :invitations="true"/>
        <!-- <a class="headerMenuButton" @click="openOverlayMenu">
          <svg class="feather-light">
            <use xlink:href="@/assets/svg/feather-sprite.svg#menu" />
          </svg>
        </a> -->
      </div>
    </div>
  </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/HeaderMenu.css'

    import Profile from '@/components/Profile.vue'
    import BannerNotice from '@/components/models/BannerNotice.vue'

    export default {
      data(){
        return {
          activeProjects: '',
          currentProjectName: '',
          usersPath: '',
          feedPath: '',
          boardPath: '',
          goalsPath: '',
          invitations: '',
          searchWord: ''
        }
      },
      components: {
        Profile,
        BannerNotice
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
          document.getElementById('overlayMenu').classList.toggle('overlayMenu');
        },
        searchWordOnApp: function(){
          window.location = `/dashboard/search/q=${this.searchWord}`;
        }
      }
    }

</script>