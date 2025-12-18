import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Sparkles, 
  Zap, 
  MessageCircle,
  CheckCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Submit to Getform
      const response = await fetch("https://getform.io/f/broxyyza", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        
        // Reset form
        form.reset();
        setIsSubmitted(true);
        
        // Reset submission state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "❌ Failed to Send",
        description: "Please try again or contact me directly at abdullahi.ali@student.aiu.edu.my",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdullahi.ali@student.aiu.edu.my",
      href: "mailto:abdullahi.ali@student.aiu.edu.my",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+60 11-7011 3094",
      href: "tel:+601170113094",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Alor Setar, Kedah, Malaysia",
      href: "#",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated Background - Matching Hero & About */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Interactive Mouse Trail */}
        <motion.div
          className="absolute w-60 h-60 bg-gradient-to-r from-rose-500/5 to-red-500/5 rounded-full blur-xl pointer-events-none"
          animate={{
            x: mousePosition.x - 120,
            y: mousePosition.y - 120,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        />

        {/* Floating Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.5, 0.1],
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
            <MessageCircle className="w-2 h-2" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/20 dark:to-red-900/20 border border-rose-200 dark:border-rose-800">
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
                GET IN TOUCH
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to create something amazing? Let's discuss your project ideas!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label !== "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group block"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-lg text-gray-900 dark:text-white mb-1">{info.label}</p>
                          <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="text-gray-400"
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Response Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-rose-500 to-red-500">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Response</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      I typically respond within 24 hours. For urgent matters, feel free to call or text directly!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Form Container */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative p-1 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500"
              >
                <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm">
                  {/* Normal HTML form with action */}
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Hidden iframe for form submission (fallback) */}
                    <iframe 
                      name="contact-frame" 
                      style={{ display: "none" }} 
                      title="Contact form submission" 
                    />
                    
                    {/* Honeypot for spam */}
                    <input 
                      type="hidden" 
                      name="_gotcha" 
                      style={{ display: "none" }} 
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Name *
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="John Doe" 
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-colors"
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          placeholder="john@example.com" 
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-colors"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject *
                      </label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="Project Inquiry" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Tell me about your project..." 
                        rows={5} 
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-rose-500 dark:focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-colors resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-4"
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </div>
                        ) : isSubmitted ? (
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Message Sent!
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                      
                      {/* Success message */}
                      {isSubmitted && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-sm text-emerald-600 dark:text-emerald-400 mt-3"
                        >
                          ✓ Message sent successfully! You can send another message.
                        </motion.p>
                      )}
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};