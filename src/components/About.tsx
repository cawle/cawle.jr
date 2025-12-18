import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Code, 
  Briefcase, 
  Award, 
  ExternalLink, 
  Trophy, 
  FileText,
  Users,
  Lightbulb,
  Target,
  Brain,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Layout,
  Globe,
  Server,
  Terminal
} from "lucide-react";
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
  { name: "HTML", level: 90, icon: Layout },
  { name: "CSS / Tailwind CSS", level: 88, icon: Layout },
  { name: "JavaScript", level: 70, icon: Code },
  { name: "TypeScript", level: 55, icon: Terminal },
  { name: "React.js", level: 65, icon: Code },
  { name: "Next.js", level: 60, icon: Server },
  { name: "Node.js", level: 55, icon: Server },
  { name: "PHP", level: 70, icon: Server },
  { name: "Python", level: 70, icon: Brain },
  { name: "SQL", level: 60, icon: Database },
];

const softSkills = [
  { name: "Communication", level: 80, icon: Users },
  { name: "Teamwork", level: 90, icon: Users },
  { name: "Problem Solving", level: 80, icon: Lightbulb },
  { name: "Creativity", level: 90, icon: Sparkles },
  { name: "AI Powered", level: 99, icon: Brain },
];

const education = [
  {
    year: "2017",
    title: "Primary School",
    institution: "Ain Shams Primary and Secondary School (ASPASS) and Galdogob School",
    location: "Galdogob, Somalia",
    links: ["https://www.facebook.com/Ainshamsischool", "https://www.facebook.com/galdogobschool/"],
    image: primarySchool,
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2021",
    title: "High Secondary School",
    institution: "Hirgal Primary and Secondary School",
    location: "Mogadishu, Somalia",
    link: "https://www.facebook.com/HIRGALSCHOOLS",
    image: hirgalSchool,
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2023",
    title: "Pre-University (English | IELTS)",
    institution: "AIU Language Center",
    location: "Kedah, Malaysia",
    link: "https://www.instagram.com/aiulanguagecentre/?hl=en",
    image: aiuLanguage,
    icon: Globe,
    color: "from-orange-500 to-yellow-500",
  },
  {
    year: "Final Year",
    title: "Bachelor of Computer Science (Honours)",
    institution: "Albukhary International University (AIU)",
    location: "Kedah, Malaysia",
    link: "https://aiu.edu.my/",
    image: aiuLogo,
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
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
    icon: Server,
    color: "from-blue-500 to-purple-500",
  },
  {
    year: "2020",
    duration: "2 months",
    title: "Cashier Supervisor",
    company: "Galdogob Green Park",
    description: "Supervised cashier operations, monitored staff performance, ensured accurate cash handling, and maintained customer service standards.",
    link: "https://www.facebook.com/people/Galdogob-Green-Park/100063861887604/",
    image: greenPark,
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2022",
    duration: "3 months",
    title: "Cashier",
    company: "Royal Palace Hotel, Galdogob",
    description: "Managed customer payments, prepared daily transaction reports, and supported front-desk operations in a hotel environment.",
    link: "https://www.google.com/travel/search?q=Royal%20Palace%20Hotel%2C%20Galdogob&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73169520%2C73192290&hl=en-MY&gl=my&cs=1&ssta=1&ts=CAEaKwopEicyJTB4M2Q3OWJkMDQ3MDZmMDk3OToweGVmOGY0ZDcxY2UxODJjZmQ&qs=CAEyFENnc0lfZG5nOEp5dTA4ZnZBUkFCOAI&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiwz5LIqseRAxUAAAAAHQAAAAAQBQ",
    image: royalPalace,
    icon: Briefcase,
    color: "from-amber-500 to-orange-500",
  },
  {
    year: "2024–2025",
    duration: "12 months",
    title: "Treasurer",
    company: "Somali Students Community, Albukhary International University",
    description: "Managed financial records, budgeting, and reporting while ensuring transparency and effective financial planning for student activities.",
    link: "https://www.instagram.com/aiu.somali.students/",
    image: somaliStudents,
    icon: Target,
    color: "from-indigo-500 to-purple-500",
  },
];

