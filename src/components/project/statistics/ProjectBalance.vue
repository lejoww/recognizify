<template>
    <div class="projectBalanceContainer">
        <div>
            <span class="projectBalanceSubtitle">Balance del proyecto</span>
            <h1 class="projectBalancePercentage">100.00%</h1>
            <div class="projectBalanceButtons">
                <button class="btn btn-primary" disabled>Activar mecanismos</button>
                <button class="btn btn-info" style="margin-left: 7px" disabled>Alertar al equipo</button>
            </div>
        </div>
        <GeneralStatistic/>
    </div>
</template>
<style>

    .projectBalanceContainer {
        width: 100%;
        height: 228px;
        margin: 1rem 0.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .projectBalanceSubtitle {
        font-family: 'Open Sans'; 
        color: #A9A8C1; 
        font-size: 13px; 
        font-weight: 600;
    }

    .projectBalancePercentage {
        margin-top: 12px;
    }

    .projectBalanceButtons {
        display: flex;
        margin-top: 12px;
    }

    @media screen and (max-width: 662px) {
        .projectBalanceContainer {
            flex-direction: column-reverse;
        }
    }

</style>
<script>

    import GeneralStatistic from './GeneralStatistic';
    export default {
        components: {
            GeneralStatistic
        }
    }

</script>