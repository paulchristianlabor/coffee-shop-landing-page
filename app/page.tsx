'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, MapPin, Phone, Mail, Clock, ChevronRight, Star, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CoffeeLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Coffee Shop Home"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">
              ☕
            </div>
            <span className="hidden sm:block font-serif font-bold text-foreground">Coffee Shop</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 cursor-pointer">About</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 cursor-pointer">Gallery</a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 cursor-pointer">Reviews</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-coffee.jpg"
            alt="Freshly brewed espresso coffee with latte art"
            fill
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
          <div className="space-y-6 text-center max-w-2xl">
            <div className="inline-block px-4 py-2 bg-secondary/80 rounded-full text-sm font-medium text-white">
              ✨ Premium Coffee Experience
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-balance text-white">
              Freshly Brewed Coffee
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Made for your perfect day. Discover our meticulously sourced single-origin beans, expertly roasted and prepared by our passionate baristas.
            </p>
            <div className="pt-4">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/about-coffee.jpg"
                alt="Premium ethically sourced coffee beans"
                fill
                className="object-cover"
                quality={75}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2015, Artisan Coffee began as a passion project to share exceptional coffee with our community. We work directly with farmers across Ethiopia, Colombia, and Kenya to source the finest beans.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every cup tells a story of dedication, craftsmanship, and sustainability. Our commitment to quality extends from farm to cup.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers Daily</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">8</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Origin Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium coffee beans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ethiopian Yirgacheffe', region: 'Ethiopia', notes: 'Floral, fruity notes', image: '/images/coffee-ethiopian.jpg' },
              { name: 'Colombian Huila', region: 'Colombia', notes: 'Balanced, sweet chocolate', image: '/images/coffee-colombian.jpg' },
              { name: 'Kenyan AA', region: 'Kenya', notes: 'Bright, berry forward', image: '/images/coffee-kenyan.jpg' },
            ].map((product, i) => (
              <div key={i} className="group">
                <div className="relative h-64 rounded-xl mb-4 overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={75}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.region}</p>
                <p className="text-sm text-primary font-medium">{product.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Space</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into our warm and welcoming café
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/gallery-1.jpg', alt: 'Cozy café interior with comfortable seating and ambient lighting' },
              { src: '/images/gallery-2.jpg', alt: 'Professional barista preparing specialty coffee' },
              { src: '/images/gallery-3.jpg', alt: 'Beautiful latte art in a white ceramic cup' },
              { src: '/images/gallery-4.jpg', alt: 'Coffee beans in various roast levels' },
              { src: '/images/gallery-5.jpg', alt: 'Comfortable reading nook with natural window light' },
              { src: '/images/gallery-6.jpg', alt: 'Close-up of espresso extraction with golden crema' },
            ].map((item, i) => (
              <div
                key={i}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real coffee enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'The best coffee I\'ve ever had. The baristas really know their craft!',
                author: 'Sarah Mitchell',
                role: 'Coffee Enthusiast',
                rating: 5,
              },
              {
                text: 'Amazing atmosphere and exceptional quality. I visit every morning!',
                author: 'James Chen',
                role: 'Local Regular',
                rating: 5,
              },
              {
                text: 'Their single-origin beans are absolutely incredible. Highly recommend!',
                author: 'Emma Rodriguez',
                role: 'Home Barista',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-serif font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive offers and coffee tips
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Visit Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience our café firsthand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-primary" size={32} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-serif font-bold text-foreground">
                    123 Coffee Street<br />
                    Portland, OR 97210<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="text-primary" size={32} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-serif font-bold text-foreground">
                    Mon - Fri: 7am - 7pm<br />
                    Sat - Sun: 8am - 6pm<br />
                    <span className="text-primary font-medium text-sm">Open Today</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-primary flex-shrink-0" size={24} aria-hidden="true" />
                <a href="tel:+15035550123" className="font-serif font-bold text-foreground hover:text-primary transition-colors">
                  (503) 555-0123
                </a>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-primary flex-shrink-0" size={24} aria-hidden="true" />
                <a href="mailto:hello@coffeeshop.com" className="font-serif font-bold text-foreground hover:text-primary transition-colors break-all">
                  hello@coffeeshop.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-serif font-bold mb-4">Coffee Shop</h4>
              <p className="text-sm opacity-90">Premium specialty coffee for passionate enthusiasts.</p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:underline opacity-90">About</a></li>
                <li><a href="#gallery" className="hover:underline opacity-90">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline opacity-90">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline opacity-90">Terms of Service</a></li>
                <li><a href="#" className="hover:underline opacity-90">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">f</a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">𝕏</a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors" aria-label="Follow us on Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
