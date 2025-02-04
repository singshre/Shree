import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Cloud Computing (AWS/Azure)", level: 90 },
  { name: "DevOps & CI/CD", level: 85 },
  { name: "Application Support", level: 92 },
  { name: "UNIX/Linux", level: 88 },
  { name: "Shell Scripting", level: 85 },
  { name: "Infrastructure Monitoring", level: 87 },
  { name: "SQL & Database Management", level: 86 },
  { name: "Python & JavaScript", level: 84 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid gap-6 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}