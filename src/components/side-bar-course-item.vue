<template>
  <li class="sidebar-li">
    <div @click="toggle(chaptorId)">
      <!-- <span v-if='!isFolder'><i class="el-icon-document"></i>第{{chaptorId + 1}}章：{{ model.title }}</span>
      <span v-if='isFolder'>{{chaptorId + 1}}：{{ model.title }}</span> -->
      {{ model.title }}
    </div>
    <ul v-show="open" v-if="isFolder" class="sub-ul">
      <items v-for='(cel, celid) in model.sections' :model='cel' :chaptorId='celid' :key='cel.id'></items>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'items',
  props: ['model', 'chaptorId'],
  data () {
    return {
      open: false,
      // 任务名称
      title: '',
      videoSrc: ''
    }
  },
  computed: {
    isFolder () {
      return this.model.sections && this.model.sections.length
    }
  },
  methods: {
    toggle (chaptorId) {
      if (this.isFolder) {
        this.open = !this.open
      }
      // console.log(this)
      let userId = sessionStorage.userId
      let courseId = location.href.split('?')[1].split('=')[1]
      this.courseId = courseId
      this.$axios.post('/api/course/play', {
        params: {
          courseid: courseId,
          userid: userId,
          catalogid: this.model.id
        }
      }).then(res => {
        this.title = res.data.video[0].title
        this.videoSrc = res.data.video[0].video.video
        console.log(this.videoSrc)
        this.$emit('videoTitle', this.title, this.videoSrc)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar-li{
  color: @font-white;
  padding: 5px 0;
  font-size: 14px;
  cursor: pointer;
  padding-left: 16px;
}
.sub-ul{
  padding-top: 5px;
}
</style>
