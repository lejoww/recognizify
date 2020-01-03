<template>
      <div class="dashboardContent">

          <NonProjectsBanner v-if="projects.length == 0"/>
          <div class="projectsField" id="projectsContent" v-if="projects.length >= 1">
            <WeeklyArticleCard/>
            <div class="projectsBanner">
              <div>
                <h1 class="projectsHeaderTitle">Tus proyectos</h1>
                <p class="muted-gray">¿En que idea trabajarás ahora? Selecciona uno de tus proyectos.</p>
              </div>
              <a class="btn btn-success btn-lg" style="display:flex; align-items:center">
                <router-link to="/account/create/project">
                  <svg width="24px" height="24px" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#plus" />
                  </svg>
                </router-link>
              </a>
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
              </ul>
            </div>
        </div>
      </div>
</template>
<script>

    import firebase from "firebase";
    import ProjectCard from '@/components/ProjectCard.vue';
    import NonProjectsBanner from '@/components/project/NonProjectsBanner.vue';
    import WeeklyArticleCard from '@/components/offers/WeeklyArticleCard.vue';

    import '@/assets/css/select.css'

    export default {
    data() {
      return {
        projects: []
      }
    },
    components: {
      ProjectCard,
      NonProjectsBanner,
      WeeklyArticleCard
    },
    created: function() {
      this.getProjects()
    },
    methods: {
      getProjects: function() {
          firebase.firestore()
          .collection("projects")
          .get()
          .then((projects) => {
            this.checkProjectsProperty(projects)
          })
      },
      checkProjectsProperty: function(data){
        let count = 0;
        data.forEach(project => {
          firebase.firestore()
          .collection("projects")
          .doc(project.id)
          .collection("members")
          .get()
          .then(members => {
            members.forEach(member => {
              if (member.id == firebase.auth().currentUser.uid) {
                firebase.storage().ref(`projects/${project.id}/project_photo`).getDownloadURL()
                .then(url => this.setProjectOnArray(project.data()["shortName"], project.id, url))
                .catch(() => this.setProjectOnArray(project.data()["shortName"], project.id, 'https://source.unsplash.com/800x500/?work,innovation,idea'))
                count += 1;
              }
            })
          })
          .catch(() => window.location.reload())
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