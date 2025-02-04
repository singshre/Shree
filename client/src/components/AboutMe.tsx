import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative max-w-md mx-auto">
            <Card>
              <CardContent className="p-4">
                <img
                  src="/profile.png"
                  alt="Shree Singh"
                  className="w-full h-auto rounded-lg max-w-[300px] mx-auto"
                />
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/shreesingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shreesingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I have proven expertise in Build and Release/Software Configuration Management, leveraging tools 
              like ITRS Geneos, APP Dynamics, Unix/Linux, MS-SQL/Oracle, AWS, Autosys, and Shell Scripting. 
              My focus is on creating efficient, automated solutions while maintaining high service quality 
              and customer satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Specializing in cloud infrastructure development, CI/CD implementation, and microservices architecture,
              I am passionate about optimizing cloud resources and delivering scalable solutions that drive business value.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}