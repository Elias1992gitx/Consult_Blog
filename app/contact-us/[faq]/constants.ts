'use client'


type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Common questions about, studying abroad"];
export const mobileHeaderPhrase = ["Common', 'questions about', 'studying abroad"];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "How do I start my study abroad journey?",
    answer: "Simply [contact us] through our website or give us a call. We'll discuss your academic goals and create a personalized study abroad plan for you.",
  },
  {
    question: "Do you assist students from all academic backgrounds?",
    answer: "Yes, we work with students from various academic levels and backgrounds, helping them find the perfect study abroad program that matches their goals.",
  },
  {
    question: "How long does the application process typically take?",
    answer: "The timeline varies depending on the destination country and program, but we generally recommend starting 6-12 months before your intended departure date.",
  },
  {
    question: "Which countries do you offer programs in?",
    answer: "We facilitate study abroad programs in multiple countries including the USA, UK, Canada, Australia, and various European destinations.",
  },
  {
    question: "Do you provide support during my study abroad period?",
    answer: "Yes, we offer continuous support throughout your entire study abroad journey, from application to arrival and during your stay abroad.",
  },
];