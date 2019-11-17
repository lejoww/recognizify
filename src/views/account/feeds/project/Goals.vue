<template>
    <!-- <p>Las metas te ayudan a que todo lo que hagas en tu proyecto con Recognizify vaya entorno a ellas.</p><br> -->
    <div id="goals">
        <div class="modal fade" id="addGoalModal" tabindex="-1" role="dialog" aria-labelledby="addGoalModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="border: none;">
                        <h2 class="modal-title">Crea una meta</h2>
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
                            </div>
                            <div class="form-group">
                                <label>De 1 a 100 ¿Qué grado de importancia crees que tiene esta meta?</label>
                                <input type="number" class="form-control" placeholder="76" min="0" max="100" v-model="goal.importance">
                            </div>
                            <div class="form-group">
                                <label>Si tuvieras que definir con una sola palabra tu meta, ¿Con cuál la harías?</label>
                                <input type="text" class="form-control" placeholder="Productividad" v-model="goal.word">
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

            <div class="dashboardContent">
                <div class="projectSummaryTitle">
                    <h3>
                        Metas
                        <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addGoalModal">
                            <svg width="18" height="18" stroke="#ffffff" stroke-width="2">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#plus"/>
                            </svg>
                            Crear una meta
                        </button>
                    </h3><br>
                </div>
                <div class="goalsField" v-if="goals.length > 0">
                    <div class="card goalCard" style="width: 18rem;" :key="goalData['name']" v-for="(goalData, name, motivation) in goals">
                        <div class="card-body">
                            <h5 class="card-title" :key="name">{{goalData['name']}}</h5>
                            <p class="card-text" :key="motivation">{{goalData['motivation']}}</p>
                        </div>
                    </div>
                </div>
                <div class="nonGoalsField" v-if="goals.length == 0">
                    <div>
                        <h3 style="color: #9e95aa;">No tienes nuevas metas</h3>
                        <p style="color: #9e95aa;">Las metas te ayudan a que todo lo que hagas dentro de Recognizify gire en torno a ellas.</p>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    import Profile from '@/components/Profile.vue'
    import LateralPanel from '@/components/LateralPanel.vue'
    import BurgerMenu from '@/components/BurgerMenu.vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/goals.css'

    export default {
        data(){
            return {
                goal: {
                    name: '',
                    motivation: '',
                    importance: '',
                    word: ''
                },
                goals: []
            }
        },
        created: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/dashboard/select')
            } else {
                this.getGoals()
            }
        },
        components: {
            Profile,
            LateralPanel,
            BurgerMenu
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
                    importance: this.goal.importance,
                    word: this.goal.word
                })
                .then(() => window.location.reload())
            },
            getGoals: function(){
                firebase.firestore()
                .collection('projects')
                .doc(this.$route.params.projectId)
                .collection('goals')
                .get()
                .then(goals => {
                    goals.forEach(goal => {
                        this.goals.push({
                            name: goal.data()['name'],
                            motivation: goal.data()['motivation']
                        })
                    })
                })
            }
        }
    }

</script>