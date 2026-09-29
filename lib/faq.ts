import { OFFER } from "@/lib/offer"

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ: FaqItem[] = [
  {
    question: "Who is the partnership for?",
    answer:
      "We work with agencies, marketers, consultants, and other client-service businesses that want to offer premium websites without building an internal web department.",
  },
  {
    question: "Can the websites be presented under our brand?",
    answer: `Yes. We work behind the scenes so you can own the client relationship and present the finished website as part of your offer.`,
  },
  {
    question: "What do you handle?",
    answer:
      "We handle the design and development, responsive implementation, launch, hosting, SSL, and ongoing site updates included in the monthly plan.",
  },
  {
    question: "What does partner pricing look like?",
    answer: `Partner websites are $${OFFER.setupFee} per launch, followed by $${OFFER.monthlyFee} per month for hosting, SSL, and ongoing updates.`,
  },
  {
    question: "How quickly can a website be delivered?",
    answer: `Most sites are ready within ${OFFER.firstVersion} once we have the business details, content, and direction from your team.`,
  },
  {
    question: "Do I need technical expertise?",
    answer:
      "No. You bring the client relationship and business context. We take care of the technical work and keep you updated throughout the process.",
  },
  {
    question: "Can we request edits after launch?",
    answer:
      "Yes. Ongoing edits and updates are included in the monthly website plan, so you can keep client sites current without an extra fulfillment workflow.",
  },
]
