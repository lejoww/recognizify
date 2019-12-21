<template>
    <div class="projectPresentationContainer">
        <span class="text-white">{{projectName}}</span>
        <a href="/dashboard/select" class="backLink">
            <svg class="feather-mini-light">
                <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-left" />
            </svg>
            Volver a tus proyectos
        </a>
    </div>
</template>
<style>
    .projectPresentationContainer {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #5e0be4;
    }

    .projectPresentationContainer span {
        font-family: 'Open sans';
        font-size: 21px;
        vertical-align: middle;
        letter-spacing: -0.5px;
        font-weight: 800;
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
                projectName: ''
            }
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .get()
            .then(project => {
                this.projectName = project.data()['shortName']
            })
        }
    }

</script>