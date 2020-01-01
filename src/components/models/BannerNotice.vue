<template>
    <div class="heroesBannerNotice">
        <div style="width: 80%;display: flex; flex-direction: row; align-items: center">
            <!-- <img class="heroesRobot" src="@/assets/ilustrations/robot.png" width="54px"> -->
            <div style="display: flex; flex-direction: column; margin-left: 0.4rem">
                <h2 class="heroesBannerTitle">Creadores<span class="text-blue">2020 </span><span class="badge badge-success">Disponible ahora mismo, inicia sesión.</span></h2>
                <span class="heroesBannerMotivation">Una versión renovada que conserva el honor de los creadores que quieren cambiar la forma de ver la vida.</span>
            </div>
        </div>
        <div class="heroesBannerTimer">
            <!-- <span style="margin: 0; font-weight: 700" v-if="finalCount == false">Faltan solo</span>
            <h3 class="heroesBannerTimerCount text-success">{{this.count}}</h3>
            <div v-if="finalCount == true">
                <button class="btn btn-success btn-sm" aria-disabled="on">Mira lo nuevo</a>
            </div> -->

            <!-- <a href="/surveys/beta/last" class="btn btn-warning btn-sm">Ayúdanos aquí</a> -->
        </div>
    </div>
</template>
<script>

    import '@/assets/css/bannerAd.css'
    export default {
        data(){
            return {
                count: '',
                finalCount: false
            }
        },
        created: function(){
            const getRemainingTime = (deadline) => {
                let now = new Date(),
                remainTime = (new Date(deadline) - now + 1000) / 1000,
                remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
                remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
                remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)

                return {
                    remainSeconds,
                    remainMinutes,
                    remainHours,
                    remainTime
                }
            }

            const countdown = (deadline, elem, finalMessage) => {
                const timerUpdate = setInterval(() => {
                    let t = getRemainingTime(deadline);
                    this.count = `${t.remainHours}H : ${t.remainMinutes}M : ${t.remainSeconds}S`;

                    if(t.remainTime <= 1) {
                        clearInterval(timerUpdate);
                        this.count = finalMessage;
                        this.finalCount = true;
                    }

                }, 1000)
            };

            countdown('Dec 24 2019 18:00:00 GMT-0500', 'clock', '');

        }
    }

</script>