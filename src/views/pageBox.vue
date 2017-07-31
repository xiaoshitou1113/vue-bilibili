<template>
  <div class="pages-box">
    <head-bar></head-bar>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import headBar from '../components/header.vue';
  import navBar from '../components/navBar.vue';
  export default {
    data () {
      return {
        status:'none'
      }
    },
    methods: {

    },
    components:{headBar,navBar}
  }
</script>

<style scoped>
</style>
