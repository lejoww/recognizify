<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
  button:focus,
  a:focus, 
  button:active, 
  a:active, 
  button::after,
  button::after,
  .btn.active.focus,
  .btn.active:focus, 
  .btn.focus, 
  .btn:active.focus, 
  .btn:active:focus, 
  .btn:focus {
      outline: 0;
      box-shadow: none;
  }
</style>
<script>


  import '@/assets/dist/css/bootstrap.css'
  import '@/assets/dist/js/bootstrap.js'
  import '@/assets/css/main.css'
  import '@/assets/scripts/firebase-init.js'
  
  export default {}

</script>

