<template>
    <div class="projectSummaryPurpleCard">
        <canvas id="canvas"></canvas>
        <!-- <div class="nonActivityPoints" v-if="activityDates.length == 0 || activityDates.length == 1">
            <p class="text-white">Aquí aparece la actividad de tu proyecto en estadísticas, comienza a usar más la app y poco a poco aparecerán nuevos puntos</p>
        </div> -->
    </div>
</template>
<style>

    #canvas {
        width: 100% !important;
        height: 100% !important;
    }

</style>
<script>

    import firebase from 'firebase'
    import Chart from 'chart.js'

    export default {
        data: function(){
            return {
                projectName: '',
                projectUid: this.$route.params.projectId,
                activityPoints: [],
                activityDates: []
            }
        },
        created: function() {
            this.setChartData()
        },
        methods: {
            setChart: function() {
                var ctx = document.getElementById('canvas').getContext('2d');
                ctx.canvas.height = 120;
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: this.activityDates,
                        datasets: [{
                            data: this.activityPoints,
                            borderColor: '#6610F2',
                            borderWidth: 3,
                            backgroundColor: '#fafafa'
                        }]
                    },
                    options: {
                        backgroundColor: '#fff',
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: {
                            display: false,
                            labels: {
                                display: true
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false,
                                    drawTicks: false,
                                    display: false
                                },
                                ticks: {
                                    beginAtZero: true,
                                    display: false
                                }
                            }],
                            xAxes: [{
                                gridLines :{
                                    drawOnChartArea: false,
                                    drawTicks: false,
                                    display: false
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
                .collection('projects')
                .doc(this.projectUid)
                .collection('dates')
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