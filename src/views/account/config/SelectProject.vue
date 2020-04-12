<template>
      <div class="dashboardContent">
          <!-- <Preloader/> -->
          <!-- <Features/> -->

          <NonProjectsBanner /> 
          <!-- v-if="projects.length == 0" -->
          <div class="rowStructure">
            <div class="helperCard">
              <WeeklyArticleCard/>
              <div class="asesor">
                <img src="@/assets/ilustrations/person-working.png" alt="">
                <div style="width: 64%">
                  <h5 style="font-weight: 800; text-transform: uppercase; font-size: 14px; color: #645B8C">
                    ¿Necesitas asesoramiento para tu proyecto?
                  </h5>
                  <p style="font-size: 21px; font-weight: 900">Estamos para ayudarte, dentro de poco tiempo ofreceremos servicio al ciente para tu proyecto.</p>
                  <button class="btn btn-primary" @click="() => {this.notification = true}">{{this.notification == true ? 'Te notificaremos' : 'Notificarme'}}</button>
                </div>
              </div>
            </div>
            <div class="projectsField" id="projectsContent" v-if="projects.length >= 1">
              <div class="projectsBanner">
                <div>
                  <h2 class="projectsHeaderTitle">Proyectos</h2>
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
                    lastActivity="un tiempo"
                  />
                </ul>
              </div>
          </div>
        </div>
      </div>
</template>
<script>

    import firebase from "firebase";

    import ProjectCard from '@/components/ProjectCard.vue';
    import NonProjectsBanner from '@/components/project/NonProjectsBanner.vue';
    import WeeklyArticleCard from '@/components/offers/WeeklyArticleCard.vue';
    import Preloader from '@/components/Preloader.vue';
    import Features from '@/components/modals/Features.vue';

    import '@/assets/css/select.css'

    export default {
      data() {
        return {
          projects: [],
          notification: false
        }
      },
      components: {
        ProjectCard,
        NonProjectsBanner,
        WeeklyArticleCard,
        Preloader,
        Features
      },
      mounted: function() {
        firebase.firestore()
          .collection("projects")
          .get()
          .then((projects) => {
            this.checkProjectsProperty(projects)
        })
      },
      methods: {
        checkProjectsProperty: function(data){
          let count = 0;
          data.forEach(project => {
            firebase.firestore()
            .collection("projects")
            .doc(project.id)
            .collection("members")
            .get()
            .then((members) => {
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
            photoUrl: url,
          })
        }
      }
    }
</script>