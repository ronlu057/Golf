<script setup>
  import Carousel from "./../views/Carousel.vue"
  import Features from "./../views/Features.vue"
  import AboutUs from "./../views/AboutUs.vue"
  import Download from "./../views/Download.vue"
</script>

<template>
    <!----------------------輪播圖區------------------------------------------->
    <section  class="index_banner">
      <Carousel />
    </section>
    <!----------------------內容區--------------------------------------------->
    <section id="content" class="index_function">
      <Features />
    </section>
    <!----------------------關於我們區----------------------------------------->
    <section id="about" class="index_aboutus">
      <AboutUs />
    </section>
    <!----------------------下載APP區----------------------------------------->
    <section id="Dw" class="index_download">
      <Download />
    </section>
</template>

<style lang="sass">
.index_banner, .index_function, .index_aboutus, .index_download
  width: 100%
  height: auto
  float: left
  background-color: #eeeeee
.index_function
  background-color: transparent
.index_banner
  margin-top: 80px
.index_download
  height: 400px
  background-image: url("./../../public/images/dl_bg.jpg")
  display: flex
  flex-wrap: wrap
  align-items: center
  background-size: 100% auto
  background-position: center bottom
  background-repeat: no-repeat
@media screen and (max-width:840px)
  .index_download
    background-size: auto 100%
@media screen and (max-width:480px)
  .index_function, .index_banner, .index_aboutus, .index_download
    overflow: hidden
</style>