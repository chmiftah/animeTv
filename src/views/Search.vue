<template>
  <div class="w-full">
    <h1 class="md:text-3xl text-2xl mb-4 p-12 text-white">
      Search Results for : {{ $route.params.query }}
    </h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-12">
      <AnimeTop
        v-for="result in results"
        :key="result.mal_id"
        :id="result.mal_id"
        :image="result.image_url"
        :score="result.score"
        :title="result.title"
        :type="result.type"
      />
    </div>
  </div>
</template>

<script>
import AnimeTop from '@/components/AnimeTop.vue'
export default {



  components:{
    AnimeTop,
  },
  data() {
    return {
      results: "",

    };
  },
  methods: {

    async getAnime() {

      try {

        const res = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${this.$route.params.query}&page=1`
        );
        const data = await res.json();
        this.results = data.results;

         console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {

    this.getAnime();
  },
};
</script>