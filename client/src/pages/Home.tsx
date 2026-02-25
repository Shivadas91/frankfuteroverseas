import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Users
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import heroImg from "@/assets/images/hero.jpg";

// Real imported assets
import abiImg from "@assets/abi_1772005944180.jpg";
import ajayImg from "@assets/ajay_1772005944182.jpg";
import alanImg from "@assets/alan__1772005944182.jpg";
import chandyImg from "@assets/Chandy_1772005944183.jpg";
import logoImg from "@assets/Blue_Gradient_Modern_Professional_Service_Health_Instagram_Pos_1772005944183.jpg";

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
    { title: "Study Abroad Guidance", description: "Expert counseling for your academic journey.", icon: <GraduationCap className="w-8 h-8" />, span: "col-span-1 md:col-span-2" },
    { title: "German Language", description: "Master the language with certified trainers.", icon: <Languages className="w-8 h-8" />, span: "col-span-1" },
    { title: "Accommodation", description: "Find the perfect home away from home.", icon: <HomeIcon className="w-8 h-8" />, span: "col-span-1" },
    { title: "Visa Assistance", description: "Smooth and hassle-free visa processing.", icon: <Plane className="w-8 h-8" />, span: "col-span-1 md:col-span-2" },
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
    { name: "Abi Varghese", details: "Summer Intake 2025", img: abiImg },
    { name: "Ajay MG", details: "Summer Intake 2025", img: ajayImg },
    { name: "Alan Raj", details: "Summer Intake 2025", img: alanImg },
    { name: "Leya Chandy", details: "Summer Intake 2025", img: chandyImg },
  ];

  const navLinks = [
    { name: "Home", href: "#home", external: false },
    { name: "Language Academy", href: "https://www.instagram.com/neospeak_akademie/?hl=en", external: true },
    { name: "Programmes", href: "#programmes", external: false },
    { name: "Testimonials", href: "#testimonials", external: false },
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

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
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
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-7 py-2.5 shadow-sm transition-transform hover:scale-105 inline-block">
              Consult an Expert
            </a>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg flex flex-col p-6 md:hidden gap-6 border-t border-white/20"
          >
            {navLinks.map((item) => (
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
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full bg-accent text-primary font-bold rounded-full py-4 text-lg shadow-sm text-center">Consult an Expert</a>
          </motion.div>
        )}
      </header>

      {/* MODERN HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Students" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Premium Study Abroad Consultancy
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Empowering Dreams,<br />
              <span className="text-accent italic">Connecting Futures</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              We provide world-class educational guidance and premium support for your successful transition to leading global universities.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#programmes" className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-8 py-4 text-lg transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,204,153,0.5)] flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full px-8 py-4 text-lg transition-all backdrop-blur-sm flex items-center justify-center">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENTO BOX SERVICES */}
      <section className="py-24 md:py-32 px-4 container mx-auto max-w-6xl relative z-20 -mt-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 group ${service.span}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif font-bold text-2xl text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors">
                Explore service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
          
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
              <a href="#paddy-boys" className="inline-block bg-white text-primary hover:bg-accent hover:text-primary font-bold rounded-full px-8 py-4 transition-all shadow-xl">
                Join Community
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PADDY BOYS COMMUNITY SECTION */}
      <section id="paddy-boys" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 rounded-l-[100px] blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-border/50 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/30 text-primary mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                  Paddy <span className="italic text-accent">Boys</span>
                </h2>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  More than just a consultancy — we’re a family abroad.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our exclusive student network, Paddy Boys, is a vibrant community that offers everything you need to feel at home:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Peer support and guidance",
                    "Cultural integration activities",
                    "Sports events and meetups",
                    "Local help in settling down"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-primary shrink-0">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-block bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 py-4 transition-all shadow-md">
                  Contact Us
                </a>
              </div>
              
              <div className="md:w-1/2 w-full h-full min-h-[300px] bg-muted/30 rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10"></div>
                {/* Decorative representation of community */}
                <div className="grid grid-cols-2 gap-4 p-8 w-full relative z-10">
                  <div className="space-y-4">
                    <div className="h-32 bg-white rounded-2xl shadow-sm border border-border/50 animate-pulse"></div>
                    <div className="h-48 bg-white/80 rounded-2xl shadow-sm border border-border/50"></div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-40 bg-white/90 rounded-2xl shadow-sm border border-border/50"></div>
                    <div className="h-32 bg-white/60 rounded-2xl shadow-sm border border-border/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ORGANIC FEATURE HIGHLIGHT (Why Choose Us) */}
      <section className="py-24 overflow-hidden relative bg-white">
        {/* Organic Background Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[80%] aspect-[2/1] bg-secondary/20 rounded-[100%] blur-[80px] -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/60 backdrop-blur-3xl border border-white p-10 md:p-20 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
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

      {/* PILL-STYLE PROGRAMMES */}
      <section id="programmes" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Programmes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore tailored opportunities designed to accelerate your career and academic journey abroad.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {programmes.map((prog, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <a href="#" className="group relative block overflow-hidden rounded-full bg-white border border-border px-8 py-5 transition-all hover:border-accent hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-accent/10 translate-y-full transition-transform group-hover:translate-y-0"></div>
                  <div className="relative flex items-center gap-3">
                    <span className="font-serif text-xl font-bold text-primary group-hover:text-primary transition-colors">{prog}</span>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </a>
              </motion.div>
            ))}
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
                className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
                onClick={scrollPrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
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
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 space-y-8">
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
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif text-lg font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#home" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#programmes" className="hover:text-accent transition-colors">Our Programmes</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#paddy-boys" className="hover:text-accent transition-colors">Paddy Boys Community</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-primary mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-primary mb-6">Contact Us</h4>
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
