<template>
    <div class="projectFeedPanel">
        <ProjectName/>

        <div class="projectFounder">
            <p class="projectCardIndicator">Creador del proyecto</p>
            <div class="projectFounderFlow">
                <div class="projectFounderProfile">
                    <img class="projectFounderProfilePicture" :src="admin.profilePicture ? admin.profilePicture : '@/assets/ilustrations/profile.png'"/>
                </div>
                <div style="display: flex; flex-direction: column">
                    <span class="projectFounderName">{{admin.name}}</span>
                    <small class="text-muted" style="font-weight: 700">@{{admin.user}}</small>
                </div>
            </div>
        </div>
        <div class="projectShortcuts">
            <p class="projectCardIndicator">Módulos del proyecto</p>
            <div class="projectShortcutButton">
                <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#message-square" />
                </svg>
                <router-link class="projectShortcutLink" :to="`/dashboard/project/${this.$route.params.projectId}/board`">Boards</router-link>
            </div>
            <div class="projectShortcutButton">
                <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#clock" />
                </svg>
                <router-link class="projectShortcutLink" :to="`/dashboard/project/${this.$route.params.projectId}/tasks`">Tasks</router-link>
            </div>
            <div class="projectShortcutButton">
                <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#flag" />
                </svg>
                <router-link class="projectShortcutLink" :to="`/dashboard/project/${this.$route.params.projectId}/goals`">Goals</router-link>
            </div>
            <div class="projectShortcutButton">
                <svg class="feather-menu">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#users" />
                </svg>
                <router-link class="projectShortcutLink" :to="`/dashboard/project/${this.$route.params.projectId}/membership`">Users</router-link>
            </div>
        </div>
    </div>
</template>
<script>

    import ProjectName from '@/components/models/ProjectName.vue'
    import firebase from 'firebase'

    import '@/assets/css/projectPanel.css'
    export default {
        data(){
            return {
                admin: {
                    name: '',
                    profilePicture: '',
                    user: ''
                }
            }
        },
        components: {
            ProjectName
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .get()
            .then((project) => {
                firebase.firestore()
                .collection('users')
                .doc(project.data()['admin'][0])
                .get()
                .then(admin => {
                    this.admin.name = admin.data()['name']
                    this.admin.user = admin.data()['user']
                })

                firebase.storage().ref(`profile_photos/${project.data()['admin'][0]}`).getDownloadURL()
                .then(url => this.admin.profilePicture = url)
            })
        }

    }

</script>