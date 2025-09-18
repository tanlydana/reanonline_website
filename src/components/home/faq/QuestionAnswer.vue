<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { faqs } from '../../../data/faq';

// Track which FAQ items are open
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
  <section class="py-20">
    
    <div class="w-full flex justify-center mb-6">
      <div class="badge">
        QA of SiksaOnline
      </div>
    </div>

    <div class="container flex flex-col items-center justify-center text-center mb-8">
      <h2 class="header-text bg-primary mb-4 leading-snug">ស្វែងយល់បន្ថែមអំពី សិក្សាអនឡាញ!</h2>
      <p class="sub-text">បើអ្នកមានចម្ងល់អំពីកម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល អ្នកអាចស្វែងយល់តាមរយៈសំណួរ-ចម្លើយខាងក្រោមនេះ។
        ករណីអ្នកមិនទាន់ច្បាស់ អ្នកអាចទំនាក់ទំនងមកក្រុមការងារ ក.អ.ជ.ឌ. តាមរយៈទំព័រទំនាក់ទំនងរបស់យើងខ្ញុំ!</p>
    </div>

    <div class="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Content -->
      <div class="text-start">
        <h4 class="text-2xl md:text-4xl font-bold text-[#0A0F24] mb-8">
          សំណួរដែលច្រើនសួរជាញឹកញាប់៖
        </h4>

        
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index">
           
            <button @click="toggleFAQ(index)"
              class="w-full py-4 text-left flex items-start justify-between border-0 bg-transparent">
              <h5 class="text-base font-kantumruy leading-relaxed">
                {{ faq.question }}
              </h5>

              <div class="flex-shrink-0 mt-1">
                <ChevronDownIcon :class="isOpen(index) ? 'rotate-180' : 'rotate-0'"
                  class="w-5 h-5 text-gray-400 transition-transform duration-300" />
              </div>
            </button>

            <div :class="isOpen(index) ? 'max-h-96 pb-6' : 'max-h-0 pb-0'"
              class="overflow-hidden transition-all duration-300 ease-out">
              <div class="pr-11">
                <p class="text-gray-600 leading-relaxed text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <img src="../../../assets/FAQs-rafiki.png" alt="faq" class="w-full max-w-md h-auto object-contain" />
      </div>
    </div>
  </section>
</template>