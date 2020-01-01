<template>
  <div id="usersRegistry">

      <div class="usersListTable" id="usersListTable">
        <h6>Usuarios en tu proyecto</h6>
        <table class="table">
          <thead class="thead-dark">
            <tr style="font-size: 14px">
              <th scope="col">Nombre</th>
              <th scope="col">Usuario</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody id="projectUsersField"></tbody>
        </table>
      </div>

      <div class="bannerNonUsers" id="bannerNonUsers">
        <div>
          <h3>Invita a más personas a tu proyecto</h3>
          <p>Puedes agregar a más usuarios en el proyecto si conoces su nombre de usuario. Para añadir un miembro a tu proyecto, ya debe de estar registrado en la plataforma. Solo debes acceder a https://recognizify.netlify.com/@ y agregarle a esa dirección el nombre de usuario de la persona.</p>
        </div>
      </div>
    </div>
</template>
<script>

  import firebase from 'firebase'
  import '@/assets/css/userRegistry.css'
  import { AddPoints } from '@/assets/scripts/addActivityPoints.js'

  export default {
    data(){
      return {
        search: '',
        UserNameInvited: '',
        UserInvited: ''
      }
    },
    mounted: function(){
      this.getUsersOnThisProject()
    },
    mixins: [AddPoints],
    methods: {
      getUsersOnThisProject: function(){
        let projectCode = this.$router.history.current.params['projectId']
        firebase.firestore().collection('projects').doc(projectCode).collection('members').get()
          .then(users => {
            console.log(users.docs.length)
            if(users.docs.length >= 1){
              let tableContainer = document.getElementById('usersListTable')
              let usersTable = document.getElementById('projectUsersField')

              tableContainer.style.display = 'block'
              users.forEach(user => {
                usersTable.insertAdjacentHTML('beforeend', `
                  <tr>
                    <td>${user.data()['name']}</td>
                    <td>${user.data()['user'] ? '@' + user.data()['user'] : 'No tiene un usuario'}</td>
                    <td>${user.data()['role'] ? user.data()['role'] : 'No tiene rol asignado'}</td>
                  </tr>
                `)
              })
            } if (users.docs.length == 0) {
              let bannerNonUsers = document.getElementById('bannerNonUsers')
              bannerNonUsers.style.display = 'block'
            }
          })
      },
      proposeAnUserWithSearch: function(){
        firebase.firestore().collection('users').get()
          .then(users => {
            users.forEach(user => {
              if (this.search.toString() == user.data()['user']){
                this.UserInvited = user.data()['user']
                this.enableNewMemberInvitationCard(user.data()['name'])
              }
            })
          })
      },
      enableNewMemberInvitationCard: function(name){
        this.UserNameInvited = name
      },
      sendInvitationToSelectedUser: function() {
        firebase.firestore().collection('users').get()
          .then(res => {
            res.docs.forEach(doc => {
              if(doc.data()['user'] == this.UserInvited){
                let uidForNewMember = doc.id
                let projectCode = this.$router.history.current.params['projectId']

                firebase.firestore().collection('projects').doc(projectCode).get()
                  .then(data => {
                    this.addActivityPoint()
                    firebase.firestore().collection('users').doc(uidForNewMember).collection('invitations').doc(projectCode).set({
                      pname: data.data()['shortName']
                    })
                  })
              }
            })
          })
      }
    }
  }

</script>