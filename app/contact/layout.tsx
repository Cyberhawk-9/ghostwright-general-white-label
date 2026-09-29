import type { Metadata } from "next"
import { BRAND } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Become a Partner | ${BRAND.short}`,
  description: "Tell us about your agency and how many contractors you onboard.",
  openGraph: {
    title: `Become a Partner | ${BRAND.short}`,
    description: "Tell us about your agency and how many contractors you onboard.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
