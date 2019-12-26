<template>
    <div class="projectFeedPanel">
        <ProjectName/>
    </div>
</template>
<script>

  import ProjectName from '@/components/models/ProjectName.vue'

  import '@/assets/css/projectPanel.css'
  export default {
      components: {
          ProjectName
      }
  }

</script>