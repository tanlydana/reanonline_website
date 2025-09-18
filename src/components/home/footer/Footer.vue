<script setup lang="ts">
import logo from '@/assets/footer.png'
import { navLinks, contact, socialMedia } from '../../../data/data';
</script>

<template>
  <footer class="bg-transparent border-t border-gray-200 py-12">
    <div class="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      <!-- Logo & Description -->
      <!-- Logo & Description -->
      <div class="flex items-start justify-start flex-col gap-4"> <!-- changed justify-center → justify-start -->
        <img :src="logo" alt="Logo" class="w-[200px] h-auto block" /> <!-- use block to remove inline spacing -->
        <p class="text-gray-600 text-sm leading-relaxed">
          Learn anytime, anywhere with quality courses designed for you.
        </p>
      </div>


      <!-- Quick Links -->
      <div class="flex justify-center"> <!-- centers the block horizontally -->
        <div class="flex flex-col text-left"> <!-- keeps text left-aligned -->
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li v-for="link in navLinks" :key="link.name"
              class="list-none mb-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              {{ link.name }}
            </li>
          </ul>
        </div>
      </div>


      <!-- Contact -->
      <div class="flex items-start justify-center">
        <div class="flex flex-col text-left">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="list-none mb-2">Phone: {{ contact.phone }}</li>
            <li class="list-none mb-2">Email: {{ contact.email }}</li>
            <li class="list-none mb-2">Address: {{ contact.address }}</li>
          </ul>
        </div>
      </div>

      <!-- Social Media -->
      <div class="flex justify-center ">
        <div class="flex flex-col text-left">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div class="flex gap-4">
            <a v-for="social in socialMedia" :key="social.url" :href="social.url" target="_blank"
              rel="noopener noreferrer" class="transition-transform transform hover:scale-110">
              <img :src="social.img" alt="social icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>



    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500">
      © 2025 SiksaOnline. All rights reserved.
    </div>
  </footer>
</template>
