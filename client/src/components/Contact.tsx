import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-16 bg-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:singshre@yahoo.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-5 h-5" />
                  <span>singshre@yahoo.com</span>
                </a>
                <a
                  href="tel:+919922503781"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 9922503781</span>
                </a>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/shreesingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shreesingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" {...register("name")} />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" {...register("email")} />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[120px]"
                    {...register("message")}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}