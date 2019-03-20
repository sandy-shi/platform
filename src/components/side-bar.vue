<template>
  <div class="sidebar-container">
    <div class="logo">
      <img src="../assets/images/icon/logo.png" />
    </div>
    <el-menu>
      <el-submenu index="1">
        <template slot="title" class="fefe">我的学习</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">个人信息</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="link2">
        <i class="el-icon-document"></i>
        <span slot="title">导航二</span>
        <!-- <el-menu-item index="link2">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item> -->
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

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
  .el-menu{
    background: none;
    .el-submenu{
      div{
        color: @font-white;
      }
      .el-menu-item{
        color: red;
      }

    }
  }
  .el-menu-item{
    color: #fff;
  }

}
</style>
