<template>
    <div class="modal fade hide" id="invitationModal" tabindex="-1" role="dialog" aria-labelledby="invitationModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" style="border: none">
            <h3 class="modal-title modalTitle">Invita a este usuario a un proyecto</h3>
          </div>
          <div class="modal-body">
            <div v-if="currentUserProjects.length >= 1">
                <span>Enviar invitación para:</span>
                <div class="card projectCard" :key="project" v-for="project in currentUserProjects">
                    <button v-on:click="sendInvitationToSelectedUser(project.id)">{{project.name}}</button>
                </div>
            </div>
            <div v-else>
                <p>Parece que aún no tienes proyectos o no has iniciado sesión</p>
                <button class="btn btn-primary">Inicia sesión</button>
            </div>
          </div>
          <div class="modal-footer" style="border: none">
            <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import '@/assets/css/invitationModal.css'

import { AddPoints } from '@/assets/scripts/addActivityPoints.js'
import firebase from 'firebase'
export default {
    data(){
      return {
          currentUserProjects: []
      }
    },
    props: [
        'profileId'
    ],
    created: function (){
        this.getCurrentUserProjects()
    },
    mixins: [AddPoints],
    methods: {
        getCurrentUserProjects: function(){
            firebase.firestore()
            .collection('projects')
            .get()
            .then(projects => {
                projects.forEach(project => {
                    firebase.firestore()
                    .collection('projects')
                    .doc(project.id)
                    .collection('members')
                    .get()
                    .then((members) => {
                        members.forEach(member => {
                            if (member.id == firebase.auth().currentUser.uid) {
                                this.currentUserProjects.push({
                                    name: project.data()['name'],
                                    id: project.id
                                })
                            }
                        })
                    })
                    .catch(err => {
                        console.log('error en la obtenciòn de miembros ' + err)
                    })
                })
            })
            .catch(err => {
                console.log('error en la obtenciòn de proyectos ' + err)
            })
        },
        sendInvitationToSelectedUser: function(projectId) {
            firebase.firestore()
            .collection('projects')
            .doc(projectId)
            .get()
            .then(project => {
                firebase.firestore()
                .collection('users')
                .doc(this.profileId)
                .collection('invitations')
                .doc(projectId)
                .set({
                    pname: project.data()['shortName']
                })
                .then(() => {
                    // this.addActivityPoint()
                    $('#invitationModal').modal('hide')
                    document.getElementById('successAlert').style.display = 'block'
                })
                .catch(err => console.log(err))
            })
        }
    }
}
</script>