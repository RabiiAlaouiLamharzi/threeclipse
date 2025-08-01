import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, ExternalLink, Mail, AlertCircle } from "lucide-react"

export default function JoinUsPage() {
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
              CAREERS
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Careers
            </h1>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground font-light italic max-w-2xl mx-auto">
              It's Dangerous to Go Alone! Join our team and help us create amazing gaming experiences.
            </p>
          </div>

          {/* Main Content */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
                <p className="text-xl mb-6">
                  Every career is a journey, and no one has to walk alone. At Threeclipse Games, we meet ambition with
                  collaboration in a supportive team-based environment.
                </p>
                <p className="text-xl mb-6">
                  Whether you're taking your first steps or bringing in years of experience, there's a space here for
                  you to grow, contribute, and thrive.
                </p>
                <p className="text-xl">
                  Interested in joining us? We regularly post new openings on our LinkedIn Page. Some positions may be
                  reserved for Canadian residents due to legal and/or administrative restrictions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mb-16 border-0 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    If a role isn't listed but you're still interested in joining us, please email your CV and a quick
                    introduction about yourself to{" "}
                    <a href="mailto:contact@threeclipse.com" className="text-primary hover:underline font-medium">
                      contact@threeclipse.com
                    </a>
                  </p>
                  <p className="text-muted-foreground font-light mt-4">We look forward to hearing from you!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Openings */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                Current Openings
              </h2>

              <div className="text-center py-12">
                <AlertCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-6" />
                <h3 className="text-2xl font-light mb-4 text-muted-foreground">No openings at the moment</h3>
                <p className="text-muted-foreground font-light mb-8">Please check back later!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg">
                    <a href="https://linkedin.com/company/threeclipse" target="_blank" rel="noopener noreferrer">
                      Follow on LinkedIn <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg">
                    <a href="mailto:contact@threeclipse.com">
                      Contact Us <Mail className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
