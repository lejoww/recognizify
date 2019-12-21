<template>
    <div class="landingBaseLayout">
        <div class="landingHeader">
            <img src="@/assets/logo-common-cutted.svg" width="148px">
            <div>
                <a href="/signin" class="btn btn-outline-dark" style="margin-right: 12px">Inicia sesión</a>
                <a href="/signup" class="btn btn-warning">Regístrate</a>
            </div>
        </div>
        <div class="landingTotalBanner">
            <div class="landingTotalBannerContent">
                <h1>Aqui esta el orden de tus ideas.</h1>
                <h1>Solo debes encontrarlo.</h1>
                <p>Recognizify es una app para administrar tus proyectos en equipo de la forma más facil, con la mejor distribución. En cualquier lugar, en cualquier momento y solo con una conexión a internet.</p>
                <a href="/signin" class="btn btn-success">Comienza ahora</a>
            </div>
            <div>
                <img class="landingTotalBannerImage" src="@/assets/ilustrations/puzzle.png" alt="Personas construyendo rompecabezas (https://www.freepik.es/fotos-vectores-gratis/negocios). Vector de Negocios creado por freepik">
            </div>
        </div>
        <div class="landingReasons">
            <h3>Tres razones para utilizar de Recognizify</h3><br>
            <div class="landingCards">
                <div class="landingCardReason">
                    <img class="landingCardReasonImage" src="@/assets/ilustrations/modules/ExpressionIcon.png">
                    <span class="landingCardReasonTitle">Exprésate</span>
                    <p class="landingCardReasonMessage">Cualquier miembro tu equipo puede aportar sus ideas en cualquiera de los módulos, incluso ¡puede crear los suyos! y tu puedes aportar en ellos.</p>
                </div>
                <div class="landingCardReason">
                    <img class="landingCardReasonImage" src="@/assets/ilustrations/modules/EyeIcon.png">
                    <span class="landingCardReasonTitle">Sincronízate</span>
                    <p class="landingCardReasonMessage">Mantente al pendiente de todo lo que tu equipo haga. Haz un seguimiento y ayúdate de herramientas de medición para conocer el estado de tu equipo.</p>
                </div>
                <div class="landingCardReason">
                    <img class="landingCardReasonImage" src="@/assets/ilustrations/modules/IdeaIcon.png" alt="">
                    <span class="landingCardReasonTitle">Automatiza</span>
                    <p class="landingCardReasonMessage">Las ideas no son objetos. Pero aquí puedes tratarlas como uno. Son como objetos que deben pasar por un proceso.</p>
                </div>
            </div>
        </div>
        <footer class="landingFooter">
            <div class="landingFooterBrand">
                <img src="@/assets/logo-white-cutted.png" width="150px">
                <p class="text-white">Más que una app. Recognizify ayuda a administrar las ideas en los equipos de trabajo en cualquier lugar.</p>
            </div>
            <div class="landingFooterLinks">
                <div class="overline">Nosotros</div>
                <ul>
                    <li><a class="text-white" href="/credits">Créditos</a></li>
                    <li><a class="text-white" href="/heroes">Héroes</a></li>
                    <li><a class="text-white" href="/signin">Ingreso</a></li>
                </ul>
            </div>
            <div class="landingFooterMessage">
                <p class="text-white">Desde 🌐 hacia el 🌍.</p>
            </div>
        </footer>
    </div>
</template>
<script>

    import '@/assets/css/landing.css'
    import '@/assets/css/main.css'
    export default {}

</script>