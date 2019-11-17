<template>
  <div id="feed">
      <div class="dashboardContent">

          <!-- <div class="projectSummaryTitle">
            <h3 v-text="projectName"></h3>
          </div> -->
          <FeaturedGoal/>
          <div class="projectSummaryData">
            <ProjectUsers/>
            <GeneralStatistic/>
          </div>
      </div>
  </div>
</template>
<script>

  import firebase from 'firebase'

  import UserNavbar from "@/components/UserNavbar.vue";
  import LateralPanel from "@/components/LateralPanel.vue";
  import Profile from "@/components/Profile.vue";
  import GeneralStatistic from "@/components/project/statistics/GeneralStatistic.vue";
  import ProjectUsers from "@/components/project/statistics/ProjectUsers.vue";
  import FeaturedGoal from "@/components/project/FeaturedGoal.vue";
  import BurgerMenu from "@/components/BurgerMenu.vue"

  import Vue from 'vue'

  import "@/assets/css/main.css";
  import "@/assets/css/feed.css";
  import "@/assets/css/lateralMenu.css";

  export default {
    data() {
      return {
        projectName: ''
      }
    },
    components: {
      UserNavbar,
      LateralPanel,
      Profile,
      GeneralStatistic,
      ProjectUsers,
      FeaturedGoal,
      BurgerMenu
    },
    created: function() {
      if (this.$route.params["projectId"] == 'undefined') {
        this.$router.push('/dashboard/select')
      } else {
        this.setProjectName()
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
      }
    }
  }
  
</script>