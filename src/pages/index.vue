<template>
  <div>
    <div class="container">
      <div class="banner">
        <div class="nav-menu">
          <ul>
            <li>
              <a href="#">
                手机 电话卡
                <i class="fa fa-angle-right"></i>
              </a>
              <div class="children">
                <a
                  v-for="(item, index) in menuList"
                  v-bind:key="index"
                  v-bind:href="item.id ? '/#/product/' + item.id : '#'"
                >
                  <img
                    v-lazy="item.img ? item.img : '/imgs/item-box-1.png'"
                    alt=""
                  />
                  <span>{{ item.name ? item.name : "小米9" }}</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#">电视 盒子 <i class="fa fa-angle-right"></i></a>
            </li>
            <li>
              <a href="#">笔记本 平板<i class="fa fa-angle-right"></i></a>
            </li>
            <li>
              <a href="#">家电 插线板<i class="fa fa-angle-right"></i></a>
            </li>
            <li>
              <a href="#">出行 穿戴<i class="fa fa-angle-right"></i></a>
            </li>
            <li>
              <a href="#">智能 路由器<i class="fa fa-angle-right"></i></a>
            </li>
            <li>
              <a href="#">电源 配件<i class="fa fa-angle-right"></i></a>
            </li>
            <li>
              <a href="#">生活 箱包<i class="fa fa-angle-right"></i></a>
            </li>
          </ul>
        </div>
        <div class="swiper">
          <swiper v-bind:options="swiperOption">
            <swiper-slide
              v-for="(item, index) in swiperList"
              v-bind:key="index"
            >
              <a href="#">
                <img v-bind:src="item.img" />
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="banner2">
        <a
          v-for="(item, i) in adsList"
          v-bind:key="i"
          v-bind:href="'/#/product/' + item.id"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner3">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="productList">
      <div class="container">
        <h3>手机</h3>
        <div>
          <a class="leftBanner" href="/#/product/35"
            ><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
          /></a>
          <ul>
            <li v-for="(item, index) in phoneList" v-bind:key="index">
              <span class="tag">新品</span>
              <img v-lazy="item.mainImage" alt="" />
              <h4>{{ item.name }}</h4>
              <p>{{ item.subtitle }}</p>
              <span v-on:click="addCart" class="price">{{ item.price }}元<i class="fa fa-shopping-cart"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <serviceBar></serviceBar>
    <modal title="提示" v-bind:showModal="showModal" define="查看购物车" v-on:submit="goToCart" v-on:closeModal="showModal=false">
      <template v-slot:modalBody>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import modal from '../components/modal';
import serviceBar from '../components/Service-bar';
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    modal,
    serviceBar
  },
  data() {
    return {
      showModal:false,
      phoneList: [],
      swiperOption: {
        loop: true,
        autoplay: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      menuList: [
        {
          id: 30,
          img: "/imgs/item-box-1.png",
          name: "小米CC9",
        },
        {
          id: 31,
          img: "/imgs/item-box-2.png",
          name: "小米8青春版",
        },
        {
          id: 32,
          img: "/imgs/item-box-3.jpg",
          name: "Redmi K20 Pro",
        },
        {
          id: 33,
          img: "/imgs/item-box-4.jpg",
          name: "移动4G专区",
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      swiperList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
    };
  },
  mounted() {
    this.getPhoneList();
  },
  methods: {
    async getPhoneList() {
      const result = await this.http("/products",'get', {
          categoryId: 100012,
          pageSize: 8,
        });
      this.phoneList = result.list
    },
    addCart(){
      this.showModal = true;
    },
    goToCart(){
      this.$router.push('/cart');
    }
  },
};
</script>

<style>
.banner {
  position: relative;
  overflow: hidden;
}

.banner .nav-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
}

.banner .nav-menu ul {
  width: 20%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner .nav-menu ul li {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 0;
  margin: 0;
}

.banner .nav-menu ul li:hover {
  background-color: var(--shopcar_background);
}

.banner .nav-menu ul li a {
  display: inline-flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
}

.banner .nav-menu ul li a i {
  opacity: 0.5;
  font-size: 26px;
}

.banner .nav-menu ul li a {
  color: #fff;
  font-size: 16px;
}

.banner .nav-menu ul li:hover .children {
  display: block;
}

.banner .nav-menu ul li .children {
  background-color: #fff;
  position: absolute;
  left: 20%;
  top: 0;
  width: 80%;
  height: 100%;
  padding: 0px 0;
  border: 1px solid #eee;
  display: none;
}

.banner .nav-menu ul li .children a {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  color: #333;
  width: 25%;
  height: 75px;
  align-items: center;
  padding-left: 30px;
}

.banner .nav-menu ul li .children img {
  width: 42px;
  height: 35px;
  margin-right: 20px;
}

.banner .swiper {
  width: 100%;
}

.banner .swiper-button-prev {
  left: 21%;
}

.banner2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
}

.banner2 a {
  width: 24%;
  height: 167px;
  display: inline-block;
}

.banner2 a img {
  width: 100%;
  height: 100%;
}

.banner3 {
  margin-bottom: 50px;
}

.banner3 a {
  display: inline-block;
  width: 100%;
  height: 133px;
}

.banner3 a img {
  width: 100%;
  height: 100%;
}

.productList {
  background-color: #f5f5f5;
  padding: 30px 0 50px;
}

.productList h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
}

.productList .leftBanner {
  display: inline-block;
  width: 20%;
  height: 619px;
}

.productList .leftBanner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.productList .container > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.productList ul {
  width: 78.5%;
  height: 619px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.productList ul li {
  width: 23.5%;
  height: 302px;
  background-color: #fff;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.productList ul li img {
  width: 100%;
  height: 148px;
  object-fit: cover;
}

.productList ul li .tag {
  background-color: #7ecf68;
  color: #fff;
  display: inline-block;
  width: 67px;
  text-align: center;
  padding: 3px 0;
}

.productList ul li h4 {
  font-size: 14px;
  color: #333;
}

.productList ul li p {
  color: #999;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin-top: -20px;
  font-size: 12px;
}

.productList ul li .price {
  color: #f20a0a;
  font-size: 14px;
  font-weight: 700;
  margin-top: -10px;
  cursor: pointer;
}

.productList ul li .price i {
  color: var(--shopcar_background);
  font-size: 20px;
  margin-left: 5px;
}

</style>
