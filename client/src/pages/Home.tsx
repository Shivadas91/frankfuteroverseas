import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Instagram,
  Linkedin,
  Menu,
  X,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import heroImg from "@/assets/images/hero.jpg";
import success1 from "@/assets/images/success_1.jpg";
import success2 from "@/assets/images/success_2.jpg";
import success3 from "@/assets/images/success_3.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Embla carousel for Success Stories
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Study Abroad Guidance", icon: "🎓" },
    { title: "German Language Training", icon: "🇩🇪" },
    { title: "Accommodation and Travel Support", icon: "🏠" },
    { title: "Student Visa Assistance", icon: "🛂" },
    { title: "Global Student Community", icon: "🌍" },
  ];

  const programmes = [
    "Bachelors",
    "Masters",
    "Ausbildung",
    "FSJ",
    "BFD",
    "AU PAIR",
  ];

  const successStories = [
    { name: "Alan Raj", details: "Summer Intake 2025", img: success1 },
    { name: "Sarah Thomas", details: "Winter Intake 2024", img: success2 },
    { name: "Kevin Matthew", details: "Summer Intake 2025", img: success3 },
  ];

  return (
    <div className="min-h-screen font-sans bg-white relative">
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}>
              Frankfuter
              <span className="block text-sm font-sans tracking-widest uppercase text-accent font-semibold">
                Overseas
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Our Programmes", "More"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:text-accent ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col p-4 md:hidden gap-4 border-t">
            {["Home", "Our Programmes", "More"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-medium text-foreground p-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-4 p-2">
              <a href="#" className="text-primary"><Linkedin /></a>
              <a href="#" className="text-primary"><Instagram /></a>
            </div>
            <Button className="w-full bg-primary text-white">Sign Up</Button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Graduating Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
            Empowering Dreams, <br />
            <span className="text-accent italic">Connecting Futures</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light tracking-wide">
            Your trusted partner in shaping a successful global career and providing world-class education opportunities.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-8 py-6 text-lg transition-transform hover:scale-105 shadow-xl">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* SERVICE GRID SECTION */}
      <section className="relative z-20 -mt-16 md:-mt-24 max-w-7xl mx-auto px-4">
        <div className="bg-secondary rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 border-white">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex-1 p-6 md:p-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-colors hover:bg-white/20
                ${idx !== services.length - 1 ? "border-b md:border-b-0 md:border-r border-white/50" : ""}
              `}
            >
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform block">{service.icon}</span>
              <h3 className="font-serif font-bold text-primary text-sm md:text-base leading-snug">{service.title}</h3>
              
              <a href="#" className="mt-4 text-xs font-semibold text-primary/80 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Know More <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION (WHY CHOOSE US) */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 border-[1px] border-primary/20 rounded-[100%] scale-110 md:scale-[1.15] -rotate-2 hidden md:block opacity-50"></div>
          <div className="absolute inset-0 border-[1px] border-accent/40 rounded-[100%] scale-105 md:scale-[1.1] rotate-2 hidden md:block opacity-50"></div>
          
          <div className="relative z-10 text-center space-y-8 bg-white/80 backdrop-blur-sm p-8 md:p-16 rounded-3xl md:rounded-[100%] border border-primary/5 shadow-sm">
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Why <span className="italic text-accent">Choose Us?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              At Frankfuter Overseas, we believe in providing personalized guidance tailored to your unique aspirations. Our expert counselors have deep insights into the German education system and lifestyle, ensuring a seamless transition from your home country to your dream university.
            </p>
            <div className="pt-4">
               <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors group">
                 <span className="border-b-2 border-primary group-hover:border-accent pb-1 transition-colors">Click To Know More</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES SECTION */}
      <section id="our-programmes" className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Programmes</h2>
              <p className="text-muted-foreground max-w-xl">
                Explore a wide range of opportunities designed to accelerate your career in Germany.
              </p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors group mt-4 md:mt-0">
               <span className="border-b-2 border-primary group-hover:border-accent pb-1">View All</span>
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {programmes.map((prog, idx) => (
              <Card key={idx} className="group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border-none bg-white">
                <CardContent className="p-8 md:p-10 flex items-center justify-between">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {prog}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES (CAROUSEL) */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Success <span className="italic text-accent">Stories</span></h2>
            <p className="text-muted-foreground">Hear from our students who have successfully secured their visas.</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {successStories.map((story, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                    <div className="bg-muted/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={story.img} 
                          alt={story.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 bg-white border-t border-border flex-1">
                        <h4 className="font-serif font-bold text-xl text-primary">{story.name}</h4>
                        <p className="text-sm text-accent font-semibold mb-3">{story.details}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                           <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                           Visa Approved
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 rounded-full w-12 h-12 shadow-md bg-white text-primary hover:bg-primary hover:text-white border-none"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 rounded-full w-12 h-12 shadow-md bg-white text-primary hover:bg-primary hover:text-white border-none"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white pt-20 pb-10 border-t-8 border-accent">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="font-serif text-3xl font-bold">
              Frankfuter
              <span className="block text-sm font-sans tracking-widest uppercase text-accent font-semibold">
                Overseas
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering dreams and connecting futures through world-class educational guidance and comprehensive support.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Our Programmes</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Thiruvalla, Kerala<br/>India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@frankfuteroverseas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 bg-white/5 rounded-xl overflow-hidden relative group">
             {/* Placeholder for map - using a stylized div */}
             <div className="absolute inset-0 flex items-center justify-center bg-[#e5e3df] text-primary/50">
               <MapPin className="w-8 h-8 opacity-50" />
             </div>
             {/* Note: In a real app, an iframe embed of Google Maps would go here */}
             <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Frankfuter Overseas. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-primary px-3 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
          <span className="absolute top-1/2 -right-2 -translate-y-1/2 border-[6px] border-transparent border-l-white"></span>
        </span>
      </a>
    </div>
  );
}
