<template>
    <div class="login-container"> 
        <h1 class="title">登录</h1>
        <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="password" @keydown.native.enter="login"></el-input>
        </el-form-item>
        <el-form-item class="botton">
         <el-button type="primary" @click="login" >登录</el-button>
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
        password:""
      };
    },
    methods:{
        
        login(){

            if(!this.username.trim()||!this.password.trim()) 
            return   this.$message({
            message: '请输入用户名或密码',
            type: 'warning'
            });
            //发送axios请求post，地址，参数，结果回调函数
            this.$http.post('/users/login', {
            username: this.username,
            password: this.password
            })
            .then(result=> {
                console.log(result.data)
                // console.log(result.data.data.token)
                //登陆成功将获取的token 保存到本地
                let token = localStorage.setItem("token",result.data.data.token);
                let  userInfo = localStorage.setItem("userInfo",JSON.stringify(result.data.data));
                this.$message({
                message:result.data.succMsg,
                type: 'success'
                });
                //登陆成功跳转到首页
                this.$router.push("/home");
            })
            //.then的回调函数有两种，一个是成功的，第二个是失败的
            //但是如果失败了也会报错，通过.catch也可以进行捕获
            .catch((err)=> {
                console.dir(err)
                console.log(err.response.data.errMsg)
                this.$message.error('错了哦!'+err.response.data.errMsg);
            });
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

