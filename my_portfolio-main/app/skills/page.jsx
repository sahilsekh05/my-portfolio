"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { delay, motion } from "framer-motion";


const skills = [
    {
    num: "01",
    title: "AI / Machine Learning",
    description:
      "Proficient in ML algorithms and tools like Scikit-learn and TensorFlow for real-world applications ",
    href: "https://github.com/BelfaidaMedReda/portfolio-index/tree/main/Machine-Deep%20Learning",
  },
    {
    num: "02",
    title: "Applied Mathematics",
    description:
      "Strong knowledge of probability, statistics, and linear algebra for data related topics",
    href: "https://github.com/BelfaidaMedReda/portfolio-index/tree/main/Applied-Mathematics",
  },
  {
    num: "03",
    title: "Software Dev.",
    description:
      "Skilled in designing and building software applications, from front-end interfaces to back-end systems",
    href: "https://github.com/BelfaidaMedReda/portfolio-index/tree/main/Software-Dev",
  },

];




const Skills = () => {
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1 ,    
                    transition:{ delay : 2.4, duration : 0.4, ease:"easeIn"}
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {skills.map((item,index)=>{
                        return(
                            <div 
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline
                                    text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {item.num}
                                    </div>
                                    <Link 
                                        href={item.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white
                                        group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                                        hover:-rotate-45"    
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                {/* title*/}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                                transition-all duration-500">{item.title}</h2>
                                {/* description*/}
                                <p className="text-white/60">{item.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full "></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;