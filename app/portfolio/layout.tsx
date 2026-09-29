import type { Metadata } from "next"
import { BRAND } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Contractor Website Portfolio | ${BRAND.short}`,
  description: "Sites built for roofing, remodeling, and septic contractors, delivered under partner brands.",
  openGraph: {
    title: `Contractor Website Portfolio | ${BRAND.short}`,
    description: "Sites built for roofing, remodeling, and septic contractors, delivered under partner brands.",
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
