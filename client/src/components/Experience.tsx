import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiBarclays } from "react-icons/si";
import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "HPE",
    role: "Cloud Developer",
    period: "March 2025 - Present",
    description: [
      "Leading cloud infrastructure development and optimization",
      "Implementing DevOps practices and CI/CD pipelines",
      "Building scalable microservices architecture",
      "Managing cloud resources and optimization",
    ],
    icon: Building2,
  },
  {
    company: "Barclays",
    role: "Assistant Vice President (AVP)",
    period: "July 2024 - Feb 2025",
    description: [
      "Application support and management for Salesforce application",
      "Merchant onboarding and reporting for applications",
      "Supporting Barclaycard Business Online Service (BBOS) and Salesforce",
      "Enhance monitoring and automation using AppDynamics and ITRS",
      "Deploying and managing red hat OpenShift applications",
    ],
    icon: SiBarclays,
  },
  {
    company: "Barclays",
    role: "Application Support Specialist",
    period: "July 2021 - 2024",
    description: [
      "Support Charles River IMS application for investment management",
      "Production environment support and issue resolution",
      "Working with Portfolio Managers, Traders, and Private bankers",
      "Automating manual activities using various scripting languages",
      "Infrastructure monitoring and management",
    ],
    icon: SiBarclays,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground mb-2">
                        {exp.company} • {exp.period}
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}