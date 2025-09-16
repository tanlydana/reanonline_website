<script setup lang="ts">
import logo from '@/assets/logo.png'
import { ArrowLongRightIcon } from '@heroicons/vue/16/solid';
const navigationItems = [
  { name: "ទំព័រដើម", href: "/" },
  { name: "សេវាកម្ម", href: "/services" },
  { name: "អំពីយើង", href: "/about" },
  { name: "ទំនាក់ទំនង", href: "/contact" }
]
</script>

<template>
    <header class="z-50 w-full sticky top-0 border-gray-600 shadow-md h-20 bg-white">
        <nav className="container grid grid-cols-2 md:grid-cols-3 items-center h-full">
        
        <div class="flex items-center gap-2">
            <img :src="logo" alt="Logo" class="w-12 h-12" />
            <span class="font-medium text-xl text-[#181f3c] hidden sm:block">សិក្សាអនឡាញ</span>
        </div>

        <div class="hidden md:flex justify-center">
            <ul class="flex items-center space-x-8 list-none gap-8 ">
            <li v-for="(item, index) in navigationItems" :key="index">
                <a
                :href="item.href"
                class="no-underline text-[#181f3c] font-medium"
                >
                {{ item.name }}
                <span
                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"
                ></span>
                </a>
            </li>
            </ul>
        </div>

        <div class="flex justify-end">
        <button class="btn-primary flex items-center gap-2"><ArrowLongRightIcon class="w-5 h-5" />ចុះឈ្មោះឥឡូវ</button>
      </div>
        </nav>
    </header>
</template>
