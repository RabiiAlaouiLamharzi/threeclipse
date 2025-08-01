import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Trophy, CheckCircle, Mail, Calendar } from "lucide-react"

export default function JuniorProgramPage() {
  const benefits = [
    "Experience with indie studio pipelines & tools",
    "Near-instant feedback on your work",
    "A published game with your name attached (we pay the publishing costs for Steam!)",
    "Depending on availability, a one-on-one 30-minute coaching session with a senior in your field",
    "Webinars & interviews with industry veterans and guest speakers",
    "Industry insights",
    "Networking opportunities",
    "Work references & help seeking job opportunities",
    "…And the friends we make along the way",
  ]

  const steps = [
    "Get accepted into the program",
    "Meet your fellow team members",
    "Collectively decide on a game concept",
    "Complete weekly tasks for 8 weeks",
    "(Optional) Attend webinars, receive mentoring",
    "And voila! You have now made a video game!",
  ]

  const roles = ["Programmers", "Artists", "Composers", "UI/UX Designers", "Game Designers"]

  const requirements = ["C1-Fluency in English", "Graduate of a relevant program and/or proof of relevant skills"]

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
              JUNIOR PROGRAM
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-tight mb-8 text-gaming-gradient">
              Junior Program
            </h1>
            <div className="w-24 h-1 bg-gaming-gradient mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground font-light italic max-w-2xl mx-auto">
              A work training program designed to bridge the gap between college graduation and work readiness.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <p className="text-xl text-muted-foreground font-light mb-6 leading-relaxed">
              What's one of the most frustrating things about searching for jobs? If you said "entry-level jobs
              requiring years of experience," then, oh my, do we have news for you!
            </p>
            <p className="text-xl font-light mb-6 leading-relaxed">
              Threeclipse Games is proud to present its Junior Program: a work training program designed to bridge the
              gap between college graduation and work readiness.
            </p>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Run entirely by volunteers, this program exists because we know firsthand how hard it is to get that
              crucial first industry experience.
            </p>
          </div>

          {/* What is it */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                What exactly is the Junior Program?
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  It's a 10-week job training program where participants collaborate remotely to build a non-commercial
                  game from concept to completion.
                </p>
                <p>
                  Junior members contribute approximately 10 hours per week, working alongside experienced mentors to
                  create something real and meaningful.
                </p>
                <p className="text-foreground font-medium">
                  The goal? A complete portfolio piece AND a published game with your name on it. That's right — we
                  handle the publishing costs and get your game on Steam.
                </p>
                <p>
                  It's one thing to say, "I know how to make games." It's another to say, "Here's the game I helped
                  create — you can download it right now."
                </p>
                <p>
                  And, beyond the portfolio piece, we want to help you develop confidence and real-world skills so that
                  when you walk into your first industry job, you're ready to contribute from day one as part of a team.
                </p>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-medium">Did we mention it's free (besides your time)?</p>
              </div>
            </CardContent>
          </Card>

          {/* Why we do it */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6">Free?! So… why is Threeclipse doing it?</h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  <strong className="text-foreground">The short answer:</strong> Because it's hard to get a foot in the
                  door, and we've all been there.
                </p>
                <p>
                  <strong className="text-foreground">The longer answer:</strong> Because we love video games and we're
                  seeing the writing on the wall. This decade has been particularly challenging for anyone looking to
                  enter the game industry, and there is often no clear career path after completing an academic degree.
                </p>
                <p>
                  Some newcomers figure it out; most don't and give up. We're here to change that — without juniors
                  getting experience today, the industry as a whole will struggle in the next decade.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-primary" />
                What do I get out of it?
              </h2>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How it works */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6">So, how does it work?</h2>
              <p className="text-muted-foreground font-light mb-6">
                It's a straightforward process! Through the following steps, you will have access to additional
                resources, guest speakers, and further learning opportunities.
              </p>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium text-sm">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground font-light">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                When does the program start?
              </h2>
              <p className="text-muted-foreground font-light">
                We plan to run this program three times a year, giving as many juniors as possible the opportunity to
                participate. Our expected starting points are January, May, and September.
              </p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6">What Are The Requirements?</h2>
              <p className="text-muted-foreground font-light mb-4">
                While we don't require experience, we do require the following:
              </p>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{req}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Roles */}
          <Card className="mb-16 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light mb-6">What Roles Are Available?</h2>
              <p className="text-muted-foreground font-light mb-6">
                The specific open roles vary from project to project. As a baseline, we include the following in every
                project:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {roles.map((role, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {role}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground font-light">
                Even if your discipline isn't listed above, feel free to reach out to us! Perhaps you may be just what
                we need for the next project!
              </p>
            </CardContent>
          </Card>

          {/* Apply */}
          <Card className="border-0 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-light mb-6 flex items-center justify-center gap-3">
                <Mail className="w-8 h-8 text-primary" />I want in! How do I apply?
              </h2>
              <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                Please send us an email at juniorprogram@threeclipse.com with your CV, a brief introduction about
                yourself, and indicate which roles you're interested in applying for.
              </p>
              <Button asChild size="lg" className="text-base">
                <a href="mailto:juniorprogram@threeclipse.com">
                  Apply Now <Mail className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
