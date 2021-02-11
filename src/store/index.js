import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    state:{
      anime : [],
      loadingStatus:false,
    }
  },
  mutations: {
    getAnime(state, animeData){
      state.anime = animeData
    },
   loadingStatus (state, newLoadingStatus){
     state.loadingStatus = newLoadingStatus
   }
  },
  actions: {
      getAnime({commit}){
      commit('loadingStatus', true)
      return axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
      .then(response=>{
        commit('getAnime' , response.data.top)
        console.log(response.data.top)
        commit('loadingStatus', false)
      })
      .catch(error=>console.log(error))
    }
  },
  getters:{
    anime(state){
      return state.anime
    },
    loadingStatus(state){
      return state.loadingStatus
    }
  },
  modules: {
  }
})
