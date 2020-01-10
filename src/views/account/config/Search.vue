<template>
    <div class="searchPageContainer">
        <div class="searchPageHeader">
            <h4>Buscaste "{{search}}"</h4>
            <span class="searchPageHeaderMessage">Respetamos la privacidad, por lo tanto, aquí solo verás 
                perfiles configurados como públicos. Tu también puedes 
                <router-link class="text-success" to="/account/configuration#security">configurar</router-link>
                el tuyo en la pestaña de "Seguridad"
                </span>
            
            <div v-if="usersFound.length >= 1">
                <UserProfileSelector :name="user.name" :bio="user.bio" :picture="user.picture" :user="user.user" :key="user" v-for="user in usersFound"/>
            </div>
            <p v-else>
                <br>
                {{this.searchState}}
            </p>
        </div>
    </div>
</template>
<style scoped>

    .searchPageHeader {
        padding: 2rem;
    }

    .searchPageHeaderMessage {
        color: #A9A8C1;
        font-weight: 600;
        font-size: 14px
    }

</style>
<script>

    import firebase from 'firebase'
    import UserProfileSelector from '@/components/models/UserProfileSelector.vue'
    export default {
        data(){
            return {
                search: this.$route.params.search.toLowerCase(),
                usersFound: [],
                searchState: 'Espera mientras consultamos...'
            }
        },
        components: {
            UserProfileSelector
        },
        beforeCreate: function(){
            firebase.firestore()
            .collection('users')
            .where('visibilityMode', '==', 'public')
            .get()
            .then((users) => {
                users.forEach((user) => {
                    let userName = user.data()['name'].toLowerCase();
                    if(userName.indexOf(this.search) !== -1){
                        firebase.storage()
                        .ref(`/profile_photos/${user.id}`)
                        .getDownloadURL()
                        .then((url) => {
                            this.usersFound.push({
                                name: user.data()['name'],
                                bio: user.data()['bio'],
                                id: user.id,
                                user: user.data()['user'],
                                picture: url
                            })
                        })
                        .catch(() => {
                            this.usersFound.push({
                                name: user.data()['name'],
                                bio: user.data()['bio'],
                                id: user.id,
                                user: user.data()['user'],
                            })              
                        })
                    }
                })
            })
            .catch(() => {
                this.searchState = 'Puede que tengas problemas de conexión o la app se volvió desertica.'
            })
        }
    }

</script>