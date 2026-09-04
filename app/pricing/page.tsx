import Link from "next/link"
import { Check } from "lucide-react"
import { InlineContactForm } from "@/components/inline-contact-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  "$99 one-time upon completion",
  "$20/month for hosting & updates",
  "No contracts",
  "Cancel anytime",
  "Unlimited service pages",
  "Hosting + SSL included",
  "Edits and updates included",
  "100% custom coded",
  "Modern design + animations",
  "SEO-ready site structure",
  "Fast turnaround time",
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4">
      {/* Hero */}
      <section className="container py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
          <span className="text-primary">Simple, Affordable Pricing</span>
        </h1>
        <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">
          No contracts. No hidden charges. Pay $99 upon completion, then just $20/month for hosting, SSL, and updates.
        </p>
      </section>

      {/* Pricing Card */}
      <section className="container pb-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/50 bg-white/5 shadow-[0_0_50px_-10px_rgba(6,160,199,0.3)]">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-primary mb-4">Custom Website</CardTitle>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-foreground">$99</span>
                  <span className="text-2xl text-gray-400">upfront</span>
                </div>
                <div className="text-lg text-muted-foreground font-medium">then</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">$20</span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">Everything Included</p>
            </CardHeader>
            <CardContent className="space-y-4 px-8 pb-8">
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full h-14 mt-8 text-lg" asChild>
                <Link href="/contact">Get Started for $99</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { title: "$99 Upfront", desc: "Pay when your site launches" },
              { title: "$20/Month After", desc: "For hosting, SSL & updates" },
              { title: "Cancel Anytime", desc: "Month-to-month, no contracts" },
              { title: "Fast Delivery", desc: "Most sites ready in 1-5 days" },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to launch your site?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get a fully custom, modern website. Pay $99 when it launches, then $20/month for hosting and updates.
        </p>
        <Button size="lg" className="h-14 px-10 text-lg" asChild>
          <Link href="/contact">Get Started Today</Link>
        </Button>
      </section>

      <InlineContactForm />
    </div>
  )
}
