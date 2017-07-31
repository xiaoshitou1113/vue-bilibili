<template>
    <main-swiper :swDate="swDate"></main-swiper>
</template>

<script>
  import axios from '../utils/v_axios';
  import mainSwiper from '../components/mainSwiper.vue';

  export default {
    data () {
      return {
          swDate:[],
      }
    },
    created: function () {
      var that = this;
      that.axios = axios;
      that.loadMore();
    },
    methods: {
      loadMore() {
        var that  = this;
          that.axios.get('https://api.imjad.cn/bilibili/?get=rank&content=global').then((res) => {
              that.swDate = res.data.result.list;
              console.log(res)
          })

      },

    },
    mounted() {

    },
    components:{mainSwiper}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .page-infinite-list li {
        width: 100%;
        height:100px;
        border: 1px solid #666;
      }
  .page-infinite-loading {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .page-infinite-loading div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
