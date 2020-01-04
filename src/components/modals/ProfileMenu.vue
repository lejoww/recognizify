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
                <div class="padding-rank" v-if="user.roles.admin == true">
                    <h6>Opciones de administrador</h6>
                    <div class="rank">
                        <a class="btn btn-outline-dark" href="/account/admin/articles/new/article">
                            <svg class="feather-menu">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#book" />
                            </svg>
                            <span style="margin-left: 6px">Articulos</span>
                        </a>
                    </div>
                </div>
                <div class="modal-footer" style="border: none">
                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">Volver</button>
                    <button type="button" class="btn btn-danger btn-sm" @click="closeSession">Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase';

    import '@/assets/css/modals.css';
    export default {
        data(){
            return {
                user: {
                    name: '',
                    user: '',
                    photo: '',
                    roles: {
                        admin: false,
                        creator: false,
                        user: true
                    }
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
                    this.user.roles.admin = user.data()['roles']['admin']
                    this.user.roles.creator = user.data()['roles']['creator']
                    this.user.roles.user = user.data()['roles']['user']
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