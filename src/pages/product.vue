<template>
  <div>
    <productParams :title="product.name" v-on:buy="buy"></productParams>
    <div class="content">
      <div class="item-bg">
        <div class="container">
          <h2>小米CC9</h2>
          <h4>3200万+4800万 前后双旗舰相机</h4>
          <div>
            <a href="javascript:;">全球首款双频 GP</a>
            <span>|</span>
            <a href="javascript:;">骁龙845</a>
            <span>|</span>
            <a href="javascript:;">AI 变焦双摄</a>
            <span>|</span>
            <a href="javascript:;">红外人脸识别</a>
          </div>
          <p>￥1799</p>
        </div>
      </div>
      <div class="item-bg2"></div>
      <div class="item-bg3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide
            ><img src="/imgs/product/gallery-2.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-3.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-4.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-5.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/product/gallery-6.jpg" alt=""
          /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <div class="container">
          <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
          <h4>
            后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI
            精准分析视频内容，15个场景智能匹配背景音效。
          </h4>
          <div class="video-bg" @click="showVideo = true"></div>
          <div :class="{ 'video-box': true, slide: showVideo }">
            <div class="overlay"></div>
            <div class="video">
              <span @click="showVideo=false">x</span>
              <video src="/imgs/product/video.mp4" autoplay muted controls="controls"></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import productParams from "../components/productParams";
export default {
  name: "product",
  components: {
    Swiper,
    SwiperSlide,
    productParams,
  },
  data() {
    return {
      id:this.$route.params.id,
      product:{},
      showVideo: false,
      showSlide: "", //控制动画效果
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted(){
    this.init();
  },
  methods:{
    buy(){
      this.$router.push(`/detail/${this.id}`)
    },
    async init(){
      const result = await this.http(`/products/${this.id}`,'get');
      console.log(result);
      this.product = result;
    }
  }
};
</script>

<style>
.item-bg {
  background: url("/imgs/product/product-bg-1.png") no-repeat center;
  height: 718px;
  width: 100%;
  padding-top: 55px;
}

.item-bg .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-bg h2 {
  font-size: 80px;
  color: #333;
}

.item-bg h4 {
  font-size: 24px;
  letter-spacing: 10px;
  color: #333;
}

.item-bg .container div {
  margin: 20px 0;
}

.item-bg a {
  font-size: 16px;
  color: #333;
}

.item-bg span {
  font-size: 10 px;
  margin: 0 10px;
}

.item-bg p {
  font-size: 38px;
}

.item-bg2 {
  background: url(/imgs/product/product-bg-2.png) no-repeat center;
  height: 480px;
  background-size: 1226px 397px;
}

.item-bg3 {
  background: url(/imgs/product/product-bg-3.png) no-repeat center;
  height: 638px;
  background-size: cover;
}

.item-swiper {
  margin: 50px 0;
}

.item-swiper .desc {
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
}

.item-video {
  background-color: #070708;
  margin-bottom: 50px;
  position: relative;
}

.item-video .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
}

.item-video h2 {
  font-size: 60px;
  margin: 70px 0 50px;
}

.item-video h4 {
  font-size: 24px;
  margin-bottom: 50px;
}

.item-video .video-bg {
  background: url("/imgs/product/gallery-1.png") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 540px;
  cursor: pointer;
  margin-bottom: 100px;
}

.video-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.video-box .overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

.video-box .video {
  position: fixed;
  top: -100%;
  left: 50%;
  width: 1000px;
  height: 536px;
  margin-left: -500px;

  transition: all 1s ease-in-out;
}

.video-box video {
  width: 100%;
  height: 100%;
  outline: none;
  object-fit: cover;
}

.video-box span {
  font-size: 30px;
  color: #999;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 80;
}

.slide {
  z-index: 70;
}


.slide .overlay {
  display: block;
}

.slide .video {
  top: 50%;
  transition: all 1s ease-in-out;
  margin-top: -268px;
}
</style>
