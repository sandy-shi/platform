<template>
  <div class="plate-main">

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
import HeaderBlock from '../components/header'
import SwiperBlock from '../components/swiper'

export default {
  components: {
    HeaderBlock,
    SwiperBlock
  },
  data () {
    return {

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
.center-block{
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  display: flex;
  flex-direction: column;
  height: 100%;
}
.plate-content{
  width: 100%;
  flex-grow: 1;
  display: flex;
  .contain{
    position: relative;
    display: flex;
  }
}
.plate-footer{
  width: 100%;
  height: 60px;
  background: grey;
}
.container{
  width: @main-width;
  margin: auto;
}
.course-intro{
  background: @black-blue;
  .section-pb100{
    padding-bottom: 100px;
  }
  .section-title{
    font-size: 1.78125rem;
    color: @font-white;
    padding-bottom: 50px;
  }
}
</style>
