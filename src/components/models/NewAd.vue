<template>
    <div class="taskSetting">
        <input type="text" class="form-control-special taskSettingInput" placeholder="Escribe aqui una nueva tarea para tu equipo..." v-model="task" v-on:keyup.enter="saveTask">
        <div style="display: flex; align-items: center;">
            <button class="btn btn-success btn-sm" style="margin-top: 7px" @click="saveTask">Publicar</button>
            <small class="text-muted" style="margin-left: 7px">o presiona ENTER</small>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/adsPanel.css'
    import firebase from 'firebase'

    import { AddPoints } from '@/assets/scripts/addActivityPoints.js'

    export default {
        data(){
            return {
                task: ''
            }
        },
        mixins: [AddPoints],
        methods: {
            saveTask: function() {
                if (this.checkTaskContent()) {
                    firebase.auth().onAuthStateChanged(user => {
                        firebase.firestore()
                        .collection('users')
                        .doc(user.uid)
                        .get()
                        .then((userdata) => {
                            firebase.firestore()
                            .collection('projects')
                            .doc(this.$route.params.projectId)
                            .collection('ads')
                            .add({
                                name: userdata.data()['name'],
                                ad: this.task.trim(),
                                publisherId: user.uid
                            }).then(() => {
                                this.addActivityPoint()
                                window.location.reload()
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    });
                } else {
                    console.log('Debes escribir algo');
                }
            },

            checkTaskContent: function () {
                if (/^\s+$/.test(this.task) || this.task == '' || this.task == undefined){
                    return false;
                } else {
                    return true;
                }
            }
        }
    }

</script>