<template>
    <div class="weeklyArticlePageContainer">
        <div class="weeklyArticlePageBanner" id="pageBanner">
            <a href="/dashboard/select/" class="weeklyArticlePageBackButton">Volver a Recognizify</a>
        </div>
        <div class="weeklyArticlePage">
            <h1>{{article.title}}</h1>
            <p>{{article.abstract}}</p>
            <p id="articleContent">{{article.content}}</p>
        </div>
        <div class="weeklyArticleFooter">
            <div class="weeklyArticlePublisherPicture">
                <img :src="article.publisher.picture ? article.publisher.picture : require('@/assets/ilustrations/profile.png')" alt="">
            </div>
            <div>
                <h6 class="articlePublisher">{{article.publisher.name}}</h6>
                <small>{{article.publisher.bio}}</small>
                <div style="margin-top: 7px">
                    <a :href="`/@${article.publisher.user}`" class="btn btn-success btn-sm">Ver perfil</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .weeklyArticlePageContainer {
        width: 100%;
    }

    .weeklyArticlePage {
        width: 50%;
        margin: 4em auto 0 auto;
    }

    .weeklyArticlePageBanner {
        height: 287px;
        background-size: cover;
        background-position: center;
        padding: 2rem;
    }

    .weeklyArticlePageBackButton {
        padding: 7px 12px;
        background: rgba(0, 0, 0, 0.5);
        font-size: 16px;
        color: #f2f2f2;
        border-radius: 3px
    }

    .weeklyArticleFooter {
        width: 50%;
        display: flex;
        align-items: center;
        margin: 0 auto;
        margin-top: 4rem;
        margin-bottom: 2rem;
    }
    
    .weeklyArticlePublisherPicture {
        width: 42px;
        height: 42px;
        border-radius: 21px;
        overflow: hidden;
        margin-right: 12px;
        display: flex;
        align-items: center;

    }

    .weeklyArticlePublisherPicture img {
        width: 100%;
    }

    .articlePublisher {
        margin: 0;
    }

    @media screen and (max-width: 1218px){
        .weeklyArticlePage {
            width: 60%;
        }

        .weeklyArticleFooter {
            width: 60%;
        }
    }

    @media screen and (max-width: 837px){
        .weeklyArticlePage {
            width: 70%;
        }

        .weeklyArticleFooter {
            width: 70%;
        }
    }

    @media screen and (max-width: 712px){
        .weeklyArticlePage {
            width: 80%;
        }

        .weeklyArticleFooter {
            width: 80%;
        }
    }

        @media screen and (max-width: 512px){
        .weeklyArticlePage {
            width: 90%;
        }

        .weeklyArticleFooter {
            width: 90%;
        }
    }

</style>
<script>

    import firebase from 'firebase'
    import '@/assets/css/feed.css'

    export default {
        data(){
            return {
                article: {
                    title: '',
                    abstract: '',
                    content: '',
                    picture: '',
                    publisher: {
                        name: '',
                        picture: '',
                        bio: '',
                        user: ''
                    }
                }
            }
        },
        created: function(){
            firebase.firestore()
            .collection('articles')
            .get()
            .then((articles) => {
                const article = articles.docs[0];
                this.article.title = article.data()['title']
                this.article.abstract = article.data()['abstract']
                document.getElementById('articleContent').innerHTML = article.data()['content']

                firebase.firestore()
                .collection('users')
                .doc(article.data()['publisher'])
                .get()
                .then((user) => {
                    this.article.publisher.name = user.data()['name']
                    this.article.publisher.user = user.data()['user']
                    this.article.publisher.bio = user.data()['bio']
                })

                firebase.storage()
                .ref(`/articles/weekly`)
                .getDownloadURL()
                .then((url) => {
                    document.getElementById('pageBanner').style.backgroundImage = `url(${url})`
                })

                firebase.storage()
                .ref(`/profile_photos/${article.data()['publisher']}`)
                .getDownloadURL()
                .then((url) => {
                    this.article.publisher.picture = url
                })
            })
        }
    }

</script>