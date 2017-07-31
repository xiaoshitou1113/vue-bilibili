<template>
  <div class="index__partBox__src-home-zoneAll-" v-bind:class="{'index__show__src-home-zoneAll-':navstate}">
    <div class="index__pagesContainer__src-home-zoneAll-"><a
      class="index__curTab__src-home-zoneAll-tab- " href="//m.bilibili.com"><p>
      首页</p></a><a class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/1.html"
    ><p>动画</p></a><a class="index__tab__src-home-zoneAll-tab-  "
                     href="//m.bilibili.com/channel/13.html"
    ><p>番剧</p>
    </a><a class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/167.html"><p
    >国创</p></a><a class="index__tab__src-home-zoneAll-tab-  "
                  href="//m.bilibili.com/channel/3.html"><p>
      音乐</p></a><a class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/129.html"
    ><p>舞蹈</p></a><a class="index__tab__src-home-zoneAll-tab-  "
                     href="//m.bilibili.com/channel/36.html"
    ><p>科技</p>
    </a><a class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/4.html"><p
    >游戏</p></a><a class="index__tab__src-home-zoneAll-tab-  "
                  href="//m.bilibili.com/channel/5.html"><p>
      娱乐</p></a><a class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/119.html"
    ><p>鬼畜</p></a><a class="index__tab__src-home-zoneAll-tab-  "
                     href="//m.bilibili.com/channel/23.html"
    ><p>电影</p>
    </a><a class="index__tab__src-home-zoneAll-tab- index__big__src-home-zoneAll-tab- "
           href="//m.bilibili.com/channel/11.html"><p>电视剧</p></a><a
      class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/160.html"><p
    >生活</p></a><a class="index__tab__src-home-zoneAll-tab-  "
                  href="//m.bilibili.com/channel/155.html"><p>
      时尚</p></a><a class="index__tab__src-home-zoneAll-tab-  " href="//m.bilibili.com/channel/165.html"
    ><p>广告</p></a><a class="index__tab__src-home-zoneAll-tab- "
                     href="//live.bilibili.com/h5/"
    ><p>直播</p>
    </a></div>
    <div class="index__switchContainer__src-home-zoneAll-" @click="navShow()">
      <img src="../assets/img/dropup.png">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props:
      { navstate:{
          default:'',
          required:true
    }
  },
    methods: {
        navShow:function () {
          var that = this;
          that.$emit('navShow')
        }
    },
    created(){

    }

  }
</script>

<style>
  .index__tab__src-home-zoneAll-tab- {
    position: relative;
    display: block;
    padding-top: .256rem;
    padding-bottom: .256rem;
    margin-left: .59733rem;
    margin-right: .59733rem;
    background-color: #fff;
  }
  .index__curTab__src-home-zoneAll-tab- p {
    font-size: .59733rem;
    line-height: 1.28rem;
    text-align: center;
    color: #fb7299;
    width: 1.36533rem;
    border-bottom: .08533rem solid #fb7299;
  }
  .index__curTab__src-home-zoneAll-tab- {
    position: relative;
    display: block;
    padding-top: .256rem;
    padding-bottom: .256rem;
    margin-left: .59733rem;
    margin-right: .59733rem;
    background-color: #fff;
  }
  .index__tab__src-home-zoneAll-tab- p {
    width: 1.36533rem;
    font-size: .59733rem;
    line-height: 1.28rem;
    text-align: center;
    color: #757575;
    border-bottom: .08533rem solid #fff;
  }
  .index__curTab__src-home-zoneAll-tab-.index__big__src-home-zoneAll-tab->p, .index__tab__src-home-zoneAll-tab-.index__big__src-home-zoneAll-tab->p {
    width: 1.96267rem;
  }
  .index__curTab__src-home-zoneAll-tab-.index__big__src-home-zoneAll-tab-, .index__tab__src-home-zoneAll-tab-.index__big__src-home-zoneAll-tab- {
    margin: 0 .29867rem;
  }
  .index__partBox__src-home-zoneAll-.index__show__src-home-zoneAll- {
    transform: translateY(0) translateZ(0);
    -webkit-transform: translateY(0) translateZ(0);
  }
</style>
