<template>
  <div id="select-project">
    <Profile/>
    <div class="preloader-wall" id="preloaderWall">
      <div class="preloader">
        <img class="planet" src="@/assets/isotipe-color.svg" alt="Isotipo de Recognizify">
      </div>
    </div>
    <div class="screenContent">
      <div class="dashboardContent">

        <LateralPanel/>
        <div class="nonProjectsBanner" id="bgNoneProjects" v-if="projects.length == 0">
          <div class="image-representation">
            <img src="@/assets/ilustrations/born-robot.png" alt="Robot despertando" />
          </div>
          <div class="content-instruct">
            <img src="@/assets/logo-white-cutted.png" alt="Logotipo de Recognizify" width="162px" style="margin-bottom: 16px">
            <h3 style="color: #f2f2f2">Parece que aún no tienes proyectos nuevos</h3>
            <p>¿Qué te parece si empezamos de una vez?</p>
            <br>

            <a href="#" class="btn btn-success btn-lg" style="width: 318px; display: flex; justify-content: space-around; align-items: center">
              <router-link class="text-white" to="/create/project">Crea un nuevo proyecto</router-link>
            </a>
          </div>
        </div>

        <div class="projectsField" id="projectsContent">
          <img src="@/assets/ilustrations/selection.png" alt="Personas seleccionando una opción entre una lista" width="347px">
          <h2>¿En qué idea trabajarás ahora?</h2>
          <p>Selecciona uno de tus proyectos o de los que haces parte</p>
          <br>

          <div id="projectsField">
            <ul style="list-style: none">
              <li class="project-el" :key="project" v-for="project in projects">
                <router-link :to="`/project/${project.id}/feed`">
                  <div class="card project-card" style="width: 17rem; margin-right: 1rem">
                    <div class="card-body">
                      <h6 class="card-title">
                        {{project['name']}}
                        <span class="badge badge-pill badge-secondary">
                          <strong>Activo</strong>
                        </span>
                      </h6>
                    </div>
                  </div>
                </router-link>
              </li>
              
              <li class="project-el">
                <router-link to="/create/project">
                  <div class="card project-card" style="width: 17rem; margin-right: 1rem; background: #7100EA;">
                    <div class="card-body">
                      <h6 class="card-title text-white">
                        <svg class="feather-light">
                          <use xlink:href="@/assets/svg/feather-sprite.svg#plus"></use>
                        </svg>
                        Agregar un proyecto
                      </h6>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import firebase from "firebase";
    import '@/assets/css/feed.css'

    import Profile from '@/components/Profile.vue'
    import LateralPanel from '@/components/LateralPanel.vue'

    export default {
    data() {
      return {
        projects: []
      }
    },
    components: {
      Profile,
      LateralPanel
    },
    mounted: function() {
      let preloaderWall = document.querySelector("#preloaderWall")
      setTimeout(() => (preloaderWall.style.display = "none"), 700)
      this.setProjectsOnListFeed()
    },
    methods: {
        setProjectsOnListFeed: function() {
          firebase.auth().onAuthStateChanged(user => {
            firebase.firestore()
            .collection("projects")
            .get()
            .then(projects => {
                let count = 0;
                projects.forEach(project => {
                  firebase.firestore().collection("projects").doc(project.id).collection("members").get()
                    .then(members => {
                      members.forEach(member => {
                        if (member.id == user.uid) {
                          this.projects.push({
                            name: project.data()["shortName"],
                            id: project.id
                          })
                          
                          count += 1;
                        }
                      })
                    })

                  if (project.data()["admin"][0] == user.uid) {
                      this.projects.push({
                        name: project.data()["shortName"],
                        id: project.id
                      })
                      count += 1;
                  }
                })

                if (count == 0) {
                  let bannerForZeroProjects = document.getElementById("bgNoneProjects")
                  bannerForZeroProjects.style.display = "flex"
                  let projectListOnScreen = document.getElementById("projectsContent")
                  projectListOnScreen.style.display = "none"
                }
            })

          })
        }
    }
    }
</script>