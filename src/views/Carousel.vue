<script setup>
    import { ref } from 'vue'

    const scroll = ref( false )
    const total = ref(5)
    const animationDuration = 20
    const active = ref(0)
    const preactive = ref(0)

    const img = function(n){
        return {
            backgroundImage:`url(../../public/images/banner0${n}.jpg)`,
            animationDuration: `${animationDuration}s`,
            //animationDelay: `${(n-1)*animationDuration/2}s`
        }
    }

    window.addEventListener('scroll', function() {
        scroll.value = (window.scrollY > 80)
    })

    setInterval(function() {
        preactive.value = active.value
        active.value = (active.value + 1 + total.value) % total.value
    },animationDuration/2*1000)

</script>

<template>
    <div class="VB" :class="{scroll}">
        <ul class="VBList">
            <li v-for="n in total" :key="n.id" :style="img(n)" :class="{ animate: active === n-1 || preactive === n-1 }"></li>
        </ul>
        <div class="v_txtphoto">
            <div class="v_txtLift">
                <h1>{{ $t("ind-banner.text1") }}</h1>
                <h2>{{ $t("ind-banner.text2") }}</h2>
                <h2>{{ $t("ind-banner.text3") }}</h2>
            </div>
            <div class="v_photos"><img src="../../public/images/photo_01.png" alt=""></div>
        </div>
        <div class="bgfrom">
            <div class="vb_laterphoto"><img src="../../public/images/5d.png" alt=""></div>
            <div class="vb_ball_b01"><img src="../../public/images/golf_ball.png" alt=""></div>
            <div class="vb_ball_b02"><img src="../../public/images/golf_ball.png" alt=""></div>
            <div class="vb_ball_b03"><img src="../../public/images/golf_ball.png" alt=""></div>
        </div>
        <div class="VB_bg"></div>
    </div>
</template>

<style >
.VB {
    position: relative;
    width: 100%;
    height: 100VH;
    background-color: #eeeeee
}
.VBList {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #949494;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    z-index: 3;
}
.scroll .VBList{
    width: 1100px;
    height: 300px;
    position: relative;
}

.scroll .VBList::before{
    content: "";
    position: absolute;
    top:0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 5px 5px 10px 2px rgba(20,20,20,.25);
    transition: all 0.5s;
}

.scroll .VBList::after{
    content: "";
    position: absolute;
    top:0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: -5px -5px 10px 5px rgba(255,255,255,.75);
    transition: all 0.5s;
}

.VBList > li{
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0;
}

.VBList > li.animate{
    animation-name: VBanim;
    animation-timing-function: linear;
}
.v_txtphoto{
    width: 80%;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    display: flex;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
    z-index: 3;
}
.v_txtLift{
    width: 50%;
    height: 100%;
    padding: 0px 30px;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-shadow: 0 0 12px rgba( 25,46,3,.85 );
}
.v_txtLift h1{
    width: 100%;
    font-size: 80px;
    font-weight: 900;
    color: #fff;
    text-align: right;
    line-height: 80px;
}
.v_txtLift h2{
    width: 100%;
    font-size: 50px;
    font-weight: 600;
    color: #fff;
    text-align: right;
    line-height: 80px;
}
.v_photos{
    width: 50%;
    height: 100%;
    padding: 0px 30px;
    display: inline-flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}
.v_photos > img{
    width: auto;
    height: auto;
    max-height: 100%;
    float: left;
}
.bgfrom{
    width: 100%;
    height: 110vh;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    position: absolute;
    z-index: 1;
    overflow: hidden;
}
.vb_laterphoto{
    width: auto;
    position: absolute;
    height: 85VH;
    right: 20px;
    bottom: 3.25vw;
}
.vb_laterphoto > img{
    width: auto;
    height: 100%;
    float: left;
}
.vb_ball_b01{
    width: 150px;
    height: auto;
    position: absolute;
    top: 28vw;
    left: 4vw;
    animation: BALLanim 15s linear infinite;
}
.vb_ball_b01 img{
    width: 100%;
    height: auto;
}

.vb_ball_b02{
    width: 350px;
    height: auto;
    position: absolute;
    top: 4vw;
    left: 26vw;
    transform: rotate(80deg);
    animation: BALLanim2 30s linear infinite;
}
.vb_ball_b02 img{
    width: 100%;
    height: auto;
}

