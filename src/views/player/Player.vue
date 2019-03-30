<template>
    <div class="player">
        <audio ref="audio" :src="songUrl"></audio>
        <MusicPlayer
                :song="song"
                :playStatus="playStatus"
                @playOrPause="playOrPause"
                @next="next"
        ></MusicPlayer>
    </div>
</template>

<script>

    import MusicPlayer from '@/views/player/MusicPlayer'
    import { Song } from "@/models/song"

    export default {//musicPlayer的父组件
        data(){
            return{
                playStatus: false,
                songUrl:''

            }
        },
        computed:{

        },
        methods:{
            song() {
                // 计算state中的歌曲
                let song = this.$store.state.song;
                if (song.url) {
                    // 如果有歌曲地址设置audio的src
                    this.songUrl = song.url;
                    // 加载资源，ios需要调用此方法
                    this.audio.load();
                    return song;
                } else {
                    return new Song(0, "", "", "", 0, "", "");
                }
            },

            playOrPause() {
                if (this.playStatus === false) {
                    // 表示第一次播放
                    if (this.first === undefined && !this.audio.src) {
                        this.audio.src = this.song.url;
                        this.first = true;
                    }
                    this.audio.play();

                    this.playStatus = true;
                } else {
                    this.audio.pause();
                    this.playStatus = false;
                }
            },
            next() {
                let playSongs = this.$store.state.songs;
                if (playSongs.length > 0 && playSongs.length !== 1) {
                    let currentIndex = this.currentIndex;
                    if (this.currentTime === 0) {  // 列表播放
                        if (currentIndex === playSongs.length - 1) {
                            currentIndex = 0;
                        } else {
                            currentIndex = currentIndex + 1;
                        }
                    }
                }
            },
        },
        components:{
            MusicPlayer
        }
    }
</script>
