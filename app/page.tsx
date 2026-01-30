import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Megaphone, Calendar, Sparkles, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Building and managing your brand presence across all social platforms.",
  },
  {
    icon: Sparkles,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth and engagement for your business.",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Creating memorable experiences that leave lasting impressions.",
  },
]

const testimonials = [
  {
    quote: "Bold Afrika transformed our social media presence. Their creative approach and understanding of the African market is unmatched.",
    author: "Sarah Kimani",
    role: "Marketing Director, TechHub Kenya",
  },
  {
    quote: "The Bold Youths program gave me the skills and confidence to launch my own creative agency. Forever grateful!",
    author: "David Ochieng",
    role: "Founder, Creative Minds Studio",
  },
  {
    quote: "Working with Bold Afrika was a game-changer for our event. Professional, creative, and truly passionate about what they do.",
    author: "Amina Hassan",
    role: "CEO, Nairobi Fashion Week",
  },
]

const events = [
  {
    title: "Confessions of a Social Media Manager",
    attendees: "100+",
    image: "/images/event-confessions.jpg",
  },
  {
    title: "Bold Youths Workshop",
    attendees: "50+",
    image: "/images/boldyouth1.JPG",
  },
  {
    title: "Creative Talks Panel",
    attendees: "75+",
    image: "/images/talkpanel.jpg",
  },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-plum pt-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-candy-pink rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-carrot rounded-full blur-3xl animate-pulse delay-500" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
              Building <span className="text-candy-pink">Bold Brands</span> &{" "}
              <span className="text-carrot">Empowering</span> Creative Youths in Africa
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We are a Kenyan-based creative agency specializing in social media management, 
              digital marketing and youth empowerment through innovative programs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
                <Link href="/bold-youths">
                  Join Bold Youths
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-plum text-lg px-8 py-6 rounded-full bg-transparent">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* About Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/team-collaboration.jpg"
                    alt="Bold Afrika team collaborating"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-candy-pink-light rounded-3xl -z-10" />
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-candy-pink-light text-plum font-medium rounded-full text-sm mb-4">
                  About Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-6 text-balance">
                  Boldly Shaping Africa{"'"}s Creative Future
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Bold Afrika is more than a creative agency—we{"'"}re a movement. Based in Nairobi, Kenya, 
                  we{"'"}re dedicated to building exceptional brands while nurturing the next generation 
                  of African creative talent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Through our comprehensive services and the Bold Youths empowerment program, 
                  we{"'"}re creating opportunities and driving innovation across the continent.
                </p>
                <Button asChild className="bg-plum hover:bg-plum-dark text-white rounded-full px-6">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                Our Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                Comprehensive Creative Solutions
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {services.map((service) => (
                <Card key={service.title} className="bg-white border-0 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-candy-pink/20 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-plum" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-plum mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild className="bg-plum hover:bg-plum-dark text-white rounded-full px-8">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Events Preview */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-candy-pink-light text-plum font-medium rounded-full text-sm mb-4">
                Our Events
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                Creating Memorable Experiences
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.title} className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-carrot text-white text-sm font-medium rounded-full">
                      {event.attendees} attendees
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg text-plum">{event.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild className="bg-plum hover:bg-plum-dark text-white rounded-full px-8">
                <Link href="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                Testimonials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                What Our Community Says
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="bg-white border-0 rounded-2xl shadow-sm">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-candy-pink mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div>
                      <p className="font-semibold text-plum">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-plum relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-carrot rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Let{"'"}s Build Your Brand <span className="text-candy-pink">Boldly</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your brand{"'"}s digital presence? Partner with Bold Afrika 
              and let{"'"}s create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-plum text-lg px-8 py-6 rounded-full bg-transparent">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
