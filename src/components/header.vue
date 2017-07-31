<template>
  <div class="index__topArea__src-home-topArea-">
    <a class="index__logo__src-home-topArea-" href="//m.bilibili.com/index.html"><img
    src="//s1.hdslb.com/bfs/static/mult/images/logo.png"></a>
    <a class="index__searchIcon__src-home-topArea-" href="//m.bilibili.com/search.html">
      <img src="../assets/img/search.png"/>
  </a>
    <a class="index__mySpace__src-home-topArea-" href="//m.bilibili.com/space"></a><a
    class="index__downloadBtn__src-home-topArea-"><p>下载客户端</p></a></div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .index__topArea__src-home-topArea- {
    position: fixed;
    z-index: 7;
    width: 100%;
    height: 1.32267rem;
    padding: .27733rem 0;
    background-color: #fff;
  }
  .index__topArea__src-home-topArea- a.index__logo__src-home-topArea- {
    position: absolute;
    display: block;
    left: .77867rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    width: 2.64533rem;
  }
  .index__topArea__src-home-topArea- a.index__logo__src-home-topArea- img {
    position: relative;
    display: block;
    width: 100%;
    margin: auto;
  }
  .index__topArea__src-home-topArea- a.index__searchIcon__src-home-topArea- img{
    position: absolute;
    display: block;
    width: .896rem;
    height: .896rem;
    right: 42%;
    top: 50%;
    -webkit-transform: translateY(-50%);
  }

  .index__topArea__src-home-topArea- a.index__downloadBtn__src-home-topArea- {
    position: absolute;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-50%);
    right: .42667rem;
    width: 3.41333rem;
    height: 1.024rem;
    border: .02133rem solid #fb7299;
    border-radius: .17067rem;
    background-color: #fb7299;
  }
  .index__topArea__src-home-topArea- a.index__downloadBtn__src-home-topArea- p {
    font-size: .55467rem;
    line-height: 1.06667rem;
    text-align: center;
    color: #fff;
  }
  .index__topArea__src-home-topArea- a.index__mySpace__src-home-topArea- {
    position: absolute;
    display: block;
    width: 1.024rem;
    height: 1.024rem;
    right: 30.13%;
    top: 50%;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    background: url(//static.hdslb.com/images/member/noface.gif) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
</style>
