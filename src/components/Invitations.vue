<template>
    <div>
        <router-link class="invitationsCounterContainer" to="/account/notifications" data-toggle="tooltip" data-placement="bottom" title="Invitaciones a otros proyectos">
            <svg class="feather-menu icon">
                <use xlink:href="@/assets/svg/feather-sprite.svg#mail"/>
            </svg>
            <div class="invitationsCounter" v-if="invitations > 0">
                {{invitations}}
            </div>
        </router-link>
    </div>
</template>
<style>

    .invitationsCounterContainer {
        width: auto;
        display: flex;
        justify-content: space-between;
        margin-right: 2px;
    }

    .invitationsCounter {
        width: 17px;
        height: 17px;
        padding: 3px;
        background: rgb(236, 0, 71);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        vertical-align: middle;
        line-height: 1.2;
        margin-left: 4px;
        position: relative;
        left: -12px;
        top: -7px
    }

</style>
<script>

    import firebase from 'firebase'
    export default {
        data(){
            return {
                invitations: 0
            }
        },
        created: function(){
            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore()
                .collection('users')
                .doc(user.uid)
                .collection('invitations')
                .get()
                .then(invitations => this.invitations = invitations.docs.length)
            })
        }
    }
</script>