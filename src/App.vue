<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <router-link to="/database"  class="tab"
                   index = 0
                   @click.native="changeTab(0)"
                   :class="{'active' : 0 === tabIdx}">
        <div>
          <i class="iconfont icon-icon-6"></i>
        </div>
        <span>资料库</span>
      </router-link>

      <router-link to="/recommend" class="tab"
                   index = 1
                   @click.native="changeTab(1)"
                   :class="{'active' : 1 === tabIdx}"
      >
        <div>
          <i class="iconfont icon-icon-1"></i>
        </div>
        <span>推荐</span>
      </router-link>

     <router-link to="/browse" class="tab"
                  index = 2
                  @click.native="changeTab(2)"
                  :class="{'active' : 2 === tabIdx}"
     >
       <div>
         <i class="iconfont icon-icon-"></i>
       </div>
       <span>浏览</span>
     </router-link>

      <router-link to="/broadcast" class="tab"
                   index = 3
                   @click.native="changeTab(3)"
                   :class="{'active' : 3 === tabIdx}"
      >
        <div>
          <i class="iconfont icon-icon-5"></i>
        </div>
        <span>广播</span>
      </router-link>

      <router-link to="/search" class="tab"
                   index = 4
                   @click.native="changeTab(4)"
                   :class="{'active' : 4 === tabIdx}"
      >
        <div>
          <i class="iconfont icon-icon-8"></i>
        </div>
        <span>搜索</span>
      </router-link>

    </div>
    <router-view/>
      <div class="musicPlayer">
          <MusicPlayer />
      </div>

  </div>
</template>

<script>
    import MusicPlayer from '@/views/player/MusicPlayer'
  export default {
      name: "app",
      data(){
          return{
              tabIdx : 0,
              index: 0
          }
      },
      methods: {
          changeTab(idx) {
            this.tabIdx = idx
         }
      },
      components:{
          MusicPlayer
      }
  }
</script>

<style>

  @import '//at.alicdn.com/t/font_1107520_7ycgihcar2m.css';
  a:visited{
      color: #2c3e50;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  width: 100%;
  height: 4rem;
  border-top-style:solid;
  position:fixed;
  bottom:0;
  left: 0;
    z-index: 1000;
    background-color: whitesmoke;
}
  .tab{
    width: 20%;
    height: 100%;
    margin-top: 0.5rem;
    float: left;
    text-decoration: none;

  }
  .tab a{
    text-decoration: none;
    color: #2c3e50;
  }

  .tab i{
    font-size: 1.5rem;
    color: grey;
  }

  .tab.active span{
      color: indianred !important;
}
  .tab.active i{
      color: indianred !important;
  }

    .musicPlayer{
        width: 100%;
        height: 4rem;
        background-color: whitesmoke;
        border-top-style: solid;
        position: fixed;
        z-index: 10000;
        bottom: 4.15rem;
        left: 0;
    }
    .musicPlayer i{
        font-size: 1.5rem;
    }
</style>
