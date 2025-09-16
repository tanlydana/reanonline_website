<script setup lang="ts">
import { courses } from '../../../data/course';
</script>

<template>

    <div class="container flex flex-col items-center justify-center text-center mb-12">
      <!-- Title -->
      <h2 class="header-text text-[#0A0F24] mb-4">Our Popular Course</h2>
      <p class="sub-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th</p>
    </div>

    <!-- Cards -->
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="course in courses"
        :key="course.name"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
      >
        <!-- Image -->
        <img
          :src="course.image"
          :alt="course.name"
          class="w-full h-48 object-cover border-b-1 border-gray-200"
        />

        <!-- Content -->
        <div class="p-6 text-start">
          <h3 class="text-xl font-bold text-[#0A0F24] mb-2">{{ course.name }}</h3>
          <p class="text-gray-600 mb-4">Rate: {{ course.rate }} ⭐⭐⭐</p>
          <button class="p-2 px-6 rounded-lg border border-gray-200 bg-gray-100 w-full">
            Enroll
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center mt-10">
      <button class="btn-secondary">មើលបន្ថែម</button>
    </div>

</template>
