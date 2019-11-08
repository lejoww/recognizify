<template>
  <div id="feed">
    <div class="screenContent">
      <Profile />
      
      <div class="dashboardContent">
        <LateralPanel/>
        
        <div class="projectSummaryTitle">
          <h3 v-text="projectName"></h3>
        </div>
        <GeneralStatistic/>

        <div class="projectSummaryData">
          <ProjectUsers/>
        </div>
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

  import Vue from 'vue'

  import "@/assets/css/main.css";
  import "@/assets/css/feed.css";

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
      ProjectUsers
    },
    created: function() {
      if (this.$route.params["projectId"] == 'undefined') {
        this.$router.push('/select')
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