<template>
    <div id="board">
        <div class="screenContent">
            <Profile/>
            <div class="dashboardContent">
                <LateralPanel/>
                <div class="modal fade in" id="helpingModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="border-bottom: 0">
                                <div style="width: 100%; margin: 0 auto; text-align: center">
                                    <h1 class="modal-title">Boards</h1>
                                    <p class="text-muted">Una nueva forma de transmitir ideas</p>
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p><strong>Boards</strong> es un módulo más de la familia de Recognizify. Permite que todo tu equipo pueda aportar ideas y mantenerlas frescas, en todo momento. Podrás convertirlas en tareas, objetivos, crear listas con ellas y más. Explora y descubre.</p>
                                <img src="@/assets/ilustrations/meeting.png" width="100%">
                            </div>
                            <div class="modal-footer" style="border-top: 0">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="projectBoard">
                    <div class="row">
                        <input type="text" class="form-control-special form-control-xl" spellcheck="false" placeholder="Escribe el nombre del tablero">
                    </div>
                    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src="@/assets/isotipe-color.svg" class="rounded mr-2" width="32px" height="32px" alt="...">
                            <strong class="mr-auto">Recognizify</strong>
                            <!-- <small class="text-muted">11 mins ago</small> -->
                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="toast-body">
                            Hola, bienvenido al módulo de Boards de Recognizify. Aquí todo tu equipo puede dejar notas y contribuir.
                            <a href="#" data-toggle="modal" data-target="#helpingModal">Da click aquí para saber más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'

    import LateralPanel from '@/components/LateralPanel.vue'
    import Profile from '@/components/Profile.vue'
    import UserNavbar from '@/components/UserNavbar.vue'

    import '@/assets/css/feed.css'
    import '@/assets/css/board.css'

    export default {
        components: {
            LateralPanel,
            Profile,
            UserNavbar
        },
        mounted: function(){
            if (this.$router.history.current.params["projectId"] == 'undefined') {
                this.$router.push('/select')
            }
        }
    }

</script>