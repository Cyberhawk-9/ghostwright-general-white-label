import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Website Portfolio | Cyberhawk",
  description: "View custom-coded websites designed and built by Cyberhawk for service-based businesses.",
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
