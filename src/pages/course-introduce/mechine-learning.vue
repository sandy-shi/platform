<template>
  <div>
    <div class="banner">
      <banner-block></banner-block>
    </div>
    <div class="teacher">
      <div class="container">
        <teacher></teacher>
      </div>
    </div>
    <div class="team">
      <team></team>
    </div>
  </div>
</template>

<script>
import BannerBlock from '../../components/course-introduce/poster'
import Teacher from '../../components/course-introduce/teacher'
import Team from '../../components/course-introduce/team'

export default {
  components: {
    BannerBlock,
    Teacher,
    Team
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.teacher{
  padding-bottom: 10px;
}
</style>
