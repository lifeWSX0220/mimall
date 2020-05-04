<template>
  <header>
    <div class="top">
      <div class="container">
        <div class="topLeft">
          <a href="#">小米商城</a>
          <a href="#">MUI</a>
          <a href="#">云服务</a>
          <a href="#">协议规则</a>
        </div>
        <div class="topRight">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="/#/login" v-if="!username">登录</a>
          <a class="shopCar" href="#">
            <i class="fa fa-shopping-cart"></i>
            <span>购物车({{cartCount}})</span>
          </a>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <div class="logo">
          <div>
            <a href="/index"></a>
          </div>
        </div>
        <div class="navbar">
          <ul>
            <li>
              <span>小米手机</span>
              <div class="dropdown">
                <a
                  v-for="(item, index) in navList"
                  v-bind:href="'/#/product/' + item.id"
                  v-bind:key="index"
                >
                  <img v-bind:src="item.mainImage" alt="" />
                  <p>{{ item.name }}</p>
                  <span>{{ item.price | currency }}</span>
                  <i></i>
                </a>
              </div>
            </li>
            <li>
              <span>RedMi红米</span>
            </li>
            <li>
              <span>电视</span>
            </li>
          </ul>
          <div class="search">
            <input type="text" />
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navHeader",
  data() {
    return {
      navList: []
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  computed:{
    username(){
      return this.$store.state.username;
    },
    cartCount(){
      return this.$store.state.cartCount;
    }
  },
  mounted() {
    this.getNavlist();
  },
  methods: {
    async getNavlist() {
      const result = await this.http("/products", "get", {
        categoryId: "100012",
        pageSize: 6
      });
      this.navList = result.list;
    },
  },
};
</script>

<style>
.top {
  background-color: var(--top_background);
}

.top .container,
.nav .container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top a {
  display: inline-block;
  padding: 10px 0;
  color: #b0b0b0;
  font-size: 12px;
  margin-right: 20px;
}

.top .shopCar {
  background-color: var(--shopcar_background);
  color: #fff;
  padding: 10px 20px;
  margin: 0;
}

.top .shopCar i {
  margin-right: 10px;
  font-size: 14px;
}

.nav .container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav .logo {
  width: 20%;
}

.nav .logo div {
  width: 55px;
  height: 55px;
  overflow: hidden;
  margin-right: 30px;
}

.nav .logo div:hover a::before {
  transform: translateX(-55px);
}

.nav .logo div:hover a::after {
  transform: translateX(-55px);
}

.nav .logo a {
  background-color: var(--shopcar_background);
  width: 110px;
  height: 55px;
  display: block;
}

.nav .logo a::before {
  content: "";
  background: url(../../public/imgs/mi-logo.png) no-repeat 50%;
  background-size: 55px;
  height: 55px;
  width: 55px;
  display: inline-block;
  transition: all 0.2s;
}

.nav .logo a::after {
  content: "";
  background: url(../../public/imgs/mi-home.png) no-repeat 50%;
  background-size: 55px;
  height: 55px;
  width: 55px;
  display: inline-block;
  transition: all 0.2s;
}

.nav .navbar {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav .navbar ul {
  display: flex;
  flex: 3;
  flex-direction: row;
  align-items: center;
}

.nav .navbar ul li {
  margin-right: 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav .navbar ul li span {
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.nav .navbar ul li:hover .dropdown {
  opacity: 1;
  z-index: 50;
  height: 220px;
}

.nav .navbar ul li span:hover {
  color: var(--shopcar_background);
}

.nav .navbar ul li .dropdown {
  flex-direction: row;
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  height: 0px;
  z-index: 0;
  background-color: #fff;
  box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
  border-top: 1px solid #e5e5e5;
  display: flex;
  opacity: 0;
  transition: all 0.5s;
  overflow: hidden;
}

.nav .navbar ul li .dropdown a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16.6666%;
  position: relative;
}

.nav .navbar ul li .dropdown a img {
  width: auto;
  height: 111px;
  margin-bottom: 10px;
}

.nav .navbar ul li .dropdown a p,
.nav .navbar ul li .dropdown a span {
  font-size: 12px;
  font-weight: 700;
  color: #333;
}

.nav .navbar ul li .dropdown a span {
  color: var(--shopcar_background);
  margin-top: 5px;
}

.nav .navbar ul li .dropdown a i {
  width: 1px;
  height: 111px;
  background-color: #d7d7d7;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -80px;
}

.nav .navbar ul li .dropdown a:last-child i {
  display: none;
}

.nav .search {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.nav .navbar .search input {
  width: 264px;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-right: none;
  padding: 0 10px;
  outline: none;
}

.nav .navbar .search i {
  border: 1px solid #e0e0e0;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #666;
  cursor: pointer;
}
</style>
