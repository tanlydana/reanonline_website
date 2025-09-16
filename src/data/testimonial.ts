 // adjust path if needed
import avatar1 from '@/assets/avatar1.jpg';
import avatar2 from '@/assets/avatar2.png';
import avatar3 from '@/assets/avatar3.jpg';

export interface Testimonial {
  name: string;
  position: string;
  feedback: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sophea",
    position: "Student",
    feedback: "This course helped me understand every subject more clearly and boosted my confidence for the exam.",
    avatar: avatar1,
  },
  {
    name: "Virak",
    position: "Student",
    feedback: "The practice exams felt just like the real thing. Highly recommended for anyone preparing for BAC II.",
    avatar: avatar2,
  },
  {
    name: "Pisey",
    position: "Student",
    feedback: "Clear lessons, flexible schedule, and supportive teachers. This platform made studying much easier.",
    avatar: avatar3,
  },
];
