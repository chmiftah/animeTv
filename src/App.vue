<template>
  <div id="app">
    <NavTop></NavTop>

    <div class=" bg-black md:mb-0 min-h-screen">
          <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import NavTop from '@/components/layouts/NavTop.vue'
import Footer from '@/components/layouts/Footer.vue'
export default {
  components:{
    NavTop,
    Footer,
  }
}
</script>
<style>

</style>

