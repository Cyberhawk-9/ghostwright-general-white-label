import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Cyberhawk | Custom-Coded Websites",
  description: "Learn how Cyberhawk builds high-quality custom-coded websites for service-based businesses.",
}
import { Target, DollarSign, Zap, Award } from "lucide-react"
import { InlineContactForm } from "@/components/inline-contact-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    title: "Quality First",
    description: "Every website is custom-coded from the ground up — never templated. Premium design for every client.",
    icon: Award,
  },
  {
    title: "Fair Wholesale Pricing",
    description:
      "No $3,000–$15,000 build fees to pass on. Partner websites are $149 per launch, then $25/month for hosting and updates.",
    icon: DollarSign,
  },
  {
    title: "Speed & Simplicity",
    description: "We handle everything so you can focus on your work. Fast turnaround, zero hassle.",
    icon: Zap,
  },
  {
    title: "Long-Term Support",
    description: "We keep your website updated, secure, and looking great for as long as you need us.",
    icon: Target,
  },
]

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col min-h-screen">
        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              A Better Way for Agencies to Deliver <span className="text-primary">Premium Websites</span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mt-8">
              <p>
                Cyberhawk was created for one purpose: to let agencies and consultants add premium, custom-coded
                websites to their offer without hiring developers or building an internal web department.
              </p>
              <p>
                We handle the design, build, launch, hosting, and ongoing updates behind the scenes — under your
                brand — so your customers get the same level of design and technology as the big agencies charge
                thousands for.
              </p>
            </div>
            <Button size="lg" className="mt-10" asChild>
              <Link href="/contact">Become a partner</Link>
            </Button>
            <Button size="lg" variant="outline" className="mt-10 ml-4 bg-transparent" asChild>
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-primary">Our Philosophy</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50 bg-card/50">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 text-primary">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To help agencies and consultants deliver professional, custom-built websites to every service-based
              business they serve — without adding fulfillment overhead to their own team.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-20">
          <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to expand what you offer?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Add premium, custom-coded websites to your services. Partner pricing is $149 per launch, then
              $25/month for hosting and updates.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Become a partner</Link>
            </Button>
          </div>
        </section>

        {/* Contact Form */}
        <InlineContactForm />
      </div>
    </div>
  )
}
