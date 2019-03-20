<template>
  <div class="course-intro">
    <header-block></header-block>
    <div class="banner section-pb100">
      <banner-block>
        <div class="bannerbox">
          <div class="title">初级机器学习训练营</div>
          <div class="subtitle">项目+原理+代码 快速入门人工智能领域</div>
          <button class="btn center-block"><router-link to="/order">购买课程</router-link></button>
        </div>
      </banner-block>
    </div>
    <div class="section-pb100">
      <adjust-people></adjust-people>
    </div>
    <div class="section-pb100">
      <carrer-guide></carrer-guide>
    </div>
    <div class="teacher section-pb100">
      <div class="container">
        <teacher></teacher>
      </div>
    </div>
    <div class="team section-pb100">
      <team></team>
    </div>
    <div class="section-pb100">
      <program></program>
    </div>
    <div class="section-pb100">
      <category></category>
    </div>
  </div>
</template>

<script>
import HeaderBlock from '../../components/header'
import BannerBlock from '../../components/course-introduce/poster'
import AdjustPeople from '../../components/course-introduce/adjust-people'
import CarrerGuide from '../../components/course-introduce/carrer-guide'
import Teacher from '../../components/course-introduce/teacher'
import Team from '../../components/course-introduce/team'
import Program from '../../components/course-introduce/program'
import Category from '../../components/course-introduce/category'

export default {
  components: {
    HeaderBlock,
    BannerBlock,
    AdjustPeople,
    CarrerGuide,
    Teacher,
    Team,
    Program,
    Category
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  position: relative;
  .bannerbox{
    position: absolute;
    top: 60px;
    left: 19%;
    .title{
      font-size: 2.34375rem;
      color: @font-white;
      padding-bottom: 38px;
    }
    .subtitle{
      font-size: 1.171875rem;
      color: @font-white;
      padding-bottom: 38px;
    }
    .btn{
      background: @blue-lighter;
      color: @font-white;
      font-size: 1rem;
      padding: 8px 35px;
      border-radius: 2px;
      border-color: @blue-lighter;
    }
  }
}
</style>
