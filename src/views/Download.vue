<template>
    <div class="dol_box_in">
        <div class="tit2">
            <P>APP download</P>
            <h2>{{ $t("dow-content.dw_ctx") }}</h2>
        </div>
        <div class="dw_logo_box">
            <div class="dw_logo"><img src="../../public/images/TS_logo.png"></div>
        </div>
        <div class="dl_one">
            <div class="dw_icon"><img src="../../public/images/google-play-badge.svg" alt=""></div>
            <div class="dw_icon"><img src="../../public/images/App_Store.svg" alt=""></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass">
.dol_box_in
    width: 100%
.tit2 
    text-align: center
    width: 100%
    p
        font-size: 20px
        color: #f5f5f5
        font-weight: bold
    h2
        font-size: 25px
        font-weight: bold
.dl_one
    width: 100%
    text-align: center
    padding-top: 10px
    display: flex
    justify-content: center
    align-content: center
    align-items: center
.dw_icon
    width: auto
    height: 40px
    float: left
    padding: 0px 5px
    img
        width: auto
        height: 100%
        float: left
.dw_logo_box
    width: 100%
    height: auto
    float: left
    display: flex
    justify-content: center
    align-content: center
    align-items: center
    padding: 20px 0px
.dw_logo
    width: 160px
    height: 160px
    float: left
    img
        width: 100%
        height: 100%
        float: left
@media screen and (max-width:480px)
    .dl_one
        padding-top: 40px
</style>