<template>
    <div class="lateral-menu-container">
      <div class="lateral-menu-bg-correction">
        <div class="markup-container">
          <img class="logo" src="@/assets/isotipe-color.svg" width="60px" alt="Recognizify">
        </div>
        <a href="/feed" class="lateralPanelOption" data-toggle="tooltip" data-placement="right" title="Inicio">
          <svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#f9f8fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
              <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
          </svg>
        </a>

        <a href="/notifications" class="lateralPanelOption" data-toggle="tooltip" data-placement="right" title="Notificaciones">
          <svg id="i-msg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#f9f8fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
            <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
          </svg>
        </a>

        <a href="#" class="lateralPanelOption" data-toggle="tooltip" data-placement="right" title="Configuración">
          <svg id="i-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#f9f8fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
              <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
              <circle cx="16" cy="16" r="4" />
          </svg>
        </a>

        <a href="#" class="lateralPanelOption" data-toggle="tooltip" data-placement="right" title="Módulos de la comunidad">
          <svg id="i-tag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#f9f8fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
              <circle cx="24" cy="8" r="2" />
              <path d="M2 18 L18 2 30 2 30 14 14 30 Z" />
          </svg>
        </a>

        <!-- <a href="lateralPanelOption"><img src="@/assets/svg/home.svg"></a>
        <a href="lateralPanelOption"><img src="@/assets/svg/home.svg"></a>
        <a href="lateralPanelOption"><img src="@/assets/svg/home.svg"></a> -->
      </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/feed.css'
    import '@/assets/css/mediaqueries.css'
    export default {
      data(){
        return {
          activeProjects: '',
          currentProjectName: '',
          usersPath: '',
          feedPath: ''
        }
      },
      created(){
        this.getAndSetActiveProjects()
      },
      methods: {
        getAndSetActiveProjects: function(){
          firebase.auth().onAuthStateChanged(user => {
            firebase.firestore().collection('users').doc(user.uid).collection('projects').get()
              .then(activeProjects => {
                this.activeProjects = activeProjects.docs.length
              })
          })
        }
      }
    }

</script>