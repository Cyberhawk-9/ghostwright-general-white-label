import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Become a Cyberhawk Partner",
  description: "Add professionally built websites to your contractor offering with Cyberhawk's white-label fulfillment service.",
}

export default function PartnerPage() {
  return <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Become a partner</p><h1 className="mt-4 text-5xl sm:text-6xl">Add websites without adding a web department.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">Tell us about your agency and the contractor businesses you serve. We will follow up with the details of the white-label fulfillment model.</p><div className="mt-10 space-y-4 text-sm text-muted-foreground"><p>Best suited for agencies onboarding multiple new businesses each month.</p><p>Cyberhawk remains behind the scenes. Your agency owns the customer relationship and retail pricing.</p></div></div><ContactForm partner /></div>
}
