import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Abdessamad ASKLOU - IoT & Embedded Systems Developer",
  description:
    "Portfolio of Abdessamad ASKLOU, IoT and Embedded Systems Developer. Master's student passionate about automation and embedded systems.",
  icons: {
    icon: "/AS logo1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
