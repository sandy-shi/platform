<template>
  <div>
    <swiper :options = "swiperOption">
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: true,
        speed: 1000
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
