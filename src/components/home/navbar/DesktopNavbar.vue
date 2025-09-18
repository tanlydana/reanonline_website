<script setup lang="ts">
import logo from '@/assets/footer.png'
import { ChevronRightIcon } from '@heroicons/vue/16/solid';
import { navLinks } from '../../../data/data';
</script>

<template>
    <header class="z-50 w-full sticky top-0 border-gray-600 shadow-md h-20 bg-white">
        <nav className="container grid grid-cols-2 md:grid-cols-3 items-center h-full">

            <div class="flex items-center gap-2">
                <img :src="logo" alt="Logo" class="w-[180px] h-auto block" />
            </div>

            <div class="hidden lg:flex justify-center">
                <ul class="flex items-center space-x-8 list-none gap-8 ">
                    <li v-for="(item, index) in navLinks" :key="index">
                        <a class="relative no-underline text-violet-950 font-medium group">
                            {{ item.name }}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="hidden lg:flex justify-end">
                <button class="btn-primary flex items-center gap-2">
                    ចុះឈ្មោះឥឡូវ
                    <ChevronRightIcon class="w-5 h-5" />
                </button>
            </div>

        </nav>
    </header>
</template>
