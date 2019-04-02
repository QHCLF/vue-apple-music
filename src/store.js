import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      topList: {}
  },
  mutations: {
      SET_TOP_LIST(state, topList){
          state.topList = topList
      }

  },
    getters:{
        get_topList: state =>{
            return state.topList
        }
    },
  actions: {

  }
})
