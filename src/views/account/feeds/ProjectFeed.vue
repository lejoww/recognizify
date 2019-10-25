<template>
  <div id="feed">
    <div class="screenContent">
      <Profile />
      
      <div class="dashboardContent">
      <LateralPanel/>

        <div class="projectSummaryPurpleCard">
          <h2 class="text-white" v-text="projectName"></h2>
          <p class="text-white">Próximamente aquí tendrás estadisticas de tu proyecto.</p>
          <!-- <canvas width="100%" height="100%" id="canvas"></canvas> -->
        </div>

        <div class="projectSummaryData">
          <div class="projectSummaryCard">
            <h4 class="muted-gray">Usuarios registrados</h4>
            <hr />
            <div class="scrollable">
              <ol class="usersList" id="usersList"></ol>
            </div>
          </div>

          <div class="projectSummaryCard">
            <h2>Boards</h2>
            <h4 class="muted-gray">Visita uno de los módulos. Accede desde el menú superior</h4>
            <!-- <img
              class="projectSummaryImageOnCard"
              src="@/assets/ilustrations/meeting.png"
              alt="Meeting de empresa"
              width="312px"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import firebase from "firebase";
  import Chart from "chart.js";

  import UserNavbar from "@/components/UserNavbar.vue";
  import LateralPanel from "@/components/LateralPanel.vue";
  import Profile from "@/components/Profile.vue";

  import "@/assets/css/main.css";
  export default {
    data() {
      return {
        projectName: "",
        pic: "",
        usersOnCurrentProject: ""
      }
    },
    components: {
      UserNavbar,
      LateralPanel,
      Profile
    },
    mounted: function() {
      this.getProjectMembers();
      this.setProjectImageAndName();
      this.setYourselfOnList();
      // this.setStadistic()
    },
    methods: {
      getProjectMembers: function() {
        firebase.auth().onAuthStateChanged(user => {
          let projectid = this.$router.history.current.params["projectId"];
          
          firebase.firestore()
            .collection("projects")
            .doc(projectid)
            .collection("members")
            .get()
            .then(members => {
              members.docs.length >= 1 ? this.setProjectMembers(members) : (this.usersOnCurrentProject = 0)
            })
        })
      },

      setProjectMembers: function(members) {
        let memberList = members.docs
        let memberField = document.getElementById("usersList")

        members.docs.forEach(member => {
          let elementToInsert = `
            <li>
              <div class="userPhoto">${member.data()["name"].charAt()}</div>
              <div class="userInfo">
                <div class="userName">
                  ${member.data()["name"]}
                  <span class="badge badge-success">
                    ${member.data()["user"] ? "@" + member.data()["user"] : "No tiene usuario"}
                  </span>
                </div>
              </div>
            </li>
          `
          memberField.insertAdjacentHTML("beforeend", elementToInsert)
        })
      },

      setYourselfOnList: function() {
        firebase.auth().onAuthStateChanged(user => {
          firebase.firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then(userdata => {
              let memberField = document.getElementById("usersList");
              let elementToInsert = `
                <li>
                  <div class="userPhoto">${userdata.data()["name"].charAt()}</div>
                  <div class="userInfo">
                    <div class="userName">
                      ${userdata.data()["name"]}
                      <span class="badge badge-success">
                        ${userdata.data()["user"] ? "@" + userdata.data()["user"] : "No tiene usuario"}
                      </span>
                    </div>
                  </div>
                </li>
              `
              memberField.insertAdjacentHTML("beforeend", elementToInsert)
            })
        })
      },

      setProjectImageAndName: function() {
        this.projectuid = this.$router.history.current.params["projectId"]
        firebase.storage()
          .ref(`/projects/${this.projectuid}/project_photo`)
          .getDownloadURL()
          .then(pic => {
            document.getElementById("projectHeader").style.backgroundImage = `url('${pic}')`
          })

        firebase.auth().onAuthStateChanged(user => {
          firebase.firestore()
            .collection("projects")
            .doc(this.projectuid)
            .get()
            .then(res => (this.projectName = res.data()["shortName"]))
        })
      }
    }
  }
</script>