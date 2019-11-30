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
            typeformEmbed.makeWidget(content, 'https://recognizifyio.typeform.com/c/OjFQj2?typeform-cui-avatar=https://images.typeform.com/images/DrWqUb3zkBQL', {
                hideHeaders: true,
                hideFooter: true,
                opacity: 75,
                buttonText: "Take the survey!",
                onSubmit: function () {
                    console.log('Typeform successfully submitted')
                }
            })
        }
    }

</script>