<template>
    <div id="board">
        <div class="screenContent">
            <Profile/>
            <div class="dashboardContent">
                <LateralPanel/>
                <div class="modal fade in" id="helpingModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="border-bottom: 0">
                                <div style="width: 100%; margin: 0 auto; text-align: center">
                                    <h1 class="modal-title">Boards</h1>
                                    <p class="text-muted">Una nueva forma de transmitir ideas</p>
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p><strong>Boards</strong> es un módulo más de la familia de Recognizify. Permite que todo tu equipo pueda aportar ideas y mantenerlas frescas, en todo momento. Podrás convertirlas en tareas, objetivos, crear listas con ellas y más. Explora y descubre.</p>
                                <img src="@/assets/ilustrations/meeting.png" width="100%">
                            </div>
                            <div class="modal-footer" style="border-top: 0">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="projectBoard">
                    <div>
                        <input type="text" v-model="newBoardName" class="form-control-special form-control-xl" spellcheck="false" placeholder="Escribe el nombre del tablero" @click="showSaveButtonForBoardNameInput">
                        <button class="btn btn-danger btn-sm btn-save" @click="saveNewBoardName">Guardar nombre del tablero</button>
                    </div>
                    <div class="toast toast-info" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src="@/assets/isotipe-color.svg" class="rounded mr-2" width="32px" height="32px" alt="...">
                            <strong class="mr-auto">Recognizify</strong>
                            <!-- <small class="text-muted">11 mins ago</small> -->
                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" id="toastClose" @click="closeToast">
                                <svg class="feather-menu">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#x"/>
                                </svg>
                            </button>
                        </div>
                        <div class="toast-body">
                            Hola, bienvenido al módulo de Boards de Recognizify. Aquí todo tu equipo puede dejar notas y contribuir.
                            <a href="#" data-toggle="modal" data-target="#helpingModal">Da click aquí para saber más</a>
                        </div>
                    </div>
                    <div class="toast toast-special" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header" style="padding: 6px 12px">
                            <strong class="mr-auto">Escribe una nota para tu equipo</strong>
                        </div>
                        <div class="toast-body">
                            <div class="toast-row">
                                <div class="profileImageContainer">
                                    <img :src="currentProfilePhoto" class="profilePhoto">
                                </div>
                                <input type="text" class="form-control form-control-sm" placeholder="Tu mensaje..." v-model="newMessage">
                            </div>
                            <button class="btn btn-success btn-sm button-send" @click="publishNote">Publicar</button>
                        </div>
                    </div>

                    <!-- other notes -->
                    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" :key="noteData" v-for="noteData in notesData">
                        <div class="toast-header" style="padding: 6px 12px">
                            <strong class="mr-auto">{{noteData['name']}}</strong>
                        </div>
                        <div class="toast-body">
                            {{noteData['message']}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    import LateralPanel from '@/components/LateralPanel.vue'
    import Profile from '@/components/Profile.vue'
    import UserNavbar from '@/components/UserNavbar.vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/board.css'

    import uuidv1 from 'uuid/v1'

    export default {
        data(){
            return {
                newBoardName: '',
                newToastCode: '',
                currentProfilePhoto: '',
                currentProjectUid: '',
                newMessage: '',
                notesData: []
            }
        },
        components: {
            LateralPanel,
            Profile,
            UserNavbar
        },
        mounted: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/select')
            }
        },
        created: function(){
            this.currentProjectUid = this.$router.history.current.params["projectId"]
            firebase.firestore().collection('projects').doc(this.currentProjectUid).collection('boards').doc('data').get()
            .then(res => this.newBoardName = res.data()['boardName'])

            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore().collection('users').doc(user.uid).get()
                .then(res => {
                    if(!res.data()['recognizifyHelpToastOnBoardDesactivated']) {
                        let $recognizifyHelpToast = document.querySelector('.toast-info')
                        $recognizifyHelpToast.style.display = 'block'
                    }
                })
            })

            this.updateNotes()
            this.setProfilePhotoOnToastBody()
        },
        methods: {
            showSaveButtonForBoardNameInput: function(){
                let $saveBoardNameButton = document.querySelector('.btn-save')
                $saveBoardNameButton.style.display = 'flex'
            },
            saveNewBoardName: function(){
                firebase.firestore().collection('projects').doc(this.currentProjectUid).collection('boards').doc('data').set({
                    boardName: this.newBoardName
                })
                .then(() => {
                    let $saveBoardNameButton = document.querySelector('.btn-save')
                    $saveBoardNameButton.style.display = 'none'
                })
            },
            setProfilePhotoOnToastBody: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.storage().ref(`/profile_photos/${user.uid}`).getDownloadURL()
                        .then(photo => this.currentProfilePhoto = photo)
                })
            },
            publishNote: function(){
                this.newToastCode = uuidv1()

                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore().collection('users').doc(user.uid).get()
                        .then(data => {
                            firebase.auth().onAuthStateChanged(user => {
                                firebase.firestore()
                                .collection('projects')
                                .doc(this.currentProjectUid)
                                .collection('boards')
                                .doc('data')
                                .collection('notes')
                                .doc(this.newToastCode)
                                .set({
                                    userNamePublish: data.data()['name'],
                                    uidUserPublish: user.uid,
                                    notePublish: this.newMessage
                                })
                                .then(() => window.location.reload())
                            })
                        })
                })
            },
            updateNotes: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.currentProjectUid)
                .collection('boards')
                .doc('data')
                .collection('notes')
                .get()
                .then(notes => {
                    notes.docs.forEach(note => {
                        this.notesData.push({
                            name: note.data()['userNamePublish'],
                            message: note.data()['notePublish']
                        })
                    })
                })
            },
            closeToast: function(){
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore().collection('users').doc(user.uid).set({
                        recognizifyHelpToastOnBoardDesactivated: true 
                    }).then(() => {
                        let $recognizifyHelpToast = document.querySelector('.toast-info')
                        $recognizifyHelpToast.style.display = 'none'
                    })
                })
            }
        }
    }

</script>