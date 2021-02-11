<template>

  <div class="">
     <img src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1789&q=80" class="w-full h-screen">
    <div class="home bg-gray-800 px-12 py-6 -mt-60 relative z-20 ">
      <div class="text-white text-4xl font-semibold p-6 mt-4">
        <span class="border-b border-gray-400 p-1">Top Anime </span>
      </div>
       <div v-if="loadingStatus" class="p-12">
      <vue-spinner class="p-12" />
    </div>
      <div v-else class="scroll overflow-x-scroll flex py-4">
    <AnimeTop
     v-for="anime in animeTop"
     :key="anime.mal_id"
     :id="anime.mal_id"
     :title="anime.title"
     :image="anime.image_url"
     :date="anime.start_date"
     :type="anime.type"
     />
      </div>
    </div>

       <div class="bg-gray-800 mb-24 md:mb-0">
      <div class="text-white text-4xl font-semibold p-8">
        <span class="border-b border-gray-400 p-1">Upcoming Anime </span>
      </div>
      <div class="scroll overflow-x-scroll flex p-6">
    <AnimeTop
     v-for="anime in animeUpcoming"
     :key="anime.mal_id"
     :title="anime.title"
     :image="anime.image_url"
     :date="anime.start_date"
     :type="anime.type"
     />
      </div>
    </div>











  </div>


</template>

<script>
// @ is an alias to /src

import AnimeTop from '@/components/AnimeTop.vue'
import axios from 'axios'
import Spinner from 'vue-simple-spinner'
export default {
  components:{
    AnimeTop,
    vueSpinner:Spinner,
  },
  data(){
    return{
     animeTop: [],
     animeUpcoming: [],
     loadingStatus: false,
    }
  },
  methods:{
    async fetchTop(){
        this.loadingStatus = true
      let response= await axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
      console.log(response.data.top)
      this.animeTop= response.data.top
       this.loadingStatus =false
    },

      async fetchUpcoming(){
          this.loadingStatus = true
      let response= await axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
      console.log(response.data.top)
      this.animeUpcoming= response.data.top
       this.loadingStatus =false
    }



  },
  mounted(){
    this.fetchTop()
    this.fetchUpcoming()

  },

}
</script>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scroll::-webkit-scrollbar {
  display: none;
}

.scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.scroll { -webkit-overflow-scrolling: touch; }

</style>
