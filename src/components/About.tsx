import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code, Briefcase, Award, ExternalLink, Trophy, ScrollText } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import images
import hirgalSchool from "@/assets/about/hirgal-school.jpg";
import aiuLanguage from "@/assets/about/aiu-language.jpg";
import hadafRadio from "@/assets/about/hadaf-radio.jpg";
import greenPark from "@/assets/about/green-park.jpg";
import somaliStudents from "@/assets/about/somali-students.jpg";
import treasurerAward from "@/assets/about/treasurer-award.jpg";
import researchSymposium from "@/assets/about/research-symposium.jpg";
import nursingCert from "@/assets/about/nursing-cert.png";
import journalismCert from "@/assets/about/journalism-cert.png";
import wordpressCert from "@/assets/about/wordpress-cert.jpg";
import ieltsCert from "@/assets/about/ielts-cert.png";
import treasurerCert from "@/assets/about/treasurer-cert.png";
import ibmAnalyticsCert from "@/assets/about/ibm-analytics-cert.jpg";
import tableauCert from "@/assets/about/tableau-cert.jpg";
import primarySchool from "@/assets/about/primary-school.jpg";
import aiuLogo from "@/assets/about/aiu-logo.png";
import royalPalace from "@/assets/about/royal-palace.jpg";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS / Tailwind CSS", level: 88 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 55 },
  { name: "React.js", level: 65 },
  { name: "Next.js", level: 60 },
  { name: "Node.js", level: 55 },
  { name: "PHP", level: 70 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 60 },
];

const softSkills = [
  { name: "Communication", level: 80 },
  { name: "Teamwork", level: 90 },
  { name: "Problem Solving", level: 80 },
  { name: "Creativity", level: 90 },
  { name: "AI Powered", level: 99 },
];

const education = [
  {
    year: "2017",
    title: "Primary School",
    institution: "Ain Shams Primary and Secondary School (ASPASS) and Galdogob School",
    location: "Galdogob, Somalia",
    links: ["https://www.facebook.com/Ainshamsischool", "https://www.facebook.com/galdogobschool/"],
    image: primarySchool,
  },
  {
    year: "2021",
    title: "High Secondary School",
    institution: "Hirgal Primary and Secondary School",
    location: "Mogadishu, Somalia",
    link: "https://www.facebook.com/HIRGALSCHOOLS",
    image: hirgalSchool,
  },
  {
    year: "2023",
    title: "Pre-University (English | IELTS)",
    institution: "AIU Language Center",
    location: "Kedah, Malaysia",
    link: "https://www.instagram.com/aiulanguagecentre/?hl=en",
    image: aiuLanguage,
  },
  {
    year: "Final Year",
    title: "Bachelor of Computer Science (Honours)",
    institution: "Albukhary International University (AIU)",
    location: "Kedah, Malaysia",
    link: "https://aiu.edu.my/",
    image: aiuLogo,
  },
];

const experience = [
  {
    year: "2019",
    duration: "3 months",
    title: "Technical Support",
    company: "Hadaf Radio Galdogob",
    description: "Provided technical support for broadcasting operations, including equipment setup, troubleshooting, and ensuring smooth audio-visual transmission.",
    link: "https://www.facebook.com/people/Hadaf-Tv-Radio/100085879735515/",
    image: hadafRadio,
  },
  {
    year: "2020",
    duration: "2 months",
    title: "Cashier Supervisor",
    company: "Galdogob Green Park",
    description: "Supervised cashier operations, monitored staff performance, ensured accurate cash handling, and maintained customer service standards.",
    link: "https://www.facebook.com/people/Galdogob-Green-Park/100063861887604/",
    image: greenPark,
  },
  {
    year: "2022",
    duration: "3 months",
    title: "Cashier",
    company: "Royal Palace Hotel, Galdogob",
    description: "Managed customer payments, prepared daily transaction reports, and supported front-desk operations in a hotel environment.",
    image: royalPalace,
  },
  {
    year: "2024–2025",
    duration: "12 months",
    title: "Treasurer",
    company: "Somali Students Community, Albukhary International University",
    description: "Managed financial records, budgeting, and reporting while ensuring transparency and effective financial planning for student activities.",
    link: "https://www.instagram.com/aiu.somali.students/",
    image: somaliStudents,
  },
];

const awards = [
  {
    year: "2025",
    title: "Best Treasurer Award",
    organization: "Somali Students Community, Albukhary International University",
    description: "Awarded for dedication, transparency, and leadership while serving as Treasurer.",
    link: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/recent-activity/all/",
    image: treasurerAward,
  },
  {
    year: "2025",
    title: "Greatest Appreciation — SCI Research Symposium",
    organization: "School of Computing & Informatics, Albukhary International University",
    description: "Presented research titled \"Brain Tumor Diagnosis Using Deep Learning,\" marking the beginning of a research journey in AI and medical imaging.",
    link: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/recent-activity/all/",
    image: researchSymposium,
  },
];

