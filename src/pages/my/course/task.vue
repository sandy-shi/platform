<template>
  <div class="my">
    <side-bar :myLists = 'myLists' :subTitle = 'true'></side-bar>
    <div class="right-container">
      <p class="title text-center">任务一：take</p>
      <my-video></my-video>
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
      myLists: [
        {
          title: 'Python基础语法',
          capter_id: 3,
          id: 3,
          sections: []
        },
        {
          title: 'Python工程结构',
          capter_id: 4,
          id: 4,
          sections: [
            {
              title: '工程结构与命名规范',
              capter_id: 4,
              id: 5
            },
            {
              title: '模块与包',
              capter_id: 4,
              id: 6
            }
          ]
        }
      ]
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
