import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const jakartaPlus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

const libertinusSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libertinus-serif",
})

export const metadata: Metadata = {
  title: "Threeclipse Studios - Indie Game Development",
  description:
    "We create experiences where art, music, and story collide. Feel the echoes of emotions within the worlds we craft.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakartaPlus.variable} ${libertinusSerif.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
