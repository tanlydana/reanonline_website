import mathImg from "@/assets/math.jpg";
import physicImg from "@/assets/physic.jpg";
import khmerImg from "@/assets/khmer.jpg";
import chemisImg from "@/assets/chemis.jpg";
import historyImg from "@/assets/history.jpg";
import englishImg from "@/assets/english.png";
import type { Course } from "./types";

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
