<template>
    <header>
        <div class="top_all">
            <div class="logo_box"><img src="../assets/img/cs_logo.svg" alt=""></div>
            <nav>
                <div class="menu_item" v-for="menuid in menu_list" :key="menuid.id"><a href="#banner">{{ $t( `${menuid.itemname}`) }}</a></div>
                <div class="language_bar">
                    <select v-model="locale">
                        <option v-for="item in localeOptions" :key="`locale-${item.lang}`" :value="item.lang">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
            </nav>
        </div>
        <div class="separation_line"></div>
    </header>
</template>
<script setup>
import { ref } from "vue"
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const localeOptions = ref([
    {
        lang: 'jp',
        name: '日本語'
    },
    {
        lang: 'en',
        name: 'English'
    },
    {
        lang: 'tw',
        name: '繁體中文'
    },
])
const menu_list = ref([
    {
        itemname: 'indxMenu.function'
    },
    {
        itemname: 'indxMenu.inquiry'
    },
    {
        itemname: 'indxMenu.download'
    }
])

</script>
<style lang="sass">
.logo_box
    width: auto
    height: 46px
    img
        width: auto
        height: 100%
.top_all
    width: 100%
    height: 80px
    padding: 0px 4vw
    display: flex
    justify-content: space-between
    align-items: center
    align-content: center
.menu_item
    width: auto
    height: auto
    float: left
    padding: 0px 12px
    font-weight: 400
    font-size: 18px
    line-height: 28px
    a
        color: #242424
.language_bar
    width: 125px
    height: auto
    float: left
    padding-left: 36px
    position: relative
.language_bar::after
    content: ""
    position: absolute
    width: 26px
    height: 26px
    background-image: url("../assets/img/languages.png")
    background-size: contain
    left: 0px
    img
        width: 18px
        height: 18px
.separation_line
    width: 100%
    height: 6px
    background: linear-gradient(to right, rgba(40,108,59,1) 0%,rgba(61,152,47,1) 20%,rgba(108,184,49,1) 71%,rgba(150,204,106,1) 100%)
    position: absolute
    bottom: 0px
@media screen and (max-width: 840px)
    .menu_item
        display: none
@media screen and (max-width:480px)
    header
        width: 100VW
        overflow: hidden
    .logo_box
        height: 35px
</style>