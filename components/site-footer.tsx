import Link from "next/link"
import { BRAND } from "@/lib/brand"

const footerLinks = {
  product: [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/40">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tighter leading-none">
                  {BRAND.short}
                  <span className="text-primary">.</span>
                </span>
                <span className="text-xs text-muted-foreground">Web Development</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">{BRAND.tagline}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {BRAND.year} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
