<template>
    <div calss="detail" id="detail">
        <header>
            <div class="img" img>
                <img :src="data.coverImgUrl" >
            </div>
            <div class="playname">
                <span>{{data.name}}</span>
            </div>
            <div class="description">
                <span>{{data.description}}</span>
            </div>
        </header>
        <div class="contain">
            <ol>
                <li v-for="song in songs">
                    <img :src="song.al.picUrl">
                    <div>{{song.name}}</div>
                    <div>{{song.ar.name}}</div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import {getDetailTopPlayID} from '../../api/topPlaylist.js'
    import {getDetailSongs} from '../../api/song.js'
    import {ERR_OK} from '../../common/js/config'
    export default {
        data(){
            return{
                Id: this.$route.params.detailId,
                data: null,
                track: String,
                songs: [],
                song: null,
                Ids: []
            }
        },
        created (){
                this._getDetailTopPlayID(),
                this._getDetailSongs()
        },
        methods:{
            _getDetailTopPlayID(){
                const Id = this.Id
                getDetailTopPlayID(Id).then(res =>{
                    if (res.status === ERR_OK) {
                        this.data = res.data.playlist
                    }
                })
            },
            _getDetailSongs(){
                for(var i = 0; i<this.this.data.trackIds.length; i++){
                    getDetailSongs(this.data.trackIds[i].id).then(res =>{
                        if (res.status === ERR_OK) {
                            this.songs.push(res.data.songs)
                        }
                        this.$forceUpdate()
                    })
                }

            }
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
