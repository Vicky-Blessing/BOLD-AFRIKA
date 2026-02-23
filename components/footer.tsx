import Link from "next/link"
import Image from "next/image"
import { Instagram, Music, Linkedin, Mail, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ],
  programs: [
    { href: "/bold-youths", label: "Bold Youths" },
    { href: "/bold-youths#workshops", label: "Workshops" },
    { href: "/bold-youths#mentorship", label: "Mentorship" },
  ],
  services: [
    { href: "/services#social-media", label: "Social Media Management" },
    { href: "/services#events", label: "Event Management" },
  ],
}

const socialLinks = [
  { href: "https://instagram.com/boldafrika_", icon: Instagram, label: "Instagram" },
  { href: "https://www.tiktok.com/@bold.afrika", icon: Music, label: "TikTok" },
  { href: "https://www.linkedin.com/in/harriettegift", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
                <Image
                  src="/images/boldafrikalogo.png"
                  alt="Bold Afrika"
                  width={500}
                  height={200}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-white/70 max-w-sm leading-relaxed">
              Building bold brands and empowering creative youth across Africa. 
              Your partner in digital excellence and community impact.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-candy-pink hover:text-plum"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-candy-pink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-candy-pink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:harriegift@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-candy-pink transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  harriegift@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254703466437"
                  className="flex items-center gap-2 text-white/70 hover:text-candy-pink transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +254 703 466 437
                </a>
              </li>
              <li className="text-white/70">
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Bold Afrika. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
