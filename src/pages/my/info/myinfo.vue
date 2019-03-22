<template>
  <div class="aside-main-width">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户昵称">
        <el-input v-model="form.nicname"></el-input>
      </el-form-item>
      <el-form-item label="登陆密码" prop="pass">
        <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="绑定邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="支付密码">
        <el-input v-model="form.payPassword"></el-input>
      </el-form-item>
      <el-form-item label="手机绑定">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nicname: '',
        pass: '',
        email: '',
        payPassword: '',
        tel: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
