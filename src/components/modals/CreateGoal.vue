<template>
        <div class="modal fade" id="addGoalModal" tabindex="-1" role="dialog" aria-labelledby="addGoalModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-success" style="border: none;">
                        <h2 class="modal-title text-white">Crea una meta</h2>
                    </div>
                    <div class="modal-body">
                        <div class="form-container">
                            <div class="form-group">
                                <label>¿Cuál es la meta?</label>
                                <input type="text" class="form-control" placeholder="Ejm. Promocionar los productos por redes sociales" autocomplete="off" spellcheck="false" v-model="goal.name">
                            </div>
                            <div class="form-group">
                                <label>Escribe una frase que te motive a hacerlo</label>
                                <input type="text" class="form-control" placeholder='"A hombros de gigantes"' autocomplete="off" spellcheck="false" v-model="goal.motivation">
                            </div><br>
                            <div class="overline">PASOS PARA CUMPLIRLO</div>
                            <div class="bg-success" style="padding: 1rem">
                                <div class="form-group">
                                    <label class="text-white">Primer paso</label>
                                    <input type="text" class="form-control" placeholder="Explica en cuatro palabras qué debes hacer" v-model="goal.steps.one"><br>
                                </div>
                                <div class="form-group">
                                    <label class="text-white">Segundo paso</label>
                                    <input type="text" class="form-control" placeholder="Explica en cuatro palabras qué debes hacer" v-model="goal.steps.two"><br>
                                </div>
                                <div class="form-group">
                                    <label class="text-white">Tercer paso</label>
                                    <input type="text" class="form-control" placeholder="Explica en cuatro palabras qué debes hacer" v-model="goal.steps.third"><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="border: none">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" @click="saveGoal">Crear meta</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

    import firebase from 'firebase'
    export default {
        data: function(){
            return {
                goal: {
                    name: '',
                    motivation: '',
                    steps: {
                        one: '',
                        two: '',
                        third: ''
                    }
                },
            }
        },
        methods: {
            saveGoal: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('goals')
                .add({
                    name: this.goal.name,
                    motivation: this.goal.motivation,
                    steps: {
                        one: this.goal.steps.one,
                        two: this.goal.steps.two,
                        third: this.goal.steps.third
                    }
                })
                .then(() => window.location.reload())
            },
        }
    }

</script>