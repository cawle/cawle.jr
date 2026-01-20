import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles, Rocket, MessageCircle, Star, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile-image.png";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#29c4d0"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const socialLinks = [
  { icon: Github, href: "https://github.com/cawle", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:abdullahi.ali@student.aiu.edu.my", label: "Email" },
  { icon: Phone, href: "tel:+601170113094", label: "Phone" },
];

export const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="Hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        {/* Enhanced Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/25 to-primary/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Interactive Mouse Trail */}
        <motion.div
          className="absolute w-60 h-60 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl pointer-events-none"
          animate={{
            x: mousePosition.x - 120,
            y: mousePosition.y - 120,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        />

        {/* Floating Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-2 h-2 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-6"
          >
            {/* Enhanced Welcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 p-2 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-lg font-medium text-primary">Hi, I'm</span>
            </motion.div>

            {/* Enhanced Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Abdullahi{" "}
              <motion.span 
                className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]"
                whileHover={{ scale: 1.02 }}
              >
                Mohamed Ali
              </motion.span>
            </motion.h1>

            {/* Enhanced Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            >
              Aspiring <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Software Engineer</span> |{" "}
              <span className="text-secondary font-semibold bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">Data Science Student</span> |{" "}
              Full-Stack Developer
            </motion.p>

            {/* Enhanced University */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-lg text-muted-foreground p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
            >
              Computer Science Student at Albukhary International University
            </motion.p>

            {/* Enhanced Action Buttons - CV ADDED HERE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex flex-wrap gap-3"
            >
              {/* View My Work Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gap-2 shadow-lg hover:shadow-xl relative group">
                  <a href="#projects">
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Rocket className="w-4 h-4" />
                    </motion.div>
                    View My Work
                    <motion.span
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </a>
                </Button>
              </motion.div>

              {/* Get In Touch Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="gap-2 border-2 border-primary/30 hover:border-primary">
                  <a href="#contact">
                    <MessageCircle className="w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
              </motion.div>

              {/* CV Button - ADDED */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border-emerald-500/30 hover:border-emerald-500 text-emerald-700 dark:text-emerald-400"
                >
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download>
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FileText className="w-4 h-4" />
                    </motion.div>
                    Download CV
                    <motion.span
                      className="text-xs ml-1 opacity-70"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -3, rotate: 12 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-3 rounded-xl bg-card hover:bg-primary/10 border border-border transition-all shadow-md hover:shadow-lg group"
                  title={social.label}
                >
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <social.icon className="w-5 h-5 relative z-10" />
                  
                  {/* Particle on Hover */}
                  <motion.span
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="flex flex-col gap-2 pt-4 text-sm text-muted-foreground"
            >
              <motion.div 
                className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                </motion.div>
                <span>Jln Tun Razak, Bandar Alor Setar, 05200 Alor Setar, Kedah</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Profile Image - 3D Background REMOVED */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-[600px] relative flex items-center justify-center"
          >
            {/* Profile Image - Now without 3D background */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10"
            >
              <motion.img
                src={profileImage}
                alt="Abdullahi Mohamed Ali"
                className="w-[600px] lg:w-[800px] h-auto object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Floating particles effect - KEPT */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
            />
            
            {/* Scroll Indicator Glow */}
            <motion.div
              className="absolute inset-0 bg-primary rounded-full blur-sm opacity-0 hover:opacity-20"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};