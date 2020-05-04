<template>
  <div class="detail">
    <productParams :title="product.name" v-on:buy="buy"></productParams>
    <div class="container box">
      <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
         <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="productInfo">
        <div>
          <div class="title">
            <h3>{{product.name}}</h3>
            <p>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          </div>
          <div class="price">
            <span>小米自营</span>
            <span>{{product.price}}元<i>1999元</i></span>
          </div>
        </div>
        <div class="address">
          <p><i class="fa fa-map-marker"></i>北京 北京市 朝阳区 安定门街道</p>
          <span>有现货</span>
        </div>
        <div class="version">
          <h4>选择版本</h4>
          <a class="active" href="javascript:;" @click="selectVersion($event)">6GB+64GB 全网通</a>
          <a href="javascript:;" @click="selectVersion($event)">4GB+64GB 移动4G</a>
        </div>
        <div class="version color">
          <h4>选择颜色</h4>
          <a class="active" href="javascript:;"><i></i>深空灰</a>
        </div>
        <div class="total">
          <p>{{product.name}} 4GB+64GB 移动4G 深灰色 <span>{{product.price}}元</span></p>
          <h5>总计：{{product.price}}元</h5>
        </div>
        <button>加入购物车</button>
      </div>
    </div>
    <div class="desc">
      <div class="container">
        <h3>价格说明</h3>
        <img src="/imgs/detail/item-price.jpeg" alt="">
      </div>
    </div>
    <serviceBar></serviceBar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import productParams from "../components/productParams";
import serviceBar from '../components/Service-bar';
export default {
  name: "detail",
  components: {
    productParams,
    Swiper,
    SwiperSlide,
    serviceBar
  },
  data() {
    return {
      id:this.$route.params.id,
      product:{},
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        
      },
    };
  },
  mounted(){
    this.init();
  },
  methods: {
    async init(){
      const result = await this.http(`/products/${this.id}`,'get');
      console.log(result);
      this.product = result;
    },
    buy() {
      const id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
    selectVersion(event){
      event.target.classList = 'active'
      if(!event.target.nextSibling){
          event.target.previousSibling.classList = '';
      }
      if(event.target.nextSibling){
          event.target.nextSibling.classList = '';
      }
    }
  },
};
</script>

<style>

.detail .box {
  display: flex;
  flex-direction: row;
}

.swiper {
  width: 50%;
}

.productInfo .title {
  margin-bottom: 30px;
}

.productInfo .title h3 {
  font-size: 28px;
}

.productInfo .title p {
  font-size: 14px;
  width: 80%;
  margin-top: 10px;
}

.productInfo .price {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
}

.productInfo .price span{
  font-size: 16px;
  color: #ff6700;
}

.productInfo .price span:last-child {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
}

.productInfo .price i {
  font-style: normal;
  margin-left: 10px;
  font-size: 16px;
  text-decoration: line-through;
  color: #999;
}

.productInfo .address {
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  padding: 30px;
  margin-bottom: 30px;
}

.productInfo .address p {
  color: #666;
  margin-bottom: 10px;
}

.productInfo .address p i {
  font-size: 22px;
  margin-right: 10px;
}

.productInfo .address span {
  color: #ff6700;
  margin-left: 22px;
}

.productInfo .version {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.productInfo .version h4 {
  font-size: 18px;
  width: 100%;
  margin-bottom: 15px;
}

.productInfo .version a {
  font-size: 16px;
  color: #333;
  border: 1px solid #e5e5e5;
  width: 49%;
  display: inline-block;
  text-align: center;
  padding: 15px 0;
}

.productInfo .version a.active {
  color: var(--shopcar_background);
  border-color: var(--shopcar_background);
}

.productInfo .color i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: #666;
  margin-right: 5px; 
}

.productInfo .total {
  margin: 20px 0 30px;
  background-color: #fafafa;
  padding: 30px;
}

.productInfo .total p {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.productInfo .total h5 {
  font-size: 24px;
  color: var(--shopcar_background);
  margin-top: 20px;
  font-weight: 500;
}

.productInfo button {
  width: 50%;
  text-align: center;
  border: none;
  outline: none;
  padding: 20px 0;
  color: #fff;
  background-color: var(--shopcar_background);
  font-size: 16px;
  margin-bottom: 30px;
}

.desc {
  background-color: #f3f3f3;
  padding: 40px 0;
}

.desc .container {
  flex-direction: column;
}

.desc h3 {
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
}
</style>
