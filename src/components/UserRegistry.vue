<template>
  <div id="usersRegistry">
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <h5 class="modal-title">¿Quién trabaja contigo?</h5>
          </div>
          <div class="modal-body">
            <p>Para añadir un miembro a tu proyecto, ya debe de estar registrado en la plataforma: escribe su nombre de usuario</p>
            <br><br>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" class="form-control form-control-lg" placeholder="Escribe el @user del usuario" v-model="search" aria-describedby="basic-addon1">
            </div>
          </div>
          <div class="modal-footer" style="border: none">
            <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" @click="proposeAnUserWithSearch" data-toggle="modal" data-target="#invitationModal">Buscar usuario</button>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="invitationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <h5 class="modal-title">Enviar invitación</h5>
          </div>
          <div class="modal-body">
            <p>Asegúrate de que conoces a esta persona antes de enviarle una invitación a participar de tu idea.</p><br>
            <h4 style="text-align: center" v-text="UserNameInvited"></h4>
          </div>
          <div class="modal-footer" style="border: none">
            <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" @click="sendInvitationToSelectedUser">Enviar invitación</button>
          </div>
        </div>
      </div>
    </div>

      <!-- <div class="usersListTable">
        <h6>Usuarios en tu proyecto</h6>
        <button class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">Nuevo miembro</button>
        <table class="table" style="width: 56%">
          <thead class="thead-dark">
            <tr style="font-size: 14px">
              <th scope="col">Nombre</th>
              <th scope="col">Usuario</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody id="projectUsersField"></tbody>
        </table>
      </div> -->

      <div class="bannerNonUsers">
        <div>
          <h3>Parece que no has invitado a nadie a tu proyecto</h3>
          <p>Puedes agregar a tu primer usuario en el proyecto si conoces su nombre de usuario.</p>
          <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModal">Invitar a alguien</button>
        </div>
      </div>
    </div>
</template>
<script>

  import firebase from 'firebase'
  import '@/assets/css/userRegistry.css'
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
    methods: {
      getUsersOnThisProject: function(){
        let projectCode = this.$router.history.current.params['projectId']
        firebase.firestore().collection('projects').doc(projectCode).collection('members').get()
          .then(users => {
            let usersTable = document.getElementById('projectUsersField')
            users.forEach(user => {
              usersTable.insertAdjacentHTML('beforeend', `
                <tr>
                  <td>${user.data()['name']}</td>
                  <td>${user.data()['user'] ? '@' + user.data()['user'] : 'No tiene un usuario'}</td>
                  <td>${user.data()['role'] ? user.data()['role'] : 'No tiene rol asignado'}</td>
                </tr>
              `)
            })
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