const certifications = [
  {
    year: "2019",
    title: "Nursing",
    institution: "Midnimo College, Somalia",
    link: "https://www.midnimocollege.org/",
    image: nursingCert,
  },
  {
    year: "2019",
    title: "Journalism",
    institution: "Midnimo College, Somalia",
    link: "https://www.midnimocollege.org/",
    image: journalismCert,
  },
  {
    year: "2022",
    title: "WordPress 5",
    institution: "Hurbad Institute of Technology",
    link: "https://hurbad.com/",
    image: wordpressCert,
  },
  {
    year: "2023",
    title: "Pre-University (English | IELTS)",
    institution: "AIU Language Center, Kedah, Malaysia",
    link: "https://www.instagram.com/aiulanguagecentre/?hl=en",
    image: ieltsCert,
  },
  {
    year: "2025",
    title: "Treasurer Service Certificate",
    institution: "Somali Students Community, Albukhary International University",
    link: "https://www.instagram.com/aiu.somali.students/",
    image: treasurerCert,
  },
  {
    year: "2025",
    title: "Introduction to Data Analytics",
    institution: "IBM on Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/TLK2YRJZZXU6",
    image: ibmAnalyticsCert,
  },
  {
    year: "2025",
    title: "Introduction to Tableau",
    institution: "Tableau on Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/KKRDKHNOAV8X",
    image: tableauCert,
  },
];

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
        <span className="font-medium text-sm">{skill.name}</span>
        <span className="text-primary font-semibold text-sm">{skill.level}%</span>
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

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const ImageModal = ({ isOpen, onClose, image, title }: ImageModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <img src={image} alt={title} className="w-full h-auto rounded-lg" />
    </DialogContent>
  </Dialog>
);

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

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

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
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
            <p className="text-muted-foreground leading-relaxed">
              Abdullahi Mohamed Ali is an aspiring computer science professional with hands-on experience in full-stack web development, mobile application development, AI-powered tools, and data analytics. He builds responsive and user-friendly applications using HTML, CSS, JavaScript, Tailwind CSS, PHP, and the MERN stack, with backend and cloud experience using Supabase.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              He also has a solid foundation in Android mobile application development using Java, along with practical knowledge of machine learning and deep learning for data-driven solutions. He actively uses AI-powered platforms such as Bolt.new and Lovable AI to accelerate development and automate workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In addition, he applies data analysis and visualization techniques using Tableau and Power BI to transform complex data into actionable insights, with a strong passion for creating scalable and impactful real-world solutions.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
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
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.05} />
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
              {softSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1 + 0.4} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {edu.image && (
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-16 h-16 rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setSelectedImage({ image: edu.image!, title: edu.institution })}
                    />
                  )}
                  <div className="flex-1">
                    <span className="text-primary font-semibold text-sm">{edu.year}</span>
                    <h4 className="text-lg font-semibold mt-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs mt-1">{edu.location}</p>
                    {edu.link && (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-xs mt-2 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" /> Visit
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-secondary" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setSelectedImage({ image: exp.image!, title: exp.company })}
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-secondary font-semibold text-sm">{exp.year}</span>
                      <span className="text-muted-foreground text-xs">• {exp.duration}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-primary text-sm">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-secondary text-xs mt-2 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" /> Visit
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-accent-lime" />
            <h3 className="text-2xl font-bold">Awards</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-accent-lime/10 to-primary/10 border border-accent-lime/30 hover:border-accent-lime/60 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {award.image && (
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 rounded-lg object-cover cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => setSelectedImage({ image: award.image!, title: award.title })}
                    />
                  )}
                  <div>
                    <span className="text-accent-lime font-semibold text-sm">{award.year}</span>
                    <h4 className="text-lg font-semibold mt-1">{award.title}</h4>
                    <p className="text-primary text-sm">{award.organization}</p>
                    <p className="text-muted-foreground text-sm mt-2">{award.description}</p>
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent-lime text-xs mt-2 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" /> View on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 rounded-lg object-cover mb-4 cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => setSelectedImage({ image: cert.image!, title: cert.title })}
                  />
                )}
                <span className="text-primary font-semibold text-xs">{cert.year}</span>
                <h4 className="text-sm font-semibold mt-1">{cert.title}</h4>
                <p className="text-muted-foreground text-xs">{cert.institution}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-xs mt-2 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" /> Verify
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage.image}
          title={selectedImage.title}
        />
      )}
    </section>
  );
};
