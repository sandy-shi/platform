<template>
  <div class="">
    <div class="aside-main-width">
      <my-course :courseLists = 'courseLists' :tags = 'tags'></my-course>
    </div>
    <div class="aside-main-width">
      <my-course :courseLists = 'courseLists' :tags = 'tagsjoin'></my-course>
    </div>
  </div>
</template>

<script>
import MyCourse from '../../../components/course/my-course'
export default {
  components: {
    MyCourse
  },
  data () {
    return {
      tags: '学习中',
      tagsjoin: '加入的课程',
      courseLists: [
        {
          title: '知识图谱入门班',
          percent: 13
        },
        {
          title: '深度学习入门班',
          percent: 16
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
