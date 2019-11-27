<template>
    <div class="moduleFeature">
        <h4 class="moduleFeatureTitle">{{this.featureName}}</h4>
        <p class="moduleFeatureDescription">{{this.featureDescription}}</p>
    </div>
</template>
<script>

    import '@/assets/css/feature.css'
    export default {
        props: [
            'featureName',
            'featureDescription'
        ]
    }

</script>