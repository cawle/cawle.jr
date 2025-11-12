import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio with 3D animations and smooth transitions using React Three Fiber and Framer Motion.",
    category: "Web",
    tags: ["React", "Three.js", "Tailwind", "TypeScript"],
    gradient: "from-primary to-accent-blue",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets with real-time charts and insights.",
    category: "Data",
    tags: ["Python", "React", "D3.js", "SQL"],
    gradient: "from-secondary to-accent-pink",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
    category: "Web",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    gradient: "from-accent-lime to-accent-sage",
  },
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot using natural language processing for customer support automation.",
    category: "AI",
    tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
    gradient: "from-accent-blue to-primary",
  },
];

const categories = ["All", "Web", "AI", "Data", "Design"];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
        {/* Project Image/Gradient */}
        <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" size="sm" className="gap-2 flex-1">
              <Github className="w-4 h-4" />
              Code
            </Button>
            <Button size="sm" className="gap-2 flex-1">
              <ExternalLink className="w-4 h-4" />
              Demo
            </Button>
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
            A showcase of my best work in web development, data science, and AI
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
