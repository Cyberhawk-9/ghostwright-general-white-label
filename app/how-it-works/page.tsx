import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InlineContactForm } from "@/components/inline-contact-form"
import { Reveal } from "@/components/reveal"
import { BRAND } from "@/lib/brand"
import { OFFER } from "@/lib/offer"

export const metadata: Metadata = {
  title: `How It Works: From Intake to Launch | ${BRAND.short}`,
  description: "Intake, setup invoice, first version in 5–7 business days, two revision rounds, launch, and monthly support.",
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ghostwright Web Development. Websites built under your name." }],
    title: `How It Works: From Intake to Launch | ${BRAND.short}`,
    description: "Intake, setup invoice, first version in 5–7 business days, two revision rounds, launch, and monthly support.",
  },
}

const steps = [
  {
    title: "Your client completes the intake",
    description: "A short form for their trade, branded for you.",
  },
  {
    title: "We invoice the setup fee",
    description: `$${OFFER.setupFee} per site. Work starts once it's paid. That is your greenlight.`,
  },
  {
    title: `First version in ${OFFER.firstVersion}`,
    description: "Counted from your greenlight.",
  },
  {
    title: "Two rounds of revisions",
    description: `Send one consolidated list per round. We deliver each revised version within ${OFFER.revisionTurnaround}. Feedback is due within ${OFFER.feedbackWindow} of each delivery, or that version is treated as approved. Extra rounds are $${OFFER.extraRound} each. With the web-team option, your client can send feedback straight to your team's address.`,
  },
  {
    title: "Approval and launch",
    description: `Your client connects their domain. We give you the exact DNS steps. If launch is delayed more than ${OFFER.launchDelayDays} days after approval for reasons outside our control, the monthly fee starts on day 15.`,
  },
  {
    title: "Monthly service starts",
    description: `$${OFFER.monthlyFee} per active site, starting on the 1st of the month after go-live. The launch month is free.`,
  },
  {
    title: "Ongoing edits",
    description: `Content edits within ${OFFER.editTurnaround}.`,
  },
  {
    title: "Cancel anytime",
    description: "Sites go offline at the end of the month you cancel.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-6 md:px-12">
        <section className="container py-20 md:py-28">
          <Reveal as="div" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              From intake to launch, step by step
            </h1>
          </Reveal>
        </section>

        <section className="container pb-16">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal as="li" key={step.title} index={index} className="relative rounded-2xl border border-border/70 bg-card p-5 list-none">
                <span className="text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <p className="mt-6 text-sm font-semibold leading-6">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Want us to work with your clients directly, as your web team?{" "}
            <Link href="/ways-to-work" className="text-primary hover:underline">
              See the options.
            </Link>
          </p>
        </section>

        <section className="container pb-20">
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal as="div" index={0}>
              <Card className="bg-card/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">What revisions cover</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Text, images, colors, spacing, and layout of pages already delivered.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal as="div" index={1}>
              <Card className="bg-card/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">What is quoted separately</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    New pages, features, integrations, redesigns.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="container pb-20">
          <Reveal as="div" className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to start your first site?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              First version in {OFFER.firstVersion} from your greenlight.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4 text-sm">
              <Link href="/pricing" className="text-primary hover:underline">
                See pricing
              </Link>
              <Link href="/faq" className="text-primary hover:underline">
                See the FAQ
              </Link>
            </div>
          </Reveal>
        </section>

        <InlineContactForm />
      </div>
    </div>
  )
}
