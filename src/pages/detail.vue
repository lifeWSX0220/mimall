<template>
  <div>
    <productParams v-on:buy="buy"></productParams>
    <div class="container">
      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide
            ><img src="/imgs/detail/phone-1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/detail/phone-2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/detail/phone-3.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="/imgs/detail/phone-4.jpg" alt=""
          /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import productParams from "../components/productParams";
export default {
  name: "detail",
  components: {
    productParams,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    buy() {
      const id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style></style>
