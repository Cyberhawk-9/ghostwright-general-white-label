"use client"
import { ContactForm } from "@/components/contact-form"

export function InlineContactForm() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground">Fill out the form below and we'll reach out to discuss your project.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
