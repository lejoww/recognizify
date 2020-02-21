<template>
    <div class="activityPointsContainer" data-toggle="tooltip" data-placement="bottom" title="Son puntos recolectados de las acciones de tu equipo dentro de la app">
        <h1 class="activityPointsNumber">{{activityPoints}}</h1>
        <span class="activityPointsTitle">Puntos de actividad</span>
        <p class="activityPointsInstruct">Mientras más consigas, puedes ser uno de los mejores proyectos en el listado.</p>
    </div>
</template>
<style scoped>

    .activityPointsContainer {
        padding: 18px;
        background: #fafafa;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        margin: 8px;
        border-bottom: 3px solid #8400ff;
    }

    .activityPointsNumber {
        letter-spacing: -1px;
    }

    .activityPointsTitle {
        font-weight: 600;
        font-size: 14px
    }

    .activityPointsInstruct {
        width: 232px;
        font-size: 12.5px
    }

</style>
<script>

    import firebase from 'firebase'
    export default {
        data(){
            return {
                activityPoints: 0
            }
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .collection('dates')
            .get()
            .then((dates) => {
                dates.forEach((date) => {
                    this.activityPoints += date.data()['activityPoints']
                })
            })
        }
    }

</script>