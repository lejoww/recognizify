<template>
    <div class="projectSummaryCard">
        <h4 class="muted-gray">Usuarios registrados</h4>
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
            },
            setYourselfOnList: function() {
                firebase.auth().onAuthStateChanged(user => {
                    firebase.firestore()
                        .collection("users")
                        .doc(user.uid)
                        .get()
                        .then(userdata => {
                            this.usersInProject.push({
                                name: userdata.data()["name"],
                                user: `@${userdata.data()["user"]}`
                            })
                        })
                    })
                }
            }
        }
</script>