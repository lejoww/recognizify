<template>
  <div id="app">
    <router-view></router-view>
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
  // import '@/assets/css/main.css'
  import '@/assets/scripts/firebase-init.js'

  // sentry js 
  import Vue from 'vue'
  import * as Sentry from '@sentry/browser';
  import * as Integrations from '@sentry/integrations';
  
  export default {
    created: function() {
      Sentry.init({
        dsn: 'https://0c68947d76d94ace9d73404cba4b4ce1@sentry.io/1805391',
        integrations: [new Integrations.Vue({Vue, attachProps: true})],
        // beforeSend(event, hint) {
        //   if (event.exception) {
        //     Sentry.showReportDialog({
        //       title: "¿Acabas de encontrar un error?",
        //       eventId: event.event_id
        //     });
        //   }
        //   return event;
        // }
      })
    }
  }

</script>

