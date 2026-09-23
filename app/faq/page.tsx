import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { InlineContactForm } from "@/components/inline-contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Partner FAQ | Cyberhawk",
  description: "Answers for agencies exploring Cyberhawk's white-label website fulfillment partnership.",
}

const faqs = [
  { question: "Who is the partnership for?", answer: "We work with agencies, marketers, consultants, and other client-service businesses that want to offer premium websites without building an internal web department." },
  { question: "Can the websites be presented under our brand?", answer: "Yes. We work behind the scenes so you can own the client relationship and present the finished website as part of your offer." },
  { question: "What do you handle?", answer: "We handle the design and development, responsive implementation, launch, hosting, SSL, and ongoing site updates included in the monthly plan." },
  { question: "What does partner pricing look like?", answer: "Partner websites are $149 per launch, followed by $25 per month for hosting, SSL, and ongoing updates." },
  { question: "How quickly can a website be delivered?", answer: "Most sites are ready within 1–5 business days once we have the business details, content, and direction from your team." },
  { question: "Do I need technical expertise?", answer: "No. You bring the client relationship and business context. We take care of the technical work and keep you updated throughout the process." },
  { question: "Can we request edits after launch?", answer: "Yes. Ongoing edits and updates are included in the monthly website plan, so you can keep client sites current without an extra fulfillment workflow." },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Partner FAQ</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Questions about the <span className="text-primary">partnership?</span></h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mt-8">Here&apos;s how Cyberhawk helps agencies deliver a better web presence to their customers.</p>
      </section>

      <section className="container max-w-7xl mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg text-primary hover:text-primary/80">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to talk through your agency?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Tell us what you offer and who you serve. We&apos;ll explain how Cyberhawk can fit behind your brand.</p>
          <div className="max-w-2xl mx-auto text-left"><ContactForm partner /></div>
        </div>
      </section>

      <InlineContactForm />
    </div>
  )
}
