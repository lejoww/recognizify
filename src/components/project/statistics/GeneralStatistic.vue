<template>
    <div class="projectSummaryPurpleCard">
        <canvas width="800" height="240" id="canvas" v-if="activityDates.length > 1"></canvas>
        <div class="nonActivityPoints" v-if="activityDates.length == 0 || activityDates.length == 1">
            <p class="text-white"><strong>Aquí aparece la actividad de tu proyecto en estadísticas, comienza a usar más la app y poco a poco aparecerán nuevos puntos</strong></p>
        </div>
    </div>
</template>
<script>

    import firebase from 'firebase'
    import Chart from 'chart.js'

    export default {
        data: function(){
            return {
                projectName: '',
                projectUid: this.$route.params["projectId"],
                activityPoints: [],
                activityDates: []
            }
        },
        mounted: function() {
            this.setChartData()
        },
        methods: {
            setChart: function() {
                var ctx = document.getElementById('canvas').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: this.activityDates,
                        datasets: [{
                            data: this.activityPoints,
                            borderColor: 'rgb(0, 194, 255)',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: false,
                            labels: {
                                display: false
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false,
                                    drawTicks: false
                                },
                                ticks: {
                                    beginAtZero: true,
                                    display: false
                                }
                            }],
                            xAxes: [{
                                gridLines :{
                                    drawOnChartArea: false,
                                    drawTicks: false
                                },
                                ticks: {
                                    display: false
                                }
                            }]
                        }
                    }
                })
            },
            setChartData: function(){
                firebase.firestore()
                    .collection("projects")
                    .doc(this.projectUid)
                    .collection("dates")
                    .get()
                    .then(dates => {
                        for(let i = 0; i <= dates.docs.length; i++) {
                            this.activityDates.push(i)
                        }

                        this.activityPoints.push(0)
                        dates.forEach(date => {
                            this.activityPoints.push(date.data()['activityPoints'])
                        })

                        this.setChart()
                    })
            }
        }
    }

</script>