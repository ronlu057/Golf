<script setup>

</script>
<template>
    <div class="FTTOP">
        <div class="Features_top">FEATURES</div>
        <div class="feat_box"></div>
        <div class="feat_photo_box"><img src="./../../public/images/img_01.png" alt=""></div>
        <div class="abouts">
            <div class="about_no1">
                <div class="about_txt_all">
                    <div class="about_txt">ABOUT</div>
                    <div class="about_txt2">
                        <h2>{{ $t("ind-about-slogan.slogan") }}</h2>
                    </div>
                </div>
                <div class="item_01">
                    <div class="item_photo"><img src="./../../public/images/img_02.jpg" alt=""></div>
                    <div class="item_txtbox">
                        <h2>{{ $t("ind-fat-t01.title") }}</h2>
                        <ul>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t01.t01-1ex") }}
                            </li>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t01.t01-2ex") }}
                            </li>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t01.t01-3ex") }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="abouts2">
            <div class="about_no1">
                <div class="item_02">
                    <div class="item_txtbox2">
                        <h2>{{ $t("ind-fat-t02.title") }}</h2>
                        <ul>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t02.t01-1ex") }}
                            </li>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t02.t01-2ex") }}
                            </li>
                        </ul>
                    </div>
                    <div class="item_photo"><img src="./../../public/images/img_03.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <div class="abouts3">
            <div class="about_no1">
                <div class="item_01">
                    <div class="item_photo"><img src="./../../public/images/img_04.jpg" alt=""></div>
                    <div class="item_txtbox">
                        <div class="wrapper">
                            <div class="sun"></div>
                            <div class="cloud">
                                <div class="cloud1">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div class="cloud1 c_shadow">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="cloud_s">
                                <div class="cloud1">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div class="cloud1 c_shadow">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="cloud_vs">
                                <div class="cloud1">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div class="cloud1 c_shadow">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="haze"></div>
                            <div class="haze_stripe"></div>
                            <div class="haze_stripe"></div>
                            <div class="haze_stripe"></div>
                            <div class="thunder"></div>
                            <div class="rain">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="sleet">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <h2>{{ $t("ind-fat-t01.title") }}</h2>
                        <ul>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t01.t01-1ex") }}
                            </li>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t01.t01-2ex") }}
                            </li>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t01.t01-3ex") }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="abouts4">
            <div class="about_no1">
                <div class="item_02">
                    <div class="item_txtbox2">
                        <h2>{{ $t("ind-fat-t02.title") }}</h2>
                        <ul>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t02.t01-1ex") }}
                            </li>
                            <li>
                                <fa :icon="['far', 'circle-dot']" />
                                {{ $t("ind-fat-t02.t01-2ex") }}
                            </li>
                        </ul>
                    </div>
                    <div class="item_photo"><img src="./../../public/images/img_03.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.FTTOP {
    position: relative;
    margin-top: -280px;
}

.Features_top {
    width: 100%;
    height: auto;
    text-align: center;
    font-family: "Outfit";
    font-size: 100px;
    line-height: 100px;
    font-weight: 900;
    letter-spacing: 0.075em;
    -webkit-text-stroke: 1px rgba(63, 121, 0, .65);
    -webkit-text-fill-color: transparent;
}

