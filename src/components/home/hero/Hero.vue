<script setup lang="ts">
import video from '@/assets/herovideo.mp4'
import { ArrowDownTrayIcon, ArrowLongRightIcon } from '@heroicons/vue/16/solid';
</script>
<template>
  <section class="relative h-[80vh] w-full flex items-center justify-center bg-black">
    
    <video 
      autoplay 
      muted 
      loop 
      playsinline 
      class="absolute w-full h-full object-cover brightness-40"
    >
      <source :src="video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div class="relative z-10 text-center px-4">
      <h1 class="text-5xl font-bold text-white mb-4">
        សិក្សា BAC II អនឡាញ
      </h1>
      <p class=" text-xl mb-8 text-white/80 font-kantumruy">
        រៀនឆាប់ច្បាស់ ជាមួយវីដេអូ និង Mock Test សម្រាប់ជំនាញប្រឡង BAC
      </p>
      <div class="flex justify-center gap-4 flex-wrap">
        <button class="btn-primary flex items-center gap-2"><ArrowLongRightIcon class="w-5 h-5" />ចុះឈ្មោះឥឡូវ</button>
        <button class="btn-secondary flex items-center gap-2"><ArrowDownTrayIcon class="w-5 h-5" /> ទាញយកសៀវភៅរៀន</button>
      </div>
    </div>
  </section>
</template>
