<template>
    <div class="dashboardContent">
        <BoardsInfo/>
        <div class="projectBoard">
            <div>
                <input  type="text" 
                        v-model="newBoardName" 
                        class="form-control-special form-control-xl form-control-variable" 
                        spellcheck="false" 
                        placeholder="Escribe el nombre del tablero" 
                        @click="showSaveButtonForBoardNameInput">

                <h6 class="moduleIndicator">Tablero de Boards</h6>
                <button class="btn btn-danger btn-sm btn-save" 
                        @click="saveNewBoardName">
                        Guardar nombre del tablero
                </button>
            </div>

            <div class="toast toast-info" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="@/assets/isotipe-color.svg" class="rounded mr-2" width="32px" height="32px">
                    <strong class="mr-auto">Recognizify</strong>

                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" id="toastClose" @click="closeToast">
                        <svg class="feather-menu">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#x"/>
                        </svg>
                    </button>
                </div>
                <div class="toast-body">
                    Hola, bienvenido al módulo de Boards de Recognizify. Aquí todo tu equipo puede dejar notas y contribuir.
                    <a data-toggle="modal" data-target="#helpingModal"><i>Da click aquí para saber más</i></a>
                </div>
            </div>

            <div class="notes">
                <div class="toast toast-special" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="mr-auto">Escribe una idea para tu equipo</strong>
                    </div>
                    <div class="toast-body">
                        <div class="toast-row">
                            <div class="profileImageContainer">
                                <img :src="currentProfilePhoto" class="profilePhoto">
                            </div>
                            <input type="text" class="form-control form-control-sm" placeholder="Tu idea" v-model="newMessage">
                        </div>
                        <button class="btn btn-success btn-sm button-send" @click="publishNote">Publicar</button>
                    </div>
                </div>

                <!-- public notes -->
                <div    :class="`toast ${noteData.outstanding == true ? 'toast-outstanding' : ''}`" 
                        role="alert" 
                        aria-live="assertive" 
                        aria-atomic="true" 
                        :key="name" 
                        v-for="(noteData, name, message) in notesData">

                    <div class="toast-header">
                        <strong class="mr-auto" :key="name">{{noteData.name}}</strong>
                        <div class="dropdown">
                            <a class="boardCardMenuOptions" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <small>Opciones</small>
                                <svg class="feather-menu">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#chevron-down" />
                                </svg>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" @click="setToastOutstanding(noteData.id, noteData.outstanding)">
                                    <b>Destacar</b>               
                                    <div v-if="noteData.outstanding == true">
                                        <svg class="feather-menu">
                                            <use xlink:href="@/assets/svg/feather-sprite.svg#check" />
                                        </svg>                                
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="toast-body" :key="message">
                        {{noteData.message}}
                    </div>
                </div>
            </div>
        </div>
        <ProjectPanel/>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import Vue from 'vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/board.css'

    import CheckProjectMember from '@/assets/scripts/checkProjectMember.js'
    import ProjectPanel from '@/components/project/ProjectPanel.vue'
    import BoardsInfo from '@/components/modals/BoardsInfo.vue'
    import { AddPoints } from '@/assets/scripts/addActivityPoints.js'

    export default {
        data(){
            return {
                newBoardName: '',
                newToastCode: '',
                currentProfilePhoto: '',
                newMessage: '',
                notesData: []
            }
        },
        components: {
            ProjectPanel,
            BoardsInfo
        },
        mixins: [CheckProjectMember, AddPoints],
        mounted: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .collection('boards')
            .doc('data')
            .get()
            .then((res) => { 
                if (res.data()['boardName'] != undefined) { this.newBoardName = res.data()['boardName'] }
            })

            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore().collection('users').doc(user.uid).get()
                .then(res => {
                    if(!res.data()['recognizifyHelpToastOnBoardDesactivated']) {
                        let $recognizifyHelpToast = document.querySelector('.toast-info')
                        $recognizifyHelpToast.style.display = 'block'
                    }
                })
            })
            this.setProfilePhotoOnToastBody()
            Vue.nextTick()
            .then(() => this.updateNotes())
        },

        methods: {
            showSaveButtonForBoardNameInput (){
                let $saveBoardNameButton = document.querySelector('.btn-save')
                $saveBoardNameButton.style.display = 'flex'
            },
            saveNewBoardName (){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('boards')
                .doc('data')
                .set({
                    boardName: this.newBoardName
                })
                .then(() => {
                    let $saveBoardNameButton = document.querySelector('.btn-save')
                    $saveBoardNameButton.style.display = 'none'
                })
            },
            setProfilePhotoOnToastBody (){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.storage().ref(`/profile_photos/${user.uid}`).getDownloadURL()
                        .then(photo => this.currentProfilePhoto = photo)
                })
            },
            publishNote (){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore()
                    .collection('users')
                    .doc(user.uid)
                    .get()
                    .then(data => {
                        firebase.firestore()
                        .collection('projects')
                        .doc(this.$route.params.projectId)
                        .collection('boards')
                        .doc('data')
                        .collection('notes')
                        .add({
                            userNamePublish: data.data()['name'],
                            uidUserPublish: user.uid,
                            notePublish: this.newMessage,
                            isOutstanding: false
                        })
                        .then(() => {
                            this.addActivityPoint()
                        })
                        .catch(err => console.log(err))
                    })
                    .catch((err) => console.log(err))
                })
            },
            updateNotes (){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('boards')
                .doc('data')
                .collection('notes')
                .get()
                .then(notes => {
                    notes.forEach(note => {
                        this.notesData.push({
                            name: note.data()['userNamePublish'],
                            message: note.data()['notePublish'],
                            outstanding: note.data()['isOutstanding'] ? note.data()['isOutstanding'] : false,
                            id: note.id
                        })
                    })
                })
            },
            closeToast (){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore().collection('users').doc(user.uid).update({
                        recognizifyHelpToastOnBoardDesactivated: true 
                    }).then(() => {
                        let $recognizifyHelpToast = document.querySelector('.toast-info')
                        $recognizifyHelpToast.style.display = 'none'
                    })
                })
            },
            closeOverlayMenu (){
                document.getElementById('projectFeedPanel').classList.toggle('show')
            },
            setToastOutstanding (id, state){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('boards')
                .doc('data')
                .collection('notes')
                .doc(id)
                .update({
                    isOutstanding: !state
                })
                .then(() => window.location.reload())
            }
        }
    }

</script>