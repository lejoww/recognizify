<template>
    <div class="deleteProjectModal">
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header bg-danger" style="border: none">
                    <h3 class="modal-title text-white" id="exampleModalLongTitle">¿Dejarás esta idea?</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="this.$destroy()">
                    <span aria-hidden="true">
                        <svg class="feather-light">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#x" />
                        </svg>
                    </span>
                    </button>
                </div>
                <div class="modal-body">
                    <span>Parece que dejarás {{projectName}}, recuerda que esta opción es permanente e irreversible. Para volver a acceder a este proyecto, te deben volver a invitar.</span>
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger" @click="deleteUserForProject(projectId)">Abandonar proyecto</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase';
    import Vue from 'vue';
    export default {
        data(){
            return {
                selectedProject: {
                    name: ''
                }
            }
        },
        props: [
            'projectId',
            'projectName'
        ],
        methods: {
            deleteUserForProject (id) {
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore()
                    .collection('projects')
                    .doc(id)
                    .collection('members')
                    .doc(user.uid)
                    .delete()
                    .then(() => window.location.reload())
                    .catch((err) => console.log(err))
                })
            }
        }
    }

</script>