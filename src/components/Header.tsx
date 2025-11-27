import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/cawle" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/" },
  { name: "Email", icon: Mail, href: "mailto:abdullahi.ali@student.aiu.edu.my" },
];

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3 text-2xl font-black relative"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.span 
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🦌
            </motion.span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
              Cawle.jr
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all group font-semibold text-lg"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] scale-x-0 group-hover:scale-x-100 transition-all duration-500 group-hover:animate-[shimmer_2s_ease-in-out_infinite] rounded-full" />
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 blur-sm scale-x-0 group-hover:scale-x-100 transition-all duration-500 rounded-full" />
              </motion.a>
            ))}
            
            <div className="flex items-center gap-3 ml-2 pl-6 border-l-2 border-border/50">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-foreground hover:text-primary hover:bg-primary/20 transition-all border border-primary/20 hover:border-primary"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          className="overflow-hidden md:hidden"
        >
          <div className="flex flex-col gap-4 py-6 px-4 bg-background/70 backdrop-blur-md rounded-lg mt-4 border border-border/30 shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative text-xl text-foreground hover:text-primary transition-all hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 px-6 py-4 rounded-xl font-bold border-b-2 border-transparent hover:border-primary"
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-border/30">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-all p-2 rounded-md hover:bg-primary/10"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
