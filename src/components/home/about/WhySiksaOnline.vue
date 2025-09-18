<script setup lang="ts">
import { whyChooseUs } from '../../../data/data';
import { ChevronRightIcon } from '@heroicons/vue/16/solid';
</script>
<template>
    <section class="my-20">
        <div class="container max-w-6xl flex flex-col items-center justify-center text-center">

            <div class="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                <div class="flex justify-center">
                    <img src="../../../assets/about.png" alt="Tutorial" class="w-full max-w-md h-auto object-contain" />
                </div>

                <div class="text-start max-w-xl mx-auto">
                    <h2 class="text-2xl md:text-4xl font-bold text-[#191996] mb-6">
                        ReanOnline ជាវេទិកាសិក្សាអនឡាញ សម្រាប់សិស្សបាក់ឌុប
                    </h2>
                    <p class="text-base text-[#191996]/80 leading-relaxed mb-6">
                        វេទិកានេះត្រូវបានបង្កើតឡើង ដើម្បីជួយសិស្សរៀនតាមអនឡាញបានងាយស្រួល និងមានប្រសិទ្ធភាព។
                        អ្នកនឹងទទួលបានវីដេអូបង្រៀនច្បាស់លាស់ ការប្រៀបប្រដូងតាមរយៈ ការប្រលងសាកល្បង
                        និងមាតិកាដែលត្រូវនឹងការប្រឡងបាក់ឌុប។
                    </p>
                    <button class="btn-primary flex items-center gap-2">
                        ចុះឈ្មោះឥឡូវ
                        <ChevronRightIcon class="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div class="container max-w-6xl">
                <h2 class="header-text bg-primary mb-4 leading-snug my-24">អត្ថប្រយោជន៍នៃការអប់រំតាមអនឡាញ</h2>
                <p class="sub-text text-gray-500 mx-auto leading-snug">
                    ការអប់រំតាមអនឡាញអាចឲ្យអ្នកសិក្សាតាមល្បឿនផ្ទាល់ខ្លួន ទៅកាន់មុខវិជ្ជាផ្សេងៗបានស្រួល
                    និងមានភាពងាយស្រួលក្នុងការចូលដល់មេរៀនគ្រប់ពេលវេលា។
                </p>
            </div>

            <div class="container max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-auto h-auto mt-12">
                <div v-for="us in whyChooseUs" :key="us.title"
                    class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">

                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        :class="us.bgColor">
                        <component :is="us.icon" class="w-8 h-8 text-white" />
                    </div>

                    <h3 class="text-lg font-medium text-gray-600 mb-2 leading-snug">{{ us.title }}</h3>
                    <p class="text-gray-500 leading-relaxed text-sm line-clamp-2">
                        {{ us.description }}
                    </p>

                </div>
            </div>
        </div>
    </section>
</template>
