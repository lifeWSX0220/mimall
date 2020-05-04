<template>
  <div :class="{'productParams':true,'isFixed':isFixed}">
      <div class="container">
          <span>{{title}}</span>
          <div>
              <a href="javascript:;">概述</a>
              <a href="javascript:;">参数</a>
              <a class="last" href="javascript:;">用户评价</a>
              <button @click="$emit('buy')">立即购买</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'productParams',
    props:{
        title:String
    },
    data(){
        return {
            isFixed:false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.fixedTop)
    },
    methods:{
        fixedTop(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 150 ? true : false;
        }
    }
}
</script>

<style>
.productParams{
    border-top: 1px solid #e5e5e5;
    padding: 20px 0;
    width: 100%;
    background-color: #fff;
}

.productParams .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.productParams .container span {
    font-size: 18px;
    color: #333;
    font-weight: 700; 
}

.productParams .container a {
    color: #666;
    margin-right: 10px;
}

.productParams .container a::after {
    content: '';
    width: 1px;
    height: 12px;
    background-color: #666;
    display: inline-block;
    margin-left: 10px;
}

.productParams .container div a.last::after {
    display:none;
}

.productParams .container button {
    color: #fff;
    background-color: var(--shopcar_background);
    padding: 5px 30px;
    border: none;
    outline: none;
    font-size: 14px;
    cursor: pointer;
}

.isFixed {
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 5px 5px #ccc;
    z-index: 60;
}
</style>