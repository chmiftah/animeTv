<template>
<div class="py-6 mx-2">
   <router-link :to="'/details/'+id">
<div class="image">
  <div class="">
    <span class="bg-gray-800 relative text-white p-2 z-10 border boreder-white">{{ type }} | {{ date }} </span>
    <img :src="image" class="h-96 rounded-lg shadow-lg -mt-4">
  </div>
   <div class="text-white  text-xl p-2 mt-4">
       {{ title }}
  </div>
</div>
   </router-link>
</div>
</template>
<script>
export default {
  props:[
 "title",
 "image",
 "date",
 "type"
  ]
}

</script>

<style>

.image:hover{
  transform: scale(1.1);
}

</style>