"use client"
import { Mail, MessageSquare, Clock } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { IdleReassurancePopup } from "@/components/idle-reassurance-popup"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Response within 24 hours",
    detail: "We respond to all inquiries quickly",
    email: "info@cyberhawk.dev",
  },
  {
    icon: MessageSquare,
    title: "Direct Contact",
    description: "Fill out the form below",
    detail: "Fastest way to get started",
  },
  {
    icon: Clock,
    title: "Availability",
    description: "Mon-Fri, 9AM-6PM PST",
    detail: "Weekend inquiries welcome",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4">
      <IdleReassurancePopup idleTimeMs={30000} />
      {/* Hero */}
      <section className="container py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Let's Build Your <span className="text-primary">New Website</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
          Get a fully custom, modern website. Pay $99 when it launches, then $20/month for hosting and updates.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="container pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-border/50 bg-card/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-1">{info.title}</h3>
                <p className="text-muted-foreground mb-1">{info.description}</p>
                <p className="text-sm text-muted-foreground">{info.detail}</p>
                {info.email && (
                  <a
                    href={`mailto:${info.email}`}
                    className="inline-block mt-3 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {info.email}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Have questions? Want to talk through your project? We're here to help. Fill out the form and we'll get
              back to you quickly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
