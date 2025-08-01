import Link from "next/link"
import {
  Linkedin,
  MessageCircle,
  Mail,
  Gamepad2,
  Github,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Clock,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "Discord", color: "text-[#5865F2] hover:text-[#5865F2]/80" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-[#0077B5] hover:text-[#0077B5]/80" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-[#1DA1F2] hover:text-[#1DA1F2]/80" },
    { icon: Instagram, href: "#", label: "Instagram", color: "text-[#E4405F] hover:text-[#E4405F]/80" },
    { icon: Youtube, href: "#", label: "YouTube", color: "text-[#FF0000] hover:text-[#FF0000]/80" },
    { icon: Github, href: "#", label: "GitHub", color: "text-foreground hover:text-primary" },
  ]

  const quickLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Junior Program", href: "/junior-program" },
    { name: "Join Us", href: "/join-us" },
    { name: "Contact", href: "/contact" },
  ]

  const gameGenres = [
    { name: "Strategy", color: "bg-primary/20 text-primary border-primary/30" },
    { name: "Visual Novel", color: "bg-accent/20 text-accent border-accent/30" },
    { name: "Sci-fi", color: "bg-chart-2/20 text-chart-2 border-chart-2/30" },
    { name: "Horror", color: "bg-destructive/20 text-destructive border-destructive/30" },
    { name: "Mystery", color: "bg-chart-4/20 text-chart-4 border-chart-4/30" },
    { name: "Puzzle", color: "bg-chart-5/20 text-chart-5 border-chart-5/30" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-card/20">
      {/* Gaming Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gaming-gradient" />

      <div className="container mx-auto px-6 sm:px-4 py-20 relative">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-gaming animate-glow overflow-hidden">
                <img src="/logo-gaming.png" alt="Threeclipse Studios" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-jakarta font-bold text-2xl tracking-tight text-gaming-gradient">Threeclipse</span>
                <span className="text-sm text-muted-foreground tracking-wider font-light -mt-1">STUDIOS</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Creating experiences where <span className="text-primary font-medium">art</span>,
              <span className="text-accent font-medium"> music</span>, and
              <span className="text-chart-2 font-medium"> story</span> collide. Building the future of interactive
              entertainment with passion and innovation.
            </p>

            {/* Game Genres */}
            <div className="space-y-3">
              <h4 className="font-jakarta font-semibold text-sm tracking-wide text-foreground">OUR SPECIALTIES</h4>
              <div className="flex flex-wrap gap-2">
                {gameGenres.map((genre, index) => (
                  <Badge key={index} className={`${genre.color} font-jakarta text-xs font-medium`}>
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="font-jakarta font-bold text-lg tracking-wide text-gaming-gradient">Quick Links</h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-light text-sm hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-jakarta font-bold text-lg tracking-wide text-gaming-gradient">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-light text-muted-foreground mb-1">General Inquiries</p>
                  <a
                    href="mailto:contact@threeclipse.com"
                    className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                  >
                    contact@threeclipse.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-light text-muted-foreground mb-1">Junior Program</p>
                  <a
                    href="mailto:juniorprogram@threeclipse.com"
                    className="text-foreground hover:text-accent transition-colors font-medium text-sm"
                  >
                    juniorprogram@threeclipse.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <p className="text-sm font-light text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium text-sm">Montreal, Canada</p>
                  <p className="text-xs text-muted-foreground font-light">Remote-First Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-8">
            <h3 className="font-jakarta font-bold text-lg tracking-wide text-gaming-gradient">Stay Connected</h3>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-light text-muted-foreground">Follow our journey</p>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-card/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-card/80 transition-all duration-300 hover:scale-110 shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="border-0 bg-card/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-jakarta font-semibold text-sm mb-3 text-foreground">Game Updates</h4>
                <p className="text-xs text-muted-foreground mb-4 font-light">
                  Get notified about new releases and development updates
                </p>
                <Button
                  size="sm"
                  className="w-full bg-gaming-gradient hover:opacity-90 font-jakarta font-medium text-sm"
                >
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground font-light">
              <p>
                © 2025 <span className="text-gaming-gradient font-medium">Threeclipse Studios</span>. All rights
                reserved.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground font-light">
              <Clock className="w-4 h-4" />
              <span>Made with ❤️ in Montreal</span>
              <span>•</span>
              <span>
                Created by{" "}
                <a 
                  href="https://lumacraft-agency.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Luma Craft Agency
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
