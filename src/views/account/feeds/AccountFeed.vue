<template>
  <div class="account-feed" id="accountFeed">

    <div class="preloader-wall" id="preloaderWall">
      <div class="preloader">
        <img src="@/assets/isotipe-color.svg" class="planet">
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


    <div class="screenContent">

      <Profile/>

      <div class="dashboardContent">
      <LateralPanel/>

        <div class="feed-card-bg" id="bgNoneProjects">
          <div class="image-representation">
            <img src="@/assets/ilustrations/born-robot.png" alt="Robot despertando">
          </div>
          <div class="content-instruct">
            <h3 style="color: #f2f2f2">Parece que aún no tienes proyectos nuevos</h3>
            <p>¿Qué te parece si empezamos de una vez?</p><br>

            <a href="#" class="btn btn-success btn-lg" style="width: 318px; display: flex; justify-content: space-around; align-items: center">
              <router-link to="/create/project">Crea un nuevo proyecto</router-link>
            </a>
          </div>
        </div>

        <div class="projectsField" id="projectsContent">
          <h2>¿Qué idea vas a potenciar ahora?</h2><br>
          <div id="projectsField">

            <ul style="list-style: none">
              <li class="project-el" v-for="project in projects" :key="project">
                <router-link :to="`/project/${project.id}/feed`">
                  <div class="card project-card" style="width: 17rem; margin-right: 1rem">
                    <div class="card-body">
                      <h6 class="card-title">{{project['name']}} <span class="badge badge-pill badge-secondary"><strong>Activo</strong></span></h6>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul> 

            <!-- <router-link to="/create/project">
              <div class="card project-card" style="width: 22rem; margin-right: 1rem;">
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
            </router-link> -->

          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  
  // import '@/assets/scripts/setProjectsListOnFeed.js'

  import UserNavbar from '@/components/UserNavbar.vue'
  import LateralPanel from '@/components/LateralPanel.vue'
  import Profile from '@/components/Profile.vue'
  import firebase from 'firebase'

  import '@/assets/css/feed.css'
  import '@/assets/css/mediaqueries.css'

  export default {
    name: 'account_feed',
    data(){
      return {
        projects: []
      }
    },
    components: {
      UserNavbar,
      LateralPanel,
      Profile
    },
    mounted: function() {
      let preloaderWall = document.querySelector('#preloaderWall')
      setTimeout(() => preloaderWall.style.display = 'none', 2000)
      this.setProjectsOnListFeed()
    },
    methods: {
      setProjectsOnListFeed: function(){
        
        firebase.auth().onAuthStateChanged(user => {
          firebase.firestore().collection('projects').get()
            .then(projects => {
              let count = 0
              projects.forEach(project => {
                if(project.data()['admin'][0] == user.uid){

                    this.projects.push({
                      name: project.data()['shortName'],
                      id: project.id
                    })

                    count += 1
                }
              })

              if (count == 0){
                let bannerForZeroProjects = document.getElementById('bgNoneProjects')
                bannerForZeroProjects.style.display = 'flex'

                let projectListOnScreen = document.getElementById('projectsContent')
                projectListOnScreen.style.display = 'none'
              } if(count >= 1) {
                  let screenToSelectaProject = document.getElementById('projectLayout')
                  screenToSelectaProject.style.display = 'flex'
                }
            })
        })
      }
    }
  }

</script>

