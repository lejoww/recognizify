<template>
    <div class="projectSummaryPurpleCard">
        <h2 class="text-white" v-text="projectName"></h2>
        <p class="text-white">Próximamente aquí tendrás estadisticas de tu proyecto.</p>
        <!-- <canvas width="100%" height="100%" id="canvas"></canvas> -->
    </div>
</template>
<script>

    import firebase from 'firebase'
    import Chart from "chart.js";

    export default {
        data: function(){
            return {
                projectName: '',
                projectUid: this.$route.params["projectId"]
            }
        },
        created: function() {
            this.setProjectName()
        },
        methods: {
            setProjectName: function() {
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore()
                        .collection("projects")
                        .doc(this.projectUid)
                        .get()
                        .then(res => {
                            this.projectName = res.data()["shortName"]
                        })
                })
            }
        }
    }

</script>