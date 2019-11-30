<template>
      <div class="dashboardContent">
          
          <NonProjectsBanner v-if="projects.length == 0"/>
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
    import NonProjectsBanner from '@/components/project/NonProjectsBanner.vue'

    import '@/assets/css/select.css'

    export default {
    data() {
      return {
        projects: []
      }
    },
    components: {
      ProjectCard,
      NonProjectsBanner
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
                  .then(url => this.setProjectOnArray(project.data()["shortName"], project.id, url))
                  .catch(() => this.setProjectOnArray(project.data()["shortName"], project.id, 'https://source.unsplash.com/800x500/?work,innovation,friends'))
                  
                  count += 1;
                }
              })
            })
          })
        })
      },
      setProjectOnArray: function(name, id, url){
        this.projects.push({
          name: name,
          id: id,
          photoUrl: url
        })
      }
    }
  }
</script>