.vb_ball_b03{
    width: 260px;
    height: auto;
    position: absolute;
    top: 38vw;
    left: 70vw;
    transform: rotate(130deg);
    animation: BALLanim 20s linear infinite;
}
.vb_ball_b03 img{
    width: 100%;
    height: auto;
}
.VB_bg{
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../public/images/bg01.jpg");
    opacity: .15;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
}


@keyframes VBanim {
    0%{
        opacity: 0;
        background-size: 140% auto;
    }
    25%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    75%{
        opacity: 0;
    }
    to{
        opacity: 0;
        background-size: 120% auto;
    }
}

@keyframes BALLanim {
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes BALLanim2 {
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@media screen and (max-width:1450px){
    .v_txtLift h1 {
        font-size: 60px;
    }
    .v_txtLift h2 {
        font-size: 36px;
        line-height: 60px;
    }
    .v_photos {
        height: 80%;
    }
    .scroll .VBList{
        width: 900px;
        height: 250px;
    }
    .vb_laterphoto {
        height: 42VW;
        bottom: 10.25vw;
    }
}
@media screen and (max-width: 1280px){
    .v_txtphoto{
        width: 90%;
    }
    .v_txtLift h1 {
        font-size: 52px;
    }
    .v_txtLift , .v_photos{
        padding: 0px 10px;
    }
    .scroll .VBList{
        width: 840px;
        height: 240px;
    }
    .VB{
        height: 66VW;
    }
    .vb_ball_b02{
        width: 300px;
        left: 20vw;
    }
    .vb_ball_b03{
        width: 180px;
        left: 72vw;
    }
    .v_photos{
        height: 100%;
    }
    .v_txtphoto{
        height: 360px;
    }
}
@media screen and (max-width: 1024px){
    .VB{
        height: 70VW;
    }
    .scroll .VBList{
        width: 70VW;
    }
    .v_txtLift h1{
        font-size: 46px;
    }
    .v_txtLift h2{
        font-size: 30px;
        line-height: 45px;
    }
    .v_photos{
        height: 80%;
    }
    .vb_laterphoto {
        height: 56VW;
        bottom: 14.25vw;
        right: -20px;
    }
}
@media screen and (max-width: 840px){
    .VB{
        height: calc( 100VH - 80px );
    }
    
    .scroll .VBList{
        width: 100vw;
        height: calc( 100VH - 80px );
    }
    .v_txtphoto{
        height: 100vh;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .v_txtLift{
        width: 100%;
        height: auto;
    }
    .v_txtLift h1{
        font-size: 60px;
        text-align: center;
    }
    .v_txtLift h2{
        font-size: 48px;
        line-height: 66px;
        text-align: center;
    }
    .v_photos{
        width: 100%;
        height: 40%;
        justify-content: center;
    }
    .bgfrom{
        z-index: 5;
    }
    .vb_laterphoto{
        height: 68VW;
        bottom: 0.25vw;
    }
    .bgfrom{
        height: calc( 100vh - 80px );
    }
    .vb_ball_b03 {
        width: 180px;
        left: 50vw;
        top: 94vw;
    }
    .vb_ball_b02{
        top: -12vw
    }
    .vb_ball_b01{
        top: 60vw;
        left: -4vw;
    }

    @keyframes VBanim {
        0%{
            opacity: 0;
            background-size: auto 140%;
            background-position: center left;
        }
        25%{
            opacity: 1;
        }
        50%{
            opacity: 1;
        }
        75%{
            opacity: 0;
        }
        to{
            opacity: 0;
            background-size: auto 120%;
            left: 0px;
        }
    }}
    @media screen and (max-width:480px){
        .v_txtLift h1 {
            font-size: 34px;
        }
        .v_txtLift h2 {
            font-size: 22px;
            line-height: 34px;
        }
        .vb_ball_b02 {
            width: 200px;
            left: 40vw;
            top: -22vw
        }
        .v_photos {
            width: 100%;
            height: auto;
        }
        .v_photos img {
            width: 100%;
            height: auto;
        }
        .vb_ball_b01{
            left: -26vw;
        }
        .vb_ball_b03 {
            width: 120px;
            left: 25vw;
            top: initial;
            bottom: 10vw;
        }
        .vb_laterphoto {
            height: 100VW;
            bottom: 1.25vw;
            right: -20px;
        }
        
    }

</style>