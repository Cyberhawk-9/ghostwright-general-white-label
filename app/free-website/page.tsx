"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import emailjs from "@emailjs/browser"
import {
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  HeadphonesIcon,
  RefreshCw,
  Lock,
  Star,
  ArrowRight,
  Loader2,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const EMAILJS_SERVICE_ID = "service_bt3oowm"
const EMAILJS_TEMPLATE_ID = "template_lmydat2"
const EMAILJS_PUBLIC_KEY = "wyusSO1_kD6AYC62D"

const included = [
  { icon: Globe, label: "Custom-Coded Website", desc: "Built from scratch — no templates, no page builders." },
  { icon: Zap, label: "Fast & Mobile-First", desc: "Optimized for speed and perfect on every screen size." },
  { icon: CheckCircle2, label: "SEO Ready", desc: "Built with proper structure so Google can find you." },
  { icon: RefreshCw, label: "Ongoing Updates", desc: "Need a change? Just ask. We handle it for you." },
  { icon: Shield, label: "SSL Certificate", desc: "Your site is secure and trusted by browsers." },
  { icon: HeadphonesIcon, label: "Real Support", desc: "A real person you can reach when you need help." },
  { icon: Lock, label: "Hosting Included", desc: "Your site stays live, fast, and maintained every month." },
  { icon: Star, label: "Premium Design", desc: "Looks like you paid thousands. Because it should." },
]

const faqs = [
  {
    q: "Is the website really free?",
    a: "Yes. You pay $0 for the design and build of your website. The only cost is $25/month which covers hosting, SSL, maintenance, updates, and support — everything it takes to keep your site live and running.",
  },
  {
    q: "Why is the website free?",
    a: "We believe every small business deserves a professional online presence. Instead of a large upfront fee that most businesses can't afford, we keep things simple with a low monthly cost that pays for itself.",
  },
  {
    q: "What does the $25/month cover?",
    a: "Hosting, SSL certificate, ongoing updates, content changes, technical maintenance, and real human support. No hidden fees, ever.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. There are no long-term contracts. If you ever want to cancel, you can. We keep you because you love the service, not because of fine print.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Any service-based business — consultants, cleaners, photographers, trainers, roofers, landscapers, medical practices, and more. If you sell a service, we can build your site.",
  },
  {
    q: "How long does it take?",
    a: "Most websites are designed, built, and live within a few days of our initial call. We move fast.",
  },
]

export default function FreeWebsitePage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const businessDescription = formData.get("businessDescription") as string
    const hp = formData.get("website_url_do_not_fill") as string

    if (hp) return

    if (!name || name.length < 2) {
      toast({ title: "Error", description: "Please enter your name.", variant: "destructive" })
      return
    }
    if (!email || !email.includes("@")) {
      toast({ title: "Error", description: "Please enter a valid email.", variant: "destructive" })
      return
    }
    if (!businessDescription || businessDescription.length < 10) {
      toast({ title: "Error", description: "Please describe your business in more detail.", variant: "destructive" })
      return
    }

    setIsSubmitting(true)

    const messageBody = `Reason: Free Website Landing Page Lead\nBusiness Description: ${businessDescription}`
    const signature = `Name: ${name}\nPhone: ${phone || "Not provided"}\nEmail: ${email}`

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        reply_to: email,
        message_body: messageBody,
        signature: signature,
      })

      toast({
        title: "You're in!",
        description: "We'll reach out within 24 hours to get your free site started.",
      })
      if (formRef.current) formRef.current.reset()
      router.push("/thank-you")
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* SEO metadata injected via head export below */}
      <div className="min-h-screen bg-background text-foreground font-sans">

        {/* ── HERO ── */}
        <section className="relative flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
          {/* subtle glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
              Limited Availability — Small Business Offer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Get a{" "}
              <span className="text-primary">Premium Custom Website</span>{" "}
              for Your Business —{" "}
              <span className="text-secondary">Completely Free</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed mb-8 max-w-2xl mx-auto">
              No setup fees. No upfront costs. Just a professional, fast, mobile-friendly website built specifically for your business — then only{" "}
              <strong className="text-foreground">$25/month</strong> to keep it live, updated, and supported.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a href="#claim">
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Claim Your Free Website <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                  Talk to Us First
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required. No commitment. Just a great website.
            </p>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="border-y border-border/50 bg-card py-6 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
            {[
              "100% Free to Build",
              "No Hidden Fees",
              "Cancel Anytime",
              "Real Human Support",
              "Live in Weeks, Not Months",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything You Need.{" "}
                <span className="text-primary">Nothing You Don't.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your $25/month covers a full-stack professional web presence. Here's exactly what's included:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {included.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-card border border-border/50 rounded-xl p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 px-4 bg-card border-y border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg">Simple, fast, and painless.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Fill Out the Form",
                  desc: "Tell us about your business and what you need. Takes less than 2 minutes.",
                },
                {
                  step: "02",
                  title: "We Build Your Site",
                  desc: "Our team designs and builds a fully custom website tailored to your business — fast.",
                },
                {
                  step: "03",
                  title: "Go Live for $25/mo",
                  desc: "Your site launches and stays live, updated, and supported for just $25/month.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step}</span>
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING CLARITY ── */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transparent Pricing.{" "}
              <span className="text-primary">Zero Surprises.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Most web agencies charge $2,000–$10,000 upfront just to build a site. We charge nothing. Here's the full breakdown:
            </p>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-primary/10 border-b border-border px-6 py-5">
                <p className="text-sm text-primary font-semibold uppercase tracking-widest mb-1">Your Website Build</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-xl text-muted-foreground">upfront</span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">Design, development, and launch. Completely free.</p>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-1">Monthly Plan</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">$25</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">Hosting, SSL, updates, maintenance, and support.</p>
              </div>
              <div className="px-6 pb-6">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {[
                    "No setup fee",
                    "No long-term contracts",
                    "Cancel anytime",
                    "No surprise invoices",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#claim">
                  <Button size="lg" className="w-full">
                    Get My Free Website <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CYBERHAWK ── */}
        <section className="py-20 px-4 bg-card border-y border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-primary">Cyberhawk?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Custom Code, Not Templates",
                  desc: "Every site is hand-built from scratch. No WordPress, no Squarespace, no drag-and-drop. Your site is unique, fast, and yours.",
                },
                {
                  title: "Built for Service Businesses",
                  desc: "We specialize in service-based businesses — not e-commerce, not SaaS. We know what converts for your type of business.",
                },
                {
                  title: "A Real Person, Not a Ticket System",
                  desc: "When you reach out, you talk to a real person who knows your site and your business. Always.",
                },
                {
                  title: "Affordable Without Being Cheap",
                  desc: "$25/month is less than most people spend on coffee. Yet your website will look like you spent thousands.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-background border border-border/50 rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know before saying yes to a free website.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <span>{q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEAD CAPTURE FORM ── */}
        <section id="claim" className="py-20 px-4 bg-card border-t border-border/50">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
                Start Now — It&apos;s Free
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Claim Your Free Website
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and we&apos;ll get back to you within 24 hours to get started.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Prefer to talk first?{" "}
                <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Visit our full contact page
                </Link>
              </p>
            </div>

            <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_url_do_not_fill"
                    tabIndex={-1}
                    autoComplete="nope"
                    defaultValue=""
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessDescription" className="text-sm font-medium">Tell us about your business *</label>
                  <Textarea
                    id="businessDescription"
                    name="businessDescription"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free Website <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your info is never sold or shared.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 px-4 text-center border-t border-border/50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Business Deserves a{" "}
              <span className="text-primary">Better Website.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Professional. Fast. Free to build. Only $25/month to keep it running. What are you waiting for?
            </p>
            <a href="#claim">
              <Button size="lg" className="text-base px-10">
                Claim Your Free Website <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
