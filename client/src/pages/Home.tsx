import { useState, useEffect } from "react";
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
  GraduationCap,
  Languages,
  Home as HomeIcon,
  Plane,
  Globe,
  MessageCircle,
  Users,
  CheckCircle2
} from "lucide-react";

import heroImg from "@/assets/images/hero.jpg";

// Real imported assets
import successImg1 from "@assets/frank neww test 15@5x.jpg";
import successImg2 from "@assets/IMG-20260619-WA0002.jpg";
import successImg3 from "@assets/IMG-20260619-WA0003.jpg";
import successImg4 from "@assets/IMG-20260619-WA0008.jpg";
import successImg5 from "@assets/IMG-20260619-WA0009.jpg";
import successImg6 from "@assets/Photo from Shiva.jpg";
import logoImg from "@assets/logo.png.png";
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
      title: "German Language studies By Neo Speak Language Akademie", 
      description: "Premium German preparation with expert-led sessions, exam strategy, and practical speaking support.", 
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
    { img: successImg1, alt: "Frankfurter Overseas success story 1" },
    { img: successImg2, alt: "Frankfurter Overseas success story 2" },
    { img: successImg3, alt: "Frankfurter Overseas success story 3" },
    { img: successImg4, alt: "Frankfurter Overseas success story 4" },
    { img: successImg5, alt: "Frankfurter Overseas success story 5" },
    { img: successImg6, alt: "Frankfurter Overseas success story 6" },
  ];

  const navLinks = [
    { name: "Home", href: "#home", external: false },
    { name: "About", href: "#about", external: false },
    { name: "Our Programmes", href: "/programmes", external: false },
    { name: "Testimonials", href: "#testimonials", external: false },
    { name: "Contact", href: "#contact", external: false },
  ];

  return (
    <div className="min-h-screen font-sans bg-background relative overflow-hidden text-foreground selection:bg-accent selection:text-primary">
      {/* GLASSMORPHISM HEADER */}
      <header
        className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white shadow-sm"
      >
        <div className="container mx-auto px-6 md:px-12 min-h-[96px] md:min-h-[104px] flex justify-between items-center gap-6">
          <a href="#home" className="flex items-center" aria-label="Go to homepage">
            <img 
              src={logoImg} 
              alt="Frankfurter Overseas Logo" 
              className="max-h-[80px] w-auto object-contain shrink-0"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              item.external || item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className={`font-medium text-sm transition-all hover:text-accent relative group ${
                    "text-primary"
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
                    "text-primary"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.instagram.com/frankfuter_overseas/?hl=en" target="_blank" rel="noreferrer" className={`transition-colors hover:text-accent text-primary/70`}><Instagram className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/company/frankfuter-overseas/" target="_blank" rel="noreferrer" className={`transition-colors hover:text-accent text-primary/70`}><Linkedin className="w-5 h-5" /></a>
          </div>

          <button
            className="lg:hidden p-2 transition-colors text-primary"
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
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-36 md:pt-40 mt-20 md:mt-24">
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
              {/* Button Removed as requested */}
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
              <p className="text-accent font-semibold tracking-[0.35em] uppercase text-xs md:text-sm mb-5">Course Finder</p>
              <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">Explore over 2500 courses across Germany and Austria Through our Frankfurteroverseas Course Finder</h3>
              <a 
                href="https://courses.frankfurteroverseas.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-accent hover:text-primary font-bold rounded-full px-8 py-4 md:px-10 md:py-5 transition-all hover:scale-105 shadow-xl"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ORGANIC FEATURE HIGHLIGHT (Why Choose Us) */}
      <section id="about" className="py-24 overflow-hidden relative bg-slate-50">
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
              At Frankfurter Overseas, we believe in providing personalized guidance tailored to your unique aspirations. Our expert counselors have deep insights into the international education system and lifestyle, ensuring a seamless transition from your home country to your dream university.
            </p>
            <a href="#contact" className="inline-block rounded-full px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold text-base">
              Learn more about our process
            </a>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS (Professional Grid) */}
      <section id="testimonials" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Success <span className="italic text-accent">Stories</span></h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">A polished gallery of recent student wins, showcasing the real journeys behind Frankfurter Overseas success stories.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {successStories.map((story, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-24px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <img src={story.img} alt={story.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary via-primary/65 to-transparent">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-accent"></span>Success Story
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER & CONTACT */}
      <footer id="contact" className="bg-[#F9F9F9] pt-24 pb-12 border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center mb-5">
              <img 
                src={logoImg} 
                alt="Frankfurter Overseas Logo" 
                className="max-w-[200px] h-auto w-auto object-contain shrink-0"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Empowering dreams and connecting futures through world-class educational guidance and comprehensive support.
            </p>
            <div className="flex items-center justify-start gap-4 max-w-sm">
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
            © {new Date().getFullYear()} Frankfurter Overseas. All rights reserved.
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
