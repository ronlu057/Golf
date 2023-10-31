<template>
    <footer>
        <div class="foot_box">
            <div class="foot_logo"><img src="./../../public/images/logo_web_w.png" alt=""></div>
            <div class="fot_01">
                <p>ホシミズ•デジタル㈱ HOSHIMIZU DIGITAL Co., Ltd.</p>
                <p>〒107-0062 東京都港区南青山3丁目1番36号 青山丸竹ビル6F</p>
                <p>© 2023</p>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="sass">
footer
    width: 100%
    clear: both
    background-color: #202020
    color: #FFF
    display: inline-flex
    justify-content: center
.foot_box
    padding: 40px 0
    display: flex
    justify-content: space-around
    align-items: center
    font-size: 15px
    max-width: 1200px
.foot_logo
    width: auto
    height: 50px
    margin-right: 50px
    img
        width: auto
        height: 50px
        float: left
@media screen and (max-width:480px)
    .foot_box
        padding: 40px 20px
        flex-wrap: wrap
    .foot_logo
        width: 160px
        height: auto
        margin-right: 0px
        img
            width: 100%
            height: auto
    .fot_01
        font-size: 14px
        text-align: center
    footer
        overflow: hidden
</style>