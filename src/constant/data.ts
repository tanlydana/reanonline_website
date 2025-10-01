import {
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  VideoCameraIcon,
} from "@heroicons/vue/24/solid";
import facebook from "@/assets/fbs.png";
import instagram from "@/assets/ig.png";
import linkedin from "@/assets/link.png";
import whatsapp from "@/assets/what.png";
import twitter from "@/assets/twit.png";
import github from "@/assets/git.png";
import type { WhyChooseCard, Contact, NavLink } from "./types";

export const whyChooseUs: WhyChooseCard[] = [
  {
    icon: UserGroupIcon,
    title: "គ្រូបង្រៀនមានជំនាញ",
    description:
      "រៀនពីគ្រូដែលមានបទពិសោធន៍ និងការចាប់អារម្មណ៍ ដែលណែនាំអ្នកជាចំណុចៗ។",
    bgColor: "bg-blue-600",
  },
  {
    icon: ClockIcon,
    title: "រៀនស្របតាមកាលវិភាគ",
    description: "អាចសិក្សាបានគ្រប់ពេលវេលា និងកំណត់ល្បឿនរៀនដោយខ្លួនឯង។",
    bgColor: "bg-green-500",
  },
  {
    icon: CurrencyDollarIcon,
    title: "តម្លៃសមរម្យ",
    description: "ការអប់រំមានគុណភាពខ្ពស់ក្នុងតម្លៃដែលគ្រប់គ្នាអាចទិញបាន។",
    bgColor: "bg-yellow-500",
  },
  {
    icon: VideoCameraIcon,
    title: "វីដេអូគុណភាពខ្ពស់",
    description:
      "វីដេអូមានភាពច្បាស់លាស់ និងងាយតាមដាន សម្រាប់ការរៀនប្រសិទ្ធភាព។",
    bgColor: "bg-purple-600",
  },
];

export const socialMedia = [
  { img: facebook },
  { img: instagram },
  { img: linkedin },
  { img: whatsapp },
  { img: twitter },
  { img: github },
];

export const contact: Contact = {
  phone: "+85512345678",
  email: "info@example.com",
  address: "Phnom Penh, Cambodia",
};

export const navLinks: NavLink[] = [
  { name: "ទំព័រដើម", path: "/" },
  { name: "អំពីយើង", path: "/courses" },
  { name: "វគ្គសិក្សា", path: "/about" },
  { name: "ទំនាក់ទំនង", path: "/contact" },
];
