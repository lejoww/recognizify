<template>
    <div class="christmasLandingLayout">
        <div class="christmasLandingBanner">
            <div class="christmasBannerLogo">
                <img src="@/assets/logo-common-navidad.png" width="312px">
                <h1 class="christmasBannerTitle">Un regalo que potencia tus ideas.</h1>
                <p class="christmasBannerMessage">En navidad, lanzamos caracteristicas que potencian tu habilidad. ¿Preparado para esto?. Desliza la pantalla hacia abajo, muy despacio.</p>
            </div>
        </div>
        <div class="christmasLandingFeatures">
            <h2 class="christmasLandingFeaturesTitle">A que no te imaginas todas las nuevas caracteristicas que tenemos</h2>
            <p class="christmasLandingFeaturesMotivation" style="text-align: center">Por cierto, baja hasta el final de la página, tenemos una gran sorpresa.</p>
            
            <div class="featureCardsContainer">
                <div class="featureCard">
                    <div class="icon">📎</div>
                    <span class="featureCardTitle">Enlaces</span>
                    <p class="featureCardDescription">Crea enlaces de importancia para tus proyectos. Así siempre están ahí, al alcance de todos.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🎨</div>
                    <span class="featureCardTitle">Nuevo diseño</span>
                    <p class="featureCardDescription">Más cómodo y flexible, útil en cualquier momento, en cualquier lugar, como nuestra filosofía.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🧠</div>
                    <span class="featureCardTitle">Motor de ayuda para proyectos</span>
                    <p class="featureCardDescription">Cuando creas un proyecto, seleccionas de qué se trata. Así podemos ayudarte más.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">📚</div>
                    <span class="featureCardTitle">Módulo de tareas</span>
                    <p class="featureCardDescription">Un módulo interconectado a todos los demás. Entonces todo lo que hagas en él podrá influir y ayudarte con los demás.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🎯</div>
                    <span class="featureCardTitle">Seguimiento de objetivos</span>
                    <p class="featureCardDescription">Conectamos el módulo de tareas (Tasks) con el de Metas (Goals). Ahora tus tareas siempre irán de la mano con tus objetivos, y podrás hacer seguimiento estadístico.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🧔</div>
                    <span class="featureCardTitle">Perfiles</span>
                    <p class="featureCardDescription">Ahora puedes ver los perfiles de otra gente, e invitarlos a tus proyectos fácilmente.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🔒</div>
                    <span class="featureCardTitle">Seguridad de tus proyectos</span>
                    <p class="featureCardDescription">Protegemos tus datos. Hacemos mantenimiento constante para protegerte.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🚀</div>
                    <span class="featureCardTitle">RecognizifyHeroes</span>
                    <p class="featureCardDescription">Un programa para aquellos que quieren ser parte de nuestro equipo. Porque son importantes para nosotros y sabemos que los demás lo son para ellos.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">☕</div>
                    <span class="featureCardTitle">FocusedMode</span>
                    <p class="featureCardDescription">Puedes ponerle una estrellita a tus objetivos en Tasks. Así tu equipo se centrará en eso.</p>
                </div>
                <div class="featureCard">
                    <div class="icon">🎙</div>
                    <span class="featureCardTitle">Anuncios</span>
                    <p class="featureCardDescription">No es un módulo. Pero es un espacio donde todo tu equipo puede saber qué esta pasando de entrada.</p>
                </div>
            </div>
        </div>
        <div class="christmasLandingCourse">
            <h1 class="christmasLandingCourseTitle text-white">¿Pero sabes que es lo mejor de todo?</h1>
            <p class="christmasLandingCourseMotivation text-white">A partir de ahora, en Recognizify también enseñamos. Ahora entregamos <strong>cursos.</strong></p>
            <div class="courseCard">
                <span>Cómo hacer un equipo productivo</span>
                <div><small>Este curso saldrá en unos días.</small></div><br>
                <div>
                    <div class="form-inline">
                        <input type="text" class="form-control" placeholder="Escribe tu correo electrónico para inscribirte al curso">
                        <button class="btn btn-secondary btn-sm" style="margin: 0 0 0 12px">Inscribirse</button>
                    </div>
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

    import '@/assets/css/christmas.css'
    import '@/assets/css/landing.css'
    export default {}

</script>