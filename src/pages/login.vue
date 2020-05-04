<template>
  <div>
    <div class="logo">
      <div class="container">
        <a href="/#/index"><img src="/imgs/login-logo.png" alt=""/></a>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="title">
            <p>账号登录</p>
            <span>扫码登录</span>
          </div>
          <input
            class="username"
            placeholder="请输入帐号"
            type="text"
            v-model="username"
          />
          <input
            class="password"
            placeholder="请输入密码"
            type="password"
            v-model="password"
          />
          <button @click="login">登录</button>
          <div class="tag">
            <a href="#" @click="register">手机短信登录/注册</a>
            <div>
              <a href="#" @click="register">立即注册</a>
              <a href="#">忘记密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Login></Login>
  </div>
</template>

<script>
import Login from "../components/NavFooter";
export default {
  name: "login",
  components: {
    Login,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let { username, password } = this;
      const result = await this.http("/user/login", "post", {
        username,
        password,
      });
      if (result) {
        this.$cookie.set('userId',result.id,{expires:'1M'});
        this.$store.dispatch('saveUsername',result.username);
        this.$router.push("/index");
      }
    },
    async register() {
      await this.http("/user/register", "post", {
        username: "wsx",
        password: "wsx",
        email: "wsx@163.com",
      }).then(()=>{
        alert('注册成功');
      });
     
    },
  },
};
</script>

<style>
.logo img {
  width: 230px;
  height: 113px;
}

.wrapper {
  background: url(/imgs/login-bg.jpg) no-repeat 50%;
}

.wrapper .container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 576px;
}

.wrapper .login-form {
  background-color: #fff;
  padding: 20px 30px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 80%;
}

.wrapper .login-form .title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
}

.wrapper .login-form .title p {
  color: var(--shopcar_background);
  font-size: 24px;
  font-weight: bold;
}

.wrapper .login-form .title p::after {
  border-right: 2px solid #333;
  content: "";
  font-size: 18px;
  margin-left: 30px;
}

.wrapper .login-form .title span {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
}

.wrapper .login-form input {
  outline: none;
  padding: 10px 10px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
}

.wrapper .login-form button {
  background-color: var(--shopcar_background);
  color: #fff;
  font-size: 16px;
  padding: 10px 0;
  outline: none;
  border: none;
  cursor: pointer;
}

.wrapper .login-form .tag {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.wrapper .login-form .tag a {
  font-size: 14px;
}

.wrapper .login-form .tag > a {
  color: var(--shopcar_background);
  margin-right: 70px;
}

.wrapper .login-form .tag div a {
  color: #999;
}

.wrapper .login-form .tag div a:first-child::after {
  content: "";
  border-left: 1px solid #999;
  font-size: 10px;
  margin-left: 10px;
}

.wrapper .login-form .tag div a:last-child {
  margin-left: 10px;
}
</style>
