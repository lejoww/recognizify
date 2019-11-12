<template>
    <div class="projectSummaryCard">
        <div class="row" style="align-items:center; justify-content: space-between; padding: 0 1em">
            <h4 class="muted-gray">Usuarios registrados</h4>
            <button class="btn btn-warning btn-sm">
                <router-link class="text-white" :to="`/project/${this.$route.params.projectId}/membership`">Administrar</router-link>
            </button>
        </div>
        <hr>
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
            this.setYourselfOnList()
            console.log(this.usersInProject)
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