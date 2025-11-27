import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/cawle", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:abdullahi.ali@student.aiu.edu.my", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-16 border-t-4 border-primary/30 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex items-center gap-3 text-3xl font-black relative"
            >
              <motion.span 
                className="text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🦌
              </motion.span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                Cawle.jr
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border-2 border-primary/40 hover:border-primary transition-all shadow-lg hover:shadow-primary/50"
                  title={social.label}
                >
                  <social.icon className="w-6 h-6 relative z-10" />
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 hover:from-primary/20 hover:to-accent/20 blur-xl transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground space-y-3">
            <motion.p 
              className="flex items-center gap-2 justify-center text-base font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Made with 
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-5 h-5 text-primary fill-current" />
              </motion.span>
              by 
              <span className="text-foreground font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Abdullahi Mohamed Ali
              </span>
            </motion.p>
            <p className="font-medium">
              © {new Date().getFullYear()} Cawle.jr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
