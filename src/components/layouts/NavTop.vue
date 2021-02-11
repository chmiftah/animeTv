<template>
      <div>
    <div id="nav" class="bg-gray-900 w-full flex items-center">
    <div class=" w-3/4 ">
      <div class="text-2xl py-6 px-12 flex items-center">
         <span class="text-3xl text-white rounded-lg">Anime</span><span class="text-blue-700 text-xl font-bold"> TV</span>
         <span class="hidden md:block" >
         <router-link class="text-white text-xl  ml-12" to="/" exact>
          Home
         </router-link>
          <router-link class="text-white text-xl  ml-6" to="/Tv">
         Tv
         </router-link>
            <router-link class="text-white text-xl  ml-6" to="/Movie">
         Movie
         </router-link>
            <router-link class="text-white text-xl  ml-6" to="/People">
         People
         </router-link>
         </span>
      </div>
    </div>

    <div class="md:w-1/4 flex justify-end mx-12">
      <input type="search" name="" id="" class="bg-gray-700 bg-opacity-70 rounded-full border border-gray-900 w-full md:w-3/4 px-4 py-2 focus:outline-none text-white focus:bg-gray-600" placeholder="cari..."  v-model="query" @keypress.enter="goToResult">
    </div>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    goToResult() {
      this.$router.push({ name: 'Search', params: { query: this.query } })

    }
  },
}
</script>

<style>

</style>