<script setup lang="ts">
import { testimonials } from '../../../constant/testimonial';
</script>

<template>
  <section class="my-20">
    <div class="container max-x-6xl flex flex-col items-center justify-center text-center mb-12">
      <h2 class="header-text bg-primary mb-4 leading-snug">មតិស្ថាបនារបស់សិស្ស</h2>
      <p class="sub-text text-gray-500">សិស្សជាច្រើនបានចែករំលែកបទពិសោធន៍ និងមតិយោបល់របស់ពួកគេ
        បន្ទាប់ពីបានចូលរួមវគ្គសិក្សា ដើម្បីជួយឲ្យអ្នកទទួលបានជម្រើសកាន់តែមានទំនុកចិត្ត។</p>
    </div>

    <div class="max-w-6xl container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="t in testimonials" :key="t.name" class="bg-white p-6 rounded-lg border border-gray-200 flex flex-col">

        <p class="text-gray-600 mb-6 leading-relaxed">"{{ t.feedback }}"</p>

        <div class="flex items-center gap-4">
          <img :src="t.avatar" :alt="t.name" class="w-16 h-16 rounded-full object-cover" />
          <div class="flex flex-col">
            <p class="font-bold text-[#191996]">{{ t.name }}</p>
            <p class="text-gray-500 text-sm">{{ t.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
