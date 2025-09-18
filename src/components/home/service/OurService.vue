<script setup lang="ts">
import { courses } from '../../../data/course';
</script>

<template>
  <section class="my-20">
    <div class="container max-w-6xl flex flex-col items-center justify-center text-center mb-12">
      <h2 class="header-text bg-primary mb-4 leading-snug">វគ្គសិក្សាកំពុងពេញនិយម</h2>
      <p class="sub-text text-gray-500 leading-snug mx-auto">វគ្គសិក្សាទាំងនេះកំពុងទទួលបានការចាប់អារម្មណ៍យ៉ាងខ្លាំង
        ព្រោះមានមាតិកាដែលងាយស្រួលរៀន និងអនុវត្តបានពិតប្រាកដ។ ជាមួយនឹងគ្រូបង្រៀនមានបទពិសោធន៍ អ្នកអាចបង្កើនចំណេះដឹង
        និងជំនាញរបស់ខ្លួនបានយ៉ាងរហ័ស។</p>
    </div>
    <div class="container max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="course in courses" :key="course.name"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

        <img :src="course.image" :alt="course.name" class="w-full h-48 object-cover border-b-1 border-gray-200" />

        <div class="p-6 text-start">
          <h3 class="text-xl font-bold text-[#191996] mb-2">{{ course.name }}</h3>
          <p class="text-gray-600 mb-4">Rate: {{ course.rate }}</p>
          <button
            class="text-[#191996]/90 p-2 px-6 rounded-lg border border-gray-200 bg-gray-100 hover:bg-gray-200 w-full font-kantumruy">
            ចូលរៀន
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center mt-10">
      <button class="btn-primary">មើលបន្ថែម</button>
    </div>
  </section>
</template>
