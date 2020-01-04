<template>
    <div class="heroesLayout">
        <div class="heroesBannerNotice">
            <h2 class="heroesBannerTitle">¿Aplicas para la oportunidad?</h2>
            <div class="heroesBannerTimer">
                <span class="text-white" style="font-size: 14px; margin-bottom: 4px">Si aplicaste y aceptas participar</span>
                <a href="/register/heroes" class="btn btn-warning btn-sm">Confirma la invitación</a>
            </div>
        </div>
        <div class="heroesContent">
            <div class="heroesBrand">
                <img src="@/assets/logo-common-heroes.png" width="274px">
            </div>
            <div class="heroesBanner">
                <h1>Somos <strong class="text-success">cultura</strong> que transmite unión, seguridad y motivación</h1>
                <span>Tu ya haces parte. Pero por qué no ir más allá</span>
            </div>  
            <div class="heroesDescription">
                <div class="heroesMinititle text-success">¿De qué se trata?</div>
                RecognizifyHeroes es el programa que reune personas que han aportado activamente en la app. Pero ellas acompañarán al equipo en el camino de construcción de Recognizify. Con ellas, nuestro equipo trabaja en mejorar la app y mejorarse a sí mismos con la retroalimentación de los héroes.
            </div>
            <div class="heroesFeatures">
                <div style="text-align: center">
                    <h3>¿Qué beneficios tiene ser un héroe?</h3>
                    <span class="" style="font-weight: 600">"Ser un héroe es como ser un miembro más del equipo de Recognizify"</span>
                </div><br><br><br>
                <ul>
                    <li>
                        <img src="@/assets/ilustrations/flying.png" width="378px">
                        <div class="info">
                            <!-- <svg class="feather-dark">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#unlock" />
                            </svg> -->
                            <h2>Acceso a versiones nuevas</h2>
                            <span>Como sabes, en Recognizify siempre estamos innovando. Los heroes tienen acceso a versiones nuevas antes de ser abiertas al público.</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/ilustrations/computer.png" width="438px">
                        <div class="info">
                            <!-- <svg class="feather-dark">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#unlock" />
                            </svg> -->
                            <h2>Gestión de procesos</h2>
                            <span>Los heroes podrán acceder a una plataforma para registrar todo tipo de información sobre la app; errores, sugerencias, mejoras y alertas.</span>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/ilustrations/hero.png" width="368px">
                        <div class="info">
                            <!-- <svg class="feather-dark">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#unlock" />
                            </svg> -->
                            <h2>Obtén reconocimiento</h2>
                            <span>Los heroes hacen parte de nuestra cultura, además tienen un reconocimiento especial en ella, ya que representan un papel de líderes que buscan lo mejor.</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="heroesRegisterBanner bg-success">
                <h1 class="text-white" style="text-align: center">¿Te enviaron el correo de oportunidad?</h1><br>
                <a href="/register/heroes" class="btn btn-warning btn-lg text-white" style="font-weight: 700">Puedes aceptar ahora mismo</a>
            </div>
        </div>
    </div>
</template>
<script>

    import '@/assets/css/heroes.css';
    export default {
        
    }

</script>