<template>
      <div class="dashboardContent">

          <div class="nonProjectsBanner" id="bgNoneProjects" v-if="projects.length == 0">
            <div class="image-representation">
              <img src="@/assets/ilustrations/born-robot.png" alt="Robot despertando" />
            </div>
            <div class="content-instruct">
              <img src="@/assets/logo-white-cutted.png" alt="Logotipo de Recognizify" width="162px" style="margin-bottom: 16px">
              <h3 style="color: #f2f2f2">Parece que aún no tienes proyectos nuevos</h3>
              <p style="text-align: left">¿Qué tal si empezamos de una vez?</p>
              <br>

              <a href="#" class="btn btn-success btn-lg" style="width: 318px; display: flex; justify-content: space-around; align-items: center; cursor: pointer;">
                <router-link class="text-white" to="/account/create/project">Crea un nuevo proyecto</router-link>
              </a>
            </div>
          </div>
          
          <div class="projectsField" id="projectsContent" v-if="projects.length >= 1">
            <div class="projectsBanner">
              <h2>Tus proyectos</h2>
              <span class="muted-gray">¿En que idea trabajarás ahora? Selecciona uno de tus proyectos.</span>
            </div>

            <br>
            <div class="projectsList">
              <ul class="projectListElements" style="list-style: none">
                <ProjectCard 
                  :key="project" 
                  v-for="project in projects"
                  :projectName="project['name']"
                  :projectPhotoUrl="project['photoUrl']"
                  :projectId="project['id']"
                  lastActivity="7 minutos"
                />

                <li class="project-el">
                  <a :href="`/account/create/project`">
                    <div class="card projectCard mb-3" style="width: 380px; background: #0c1532; padding-left: 1em">
                      <div style="display: flex; align-items: center">
                        <div>
                          <img class="card-img projectIcon" src="@/assets/ilustrations/modules/AirplaneIcon.png">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title text-white" style="font-weight: 800">Crea un nuevo proyecto</h5>
                          <p class="card-text"><small class="text-white">Deja ver tus ideas</small></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
        </div>
      </div>
</template>
<script>

    import firebase from "firebase";
    import ProjectCard from '@/components/ProjectCard.vue';

    import '@/assets/css/select.css'

    export default {
    data() {
      return {
        projects: []
      }
    },
    components: {
      ProjectCard
    },
    beforeMount: function() {
      this.getProjects()
    },
    methods: {
      getProjects: function() {
          firebase.firestore()
          .collection("projects")
          .get()
          .then(projects => this.checkProjectsProperty(projects))
      },
      checkProjectsProperty: function(data){
        firebase.auth().onAuthStateChanged(user => {
          let count = 0;
          data.forEach(project => {
            firebase.firestore()
            .collection("projects")
            .doc(project.id)
            .collection("members")
            .get()
            .then(members => {
              members.forEach(member => {
                if (member.id == user.uid) {
                  firebase.storage().ref(`projects/${project.id}/project_photo`).getDownloadURL()
                  .then(url => {
                    this.projects.push({
                      name: project.data()["shortName"],
                      id: project.id,
                      photoUrl: url
                    })
                  })
                  count += 1;
                }
              })
            })
          })
        })
      },
      showNonProjectsBanner: function(){
        document.getElementById("bgNoneProjects").style.display = "flex";
        document.getElementById("projectsContent").style.display = "none";
      }
    }
  }
</script>