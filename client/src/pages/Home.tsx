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
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Languages,
  Home as HomeIcon,
  Plane,
  Globe,
  MessageCircle
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import heroImg from "@/assets/images/hero.jpg";
import success1 from "@/assets/images/success_1.jpg";
import success2 from "@/assets/images/success_2.jpg";
import success3 from "@/assets/images/success_3.jpg";

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
    { name: "Alan Raj", details: "Summer Intake 2025", img: success1 },
    { name: "Sarah Thomas", details: "Winter Intake 2024", img: success2 },
    { name: "Kevin Matthew", details: "Summer Intake 2025", img: success3 },
  ];

  return (
    <div className="min-h-screen font-sans bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-primary">
      {/* GLASSMORPHISM HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-sm border-white/20 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              Frankfuter
              <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-accent font-bold">
                Overseas
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {["Home", "Our Programmes", "More"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`font-medium text-sm transition-all hover:text-accent relative group ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className={`transition-colors hover:text-accent ${isScrolled ? "text-primary/70" : "text-white/80"}`}><Linkedin className="w-5 h-5" /></a>
              <a href="#" className={`transition-colors hover:text-accent ${isScrolled ? "text-primary/70" : "text-white/80"}`}><Instagram className="w-5 h-5" /></a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-7 shadow-sm transition-transform hover:scale-105">
              Sign Up
            </Button>
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
            {["Home", "Our Programmes", "More"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-medium text-lg text-foreground border-b border-border/50 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full bg-accent text-primary font-bold rounded-full py-6 text-lg shadow-sm">Sign Up</Button>
          </motion.div>
        )}
      </header>

      {/* MODERN HERO SECTION (Centered with Glassmorphism) */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Students" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl w-full bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-6">
              Your Journey Begins Here
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Empowering Dreams,<br />
              <span className="text-accent italic">Connecting Futures</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              We provide world-class educational guidance and premium support for your successful transition to Germany.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-8 py-6 text-lg transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,204,153,0.5)]">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
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
              <Button className="bg-white text-primary hover:bg-accent hover:text-primary font-bold rounded-full px-8 py-6 transition-all shadow-xl">
                Join Community
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ORGANIC FEATURE HIGHLIGHT (Why Choose Us) */}
      <section className="py-24 overflow-hidden relative">
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
              At Frankfuter Overseas, we believe in providing personalized guidance tailored to your unique aspirations. Our expert counselors have deep insights into the German education system and lifestyle, ensuring a seamless transition from your home country to your dream university.
            </p>
            <Button variant="outline" className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold text-base">
              Learn more about our process
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PILL-STYLE PROGRAMMES */}
      <section id="our-programmes" className="py-24 bg-white">
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
              Explore tailored opportunities designed to accelerate your career and academic journey in Germany.
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
                <a href="#" className="group relative block overflow-hidden rounded-full bg-background border border-border px-8 py-5 transition-all hover:border-accent hover:shadow-lg hover:-translate-y-1">
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

      {/* MODERN SUCCESS STORIES (Social Proof) */}
      <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
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
              <p className="text-white/70 text-lg">Join the hundreds of students who have successfully transitioned to their dream careers through our guided programs.</p>
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

          <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
            <div className="flex">
              {successStories.map((story, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_40%] lg:flex-[0_0_30%] pl-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-colors"
                  >
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img 
                        src={story.img} 
                        alt={story.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="flex h-2 w-2 rounded-full bg-accent relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          </span>
                          <span className="text-xs font-bold tracking-wider uppercase text-white/90">Visa Approved</span>
                        </div>
                        <h4 className="font-serif font-bold text-3xl text-white mb-1">{story.name}</h4>
                        <p className="text-accent font-medium">{story.details}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="bg-background pt-24 pb-12 border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="font-serif text-3xl font-bold text-primary">
              Frankfuter
              <span className="block text-xs font-sans tracking-[0.2em] uppercase text-accent font-bold">
                Overseas
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Empowering dreams and connecting futures through world-class educational guidance and comprehensive support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-accent hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-accent hover:border-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif text-lg font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Programmes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
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

          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-primary mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Thiruvalla, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@frankfuteroverseas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} Frankfuter Overseas. All rights reserved.
          </p>
          <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            Designed with <span className="text-red-500">♥</span> for your future.
          </div>
        </div>
      </footer>

      {/* SLEEK FLOATING WHATSAPP WIDGET */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="absolute right-0 bottom-0 flex items-center gap-3 bg-white pl-4 pr-1.5 py-1.5 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-500/30">
          <div className="flex flex-col items-end pr-2 overflow-hidden w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 ease-out">
            <span className="text-xs font-bold text-primary whitespace-nowrap">Chat with us</span>
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
