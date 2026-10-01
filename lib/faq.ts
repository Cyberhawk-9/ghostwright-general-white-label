export interface FaqItem {
  question: string
  answer: string
  link?: { label: string; href: string }
}

export const FAQ: FaqItem[] = [
  {
    question: "Will my client know Ghostwright is involved?",
    answer:
      "No. In every option, your clients only ever see your name. By default we never contact them, and we never solicit or upsell them.",
  },
  {
    question: "Do I have to be the go-between with my clients?",
    answer:
      "By default, yes: you are our only contact. If you'd rather not be, we can work directly with your client as your web team, from an email address on your domain. They only ever see your name. See Ways to Work.",
    link: { label: "Ways to Work", href: "/ways-to-work" },
  },
  {
    question: "Does working with my clients directly cost extra?",
    answer: "No. Pricing is the same either way.",
  },
  {
    question: "Who owns the domain?",
    answer:
      "The client owns it and registers it in their own account. We give you the exact DNS records and steps for your team to walk them through.",
  },
  {
    question: "Is there a minimum volume requirement?",
    answer:
      "No minimum. The program fits best for agencies onboarding new contractors every month.",
  },
  {
    question: "What does the monthly fee include?",
    answer:
      "Hosting, SSL, infrastructure, technical support, and content edits completed within 2 business days, for each active site.",
  },
  {
    question: "Who is the partnership for?",
    answer:
      "Agencies that onboard new contractors, such as insurance, business-setup, lead-generation, and marketing agencies, and want to add websites without a web team.",
  },
  {
    question: "Can the websites be presented under our brand?",
    answer:
      "Yes. You set the retail price, bill your client, and own the relationship. Your client completes an intake form for their trade, branded for you.",
  },
  {
    question: "What do you handle?",
    answer:
      "Custom design and build from scratch, hosting, SSL, deployment, mobile-responsive layouts, contact forms, SEO-ready structure, and content edits after launch.",
  },
  {
    question: "What does partner pricing look like?",
    answer:
      "$149 setup per site, invoiced when the intake arrives; work starts once it's paid. Then $25 per active site per month, starting on the 1st of the month after the site goes live. The launch month is free. You get one bundled invoice on the 1st of each month, due by the 8th. Suggested retail is $199–$299 setup and $49–$79/month.",
  },
  {
    question: "How quickly can a website be delivered?",
    answer:
      "The first version arrives within 5–7 business days of your greenlight, which is a completed intake plus a paid setup invoice.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Each site includes two rounds. You send one consolidated list per round, and we deliver each revised version within 3 business days. Feedback is due within 5 business days of each delivery, or that version is treated as approved. Additional rounds are $75 each. New pages, features, and redesigns are quoted separately. If you choose the web-team option, your client can send the list to your team's address and we work from it.",
  },
  {
    question: "Can we request edits after launch?",
    answer:
      "Yes. Content edits (text, images, hours, service areas, contact info) are completed within 2 business days of your request. Requests come from you, or from your client if you chose the web-team option. New major service pages, features, integrations, and redesigns are quoted separately.",
  },
  {
    question: "What if my client doesn't pay me?",
    answer:
      "Tell us before the invoice due date which site is unpaid. We remove that site's monthly fee from the invoice, and the site follows a 30-day and 60-day warning schedule. You still pay the rest of the invoice by the due date.",
  },
  {
    question: "What happens if we cancel a site?",
    answer:
      "Cancel any site anytime with written notice. It goes offline at the end of that calendar month and isn't invoiced for later months. The client keeps their domain and their own content. Ghostwright keeps the source code.",
  },
  {
    question: "Can we buy the source code?",
    answer: "Yes, at any time. Pricing is set out in the Partner Agreement.",
  },
  {
    question: "Is the setup fee refundable?",
    answer: "The setup fee covers the custom build and is non-refundable once work begins.",
  },
]
