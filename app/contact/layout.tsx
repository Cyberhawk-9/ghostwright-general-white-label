import type { Metadata } from "next"
import { BRAND } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Contact ${BRAND.short} | Start Your Website`,
  description: `Contact ${BRAND.short} to start a premium custom-coded website for your service-based business.`,
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
