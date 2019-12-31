<template>
    <div>
        <div class="lastAdContainer" v-if="ad.ad">
            <h4>Último aviso</h4>
            <p>{{ad.ad}}</p>
            <small>- @{{ad.username}}</small>
        </div>
        <div class="lastAdContainer" v-else>
            <h4>No hay último aviso</h4>
        </div>
    </div>
</template>
<style>

    .lastAdContainer {
        padding: 18px;
        background: #fafafa;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        margin: 8px;
        border-bottom: 3px solid #8400ff;
    }

</style>
<script>

    import firebase from 'firebase'
    export default {
        data(){
            return {
                ad: {
                    ad: '',
                    username: '',
                    photo: undefined
                }
            }
        },
        created: function(){
            firebase.firestore()
            .collection('projects')
            .doc(this.$route.params.projectId)
            .collection('ads')
            .get()
            .then((ads) => {
                firebase.firestore()
                .collection('users')
                .doc(ads.docs[0].data()['publisherId'])
                .get()
                .then((user) => {
                    firebase.storage()
                    .ref(`/profile_photo/${ads.docs[0].data()['publisherId']}`)
                    .getDownloadURL()
                    .then((url) => {
                        this.ad = {
                            ad: ads.docs[0].data()['ad'],
                            username: user.data()['user'],
                            photo: url
                        }
                    })
                    .catch(() => {
                        this.ad = {
                            ad: ads.docs[0].data()['ad'],
                            username: user.data()['user']
                        }
                    })
                })
            })
        }
    }

</script>