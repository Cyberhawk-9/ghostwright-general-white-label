"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

import { PartnerForm } from "@/components/partner-form"

const POPUP_DELAY_MS = 90000
const SESSION_KEY = "gw_popup_seen"

/**
 * Site-wide partner-form modal shown once per session, 90 seconds after arrival.
 * Never shown on /contact, which already has its own dedicated form and idle popup.
 */
export function PartnerFormPopup() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const excluded = pathname === "/contact"

  React.useEffect(() => {
    if (excluded) return
    if (typeof window === "undefined") return
    if (window.sessionStorage.getItem(SESSION_KEY)) return

    const timer = window.setTimeout(() => {
      setOpen(true)
      window.sessionStorage.setItem(SESSION_KEY, "true")
    }, POPUP_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [excluded])

  React.useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open])

  if (excluded || !open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Become a partner"
      className="popup-overlay fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="popup-panel relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-black/70 text-foreground transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
        >
          <X className="h-4 w-4" />
        </button>
        <PartnerForm compact onSuccess={() => setOpen(false)} />
      </div>
    </div>
  )
}
