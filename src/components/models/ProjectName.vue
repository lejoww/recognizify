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
        font-family: "Source sans pro";
        font-size: 20px;
        vertical-align: middle;
        font-weight: 700;
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