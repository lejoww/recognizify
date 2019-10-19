<template>
  <div class="account-feed" id="accountFeed">

    <div class="preloader-wall" id="preloaderWall">
      <div class="preloader">
        <img src="@/assets/Brand-planet.png" class="planet">
      </div>
    </div>

    <div class="modal fade" id="deleteProjectModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="border-bottom: none;">
                    <h5 class="modal-title" id="exampleModalLabel">¿Qué le pasó a tu idea?</h5>
                </div>
            <div class="modal-body">
              <p>Parece que no salió algo bien, debes de pasar por una prueba antes de cancelar tu proyecto.</p>
            </div>
                <div class="modal-footer" style="border-top: none;">
                    <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger">Comenzar prueba</button>
                </div>
            </div>
        </div>
    </div>

    <LateralPanel/>
    <Profile/>

    <div class="dashboardContent">

      <div class="feed-card-bg" id="bgNoneProjects">
        <div class="image-representation">
          <img src="@/assets/ilustrations/born-robot.png" alt="Robot despertando">
        </div>
        <div class="content-instruct">
          <h3 style="color: #f2f2f2">Parece que aún no tienes proyectos nuevos</h3>
          <p>¿Qué te parece si empezamos de una vez?</p><br>

          <a href="/create/project" class="btn btn-success btn-lg" style="width: 318px; display: flex; justify-content: space-around; align-items: center">
            Crea un nuevo proyecto
          </a>
        </div>
      </div>

      <div class="layoutContainer" id="projectLayout">
        <div class="projectsField" id="projectsContent">
          <h2>¿Qué idea vas a potenciar ahora?</h2><br>
          <div id="projectsField">
            
            <!-- there are other projects -->
            <!-- ------------------------ -->

            <a href="/create/project">
              <div class="card project-card" style="width: 22rem; margin-right: 1rem">
                <div class="card-body">

                  <h6 class="card-title">
                    <span>
                      <svg id="i-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#14141f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5">
                        <path d="M16 2 L16 30 M2 16 L30 16" />
                      </svg>
                    </span>
                    Agrega un nuevo proyecto
                  </h6>
                </div>
              </div>
            </a>

          </div>
        </div>
<!-- 
          <div class="layoutCard bg-primary" style="color: #fff">
            <h6 style="font-weight: 600">Hola, Bienvenido a Beta</h6>
            <p>RecognizifyBETA es el proyecto de la aplicación para que los usuarios puedan calificar nuestra aplicación en varias áreas, de este modo, nosotros podemos recolectar datos y mejorar lo que sea necesario para la salida de la aplicación oficial.</p>
            <button class="btn btn-warning btn-sm">Calificar la app</button>
          </div> -->
      </div>
    </div>

  </div>

</template>
<script>

  import UserNavbar from '@/components/UserNavbar.vue'
  import LateralPanel from '@/components/LateralPanel.vue'
  import Profile from '@/components/Profile.vue'
  import firebase from 'firebase'

  import '@/assets/scripts/setProjectsListOnFeed.js'
  import '@/assets/css/feed.css'
  import '@/assets/css/mediaqueries.css'

  export default {
    name: 'account_feed',
    components: {
      UserNavbar,
      LateralPanel,
      Profile
    },
    mounted: function() {
      let preloaderWall = document.querySelector('#preloaderWall')
      setTimeout(() => preloaderWall.style.display = 'none', 2000)
    }
  }

</script>

