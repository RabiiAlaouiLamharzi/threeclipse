import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Monitor, Play, Gamepad2 } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <Badge
              variant="secondary"
              className="text-sm font-jakarta font-medium tracking-wider px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-8"
            >
              FEATURED PROJECTS
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Projects / Games
            </h1>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground font-light italic max-w-2xl mx-auto">
              We create experiences where art, music, and story collide. Feel the echoes of emotions within the worlds
              we craft.
            </p>
          </div>



          <div className="space-y-12">
            {/* Game 1 */}
            <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Gamepad2 className="w-24 h-24 text-primary/40" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <h2 className="text-3xl font-medium mb-4">
                      Flesh mutates… Steel advances… Humanity endures and adapts.
                    </h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <span className="font-light">Planned Release Date: Fall 2027</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Play className="w-5 h-5" />
                        <span className="font-light">Genre: Strategy | Visual Novel | Sci-fi</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Monitor className="w-5 h-5" />
                        <span className="font-light">Platform: PC, Nintendo Switch</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Strategy</Badge>
                      <Badge variant="secondary">Visual Novel</Badge>
                      <Badge variant="secondary">Sci-fi</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Game 2 */}
            <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="lg:flex lg:flex-row-reverse">
                  <div className="lg:w-1/2">
                    <div className="aspect-video bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center">
                      <Gamepad2 className="w-24 h-24 text-destructive/40" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <h2 className="text-3xl font-medium mb-4">YES, NO, GOODBYE</h2>
                    <p className="text-lg text-muted-foreground mb-6 font-light">
                      Unscramble the void to hear those who speak within.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <span className="font-light">Planned Release Date: August 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Play className="w-5 h-5" />
                        <span className="font-light">Genre: Word Puzzle | Horror | Mystery</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Monitor className="w-5 h-5" />
                        <span className="font-light">Platform: PC</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Word Puzzle</Badge>
                      <Badge variant="secondary">Horror</Badge>
                      <Badge variant="secondary">Mystery</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
