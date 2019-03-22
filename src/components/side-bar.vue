<template>
  <div class="sidebar-container">
    <div class="logo">
      <img src="../assets/images/icon/logo.png" />
    </div>
    <div class="avatar center-block">
    </div>
    <el-menu :default-active="this.$route.path" router >
      <el-menu-item v-for="(items,index) in myLists" :key="index" :index="items.path">
        {{ items.name }}
      </el-menu-item>
      <!-- <el-submenu v-for="(item,i) in navList" :key="i" v-show="item.second" :index="item.name">
        <template slot="title">{{ item.navItem }}</template>
        <el-menu-item v-for="(sec,j) in item.second" :key="j" :index="sec.name">{{ sec.navItem }}</el-menu-item>
      </el-submenu> -->
    </el-menu>
    <div class="back text-center"><router-link :to="{path: '/'}">返回首页</router-link></div>
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
  border-right: none;
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
  .el-menu-item{
    font-size: 16px;
    color: @font-white;
    text-align: center;
    height: 20px;
    line-height: 20px;
    padding-bottom: 32px;
    &:hover{
      background-color: RGBA(27, 31, 43, .8);
    }
    &:focus{
      background-color: RGBA(27, 31, 43, .2);
    }
    .is-active{
      color: #409EFF;
    }
  }
}
.el-menu-item .is-active{
  color: #409EFF;
}
</style>

<style lang="less" scoped>
.sidebar-container{
  width: 12.5%;
  height: 100%;
  background: #1B1F2B;
  .logo{
    width: 72.5%;
    margin: auto;
    padding-top: 44px;
    img{
      width: 100%;
    }
  }
  .avatar{
    width: 50%;
    // 高度暂时写死
    height: 90px;
    background: @bg-white;
    border-radius: 50%;
    margin-top: 26px;
    margin-bottom: 26px;
  }
  .back{
    color: @font-white;
    font-size: 16px;
    // padding-bottom: 36px;
    position: fixed;
    bottom: 32px;
    left: 4%;
  }
}
</style>
