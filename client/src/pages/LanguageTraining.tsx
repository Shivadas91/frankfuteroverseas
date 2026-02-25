import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, MessageSquare, Award } from "lucide-react";
import logoImg from "@assets/Blue_Gradient_Modern_Professional_Service_Health_Instagram_Pos_1772005944183.jpg";

export default function LanguageTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-md" />
              <div className="font-serif text-xl font-bold text-primary">Frankfuter Overseas</div>
            </a>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-border text-center">
          <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary">
            <BookOpen className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">German Language Training</h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Master the German language with certified trainers from Neospeak Akademie. We provide comprehensive courses from A1 to B2 levels, focusing on speaking, listening, reading, and writing to ensure you are fully prepared for your studies and life in Germany.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="p-6 bg-slate-50 rounded-xl border border-border">
              <MessageSquare className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg text-primary mb-2">Interactive Sessions</h3>
              <p className="text-sm text-muted-foreground">Engage in live conversations and practical exercises to build fluency quickly.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-border">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg text-primary mb-2">Exam Preparation</h3>
              <p className="text-sm text-muted-foreground">Targeted practice for Goethe and TestDaF certifications with high success rates.</p>
            </div>
          </div>

          <a href="https://www.instagram.com/neospeak_akademie/?hl=en" target="_blank" rel="noreferrer" className="inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-10 py-6 text-lg shadow-lg hover:scale-105 transition-all">
              Know More on Neospeak
            </Button>
          </a>
        </motion.div>
      </main>
    </div>
  );
}
