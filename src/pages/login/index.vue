<template>
    <div class="login-container"> 
        <h1 class="title">登录</h1>
        <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item class="botton">
         <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
      return {
        labelPosition: 'right',
        username:"",
        password:"",
      };
    },
    methods:{
        login(){

        }
    }
}
</script>
<style lang="less">
  .login-container{
      .title{
          text-align:center;
          font-size:24px;
          font-weight:700;
          padding-bottom: 20px;

      }
      width:500px;
      margin:200px auto;
      border:1px solid #ccc;
      border-radius:10px;
      box-shadow:0 0 10px #ccc;
      padding:30px;
     .botton{
        margin-left:155px;
      }
  }
</style>

