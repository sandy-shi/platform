<template>
  <div class="my">

    <side-bar :myLists = 'myLists' :subTitle = 'true' @videoInfo = 'videoInfo'></side-bar>
    <!-- <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      unique-opened
    >
      <SideBar :myLists = 'this.myLists'></SideBar>
    </el-menu> -->
    <div class="right-container">
      <p class="title text-center">{{ videoSrc }}</p>
      <my-video :videoSrc = 'videoSrc'></my-video>
    </div>
  </div>
</template>

<script>
import SideBar from '../../../components/side-bar-course'
import MyVideo from '../../../components/my-video'

export default {
  components: {
    SideBar,
    MyVideo
  },
  data () {
    return {
      courseId: '',
      title: '',
      videoSrc: '',
      isCollapse: false, // 菜单展开功能
      myLists: [
        {
          title: 'Python基础语法',
          capter_id: 3,
          id: 3,
          active: false,
          sections: []
        },
        {
          title: 'Python工程结构',
          capter_id: 4,
          id: 4,
          active: false,
          sections: [
            {
              title: '工程结构与命名规范',
              capter_id: 4,
              active: false,
              id: 5
            },
            {
              title: '模块与包',
              capter_id: 4,
              active: false,
              id: 6
            }
          ]
        },
        {
          title: '面向对象',
          capter_id: 5,
          id: 7,
          active: false,
          sections: [
            {
              title: '什么是面向对象',
              capter_id: 5,
              active: false,
              id: 8
            },
            {
              title: '构造函数',
              capter_id: 5,
              active: false,
              id: 9
            }
          ]
        }
      ]
    }
  },
  created () {

  },
  updated () {

  },
  methods: {
    toggleClick () {
      this.isCollapse = !this.isCollapse
    },
    videoInfo (title, videoSrc) {
      this.title = title
      this.videoSrc = videoSrc
      console.log(this.title + 'title')
    }
  }
}
</script>

<style lang="less" scoped>
.my{
  // 最低高度填满屏幕视口，如果div内容不够，则撑起div
  min-height: 100vh;
  width: 100%;
  display: flex;
}
.right-container{
  background: @bg-white;
  width: 87.5%;
  .title{
    color: @blue;
    font-size: 24px;
    font-family: PingFangSC-Regular;
    padding-top: 40px;
    padding-bottom: 20px;
  }
}
</style>
