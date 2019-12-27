<template>
    <div>
        <router-link class="invitationsCounterContainer" to="/account/notifications">
            <svg class="feather-menu icon">
                <use xlink:href="@/assets/svg/feather-sprite.svg#mail"/>
            </svg>
            <div class="invitationsCounter" v-if="invitations >= 1">
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
        margin-right: 12px;
    }

    .invitationsCounter {
        width: 20px;
        height: 20px;
        padding: 3px;
        background: rgb(236, 0, 71);
        color: #e9e9e9;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        vertical-align: middle;
        line-height: 1.2;
        margin-left: 4px;
    }

</style>
<script>
    export default {
        data(){
            return {
                invitations: ''
            }
        },
        created: function(){
            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore()
                .collection('users')
                .doc(user.uid)
                .collection('invitations')
                .get()
                .then(invitations => {
                    this.invitations = invitations.docs.length
                })
            })
        }
    }
</script>