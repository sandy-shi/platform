<template>
  <div class="sidebar-container">
    <div class="logo">
      <img src="../assets/images/icon/logo.png" />
    </div>
    <div class="avatar center-block">
    </div>
    <ul class="sidebar-ul">
      <li v-if="!subTitle"
        class="sidebar-li text-center"
        :class="{active: currentIndex === index}"
        v-for="(items,index) in myLists" :key="index"
        @click="clickChapter(index)">
        {{ items.title }}
      </li>
      <li class="sidebar-li text-center" v-if="subTitle" v-for="(items,index) in myLists" :key="index">
        {{ items.title }}
        <ul v-if="items.sections.length > 0" v-show="showSubCaptor">
          <li v-for="(subItem, subId) in items.sections" :key="subId">{{subItem.title}}</li>
        </ul>
      </li>
    </ul>
    <div class="back text-center"><router-link :to="{path: '/'}">返回首页</router-link></div>
  </div>
</template>

<script>
export default {
  props: ['myLists', 'subTitle'],
  data () {
    return {
      currentIndex: 0,
      showSubCaptor: false
    }
  },
  methods: {
    clickChapter (index) {
      this.currentIndex = index
      this.$emit('childHanandler', index)
    }
  }
}
</script>

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
  .sidebar-ul{
    .sidebar-li{
      color: @font-white;
      padding: 5px 0;
      font-size: 16px;
      cursor: pointer;
    }
    .active{
      color: @blue;
    }
  }
}
</style>
