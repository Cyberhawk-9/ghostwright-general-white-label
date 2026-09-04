"use server"

const EMAILJS_SERVICE_ID = "service_bt3oowm"
const EMAILJS_TEMPLATE_ID = "template_lmydat2"
const EMAILJS_PUBLIC_KEY = "wyusSO1_kD6AYC62D"

export async function sendContactEmail(data: {
  name: string
  phone: string
  email: string
  siteReason: string
  businessDescription: string
}) {
  console.log("[v0] Server action called with data:", { name: data.name, email: data.email })

  const messageBody = `Reason: ${data.siteReason}\nBusiness Description: ${data.businessDescription}`
  const signature = `Name: ${data.name}\nPhone: ${data.phone || "Not provided"}\nEmail: ${data.email}`

  const payload = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: {
      from_name: data.name,
      reply_to: data.email,
      message_body: messageBody,
      signature: signature,
    },
  }

  console.log("[v0] Payload prepared, making fetch request...")

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    console.log("[v0] EmailJS response status:", response.status)

    if (response.ok) {
      console.log("[v0] Email sent successfully!")
      return { success: true }
    } else {
      const text = await response.text()
      console.log("[v0] EmailJS error response:", text)
      return { success: false, error: `EmailJS error: ${text}` }
    }
  } catch (error) {
    console.log("[v0] Fetch error:", error)
    return { success: false, error: String(error) }
  }
}
