<template>
    <div id="survey">
        <div id="content"></div>
    </div>
</template>
<style>
    #content {
        width: 100vw;
        height: 100vh;
    }
</style>
<script>

    import * as typeformEmbed from '@typeform/embed'
    export default {
        mounted: function(){
            let content = document.getElementById('content')
            typeformEmbed.makeWidget(content, 'https://recognizifyio.typeform.com/c/ciBsH7?typeform-cui-avatar=https://images.typeform.com/images/S6tuWJEyYcB6', {
                hideHeaders: true,
                hideFooter: true,
                opacity: 100,
                buttonText: "Ingresa al programa",
                onSubmit: function(){
                    console.log('Registro correctamente enviado')
                }
            })
        }
    }

</script>