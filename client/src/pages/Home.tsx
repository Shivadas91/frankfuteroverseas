import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Languages,
  Home as HomeIcon,
  Plane,
  Globe,
  MessageCircle,
  Users,
  CheckCircle2
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import heroImg from "@/assets/images/hero.jpg";

// Real imported assets
import abiImg from "@assets/abi_1772005944180.jpg";
import ajayImg from "@assets/ajay_1772005944182.jpg";
import alanImg from "@assets/alan__1772005944182.jpg";
import chandyImg from "@assets/Chandy_1772005944183.jpg";
import logoImg from "@assets/Blue_Gradient_Modern_Professional_Service_Health_Instagram_Pos_1772005944183.jpg";
import studyAbroadBanner from "@assets/studyabroad-banner_1772016186712.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { 
      title: "Study Abroad Guidance", 
      description: "Expert counseling for your academic journey.", 
      icon: <GraduationCap className="w-8 h-8" />, 
      span: "col-span-1 md:col-span-2",
      type: "dialog",
      dialogContent: "Comprehensive guidance covering university selection, course mapping, application strategies, and scholarship opportunities tailored to your academic background and career aspirations."
    },
    { 
      title: "German Language", 
      description: "Master the language with certified trainers.", 
      icon: <Languages className="w-8 h-8" />, 
      span: "col-span-1",
      type: "link",
      href: "/language-training"
    },
    { 
      title: "Accommodation", 
      description: "Find the perfect home away from home.", 
      icon: <HomeIcon className="w-8 h-8" />, 
      span: "col-span-1",
      type: "dialog",
      dialogContent: "End-to-end support for finding secure, comfortable student housing and navigating travel logistics, flight bookings, and initial settling-in procedures."
    },
    { 
      title: "Visa Assistance", 
      description: "Smooth and hassle-free visa processing.", 
      icon: <Plane className="w-8 h-8" />, 
      span: "col-span-1 md:col-span-2",
      type: "dialog",
      dialogContent: "Navigating the student visa process can be complex. Our experts provide step-by-step guidance on document preparation, financial proofs, interview coaching, and application submission to ensure a hassle-free visa approval."
    },
  ];

  const successStories = [
    { name: "Abi Varghese", details: "Summer Intake 2025", img: abiImg },
    { name: "Ajay MG", details: "Summer Intake 2025", img: ajayImg },
    { name: "Alan Raj", details: "Summer Intake 2025", img: alanImg },
    { name: "Leya Chandy", details: "Summer Intake 2025", img: chandyImg },
  ];

  const navLinks = [
    { name: "Home", href: "#home", external: false },
    { name: "Our Programmes", href: "/programmes", external: false },
    { name: "Language Academy", href: "https://www.instagram.com/neospeak_akademie/?hl=en", external: true },
    { name: "Testimonials", href: "#testimonials", external: false },
    { name: "Contact Us", href: "#contact", external: false },
  ];

  return (
    <div className="min-h-screen font-sans bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-primary">
      {/* GLASSMORPHISM HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-white/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Frankfuter Overseas Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-md shadow-sm"
            />
            <div className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors leading-none ${isScrolled ? "text-primary" : "text-white"}`}>
              Frankfuter
              <span className="block text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-accent font-bold mt-1">
                Overseas
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              item.external || item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className={`font-medium text-sm transition-all hover:text-accent relative group ${
                    isScrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </a>
              ) : (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`font-medium text-sm transition-all hover:text-accent relative group ${
                    isScrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.instagram.com/frankfuter_overseas/?hl=en" target="_blank" rel="noreferrer" className={`transition-colors hover:text-accent ${isScrolled ? "text-primary/70" : "text-white/80"}`}><Instagram className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/company/frankfuter-overseas/" target="_blank" rel="noreferrer" className={`transition-colors hover:text-accent ${isScrolled ? "text-primary/70" : "text-white/80"}`}><Linkedin className="w-5 h-5" /></a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg flex flex-col p-6 lg:hidden gap-6 border-t border-white/20"
          >
            {navLinks.map((item) => (
              item.external || item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="font-medium text-lg text-foreground border-b border-border/50 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="font-medium text-lg text-foreground border-b border-border/50 pb-4" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/frankfuter_overseas/?hl=en" target="_blank" rel="noreferrer" className="text-primary"><Instagram className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/company/frankfuter-overseas/" target="_blank" rel="noreferrer" className="text-primary"><Linkedin className="w-6 h-6" /></a>
            </div>
          </motion.div>
        )}
      </header>

      {/* MODERN HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={studyAbroadBanner} alt="Students" className="w-full h-full object-cover object-center opacity-40 grayscale-[30%]" />
          <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/80 to-primary/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl w-full text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] drop-shadow-xl">
              Empowering Dreams,<br />
              <span className="text-accent italic">Connecting Futures</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
              We provide world-class educational guidance and premium support for your successful transition to leading global universities.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#services" className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-8 py-4 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center">
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENTO BOX SERVICES */}
      <section id="services" className="py-24 md:py-32 px-4 container mx-auto max-w-6xl relative z-20 -mt-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const ServiceCardContent = (
              <div className="h-full flex flex-col items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-secondary/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="font-serif font-bold text-2xl text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="mt-auto inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors">
                  Know More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`${service.span}`}
              >
                {service.type === "dialog" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 group text-left cursor-pointer">
                        {ServiceCardContent}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white rounded-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl text-primary">{service.title}</DialogTitle>
                        <DialogDescription className="text-base text-foreground leading-relaxed pt-4">
                          {service.dialogContent}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Link href={service.href!} className="block w-full h-full bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 group">
                    {ServiceCardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
          
          <motion.div 
            variants={fadeInUp}
            className="col-span-1 md:col-span-3 bg-primary text-white p-8 md:p-12 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 md:w-2/3 mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Globe className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">Global Network</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join our growing community</h3>
              <p className="text-white/70 text-lg max-w-xl">Connect with thousands of students who have successfully built their careers abroad.</p>
            </div>
            <div className="relative z-10">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-white text-primary hover:bg-accent hover:text-primary font-bold rounded-full px-8 py-4 transition-all shadow-xl">
                    Know More
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-3xl text-primary mb-2">Paddy Boys</DialogTitle>
                    <DialogDescription className="text-base text-foreground leading-relaxed pt-2">
                      Frankfuter Overseas is more than just a consultancy — we’re a family abroad. Our exclusive student network, <span className="font-bold text-primary">Paddy Boys</span>, is a vibrant community that offers:
                      <ul className="mt-4 space-y-3">
                        {["Peer support and guidance", "Cultural integration activities", "Sports events and meetups", "Local help in settling down"].map(item => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ORGANIC FEATURE HIGHLIGHT (Why Choose Us) */}
      <section className="py-24 overflow-hidden relative bg-slate-50">
        {/* Organic Background Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[80%] aspect-[2/1] bg-secondary/20 rounded-[100%] blur-[80px] -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-3xl border border-white p-10 md:p-20 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
              Why <span className="italic text-accent">Choose Us?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              At Frankfuter Overseas, we believe in providing personalized guidance tailored to your unique aspirations. Our expert counselors have deep insights into the international education system and lifestyle, ensuring a seamless transition from your home country to your dream university.
            </p>
            <a href="#contact" className="inline-block rounded-full px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold text-base">
              Learn more about our process
            </a>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS (Large Rectangular Cards) */}
      <section id="testimonials" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Success <span className="italic text-accent">Stories</span></h2>
              <p className="text-white/70 text-lg">Hear from students who have successfully achieved their dreams and secured their visas with our comprehensive support.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-colors cursor-pointer"
                onClick={scrollPrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-colors cursor-pointer"
                onClick={scrollNext}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>

          <div className="overflow-hidden -mx-4 px-4 py-8" ref={emblaRef}>
            <div className="flex">
              {successStories.map((story, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] lg:flex-[0_0_40%] pl-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full flex flex-col group"
                  >
                    <div className="w-full relative bg-slate-100">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                      <img 
                        src={story.img} 
                        alt={story.name} 
                        className="w-full object-contain object-top max-h-[400px] bg-slate-100"
                        style={{ aspectRatio: '1/1' }}
                      />
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col bg-white text-foreground">
                      <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 relative"></span>
                        <span className="text-xs font-bold tracking-wider uppercase text-green-600">Visa Approved</span>
                      </div>
                      
                      <h4 className="font-serif font-bold text-3xl text-primary mb-2">{story.name}</h4>
                      <p className="text-accent-foreground font-semibold text-sm mb-6">{story.details}</p>
                      
                      <p className="text-muted-foreground italic font-serif leading-relaxed mt-auto">
                        "Thank you Frankfuter Overseas for the seamless processing and expert guidance. 100% recommended!"
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER & CONTACT */}
      <footer id="contact" className="bg-white pt-24 pb-12 border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="Frankfuter Overseas Logo" 
                className="w-12 h-12 object-cover rounded-md shadow-sm"
              />
              <div className="font-serif text-3xl font-bold text-primary leading-none">
                Frankfuter
                <span className="block text-xs font-sans tracking-[0.2em] uppercase text-accent font-bold mt-1">
                  Overseas
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Empowering dreams and connecting futures through world-class educational guidance and comprehensive support.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/frankfuter_overseas/?hl=en" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/frankfuter-overseas/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919207005641" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
              <h4 className="font-serif text-xl font-bold text-primary mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Door No: 1, Kurisummootil Building,<br/>
                    71/4, North, Muthoor,<br/>
                    Thiruvalla, Kerala 689107,<br/>
                    India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>+91 974 609 4794</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>+91 920 700 5641</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span>frankfuteroverseas@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border/50 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1170.825700236166!2d76.57468165561005!3d9.39002931174953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0625a6e0dfdc5b%3A0xe6bf44bc915309c9!2sFrankfuter%20Overseas!5e0!3m2!1sen!2sin!4v1709214731234!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} Frankfuter Overseas. All rights reserved.
          </p>
          <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            Designed for your future.
          </div>
        </div>
      </footer>

      {/* SLEEK FLOATING WHATSAPP WIDGET */}
      <a
        href="https://wa.me/919207005641"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="absolute right-0 bottom-0 flex items-center gap-3 bg-white pl-4 pr-1.5 py-1.5 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-500/30">
          <div className="flex flex-col items-end pr-2 overflow-hidden w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 ease-out">
            <span className="text-xs font-bold text-primary whitespace-nowrap">Chat with an Expert</span>
            <span className="text-[10px] text-green-500 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
              Online
            </span>
          </div>
          <div className="bg-[#25D366] text-white p-3.5 rounded-full flex items-center justify-center shrink-0 shadow-inner">
            <MessageCircle className="w-6 h-6" />
          </div>
        </div>
      </a>
    </div>
  );
}
