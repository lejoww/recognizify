<template>
    <div class="dashboardContent">
        <div class="articlesLayout">
            <div class="articlesHeader">
                <h2>Artículos</h2><br>
            </div>
            <div v-if="articles.length >= 1">
                <div class="articleCard" :key="article" v-for="article in articles">
                    <span class="articleCardTitle">{{article.name}}</span>
                    <a @click="deleteArticle(article.id)" style="margin-left: 2rem; cursor: pointer">
                        <svg class="feather-mini-red">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#trash" />
                        </svg>
                    </a>
                </div>
            </div>
            <div v-else>
                No hay artículos aún.
            </div>
            <a class="btn btn-primary" style="margin-top: 1rem">
                <router-link class="text-white" to="/account/admin/articles/new/article">
                    Crear nuevo artículo
                </router-link>
            </a>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/articles.css'
    import '@/assets/css/feed.css'

    import Vue from 'vue';
    import firebase from 'firebase'
    import { checkAdmin } from '@/assets/scripts/checkAdminPermissions.js'

    export default {
        data(){
            return {
                articles: []
            }
        },
        mixins: [checkAdmin],
        created() {
            this.checkAdminProperties()
        },
        mounted() {
            firebase.firestore()
            .collection('articles')
            .get()
            .then(articles => {
                articles.docs.forEach(article => {
                    this.articles.push({
                        name: article.data().title,
                        id: article.id
                    })
                })
            })
        },
        methods: {
            deleteArticle: function(id){
                firebase.firestore()
                .collection('articles')
                .doc(id)
                .delete()
                .then(() => window.location.reload())
                .catch(() => alert('Hubo problemas eliminando el artículo. Intentalo más tarde o contacta al administrador.'))
            }
        }
    }

</script>