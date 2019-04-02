<template>
    <div class="recommend" id="recommend">
        <header>
            <span class="date">{{timeNow}}</span>
            <h1 class="head">为你推荐</h1>
            <a class="icon">账户</a>
            <hr>
        </header>
        <div class="recommend-play">
            <swiper :options="swiperOption">
                <swiper-slide v-for="banner in banners" >
                    <img :src="banner.imageUrl" class="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="recentely">
            <h3 class="recent">最近播放</h3>
            <a>显示全部</a>
            <swiper :options="swiperOptionR"  style="height: 10.14rem; border-radius: 0.3rem;">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
            </swiper>
        </div>

        <div class="todyTopPlayList">
            <hr>
            <h3 class="tody">{{tody}}歌单</h3>
            <swiper :options="swiperOption"  style="height:  26rem">
                <swiper-slide v-for="topplay in result"
                              :data = "detailId"
                              @click.native="toTopDetail(topplay)"
                              >
                    <img :src="topplay.picUrl" class="topPlay">
                    <span class="topPlayTitle">{{topplay.name}}</span>
                </swiper-slide>
            </swiper>
        </div>
        <hr>
        <div class="todyAlbum">
            <h3 class="tody">{{tody}}专辑</h3>
            <swiper :options="swiperOptionA"  style="height:  11.72rem" class="album">
                <swiper-slide v-for="album in albums" class="album">
                    <img :src="album.blurPicUrl" class="topPlayAlbum">
                    <span class="albumTitle">{{album.name}}</span>
                </swiper-slide>
            </swiper>
        </div>

        <div class="space"></div>
        <router-view />

    </div>
</template>

<script>
    import moment from 'moment'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {getBanner} from '../../api/banner.js'
    import {getTopPlayList} from '../../api/topPlaylist.js'
    import {getAlbums} from '../../api/albums.js'
    import {ERR_OK} from '../../common/js/config'
    import {mapMutations} from 'vuex'


    export default {
        data(){
          return{
              swiperOption: {
                  pagination: {
                      el: '.swiper-pagination',
                  }
              },
              swiperOptionR:{
                  slidesPerView: 2,
                  spaceBetween: 20,
                  freeMode: true,
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                  }
              },
              swiperOptionA:{
                  slidesPerView: 2,
                  slidesPerColumn: 2,
                  spaceBetween: 20,
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                  }
              },

              banners: [],
              result: [],
              albums: [],
              detailId: Number
          }
        },
       created () {
            this._getBanner()
            this._getTopPlayList()
            this._getAlbums()
        },
        methods:{
            _getBanner () {
                getBanner().then((res) => {
                    if (res.status === ERR_OK) {
                        this.banners = res.data.banners
                    }
                })
            },
            _getTopPlayList(){
                getTopPlayList().then(res =>{
                    if (res.status === ERR_OK) {
                        this.result = res.data.result
                    }
                })
            },
            _getAlbums(){
                getAlbums().then(res =>{
                    if (res.status === ERR_OK) {
                        this.albums = res.data.albums
                    }
                })
            },
            toTopDetail(item) {
                // 跳转到专辑详情，这里使用编程式路由跳转
                this.detailId = item.id;
                this.$router.push(`${this.$route.path + '/' + item.id}`);
                this.SET_TOP_LIST(item);

            },
            ...mapMutations(['SET_TOP_LIST']),

        },
        computed:{
            timeNow () {
                return moment().utc().format('MM月DD日')+ ' ' + moment().utc().format('dddd')
            },
            tody(){
                return moment().utc().format('dddd')
            }
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
.date{
    position: absolute;
    top: 2rem;
    left: 1rem;
    color: gray;
}
    h1{
        box-sizing: border-box;
        width: 10rem;
        padding-right: 1rem;
        margin: 0;
        margin-top: 3rem;
    }
    h3{
        box-sizing: border-box;
        width: 10rem;
        padding-right: 3.2rem;
        margin: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;

    }
    .recent{
        padding-right: 5rem;
    }
    .icon{
        float: right;
        position: relative;
        top: -2rem;
        right: 2rem;
    }
    .swiper-slide{
        height: 13.5rem;
        background-color: gainsboro;
    }
    .recentely{
        height: 15rem;
        width: 100%;
    }
    hr{
        width: 100%;
    }
    .banner {
        width:100%;
        height:100%;
        overflow:hidden;

    }
    .todyAlbum{
        width: 100%;
        height: 10rem;
    }

    .topPlay{
        width: 100%;
        border-radius: 0.3rem;
    }
    .topPlayAlbum{
        width: 100%;
        height: 11.72rem;
        border-radius: 0.3rem;
    }
.topPlayTitle{
    position: relative;
    top: 0.8rem;
    font-size: 20px;
}
.swiper-container.album {
    height: auto!important;
    margin-left: auto;
    margin-right: auto;
}
.swiper-slide.album {
    height: 11.72rem;
    margin-bottom: 2rem;
}
    .albumTitle{
        position: relative;
        top: 0.5rem;
    }
    .space{
        width: 100%;
        height: 30rem;
    }

</style>
