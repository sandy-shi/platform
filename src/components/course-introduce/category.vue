<!--课程介绍页面“大纲部分”-->
<template>
  <div class="chapter">
    <div class="container">
      <!-- 循环显示一级菜单 -->
      <div class="content" v-for="(item, index) in lists" :key="index" @click="clickHandler">
        <div class="chapter-name" >第{{ index+1 }}章：{{ item.name}}<span class="rowdown" v-show="rowdown"></span><span class="rowup" v-show="rowup"></span></div>
        <!-- 循环二极菜单 -->
        <div class="subchapter" v-for="(sub, subid) in item.subChapter" :key="subid">
          <p class="subname">{{ index+1 }}.{{ subid+1 }}{{ sub.name }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      rowdown: true,
      rowup: false,
      // 大纲数据
      lists: [
        {
          id: 0,
          name: 'Python基础语法',
          type: 'chapter',
          subChapter: [
            {
              id: 0,
              name: 'Python编程风格'
            },
            {
              id: 1,
              name: '基本数据类型'
            }
          ]
        },
        {
          id: 1,
          name: 'Python工程结构',
          type: 'chapter',
          subChapter: [
            {
              id: 0,
              name: '工程结构与命名规范'
            },
            {
              id: 1,
              name: '模块与包'
            }
          ]
        },
        {
          id: 2,
          name: '搭建基于规则的ChatBot',
          type: 'program',
          subChapter: [
            {
              id: 0,
              name: 'Python编程风格'
            },
            {
              id: 1,
              name: '基本数据类型'
            }
          ]
        },
        {
          id: 3,
          name: 'Python基础语法',
          type: 'chapter',
          subChapter: [
            {
              id: 0,
              name: 'Python编程风格'
            },
            {
              id: 1,
              name: '基本数据类型'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickHandler () {
      console.log(!this.rowdown)
      this.rowdown === !this.rowdown
      this.rowup === !this.rowup
    }
  }
}
</script>

<style lang="less" scoped>
.chapter{
  .content{
    margin: 0 20px 50px;
    border: 1px solid #3976f1;
    height: 50px;
    line-height: 50px;
    padding-right: 2%;
    cursor: pointer;
    .chapter-name{
      font-size: 17px;
      color: @font-white;
      padding-left: 2%;
      &:before{
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #3976f1;
        position: relative;
        display: inline-block;
        margin-right: 4%;
      }
      .rowdown{
        width: 0;
        height: 0;
        border-top: 20px solid #3976f1;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        position: relative;
        top: 19px;
        float: right;
      }
      .rowup{
        display: none;
        width: 0;
        height: 0;
        border-bottom: 20px solid #3976f1;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        position: relative;
        top: 19px;
        float: right;
      }
    }
    .subchapter{
      display: none;
    }
  }
}
</style>
