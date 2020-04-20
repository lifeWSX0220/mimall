<template>
  <div>
    <navHeader></navHeader>
    <router-view></router-view>
    <navFooter></navFooter>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'

export default {
    name:'navHome',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>

<style>

</style>