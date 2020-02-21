<template>
    <div>
        <div class="lastAdContainer" v-if="ad.ad">
            <h4>Último aviso</h4>
            <p>{{ad.ad}}</p>
            <div class="lastAdMetaInfo">
                <span v-if="ad.location != ''">
                    <svg class="feather-menu">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#map-pin" />
                    </svg>
                    {{ad.location}}
                </span>
                <span v-if="ad.hour != ''">
                    <svg class="feather-menu">
                        <use xlink:href="@/assets/svg/feather-sprite.svg#clock" />
                    </svg>
                    {{ad.hour}}
                </span>
            </div>
            <div style="display: flex; align-items: center">
                <div class="photoContainer">
                    <img :src="ad.photo != undefined ? ad.photo : '@/assets/ilustrations/profile.png'">
                </div>
                <small class="publisherUsername">- @{{ad.username}}</small>
            </div>
        </div>
        <div class="lastAdContainer" v-else>
            <div class="nonAdContainer">
                <div>
                    <h4 style="color: #9e95aa; display: flex; align-items: center">
                        <svg class="feather-sketch" style="margin: 0 0.5em 0 0">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#mic" />
                        </svg>
                        No hay último aviso
                    </h4>
                    <span style="color: #9e95aa; font-size: 13px">Puede que no haya mucho que contar o simplemente tu equipo no es muy sociable.</span>
                </div>
            </div>
            <a class="btn btn-primary" :href="`/dashboard/project/${this.$route.params.projectId}/ads`">Añade un anuncio</a>
        </div>
    </div>
</template>
<style>

    .lastAdContainer {
        min-width: 60%;
        display: block;
        padding: 18px;
        background: #fafafa;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        margin: 8px;
        border-bottom: 3px solid #8400ff;
    }

    .nonAdContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 21px;
    }

    .photoContainer {
        width: 32px;
        height: 32px;
        border-radius: 21px;
        overflow: hidden;
        margin-right: 12px
    }

    .photoContainer img {
        width: 100%;
        overflow: hidden;
    }

    .publisherUsername {
        font-weight: 700;
        /* font-size: 12px */
    }

    .lastAdMetaInfo {
        display: flex;
        margin-bottom: 1em;
    }

    .lastAdMetaInfo span {
        color: #A9A8C1;
        font-weight: 600;
        font-size: 12px;
        margin-right: 12px;
        vertical-align: middle;
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
                    .ref(`/profile_photos/${ads.docs[0].data()['publisherId']}`)
                    .getDownloadURL()
                    .then((url) => {
                        this.ad = {
                            ad: ads.docs[ads.docs.length - 1].data()['ad'],
                            location: ads.docs[ads.docs.length - 1].data()['location'],
                            hour: ads.docs[ads.docs.length - 1].data()['hour'],
                            username: user.data()['user'],
                            photo: url
                        }
                    })
                    .catch(() => {
                        this.ad = {
                            ad: ads.docs[ads.docs.length - 1].data()['ad'],
                            username: user.data()['user']
                        }
                    })
                })
            })
        }
    }

</script>