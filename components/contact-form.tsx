"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const EMAILJS_SERVICE_ID = "service_bt3oowm"
const EMAILJS_TEMPLATE_ID = "template_lmydat2"
const EMAILJS_PUBLIC_KEY = "wyusSO1_kD6AYC62D"

interface ContactFormProps {
  compact?: boolean
  onSuccess?: () => void
}

export function ContactForm({ compact = false, onSuccess }: ContactFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const siteReason = formData.get("siteReason") as string
    const businessDescription = formData.get("businessDescription") as string
    const hp = formData.get("website_url_do_not_fill") as string

    if (hp) return

    if (!name || name.length < 2) {
      toast({ title: "Error", description: "Please enter your name.", variant: "destructive" })
      return
    }
    if (!email || !email.includes("@")) {
      toast({ title: "Error", description: "Please enter a valid email.", variant: "destructive" })
      return
    }
    if (!siteReason || siteReason.length < 5) {
      toast({ title: "Error", description: "Please describe why you need a site.", variant: "destructive" })
      return
    }
    if (!businessDescription || businessDescription.length < 10) {
      toast({ title: "Error", description: "Please describe your business in more detail.", variant: "destructive" })
      return
    }

    setIsSubmitting(true)

    const messageBody = `Reason: ${siteReason}\nBusiness Description: ${businessDescription}`
    const signature = `Name: ${name}\nPhone: ${phone || "Not provided"}\nEmail: ${email}`

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        reply_to: email,
        message_body: messageBody,
        signature: signature,
      })

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      })
      if (formRef.current) formRef.current.reset()
      if (onSuccess) onSuccess()
      router.push("/thank-you")
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-border/50">
      <CardContent className={compact ? "p-6" : "p-6 md:p-8"}>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url_do_not_fill"
              tabIndex={-1}
              autoComplete="nope"
              defaultValue=""
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none">Name *</label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium leading-none">Phone Number (optional)</label>
              <Input id="phone" name="phone" type="tel" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">Email *</label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="siteReason" className="text-sm font-medium leading-none">Why do you need a new site? *</label>
            <Input id="siteReason" name="siteReason" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="businessDescription" className="text-sm font-medium leading-none">Describe your business *</label>
            <Textarea id="businessDescription" name="businessDescription" className="min-h-[100px]" required />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
