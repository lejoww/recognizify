<template>
    <div class="projectPresentationContainer">
        <span class="text-white">{{projectName}}</span>
    </div>
</template>
<style>
    .projectPresentationContainer {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        padding: 1rem;
        display: flex;
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

    @media screen and (max-width: 991px) {
        .projectPresentationContainer {
            /* padding: 0; */
        }
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