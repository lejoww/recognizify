<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="exampleModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body" style="border: none">
                    <div class="userInfo">
                        <div>
                            <h5 class="userCompleteName">Hola, {{user.name}}</h5>
                            <small class="text-success userUsername">@{{user.user}}</small>
                        </div>
                        <div style="margin-left: 12px">
                            <a :href="`/@${user.user}`" class="btn btn-outline-dark btn-sm">Tu perfil</a>
                        </div>
                    </div>
                </div>
                <div class="rank">
                    <a class="btn btn-outline-dark" href="/account/configuration">
                        <svg class="feather-menu">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#settings" />
                        </svg>
                        <span style="margin-left: 6px">Configuración</span>
                    </a>
                    <a class="btn btn-outline-dark" href="/dashboard/select">
                        <svg class="feather-menu">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#package" />
                        </svg>
                        <span style="margin-left: 6px">Tus proyectos</span>
                    </a>
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">Volver</button>
                    <button type="button" class="btn btn-danger btn-sm" @click="closeSession">Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

    .userCompleteName {
        letter-spacing: -0.5px;
        font-weight: 700;
        margin: 0;
    }

    .userUsername {
        font-size: 13px;
        font-weight: 700;
    }

    .userInfo {
        padding: 0.5rem;
        display: flex;
    }

    .rank {
        display: flex;
        padding: 0 1rem;
        flex-wrap: wrap;
    }

    .btn-outline-dark {
        display: flex; 
        align-items: center;
        margin-right: 3px;
    }

</style>
<script>

    import firebase from 'firebase';
    export default {
        data(){
            return {
                user: {
                    name: '',
                    user: '',
                    photo: ''
                }
            }
        },
        created: function(){
            firebase.auth().onAuthStateChanged(user => {
                firebase.firestore()
                .collection('users')
                .doc(user.uid)
                .get()
                .then((user) => {
                    this.user.name = user.data()['nickname'];
                    this.user.user = user.data()['user'];
                })
            })
        },
        methods: {
            closeSession: function(){
                firebase.auth().signOut()
                .then(() => window.location = '/')
            }
        }
    }

</script>