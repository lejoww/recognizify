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

  import Vue from 'vue'
  import '@/assets/dist/css/bootstrap.css'
  import '@/assets/dist/js/bootstrap.js'
  import '@/assets/css/main.css'
  import '@/assets/scripts/firebase-init.js'

  // sentry js 
  import * as Sentry from '@sentry/browser'
  import * as Integrations from '@sentry/integrations'

  Sentry.init({
    dsn: 'https://7b994449f84e45d59ebd974c5cdefdcb@sentry.io/1805378',
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
  })
  
  export default {}

</script>

