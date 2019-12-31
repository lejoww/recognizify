<template>
  <div class="dashboardContent">

    <CreateProjectLinkModal/>
    <!-- <div class="projectSummaryTitle">
      <h3 v-text="projectName"></h3>
    </div> -->
    <div class="feedLayout">
      <!-- <GoalSteps/> -->
      <!-- <Renewing/> -->
      <div class="projectSummaryData">
        <!-- <GeneralStatistic/> -->
        <div class="rank">
          <!-- <FeaturedGoal/> -->
          <ActivityPoints/>
          <LastAd/>
        </div>
        <br>
        <span class="linksSectionTitle">
          Enlaces 
          <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#projectCardModal" style="margin-left: 0.3rem">
            Crear enlace
          </button>
        </span>
        <div class="projectCards">
          <LinkCard :key="link" v-for="link in links" :title="link.title" :description="link.description" :link="link.url" :id="link.id"/>
          <span v-if="links.length == 0" style="margin: 5px 10px; font-size: 14px">No hay enlaces aquí. Crea el primero ahí arriba</span>
        </div>
      </div>
      <ProjectPanel/>
    </div>
  </div>
</template>
<script>

  import firebase from 'firebase'

  import GeneralStatistic from "@/components/project/statistics/GeneralStatistic.vue";
  import ProjectUsers from "@/components/project/statistics/ProjectUsers.vue";
  import FeaturedGoal from "@/components/project/FeaturedGoal.vue";
  import Renewing from "@/components/offers/Renewing.vue";
  import AdsPanel from "@/components/project/AdsPanel.vue";
  import LinkCard from "@/components/project/LinkCard.vue";
  import CreateProjectLinkModal from "@/components/modals/CreateProjectLink.vue";
  import GoalSteps from '@/components/project/statistics/GoalSteps.vue';
  import Shortcuts from '@/components/project/Shortcuts.vue';
  import ProjectPanel from '@/components/project/ProjectPanel.vue';
  import ActivityPoints from '@/components/project/ActivityPoints.vue';
  import LastAd from '@/components/project/LastAd.vue';

  import Vue from 'vue'

  import "@/assets/css/main.css";
  import "@/assets/css/feed.css";

  import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'

  export default {
    data() {
      return {
        projectName: '',
        links: []
      }
    },
    components: {
      GeneralStatistic,
      ProjectUsers,
      FeaturedGoal,
      Renewing,
      AdsPanel,
      LinkCard,
      CreateProjectLinkModal,
      GoalSteps,
      Shortcuts,
      ProjectPanel,
      ActivityPoints,
      LastAd
    },
    mixins: [CheckProjectMember],
    created: function() {
      if (this.$route.params["projectId"] == 'undefined') {
        this.$router.push('/dashboard/select')
      } else {
        this.setProjectName()
        this.getLinks()
      }
    },
    methods: {
      setProjectName: function() {
          firebase.firestore()
          .collection("projects")
          .doc(this.$route.params.projectId)
          .get()
          .then(res => {
            this.projectName = res.data()["shortName"]
          })
      },
      getLinks: function(){
        firebase.firestore()
        .collection('projects')
        .doc(this.$route.params.projectId)
        .collection('links')
        .get()
        .then(links => {
          links.forEach(link => {
            this.links.push({
              title: link.data()['title'],
              description: link.data()['description'],
              url: link.data()['url'],
              id: link.id
            })
          })
        })
      }
    }
  }
  
</script>