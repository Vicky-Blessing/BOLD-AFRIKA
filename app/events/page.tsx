"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-plum pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-carrot rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-candy-pink rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <span className="inline-block px-4 py-2 bg-carrot text-white font-medium rounded-full text-sm mb-6">
              Our Events
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Creating <span className="text-candy-pink">Memorable</span> Experiences
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              From workshops to conferences, we bring together Kenya{"'"}s most creative 
              minds for learning, networking and inspiration.
            </p>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-candy-pink-light text-plum font-medium rounded-full text-sm mb-4">
                Featured Event
              </span>
            </div>
            <Card className="overflow-hidden border-0 rounded-3xl shadow-lg bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto relative">
                  <Image
                    src="/images/event-confessions.jpg"
                    alt="Confessions of a Social Media Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-carrot/10 text-carrot font-medium rounded-full text-sm mb-4 w-fit">
                    Conference
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum mb-4">
                    Confessions of a Social Media Manager
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our flagship event brought together 100+ social media professionals for an 
                    evening of honest conversations about the realities of managing brands online. 
                    Attendees shared their wins, challenges and lessons learned.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-plum" />
                      28th June 2025
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-plum" />
                      Nairobi, Kenya
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-5 w-5 text-plum" />
                      100+ attendees
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-candy-pink-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white text-plum font-medium rounded-full text-sm mb-4">
                Coming Soon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum text-balance">
                Upcoming Events
              </h2>
            </div>

            {/* Events Grid */}
            <div className="flex justify-center">
              <Card className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white w-full max-w-sm">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/masterclass.jpeg"
                    alt="Digital Marketing Masterclass"
                    fill
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-plum mb-2">Digital Marketing Masterclass</h3>
                  <p className="text-muted-foreground text-sm mb-4">Learn cutting-edge strategies for building and scaling your brand in the digital age.</p>
                  <div className="flex items-center text-xs">
                    <span className="text-carrot font-medium flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      7th February 2026
                    </span>
                  </div>
                </CardContent>
              </Card>
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
              Have an Event in Mind?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you want to host a workshop, sponsor an event, or partner with 
              Bold Afrika—we{"'"}d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-carrot hover:bg-carrot/90 text-white text-lg px-8 py-6 rounded-full">
                <Link href="/contact">
                  Book Us for Your Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-plum text-lg px-8 py-6 rounded-full bg-transparent">
                <Link href="/contact">Partner With Bold Afrika</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
