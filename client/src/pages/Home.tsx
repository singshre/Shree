import { motion } from "framer-motion";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </motion.main>
      <footer className="bg-primary/5 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shree Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
