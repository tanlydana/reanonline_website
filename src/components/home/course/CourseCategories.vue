<script setup lang="ts">
import { plans } from '../../../data/plan';
import { CheckCircleIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <section class="my-20">
    <div class="container max-w-6xl flex flex-col items-center justify-center text-center">
      <!-- title -->
      <div class="container max-w-6xl">
        <h2 class="header-text bg-primary mb-4 leading-snug">ជ្រើសរើសគម្រោងសិក្សាសម្រាប់អ្នក</h2>
        <p class="sub-text leading-snug text-gray-500 mx-auto">ការរៀបចំវគ្គសិក្សាដោយទូលំទូលាយ សម្រាប់ផ្នែកវិទ្យាសាស្ត្រ
          និងសង្គម
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl container mt-16">
        <div v-for="plan in plans" :key="plan.name"
          class="border border-gray-200 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          :class="plan.popular ? 'lg:scale-105 lg:shadow-2xl ' : ''">
          <div class="p-8">
            <!-- Plan Header -->

            <h2 class="text-2xl font-semibold text-gray-500 mb-4 text-left lg:text-center">{{ plan.name }}</h2>

            <p class="text-slate-500 mb-6 leading-relaxed line-clamp-3 text-left lg:text-center">
              {{ plan.description }}
            </p>


            <div class="mb-8">
              <div class="flex items-baseline gap-2">
                <span :class="`text-5xl font-bold ${plan.classes.text}`">
                  {{ plan.price }}
                </span>
                <span class="text-slate-500 text-lg">{{ plan.period }}</span>
              </div>
              <p class="text-slate-500 text-sm mt-2 leading-snug text-left lg:text-center">
                វិក្កយបត្រប្រចាំខែ លុបចោលគ្រប់ពេល។
              </p>
            </div>

            <button
              :class="`font-kantumruy w-full py-2 px-4 border-none ${plan.classes.button} text-white rounded-lg font-medium text-lg  mb-8`">
              ចាប់ផ្តើម
            </button>

            <div>
              <h4 class="font-medium text-gray-500 mb-4 text-left lg:text-center">រួមបញ្ចូល:</h4>
              <ul class="space-y-4">
                <li v-for="(benefit, i) in plan.benefits" :key="i" class="flex items-start gap-3">
                  <CheckCircleIcon :class="`w-5 h-5 ${plan.classes.icon} flex-shrink-0 mt-0.5`" />
                  <span class="text-gray-500 leading-relaxed">{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>