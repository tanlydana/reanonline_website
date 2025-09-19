<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon,EnvelopeIcon } from '@heroicons/vue/24/outline';
import { faqs } from '../../../data/faq';

const openItems = ref<number[]>([]);

const toggleFAQ = (index: number) => {
  const itemIndex = openItems.value.indexOf(index);
  if (itemIndex > -1) {
    openItems.value.splice(itemIndex, 1);
  } else {
    openItems.value.push(index);
  }
};

const isOpen = (index: number) => {
  return openItems.value.includes(index);
};
</script>

<template>
  <section class="my-20">

    <div class="w-full flex justify-center mb-6">
      <div class="badge">
        QA of ReanOnline
      </div>
    </div>

    <div class="container max-w-6xl flex flex-col items-center justify-center text-center mb-8">
      <h2 class="header-text bg-primary mb-4 leading-snug">ស្វែងយល់បន្ថែមអំពី សិក្សាអនឡាញ!</h2>
      <p class="sub-text text-gray-500">បើអ្នកមានចម្ងល់អំពីកម្មវិធីសិក្សានេះ
        អ្នកអាចស្វែងយល់តាមរយៈសំណួរ-ចម្លើយខាងក្រោមនេះ។
        ករណីអ្នកមិនទាន់ច្បាស់ អ្នកអាចទំនាក់ទំនងមកក្រុមការងារ តាមរយៈទំព័រទំនាក់ទំនងរបស់យើងខ្ញុំ!</p>
    </div>

    <div class="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Content -->
      <div class="text-start order-2 lg:order-1">
        <h4 class="text-2xl leading-snug md:text-4xl font-bold bg-secondary mb-8">
          សំណួរដែលច្រើនសួរជាញឹកញាប់៖
        </h4>


        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index">

            <button @click="toggleFAQ(index)"
              class="w-full py-4 text-left flex items-start justify-between border-0 bg-transparent">
              <h5 class="text-lg font-medium text-[#191996]/80 font-kantumruy leading-relaxed">
                {{ faq.question }}
              </h5>

              <div class="flex-shrink-0 mt-1">
                <ChevronDownIcon :class="isOpen(index) ? 'rotate-180' : 'rotate-0'"
                  class="w-5 h-5 text-[#191996]/80 transition-transform duration-300" />
              </div>
            </button>

            <div :class="isOpen(index) ? 'max-h-96 pb-6' : 'max-h-0 pb-0'"
              class="overflow-hidden transition-all duration-300 ease-out">
              <div class="pr-11">
                <p class="text-[#191996]/80 leading-relaxed text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center order-1 lg:order-2">
        <img src="../../../assets/faqs.png" alt="faq" class="w-full max-w-md h-auto object-contain" />
      </div>
    </div>

    <div class="container max-w-6xl flex flex-col my-20">
      <div class="w-full text-center bg-[#191996] rounded-2xl p-10 md:p-16 
           border border-gray-200 flex flex-col items-center gap-6">
        <p class="text-lg md:text-2xl leading-relaxed max-w-3xl text-white">
          បើអ្នកនៅតែមិនទាន់ច្បាស់ ឬមានចម្ងល់ផ្សេងទៀត
          អ្នកអាចទាក់ទងមកក្រុមការងាររបស់យើងតាមរយៈប៊ូតុង
          <span class="font-semibold">"ទំនាក់ទំនង"</span> ខាងក្រោម។
          យើងមានសេចក្តីរីករាយក្នុងការឆ្លើយតបនឹងសំណួរទាំងអស់របស់អ្នក។
        </p>
        <button
          class="text-[#191996] font-kantumruy font-medium text-sm py-3 px-6 rounded-full transition border-none bg-white flex gap-2"><EnvelopeIcon class="w-5 h-5 "/>ទំនាក់ទំនង</button>
      </div>
    </div>

  </section>
</template>