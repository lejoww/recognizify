<template>
    <div class="projectPresentationContainer">
        <div class="projectData">
            <p class="text-white">{{projectName}}</p>
            <span>{{projectDescription ? projectDescription : ''}}</span>
        </div>
        <!-- <a href="/dashboard/select" class="backLink">
            <svg class="feather-mini-light">
                <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left" />
            </svg>
            Volver a tus proyectos
        </a> -->
    </div>
</template>
<style>
    .projectPresentationContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .projectPresentationContainer p {
        font-weight: 600;
        font-size: 15px;
        vertical-align: middle;
        margin: 0 0 7px 0;
    }

    .projectPresentationContainer span {
        font-weight: 600;
        color: #a5aab3;
        font-size: 13px;
    }

    .backLink {
        font-weight: 700;
        font-size: 14px;
        color: #f2f2f2;
    }

    .backLink:hover {
        color: #e6e6e6;
    }
</style>
<script>

    import firebase from 'firebase'
    export default {
        data() {
            return {
                projectName: '',
                projectDescription: ''
            }
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .get()
            .then(project => {
                this.projectName = project.data()['shortName']
                this.projectDescription = project.data()['description']
            })
        }
    }

</script>