import Vue from 'vue'
import Vuex from 'vuex'
import localStorage from "./common/js/storage.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      showStatus: false,//播放页的显示状态
      song: localStorage.getCurrentSong(),//当前歌曲
      songs: localStorage.getSongs()//歌曲列表
  },
  mutations: {
      SHOW_PLAYER(state, status) {
          state.showStatus = status;
      },
      CHANGE_SONG(state, song) {
          state.song = song;
          localStorage.setCurrentSong(song);
      },
      SET_SONGS(state, songs){
        state.songs = songs;
        localStorage.setSongs(songs);
      },
      REMOVE_SONG_FROM_LIST(state, id) {
          let newSongs = state.songs.filter(song => song.id !== id);
          state.songs = newSongs;
          localStorage.setSongs(newSongs);
      }

  },
  actions: {

  }
})