// Update the awards array to include the Dean's List Award
const awards = [
  {
    year: "2025",
    title: "Dean's List Award",
    organization: "Albukhary International University",
    description: "Awarded for outstanding academic excellence and exceptional performance in Computer Science program.",
    link: "https://i.postimg.cc/Vsbs760p/Whats-App-Image-2025-12-19-at-12-47-08-AM.jpg",
    image: "https://i.postimg.cc/Vsbs760p/Whats-App-Image-2025-12-19-at-12-47-08-AM.jpg",
    icon: Trophy,
    color: "from-blue-500 to-indigo-500",
  },
  {
    year: "2025",
    title: "Best Treasurer Award",
    organization: "Somali Students Community, Albukhary International University",
    description: "Awarded for dedication, transparency, and leadership while serving as Treasurer.",
    link: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/recent-activity/all/",
    image: treasurerAward,
    icon: Award,
    color: "from-yellow-500 to-amber-500",
  },
  {
    year: "2025",
    title: "Greatest Appreciation — SCI Research Symposium",
    organization: "School of Computing & Informatics, Albukhary International University",
    description: "Presented research titled \"Brain Tumor Diagnosis Using Deep Learning,\" marking the beginning of a research journey in AI and medical imaging.",
    link: "https://www.linkedin.com/in/abdullahi-mohamed-ali-451562176/recent-activity/all/",
    image: researchSymposium,
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
  },
];

const certifications = [
  {
    year: "2019",
    title: "Nursing",
    institution: "Midnimo College, Somalia",
    link: "https://www.midnimocollege.org/",
    image: nursingCert,
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2019",
    title: "Journalism",
    institution: "Midnimo College, Somalia",
    link: "https://www.midnimocollege.org/",
    image: journalismCert,
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2022",
    title: "WordPress 5",
    institution: "Hurbad Institute of Technology",
    link: "https://hurbad.com/",
    image: wordpressCert,
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2023",
    title: "Pre-University (English | IELTS)",
    institution: "AIU Language Center, Kedah, Malaysia",
    link: "https://www.instagram.com/aiulanguagecentre/?hl=en",
    image: ieltsCert,
    icon: Globe,
    color: "from-orange-500 to-yellow-500",
  },
  {
    year: "2025",
    title: "Microsoft Excel Workshop",
    institution: "SoftNex, TechNexus Club & 3ZERO Club, Albukhary International University",
    description: "Participated in Microsoft Excel Workshop organized by SoftNex in collaboration with TechNexus Club and 3ZERO Club, held on 2nd November 2025 at Albukhary International University.",
    link: "https://www.instagram.com/softnex.organization/",
    image: "https://i.postimg.cc/zf0wP76f/Screenshot-2025-12-19-005733.png",
    icon: FileText,
    color: "from-green-600 to-emerald-600",
  },
  {
    year: "2025",
    title: "Treasurer Service Certificate",
    institution: "Somali Students Community, Albukhary International University",
    link: "https://www.instagram.com/aiu.somali.students/",
    image: treasurerCert,
    icon: Target,
    color: "from-indigo-500 to-purple-500",
  },
  {
    year: "2025",
    title: "Introduction to Data Analytics",
    institution: "IBM on Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/TLK2YRJZZXU6",
    image: ibmAnalyticsCert,
    icon: Database,
    color: "from-blue-600 to-purple-600",
  },
  {
    year: "2025",
    title: "Introduction to Tableau",
    institution: "Tableau on Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/KKRDKHNOAV8X",
    image: tableauCert,
    icon: Database,
    color: "from-emerald-500 to-teal-500",
  },
];

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const ImageModal = ({ isOpen, onClose, image, title }: ImageModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-3xl bg-white dark:bg-gray-900 border-0">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">{title}</DialogTitle>
      </DialogHeader>
      <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-2xl" />
    </DialogContent>
  </Dialog>
);

