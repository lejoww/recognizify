<template>
      <div class="dashboardContent">

          <div class="nonProjectsBanner" id="bgNoneProjects" v-if="projects.length == 0">
            <div class="image-representation">
              <img src="@/assets/ilustrations/born-robot.png" alt="Robot despertando" />
            </div>
            <div class="content-instruct">
              <img src="@/assets/logo-white-cutted.png" alt="Logotipo de Recognizify" width="162px" style="margin-bottom: 16px">
              <h3 style="color: #f2f2f2">Parece que aún no tienes proyectos nuevos</h3>
              <p style="text-align: left">¿Qué te parece si empezamos de una vez?</p>
              <br>

              <a href="#" class="btn btn-success btn-lg" style="width: 318px; display: flex; justify-content: space-around; align-items: center; cursor: pointer;">
                <router-link class="text-white" to="/account/create/project">Crea un nuevo proyecto</router-link>
              </a>
            </div>
          </div>
          
          <div class="projectsField" id="projectsContent" v-if="projects.length >= 1">
            <div class="projectsBanner">
              <h3>¿En qué idea trabajarás ahora?</h3>
              <span class="text-muted">Selecciona uno de tus proyectos o de los que haces parte</span>
            </div>

            <br>
            <div class="projectsList">
              <ul style="list-style: none">
                <li class="project-el" :key="project" v-for="project in projects">
                  <a :href="`/dashboard/project/${project.id}/feed`">
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
                  </a>
                </li>
                
                <li class="project-el">
                  <router-link to="/account/create/project">
                    <div class="card project-card" style="width: 17rem; margin-right: 1rem; background: #7100EA;">
                      <div class="card-body">
                        <h6 class="card-title text-white">
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
</template>
<script>

    import firebase from "firebase";
    import '@/assets/css/feed.css'

    export default {
    data() {
      return {
        projects: []
      }
    },
    mounted: function() {
      // let preloaderWall = document.querySelector("#preloaderWall")
      // setTimeout(() => (preloaderWall.style.display = "none"), 700)
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