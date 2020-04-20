<template>
  <footer>
    <div class="container">
      <img src="/imgs/logo-footer.png" alt="" />
      <h3>小米商城</h3>
      <div>
        <a href="#">帮助中心</a>
        <a href="#">服务支持</a>
        <a href="#">线下门店</a>
        <a href="#">关于小米</a>
        <a href="#">特色服务</a>
      </div>
      <p>Copyright © 2018-2020.备案号: <a href="#"> 黔ICP备1456456456号</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "navfooter",
};
</script>

<style>
    footer {
        background-color: #333;
        color: #666;
        border-top: 4px solid var(--shopcar_background);
        padding: 50px 0 30px;
    }

    footer .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer img {
        width: 53px;
        height: 36px;
        margin-bottom: 15px;
    }

    footer h3 {
        font-size: 16px;
        color: #999;
        font-weight: normal;
        margin-bottom: 20px;
    }
    
    footer div {
        margin-bottom: 10px;
    }

    footer div a {
        color: #999;
        font-size: 14px;
        margin-right: 10px;
    }
    footer div a::after {
        content: '';
        border-right: 1px solid #999;
        margin-left: 10px;
        height: 14px;
        margin-bottom: -2px;
        display: inline-block;
    }

    footer div a:last-child::after {
        display:none;
    }

    footer p a {
        color: var(--shopcar_background) ;
    }
</style>
