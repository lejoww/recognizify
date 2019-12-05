<template>
    <div class="projectInfoCard">
        <div style="display: flex; justify-content: space-between; width: 100%">
            <span class="projectInfoCardTitle">{{this.title}}</span>
            <a href="#" class="deleteLinkButton" @click="deleteLinkCard">
                <svg class="feather-red">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#trash" />
                </svg>
            </a>
        </div>
        <p>{{this.description}}</p>
        <a :href="this.link" style="color: #0088FF; text-decoration-line: overline">
            <svg class="feather-link">
                <use xlink:href="@/assets/svg/feather-sprite.svg#link" />
            </svg>
            {{this.link}}
        </a>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/feedCard.css'
    export default {
        props: [
            'title',
            'description',
            'link',
            'id'
        ],
        methods: {
            deleteLinkCard: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('links')
                .doc(this.id)
                .delete()
                .then(() => window.location.reload())
                .catch(err => console.log(err))
            }
        }
    }

</script>