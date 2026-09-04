"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? "h-14" : "h-16"
      }`}
    >
      <div
        className={`container max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
          isScrolled ? "h-14" : "h-16"
        }`}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Cyberhawk-Logo.png"
              alt="Cyberhawk Logo"
              width={isScrolled ? 24 : 32}
              height={isScrolled ? 24 : 32}
              className={`object-contain transition-all duration-300 ${isScrolled ? "h-6 w-6" : "h-8 w-8"}`}
            />
            <div className="flex flex-col">
              <span
                className={`font-display font-bold tracking-tighter transition-all duration-300 leading-none ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
              >
                Cyberhawk<span className="text-primary">.</span>
              </span>
              <span
                className={`text-xs text-muted-foreground transition-all duration-300 ${
                  isScrolled ? "text-[10px]" : "text-xs"
                }`}
              >
                Web Design
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-300 transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          <Button
            size="sm"
            variant="outline"
            className="ml-4 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 bg-transparent"
            asChild
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="mt-4 w-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 bg-transparent"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
