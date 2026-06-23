import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import logoImg from "@assets/Untitled design (1).jpg";

export default function Programmes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="bg-white border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Frankfurter Overseas logo" className="h-10 w-[108px] object-contain shrink-0" />
            <div className="font-serif text-xl font-bold text-primary">Frankfurter Overseas</div>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Programmes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support tailored to accelerate your career and academic journey abroad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Expert Guidance</h3>
            <p className="text-muted-foreground mb-6">
              Personalized counseling to help you choose the right university and course tailored to your academic background and career goals.
            </p>
            <ul className="space-y-3">
              {['University Selection', 'Profile Evaluation', 'Application Strategy'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Career Support</h3>
            <p className="text-muted-foreground mb-6">
              End-to-end assistance ensuring you not only secure admission but also prepare for part-time and full-time career opportunities.
            </p>
            <ul className="space-y-3">
              {['Resume Building', 'Interview Prep', 'Internship Guidance'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Language Academy</h3>
            <p className="text-muted-foreground mb-6">
              Master foreign languages with Neo Speak Language Academy to ensure you meet all proficiency requirements for your studies or work abroad.
            </p>
            <ul className="space-y-3">
              {['Goethe-Zertifikat Prep', 'Native Trainers', 'Flexible Batches'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
