<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/footer.png'
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { navLinks } from '../../../data/data'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
</script>

<template>
    <header class="w-full sticky top-0 z-50 bg-white shadow-md h-20">
        <nav class="container mx-auto flex items-center justify-between h-full px-4">

            <div class="flex items-center gap-2"> <img :src="logo" alt="Logo" class="w-[180px] h-auto block" /> </div>

            <div class="hidden lg:flex justify-center">
                <ul class="flex items-center space-x-8 list-none gap-8 ">
                    <li v-for="(item, index) in navLinks" :key="index"> <a
                            class="relative no-underline text-violet-950 font-medium group"> {{ item.name }} <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
                        </a> </li>
                </ul>
            </div>

            <div class="flex items-center gap-4">
                <button class="hidden lg:flex btn-primary items-center gap-2">
                    ចុះឈ្មោះឥឡូវ
                    <ChevronRightIcon class="w-5 h-5" />
                </button>

                <button @click="toggleMenu"
                    class="lg:hidden p-2 bg-transparent border-0 flex items-center justify-center">
                    <Bars3Icon v-if="!isOpen" class="w-8 h-8 text-violet-800" />
                </button>
            </div>

        </nav>

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
