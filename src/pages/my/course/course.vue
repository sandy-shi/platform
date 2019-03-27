<template>
  <div>
    <side-bar :myLists = 'myLists'></side-bar>
  </div>
</template>

<script>
import SideBar from '../../../components/side-bar'
export default {
  components: {
    SideBar
  },
  data () {
    return {
      myLists: [
        {
          name: '第三章：条件控制',
          path: 'study',
          active: true
        },
        {
          name: '第四章：框架介绍',
          path: 'myinfo',
          active: false
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
