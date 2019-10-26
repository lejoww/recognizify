<template>
    <div class="lateral-menu-container">
        <div class="lateral-menu-header">
          <img src="@/assets/logo-common-cutted.svg" width="147px" alt="Logotipo de Recognizify">
        </div>

        <div class="lateral-menu-body">
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
            <span class="lateralMenuLink">Configuración</span>
          </router-link>

          <router-link to="#" class="lateralPanelOption">
            <svg class="feather-menu">
              <use xlink:href="@/assets/svg/feather-sprite.svg#package" />
            </svg>
            <span class="lateralMenuLink">Tienda de paquetes</span>
          </router-link>

          <br><div class="text-muted">Módulos</div>
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
          boardPath: ''
        }
      },
      created(){
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
        }
      }
    }

</script>