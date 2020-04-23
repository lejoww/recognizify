<template>
    <div class="baseContainer">
        <div class="headerContainer">
            <div style="display: flex; align-items: center">
                <img src="@/assets/logo-white-cutted.svg" alt="logo">
                <span class="pageIndicator">Help Center and Support</span>
            </div>
            <div class="profilePhoto">
                <img class="profileImage" src="@/assets/ilustrations/robot-yellow.png" alt="">
            </div>
        </div>

        <div class="searchBanner">
            <h2 class="supertitle text-white" style="font-weight: 700">Hola Pablo, ¿en qué necesitas ayuda?</h2>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <!-- <input type="text" class="searchBannerInput" placeholder="Encuentra aquí la solución"> -->
        </div>

        <div class="pageContainer">
            <div class="questionMenu">
                <a class="helpButton">
                    <img src="@/assets/ilustrations/help-account.png" alt="" width="200">
                    <section>
                        <div>Soporte para cuenta</div>
                        <p>Seguridad, privacidad, cambios.</p>
                    </section>
                </a>
                <a class="helpButton">
                    <img src="@/assets/ilustrations/help-app.png" alt="" width="200">
                    <section>
                        <div>Soporte para app</div>
                        <p>Funciones, bloqueos, robos.</p>
                    </section>
                </a>
            </div>

            <div class="subcontainer">
                <div class="popularArticles">
                    <h4>Preguntas frecuentes</h4><br>
                    <div class="articles">
                        <a class="article">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </a>
                        <a class="article">
                            Lorem, ipsum dolor.
                        </a>
                        <a class="article">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </a>
                        <a class="article">
                            Lorem ipsum dolor sit.
                        </a>
                        <a class="article">
                            Lorem ipsum dolor sit amet.
                        </a>
                    </div>
                </div>
                <section class="generateSupportTicket">
                    <h3 style="color: #fff;">Si no encuentras la solución</h3>
                    <h5 style="color: rgb(189, 188, 195); font-weight: 500;">Puedes contactarnos de otras formas. Si te interesa esta opción puedes</h5>
                    <button>Generar ticket</button>
                </section>
            </div>
            <div class="positionTicket">
                <div class="position">
                    <div>Tu posición es:</div>
                    <div>7 / 10</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/help.css'

    import firebase from 'firebase';
    export default {
        
    }

</script>