"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin, Instagram, Music, Linkedin, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harriegift@gmail.com",
    href: "mailto:harriegift@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 703466437",
    href: "tel:+254703466437",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
]

const socialLinks = [
  { href: "https://instagram.com/boldafrika_", icon: Instagram, label: "Instagram" },
  { href: "https://tiktok.com/bold.afrika", icon: Music, label: "Tiktok" },
  { href: "https://linkedin.com/in/harriettegift", icon: Linkedin, label: "LinkedIn" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-plum pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-carrot rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-candy-pink rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <span className="inline-block px-4 py-2 bg-carrot text-white font-medium rounded-full text-sm mb-6">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Ready to be <span className="text-candy-pink">Bold?</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Want to partner with us? We{"'"}d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 rounded-3xl shadow-lg bg-white">
                <CardContent className="p-8 lg:p-10">
                  <h2 className="font-serif text-2xl font-bold text-plum mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="rounded-xl border-border focus:border-plum focus:ring-plum"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="rounded-xl border-border focus:border-plum focus:ring-plum"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="rounded-xl border-border focus:border-plum focus:ring-plum"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your project or inquiry..."
                        rows={5}
                        required
                        className="rounded-xl border-border focus:border-plum focus:ring-plum resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-plum hover:bg-plum-dark text-white rounded-full py-6">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-plum mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you have a question about our services, want to discuss a potential 
                    partnership, or just want to say hello—we{"'"}re here for you.
                  </p>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-candy-pink-light rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-plum" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="text-plum font-medium hover:text-carrot transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-plum font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Card className="border-0 rounded-2xl bg-candy-pink-light">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-plum">Chat on WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                      <a href="https://wa.me/+254703466437" target="_blank" rel="noopener noreferrer">
                        Start WhatsApp Chat
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div>
                  <h3 className="font-serif font-semibold text-plum mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-candy-pink-light text-plum transition-colors hover:bg-plum hover:text-white"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <Card className="border-0 rounded-2xl bg-plum">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button asChild variant="secondary" className="w-full justify-start bg-white/10 text-white hover:bg-white/20 rounded-xl">
                        <Link href="/services">Explore Our Services</Link>
                      </Button>
                      <Button asChild variant="secondary" className="w-full justify-start bg-white/10 text-white hover:bg-white/20 rounded-xl">
                        <Link href="/bold-youths">Join Bold Youths</Link>
                      </Button>
                      <Button asChild variant="secondary" className="w-full justify-start bg-white/10 text-white hover:bg-white/20 rounded-xl">
                        <Link href="/events">View Our Events</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
