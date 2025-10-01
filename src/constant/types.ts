import type { Component } from "vue";

export interface WhyChooseCard {
  icon: Component;
  title: string;
  description: string;
  bgColor: string;
}

export interface SocialMedia {
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
export interface Course {
  image: string;
  name: string;
  rate: number;
}
export interface FAQ {
  question: string;
  answer: string;
}
export interface Plan {
  icon: Component;
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  classes: {
    border: string;
    popularBorder: string;
    text: string;
    button: string;
    icon: string;
    badge: string;
    bg: string;
  };
  benefits: string[];
}
export interface Testimonial {
  name: string;
  position: string;
  feedback: string;
  avatar: string;
}