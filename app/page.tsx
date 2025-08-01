import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Calendar, Monitor, Gamepad2, Zap, Code2, Palette, Music, ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative container mx-auto px-6 sm:px-4 py-40 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Premium Badge */}
            <Badge
              variant="secondary"
              className="text-sm font-jakarta font-medium tracking-wider px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-8"
            >
              EXPERIENCE THE THRILL OF THE UNKNOWN
            </Badge>

            {/* Main Heading */}
            <div className="space-y-8 mb-16">
              <h1 className="text-6xl lg:text-8xl font-extralight tracking-tight leading-[0.9] text-luxury font-libertinus-serif">
                <span className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-libertinus-serif pb-4">
                  We create experiences
                </span>
                <span className="block text-4xl lg:text-5xl font-light mt-6 text-muted-foreground font-libertinus-serif">
                  where <span className="text-primary font-medium font-libertinus-serif">art</span>,{" "}
                  <span className="text-accent font-medium font-libertinus-serif">music</span>, and{" "}
                  <span className="text-chart-2 font-medium font-libertinus-serif">story</span> collide
                </span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto font-light leading-relaxed">
              Feel the <span className="text-gaming-gradient font-medium">echoes of emotions</span> within the worlds we
              craft.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 bg-gaming-gradient hover:opacity-90 font-jakarta font-medium tracking-wide group shadow-gaming hover:shadow-xl transition-all duration-300"
              >
                <Link href="/projects">
                  <Zap className="mr-3 w-5 h-5" />
                  Explore Our Games
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 bg-transparent border-2 border-primary/40 hover:border-primary hover:bg-primary/10 font-jakarta font-medium tracking-wide"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm font-light tracking-wide">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-6 sm:px-4">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="text-sm font-jakarta font-medium tracking-wider px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-8"
            >
              FEATURED PROJECTS
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Our Game Worlds
            </h2>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground font-light italic max-w-2xl mx-auto">
              "Updating to Test if Content is loaded to live site"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Game 1 */}
            <Card className="group overflow-hidden border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 shadow-lg hover:shadow-gaming">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
                    <Gamepad2 className="w-24 h-24 text-primary/60 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-6 right-6 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-xs font-jakarta font-bold tracking-wider border border-primary/30">
                      SCI-FI STRATEGY
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-jakarta font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                      Flesh mutates… Steel advances…
                      <br />
                      <span className="text-xl font-light text-muted-foreground">Humanity endures and adapts.</span>
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Fall 2027</p>
                          <p className="text-sm font-light">Planned Release</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Play className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Strategy | Visual Novel | Sci-fi</p>
                          <p className="text-sm font-light">Genre</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-10 h-10 bg-chart-2/10 rounded-lg flex items-center justify-center">
                          <Monitor className="w-5 h-5 text-chart-2" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">PC, Nintendo Switch</p>
                          <p className="text-sm font-light">Platform</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30 font-jakarta font-medium">
                        Strategy
                      </Badge>
                      <Badge className="bg-accent/20 text-accent border-accent/30 font-jakarta font-medium">
                        Visual Novel
                      </Badge>
                      <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 font-jakarta font-medium">
                        Sci-fi
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Game 2 */}
            <Card className="group overflow-hidden border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 shadow-lg hover:shadow-gaming">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent" />
                    <Gamepad2 className="w-24 h-24 text-accent/60 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-6 right-6 bg-accent/20 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-xs font-jakarta font-bold tracking-wider border border-accent/30">
                      HORROR PUZZLE
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-jakarta font-bold mb-6 group-hover:text-accent transition-colors leading-tight">
                      YES, NO, GOODBYE
                      <br />
                      <span className="text-xl font-light text-muted-foreground">Unscramble the void to hear those who speak within.</span>
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">August 2025</p>
                          <p className="text-sm font-light">Planned Release</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-10 h-10 bg-chart-2/10 rounded-lg flex items-center justify-center">
                          <Play className="w-5 h-5 text-chart-2" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Word Puzzle | Horror | Mystery</p>
                          <p className="text-sm font-light">Genre</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Monitor className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">PC</p>
                          <p className="text-sm font-light">Platform</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-accent/20 text-accent border-accent/30 font-jakarta font-medium">
                        Word Puzzle
                      </Badge>
                      <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 font-jakarta font-medium">
                        Horror
                      </Badge>
                      <Badge className="bg-primary/20 text-primary border-primary/30 font-jakarta font-medium">
                        Mystery
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-6 sm:px-4">
                      <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Our Creative Process
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We blend artistry with technology to create meaningful interactive experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-jakarta font-bold mb-4 text-primary">Visual Storytelling</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Every pixel serves the narrative, creating immersive worlds that resonate with players
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center">
                  <Music className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-jakarta font-bold mb-4 text-accent">Audio Landscapes</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Sound design that elevates emotion and creates atmospheric depth in every scene
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:shadow-chart-2/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-chart-2/20 to-chart-2/10 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="text-2xl font-jakarta font-bold mb-4 text-chart-2">Technical Excellence</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Clean, efficient code that brings creative visions to life across multiple platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-chart-2/5" />

        <div className="container mx-auto px-6 sm:px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Ready to Join Our Journey?
            </h2>
            <div className="w-32 h-1 bg-gaming-gradient mx-auto mb-12 rounded-full" />
            <p className="text-xl lg:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
              Whether you're a <span className="text-primary font-medium">player</span>,{" "}
              <span className="text-accent font-medium">developer</span>, or just{" "}
              <span className="text-chart-2 font-medium">curious</span> about our work, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-10 py-6 bg-gaming-gradient hover:opacity-90 font-jakarta font-medium tracking-wide group shadow-gaming hover:shadow-xl transition-all duration-300"
              >
                <Link href="/junior-program">
                  <Zap className="mr-3 w-5 h-5" />
                  Junior Program
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-10 py-6 bg-transparent border-2 border-primary/40 hover:border-primary hover:bg-primary/10 font-jakarta font-medium tracking-wide"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
