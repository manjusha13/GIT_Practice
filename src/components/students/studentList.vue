

<template>
    <!-- <component :is="icons.home"></component> -->
  <div>
    <div class="bg-orange-600 p-4 grid grid-cols-9">
      <div class="col-sapn-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-center mt-3 text-white">
          Studen List
        </h1>
      </div>
      <div> 
        <router-link :to="{ name:'addDetails'}">
        <button class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"> 
          <UserPlusIcon />ADD
        </button>
       </router-link>
    </div>
    </div>
  </div>

  <table class="table-auto w-full">
    <thead class="bg-slate-600 text-white">
      <tr>
        <th class="py-1">Number</th>
        <th class="py-1">Name</th>
        <th class="py-1">Email</th>
        <th class="py-1">ACtion</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr>
        <td class="py-2">EE100</td>
        <td class="py-2">Maria Anders</td>
        <td class="py-2">Germany@gmail.com</td>           
        <td class="py-2">    
          <router-link :to="{ name:'viewDetials' , params:{id:1} }">             
          <EyeIcon class="text-blue-500 h-10 w-10 heroicon-stroke-w-0.8 inline" />
          </router-link>
          <router-link :to="{ name:'editDetails' , params:{id:1}}">
          <PencilIcon class="text-emerald-500 h-100 w-10 heroicon-stroke-w-0.8 mx-6 inline" />
        </router-link>          
          <TrashIcon class="text-red-500 h-10 w-10 heroicon-stroke-w-0.8 inline cursor-pointer" /> 
           
        </td>      
      </tr>
    </tbody>
  </table>
</template>


<script>
import { defineComponent, reactive } from "vue";
import  { EyeIcon, PencilIcon, TrashIcon,UserPlusIcon } from '@heroicons/vue/24/solid';
import { RouterLink } from "vue-router";
export default defineComponent({
    components: {
        EyeIcon,PencilIcon,TrashIcon
  },
  setup() {
    // const icons = reactive({
    //   home: EyeIcon,
    //   film: PencilIcon,
    //   plus: TrashIcon,
    // });

    return {
    //  icons,
    };
  },
});
</script>

<style scoped>
</style>