.feat_box {
    width: 100%;
    height: 30px;
    padding: 30px 0px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.feat_box::before {
    content: "";
    width: 20px;
    height: 20px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    background-color: #fff;
}

.feat_photo_box {
    width: 100%;
    height: auto;
    float: left;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
}

.feat_photo_box img {
    width: auto;
    height: 450px;
    float: left;
}

.abouts {
    width: 100%;
    height: auto;
    float: left;
    background-image: url("./../../public/images/img_bg03.jpg");
    background-size: 60%;
    background-color: #edf4f2;
    background-position: top right;
    background-repeat: no-repeat;
    margin-top: -180px;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.about_no1 {
    width: 100%;
    max-width: 1200px;
    height: auto;
    float: left;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.item_photo {
    width: 500px;
    height: auto;
    float: left;
}

.item_photo img {
    width: 100%;
    max-width: 100%;
    height: auto;
    float: left;
}

.about_txt_all {
    width: 100%;
    height: auto;
    float: left;
}

.about_txt {
    width: 100%;
    height: auto;
    float: left;
    font-size: 20px;
    line-height: 20px;
    font-family: "Outfit";
    color: rgba(63, 121, 0, .65);
    margin-top: 100px;
}

.about_txt2 h2 {
    width: 100%;
    height: auto;
    float: left;
    font-size: 30px;
    line-height: 30px;
    margin-top: 10px;
}

.item_01 {
    width: 100%;
    height: auto;
    float: left;
    display: inline-flex;
    justify-content: flex-start;
    align-content: center;
    align-items: stretch;
    margin-top: 40px;
    padding-bottom: 60px;
}

.item_txtbox {
    width: 36%;
    margin-left: 30px;
    display: inline-flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.item_txtbox h2 {
    width: 100%;
    color: #468f74;
    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.item_txtbox>ul {
    width: 100%;
    height: auto;
    float: left;
}

.item_txtbox>ul>li {
    display: inline-flex;
    justify-content: flex-end;
    align-content: flex-start;
    align-items: stretch;
}

.item_txtbox>ul>li>svg {
    font-size: 0.7rem;
    color: #468f74;
    margin-top: 7px;
    margin-right: 3px;
}

.abouts2 {
    width: 100%;
    height: auto;
    float: left;
    background-image: url("./../../public/images/img_bg04.jpg");
    background-size: auto;
    background-color: #edf4f2;
    background-position: top left;
    background-repeat: no-repeat;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.about_no1 {
    width: 100%;
    max-width: 1200px;
    height: auto;
    float: left;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.item_02 {
    width: 100%;
    height: auto;
    float: left;
    display: inline-flex;
    justify-content: flex-end;
    align-content: center;
    align-items: stretch;
    margin-top: 40px;
    padding-bottom: 60px;
}

.item_txtbox2 {
    width: 36%;
    margin-right: 30px;
    display: inline-flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.item_txtbox2 h2 {
    width: 100%;
    color: #468f74;
    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.item_txtbox2>ul {
    width: 100%;
    height: auto;
    float: left;
}

.item_txtbox2>ul>li {
    display: inline-flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: stretch;
}

.item_txtbox2>ul>li>svg {
    font-size: 0.7rem;
    color: #468f74;
    margin-top: 7px;
    margin-right: 3px;
}

.abouts3 {
    width: 100%;
    height: auto;
    float: left;
    background-image: url("./../../public/images/img_bg05.jpg");
    background-size: 30%;
    background-color: #edf4f2;
    background-position: center right;
    background-repeat: no-repeat;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.abouts4 {
    width: 100%;
    height: auto;
    float: left;
    background-image: url("./../../public/images/img_bg06.jpg");
    background-size: auto 80%;
    background-color: #edf4f2;
    background-position: center left;
    background-repeat: no-repeat;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.wrapper{
  width: 150px;
  height: 150px;
  position: relative;
  margin:  0px auto;
}
.sun{
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 85px;
  height: 85px;
  background: #f9db62;
  border-radius: 360px;
  opacity: 1;
  animation: sun 10s 0s linear infinite;
}

.cloud{
  position: absolute;
  bottom: 12px;
  left: 8px;
  z-index: 2;
  opacity: 0;
  animation: cloud 10s 0s linear infinite;
}

.cloud .cloud1:not(.c_shadow) ul li{
  animation: cloudi 10s 0.1s linear infinite;
}

.cloud .cloud1:not(.c_shadow):before{
  animation: cloudi 10s 0s linear infinite;
}

.cloud_s{
  position: absolute;
  bottom: 70px;
  left: 150px;
  transform: scale(0.7,0.7) matrix(-1, 0, 0, 1, 0, 0);
  z-index: 1;
  opacity: 0;
  animation: cloud_s 10s 0s linear infinite;
}

.cloud_s .c_shadow{
  transform: scale(1.02,1.02);
}

.cloud_vs{
  position: absolute;
  bottom: 90px;
  left: 30px;
  transform: scale(0.5,0.5);
  z-index: 0;
  opacity: 0;
  animation: cloud_vs 10s 0s linear infinite;
}

.c_shadow{
  z-index: 4 !important;
  left: -5px;
  bottom: -3px !important;
}

.c_shadow:before{
  background: #edf4f2 !important;
}

.c_shadow ul li{
  width: 60px !important;
  height: 60px !important;
  background: #edf4f2 !important;
  float: left;
  position: absolute;
  bottom: -2px !important;
  border-radius: 360px;
}

.c_shadow ul li:nth-child(2){
  width: 80px !important;
  height: 80px !important;
  background: #edf4f2 !important;
  float: left;
  border-radius: 360px;
  position: absolute;
  bottom: 16px !important;
  left: 25px !important;
}

.c_shadow ul li:nth-child(3){
  width: 70px !important;
  height: 70px !important;
  background: #edf4f2 !important;
  float: left;
  border-radius: 360px;
  position: absolute;
  bottom: 6px !important;
  left: 60px !important;
}

.c_shadow ul li:last-child{
  width: 60px !important;
  height: 60px !important;
  background: #edf4f2 !important;
  float: left;
  border-radius: 360px;
  position: absolute;
  bottom: 0px;
  left: 90px;
}


.cloud1{
  position: absolute;
  bottom: 0px;
  z-index: 5;
}

.cloud1:before{
  content: '';
  position: absolute;
  bottom: 0px;
  left: 28px;
  width: 90px;
  height: 20px;
  background: #fff;
}

.cloud1 ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.cloud1 ul li{
  width: 50px;
  height: 50px;
  background: #fff;
  float: left;
  border-radius: 360px;
}

.cloud1 ul li:nth-child(2){
  width: 70px;
  height: 70px;
  background: #fff;
  float: left;
  border-radius: 360px;
  position: absolute;
  bottom: 18px;
  left: 25px;
}

.cloud1 ul li:nth-child(3){
  width: 60px;
  height: 60px;
  background: #fff;
  float: left;
  border-radius: 360px;
  position: absolute;
  bottom: 8px;
  left: 60px;
}

.cloud1 ul li:last-child{
  width: 50px;
  height: 50px;
  background: #fff;
  float: left;
  border-radius: 360px;
  position: absolute;
  bottom: 0px;
  left: 90px;
}

.haze{
  background: #edf4f2;
  position: absolute;
  bottom: 50px;
  left: 0px;
  width: 200px;
  height: 45px;
  z-index: 6;
  opacity: 0;
  animation: haze 10s 0s linear infinite;
}

.haze_stripe{
  background: #a3b5c7;
  position: absolute;
  bottom: 75px;
  left: 20px;
  width: 115px;
  height: 10px;
  z-index: 17;
  opacity: 0;
  border-radius: 360px;
  animation: haze_stripe 10s 0.1s linear infinite;
}

.haze_stripe:nth-child(6){
  bottom: 55px;
  animation: haze_stripe 10s 0.2s linear infinite;
}
.haze_stripe:last-child{
  bottom: 35px;
  animation: haze_stripe 10s 0.4s linear infinite;
}

.thunder{
  position: absolute;
  bottom: 100px;
  left: 65px;
  width: 12px;
  height: 12px;
  background: #f9db62;
  transform: skew(-25deg);
  opacity: 0;
  animation: thunder 10s 0s linear infinite;
}

.thunder:before{
  content: '';
  position: absolute;
  top: 11px;
  left: 0px;
  width: 25px;
  height: 8px;
  background: #f9db62;
}

.thunder:after{
  content: '';
  position: absolute;
  width: 0; 
  height: 0;
  top: 18px;
  right: -14px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-top: 20px solid #f9db62;
  transform: skew(5deg);
}

.rain{
  position: absolute;
  bottom: 0px;
  left: 25px;
}

.rain ul{
  list-style: none;
  margin: 0;
  padding: 0px;
}

.rain ul li{
  float: left;
  position: absolute;
  bottom: 50px;
  left: 50px;
  margin-left: 20px;
  background: #6ab9e9;
  height: 40px;
  width: 10px;
  border-radius: 360px;
  transform: rotate(35deg);
  opacity: 0;
}

.rain ul li:first-child{
  animation: raini 10s 0s linear infinite;
}

.rain ul li:nth-child(2){
  animation: rainii 10s 0.2s linear infinite;
}

.rain ul li:last-child{
  animation: rainiii 10s 0.4s linear infinite;
}

.sleet{
  position: absolute;
  bottom: 0px;
  left: 25px;
}

.sleet ul{
  list-style: none;
  margin: 0;
  padding: 0px;
}

.sleet ul li{
  float: left;
  position: absolute;
  bottom: 50px;
  left: 50px;
  margin-left: 20px;
  background: #fff;
  height: 40px;
  width: 10px;
  border-radius: 360px;
  transform: rotate(35deg);
  opacity: 0;
}

.sleet ul li:first-child{
  animation: raini 10s 1.0s linear infinite;
}

.sleet ul li:nth-child(2){
  animation: rainii 10s 1.4s linear infinite;
}

.sleet ul li:last-child{
  animation: rainiii 10s 1.6s linear infinite;
}

.text{
  position: absolute;
  bottom: 0px;
}

.text ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.text ul li{
  position: absolute;
  bottom: -50px;
  width: 150px;
  color: #fff;
  font-family: 'Raleway Dots', cursive;
  font-weight: 100;
  font-size: 20px;
  text-align: center;
  opacity: 0;
}

.text ul li:first-child{
  animation: fade_in 10.0s 0s linear infinite;
}

.text ul li:nth-child(2){
  animation: fade_in 10.0s 1.6s linear infinite;
}

.text ul li:nth-child(3){
  animation: fade_in 10.0s 2.4s linear infinite;
}

.text ul li:nth-child(4){
  animation: fade_in 10.0s 3.4s linear infinite;
}

.text ul li:nth-child(5){
  animation: fade_in 10.0s 4.0s linear infinite;
}

.text ul li:nth-child(6){
  animation: fade_in 10.0s 5.4s linear infinite;
}

.text ul li:nth-child(7){
  animation: fade_in 10.0s 6.4s linear infinite;
}

.text ul li:nth-child(8){
  animation: fade_in 10.0s 7.2s linear infinite;
}

.text ul li:nth-child(9){
  animation: fade_in 10.0s 8.2s linear infinite;
}

@keyframes sun{
  0%{
    opacity: 1;
    bottom: 35px;
    right: 35px;
  }
  4%{
    bottom: 80px;
    right: 80px;
  }
  4.5%{
    bottom: 75px;
    right: 75px;
    opacity: 1;
  }
  40%{
    opacity: 1;
  }
  41%{
    bottom: 75px;
    right: 75px;
    opacity: 0;
  }
  100%{
    opacity: 0;
    bottom: 0px;
    right: 0px;
  }
}

@keyframes cloud{
  0%{
    transform: scale(0.8);
    left: 120px;
    bottom: 35px;
    opacity: 0;
  }
  2%{
    opacity: 1;
  }
  3.5%{
    bottom: 35px;
    left: 10px;
    opacity: 1;
  }
  16%{
    transform: scale(0.8);
  }
  18%{
    transform: scale(0.95);
  }
  19%{
    transform: scale(0.9);
  }
  48%{
    opacity: 1;
    bottom: 35px;
  }
  50%{
    bottom: 70px;
  }
  64%{
    
  }
  96%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    bottom: 70px;
    left: 10px;
  }
}

@keyframes cloud_s{
  0%{
    transform: scale(0.6);
    opacity: 0;
    bottom: 40px;
    left: 18px;
  }
  23%{
    opacity: 0;
  }
  24%{
    opacity: 1;
    bottom: 40px;
    left: 30px;
  }
  28%{
    opacity: 1;
    bottom: 85px;
    left: 60px;
  }
  32%{
    transform: scale(0.6);
  }
  34%{
    transform: scale(0.75);
  }
  35%{
    transform: scale(0.7);
  }
  48%{
    opacity: 1;
  }
  49%{
    opacity: 0;
  }
  100%{
    transform: scale(0.7);
    opacity: 0;
    bottom: 85px;
    left: 60px;
  }
}

@keyframes cloud_vs{
  0%{
    opacity: 0;
    bottom: 85px;
    left: 60px;
  }
  39%{
    opacity: 0;
  }
  40%{
    opacity: 1; 
    bottom: 85px;
    left: 60px;
  }
  42%{
    bottom: 125px;
    left: 10px;
  }
  43%{
    bottom: 120px;
    left: 15px;
  }
  48%{
    opacity: 1;
  }
  49%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    bottom: 120px;
    left: 15px;
  }
}

@keyframes haze{
  0%{
    opacity: 0;
  }
  48%{
    height: 0px;
    opacity: 0;
  }
  49%{
    height: 45px;
    opacity: 1;
  }
  57%{
    opacity:1;
    height: 45px;
  }
  58%{
    opacity: 0;
    height: 0px;
  }
}

@keyframes haze_stripe{
  0%{
    opacity: 0;
  }
  48%{
    opacity: 0;
  }
  49%{
    opacity: 1;
  }
  56%{
    opacity:1;
  }
  57%{
    opacity: 0;
  }
}

@keyframes cloudi{
  0%{
    background: #fff;
  }
  56%{
    background: #fff;
  }
  57%{
    background: #92a4b6;
  }
  100%{
    background: #92a4b6;
  }
}

@keyframes thunder{
  0%{
    opacity: 0;
    bottom: 100px;
    left: 65px;
  }
  62%{
    opacity: 0;
    bottom: 100px;
    left: 65px;
  }
  64%{
    opacity: 1;
    bottom: 50px;
    left: 60px;
  }
  65%{
    opacity: 1;
    bottom: 55px;
    left: 61px;
  }
  72%{
    opacity: 1;
    bottom: 55px;
    left: 61px;
  }
  73%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    bottom: 55px;
  }
}

@keyframes raini{
  0%{
    opacity: 0;
    bottom: 100px;
    left: 60px;
  }
  72%{
    opacity: 0;
    bottom: 100px;
    left: 60px;
  }
  73%{
    opacity: 1;
    bottom: 15px;
    left: 50px;
  }
  74%{
    opacity: 1;
    bottom: 25px;
    left: 52px;
  }
  80%{
    opacity: 1;
    bottom: 25px;
    left: 52px;
  }
  81%{
    opacity: 0;
    bottom: -15px;
    left: 6px;
  }
  100%{
    opacity: 0;
    bottom: 20px;
  }
}

@keyframes rainii{
  0%{
    opacity: 0;
    bottom: 100px;
    left: 30px;
  }
  72%{
    opacity: 0;
    bottom: 100px;
    left: 30px;
  }
  73%{
    opacity: 1;
    bottom: 15px;
    left: 20px;
  }
  74%{
    opacity: 1;
    bottom: 25px;
    left: 22px;
  }
  80%{
    opacity: 1;
    bottom: 25px;
    left: 22px;
  }
  81%{
    opacity: 0;
    bottom: -15px;
    left: -6px;
  }
  100%{
    opacity: 0;
    bottom: 20px;
  }
}

@keyframes rainiii{
  0%{
    opacity: 0;
    bottom: 100px;
    left: 0px;
  }
  72%{
    opacity: 0;
    bottom: 100px;
    left: 0px;
  }
  73%{
    opacity: 1;
    bottom: 15px;
    left: -10px;
  }
  74%{
    opacity: 1;
    bottom: 25px;
    left: -8px;
  }
  80%{
    opacity: 1;
    bottom: 25px;
    left: -8px;
  }
  81%{
    opacity: 0;
    bottom: -15px;
    left: -28px;
  }
  100%{
    opacity: 0;
    bottom: 20px;
  }
}

@keyframes fade_in{
  0%{
    opacity: 0;
  }
  8%{
    opacity: 1;
  }
  9%{
    opacity: 1;
  }
  11%{
    opacity: 1;
  }
  12%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
}
@media screen and (max-width:1450px){
.FTTOP {
  margin-top: -220px;
}
.feat_photo_box img {
  height: 400px;
}
}
@media screen and (max-width:1280px){
  .FTTOP {
    margin-top: -250px;
  }
}
@media screen and (max-width:1024px){
  .FTTOP {
      margin-top: -160px;
  }
  .abouts ,.abouts2, .abouts3, .abouts4 {
    padding: 0px 20px;
  }
}
@media screen and (max-width:1024px){
  .FTTOP {
    margin-top: 50px;
  }
  .feat_box::before {
    background-color: #ec0101;
  }
  .abouts{
    margin-top: -130px;
  }
  .item_01,.item_02 {
    flex-wrap: wrap;
    padding-bottom: 40px;
  }
  .item_photo {
    width: 100%;
  }
  .item_txtbox{
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .item_02 {
    margin-top: 0px;
  }
  .abouts2{
    background-position: bottom left;
  }
  .item_txtbox2{
    order: 2;
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
  }
  .item_txtbox{
    margin-top: 40px;
  }
}
@media screen and (max-width:480px){
  .Features_top {
    font-size: 50px;
  }
  .feat_photo_box img {
    height: 290px;
  }
  .abouts{
    margin-top: -80px;
  }
  .item_txtbox h2 {
    font-size: 24px;
  }
  .item_txtbox2 h2 {
    font-size: 24px;
  }
}
</style>