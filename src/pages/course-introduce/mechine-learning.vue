<template>
  <div class="course-intro">
    <div class="banner section-pb100">
      <banner-block></banner-block>
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
import Teacher from '../../components/course-introduce/teacher'
import Team from '../../components/course-introduce/team'
import Program from '../../components/course-introduce/program'
import Category from '../../components/course-introduce/category'

export default {
  components: {
    BannerBlock,
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
