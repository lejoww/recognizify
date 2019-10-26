<template>
  <div id="select-project">
    <div class="feed-card-bg" id="bgNoneProjects">
      <div class="image-representation">
        <img src="@/assets/ilustrations/born-robot.png" alt="Robot despertando" />
      </div>
      <div class="content-instruct">
        <h3 style="color: #f2f2f2">Parece que aún no tienes proyectos nuevos</h3>
        <p>¿Qué te parece si empezamos de una vez?</p>
        <br />

        <a
          href="#"
          class="btn btn-success btn-lg"
          style="width: 318px; display: flex; justify-content: space-around; align-items: center"
        >
          <router-link class="text-white" to="/create/project">Crea un nuevo proyecto</router-link>
        </a>
      </div>
    </div>
    <div class="projectsField" id="projectsContent">
      <Profile/>

      <img src="@/assets/ilustrations/selection.png" alt="Personas seleccionando una opción entre una lista" width="417px">
      <h2>¿En qué idea trabajarás ahora?</h2>
      <p>Selecciona uno de tus proyectos o de los que haces parte</p>
      <br />

      <div id="projectsField">
        <ul style="list-style: none">
          <li class="project-el" v-for="project in projects" :key="project">
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
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    import firebase from "firebase";
    import '@/assets/css/feed.css'

    import Profile from '@/components/Profile.vue'

    export default {
    data() {
        return {
        projects: []
        };
    },
    components: {
      Profile
    },
    mounted: function() {
        let preloaderWall = document.querySelector("#preloaderWall");
        setTimeout(() => (preloaderWall.style.display = "none"), 2000);
        this.setProjectsOnListFeed();
    },
    methods: {
        setProjectsOnListFeed: function() {
        firebase.auth().onAuthStateChanged(user => {
            firebase
            .firestore()
            .collection("projects")
            .get()
            .then(projects => {
                let count = 0;
                projects.forEach(project => {
                if (project.data()["admin"][0] == user.uid) {
                    this.projects.push({
                    name: project.data()["shortName"],
                    id: project.id
                    });
                    count += 1;
                }
                });

                if (count == 0) {
                let bannerForZeroProjects = document.getElementById(
                    "bgNoneProjects"
                );
                bannerForZeroProjects.style.display = "flex";
                let projectListOnScreen = document.getElementById(
                    "projectsContent"
                );
                projectListOnScreen.style.display = "none";
                }
                if (count >= 1) {
                let screenToSelectaProject = document.getElementById(
                    "projectLayout"
                );
                screenToSelectaProject.style.display = "flex";
                }
            })
        })
        }
    }
    }
</script>