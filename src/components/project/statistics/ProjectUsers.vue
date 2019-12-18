<template>
    <div class="projectSummaryCard">
        <div style="display:flex; justify-content: space-between">
            <span class="muted-gray">Usuarios</span>
            <router-link :to="`/dashboard/project/${this.$route.params.projectId}/membership`" class="text-warning" style="font-weight: 600">Administrar</router-link>
        </div>
        <br>
        <div class="scrollable">
            <ol class="usersList" id="usersList">
                <li :key="userInProject['name']" v-for="(userInProject, name, user) in usersInProject">
                    <div class="userPhoto" :key="name">{{userInProject['name'].charAt()}}</div>
                    <div class="userInfo">
                        <div class="userName" :key="name">
                            {{userInProject['name']}}
                            <span class="badge badge-success" :key="user">
                                {{userInProject['user']}}
                            </span>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
        
    </div>
</template>
<script>

    import firebase from 'firebase'
    export default {
        data(){
            return {
                projectUid: this.$router.history.current.params['projectId'],
                usersInProject: []
            }
        },
        created: function(){
            this.getProjectMembers()
        },
        methods: {    
            getProjectMembers: function() {
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore()
                        .collection("projects")
                        .doc(this.projectUid)
                        .collection("members")
                        .get()
                        .then(members => {
                            members.forEach(member => {
                                this.usersInProject.push({
                                    name: member.data()['name'],
                                    user: `@${member.data()['user']}`
                                })
                            })
                        })
                })
            }
        }
    }
</script>