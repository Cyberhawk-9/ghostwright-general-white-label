"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const lastClosedRef = useRef<number>(Date.now())

  useEffect(() => {
    const scheduleNextPopup = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(
        () => {
          setIsOpen(true)
          lastClosedRef.current = Date.now()
        },
        5 * 60 * 1000,
      ) // 5 minutes
    }

    scheduleNextPopup()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    lastClosedRef.current = Date.now()
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(
      () => {
        setIsOpen(true)
        lastClosedRef.current = Date.now()
      },
      5 * 60 * 1000,
    ) // 5 minutes
  }

  const handleSuccess = () => {
    setIsOpen(false)
    lastClosedRef.current = Date.now()
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(
      () => {
        setIsOpen(true)
        lastClosedRef.current = Date.now()
      },
      5 * 60 * 1000,
    ) // 5 minutes
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl rounded-xl bg-card p-8 border border-primary/20 shadow-2xl max-h-[90vh] overflow-y-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 hover:bg-destructive/20"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Become a Partner</h3>
            <p className="text-muted-foreground mt-2">Tell us about your agency and the businesses you serve.</p>
          </div>

          <ContactForm compact onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  )
}
