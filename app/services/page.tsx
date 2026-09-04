import Link from "next/link"
import { Code, Zap, Smartphone, Search, Globe, Headphones } from "lucide-react"
import { InlineContactForm } from "@/components/inline-contact-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Website Design & Development",
    description:
      "Custom-coded websites built from the ground up — modern, animated, and high-polish. No templates, just premium work.",
    icon: Code,
    link: "/services/website-design",
  },
  {
    title: "Service Business Website Packages",
    description: "Purpose-built layouts for consultants, photographers, fitness trainers, cleaning services, medical practices, and more.",
    icon: Globe,
    link: "/services/service-business-websites",
  },
  {
    title: "SEO-Ready Architecture",
    description:
      "Your site structure is built for search visibility with clean code, optimized meta tags, and proper header hierarchy.",
    icon: Search,
    link: "/services/seo-architecture",
  },
  {
    title: "Mobile-First Design",
    description: "Responsive layouts that load fast and look great on every device — phone, tablet, or desktop.",
    icon: Smartphone,
    link: "/services/mobile-first-design",
  },
  {
    title: "Conversion Optimization",
    description: "Strategic layout, service pages, and contact routing designed to turn visitors into leads.",
    icon: Zap,
    link: "/services/conversion-optimization",
  },
  {
    title: "Hosting + Maintenance",
    description: "We handle hosting, updates, SSL, and support so you never worry about your site going down.",
    icon: Headphones,
    link: "/services/hosting-maintenance",
  },
]

export default function ServicesPage() {
  return (
    <div className="w-full max-w-[1400px] mx-auto bg-background px-6 md:px-12">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="container py-20 md:py-28 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Website Services Built for <span className="text-primary">Service-Based Businesses</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed mt-8">
            Cyberhawk builds websites from scratch — custom-coded, fast, modern, and optimized to bring you more leads.
            Whether you're a consultant, photographer, fitness trainer, cleaning service, medical practice, or any service provider, your website will be
            fully tailored to your services and built to convert.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started for $99</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(6,160,199,0.3)]"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20">
          <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a premium, custom-coded website. Pay $99 upon completion, then just $20/month for hosting and updates.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started for $99</Link>
            </Button>
          </div>
        </section>

        {/* Inline Contact Form */}
        <InlineContactForm />
      </div>
    </div>
  )
}
