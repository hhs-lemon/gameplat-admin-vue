<template>
  <div id="particles">
    <div class="login" @keydown.enter="handleSubmit">
      <div class="login-con">
        <form name = 'loginForm' action="">
          <el-input class="el-form-item is-required" placeholder="账号" v-model="userName"
                    clearable>
            <i class="el-icon-user-solid el-input__icon"
               slot="prefix"/>
          </el-input>
          <el-input class="el-form-item is-required" placeholder="密码" v-model="password" show-password>
            <i class="el-icon-unlock el-input__icon"
               slot="prefix"/>
          </el-input>
          <el-row class="el-form-item">
            <el-button type="primary" @click.native.prevent='handleSubmit' style="width: 100%"><i class="el-icon-s-unfold "/>&nbsp;&nbsp;登&nbsp;录</el-button>
          </el-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import particles from 'particles.js'
  export default {
      mounted() {
      particlesJS.load('particles','../../static/particles.json');
    },
    data () {
      return {
        userName: 'admin',
        password: '',
        rules: {
          userName: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      handleSubmit () {
        let userInfo = {
          userName: 'admin',
          password: '123456',
        };
        Cookies.set('userInfo', userInfo);
        this.$store.commit('setUserInfo', userInfo);
        //设置收缩栏默认为展开
        this.$store.state.app.sidebar = false;
        //跳转到首页
        this.$router.push("/");
      }
    },
  }
</script>
<style lang="scss">
  canvas{
    display:block;
    vertical-align:bottom;
  }
  #particles{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .login {
    width: 100%;
    height: 100%;
    // background: #000;
    // background-image: url("../../assets/bg1.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    &-con {
      position: absolute;
      right: 160px;
      top: 50%;
      transform: translateY(-60%);
      width: 300px;
      &-header {
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        padding: 30px 0;
      }
      .form-con {
        padding: 10px 0 0;
      }
      .login-tip {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }
  }
</style>
