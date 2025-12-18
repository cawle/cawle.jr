import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Code,
  Server,
  Brain,
  Database,
  Sparkles,
  Rocket,
  Layout,
  Terminal,
  Globe,
  Zap,
  ArrowRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";

import carbonFootprintImg from "@/assets/projects/carbon-footprint.jpg";
import brainTumorImg from "@/assets/projects/brain-tumor.png";
import loanlyticsImg from "@/assets/projects/loanlytics.png";
import oceangateImg from "@/assets/projects/oceangate.png";
import jusmovImg from "@/assets/projects/jusmov.png";
import nlpTextImg from "@/assets/projects/nlp-text.jpg";
import digitalMarketingImg from "@/assets/projects/digital-marketing.jpg";
import dataMiningImg from "@/assets/projects/data-mining.avif";

const projects = [
  {
    title: "Carbon Footprint Calculator",
    description: "A web-based tool that calculates personal carbon emissions based on electricity usage, diet, flights, and vehicle activity, with secure authentication and interactive charts.",
    category: "Web",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "Chart.js"],
    image: carbonFootprintImg,
    gradient: "from-emerald-500 to-teal-600",
    icon: Layout,
    color: "from-emerald-500 to-teal-500",
    github: "https://lnkd.in/dayAC-3V",
    demo: null,
    featured: true,
  },
  {
    title: "Brain Tumor Diagnosis Using Deep Learning",
    description: "A deep learning–based system for classifying brain tumors from MRI scans, exploring the use of AI and medical imaging to support accurate diagnosis.",
    category: "AI",
    tags: ["Python", "Deep Learning", "Medical Imaging", "TensorFlow", "CNN"],
    image: brainTumorImg,
    gradient: "from-purple-500 to-pink-600",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/cawle/Deep-Learning-Based-Diagnosis-Brain-Tumor",
    demo: null,
    featured: true,
  },
  {
    title: "LoanLytics — AI-Powered Islamic Finance",
    description: "An AI-powered platform for Sharia-compliant loan and profit-rate calculations, combining automated AI processing with ethical financial rules.",
    category: "Web",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "AI"],
    image: loanlyticsImg,
    gradient: "from-blue-500 to-cyan-600",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    github: "https://lnkd.in/dJSCG7tS",
    demo: "https://lnkd.in/dg5z9H_2",
    featured: true,
  },
  {
    title: "OceanGate Real Estate Platform",
    description: "A complete multi-role real estate system with admin, agent, and buyer dashboards, supporting property listings, approvals, payments, and workflows.",
    category: "Web",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    image: oceangateImg,
    gradient: "from-sky-500 to-blue-600",
    icon: Server,
    color: "from-blue-500 to-indigo-500",
    github: "https://github.com/cawle/OceanGate-Real-Estate",
    demo: "https://lnkd.in/dKsnMd7C",
    featured: true,
  },
  {
    title: "JUSMOV — Movie Streaming Platform",
    description: "A modern movie platform allowing users to browse, watch, and review films, with a complete admin panel for content management.",
    category: "Web",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    image: jusmovImg,
    gradient: "from-rose-500 to-red-600",
    icon: Globe,
    color: "from-rose-500 to-red-500",
    github: "https://github.com/cawle/JUSMOV",
    demo: "https://jusmov.netlify.app",
    featured: false,
  },
  {
    title: "NLP Text Classification Lab",
    description: "A text classification project focused on spam detection and news group classification using multiple ML models, TF-IDF vectorization, and confusion matrices.",
    category: "Data",
    tags: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Machine Learning"],
    image: nlpTextImg,
    gradient: "from-amber-500 to-yellow-600",
    icon: Database,
    color: "from-amber-500 to-yellow-500",
    github: "https://github.com/cawle/NLP_Lab",
    demo: null,
    featured: false,
  },
  {
    title: "Digital Marketing Campaign Optimization",
    description: "A Machine Learning project applying Market Basket Analysis, customer segmentation, recommender systems, and anomaly detection to optimize marketing strategies.",
    category: "Data",
    tags: ["Python", "Scikit-learn", "Pandas", "K-Means", "Data Analysis"],
    image: digitalMarketingImg,
    gradient: "from-indigo-500 to-violet-600",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    github: "https://github.com/cawle/Machine-Learning-Group_Project",
    demo: null,
    featured: false,
  },
  {
    title: "Digital Marketing Data Mining Framework",
    description: "An end-to-end analytical framework integrating clustering, recommendation systems, association rule mining, and anomaly detection for marketing decisions.",
    category: "Data",
    tags: ["Python", "Scikit-learn", "Pandas", "MLxtend", "Data Mining"],
    image: dataMiningImg,
    gradient: "from-teal-500 to-green-600",
    icon: Database,
    color: "from-teal-500 to-emerald-500",
    github: "https://github.com/cawle/Data-Mining-Group-Project",
    demo: null,
    featured: false,
  },
];

const categories = ["All", "Web", "AI", "Data"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background - Matching Hero & About */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Interactive Mouse Trail */}
        <motion.div
          className="absolute w-60 h-60 bg-gradient-to-r from-emerald-500/5 to-purple-500/5 rounded-full blur-xl pointer-events-none"
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
            className="absolute text-blue-400"
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
            <Code className="w-2 h-2" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                MY WORK
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in web development, data science, and AI
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Sparkles className="w-4 h-4" />
              <span>Highlighted Work</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {project.category}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Filter className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Browse By Category</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 h-full">
                    {/* Project Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </motion.a>
                        )}
                        {project.demo ? (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </motion.a>
                        ) : project.github ? (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </motion.a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 border-0 shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${selectedProject.color}`}>
                      <selectedProject.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                          {selectedProject.category}
                        </span>
                        {selectedProject.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 flex-1 px-6 py-3 font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </motion.a>
                    )}
                    {selectedProject.demo && (
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 flex-1 px-6 py-3 font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};