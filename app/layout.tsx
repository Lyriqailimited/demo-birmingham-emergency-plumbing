import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Birmingham Emergency Plumbing - AI Receptionist Demo",
  description: "Birmingham trusted 24/7 emergency plumbing service - fast, reliable, always ready",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
