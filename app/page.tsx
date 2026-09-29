import type { Metadata } from "next"
import { PartnerHome } from "@/components/partner-home"
import { BRAND } from "@/lib/brand"

export const metadata: Metadata = {
  title: `White-Label Websites for Contractor-Focused Agencies | ${BRAND.name}`,
  description: `Add premium websites to your contractor offering without hiring developers. ${BRAND.short} builds, hosts, and maintains everything behind the scenes.`,
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: `${BRAND.url}/`,
  description: "White-label website fulfillment for contractor-focused agencies.",
}

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><PartnerHome /></>
}
