<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-flexible">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Activar navegación">
        <span>
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><router-link v-bind:to="feedPath">Resumen</router-link></a>
          </li>
          <li>
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><router-link v-bind:to="boardPath">Boards</router-link></a>
          </li>
          <li>
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Emocionalidad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Tareas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><router-link v-bind:to="usersPath">Usuarios</router-link></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
    import firebase from "firebase";
    import "@/assets/css/main.css";
    import "@/assets/css/mediaqueries.css";
    import "@/assets/scripts/checkActiveSession.js";
    import "@/assets/scripts/setProfileMenuFunction.js";

    export default {
        data() {
            return {
                username: "",
                currentProjectName: "",
                usersPath: "",
                feedPath: "",
                boardPath: ""
            };
        },

        methods: {
            closeSession: function() {
                firebase.auth().signOut()
                    .then((window.location = "/"));
            }
        }
    }
</script>
