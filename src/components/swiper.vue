<template>
  <div>
    <swiper :options = "swiperOption">
      <swiper-slide class="swiper-img">I'm Slide 1</swiper-slide>
      <swiper-slide class="swiper-img">I'm Slide 2</swiper-slide>
      <swiper-slide class="swiper-img">I'm Slide 3</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
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
.swiper-img{
  background: yellowgreen;
  width: 100%;
  height: 570px;
}
</style>
