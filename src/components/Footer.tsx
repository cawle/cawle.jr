import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Zap, FileText, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Github, href: "https://github.com/cawle", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:abdullahi.ali@student.aiu.edu.my", label: "Email" },
];

const footerNavigation = [
  { name: "Home", href: "/#Hero" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "CV", href: "/cv.pdf", isCV: true },
  { name: "Contact", href: "/#contact" },
];

export const Footer = () => {
  const getNavColor = (name: string) => {
    switch(name) {
      case "Home": return "from-blue-500 to-cyan-500";
      case "About": return "from-purple-500 to-pink-500";
      case "Projects": return "from-orange-500 to-yellow-500";
      case "CV": return "from-emerald-500 to-teal-500";
      case "Contact": return "from-rose-500 to-red-500";
      default: return "from-blue-500 to-purple-500";
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (id === "Hero") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800">
      {/* Animated gradient border top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Logo Section - Matches Header */}
          <motion.div
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick("/#Hero")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNavClick("/#Hero");
              }
            }}
          >
            <motion.div
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-2xl">🦌</span>
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors"
                initial={false}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-xl">Cawle.jr</span>
              <div className="h-0.5 w-10 bg-gradient-to-r from-gray-400 to-transparent group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>

          {/* Navigation Links - Consistent with Header */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {footerNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.isCV ? (
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className={cn(
                      "relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2",
                      "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {item.name}
                      <span className="text-xs px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                        ↓
                      </span>
                    </span>
                  </motion.a>
                ) : (
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
                      "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover underline */}
                    <motion.div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r ${getNavColor(item.name)} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          {/* Social Links - Enhanced with Header Style */}
          <div className="flex items-center gap-2">
            {/* Vertical Separator */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mr-2" />
            
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Hire Me Button - Consistent with Header */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              onClick={() => handleNavClick("/#contact")}
              className="relative overflow-hidden group bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white shadow-sm hover:shadow-md rounded-lg px-6 py-2.5"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
                >
                  <Zap className="w-4 h-4" />
                </motion.span>
                Hire Me
              </span>
            </button>
          </motion.div>

          {/* Copyright with Heart Animation */}
          <motion.div 
            className="text-center text-sm text-gray-500 dark:text-gray-400"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 justify-center">
              <span>© {new Date().getFullYear()} Cawle.jr</span>
              <motion.span
                className="flex items-center gap-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span>by Abdullahi Mohamed Ali</span>
              </motion.span>
            </div>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
              Crafted with passion and attention to detail
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to top
          </motion.button>
        </div>

        {/* Signature Line */}
        <motion.div 
          className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Building the future, one pixel at a time
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};