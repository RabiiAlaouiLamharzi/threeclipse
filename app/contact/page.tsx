import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge
              variant="secondary"
              className="text-sm font-jakarta font-medium tracking-wider px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-8"
            >
              GET IN TOUCH
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground font-light italic max-w-2xl mx-auto">
              Interested in learning more about Threeclipse Games? We have a multitude of ways to contact our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Email</h3>
                      <a href="mailto:contact@threeclipse.com" className="text-primary hover:underline font-light">
                        contact@threeclipse.com
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Discord</h3>
                      <p className="text-muted-foreground font-light">Join our community server</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">LinkedIn</h3>
                      <p className="text-muted-foreground font-light">Follow us for updates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground font-light">Junior Program Applications</p>
                      <a
                        href="mailto:juniorprogram@threeclipse.com"
                        className="text-primary hover:underline font-light"
                      >
                        juniorprogram@threeclipse.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-light">General Inquiries</p>
                      <a href="mailto:contact@threeclipse.com" className="text-primary hover:underline font-light">
                        contact@threeclipse.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-light mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </Label>
                      <Input id="firstName" placeholder="Your first name" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </Label>
                      <Input id="lastName" placeholder="Your last name" className="bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input id="subject" placeholder="What's this about?" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
