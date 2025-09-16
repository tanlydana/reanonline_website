<script setup lang="ts">
import { categories } from '../../../data/data';
</script>

<template>
  <section class="bg-gray-50 py-20">
    <div class="container flex flex-col items-center justify-center text-center">
      <!-- title -->
      <h2 class="header-text text-[#0A0F24] mb-4">Choose Your Stream</h2>
      <p class="sub-text">ការរៀបចំដ៏ទូលំទូលាយសម្រាប់ទាំងផ្នែកវិទ្យាសាស្ត្រ និងសង្គមវិទ្យា</p>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-auto h-auto mt-12">
        <!-- Loop over each category -->
        <div v-for="category in categories" :key="category.title" class="bg-[#FFFFFF] p-8 rounded-2xl shadow-lg border border-gray-100">

          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-[#BB2233] rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="category.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-[#0A0F24] mb-2">{{ category.title }}</h3>
          </div>

          <ul class="space-y-4 text-left">
            <li v-for="subject in category.subjects" :key="subject.name" class="flex items-center text-[#0A0F24]">
              <span class="w-2 h-2 bg-[#FA8603] rounded-full mr-4 flex-shrink-0"></span>
              <span class="leading-relaxed">{{ subject.name }} - {{ subject.topics.join(', ') }}</span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>
</template>