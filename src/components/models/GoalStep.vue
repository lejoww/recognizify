<template>
    <div class="goalStep">
        <div class="progress" style="margin-bottom: 12px">
            <div class="progress-bar bg-success" :style="`width: ${this.value}%`" role="progressbar" :aria-valuenow="this.value" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span class="goalStepTitle" style="display: flex; justify-content: space-between">
            <div class="goalStepNumber">{{this.number}}</div>
            {{this.step}}
        </span>
    </div>
</template>
<script>

    export default {
        props: [
            'number',
            'step',
            'value'
        ]
    }

</script>