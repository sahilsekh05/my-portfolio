"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaFilePowerpoint } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsAndroid, BsFileExcel, BsFiletypeSql, BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiC,
  SiR,
  SiIntellijidea,
  SiRstudioide,
  SiClion,
  SiPostgresql,
  SiCplusplus,
  SiFlutter,
  SiPycharm,
  SiMysql,
  SiPowerbi,
  SiSelenium,
  SiCanva,
  SiGooglecolab,
} from "react-icons/si";
import App from "@/components/ui/EducationCard";
import AppExp from "@/components/ui/ExperienceCard";
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { Eclipse } from "lucide-react";

const about = {
  title: "about me",
  description: "",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Sahil Sekh",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+91) 7978612719",
    },
    {
      fieldName: "Experience:",
      fieldValue: "4 Years",
    },
    {
      fieldName: "Email:",
      fieldValue: "sahilsekh05@gmail.com",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages:",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

const tools = {
  title: "Tools",
  description: "",
  List: [
    { icon: <VscVscodeInsiders />, name: "VsCode" },
    { icon: <SiPycharm />, name: "PyCharm" },
    { icon: <SiRstudioide />, name: "RStudio" },
    { icon: <BsAndroid />, name: "Android Studio" },
    { icon: <BsFileExcel />, name: "Excel" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaFilePowerpoint />, name: "PowerPoint" },
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <Eclipse />, name: "Eclipse" },
    { icon: <BsGithub />, name: "GitHub" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiGooglecolab />, name: "Google Colab" },
    { icon: <SiCanva />, name: "Canva" },
  ],
};

const tech_stack = {
  title: "Tech Stack",
  description: "",
  List: [
    { icon: <SiPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiR />, name: "R" },
    { icon: <BsFiletypeSql />, name: "SQL" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          {/* Left side tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="Tech Stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="Tools">Tools</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Right side content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <AppExp />
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <App />
            </TabsContent>

            {/* Tech Stack */}
            <TabsContent value="Tech Stack" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{tech_stack.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{tech_stack.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tech_stack.List.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Tools */}
            <TabsContent value="Tools" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{tools.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{tools.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tools.List.map((tool, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{tool.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{tool.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ✅ Fixed About Me Section */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 text-left"
                    >
                      <span className="text-white/60 min-w-[110px] sm:min-w-[130px]">{item.fieldName}</span>
                      <span className="text-lg sm:text-xl text-white break-words">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
