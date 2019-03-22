<template>
  <div class="my">
    <side-bar>

    </side-bar>
    <div class="right-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/side-bar'
export default {
  components: {
    SideBar
  },
  data () {
    return {

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
  background: #F5F8FA;
  width: 87.5%;
}
.test{
  .testli{
    height: 40px;
    line-height: 40px;
    color: #fff;
  }
}
</style>
