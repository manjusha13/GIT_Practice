

<template>
  <div class="shadow-md pb-6">
    <div class="bg-pink-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Add Student</h1>
    </div>
    <form class="w-full" id="AddStudentForm">
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="studentName">Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="studentName"
            v-model.trim="formData.studentName"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div class="w-1/5">
          <label class="font-medium" for="studentName">Email : </label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            id="email"
            v-model.trim="formData.email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Enter Your Email"
            required
          />
        </div>
      </div>
      <div class="m-8 justify-center">
        <button
          type="submit"
          class="
            bg-indigo-700
            text-white
            font-medium
            py-2
            rounded-md
            px-6
            hover:bg-indigo-800
            mr-6
          "
        >
          Add
        </button>
        <router-link :to="{ name:'StudentList'}">
        <button
          type="button"
          class="
            bg-indigo-700
            text-white
            font-medium
            py-2
            rounded-md
            px-6
            hover:bg-indigo-800
            mr-6
          "
        >
          Back to Home
        </button>
      </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const formData = reactive({
      studentName: "",
      email: "",
    });

    return {
      formData,
    };
  },
});
</script>


<style scoped>
</style>
