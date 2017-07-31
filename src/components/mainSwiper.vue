<template>
  <div class="index__banner__src-home-slider-" v-if="swDate">
    <mt-swipe :auto="2000">
      <mt-swipe-item><img src="" alt=""></mt-swipe-item>
    </mt-swipe>
    <div v-for="(item,key) in swDate" :key="key">
      <img :src='item.cover'>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props:{
      swDate:{
          require:true
      }
    },
    methods: {

    },
    created(){

    }

  }
</script>

<style>
  .index__banner__src-home-slider- {
    position: relative;
    width: 100%;
    height: 4.69333rem;
    padding-top: 3.79733rem;
    margin: auto;
    background-image: url(//s1.hdslb.com/bfs/static/mult/images/tv.png);
    background-position: 5.65333rem 3.75467rem;
    background-size: 4.69333rem 4.69333rem;
    background-repeat: no-repeat;
    background-color: #e7e7e7;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .index__banner__src-home-slider- .mint-swipe-indicators{
    background-color: rgba(0,0,0,.5);
    border-radius: .21333rem;
    padding: 0 .32rem;
    display: inline-block;
  }
  .index__banner__src-home-slider- .mint-swipe-indicator {
    width: .21333rem;
    height: .21333rem;
    float: left;
    background: #fff;
    border-radius: .10667rem;
    margin: .10667rem!important;
    opacity: 1;
  }
  .index__banner__src-home-slider- .mint-swipe-indicators .is-active{
    background: #de698c;
  }
</style>
