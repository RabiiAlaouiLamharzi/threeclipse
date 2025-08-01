"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Junior Program", href: "/junior-program" },
  { name: "Join Us", href: "/join-us" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-6 z-50 w-full px-6">
      <nav className="container mx-auto flex h-20 items-center justify-between rounded-full bg-background/10 backdrop-blur-2xl border border-white/20 shadow-2xl px-6 sm:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-gaming overflow-hidden">
            <img src="/logo-gaming.png" alt="Threeclipse Studios" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-jakarta font-bold text-xl tracking-tight text-gaming-gradient">Threeclipse</span>
            <span className="text-xs text-muted-foreground tracking-wider font-light -mt-1">STUDIOS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary relative group py-3 px-4 rounded-full hover:bg-white/5",
                pathname === item.href ? "text-primary bg-white/10" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 rounded-2xl bg-background/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
          <div className="container mx-auto px-6 py-8 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-base font-medium tracking-wide transition-all duration-300 hover:text-primary py-3 px-4 rounded-xl hover:bg-white/5",
                  pathname === item.href ? "text-primary bg-white/10" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
