<template>
  <div class="home bg-gray-800 px-4 py-6 mb-24 ">
    <div class="">
      <div class="text-white text-4xl font-semibold p-4">
        <span class="border-b border-gray-400 p-1">Top Movie </span>
      </div>
       <div v-if="loadingStatus" class="loading-div">
      <vue-spinner class="mt-48 h-screen" />
    </div>
      <div v-else class="grid grid-cols-2 md:grid-cols-4 md:gap-4">
    <List
    class=""
     v-for="anime in animeTop"
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

import List from '@/components/List.vue'
import axios from 'axios'
import Spinner from 'vue-simple-spinner'
export default {
  components:{
   List,
    vueSpinner:Spinner,
  },
  data(){
    return{
     animeTop: [],
     loadingStatus: false,
    }
  },
  methods:{
    async fetchTop(){
        this.loadingStatus = true
      let response= await axios.get(`https://api.jikan.moe/v3/top/anime/1/movie`)
      console.log(response.data.top)
      this.animeTop= response.data.top
       this.loadingStatus =false
    },





  },
  mounted(){
    this.fetchTop()


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

img:hover{
  transform: scale(1);
}
</style>
