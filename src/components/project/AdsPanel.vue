<template>
    <div class="tasksPanel">
            <div class="taskMiniBanner bg-secondary">
                <svg class="feather-light">
                    <use xlink:href="@/assets/svg/feather-sprite.svg#check-circle" />
                </svg>
                <span class="tasksPanelTitle" style="color: #fff">Anuncios de tu equipo</span>
            </div>
        <div class="tasksPanelWrapper">
            <div class="tasksPanelList" v-if="ads.length > 0">
                <Ad :key="ad" v-for="ad in ads" :todo="ad.message" :publisher="`por ${ad.name}`" :id="ad.publisherId"/>
            </div>

            <div class="tasksPanelList" v-if="ads.length == 0">
                <Ad todo="Mantente sincronizado ⌚ con nuevas tareas para tu equipo aquí 🚀. Agrega alguna 💡." :publisher="`por Recognizify`"/>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>

        <NewAd/>
    </div>
</template>
<script>

    import '@/assets/css/tasksPanel.css'
    import Ad from '@/components/models/Ad.vue'
    import NewAd from '@/components/models/NewAd.vue'

    import firebase from 'firebase'

    export default {
        data: function(){
            return {
                ads: []
            }
        },
        components: {
            Ad,
            NewAd
        },
        created: function(){
            this.getAds()
        },
        methods: {
            getAds: function() {

                    firebase.firestore()
                    .collection('projects')
                    .doc(this.$route.params.projectId)
                    .collection('ads')
                    .get()
                    .then((ads) => {
                        ads.forEach(ad => {
                            this.ads.push({
                                name: ad.data()['name'],
                                message: ad.data()['ad'],
                                publisherId: ad.data()['publisherId']
                            })
                        })
                    })
            }
        }
    }

</script>