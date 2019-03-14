<template>
  <div id="index">
    <div class="section">
      <div class="container">
        <div class="title text-center">
          <p>精品课程训练营</p>
        </div>
        <training-course></training-course>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="title text-center">
          <p>高级课程训练营</p>
        </div>
        <high-level></high-level>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="title text-center">
          <p>基础入门精品课</p>
        </div>
        <start-course></start-course>
      </div>

    </div>
    <div class="section teacher">

      <div class="container">
        <div class="title text-center">
          <p>我们的师资团队</p>
        </div>
        <teacher-info></teacher-info>
      </div>
    </div>
    <div class="teacher-bg">
      <img src="../assets/images/icon/Bg.png" />
    </div>
    <div class="section weare">
      <div class="container">
        <div class="title text-center">
          <p>人工只能+在线教育：我们是教育行业的变革者</p>
        </div>
        <we-are></we-are>
      </div>
    </div>
  </div>
</template>

<script>
import HighLevel from '../components/course/highLevel'
import StartCourse from '../components/course/start'
import TrainingCourse from '../components/course/training'
import TeacherInfo from '../pages/default/teacher'
import WeAre from '../pages/default/weare'

export default {
  components: {
    HighLevel,
    StartCourse,
    TrainingCourse,
    TeacherInfo,
    WeAre
  }
}
</script>

<style lang="less" scoped>
.section{
  margin-top: 60px;
  position: relative;
  z-index: 10;
  .container{
    width: @main-width;
    margin: auto;
  }
  .title{
    color: @gray;
    font-size: 20px;
  }
}
.teacher-bg{
  width: 100%;
  position: absolute;
  top: 1050px;
  img{
    width: 100%;
  }
}
.weare{
  background: linear-gradient(0.99turn, rgba(226,235,252,.6), rgba(226,235,252,0) 15%);
}
</style>
