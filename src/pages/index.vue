<template>
  <div id="index">
    <div class="poster">
      <swiper-block></swiper-block>
    </div>
    <div class="section">
      <div class="title text-center">
        <p>精品课程训练营</p>
      </div>
      <training-course></training-course>
    </div>
    <div class="section">
      <div class="title text-center">
        <p>高级课程训练营</p>
      </div>
      <high-level></high-level>
    </div>
    <div class="section">
      <div class="title text-center">
        <p>基础入门精品课</p>
      </div>
      <start-course></start-course>
    </div>
    <div class="section">
      <div class="title text-center">
        <p>我们的师资团队</p>
      </div>
      <teacher-info></teacher-info>
    </div>
  </div>
</template>

<script>
import SwiperBlock from '../components/swiper'
import HighLevel from '../components/course/highLevel'
import StartCourse from '../components/course/start'
import TrainingCourse from '../components/course/training'
import TeacherInfo from '../pages/default/teacher'

export default {
  components: {
    SwiperBlock,
    HighLevel,
    StartCourse,
    TrainingCourse,
    TeacherInfo
  }
}
</script>

<style lang="less" scoped>
.section{
  margin-top: 60px;
  .title{
    font-size: 20px;
  }
}
</style>
