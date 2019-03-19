<template>
  <div class="course-intro">
    <div class="banner section-pb100">
      <banner-block></banner-block>
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
import BannerBlock from '../../components/course-introduce/poster'
import AdjustPeople from '../../components/course-introduce/adjust-people'
import CarrerGuide from '../../components/course-introduce/carrer-guide'
import Teacher from '../../components/course-introduce/teacher'
import Team from '../../components/course-introduce/team'
import Program from '../../components/course-introduce/program'
import Category from '../../components/course-introduce/category'

export default {
  components: {
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

</style>
