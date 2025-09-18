// data.ts
import {
  CalculatorIcon,
  BookOpenIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  VideoCameraIcon,
} from "@heroicons/vue/24/solid";
import type { Component } from "vue";
import mathImg from '@/assets/math.jpg';
import physicImg from '@/assets/physic.jpg';
import khmerImg from '@/assets/khmer.jpg';
import chemisImg from '@/assets/chemis.jpg';
import historyImg from '@/assets/history.jpg';
import englishImg from '@/assets/english.png';
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png';
import linkedin from '@/assets/linkedin.png';
import whatsapp from '@/assets/whatsapp.png';
import twitter from '@/assets/twitter.png';
import github from '@/assets/github.png';


export interface Subject {
  name: string;
  topics: string[];
}

export interface Category {
  icon: Component; // Vue component
  title: string; // e.g., "ថ្នាក់វិទ្យាសាស្រ្ត"
  subjects: Subject[];
}

export interface WhyChooseCard {
  icon: Component;
  title: string;
  description: string;
  bgColor: string;
}

export interface Course {
  image: string;
  name: string;
  rate: number;
}

export interface Testimonial {
  name: string;
  position: string;
  feedback: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialMedia {
  url: string;
  img: string;
}

export interface Contact {
  phone: string;
  email: string;
  address: string;
}

export interface NavLink {
  name: string;
  path: string;
}

// ---------------------------
// Data
// ---------------------------

export const categories: Category[] = [
  {
    icon: CalculatorIcon,
    title: "ថ្នាក់វិទ្យាសាស្រ្ត",
    subjects: [
      { name: "គណិតវិទ្យា", topics: ["លីមីត", "អាំងតេក្រា", "ប្រូបាប"] },
      { name: "រូបវិទ្យា", topics: ["ចលនា", "ថាមពល", "ចរន្តអគ្គិសនី"] },
      {
        name: "គីមីវិទ្យា",
        topics: ["ធាតុ និងសមាសធាតុ", "ប្រតិកម្មគីមី", "អាស៊ីត-មូលដ្ឋាន"],
      },
      {
        name: "ជីវវិទ្យា",
        topics: ["កោសិកា", "ជីវវិទ្យាសរីរាង្គ", "បំពង់រំញោច"],
      },
      {
        name: "អក្សរសាស្រ្តខ្មែរ",
        topics: ["វចនានុក្រម", "វចនានុក្រមសិក្សា", "អត្ថបទ"],
      },
      {
        name: "ប្រវត្តិវិទ្យា",
        topics: ["ប្រវត្តិជាតិ", "ប្រវត្តិអន្តរជាតិ", "សង្គ្រាម"],
      },
      { name: "អង់គ្លេស", topics: ["Grammar", "Vocabulary", "Reading"] },
    ],
  },
  {
    icon: BookOpenIcon,
    title: "ថ្នាក់វិទ្យាសាស្រ្តសង្គម",
    subjects: [
      {
        name: "អក្សរសាស្រ្តខ្មែរ",
        topics: ["វចនានុក្រម", "អត្ថបទ", "ប្រវត្តិអក្សរសាស្រ្ត"],
      },
      { name: "ភូមិវិទ្យា", topics: ["បរិយាកាស", "ដែនដី", "ភូមិសាស្រ្ត"] },
      {
        name: "ផែនដីនិងបរិស្ថានវិទ្យា",
        topics: ["បរិស្ថាន", "ធនធាន", "ប្រព័ន្ធអេកូស៊ីស្ទឹម"],
      },
      { name: "សីលធម៌ពលរដ្ឋ", topics: ["ច្បាប់", "សីលធម៌", "សិទ្ធិមនុស្ស"] },
      { name: "គណិតវិទ្យា", topics: ["លីមីត", "អាំងតេក្រា", "ប្រូបាប"] },
      {
        name: "ប្រវត្តិវិទ្យា",
        topics: ["ប្រវត្តិជាតិ", "ប្រវត្តិអន្តរជាតិ", "សង្គ្រាម"],
      },
      { name: "អង់គ្លេស", topics: ["Grammar", "Vocabulary", "Reading"] },
    ],
  },
];

export const whyChooseUs: WhyChooseCard[] = [
  {
    icon: UserGroupIcon,
    title: "Expert Instructors",
    description:
      "Learn from experienced and passionate teachers who guide you step by step.",
    bgColor: "bg-red-800",
  },
  {
    icon: ClockIcon,
    title: "Flexible Learning",
    description: "Study anytime, anywhere, and set your own learning pace.",
    bgColor: "bg-amber-400",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Affordable Price",
    description: "High-quality education at a price everyone can afford.",
    bgColor: "bg-green-800",
  },
  {
    icon: VideoCameraIcon,
    title: "High-Quality Video",
    description: "Engaging, clear, and easy-to-follow video courses.",
    bgColor: "bg-violet-800",
  },
];

export const courses: Course[] = [
  {
    image: mathImg,
    name: "គណិតវិទ្យា",
    rate: 4.9,
  },
  {
    image: physicImg,
    name: "រូបវិទ្យា",
    rate: 4.8,
  },
  {
    image: khmerImg,
    name: "អក្សរសាស្រ្តខ្មែរ",
    rate: 4.7,
  },
  {
    image: chemisImg,
    name: "គីមីវិទ្យា",
    rate: 4.9,
  },
  {
    image: historyImg,
    name: "ប្រវត្តិវិទ្យា",
    rate: 4.8,
  },
  {
    image: englishImg,
    name: "អង់គ្លេស",
    rate: 4.7,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sophea",
    position: "Student",
    feedback: "I improved my grades significantly thanks to these courses!",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "David",
    position: "Parent",
    feedback: "The teachers are excellent and very patient.",
    avatar: "/images/avatar2.jpg",
  },
];

export const faqs: FAQ[] = [
  {
    question: "តើខ្ញុំអាចចូលសិក្សានៅពេលណា?",
    answer: "អ្នកអាចចូលសិក្សា ពេលណាក៏បានដោយប្រើប្រព័ន្ធរបស់យើង។",
  },
  {
    question: "តើមានប្រភេទកូសសម្រាប់ទាំងមូលឬទេ?",
    answer: "មាន! យើងមានកូសសម្រាប់ថ្នាក់វិទ្យាសាស្រ្ត និងសង្គម។",
  },
];

export const socialMedia = [
  { url: "https://facebook.com", img: facebook },
  { url: "https://instagram.com", img: instagram },
  { url: "https://linkedin.com", img: linkedin },
  { url: "https://whatsapp.com", img: whatsapp },
  { url: "https://twitter.com", img: twitter },
  { url: "https://github.com", img: github },
];


export const contact: Contact = {
  phone: "+85512345678",
  email: "info@example.com",
  address: "Phnom Penh, Cambodia",
};

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];
