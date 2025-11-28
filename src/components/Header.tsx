import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Zap } from "lucide-react";
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
          <div className="hidden md:flex items-center gap-4">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all group font-black text-lg px-4 py-2 rounded-lg overflow-hidden"
                whileHover={{ y: -6, scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ transformOrigin: "left" }}
                />
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 blur-xl"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{item.name}</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] scale-x-0 group-hover:scale-x-100 transition-all duration-500 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                />
              </motion.a>
            ))}
            
            {/* Hire Me Button */}
            <motion.a
              href="/#contact"
              className="relative ml-2"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-75 group-hover:opacity-100"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Button 
                className="relative bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-black px-6 py-2 rounded-lg shadow-lg hover:shadow-xl border-2 border-primary/50 hover:border-primary"
              >
                <Zap className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </motion.a>
            
            <div className="flex items-center gap-3 ml-4 pl-6 border-l-2 border-border/50">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-foreground hover:text-primary hover:from-primary/20 hover:to-accent/20 transition-all border-2 border-primary/20 hover:border-primary shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 12, y: -4 }}
                    whileTap={{ scale: 0.85 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.span 
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 hover:opacity-100 blur-md"
                    />
                    <Icon className="h-5 w-5 relative z-10" />
                  </motion.a>
                );
              })}
            </div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full border-2 border-primary/30 hover:border-primary bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/20 hover:to-accent/20"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: darkMode ? 360 : 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
                </motion.div>
              </Button>
            </motion.div>
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
          <div className="flex flex-col gap-4 py-6 px-4 bg-gradient-to-br from-background/90 via-background/80 to-background/90 backdrop-blur-xl rounded-2xl mt-4 border-2 border-primary/30 shadow-2xl">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative text-xl text-foreground hover:text-primary transition-all hover:bg-gradient-to-r hover:from-primary/30 hover:to-accent/30 px-6 py-4 rounded-xl font-black border-2 border-transparent hover:border-primary shadow-md hover:shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Hire Me Button */}
            <motion.a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="relative mx-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-75" />
              <Button className="relative w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-black py-6 rounded-lg shadow-lg border-2 border-primary/50">
                <Zap className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
            </motion.a>
            
            <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t-2 border-primary/20">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-all p-3 rounded-xl hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 border-2 border-transparent hover:border-primary"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
