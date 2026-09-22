import type { Metadata } from "next"
import { PartnerHome } from "@/components/partner-home"

export const metadata: Metadata = {
  title: "White-Label Websites for Contractor-Focused Agencies | Cyberhawk",
  description: "Add premium websites to your contractor offering without hiring developers. Cyberhawk builds, hosts, and maintains everything behind the scenes.",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cyberhawk",
  url: "https://cyberhawk.dev/",
  description: "White-label website fulfillment for contractor-focused agencies.",
}

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><PartnerHome /></>
}
