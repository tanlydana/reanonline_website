<script setup lang="ts">
import { ref } from 'vue';
import { navLinks } from '../../../data/data';
import { XMarkIcon, Bars3Icon, ChevronRightIcon } from '@heroicons/vue/24/solid';

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <header class="lg:hidden">
    <button @click="toggleMenu"
      class="p-2 border-0 rounded-md bg-white flex items-center justify-center lg:hidden fixed top-4 right-4 z-50">
      <Bars3Icon v-if="!isOpen" class="w-8 h-8 text-violet-800" />
    </button>

    <div v-if="isOpen" @click="toggleMenu" class="fixed inset-0 bg-transparent z-40"></div>

    <div class="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 transform transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'">

      <div class="flex justify-end p-4">
        <button @click="toggleMenu" class="p-2 rounded-md border-0 bg-transparent">
          <XMarkIcon class="w-6 h-6 text-violet-800" />
        </button>
      </div>
      <div class="flex flex-col h-full p-5 mt-6">

        <ul class="list-none flex flex-col gap-6">
          <li v-for="(item, index) in navLinks" :key="index">
            <a href="#" class="text-lg no-underline text-violet-950 font-medium">
              {{ item.name }}
            </a>
          </li>
        </ul>


        <div class="mt-8">
          <button
            class="text-white flex items-center justify-center w-full gap-2 text-sm py-3 px-6 rounded-full transition border-none bg-violet-800 font-kantumruy">
            ចុះឈ្មោះឥឡូវ
            <ChevronRightIcon class="w-5 h-5 " />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
