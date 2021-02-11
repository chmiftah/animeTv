<template>
<div class="bg-gray-800">
   <div class="">
      <iframe :src="anime.trailer_url" class="w-full h-full md:h-screen"> </iframe>
    </div>
    <div class=" p-6">
      <div class="flex flex-col md:flex-row justify-center w-full">
        <div class="p-6 w-full md:w-1/4">
          <img :src="anime.image_url" class="h-full w-full rounded-lg shadow-lg">
        </div>
        <div class="p-6 w-full md:w-1/2 md:text-left text-center">
          <div class="text-white text-2xl md:text-3xl mb-3 mt-2 font-semibold">{{anime.status}}</div>
            <div class="md:text-5xl text-3xl text-white font-bold mb-5 leading-16">{{anime.title}}</div>
            <div class="flex items-center justify-center md:justify-start mb-3">
                <div>
               <svg class="text-yellow-400 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
               </div>
               <div class="text-white text-3xl">{{anime.score}}</div>
            </div>
                        <div class=" text-white text-2xl mb-2">Release : {{anime.premiered}}</div>
                            <div class="text-white text-2xl mb-2">Duration : {{anime.duration}}</div>
                                <div class="text-white text-2xl mb-2">Episodes : {{anime.episodes}}</div>
                                 <span class="text-white text-2xl mb-2">Genre : </span><span class="text-white text-2xl" v-for="genre in anime.genres" :key="genre">
                                  {{ genre.name }},
                                </span>
                                <div class="text-white text-2xl mt-1" v-for="studio in anime.studios" :key="studio">
                                  Studio : {{ studio.name }}
                                </div>


        </div>
      </div>
      <div class="p-6">
          <div class=" text-white text-4xl mb-2 font-semibold">Synopsis</div>
          <div class="text-white text-2xl mb-t-4">{{anime.synopsis}}</div>

      <div class="mt-12">
      <div class="text-white text-4xl font-semibold">
        <span class="border-b border-gray-400">Upcoming Anime </span>
      </div>
      <div class="scroll overflow-x-scroll flex">
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

    </div>
</div>
</template>

<script>

import AnimeTop from '@/components/AnimeTop.vue'
import axios from 'axios'
export default {
  components:{
    AnimeTop,
  },
  data(){
    return{
        id: this.$route.params.id,
        anime:[],
        animeUpcoming:[]
    }
  },

methods:{
async fetch(){
  let response = await axios.get(`https://api.jikan.moe/v3/anime/${this.id}`)
  console.log(response.data)
  this.anime=response.data

},

      async fetchUpcoming(){
          this.loadingStatus = true
      let response= await axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
      console.log(response.data.top)
      this.animeUpcoming= response.data.top
       this.loadingStatus =false
    }


},
mounted()
{
  this.fetch(),
  this.fetchUpcoming()
}
}
</script>

<style>

</style>