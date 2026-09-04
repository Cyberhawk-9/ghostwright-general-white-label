import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form" // Import ContactForm

const referrals = [
  {
    category: "Coding Platforms",
    items: [
      {
        name: "Replit",
        description: "Get $10 in bonus credits when you sign up for Replit. Build, test, and deploy your code in the cloud with an intuitive online IDE. Perfect for rapid prototyping and collaborative development. Replit supports dozens of programming languages and makes it easy to share your work with others.",
        discount: "$10 Bonus Credits",
        link: "#",
        logo: "/44_referral_card_coding-platform.png"
      },
      {
        name: "CodeSandbox",
        description: "Claim $20 in free credits for CodeSandbox Pro. An instant IDE and prototyping tool for rapid web development. CodeSandbox makes it easy to create, share, and collaborate on web applications. With support for React, Vue, Angular, and more, it's the perfect tool for frontend developers.",
        discount: "$20 Free Credits",
        link: "#",
        logo: "/placeholder-logo.svg"
      }
    ]
  },
  {
    category: "Google Workspace",
    items: [
      {
        name: "Google Workspace",
        description: "Save 10% on your first year of Google Workspace. Get professional email, cloud storage, video conferencing, and collaboration tools for your business. Google Workspace includes Gmail, Drive, Docs, Sheets, Slides, Meet, and more. Perfect for small businesses and teams looking for reliable, cloud-based productivity tools.",
        discount: "10% Off First Year",
        link: "#",
        logo: "/43_referral_card_google-workspace.png"
      }
    ]
  },
  {
    category: "Hosting Providers",
    items: [
      {
        name: "Vercel",
        description: "Deploy your Next.js, React, and static sites with zero configuration. Vercel offers the fastest way to deploy web applications with automatic HTTPS, global CDN, and instant rollbacks. Perfect for modern web development with built-in CI/CD and preview deployments for every git push.",
        discount: "Free Hobby Plan",
        link: "#",
        logo: "/45_referral_card_hosting-provider.png"
      },
      {
        name: "Netlify",
        description: "Get started with Netlify's generous free tier for hosting static sites and serverless functions. Netlify makes it easy to deploy and manage modern web projects with continuous deployment from Git, instant rollbacks, and split testing. Includes free SSL certificates and custom domains.",
        discount: "Free Starter Plan",
        link: "#",
        logo: "/placeholder-logo.svg"
      },
      {
        name: "DigitalOcean",
        description: "Receive $200 in credits over 60 days when you sign up for DigitalOcean. Simple, scalable cloud computing for developers. DigitalOcean offers virtual machines, managed databases, Kubernetes, and more. Perfect for developers who need reliable infrastructure without the complexity of larger cloud providers.",
        discount: "$200 in Credits",
        link: "#",
        logo: "/placeholder-logo.svg"
      }
    ]
  },
  {
    category: "Design Tools",
    items: [
      {
        name: "Figma",
        description: "Start with Figma's free plan for individuals and small teams. Figma is the leading collaborative design tool for building meaningful products. Design, prototype, and gather feedback all in one place. With real-time collaboration, version history, and powerful plugins, Figma is essential for modern design teams.",
        discount: "Free for Individuals",
        link: "#",
        logo: "/46_referral_card_design-tool.png"
      },
      {
        name: "Canva Pro",
        description: "Try Canva Pro free for 30 days. Create stunning designs with thousands of templates, premium stock photos, and advanced features. Canva Pro is perfect for creating social media graphics, presentations, posters, and more. Includes brand kit, background remover, and team collaboration features.",
        discount: "30-Day Free Trial",
        link: "#",
        logo: "/placeholder-logo.svg"
      }
    ]
  }
]

export default function ReferralsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="container py-20 text-center relative">
        <div className="absolute inset-0 z-0 opacity-5">
           <Image src="/42_referral_hero_collage-platform-logos.png" alt="Logos" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 heading-bordered bg-background/80 backdrop-blur-sm">
            Exclusive <span className="text-primary">Discounts & Credits</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground bg-background/60 backdrop-blur-sm p-4 rounded-xl">
            Tools and services I use and recommend. Get special discounts and bonus credits when you sign up through these links.
          </p>
        </div>
      </section>

      {/* Referral Categories */}
      <section className="container pb-20">
        <div className="space-y-16">
          {referrals.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">{category.category}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-border/50 bg-card/50 hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden relative">
                            <Image src={item.logo || "/placeholder.svg"} alt={item.name} fill className="object-contain p-2" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{item.name}</CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {item.discount}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          Claim Discount <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclosure:</strong> Some of the links on this page are referral links. This means I may earn a commission if you sign up through my link, at no extra cost to you. I only recommend tools and services I personally use and trust. Your support helps me continue creating valuable content and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground">
            Need help choosing the right tools? Send me a message.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
