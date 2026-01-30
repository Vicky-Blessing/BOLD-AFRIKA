import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Sparkles, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Sparkles,
    title: "Boldness",
    description: "We embrace creativity and take calculated risks to achieve extraordinary results.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We believe in the power of connection and building meaningful relationships.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "We lift others as we rise, creating opportunities for the next generation.",
  },
  {
    icon: Globe,
    title: "African Excellence",
    description: "We celebrate and showcase the best of African creativity and innovation.",
  },
]

const impactStats = [
  { value: "50+", label: "Brands Served" },
  { value: "100+", label: "Youth Empowered" },
  { value: "5+", label: "Events Hosted" },
  { value: "3+", label: "Years of Impact" },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-plum pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-candy-pink rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-fuchsia rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <span className="inline-block px-4 py-2 bg-carrot text-white font-medium rounded-full text-sm mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              The Story of <span className="text-candy-pink">Bold Afrika</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Born from a passion for creativity and a commitment to empowering African youth, 
              we{"'"}re building a movement that{"'"}s changing the creative landscape.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/about1.JPG"
                    alt="Bold Afrika team in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-candy-pink-light rounded-3xl -z-10" />
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-candy-pink-light text-plum font-medium rounded-full text-sm mb-4">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-6 text-balance">
                  From Vision to Movement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Bold Afrika started with a simple belief: that African creativity deserves to be 
                  celebrated and nurtured on a global stage. What began as a passion project in 
                  Nairobi has grown into a full-fledged creative agency and youth empowerment movement.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Today, we work with brands across Kenya and beyond, helping them tell their stories 
                  boldly while simultaneously investing in the next generation of African creative talent 
                  through our Bold Youths program.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our journey is just beginning, and we{"'"}re excited about the future we{"'"}re building—one 
                  where African creativity leads and young voices are amplified.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                  Meet the Founder
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-2">
                  Harriette Gift
                </h2>
                <p className="text-carrot font-medium mb-6">CEO & Founder, Bold Afrika</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Harriette Gift is a passionate entrepreneur and creative strategist who founded 
                  Bold Afrika with a vision to transform how African brands communicate and to 
                  empower young creatives across the continent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With years of experience in social media management and digital marketing, 
                  Harriette has worked with numerous brands to build their digital presence. Her 
                  true passion, however, lies in mentoring young people and creating opportunities 
                  for them to thrive in the creative industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under her leadership, Bold Afrika has grown from a one-woman operation to a 
                  thriving agency and youth empowerment organization that{"'"}s making a real 
                  difference in Kenya{"'"}s creative ecosystem.
                </p>
              </div>
              <div className="lg:order-1 relative">
                <div className="aspect-[2/3] rounded-3xl overflow-hidden max-w-md mx-auto">
                  <Image
                    src="/images/founder-harriette.jpg"
                    alt="Harriette Gift - CEO & Founder of Bold Afrika"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-plum/10 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-plum relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-candy-pink rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-candy-pink/20 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-candy-pink" />
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-white mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    To build bold brands that stand out in the African market while empowering 
                    the next generation of creative talent through skills development, mentorship, 
                    and community building.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-candy-pink/20 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-candy-pink" />
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-white mb-4">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    To be Africa{"'"}s leading creative agency and youth empowerment organization, 
                    known for exceptional brand building and transforming young lives across 
                    the continent.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">
                Our Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-candy-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-candy-pink" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-white mb-2">{value.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                Our Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                Numbers That Matter
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl sm:text-5xl font-bold text-plum">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-6 text-balance">
              Let{"'"}s Build Something <span className="text-carrot">Bold</span> Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you{"'"}re a brand looking for creative solutions or a young creative seeking 
              opportunities—we{"'"}d love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-plum hover:bg-plum-dark text-white text-lg px-8 py-6 rounded-full">
                <Link href="/bold-youths">Join Bold Youths</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