export const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background - Matching Hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
          className="absolute w-60 h-60 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl pointer-events-none"
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
            <Sparkles className="w-2 h-2" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                MY JOURNEY
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about technology and driven to create innovative solutions
          </p>
        </motion.div>

        {/* Profile and About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Profile Image - Matching Hero Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="https://i.postimg.cc/hj2pfPbg/IMG-20221103-WA0020.jpg"
                  alt="Abdullahi Mohamed Ali"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-5 h-5 text-blue-500" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -360],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Brain className="w-5 h-5 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Intro Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="text-blue-600 dark:text-blue-400">Aspiring Software Engineer</span> |{" "}
                  <span className="text-purple-600 dark:text-purple-400"> Data Science Student | Full-Stack Developer</span>
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Abdullahi Mohamed Ali is an aspiring computer science professional with hands-on experience in full-stack web development, mobile application development, AI-powered tools, and data analytics.
                  </p>
                  <p>
                    He builds responsive and user-friendly applications using modern technologies and has a solid foundation in Android mobile app development using Java, along with practical knowledge of machine learning and deep learning.
                  </p>
                  <p>
                    He actively uses AI-powered platforms to accelerate development and applies data analysis techniques to transform complex data into actionable insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tech Stack</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">10+ Skills</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">4+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="space-y-2 group"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-500" />
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="space-y-2 group"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-purple-500" />
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.year}</span>
                          <div className="flex gap-2">
                            {"links" in edu && Array.isArray(edu.links) && edu.links.length > 0 ? (
                              edu.links.map((url, i) => (
                                <motion.a
                                  key={`${url}-${i}`}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/20"
                                  aria-label={`Visit link ${i + 1} for ${edu.institution}`}
                                >
                                  <ExternalLink className="w-3 h-3 text-blue-500" />
                                </motion.a>
                              ))
                            ) : edu.link ? (
                              <motion.a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/20"
                                aria-label={`Visit ${edu.institution}`}
                              >
                                <ExternalLink className="w-3 h-3 text-blue-500" />
                              </motion.a>
                            ) : null}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="w-20 h-20 rounded-xl object-cover cursor-pointer hover:scale-105 transition-transform border-2 border-gray-200 dark:border-gray-700"
                          onClick={() => setSelectedImage({ image: exp.image!, title: exp.company })}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color}`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.year}</span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">• {exp.duration}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{exp.description}</p>
                        {exp.link && (
                          <motion.a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Visit Organization
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Awards & Certifications Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Awards</h3>
            </div>
            <div className="space-y-6">
              {awards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${award.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col gap-4">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-48 rounded-xl object-cover cursor-pointer hover:scale-[1.02] transition-transform border-2 border-gray-200 dark:border-gray-700"
                          onClick={() => setSelectedImage({ image: award.image!, title: award.title })}
                        />
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${award.color}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{award.year}</span>
                              {award.link && (
                                <motion.a
                                  href={award.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-100 dark:hover:bg-yellow-900/20"
                                >
                                  <ExternalLink className="w-3 h-3 text-yellow-500" />
                                </motion.a>
                              )}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{award.organization}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">{award.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="relative p-4 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col gap-3">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-32 rounded-lg object-cover cursor-pointer hover:scale-[1.02] transition-transform border-2 border-gray-200 dark:border-gray-700"
                          onClick={() => setSelectedImage({ image: cert.image!, title: cert.title })}
                        />
                        <div className="flex items-start gap-2">
                          <div className={`p-1.5 rounded-md bg-gradient-to-br ${cert.color}`}>
                            <Icon className="w-3 h-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{cert.year}</span>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">{cert.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">{cert.institution}</p>
                            {cert.link && (
                              <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mt-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Verify
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
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