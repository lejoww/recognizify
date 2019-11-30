<template>
    <div>
        <div class="presentationTitle">
            <h1>{{this.presentationTitle}}</h1>
        </div>
        <span class="presentationSummary">
            {{this.presentationSummary}}
        </span>
        <button :href="this.callToActionRef" class="btn btn-dark btn-lg" style="font-weight: 800; margin: 1em 0">
            {{this.callToAction}}
        </button>
    </div>
</template>
<script>

    export default {
        props: [
            'presentationTitle',
            'presentationSummary',
            'callToAction',
            'callToActionRef'
        ]
    }

</script>