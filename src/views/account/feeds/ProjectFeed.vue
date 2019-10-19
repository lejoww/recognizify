<template>
  <div id="feed">
    <LateralPanel/>

    <div class="dashboardContent">
      <div id="projectSummary">
        <UserNavbar />
        <Profile/>

        <!-- <div class="projectHeader" id="projectHeader">
          <div class="projectHeaderBackground">

          </div>
        </div> -->

        <div class="projectSummaryPurpleCard statisticalCard">
          <h2 class="text-white" v-text="projectName"></h2>
          <canvas width="100%" height="100%" id="canvas"></canvas>
        </div>

        <div class="projectSummaryData">
          <div class="projectSummaryCard">
            <h4 class="muted-gray">Usuarios registrados</h4>
            <hr>
            <ol class="usersList" id="usersList"></ol>
          </div>
        
          <div class="projectSummaryCard">
            <div class="rowContent">
              <div style="width: 40%; margin-right: 1rem">
                <h2>Boards</h2>
                <h4 class="muted-gray">Visita uno de los módulos. Accede desde el menú superior</h4>
              </div>
            </div>
            <img class="projectSummaryImageOnCard" src="@/assets/ilustrations/meeting.png" alt="Meeting de empresa" width="312px">
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
    import Profile from '@/components/Profile.vue' 

    import "@/assets/css/main.css";
    export default {
      data() {
          return {
            projectName: '',
            pic: '',
            usersOnCurrentProject: ''
          }
      },
      components: {
          UserNavbar,
          LateralPanel,
          Profile
      },
      mounted: function() {
          this.getProjectMembers()
          this.setProjectImageAndName()
          this.setYourselfOnList()
          this.setStadistic()
      },
      methods: {
          getProjectMembers: function() {
              firebase.auth().onAuthStateChanged(user => {
                  var urlCodeOnPath = this.$router.history.current.params['projectId']
                  firebase.firestore().collection('projects').doc(urlCodeOnPath).collection('members').get()
                    .then(data => {
                      if (data.docs.length >= 1){
                        this.usersOnCurrentProject = data.docs.length + 1
                        this.setProjectMembers(data)
                      } else {
                        this.usersOnCurrentProject = 0
                      }
                    })
              })
          },

          setProjectMembers: function(members) {
            let memberlist = members.docs
            let memberField = document.getElementById('usersList')
            memberlist.forEach(member => {
              memberField.insertAdjacentHTML('beforeend', `
                <li>
                  <div class="userPhoto">${member.data()['name'].charAt()}</div>
                  <div class="userInfo">
                    <div class="userName">
                      ${member.data()['name']}
                      <span class="badge badge-success">
                        ${member.data()['user'] ? '@' + member.data()['user'] : 'No tiene usuario'}
                      </span>
                    </div>
                  </div>
                </li>
              `)
            })
          },

          setYourselfOnList: function() {
            firebase.auth().onAuthStateChanged(user => {
              firebase.firestore().collection('users').doc(user.uid).get()
                .then(data => {
                  let memberField = document.getElementById('usersList')
                  memberField.insertAdjacentHTML('beforeend', `
                    <li>
                      <div class="userPhoto">${data.data()['name'].charAt()}</div>
                      <div class="userInfo">
                        <div class="userName">
                          ${data.data()['name']}
                          <span class="badge badge-success">
                            ${data.data()['user'] ? '@' + data.data()['user'] : 'No tiene usuario'}
                          </span>
                        </div>
                      </div>
                    </li>
                  `)  
                })
            })
          },
 
          setProjectImageAndName: function() {
            this.projectuid = this.$route.params.projectId
            firebase.storage().ref(`/projects/${this.projectuid}/project_photo`).getDownloadURL()
              .then(pic => {
                document.getElementById('projectHeader').style.backgroundImage = `url('${pic}')`
              })
            
            firebase.auth().onAuthStateChanged(user => {
              firebase.firestore().collection('users').doc(user.uid).collection('projects').doc(this.projectuid).get()
                .then(res => this.projectName = res.data()['shortName'])
            })
          },

          setStadistic() {
            var ctx = document.getElementById('canvas').getContext('2d');
            var myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                  datasets: [{
                      display: false,
                      label: 'Productividad en tu equipo',
                      data: [0, 1, 12, 18, 20, 56, 34, 59, 42, 29, 44, 87, 21, 32, 87, 98, 102],
                      borderColor: '#006AFF',
                      borderWidth: 2,
                      backgroundColor: '#5200B7'
                  }]
              },
              options: {
                backgroundColor: 'blue',
                responsive: true,
                maintainAspectRatio: false,
                  scales: {
                      yAxes: [{
                          ticks: {
                              display: false,
                              beginAtZero: true
                          },
                          gridLines: {
                            display: false,
                            color: "rgba(0, 0, 0, 0)"
                          }
                      }],
                      xAxes: [{ 
                        gridLines: {
                          display: false,
                          color: "rgba(0, 0, 0, 0)"
                        },
                        ticks: {
                          fontColor: '#a48ebe'
                        }
                      }],
                      scaleLabel: {
                        fontColor: '#fff'
                      }
                  },
                  legend: {
                    display: false,
                    labels: {
                      fontFamily: 'Open sans',
                      fontColor: '#ffffff'
                    }
                  }
              }
          });
        }
      }
    };
</script>