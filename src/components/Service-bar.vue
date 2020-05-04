<template>
  <div class="service">
    <div class="container">
      <ul>
        <li class="serve1">
          <i class="fa fa-wrench"></i>
          <span>预约维修服务</span>
        </li>
        <li class="serve2">
          <i class="fa fa-handshake-o"></i>
          <span>7天无理由退货</span>
        </li>
        <li class="serve3">
          <i class="fa fa-phone"></i>
          <span>15天免费换货</span>
        </li>
        <li class="serve4">
          <i>邮</i>
          <span>满150元包邮</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceBar",
};
</script>

<style>


.service ul {
  display: flex;
  flex-direction: row;
  padding: 33px 0 ;
}

.service ul li {
  width: 25%;
  text-align: center;
  border-right: 1px solid #e5e5e5;
}

.service ul li span{
  font-size: 16px;
  color: #666;
  margin-left: 10px;
}

.service ul li i {
  font-size: 20px;
  color: #666;
  font-style: normal;
}

</style>
