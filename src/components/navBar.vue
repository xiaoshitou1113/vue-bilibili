<template>
  <div>
    <nav-all-bar @navShow="navShow()" :navstate="navstate"></nav-all-bar>
    <div class="index__partBox__src-home-zone-">
      <div class="index__pagesContainer__src-home-zone-">
        <div class="index__scrollContainer__src-home-zone-" id="scrollZone"><a
          class="index__curTab__src-home-zone-tab- " href="//m.bilibili.com"><p>首页</p>
        </a>
          <a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/1.html">
            <p>动画</p>
          </a><a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/13.html"
          ><p>番剧</p></a><a
            class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/167.html"><p
          >国创</p></a><a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/3.html"
          ><p>音乐</p></a><a
            class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/129.html"><p
          >舞蹈</p></a><a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/36.html"
          ><p>科技</p></a><a
            class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/4.html"><p
          >游戏</p></a><a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/5.html"
          ><p>娱乐</p></a><a
            class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/119.html"><p
          >鬼畜</p></a><a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/23.html"
          ><p>电影</p></a><a
            class="index__tab__src-home-zone-tab- index__big__src-home-zone-tab-" href="//m.bilibili.com/channel/11.html"
          ><p>电视剧</p></a><a class="index__tab__src-home-zone-tab- "
                            href="//m.bilibili.com/channel/160.html">
            <p>生活</p></a><a class="index__tab__src-home-zone-tab- "
                            href="//m.bilibili.com/channel/155.html"><p
          >时尚</p></a><a class="index__tab__src-home-zone-tab- " href="//m.bilibili.com/channel/165.html"><p>广告</p></a><a
            class="index__tab__src-home-zone-tab- " href="//live.bilibili.com/h5/"><p>
            直播</p></a>
          <div></div>
        </div>
      </div>
      <div class="index__switchContainer__src-home-zone-" @click="navShow()">
        <img src="../assets/img/drop-down.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
  import navAllBar from './navAllBar.vue';
  export default {
    data () {
      return {
        navstate:false,
      }
    },
    methods: {
        navShow:function () {
            var that =this;
            that.navstate = ! that.navstate;
        }
    },
    components:{navAllBar}
  }
</script>

<style>
  .index__partBox__src-home-zone- {
    position: fixed;
    background-color: #fff;
    width: 100%;
    height: 1.87733rem;
    top: 1.856rem;
    z-index: 5;
    overflow: hidden;
    webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
  }

  .index__partBox__src-home-zone- .index__pagesContainer__src-home-zone- {
    position: relative;
    width: 90%;
    padding-top: .256rem;
    overflow: hidden;
  }

  .index__partBox__src-home-zone- .index__switchContainer__src-home-zone- {
    position: absolute;
    top: 0;
    width: 1.38667rem;
    height: 1.87733rem;
    right: .256rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
  }

  .index__partBox__src-home-zone- .index__pagesContainer__src-home-zone- .index__scrollContainer__src-home-zone- {
    position: relative;
    padding-left: 1.024rem;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 1.87733rem;
    white-space: nowrap;
    padding-bottom: .21333rem;
    -webkit-overflow-scrolling: touch;
    z-index: 1;
    -webkit-transform: translateZ(0);
    -webkit-perspective: 1000;
  }

  .index__curTab__src-home-zone-tab- {
    display: inline-block;
    -webkit-transform: translateZ(0);
    -webkit-perspective: 1000;
    background-color: #fff;
    margin-right: 1.49333rem;
  }

  .index__tab__src-home-zone-tab- {
    -webkit-transform: translateZ(0);
    -webkit-perspective: 1000;
    display: inline-block;
    background-color: #fff;
    margin-right: 1.49333rem;
    –webkit-transform: tranzlateZ(0);
  }

  .index__curTab__src-home-zone-tab- p {
    width: 1.36533rem;
    font-size: .59733rem;
    line-height: 1.28rem;
    text-align: center;
    color: #fb7299;
    border-bottom: .08533rem solid #fb7299;
  }

  .index__tab__src-home-zone-tab- p {
    width: 1.36533rem;
    font-size: .59733rem;
    line-height: 1.28rem;
    text-align: center;
    color: #757575;
    border-bottom: .08533rem solid #fff;
  }

  .index__partBox__src-home-zone- .index__switchContainer__src-home-zone- img {
    display: block;
    width: .68267rem;
    margin: auto;
  }

  /*下拉*/
  .index__partBox__src-home-zoneAll- {
    position: fixed;
    background-color: #fff;
    transform: translateY(-7.50933rem) translateZ(0);
    -webkit-transform: translateY(-9.38667rem) translateZ(0);
    transition: transform .4s;
    -webkit-transition: -webkit-transform .4s;
    top: 1.87733rem;
    z-index: 6;
    padding-left: .34133rem;
    padding-right: .29867rem;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
  }
  .index__partBox__src-home-zoneAll- .index__pagesContainer__src-home-zoneAll- {
    position: relative;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    -webkit-flex-wrap: wrap;
    align-items: center;
    -webkit-align-items: center;
  }
  .index__partBox__src-home-zoneAll- .index__switchContainer__src-home-zoneAll- {
    position: relative;
    margin: auto;
    margin-top: -.10667rem;
    width: 3.84rem;
    height: .91733rem;
    margin-bottom: .27733rem;
  }
  .index__partBox__src-home-zoneAll- .index__switchContainer__src-home-zoneAll- img {
    position: absolute;
    display: block;
    width: .68267rem;
    height: .91733rem;
    margin: auto;
    left: 1.57867rem;
    fill: #aaa;
  }
</style>
