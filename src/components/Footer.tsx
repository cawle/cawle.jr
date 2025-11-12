import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/cawle", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:abdullahi.ali@student.aiu.edu.my", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="text-4xl">🦌</span>
              <span className="gradient-text">Cawle.jr</span>
            </motion.div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-primary fill-current" /> by Abdullahi Mohamed Ali
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Cawle.jr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
