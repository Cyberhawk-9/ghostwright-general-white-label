import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const isAuthenticated = request.cookies.get("admin-authenticated")?.value === "true"

  if (isAuthenticated) {
    return NextResponse.json({ authenticated: true })
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
