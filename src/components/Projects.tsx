import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    gradient: "from-green-500 to-emerald-600",
    github: "https://lnkd.in/dayAC-3V",
    demo: null,
  },
  {
    title: "Brain Tumor Diagnosis Using Deep Learning",
    description: "A deep learning–based system for classifying brain tumors from MRI scans, exploring the use of AI and medical imaging to support accurate diagnosis.",
    category: "AI",
    tags: ["Python", "Deep Learning", "Medical Imaging"],
    image: brainTumorImg,
    gradient: "from-purple-500 to-pink-600",
    github: "https://github.com/cawle/Deep-Learning-Based-Diagnosis-Brain-Tumor",
    demo: null,
  },
  {
    title: "LoanLytics — AI-Powered Islamic Finance",
    description: "An AI-powered platform for Sharia-compliant loan and profit-rate calculations, combining automated AI processing with ethical financial rules.",
    category: "AI",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    image: loanlyticsImg,
    gradient: "from-blue-500 to-cyan-600",
    github: "https://lnkd.in/dJSCG7tS",
    demo: "https://lnkd.in/dg5z9H_2",
  },
  {
    title: "OceanGate Real Estate Platform",
    description: "A complete multi-role real estate system with admin, agent, and buyer dashboards, supporting property listings, approvals, payments, and workflows.",
    category: "Web",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    image: oceangateImg,
    gradient: "from-sky-500 to-blue-600",
    github: "https://github.com/cawle/OceanGate-Real-Estate",
    demo: "https://lnkd.in/dKsnMd7C",
  },
  {
    title: "JUSMOV — Movie Streaming Platform",
    description: "A modern movie platform allowing users to browse, watch, and review films, with a complete admin panel for content management.",
    category: "Web",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    image: jusmovImg,
    gradient: "from-red-500 to-orange-600",
    github: "https://github.com/cawle/JUSMOV",
    demo: "https://jusmov.netlify.app",
  },
  {
    title: "NLP Text Classification Lab",
    description: "A text classification project focused on spam detection and news group classification using multiple ML models, TF-IDF vectorization, and confusion matrices.",
    category: "Data",
    tags: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    image: nlpTextImg,
    gradient: "from-amber-500 to-yellow-600",
    github: "https://github.com/cawle/NLP_Lab",
    demo: null,
  },
  {
    title: "Digital Marketing Campaign Optimization",
    description: "A data mining project applying Market Basket Analysis, customer segmentation, recommender systems, and anomaly detection to optimize marketing strategies.",
    category: "Data",
    tags: ["Python", "Scikit-learn", "Pandas", "K-Means"],
    image: digitalMarketingImg,
    gradient: "from-indigo-500 to-violet-600",
    github: "https://github.com/cawle/Machine-Learning-Group_Project",
    demo: null,
  },
  {
    title: "Digital Marketing Data Mining Framework",
    description: "An end-to-end analytical framework integrating clustering, recommendation systems, association rule mining, and anomaly detection for marketing decisions.",
    category: "Data",
    tags: ["Python", "Scikit-learn", "Pandas", "MLxtend"],
    image: dataMiningImg,
    gradient: "from-teal-500 to-green-600",
    github: "https://github.com/cawle/Data-Mining-Group-Project",
    demo: null,
  },
];

const categories = ["All", "Web", "AI", "Data"];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 card-hover h-full flex flex-col">
        {/* Project Image */}
        <div className={`h-48 relative overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ''}`}>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          />
        </div>

        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            {project.github && (
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 flex-1"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4" />
                Code
              </Button>
            )}
            {project.demo && (
              <Button 
                size="sm" 
                className="gap-2 flex-1"
                onClick={() => window.open(project.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            )}
            {!project.demo && project.github && (
              <Button 
                size="sm" 
                className="gap-2 flex-1"
                onClick={() => window.open(project.github, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                View
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in web development, data science, and AI
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
