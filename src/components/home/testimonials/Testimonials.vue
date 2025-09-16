<script setup lang="ts">
import { testimonials } from '../../../data/testimonial';
</script>

<template>
  <section class="my-20">
    <!-- Section Title -->
    <div class="container flex flex-col items-center justify-center text-center mb-12">
      <h2 class="header-text text-[#0A0F24] mb-4">What our Students Say</h2>
      <p class="sub-text">There are many variations of passages of Lorem Ipsum available.</p>
    </div>

    <!-- Testimonials Grid -->
    <div class="max-w-5xl container grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="bg-white p-6 rounded-2xl shadow-md flex flex-col"
      >
        <!-- Feedback -->
        <p class="text-gray-600 mb-6 leading-relaxed">"{{ t.feedback }}"</p>

        <!-- Avatar + Name/Position/Stars -->
        <div class="flex items-center gap-4">
          <!-- Avatar -->
          <img
            :src="t.avatar"
            :alt="t.name"
            class="w-16 h-16 rounded-full object-cover"
          />

          <!-- Name + Position + Stars -->
          <div class="flex flex-col">
            <p class="font-bold text-[#0A0F24]">{{ t.name }}</p>
            <p class="text-gray-500 text-sm">{{ t.position }}</p>
            <p class="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
