<template>
        <div class="weeklyArticleCardContainer bg-secondary" v-if="article.exists == true">
            <div class="cardInfo">
                <router-link to="/articles/weekly">
                    <span class="badge badge-primary">Artículo semanal</span>
                    <!-- <small class="text-warning" style="font-weight: 900; letter-spacing: -0.4px">ÚLTIMO ARTÍCULO DEL BLOG</small> -->
                    <h2 class="text-white" style="font-family: 'Inter'; font-weight: 800; margin-top: 12px; line-height: 1.2">{{article.title}}</h2>
                    <p class="text-warning" style="font-weight: 600; letter-spacing: 0.4px">{{article.abstract}}</p>

                    <div class="weeklyArticleCardPublisher">
                        <div class="profilePictureContainer">
                            <img :src="article.publisherPhoto ? article.publisherPhoto : require('@/assets/ilustrations/profile.png')" alt="">
                        </div>
                        <span class="text-white autor">{{article.publisherName}}</span>
                    </div>
                </router-link>
                <div v-if="admin == true" @click="deleteArticle">
                    <br>
                    <button class="btn btn-danger">Eliminar artículo</button>
                </div>
            </div>
            <div class="bg-success postImageContainer" style="width: 50%; height: 100%;">
                <img src="@/assets/ilustrations/meeting.png" class="postImage" style="position:relative; right: -82px">
            </div>
        </div>
</template>
<style scoped>

    .weeklyArticleCardContainer {
        width: 100%;
        /* height: 262px; */
        /* max-height: 312px; */
        border-radius: 7px;
        /* background: #1D0F31; */
        margin-bottom: 2rem;
        cursor: pointer;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        display: flex;
        justify-content: space-between;
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
        border: 1px solid #FF4C6D;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
    }

    .cardInfo {
        width: 50%; 
        padding: 2rem;
    }

    .profilePictureContainer img {
        width: 100%;
    }

    .weeklyArticleCardPublisher {
        display: flex;
        align-items: center
    }

    .autor {
        font-weight: 700;
        font-size: 13px;
    }

    .postImage {
        height: 100%
    }

    @media screen and (max-width: 768px) {
        .weeklyArticleCardContainer {
            width: 100%;
        }
    }
    
    @media screen and (max-width: 991px) {
        .weeklyArticleCardContainer {
            height: auto !important;
        }

        .weeklyArticleCardContainer .postImageContainer {
            display: none;
        }

        .cardInfo {
            width: 100%;
        }
    }

    @media screen and (max-width: 1258px) {
        .weeklyArticleCardContainer {
            height: 312px;
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
                    .then((url) => this.article.publisherPhoto = url)
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