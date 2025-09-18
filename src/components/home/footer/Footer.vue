<script setup lang="ts">
import logo from '@/assets/footer.png'
import { navLinks, contact, socialMedia } from '../../../data/data';
</script>

<template>
  <footer class="bg-transparent border-t border-gray-200 py-12">
    <div class="container max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-4">

      <div class="flex items-start justify-start flex-col gap-4">
        <img :src="logo" alt="Logo" class="w-[200px] h-auto block" />
        <p class="text-[#191996]/90 text-sm leading-relaxed">
          រៀនបានគ្រប់ពេលវេលា គ្រប់ទីកន្លែងជាមួយនឹងវគ្គសិក្សាប្រកបដោយគុណភាពដែលរចនាឡើងសម្រាប់អ្នក។
        </p>
      </div>

      <div class="flex lg:justify-center justify-start my-2 lg:my-0">
        <div class="flex flex-col text-left">
          <h4 class="text-lg font-medium text-[#191996] leading-snug mb-4">តំណរហ័ស</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li v-for="link in navLinks" :key="link.name" class="list-none mb-2 text-[#191996]/90 cursor-pointer">
              {{ link.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex lg:justify-center justify-start my-2 lg:my-0">
        <div class="flex flex-col text-left">
          <h4 class="text-lg font-medium text-[#191996] leading-snug mb-4">ទំនាក់ទំនង</h4>
          <ul class="space-y-2 text-sm text-[#191996]/90">
            <li class="list-none mb-2">លេងទូរស័ព្ទ: {{ contact.phone }}</li>
            <li class="list-none mb-2">អ៉ីមែល: {{ contact.email }}</li>
            <li class="list-none mb-2">អាសយដ្ឋាន: {{ contact.address }}</li>
          </ul>
        </div>
      </div>

      <div class="flex lg:justify-center justify-start">
        <div class="flex flex-col text-left">
          <h4 class="text-lg font-medium text-[#191996] leading-snug mb-4">បណ្តាញសង្គម</h4>
          <div class="flex gap-4">
            <a v-for="social in socialMedia" target="_blank" rel="noopener noreferrer"
              class="transition-transform transform hover:scale-110">
              <img :src="social.img" alt="social icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 mt-8 py-4 text-center text-sm text-[#191996]/90">
      © 2025 ReanOnline. All rights reserved.
    </div>
  </footer>
</template>
