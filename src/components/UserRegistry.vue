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
          <tbody id="projectUsersField">
            <tr :key="user.name" v-for="user in users">
              <td scope="col">
                <img class="userProfilePhoto" :src="user.picture ? user.picture : require('@/assets/ilustrations/profile.png')" width="25px">
                {{user.name}}
              </td>
              <td scope="col">@{{user.user}}</td>
              <td scope="col">{{user.role ? user.role : 'No tiene rol asignado'}}</td>
            </tr>
          </tbody>
        </table>
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
        UserInvited: '',
        users: []
      }
    },
    mounted: function(){
      firebase.firestore()
      .collection('projects')
      .doc(this.$route.params.projectId)
      .collection('members')
      .get()
        .then(users => {
          users.forEach(user => {
            firebase.storage()
            .ref(`/profile_photos/${user.id}`)
            .getDownloadURL()
            .then((url) => {
              this.users.push({
                name: user.data()['name'],
                picture: url,
                user: user.data()['user'],
                role: user.data()['role']
              })
            })
            .catch(() => {
              this.users.push({
                name: user.data()['name'],
                user: user.data()['user'],
                role: user.data()['role']
              })   
            })
          })
        })
    },
    mixins: [AddPoints],
    methods: {
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