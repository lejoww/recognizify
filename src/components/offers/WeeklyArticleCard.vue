<template>
        <div class="weeklyArticleCardContainer" v-if="article.exists == true">
            <router-link to="/articles/weekly">
                <h3 class="text-white">{{article.title}} <span class="badge badge-success">Artículo semanal</span></h3>
                <p class="text-white">{{article.abstract}}</p>

                <div class="weeklyArticleCardPublisher">
                    <div class="profilePictureContainer">
                        <img :src="article.publisherPhoto ? article.publisherPhoto : require('@/assets/ilustrations/profile.png')" alt="">
                    </div>
                    <small class="text-white">{{article.publisherName}}</small>
                </div>
            </router-link>
            <div v-if="admin == true" @click="deleteArticle" style="width: 130px">
                <br>
                <button class="btn btn-danger">Eliminar artículo</button>
            </div>
        </div>
</template>
<style scoped>

    .weeklyArticleCardContainer {
        width: 100%;
        padding: 1rem;
        background: rgb(111, 0, 255);
        border-radius: 4px;
        margin-bottom: 2rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between
    }

    .weeklyArticleCardContainer h3 {
        margin: 0;
    }

    .weeklyArticleCardContainer p {
        font-size: 13px
    }

    .profilePictureContainer {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
    }

    .profilePictureContainer img {
        width: 100%;
    }

    .weeklyArticleCardPublisher {
        display: flex;
        align-items: center
    }

    small {
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        .weeklyArticleCardContainer {
            width: 100%;
        }
    }

</style>
<script>

    import firebase, { firestore } from 'firebase'
    export default {
        data(){
            return {
                article: {
                    exists: false,
                    title: '',
                    abstract: '',
                    publisher: '',
                    publisherName: '',
                    publisherPhoto: '',
                    id: ''
                },
                admin: false
            }
        },
        created: function(){
            firebase.firestore()
            .collection('articles')
            .get()
            .then((articles) => {
                const weeklyArticle = articles.docs[0];
                this.article.exists = true;
                this.article.title = weeklyArticle.data()['title'];
                this.article.abstract = weeklyArticle.data()['abstract'];
                this.article.publisher = weeklyArticle.data()['publisher'];
                this.article.id = weeklyArticle.id;

                firebase.firestore()
                .collection('users')
                .doc(this.article.publisher)
                .get()
                .then((creator) => {
                    this.article.publisherName = creator.data()['name']
                    firebase.storage()
                    .ref(`/profile_photos/${this.article.publisher}`)
                    .getDownloadURL()
                    .then((url) => this.publisherPhoto = url)
                })
                .catch((err) => console.log(err))

            })
            .catch(() => {
                this.article.exists = false;
            })

            firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((user) => {
                this.admin = user.data()['roles']['admin'];
            });
        },
        methods: {
            deleteArticle: function(){
                firebase.firestore()
                .collection('articles')
                .doc(this.article.id)
                .delete()
                .then(() => window.location.reload())
            }
        }
    }

</script>