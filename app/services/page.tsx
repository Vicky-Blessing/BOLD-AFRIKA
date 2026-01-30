import Link from "next/link"
import { ArrowRight, Megaphone, TrendingUp, Users, Calendar, PenTool, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const services = [
  {
    id: "social-media",
    icon: Megaphone,
    title: "Social Media Management",
    description: "We take the hassle out of social media by managing your accounts, creating content, and engaging with your audience—so you can focus on what you do best.",
    features: [
      "Content calendar planning",
      "Daily posting & scheduling",
      "Community engagement",
      "Performance analytics & reporting",
      "Brand voice development",
    ],
  },

  {
    id: "events",
    icon: Calendar,
    title: "Event Management",
    description: "From concept to execution, we create memorable events that leave lasting impressions and drive meaningful connections.",
    features: [
      "Event concept & planning",
      "Vendor coordination",
      "On-site management",
      "Post-event reporting",
      "Virtual & hybrid events",
    ],
  },
  {
    id: "content",
    icon: PenTool,
    title: "Content Strategy & Creation",
    description: "Compelling content that tells your brand story. We create everything from graphics to videos that capture attention and drive engagement.",
    features: [
      "Content strategy development",
      "Graphic design & branding",
      "Video production",
      "Copywriting & storytelling",
      "Photography services",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into understanding your brand, goals, audience and challenges.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a tailored plan that aligns with your objectives and resonates with your audience.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Our team brings the strategy to life with creative excellence and attention to detail.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "We continuously analyze, refine and improve to maximize your results.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-plum pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-candy-pink rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <span className="inline-block px-4 py-2 bg-carrot text-white font-medium rounded-full text-sm mb-6">
              Our Services
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Comprehensive <span className="text-candy-pink">Creative</span> Solutions
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              From social media management to event production, we offer end-to-end 
              services to help your brand stand out in the African market.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-candy-pink/20 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-plum" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-plum mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <CheckCircle className="h-5 w-5 text-carrot flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-plum hover:bg-plum-dark text-white rounded-full px-6">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Card className="bg-candy-pink-light border-0 rounded-3xl overflow-hidden">
                      <CardContent className="p-12 flex items-center justify-center min-h-[300px]">
                        <service.icon className="h-32 w-32 text-plum/20" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                How We Work
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-plum text-white font-serif font-bold text-2xl rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-plum mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
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
              Ready to <span className="text-candy-pink">Elevate</span> Your Brand?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let{"'"}s discuss how Bold Afrika can help you achieve your goals. 
              Get in touch for a free consultation.
            </p>
            <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
