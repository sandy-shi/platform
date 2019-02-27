<template>
  <div class="plate-main">
    <div class="plate-header">
      <div class="header-inner">
        <div class="logo">
            <router-link :to="{path: '/'}">
              <img src="../assets/logo.png">
            </router-link>
        </div>
        <div class="header-nav">
          <ul>
            <li>首页</li>
            <li>页面1</li>
            <li>页面2</li>
            <li>页面3</li>
          </ul>
        </div>
        <div class="header-right">
          <ul>
            <li><router-link to="/login">登陆</router-link></li>
            <li><router-link to="/login">注册</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="plate-content">
      <div class="contain">content</div>
    </div>
    <div class="plate-footer">footer</div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">

</style>
