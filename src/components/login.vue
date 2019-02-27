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
      <div class="login">
        <div class="box">
          <ul class="login-tab">
            <li :class="showLogin ? 'active' : ''" @click="toLogin">登陆</li>
            <li :class="showRegister ? 'active' : ''" @click="toRegister">注册</li>
          </ul>
          <div class="log-form" v-show="showLogin">
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
            <button class="btn" @click="login">立即登陆</button>
            <div class="lg-bottom">
              <a class="find">找回密码</a>
              <span class="line">|</span>
              <span class="content">还没有注册账号？</span>
              <a class="reg" @click="toRegister">立即注册</a>
            </div>
          </div>
          <div class="reg-form" v-show="showRegister">
            <div class="reg-form1" v-show="showRegFirst">
              <div class="form-label">输入您的邮箱</div>
              <div class="form-input">
                <input type="text" />
              </div>
              <button class="btn" @click="toVertifyReg">立即注册</button>
              <div class="lg-bottom reg-bottom">
                <p class="content">注册即表示同意隐私策略和服务条款</p>
                <div class="tologin">已有账号？
                  <a class="login" @click="toLogin">登陆</a>
                </div>
              </div>
            </div>
            <div class="reg-form2" v-show="showRegPassword">
              <div class="form-label">邮箱</div>
              <div class="form-input">
                <input type="text" />
              </div>
              <div class="form-label">密码</div>
              <div class="form-input">
                <input type="text" />
              </div>
              <button class="btn" @click="register">完成注册</button>
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
      showLogin: false,
      showRegister: true,
      showRegFirst: true,
      showRegPassword: false
    }
  },
  methods: {
    toLogin () {
      this.showLogin = true
      this.showRegister = false
    },
    toRegister () {
      this.showRegister = true
      this.showLogin = false
      this.showRegFirst = true
      this.showRegPassword = false
    },
    toVertifyReg () {
      this.showRegFirst = false
      this.showRegPassword = true
    },
    login () {

    },
    register () {
      this.showRegister = false
      this.showLogin = true
    }
  }
}
</script>

<style lang="less">
.plate-content{
  background: #f4fbff;
}
.login{
  background: #f4fbff;
}
.box{
  width: 450px;
  height: 450px;
  background: #fff;
  border-radius: 4px;
  margin: auto;
  margin-top: 4%;
}
.login-tab{
  padding: 30px 40px;
  li{
    display: inline-block;
    font-size: 16px;
    color: #212121;
    letter-spacing: 3px;
    padding-right: 40px;
    cursor: pointer;
  }
  .active{
    color: #567fe3;
    font-weight: bold;
    text-decoration: underline #567fe3;
  }
}
.log-form,.reg-form{
  padding: 10px 40px 0;
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
.btn{
  width: 370px;
  height: 40px;
  line-height: 40px;
  background-color: #567fe3;
  border-radius: 2px;
  color: #fff;
  letter-spacing: 3px;
  border: none;
  font-size: 14px;
  margin-top: 40px;
}
.lg-bottom{
  font-size: 14px;
  margin-top: 15px;
  letter-spacing: 2px;
  a{
    color: #567fe3;
    cursor: pointer;
  }
  .content{
    color: #717171;
  }
  .reg{
    display: inline-block;
    float: right;
  }
}
.reg-bottom{
  .content{
    text-align: center;
  }
  .tologin{
    text-align: center;
    padding-top: 20px;
  }
}
</style>
