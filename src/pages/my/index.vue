<template>
  <div>
    <!-- <side-bar :childData='myLists'>

    </side-bar> -->
    <div class="sidebar-container">
      <div class="logo">
        <img src="../../assets/images/icon/logo.png" />
      </div>
      <el-menu :default-active="this.$route.path" router >
        <el-menu-item v-for="(item,index) in myLists" :key="index" :index="item.path">
          {{ item.name }}
        </el-menu-item>
      </el-menu>
      <ul class="test">
        <router-link v-for="(items,idd) in testLists" :to="{path: items.path}" tag="li" class="testli" active-class="active" :key="idd">
          {{ items.name }}
        </router-link>
      </ul>
      <div>返回首页</div>
    </div>
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
      myLists: [
        {
          name: '我的学习',
          path: '/study',
          active: true
        },
        {
          name: '我的学习',
          path: '/myinfo',
          active: false
        }
      ],
      testLists: [
        {
          name: '我的学习',
          path: 'study',
          active: true
        },
        {
          name: '我的学习',
          path: 'myinfo',
          active: false
        }
      ]
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
}
.right-container{
  background: red;
  width: 800px;
  height: 600px;
}
.test{
  .testli{
    height: 40px;
    line-height: 40px;
    color: #fff;

  }
}
</style>
