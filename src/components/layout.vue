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
          <div class="head-login"><router-link to="/login">登陆</router-link></div>
          <div class="head-login"><router-link to="/register">注册</router-link></div>
          <div class="head-login">
            <el-popover placement="right" width="400" trigger="click">
              <el-table :data="gridData">
                <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>
              </el-table>
              <el-button slot="reference">click 激活</el-button>
            </el-popover>

          </div>
        </div>
        <div class="header-right">
          <!-- <ul>
            <li><router-link to="/login">登陆</router-link></li>
            <li><router-link to="/register">注册</router-link></li>
          </ul> -->
        </div>
      </div>
    </div>
    <div class="poster">
      <swiper-block></swiper-block>
    </div>
    <div class="plate-content">
      <div class="contain">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperBlock from '../components/swiper'

export default {
  components: {
    SwiperBlock
  },
  data () {
    return {
      gridData: [
        {
          date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路1518 弄'
        },
        {
          date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
}
</script>

<style lang="less">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
// 基础样式总写
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
// 页面总样式
html,body{
  height: 100%;
}
body {
  background: #ffffff;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 16px;
  color: #444;
}
#app{
  height: 100%;
}
.plate-main{
  // width: 1120px;
  // margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.plate-header{
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(220,236,251,.7);
  .header-inner{
    width: 100%;
    .logo{
      float: left;
      width: calc(50% - 575px);
      height: inherit;
      img{
        width: 100px;
        height: 50px;
        margin: auto;
      }
    }
    .header-nav{
      width: 1150px;
      height: inherit;
      line-height: 60px;
      float: left;
      text-align: right;
      ul{
        display: inline-block;
        li{
          display: inline-block;
        }
      }
      .head-login{
        color: #fff;
        display: inline-block;
        background: blue;
        cursor: pointer;
        border-radius: 20px;
        height: 30px;
        line-height: 30px;
        padding: 1px 15px;
      }
    }
    .header-right{
      float: left;
      width: calc(50% - 575px);
      height: inherit;
      line-height: 60px;
      // ul{
      //   li{
      //     display: inline-block;
      //   }
      // }
    }
  }
}
.plate-content{
  width: 100%;
  flex-grow: 1;
}
.plate-footer{
  width: 100%;
  height: 60px;
  background: grey;
}
</style>
