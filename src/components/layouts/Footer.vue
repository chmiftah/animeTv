<template>
  <div>
      <div class="bg-gray-900 w-full p-12 hidden md:block">
<div class="text-white text-center">
   copyright-2021
</div>
  </div>
  <div class="bg-gray-900 md:hidden w-full fixed bottom-0 z-20">

    <div class="flex p-1 justify-between w-full px-12">
  <router-link to="/" class="" exact>
 <div class="text-white text-center m-4">
        <svg  class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
         Home
      </div>

  </router-link>
  <router-link to="/tv" class="">
      <div class="text-white text-center m-4">
        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
        </svg>
        Tv
      </div>
       </router-link>
        <router-link to="/movie" class="">
      <div class="text-white text-center m-4">
        <svg  class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
        </svg>
         Movie
      </div>
    </router-link>
       <router-link to="/people" class="">
      <div class="text-white text-center m-4">
        <svg  class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
         People
      </div>
          </router-link>
    </div>

  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
