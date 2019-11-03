<template>
  <div id="feed">
    <div class="screenContent">
      <Profile />
      
      <div class="dashboardContent">
        <LateralPanel/>
        <GeneralStatistic/>

        <div class="projectSummaryData">
          <ProjectUsers/>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

  import UserNavbar from "@/components/UserNavbar.vue";
  import LateralPanel from "@/components/LateralPanel.vue";
  import Profile from "@/components/Profile.vue";
  import GeneralStatistic from "@/components/project/statistics/GeneralStatistic.vue";
  import ProjectUsers from "@/components/project/statistics/ProjectUsers.vue";

  import "@/assets/css/main.css";
  import "@/assets/css/feed.css";

  export default {
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
      }
    }
  }

</script>