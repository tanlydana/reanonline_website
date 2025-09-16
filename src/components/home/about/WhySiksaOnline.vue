<script setup lang="ts">
import { whyChooseUs } from '../../../data/data';
import { ChevronRightIcon } from '@heroicons/vue/16/solid';
</script>

<template>
    <section class="bg-white py-16 my-12">
        <div class="container flex flex-col items-center justify-center text-center">
            <h2 class="header-text text-[#0A0F24] mb-4">Benefits of Online Education</h2>
            <p class="sub-text">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-auto h-auto mt-12">
                <div v-for="us in whyChooseUs" :key="us.title"
                    class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">

                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        :class="us.bgColor">
                        <component :is="us.icon" class="w-8 h-8 text-white" />
                    </div>

                    <h3 class="text-lg font-bold text-[#0A0F24] mb-2">{{ us.title }}</h3>
                    <p class="text-gray-600 leading-relaxed text-base line-clamp-2">
                        {{ us.description }}
                    </p>

                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20 my-16">
                <!-- Image -->
                <div class="flex justify-center">
                    <img src="../../../assets/tutorial.png" alt="Tutorial"
                        class="w-full max-w-md h-auto object-contain" />
                </div>

                <!-- Content -->
                <div class="text-start">
                    <h2 class="text-2xl md:text-4xl font-bold text-[#0A0F24] mb-6">
                        We Always Ensure the Best Courses for Your Learning
                    </h2>
                    <p class="text-base text-gray-600 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident placeat quos aspernatur
                        commodi impedit soluta, neque quis corporis et eius reprehenderit.
                    </p>
                    <button class="btn-secondary flex items-center gap-2">
                        <ChevronRightIcon class="w-5 h-5" />
                        ចុះឈ្មោះឥឡូវ
                    </button>
                </div>
            </div>



        </div>
    </section>
</template>
