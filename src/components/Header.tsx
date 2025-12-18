import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Zap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/#Hero" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "CV", href: "/cv.pdf", isCV: true },
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
  const [activeNav, setActiveNav] = useState("Home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active nav based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      // Check Hero section first (top of page)
      if (scrollPosition < 500) { // Adjust this threshold as needed
        setActiveNav("Home");
        return;
      }
      
      // Check other sections
      const sections = navigation
        .filter(nav => nav.href.includes('#') && nav.name !== "Home")
        .map(nav => ({
          name: nav.name,
          id: nav.href.replace('/#', '')
        }));
      
      sections.forEach(({ name, id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(name);
          }
        }
      });
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

  const handleNavClick = (name: string, href: string) => {
    setActiveNav(name);
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (id === "Hero") {
        // Scroll to top for Hero section
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with animated deer - Now properly scrolls to Hero */}
          <motion.div
            className="flex items-center gap-3 group cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick("Home", "/#Hero")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNavClick("Home", "/#Hero");
              }
            }}
          >
            <motion.div
              className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-xl relative z-10">🦌</span>
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors pointer-events-none"
                initial={false}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-lg relative z-10">Cawle.jr</span>
              <div className="h-0.5 w-8 bg-gradient-to-r from-gray-400 to-transparent group-hover:w-full transition-all duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Desktop Navigation - Clean & Beautiful */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation Items with beautiful underlines */}
            <div className="flex items-center space-x-2">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {item.isCV ? (
                    // CV Link (external download)
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      onClick={() => setActiveNav(item.name)}
                      className={cn(
                        "relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2",
                        activeNav === item.name
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                      )}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
                      {activeNav === item.name && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg pointer-events-none"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Hover background */}
                      {hoveredNav === item.name && activeNav !== item.name && (
                        <motion.div
                          className="absolute inset-0 bg-gray-50 dark:bg-gray-800 rounded-lg pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {item.name}
                        <span className="text-xs px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                          ↓
                        </span>
                      </span>
                      
                      {/* Beautiful animated underline for CV */}
                      {activeNav === item.name && (
                        <motion.div
                          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full pointer-events-none"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3, type: "spring" }}
                        />
                      )}
                      
                      {/* Hover underline for CV */}
                      {hoveredNav === item.name && activeNav !== item.name && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400 rounded-full pointer-events-none"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                        />
                      )}
                    </motion.a>
                  ) : (
                    // Internal navigation items
                    <motion.button
                      onClick={() => handleNavClick(item.name, item.href)}
                      className={cn(
                        "relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
                        activeNav === item.name
                          ? `text-gray-900 dark:text-white`
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      )}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
                      {activeNav === item.name && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg pointer-events-none"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Hover background */}
                      {hoveredNav === item.name && activeNav !== item.name && (
                        <motion.div
                          className="absolute inset-0 bg-gray-50 dark:bg-gray-800 rounded-lg pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      
                      <span className="relative z-10 flex items-center gap-2">
                        {item.name}
                      </span>
                      
                      {/* Beautiful animated underline for active state */}
                      {activeNav === item.name && (
                        <motion.div
                          className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${getNavColor(item.name)} rounded-full pointer-events-none`}
                          initial={{ scaleX: 0 }}
                          animate={{ 
                            scaleX: 1,
                            boxShadow: "0 0 8px rgba(var(--color-primary), 0.5)"
                          }}
                          transition={{ duration: 0.3, type: "spring" }}
                        />
                      )}
                      
                      {/* Hover underline */}
                      {hoveredNav === item.name && activeNav !== item.name && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400 rounded-full pointer-events-none"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                        />
                      )}
                    </motion.button>
                  )}
                </div>
              ))}
            </div>

            {/* Vertical Separator */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent pointer-events-none" />

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="relative z-10 block">
                      <Icon className="w-4 h-4" />
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Hire Me Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                onClick={() => handleNavClick("Contact", "/#contact")}
                className="relative overflow-hidden group bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white shadow-sm hover:shadow-md rounded-lg px-6 py-2.5"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
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

            {/* Dark Mode Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 relative z-10"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? "dark" : "light"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {darkMode ? (
                      <Sun className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Moon className="h-4 w-4 text-gray-600" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg relative z-10"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg relative z-10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - FIXED */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden relative z-50"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="mt-4 py-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg"
              >
                {/* Mobile Navigation Items - FIXED */}
                <div className="space-y-1 px-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="relative"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.isCV ? (
                        // CV Link (external download) - FIXED
                        <motion.a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          onClick={() => {
                            setActiveNav(item.name);
                            setMobileMenuOpen(false);
                          }}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all relative",
                            activeNav === item.name
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                          )}
                        >
                          {/* Active background for mobile */}
                          {activeNav === item.name && (
                            <motion.div
                              className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                          
                          <span className="relative z-10 flex items-center gap-3">
                            <FileText className="w-4 h-4" />
                            {item.name}
                            <span className="ml-auto text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full">
                              ↓
                            </span>
                          </span>
                        </motion.a>
                      ) : (
                        // Internal navigation items - FIXED
                        <motion.button
                          onClick={() => handleNavClick(item.name, item.href)}
                          className={cn(
                            "relative w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all",
                            activeNav === item.name
                              ? "text-gray-900 dark:text-white"
                              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                          )}
                        >
                          {/* Active background for mobile */}
                          {activeNav === item.name && (
                            <motion.div
                              className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                          
                          <span className="relative z-10 block">
                            {item.name}
                          </span>
                          
                          {activeNav === item.name && (
                            <motion.div
                              className={`absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r ${getNavColor(item.name)} rounded-b-lg pointer-events-none`}
                              layoutId="mobileActiveUnderline"
                            />
                          )}
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-4 px-4 py-6 border-t border-gray-100 dark:border-gray-800 mt-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <span className="relative z-10 block">
                          <Icon className="w-5 h-5" />
                        </span>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile Hire Me Button */}
                <div className="px-4 py-3">
                  <button 
                    onClick={() => {
                      handleNavClick("Contact", "/#contact");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-lg py-3 shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-red-700 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                    <span className="relative z-10 flex items-center justify-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Hire Me
                    </span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};