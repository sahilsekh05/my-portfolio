"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  {
    num: "01",
    title: "Data Analysis & Visualization",
    description:
      "Skilled in using Power BI, Excel, and Python (Pandas, NumPy) to turn data into insights through interactive dashboards and reports.",
    href: "",
  },
  {
    num: "02",
    title: "Programming & Database Management",
    description:
      "Proficient in Python, R, SQL, and MongoDB. Experienced in data cleaning, querying, and automation to support analytical and reporting workflows.",
    href: "",
  },
  {
    num: "03",
    title: "Business & Reporting Tools",
    description:
      "Experienced in using Power BI, Excel, and Google Sheets for business reporting and KPI tracking. Comfortable preparing presentations and reports for leadership.",
    href: "",
  },
  {
    num: "04",
    title: "Training & Mentorship",
    description:
      "Trained team members in data annotation, guided projects, and helped improve overall accuracy and workflow.",
    href: "",
  },
];

const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start"
        >
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4 + index * 0.2, duration: 0.6 },
              }}
              className="flex flex-col justify-between h-full gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500"
                >
                  {item.num}
                </div>
                <Link
                  href={item.href}
                  className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                  hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500"
              >
                {item.title}
              </h2>

              {/* description */}
              <p className="text-white/60">{item.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
