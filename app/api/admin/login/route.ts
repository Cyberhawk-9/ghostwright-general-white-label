import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, passcode } = body

    const adminEmail = process.env.ADMIN_EMAIL || "owen@cyberhawk.dev"
    const adminPassword = process.env.ADMIN_PASSWORD || "14AdMi14 DK!"

    // Validate credentials
    if (email === adminEmail && passcode === adminPassword) {
      const response = NextResponse.json({ success: true })

      // Set authentication cookie
      response.cookies.set("admin-authenticated", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return response
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
