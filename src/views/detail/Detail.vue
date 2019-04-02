<template>
    <div calss="detail" id="detail">
        <header>
            <div class="img" >
                <img :src="get_topList.coverImgUrl" >
            </div>
            <div class="playname">
                <span>{{get_topList.name}}</span>
            </div>
            <div class="description">
                <span>{{get_topList.description}}</span>
            </div>
        </header>
        <div class="contain">
            <song-list :songs="songs"></song-list>
        </div>
    </div>
</template>

<script>
    import {getDetailTopPlayID} from '../../api/topPlaylist.js'
    import {getDetailSong} from '../../api/song.js'
    import {ERR_OK} from '../../common/js/config'
    import SongList from '../../base/song-list'
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return{
                Id: this.$route.params.detailId,
                track: String,
                data: null,
                songs: [],
                test: []
            }
        },
        created (){
                this._getDetailTopPlayID(),
                    this.getListId()
        },
        methods:{
            _getDetailTopPlayID(){
                const Id = this.Id
                getDetailTopPlayID(Id).then(res =>{
                    if (res.status === ERR_OK) {
                        this.data = res.data.playlist;
                    }

                })
            },
            getListId(){
                this.test = this.get_topList.trackIds;
                for(let item in this.test){
                    this.songs.push(getDetailSong(item.id))
                }
            }
        },
        computed:{
            ...mapGetters([
                'get_topList'
            ])
        },
        components:{
            SongList
        }

    }
</script>

<style>
    #detail{
        width: 100%;
        height: 100%;
        background-color: pink;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: scroll;
    }
    .img img{
        width: 10rem;
        position: absolute;
        left: 1rem;
        top: 3rem;
    }
    .playname{
        width: 6rem;
        height: 10rem;
        display: flex;
        justify-content: center;
        align-items: Center;
        position: absolute;
        top: 3rem;
        right: 2rem;
    }
    ol{
        margin-top: 15rem;

    }
    .description{
        position: relative;
        top: 14rem;
        margin-left: 1rem;
        margin-right: 1rem;
        height: 4.8rem;
        overflow: hidden;
    }
</style>
