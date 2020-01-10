<template>
    <div class="taskSetting">
        <div class="taskSettingContainer">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="El mensaje que quieres anunciar a tu equipo" v-model="task" v-on:keyup.enter="saveTask">
            </div>
            <div class="form-group">
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Ubicación (opcional)" v-model="location" v-on:keyup.enter="saveTask">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Hora (opcional)" v-model="hour" v-on:keyup.enter="saveTask">
                    </div>
                </div>
            </div>
        </div>
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
                task: '',
                location: '',
                hour: ''
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
                                location: this.location,
                                hour: this.hour,
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