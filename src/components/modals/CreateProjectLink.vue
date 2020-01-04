<template>
    <div class="modal fade" id="projectCardModal" tabindex="-1" role="dialog" aria-labelledby="projectCardModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-success" style="border: none">
                    <div>
                        <h3 class="modal-title text-white" id="exampleModalLongTitle">Agrega un enlace</h3>
                        <span style="font-weight: 600; color: #DACBF2">Sirven para mostrar direcciones importantantes en el resumen</span>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <svg class="feather-light">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#x" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre del enlace</label>
                        <input type="text" class="form-control" placeholder="p. ej. Sugerencias" v-model="link.title">
                    </div>
                    <div class="form-group">
                        <label>Descripción del enlace</label>
                        <input type="text" class="form-control" placeholder="Describe qué contiene esa tarjeta" v-model="link.description">
                    </div>
                    <div class="form-group">
                        <label>Agrega un enlace al que quieras que el público acceda</label>
                        <input type="text" class="form-control" placeholder="Escribe el enlace al que vas a dirigir" v-model="link.url">
                    </div>
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-info" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-success" @click="saveLink">Agregar enlace</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    // mixins 
    import { AddPoints } from '@/assets/scripts/addActivityPoints.js'

    export default {
        data: function(){
            return{
                link: {
                    title: '',
                    description: '',
                    url: ''
                }
            }
        },
        mixins: [AddPoints],
        methods: {
            saveLink: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('links')
                .add({
                    title: this.link.title,
                    description: this.link.description,
                    url: this.link.url
                })
                .then(() => {
                    this.addActivityPoint()
                    window.location.reload()
                })
                .catch(err => console.log(err))
            }
        }
    }

</script>