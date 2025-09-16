// data.ts
import { CalculatorIcon, BookOpenIcon } from '@heroicons/vue/24/solid';
// ---------------------------
// Interfaces
// ---------------------------

export interface Subject {
  name: string;
  topics: string[];
}

export interface Category {
  icon: any;      // Vue component
  title: string;  // e.g., "ថ្នាក់វិទ្យាសាស្រ្ត"
  subjects: Subject[];
}

export interface WhyChooseCard {
  icon: string; // component name or path
  title: string;
  description: string;
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
  name: string;
  url: string;
  icon: string;
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
      { name: "គីមីវិទ្យា", topics: ["ធាតុ និងសមាសធាតុ", "ប្រតិកម្មគីមី", "អាស៊ីត-មូលដ្ឋាន"] },
      { name: "ជីវវិទ្យា", topics: ["កោសិកា", "ជីវវិទ្យាសរីរាង្គ", "បំពង់រំញោច"] },
      { name: "អក្សរសាស្រ្តខ្មែរ", topics: ["វចនានុក្រម", "វចនានុក្រមសិក្សា", "អត្ថបទ"] },
      { name: "ប្រវត្តិវិទ្យា", topics: ["ប្រវត្តិជាតិ", "ប្រវត្តិអន្តរជាតិ", "សង្គ្រាម"] },
      { name: "អង់គ្លេស", topics: ["Grammar", "Vocabulary", "Reading"] },
    ],
  },
  {
    icon: BookOpenIcon,
    title: "ថ្នាក់វិទ្យាសាស្រ្តសង្គម",
    subjects: [
      { name: "អក្សរសាស្រ្តខ្មែរ", topics: ["វចនានុក្រម", "អត្ថបទ", "ប្រវត្តិអក្សរសាស្រ្ត"] },
      { name: "ភូមិវិទ្យា", topics: ["បរិយាកាស", "ដែនដី", "ភូមិសាស្រ្ត"] },
      { name: "ផែនដីនិងបរិស្ថានវិទ្យា", topics: ["បរិស្ថាន", "ធនធាន", "ប្រព័ន្ធអេកូស៊ីស្ទឹម"] },
      { name: "សីលធម៌ពលរដ្ឋ", topics: ["ច្បាប់", "សីលធម៌", "សិទ្ធិមនុស្ស"] },
      { name: "គណិតវិទ្យា", topics: ["លីមីត", "អាំងតេក្រា", "ប្រូបាប"] },
      { name: "ប្រវត្តិវិទ្យា", topics: ["ប្រវត្តិជាតិ", "ប្រវត្តិអន្តរជាតិ", "សង្គ្រាម"] },
      { name: "អង់គ្លេស", topics: ["Grammar", "Vocabulary", "Reading"] },
    ],
  },
];


export const whyChooseUs: WhyChooseCard[] = [
  {
    icon: "IconName1",
    title: "High Quality Content",
    description: "Our courses are designed by experts to ensure top-notch learning.",
  },
  {
    icon: "IconName2",
    title: "Expert Teachers",
    description: "Learn from the best teachers with years of experience.",
  },
  {
    icon: "IconName3",
    title: "Flexible Schedule",
    description: "Study anytime, anywhere, at your own pace.",
  },
];

export const courses: Course[] = [
  {
    image: "/images/course1.jpg",
    name: "គណិតវិទ្យា - លីមីត",
    rate: 4.9,
  },
  {
    image: "/images/course2.jpg",
    name: "រូបវិទ្យា - ឧបករណ៍ និងព្រឹត្តិការណ៍",
    rate: 4.8,
  },
  {
    image: "/images/course3.jpg",
    name: "អក្សរសាស្រ្តខ្មែរ",
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

export const socialMedia: SocialMedia[] = [
  { name: "Facebook", url: "https://facebook.com", icon: "FacebookIcon" },
  { name: "Instagram", url: "https://instagram.com", icon: "InstagramIcon" },
  { name: "TikTok", url: "https://tiktok.com", icon: "TikTokIcon" },
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
