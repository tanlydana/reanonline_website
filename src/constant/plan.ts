import {
  UserIcon,
  SparklesIcon,
  BuildingOfficeIcon,
} from "@heroicons/vue/24/solid";

import type { Plan } from "./types";

export const plans: Plan[] = [
  {
    name: "គម្រោងមូលដ្ឋាន",
    description:
      "សាកសមសម្រាប់សិស្សឬក្រុមតូចៗដែលទើបចាប់ផ្តើម។ អាចចូលប្រើមុខងារចាំបាច់ ដោយគ្មានភាពស្មុគស្មាញ។",
    price: "$10",
    period: "/ខែ",
    icon: UserIcon,
    popular: false,
    classes: {
      border: "border-blue-200",
      popularBorder: "border-blue-500",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-800",
      bg: "from-blue-50 to-blue-100",
    },
    benefits: [
      "ចូលប្រើមុខងារចាំបាច់",
      "មានជំនួយក្នុងម៉ោងធ្វើការ",
      "គាំទ្រដល់ 5 គម្រោង ឬថ្នាក់រៀន",
    ],
  },
  {
    name: "គម្រោងពិសេស",
    description:
      "សាកសមសម្រាប់ក្រុមកំពុងរីកចម្រើន ឬអ្នកដែលត្រូវការឧបករណ៍កម្រិតខ្ពស់ ដើម្បីរៀន និងអភិវឌ្ឍឲ្យប្រសើរជាងមុន។",
    price: "$29",
    period: "/ខែ",
    icon: SparklesIcon,
    popular: true,
    classes: {
      border: "border-green-200",
      popularBorder: "border-green-500",
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-700",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-800",
      bg: "from-green-50 to-green-100",
    },
    benefits: [
      "រួមមានគ្រប់មុខងារនៅក្នុង មូលដ្ឋាន",
      "គម្រោង ឬថ្នាក់រៀនមិនកំណត់",
      "មានការវិភាគ និងឧបករណ៍កម្រិតខ្ពស់",
    ],
  },
  {
    name: "គម្រោងសហគ្រាស",
    description:
      "សាកសមសម្រាប់ស្ថាប័ន ឬអង្គភាពធំៗ ដែលត្រូវការដំណោះស្រាយផ្ទាល់ខ្លួន មានសុវត្ថិភាពខ្ពស់ និងមានការគាំទ្រពិសេស។",
    price: "$99",
    period: "/ខែ",
    icon: BuildingOfficeIcon,
    popular: false,
    classes: {
      border: "border-violet-200",
      popularBorder: "border-violet-500",
      text: "text-violet-600",
      button: "bg-violet-600 hover:bg-violet-700",
      icon: "text-violet-600",
      badge: "bg-violet-100 text-violet-800",
      bg: "from-violet-50 to-violet-100",
    },
    benefits: [
      "រួមមានគ្រប់មុខងារនៅក្នុង ពិសេស",
      "គ្រប់គ្រងសិស្ស និងថ្នាក់រៀនបានច្រើន",
      "មានអ្នកគាំទ្រផ្ទាល់ខ្លួន ចាំជួយគ្រប់ពេល",
    ],
  },
];
