import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.jpg";

export interface Testimonial {
  name: string;
  position: string;
  feedback: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "ធីតា",
    position: "សិស្ស",
    feedback:
      "មេរៀនច្បាស់លាស់ កាលវិភាគអាចបត់បែនបាន និងគ្រូគាំទ្ររហូត ជួយឲ្យខ្ញុំសិក្សាបានងាយស្រួលជាងមុន។",
    avatar: avatar3,
  },
  {
    name: "សុភាព",
    position: "សិស្ស",
    feedback:
      "វគ្គសិក្សានេះបានជួយឲ្យខ្ញុំយល់ច្បាស់ពីមុខវិជ្ជាទាំងអស់ និងមានទំនុកចិត្តកាន់តែច្រើនក្នុងការធ្វើប្រឡង។",
    avatar: avatar1,
  },
  {
    name: "វិរៈ",
    position: "សិស្ស",
    feedback:
      "ការប្រឡងសាកសមទាំងនេះមានអារម្មណ៍ដូចជាប្រឡងពិតៗ ហើយជួយឲ្យខ្ញុំរៀបចំបានល្អសម្រាប់ការប្រឡងបាក់ឌុប។",
    avatar: avatar2,
  },
  {
    name: "ពិសី",
    position: "សិស្ស",
    feedback:
      "មេរៀនច្បាស់លាស់ កាលវិភាគអាចបត់បែនបាន និងគ្រូគាំទ្ររហូត ជួយឲ្យខ្ញុំសិក្សាបានងាយស្រួលជាងមុន។",
    avatar: avatar3,
  },
];
