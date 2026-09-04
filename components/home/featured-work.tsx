"use client"

import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "TechSaaS Platform",
    category: "SaaS Website",
    image: "/05_homepage_featuredwork_desktop-mobile-mockup1.png",
  },
  {
    title: "Modern Architecture",
    category: "Portfolio",
    image: "/06_homepage_featuredwork_desktop-mobile-mockup2.png",
  },
  {
    title: "EcoStore E-commerce",
    category: "E-commerce",
    image: "/07_homepage_featuredwork_desktop-mobile-mockup3.png",
  },
]

export function FeaturedWork() {
  return (
    <section className="w-full bg-black py-20 md:py-28 border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Sample Designs</h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Coming Soon: Live Examples of Our Latest Builds
          </p>
        </div>

        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-12 text-center">
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We are currently launching our first wave of Webforge custom sites. As soon as each one goes live, you'll
              find real examples here.
            </p>
            <p className="mt-6 text-base text-gray-500">
              For now, preview the style and polish by exploring our own website — it was built using the same custom
              approach we use for clients.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
