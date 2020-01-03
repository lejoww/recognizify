<template>
    <div class="editorNewArticle" >
        <div class="editorHeader">
            <h3>Agrega un articulo.</h3>
        </div>
        <div class="editorForm">
            <div class="editorFormSectionTitle">
                <h6 class="editorSubtitle">Metadatos del post</h6>
                <small>Información relevante del artículo</small>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Título para el articulo" v-model="post.title">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Abstract del artículo" v-model="post.abstract">
            </div>
            <div class="form-group">
                <label>Imágen de portada para el artículo</label>
                <input type="file" class="form-control-file" @change="saveArticleImage" required>
            </div>
            <br>
            <div class="editorFormSectionTitle">
                <h6 class="editorSubtitle">Promoción de módulo</h6>
                <small>Con los artículos, también se busca promover módulos</small>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Módulo a promocionar" v-model="post.module.name">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Ingrese un color para la promoción del módulo (HEX)" v-model="post.module.color">
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Descripción breve y convincente del módulo" v-model="post.module.description">
                    </div>
                </div>
            </div>
        </div>
        <br>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"/>
        <br>
        <div class="form-group">
            <button class="btn btn-success" @click="savePost">Publicar post</button>
        </div>
    </div>
</template>
<style scoped>

    .editorSubtitle {
        font-family: 'cooper_hewittsemibold';
        font-size: 14px;
        margin: 0;
    }

    .editorFormSectionTitle {
        margin: 1rem 0;
    }

    small {
        color: rgb(155, 170, 184);
        margin: 0;
    }

    .editorNewArticle {
        padding: 2rem;
        width: 60%;
        margin: 0 auto;
        overflow-y: scroll
    }

    .editorNewArticle::-webkit-scrollbar {
        width: 12px;
    }

    .editorNewArticle::-webkit-scrollbar-thumb {
        background-color: rgb(184, 184, 197);
        border: 2.5px solid #F1F2F7;
        border-radius: 6px;
    }

    .editorNewArticle::-webkit-scrollbar-track {
        background-color: #F1F2F7;
    }


    .editorHeader {
        padding: 1rem;
    }

</style>
<script>

    import Vue from 'vue';
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    import firebase, { firestore } from 'firebase';

    export default {
        data() {
            return {
                editor: ClassicEditor,
                editorData: '',
                editorConfig: {},
                post: {
                    title: '',
                    abstract: '',
                    module: {
                        name: '',
                        color: '',
                        description: ''
                    }
                }
            }
        },
        components: {
            ckeditor: CKEditor.component
        },
        methods: {
            saveArticleImage: function(e){
                firebase.storage()
                .ref(`/articles/weekly/`)
                .put(e.target.files[0])
                .then('all is good!')
                .catch((err) => console.error(err))
            },
            savePost: function(){
                firebase.firestore()
                .collection('articles')
                .add({
                    title: this.post.title,
                    abstract: this.post.abstract,
                    module: {
                        name: this.post.module.name,
                        color: this.post.module.color,
                        description: this.post.module.description
                    },
                    content: this.editorData,
                    publisher: firebase.auth().currentUser.uid
                })
                .then(() => window.location = '/dashboard/select')
                .catch((err) => console.log('Error en la creación del artículo ' + err))
            }
        }
    }

</script>