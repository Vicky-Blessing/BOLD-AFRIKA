import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, Users, Lightbulb, Target, Heart, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const whatWeDo = [
  {
    icon: GraduationCap,
    title: "Digital Skills Training",
    description: "Comprehensive courses in social media marketing, content creation and digital strategy.",
  },
  {
    icon: Users,
    title: "Mentorship Programs",
    description: "One-on-one guidance from industry professionals to accelerate your career growth.",
  },
  {
    icon: Lightbulb,
    title: "Creative Workshops",
    description: "Hands-on sessions covering videography, branding, design and content production.",
  },
  {
    icon: Target,
    title: "Career Development",
    description: "CV writing, interview prep, and job placement assistance for creative careers.",
  },
]

const workshops = [
  {
    title: "Videography Masterclass",
    description: "Learn professional video production from concept to final edit.",
    image: "/images/boldyouths2.jpeg",
    attendees: "30+",
  },
  {
    title: "CV Writing Workshop",
    description: "Craft a standout CV that gets you noticed in the creative industry.",
    image: "/images/boldyouths3.jpeg",
    attendees: "30+",
  },
  {
    title: "Social Media Strategy",
    description: "Master the art of building engaging social media presence.",
    image: "/images/boldyouths4.jpg",
    attendees: "30+",
  },
  {
    title: "Personal Branding",
    description: "Build your unique brand identity and stand out from the crowd.",
    image: "/images/boldyouths5.JPG",
    attendees: "30+",
  },
]

const impactStats = [
  { value: "100+", label: "Youth Trained" },
  { value: "3+", label: "Workshops Held" },
  { value: "10+", label: "Industry Partners" },
  { value: "80%", label: "Employment Rate" },
]

const whyBoldYouths = [
  {
    icon: Heart,
    title: "Community-Focused",
    description: "We build more than skills—we build lasting connections and support networks.",
  },
  {
    icon: Rocket,
    title: "Impact-Driven",
    description: "Every program is designed to create real, measurable change in lives.",
  },
  {
    icon: Lightbulb,
    title: "Industry-Relevant",
    description: "Our curriculum is shaped by current market demands and industry trends.",
  },
]

export default function BoldYouthsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-plum pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-carrot rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-candy-pink rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-carrot text-white font-medium rounded-full text-sm mb-6">
                  Youth Empowerment Program
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Bold <span className="text-candy-pink">Youths</span>
                </h1>
                <p className="mt-6 text-xl text-white/80 leading-relaxed">
                  Empowering the next generation of African creatives through skills development, 
                  mentorship and community building.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
                    <Link href="/contact">
                      Join as a Student
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-plum text-lg px-8 py-6 rounded-full bg-transparent">
                    <Link href="/contact">Partner With Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="/images/boldyouth1.JPG"
                    alt="Bold Youths program participants"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-candy-pink/30 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* What We Do */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-candy-pink-light text-plum font-medium rounded-full text-sm mb-4">
                What We Do
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                Comprehensive Youth Development
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our programs are designed to equip young creatives with the skills, 
                knowledge and connections they need to thrive in the industry.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDo.map((item) => (
                <Card key={item.title} className="bg-white border-0 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-candy-pink/20 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-plum" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-plum mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Workshops */}
        <section id="workshops" className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                Past Workshops
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                Learning in Action
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workshops.map((workshop) => (
                <Card key={workshop.title} className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-carrot text-white text-xs font-medium rounded-full">
                      {workshop.attendees} attendees
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif font-semibold text-plum mb-1">{workshop.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{workshop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Bold Youths */}
        <section id="mentorship" className="py-24 bg-plum relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-candy-pink rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-carrot text-white font-medium rounded-full text-sm mb-4">
                Why Bold Youths
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">
                Making a Real Difference
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyBoldYouths.map((item) => (
                <Card key={item.title} className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-candy-pink/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-8 w-8 text-candy-pink" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-6 text-balance">
              Ready to Start Your <span className="text-carrot">Bold</span> Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you{"'"}re a student looking to learn, a professional wanting to mentor, 
              or an organization seeking to partner—there{"'"}s a place for you in Bold Youths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
                <Link href="/contact">
                  Join as a Student
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-plum hover:bg-plum-dark text-white text-lg px-8 py-6 rounded-full">
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-plum text-plum hover:bg-plum hover:text-white text-lg px-8 py-6 rounded-full bg-transparent">
                <Link href="/contact">Host a Workshop</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
