<template>
    <div>
        <!-- <Features/> -->
        <div class="loginLoader" v-if="loading == true">
            <div>
                <div class="loaderSpinner"></div><br>
                <h4 style="letter-spacing: -1px">Procesando tus datos...</h4>
            </div>
        </div>
        <div class="instructCopy">
            <span class="text-gray">Las imagenes en la aplicación no son de nuestra autoría. Si deseas saber más, ingresa a <router-link to="/credits" class="text-dark">nuestro sitio de referencias.</router-link></span>
        </div>
        <div id="login">
            <div class="slideshow" id="slideshow-example" data-component="slideshow">
                <div role="list">
                    <div class="slide active">
                        <img class="carouselImage" src="@/assets/ilustrations/people.png" alt="">
                        <h4 class="carouselTitle">Conecta con tu equipo</h4>
                        <span>Tu equipo en comunicación constante</span>
                    </div>
                    <div class="slide">
                        <img class="carouselImage" src="@/assets/ilustrations/professionals.png" alt="">
                        <br>
                        <h4 class="carouselTitle" style="margin-top: 2rem">Sé un profesional en tu área</h4>
                        <span>También capacitamos en gestión de proyectos</span>
                    </div>
                </div>
            </div>
            <div class="form-container">
                <img class="form-logo" src="@/assets/logo-common-cutted.png" alt="Logotipo de Recognizify" width="148px">
                <div v-if="login == false">
                    <h1 class="loginTitle">Donde los creadores unen sus fuerzas para innovar.</h1>
                    <div class="button-column">
                        <div>
                            <button class="btn btn-primary btn-option-login" @click="() => this.login = true" style="margin-bottom: 12px">
                                Continuar con correo electrónico
                                <svg class="feather-menu">
                                    <use xlink:href="@/assets/svg/feather-sprite.svg#arrow-right" stroke="#fff" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="btn btn-outline-dark btn-option-login" @click="signInWithGoogle">
                                Continuar con Google
                                <img src="@/assets/ilustrations/google.png" width="19">
                            </button>
                        </div>
                        <br>
                    </div>
                </div>
                <div v-if="login == true">
                    <br>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-lg form-control-login" v-on:keyup.enter="signInWithEmailAndPassword" v-model="email" aria-describedby="emailHelp" placeholder="Correo electrónico" spellcheck="false">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control form-control-lg form-control-login" v-on:keyup.enter="signInWithEmailAndPassword" v-model="password" placeholder="Tu contraseña personal">
                    </div>
                    <!-- <button class="btn btn-primary btn-login" id="dynamicButton" v-on:click="signInWithEmailAndPassword">Iniciar sesión</button> -->
                    <!-- <button class="btn"><router-link to="/signup">Registrarse</router-link></button> -->
                    <div style="margin-top: 12px">
                        <span style="font-size: 14px">También puedes
                            <a href="/forgot" class="forgot-password">restablecer tu contraseña</a>
                        </span>
                    </div>
                </div>
            </div>

            <div class="alert alert-danger" id="loginAlert" role="alert">
                Parece que no ingresaste bien los datos. Vuelve a intentarlo.
            </div>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import '@/assets/css/login.css'

    import BannerNotice from '@/components/models/BannerNotice.vue'
    import Features from '@/components/modals/Features.vue'

    export default {
        name: 'login_entry',
        data (){
            return {
                email: '',
                password: '',
                account: true,
                login: false,
                loading: false
            }
        },
        components: {
            BannerNotice,
            Features
        },
        mounted(){
            firebase.auth().onAuthStateChanged(user => {
                if (user) { window.location = '/dashboard/select' }
            })
            const slideshows = document.querySelectorAll('[data-component="slideshow"]');
            slideshows.forEach((slideshow) => {
                let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
                var index = 0, time = 5000;
                slides[index].classList.add('active');
                setInterval( () => {
                    slides[index].classList.remove('active');
                    index++;
                    if (index === slides.length) index = 0;
                    slides[index].classList.add('active');
                }, time);
            });
        },
        methods: {
            signInWithEmailAndPassword: function(){
                this.loading = true;
                var loginButton = document.getElementById('dynamicButton')
                loginButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    firebase.auth().onAuthStateChanged(user => {
                        if (user.emailVerified){
                            firebase.firestore().collection('users').doc(user.uid).get()
                                .then(res => {
                                    if (res.data() == null | res.data() == undefined){
                                        this.$router.push('/register/info')
                                    } else {
                                        this.$router.push('/dashboard/select')
                                    }
                                })
                        } else {
                            this.$router.push('/verify')
                        }
                    })
                })
                .catch(err => {
                    let $loginAlert = document.querySelector('#loginAlert')
                    $loginAlert.style.display = 'block'
                    setTimeout(() => { 
                        $loginAlert.style.display = 'none' 
                    }, 3000)
                    loginButton.innerHTML = 'Iniciar sesión'
                    this.loading = false;
                })
            },
            signInWithGoogle: function() {
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then((res) => {
                    this.$router.push('/dashboard/select')
                })
                .catch((err) => alert('No se pudo autorizar la autenticación, comuníquese con soporte'))
            }
        }
    }

    // <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">Vector de Fondo creado por pikisuperstar - www.freepik.es</a>

</script>