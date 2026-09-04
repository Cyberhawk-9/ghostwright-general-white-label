import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ success: true })

  // Clear authentication cookie
  response.cookies.delete("admin-authenticated")
  response.cookies.set("admin_session", "", { maxAge: 0 })

  return response
}
