<template>
 <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    this.getUser();
    this.getcartCount();
  },
  methods:{
    async getUser(){
      const result = await this.http('/user','get');
      this.$store.dispatch('saveUsername',result.username);
    },
    async getcartCount(){
      const result = await this.http('/carts/products/sum','get');
      this.$store.dispatch('savecartCount',result);
    }
  }
}
</script>

<style>

</style>
