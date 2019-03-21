<template>
  <div class="sidebar-container">
    <div class="logo">
      <img src="../assets/images/icon/logo.png" />
    </div>
    <el-menu v-for="(item,index) in myLists" :key="index">
      <el-submenu index="index">
        <!-- <router-link :to="{path: item.path}"> -->
          <template slot="title" class="fefe"><router-link :to="{path: item.path}">{{ item.name }}</router-link></template>
        <!-- </router-link> -->

          <!-- <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item> -->
      </el-submenu>
    </el-menu>
    <div>返回首页</div>
  </div>
</template>

<script>
export default {
  // props: ['myLists'],
  data () {
    return {
      myLists: [
        {
          name: '我的学习',
          path: 'study',
          active: true
        },
        {
          name: '我的信息',
          path: 'myinfo',
          active: false
        }
      ]
    }
  }
}
</script>

<style lang="less">
// 这个去掉scoped，改成全局属性，是为了全局修改element-ui侧边栏的整体样式
.el-menu{
  background: none;
  .el-submenu{
    .el-submenu__title{
      color: @font-white;
      &:hover{
        background: none;
      }
    }
    .el-menu-item{
      color: @font-white;
    }
  }
}
</style>

<style lang="less" scoped>
.sidebar-container{
  width: 240px;
  height: 100%;
  background: #1B1F2B;
  .logo{
    width: 174px;
    margin: auto;
    padding-top: 44px;
    img{
      width: 100%;
    }
  }
}
</style>
