import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Website FAQ | Cyberhawk",
  description: "Answers to common questions about Cyberhawk's custom-coded websites, pricing, hosting, SEO, and support.",
}
import { InlineContactForm } from "@/components/inline-contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you really build each site from scratch?",
    answer:
      "Yes. Every website is coded from scratch specifically for your business. We don't use templates or drag-and-drop builders.",
  },
  {
    question: "How many pages will my site include?",
    answer:
      "Your website will typically include a homepage, an About Us page, a Services overview page, individual pages for each service, a Contact page, a Thank You page, and—if you'd like—an FAQ page to address common questions. Altogether, this comes out to 10 or even more professionally designed pages, a scope that many agencies charge exorbitant fees for. With our model, you pay just $99 upon completion, then $20/month for hosting and updates.",
  },
  {
    question: "Is there a setup fee?",
    answer: "You pay $99 when your website is complete and ready to launch.",
  },
  {
    question: "Can I cancel?",
    answer: "Yes, anytime. Your subscription is month-to-month.",
  },
  {
    question: "Do you include hosting?",
    answer: "Yes. Hosting, SSL, and updates are all included.",
  },
  {
    question: "How long does it take?",
    answer: "Most sites are ready within 1-5 business days after we receive your info.",
  },
  {
    question: "Do you handle changes after launch?",
    answer: "Yes. Edits and updates are included in your monthly subscription.",
  },
  {
    question: "When do I own the website?",
    answer: "After 36 months, the site becomes yours.",
  },
  {
    question: "Do I still have to pay?",
    answer: "Yes, you continue paying $20/month to cover hosting, SSL certificates, and ongoing updates.",
  },
  {
    question: "What happens if I cancel?",
    answer: "We will take down the site shortly after.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mt-8">
          Get all of the information you need to know below. Can't find what you're looking for? Feel free to reach out.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="container max-w-7xl mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg text-primary hover:text-primary/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're here to help. Send us a message and we'll get back to you quickly.
          </p>
          <div className="max-w-2xl mx-auto text-left">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Inline Contact Form */}
      <InlineContactForm />
    </div>
  )
}
