import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code, Briefcase, Award } from "lucide-react";

const skills = {
  technical: [
    { name: "HTML", level: 95 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "PHP", level: 82 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
  ],
  soft: [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 95 },
    { name: "Problem Solving", level: 92 },
    { name: "Creativity", level: 88 },
  ],
};

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-primary font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
};

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and driven to create innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-50" />
              <img
                src="https://i.postimg.cc/hj2pfPbg/IMG-20221103-WA0020.jpg"
                alt="Abdullahi Mohamed Ali"
                className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-background"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Bachelor of Computer Science (Data Science) at Albukhary International University, 
                    focusing on cutting-edge technologies and practical applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    Full-stack developer with expertise in modern web technologies, 
                    specializing in React, Next.js, and data-driven applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-lime/10 text-accent-lime">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Focus</h3>
                  <p className="text-muted-foreground">
                    Building scalable web applications, data visualization, and creating 
                    intuitive user experiences with modern design principles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {skills.technical.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {skills.soft.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1 + 0.4} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
