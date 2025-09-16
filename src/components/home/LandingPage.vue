<script setup lang="ts">
import Navbar from './navbar/Navbar.vue'
import Hero from './hero/Hero.vue'
import CourseCategories from './course/CourseCategories.vue'
import Testimonials from './testimonials/Testimonials.vue'
import WhySiksaOnline from './about/WhySiksaOnline.vue'
</script>

<template>
  <div class=" bg-white min-h-screen">
    <Navbar />
    <Hero />
    <CourseCategories />
    <WhySiksaOnline/>
    <Testimonials />
    <FinalCTA /> 
  </div>
</template>

