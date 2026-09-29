import type { Metadata } from "next"
import { BRAND } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Custom Website Portfolio | ${BRAND.name}`,
  description: `View custom-coded websites designed and built by ${BRAND.short} for service-based businesses.`,
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
