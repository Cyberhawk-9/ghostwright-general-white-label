"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const EMAILJS_SERVICE_ID = "service_bt3oowm"
const EMAILJS_TEMPLATE_ID = "template_lmydat2"
const EMAILJS_PUBLIC_KEY = "wyusSO1_kD6AYC62D"

const AGENCY_TYPES = [
  "Insurance agency",
  "Business setup or formation",
  "Lead generation",
  "Marketing agency",
  "Other",
]

const MONTHLY_VOLUMES = ["1–5", "6–20", "21–50", "50+"]

interface PartnerFormProps {
  compact?: boolean
  onSuccess?: () => void
}

export function PartnerForm({ compact = false, onSuccess }: PartnerFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [agencyType, setAgencyType] = React.useState("")
  const [monthlyVolume, setMonthlyVolume] = React.useState("")
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const agencyName = formData.get("agencyName") as string
    const agencyUrl = formData.get("agencyUrl") as string
    const businessDescription = formData.get("businessDescription") as string
    const agencyDescription = formData.get("agencyDescription") as string
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
    if (!agencyName || agencyName.length < 2) {
      toast({ title: "Error", description: "Please enter your agency name.", variant: "destructive" })
      return
    }
    if (!agencyUrl) {
      toast({ title: "Error", description: "Please enter your agency website URL.", variant: "destructive" })
      return
    }
    if (!agencyType) {
      toast({ title: "Error", description: "Please select your agency type.", variant: "destructive" })
      return
    }
    if (!businessDescription || businessDescription.length < 5) {
      toast({ title: "Error", description: "Please tell us what businesses you serve.", variant: "destructive" })
      return
    }
    if (!monthlyVolume) {
      toast({ title: "Error", description: "Please select how many new businesses you onboard per month.", variant: "destructive" })
      return
    }

    setIsSubmitting(true)

    const messageBody = `Businesses served: ${businessDescription}\nAgency notes: ${agencyDescription || "Not provided"}`
    const signature = `Name: ${name}\nPhone: ${phone || "Not provided"}\nEmail: ${email}\nAgency: ${agencyName}\nAgency URL: ${agencyUrl}\nAgency type: ${agencyType}\nMonthly volume: ${monthlyVolume}`

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        reply_to: email,
        message_body: messageBody,
        signature: signature,
        agency_name: agencyName,
        agency_url: agencyUrl,
        agency_type: agencyType,
        monthly_volume: monthlyVolume,
      })

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      })
      if (formRef.current) formRef.current.reset()
      setAgencyType("")
      setMonthlyVolume("")
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
              <label htmlFor="email" className="text-sm font-medium leading-none">Email *</label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">Phone (optional)</label>
            <Input id="phone" name="phone" type="tel" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="agencyName" className="text-sm font-medium leading-none">Agency name *</label>
              <Input id="agencyName" name="agencyName" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="agencyUrl" className="text-sm font-medium leading-none">Agency website URL *</label>
              <Input id="agencyUrl" name="agencyUrl" type="url" required placeholder="https://" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="agencyType" className="text-sm font-medium leading-none">Agency type *</label>
            <input type="hidden" name="agencyType" value={agencyType} />
            <Select value={agencyType} onValueChange={setAgencyType} required>
              <SelectTrigger id="agencyType" className="w-full">
                <SelectValue placeholder="Select agency type" />
              </SelectTrigger>
              <SelectContent>
                {AGENCY_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="businessDescription" className="text-sm font-medium leading-none">What businesses do you serve? *</label>
            <Textarea id="businessDescription" name="businessDescription" className="min-h-[100px]" required placeholder="Tell us about your contractor clients" />
          </div>

          <div className="space-y-2">
            <label htmlFor="monthlyVolume" className="text-sm font-medium leading-none">How many new businesses do you onboard per month? *</label>
            <input type="hidden" name="monthlyVolume" value={monthlyVolume} />
            <Select value={monthlyVolume} onValueChange={setMonthlyVolume} required>
              <SelectTrigger id="monthlyVolume" className="w-full">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {MONTHLY_VOLUMES.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="agencyDescription" className="text-sm font-medium leading-none">Tell us about your agency (optional)</label>
            <Textarea id="agencyDescription" name="agencyDescription" className="min-h-[100px]" placeholder="Anything else we should know?" />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Partner Info"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default PartnerForm
