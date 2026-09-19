import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Admin sign in | Valore",
  description: "Secure administration access for Valore.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
