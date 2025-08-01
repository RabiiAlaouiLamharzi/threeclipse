import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Heart, Leaf, User } from "lucide-react"

export default function AboutPage() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Just as we aim to improve our craft, we want to help people grow emotionally and intellectually through our interactive experiences.",
      bgColor: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      hoverColor: "hover:text-primary",
    },
    {
      icon: Heart,
      title: "Kindness",
      description:
        "We treat our collaborators and the players with respect. We strive to be a positive influence in the world.",
      bgColor: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
      hoverColor: "hover:text-accent",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We use technology responsibly and help junior developers find their place in a challenging industry, helping the next generation have a solid backbone for game development.",
      bgColor: "from-chart-2/20 to-chart-2/5",
      iconColor: "text-chart-2",
      hoverColor: "hover:text-chart-2",
    },
  ]

  const team = [
    { name: "Nathan White", role: "Founder, President", specialty: "Vision & Strategy" },
    { name: "Joshua Gossage", role: "Pixel Artist", specialty: "Visual Storytelling" },
    { name: "Katie Lei", role: "2D Artist", specialty: "Character Design" },
    { name: "Luke Riley", role: "Level Design", specialty: "World Building" },
    { name: "Nahid Sekander", role: "Programmer", specialty: "Systems Architecture" },
    { name: "Simon Daoud", role: "Composer", specialty: "Audio Landscapes" },
    { name: "Victor Del Castillo", role: "UX/UI Designer", specialty: "Player Experience" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge
              variant="secondary"
              className="text-sm font-jakarta font-medium tracking-wider px-4 py-2 bg-primary/10 text-primary border-primary/20 mb-8"
            >
              OUR STORY
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground font-light italic max-w-2xl mx-auto">
              Building great experiences through collaborative growth, respectful communication, and ethical technology.
            </p>
          </div>

          {/* Main Content */}
          <Card className="mb-20 border-0 bg-card/60 backdrop-blur-sm shadow-lg">
            <CardContent className="p-12">
              <div className="prose prose-xl max-w-none text-muted-foreground font-light leading-relaxed">
                <p className="text-2xl mb-8 text-foreground">
                  <span className="font-bold text-primary">Threeclipse Inc.</span> is an indie game development studio
                  dedicated to crafting exceptional games with meaningful stories.
                </p>
                <p className="text-xl mb-8">
                  Founded in <span className="text-primary font-semibold">2025</span> in{" "}
                  <span className="text-primary font-semibold">Montreal, Canada</span>, we are committed to healthy,
                  sustainable development.
                </p>
                <p className="text-xl">
                  We believe in <span className="text-primary font-semibold">collaborative growth</span>,{" "}
                  <span className="text-primary font-semibold">respectful communication</span>, and the{" "}
                  <span className="text-primary font-semibold">ethical use of technology</span>. While the studio
                  remains fully remote, we operate as a tight-knit team united by a shared passion for narrative-driven,
                  innovative gameplay experiences.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Pillars */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
                Our Pillars
              </h2>
              <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground font-light">
                <span className="font-bold text-primary">Threeclipse Inc.</span> is built upon three pillars:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${pillar.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className={`w-10 h-10 ${pillar.iconColor}`} />
                    </div>
                    <h3 className={`text-3xl font-bold mb-6 ${pillar.hoverColor} transition-colors`}>
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
                Core Team
              </h2>
              <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                Our diverse team includes talent with experience spanning from{" "}
                <span className="text-primary font-semibold">indie to AAA development</span>. Individually, our members
                contributed to titles such as <span className="text-primary font-semibold">MechWarrior 5</span>,{" "}
                <span className="text-primary font-semibold">Dark Deity</span>,{" "}
                <span className="text-primary font-semibold">Telltale's The Walking Dead</span>, and many others.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-muted-foreground text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-primary text-xs font-light italic">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
