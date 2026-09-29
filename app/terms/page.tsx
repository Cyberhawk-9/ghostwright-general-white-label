import type { Metadata } from "next"
import { BRAND } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Terms of Use | ${BRAND.short}`,
  description: "Terms for using the Ghostwright website.",
  openGraph: {
    title: `Terms of Use | ${BRAND.short}`,
    description: "Terms for using the Ghostwright website.",
  },
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container max-w-7xl mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: September 29, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">About these terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms cover your use of {BRAND.domain}. Website services for partners are governed by a separate
              signed Partner Agreement. If the two conflict, the Partner Agreement controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Who we are</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is operated by {BRAND.legalName}, {BRAND.legalDescriptor}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Using this site</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may use this site for lawful business purposes. Do not misuse it, probe or attack it, or copy its
              content or design.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information on this site</h2>
            <p className="text-muted-foreground leading-relaxed">
              We describe our services and pricing in good faith. Pricing and terms for any site are those in your
              signed Partner Agreement. We may update this site at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No professional advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing on this site is legal, tax, or insurance advice. Partners are responsible for complying with the
              laws and regulations that apply to them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content and design of this site belong to us. Sites we build for partners are governed by the
              Partner Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimers and limits</h2>
            <p className="text-muted-foreground leading-relaxed">
              This site is provided as is. To the extent the law allows, we are not liable for indirect or
              consequential damages arising from use of this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing law</h2>
            <p className="text-muted-foreground leading-relaxed">
              Arizona law governs these terms. Disputes go to the courts of {BRAND.venue}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may change these terms by posting an update here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">Use the contact page.</p>
          </section>
        </div>
      </section>
    </div>
  )
}
