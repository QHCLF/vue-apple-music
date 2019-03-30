<template>
    <div calss="detail" id="detail">
        <header>
            <div class="img" img>
                <img :src="data.coverImgUrl" >
            </div>
            <div class="playname">
                <span>{{data.name}}</span>
            </div>
        </header>
        <div class="contain">
            <ol>
                <li v-for="track in data.tracks">
                    <div>{{track.name}}</div>
                    <div>{{track.ar.name}}</div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import {getDetailTopPlayID} from '../../api/topPlaylist.js'
    import {ERR_OK} from '../../common/js/config'
    export default {
        data(){
            return{
                Id: this.$route.params.detailId,
                data: null,
                track: String
            }
        },
        created (){
           this._getDetailTopPlayID()
        },
        methods:{
            _getDetailTopPlayID(){
                const Id = this.Id
                getDetailTopPlayID(Id).then(res =>{
                    if (res.status === ERR_OK) {
                        this.data = res.data.playlist
                    }
                })
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
</style>
