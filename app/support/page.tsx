import type { Metadata } from "next"
import Link from "next/link"

import { InlineContactForm } from "@/components/inline-contact-form"
import { BRAND } from "@/lib/brand"
import { OFFER } from "@/lib/offer"

export const metadata: Metadata = {
  title: `Support & Edits | ${BRAND.short}`,
  description: `What's included with every active site, how content edits work, and what's quoted separately.`,
}

export default function SupportPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-6 md:px-12">
        <section className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Support and content edits
            </h1>
          </div>
        </section>

        <section className="container pb-16">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Included with every active site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hosting, SSL, infrastructure, technical support, and content edits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Content edits</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Content edits are changes to text, images, hours, service areas, and contact information.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We complete them within {OFFER.editTurnaround} after receiving your request.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Requests come from your authorized contacts, not your clients.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Quoted separately</h2>
              <p className="text-muted-foreground leading-relaxed">
                New major service pages, new features and integrations, redesigns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Uptime</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use commercially reasonable efforts to keep every site online. We don&apos;t guarantee uptime.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Looking for revisions during the build? See{" "}
              <Link href="/how-it-works" className="text-primary hover:underline">
                How It Works
              </Link>
              .
            </p>
          </div>
        </section>

        <InlineContactForm />
      </div>
    </div>
  )
}
