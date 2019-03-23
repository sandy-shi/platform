<template>
  <div class="course">
    <div class="tags">
      <p class="squar"></p>
      <p class="tag-name">{{ tags }}</p>
    </div>
    <div class="course-itembox">
      <el-row :gutter="20">
        <el-col :span="12" v-for="(item,index) in courseLists" :key="index">
          <div class="item">
            <p class="title">{{ item.title }}</p>
            <div class="progress">
              <p class="pfont">学习进度</p>
              <el-progress :percentage="item.percent" color="#567fe3"></el-progress>
            </div>
            <div class="line"></div>
            <button class="btn">继续学习</button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['courseLists', 'tags']
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.course{
  padding-top: 20px;
  padding-bottom: 60px;
  .tags{
    height: 20px;
    line-height: 20px;
    .squar{
      width: 12px;
      height: 16px;
      background: @blue;
      display: inline-block;
      position: relative;
      top: 2px;
      &:after{
        content: '';
        display: inline-block;
        position: relative;
        width: 0;
        height: 0;
        border-left: 8px solid #567fe3;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        left: 12px;
      }
    }
    .tag-name{
      display: inline-block;
      font-size: 16px;
      color: @blue;
      padding-left: 10px;
    }
  }
  .course-itembox{
    padding: 4.5% 4% 0;
    .item{
      height: 180px;
      border:1px solid rgba(214,214,214,1);
      box-shadow:0px 3px 8px 0px rgba(201,201,201,0.44);
      border-radius: 4px;
      padding: 0 20px;
      margin-top: 20px;
      .title{
        font-size: 16px;
        color: @gray-mid;
        padding-top: 30px;
        padding-bottom: 26px;
      }
      .progress{
        padding-bottom: 28px;
        .pfont{
          display: inline-block;
          font-size: 12px;
          color: @gray-mider;
        }
        .el-progress{
          display: inline-block;
          width: 84%;
        }
      }
      .line{
        height: 1px;
        background: #F2F2F2;
      }
      .btn{
        width:90px;
        height:30px;
        line-height: 30px;
        background: @blue;
        color: @font-white;
        border-radius: 4px;
        border-color: @blue;
        float: right;
        margin-top: 16px;
      }
    }
  }
}
</style>
