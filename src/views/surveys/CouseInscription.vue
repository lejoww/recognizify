<template>
    <div style="width: 100vw; height: 100vh">
        <div id="content" style="width: 100%; height: 100%"></div>
    </div>
</template>
<script>

    import * as typeformEmbed from '@typeform/embed'
    export default {
        mounted: function(){
            let content = document.getElementById('content')
            typeformEmbed.makeWidget(content, 'https://recognizifyio.typeform.com/c/QH4u7L?typeform-cui-avatar=https://images.typeform.com/images/TZYMWY7pnS9H', {
                hideHeaders: true,
                hideFooter: true,
                opacity: 75,
                buttonText: "Toma la encuesta",
                onSubmit: function () {
                    console.log('La encuesta se ha enviado correctamente.')
                }
            })
        }
    }

</script>