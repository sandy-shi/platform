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
            <li>注册</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="plate-content">
      <div class="login">
        <div class="box">
          <ul class="login-tab">
            <li>登陆</li>
            <li>注册</li>
          </ul>
          <div class="log-form">
            <div class="form-label">邮箱</div>
            <div class="form-input">
              <input type="text" />
            </div>
            <div class="form-label">密码</div>
            <div class="form-input">
              <input type="text" />
            </div>
            <div>
              <input type="checkbox" />
              <span>7天内自动登陆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="plate-footer">footer</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
.plate-content{
  background: #f4fbff;
  .login{
    background: inherit;
  }
}
.box{
  width: 450px;
  height: 450px;
  background: #fff;
  border-radius: 4px;
}
.login-tab{
  padding: 30px 40px;
  li{
    display: inline-block;
    font-size: 16px;
    color: #212121;
    letter-spacing: 3px;
    padding-right: 40px;
  }
}
.log-form{
  padding: 30px 40px 0;
}
.form-label{
  font-size: 14px;
  color: #717171;
  padding-bottom: 10px;
}
.form-input{
  padding-bottom: 20px;
  input{
    width: 370px;
    height: 40px;
    border-radius: 2px;
    background: #f2f2f2;
    border: none;
  }
}
</style>
