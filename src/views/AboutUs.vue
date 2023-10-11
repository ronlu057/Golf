<template>
    <div class="about_box">
        <div class="about_box2_in">
            <div class="text_RL2">
                <div class="txt_Lb"><img src="../../public/images/img_06.png" alt=""></div>
                <div class="txt_Rb">
                    <div class="about_txt t1s">ABOUT</div>
                    <div class="about_txt2 t2s">
                        <h2>{{ $t("ind-about-slogan2.slogan") }}</h2>
                    </div>
                    <div class="txt_sty02">
                        {{ $t("ind-about-slogan3.slogan") }}
                    </div>
                    <div class="addt_02">
                        <div class="abot2_one">
                            <div class="item_txtbox3">
                                <h2>{{ $t("ind-about-content1.contx-title") }}</h2>
                                <ul>
                                    <li>{{ $t("ind-about-content1.contx-txt") }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="abot2_one">
                            <div class="item_txtbox3">
                                <h2>{{ $t("ind-about-content2.contx-title") }}</h2>
                                <ul>
                                    <li>{{ $t("ind-about-content2.contx-txt") }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.about_box {
    background: rgb(37, 168, 93);
    background: -moz-linear-gradient(top, rgba(37, 168, 93, 1) 0%, rgba(14, 126, 134, 1) 100%);
    background: -webkit-linear-gradient(top, rgba(37, 168, 93, 1) 0%, rgba(14, 126, 134, 1) 100%);
    background: linear-gradient(to bottom, rgba(37, 168, 93, 1) 0%, rgba(14, 126, 134, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#25a85d', endColorstr='#0e7e86', GradientType=0);
}

.about_box2_in {
    background-color: #FFF;
    margin-left: 15px;
    padding: 40px 0;
}

.text_RL2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    max-width: 80vw;
    flex-direction: row-reverse;
}

.txt_Lb {
    width: 40%;
}

.txt_Lb img {
    max-width: 100%;
    border: 0;
    vertical-align: middle;
}

.txt_Rb {
    width: 55%;
}

.t1s {
    margin-top: 0px;
}

.t2s {
    width: 100%;
    font-size: 30px;
    padding-bottom: 40px;
    float: left;
}

.txt_sty01 {
    color: #468f74;
    font-size: 20px;
    line-height: 20px;
    font-family: "Outfit";
}

.txt_sty02 {
    font-size: 1.4rem;
    line-height: 1.71;
}

.abot2_one {
    border-radius: 10px;
    border: 1px solid #CCCCCC;
    padding: 15px 20px;
    font-size: 13px;
    margin-bottom: 20px;
}
.item_txtbox3 {
    width: 100%;
    margin-right: 30px;
    display: inline-flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.item_txtbox3 h2 {
    width: 100%;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    color: #468f74;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.item_txtbox3>ul {
    width: 100%;
    height: auto;
    float: left;
}

.item_txtbox3>ul>li {
    display: inline-flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: stretch;
}

.item_txtbox3>ul>li>svg {
    font-size: 0.7rem;
    color: #468f74;
    margin-top: 7px;
    margin-right: 3px;
}
@media screen and (max-width:840px){
    .text_RL2 {
        flex-wrap: wrap;
        justify-content: center;
    }
    .txt_Lb {
        width: 80%;
        order: 2;
    }
    .txt_Rb {
        width: 100%
    }
}
</style>