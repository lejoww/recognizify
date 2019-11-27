<template>
    <div>
        <div class="presentationTitle">
            <h1>{{this.presentationTitle}}</h1>
        </div>
        <span class="presentationSummary">
            {{this.presentationSummary}}
        </span>
        <a :href="this.callToActionRef" class="btn btn-blue btn-lg text-white">
            {{this.callToAction}}
        </a>
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