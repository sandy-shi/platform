<template>
  <div class="my">
    <side-bar :myLists = 'myLists'></side-bar>
    <div class="right-container">
      <div class="aside-main-width ">
        <div class="course-top">
          <p class="plan">默认教学计划</p>
          <div class="courseinfo">
            <div class="main-content">
              <div class="course-progress">
                <div class="round"></div>
              </div>
              <div class="items">
                <div class="item">
                  <div class="line1">
                    <i class="el-icon-success"></i>
                    <span>已完成</span>
                  </div>
                  <p class="item-cont"><span class="already">4</span>/31 <span>任务</span></p>
                </div>
                <div class="item">
                  <div class="line1">
                    <i class="el-icon-date"></i>
                    <span>学习有效期</span>
                  </div>
                  <p class="item-cont">2020-12-31</p>
                </div>
                <div class="item">
                  <div class="line1">
                    <i class="el-icon-document"></i>
                    <span>下一学习任务</span>
                  </div>
                  <p class="item-cont">知识图谱课程介绍</p>
                </div>
              </div>
              <button class="btn">继续学习</button>
            </div>
          </div>
        </div>
      </div>
      <div class="aside-main-width">
        <div class="course-content">
          <div class="chapter" v-for="(item,index) in courseChapterList" :key="index">
            <div class="top">
              <p class="number">第{{ index+1 }}章</p>
              <p class="name">{{ item.name }}</p>
              <p class="type">{{ item.type }}</p>
            </div>
            <p class="content">{{ item.introduction }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../../components/side-bar'
export default {
  components: {
    SideBar
  },
  data () {
    return {
      myLists: [
        {
          name: '第三章：条件控制',
          path: 'study',
          active: true
        },
        {
          name: '第四章：框架介绍',
          path: 'myinfo',
          active: false
        }
      ],
      courseChapterList: [
        {
          name: '预览课程',
          type: '基础知识',
          introduction: '完成本课程，你将积累丰富的项目实操经验。我们的课程由多个实战项目组成，设计了能够夯实基础知识、具有超强针对性的实操训练。我们不仅仅培养学员的算法能力跟工程能力，还保证学员能够“学完之后真的能做出来”。'
        },
        {
          name: 'Win版Python基础环境安装',
          type: '基础知识+项目实战',
          introduction: '完成本课程，你将积累丰富的项目实操经验。我们的课程由多个实战项目组成，设计了能够夯实基础知识、具有超强针对性的实操训练。我们不仅仅培养学员的算法能力跟工程能力，还保证学员能够“学完之后真的能做出来”。'
        },
        {
          name: '预览课程',
          type: '基础知识',
          introduction: '完成本课程，你将积累丰富的项目实操经验。我们的课程由多个实战项目组成，设计了能够夯实基础知识、具有超强针对性的实操训练。我们不仅仅培养学员的算法能力跟工程能力，还保证学员能够“学完之后真的能做出来”。'
        },
        {
          name: 'Win版Python基础环境安装',
          type: '基础知识',
          introduction: '完成本课程，你将积累丰富的项目实操经验。我们的课程由多个实战项目组成，设计了能够夯实基础知识、具有超强针对性的实操训练。我们不仅仅培养学员的算法能力跟工程能力，还保证学员能够“学完之后真的能做出来”。'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.my{
  // 最低高度填满屏幕视口，如果div内容不够，则撑起div
  min-height: 100vh;
  width: 100%;
  display: flex;
}
.right-container{
  background: #F5F8FA;
  width: 87.5%;
}
.course-top{
  padding: 15px;
  .plan{
    font-size: 24px;
    color: @gray-dark;

  }
  .courseinfo{
    background-color: #fafafa;
    padding: 33px 15px;
    margin: 65px -15px 20px;
    .main-content{
      width: 100%;
      // 清除float的影响
      overflow: hidden;
      .course-progress{
        width: 20%;
        height: 56px;
        float: left;
        position: relative;
        .round{
          background: red;
          width: 90px;
          height: 90px;
          position: absolute;
        }
      }
      .items{
        width: 66%;
        float: left;
        .item{
          display: inline-block;
          width: 32%;
          .line1{
            color: @gray-darker;
            margin-bottom: 15px;

          }
          .item-cont{
            font-size: 16px;
            color: @gray-mider;
            .already{
              color: @blue;
            }
          }
        }
      }
      .btn{
        float: left;
        background: @blue;
        border: 1px solid @blue;
        color: @font-white;
        border-radius: 4px;
        width: 94px;
        height: 32px;
        margin-top: 12px;
      }
    }
  }
}
.course-content{
  padding: 20px;

  .chapter{
    padding-bottom: 70px;
    padding-left: 32px;
    border-left: 1px solid @blue;
    .top{
      font-size: 0;
      position: relative;
      .number{
        display: inline-block;
        font-size: 14px;
        background: @blue;
        color: @font-white;
        padding: 6px 12px;
        &:before{
          content: '';
          display: inline-block;
          border-bottom: 1px solid @blue;
          width: 32px;
          position: absolute;
          left: -32px;
          top: 13px;
        }
        &:after{
          content: '';
          display: inline-block;
          position: absolute;
          width: 0;
          height: 0;
          border-left: 13px solid @blue;
          border-top: 13px solid transparent;
          border-bottom: 13px solid transparent;
          left: 60px;
          top: 0px;
        }
      }
      .name{
        display: inline-block;
        font-size: 18px;
        color: @gray;
        padding: 0 20px;
      }
      .type{
        display: inline-block;
        height: 22px;
        line-height: 22px;
        color: @gray-mid;
        font-size: 14px;
        background: #fff2f2;
        padding: 0 14px;
        border-radius: 12px;
      }
    }
    .content{
      color: @gray-mider;
      font-size: 14px;
      line-height: 22px;
      padding-top: 32px;
      padding-left: 80px;
    }
  }
}
</style>
