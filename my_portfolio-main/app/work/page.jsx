"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { WorkSliderBtns } from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "π Approximation",
    title: "project 1",
    description: "An approximation of π using Monte-Carlo's method",
    stack: [{ name: "Python" }],
    image: "/projects/p1.png",
    github: "https://github.com/BelfaidaMedReda/-Approximation-",
  },
  {
    num: "02",
    category: "GUI developpement",
    title: "project 2",
    description: "Development of a Graphical User Interface library",
    stack: [{ name: "C" }],
    image: "/projects/p2.png",
    github: "https://github.com/BelfaidaMedReda/Projet_IG",
  },
  {
    num: "03",
    category: "Polygons",
    title: "project 3",
    description:
      "Developping algorithms to detect intersections between multiple polygons",
    stack: [{ name: "Python" }],
    image: "/projects/art.png",
    github: "https://github.com/BelfaidaMedReda/Intersections-detector",
  },
  {
    num: "04",
    category: "Movie Recommender System",
    title: "project 4",
    description:
      "Developing a content-based movie recommendation system to suggest similar movies based on a selected title",
    stack: [{ name: "Python" }, { name: "Streamlit" }],
    image: "/projects/MR-App.png",
    github: "https://github.com/BelfaidaMedReda/Movie-Recommender",
  },
  {
    num: "05",
    category: "OOP Project",
    title: "project 5",
    description:
      "Developing a Java-based simulation system for modeling and coordinating a team of firefighting robots",
    stack: [{ name: "Java" }, { name: "Makefile" }],
    image: "/projects/OOP.png",
    github: "https://github.com/BelfaidaMedReda/OOP-Project",
  },
  {
    num: "06",
    category: "Geometric Modeling",
    title: "project 6",
    description:
      "Modeling parametric curves interpolating a set of points using multiple interpolation methods",
    stack: [{ name: "Python" }],
    image: "/projects/GeoMod.png",
    github: "https://github.com/BelfaidaMedReda/Geometric-Modeling",
  },
  {
    num: "07",
    category: "AFCON 2025 Winner Prediction",
    title: "project 7",
    description: "Predicting AFCON 2025's winner using Machine Learning models",
    stack: [{ name: "Python" }],
    image: "/projects/Afcon2025.png",
    github: "https://github.com/BelfaidaMedReda/AFCON-2025-winner",
  },
  {
    num: "08",
    category: "Database Management Application",
    title: "project 8",
    description:
      "Design of a database management application for a company that operates an auction sales service",
    stack: [{ name: "Java" }, { name: "PL/SQL" }],
    image: "/projects/DBManag.png",
    github: "https://github.com/BelfaidaMedReda/DataBase-Management-Project",
  },

  {
    num: "09",
    category: "Génie Logiciel",
    title: "project 9",
    description:
      "Design of a compiler for a simplified object-oriented language Deca ",
    stack: [
      { name: "Java" },
      { name: "ANTLR" },
      { name: "Shell" },
      { name: "Docker" },
    ],
    image: "/projects/Compiler-design.jpg",
    github: "https://github.com/BelfaidaMedReda/ProjetGL",
  },

  {
    num: "10",
    category: "RAG chatbot",
    title: "project 10",
    description:
      "Design of a RAG chatbot with Amazon Bedrock",
    stack: [
      { name: "AWS" },
      { name: "Knowledge Base" },
    ],
    image: "/projects/rag.jpg",
    github: "https://github.com/BelfaidaMedReda/RAG-Chatbot-using-AWS-Bedrock",
  },

];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">
                                {project.category} 
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-xl text-accent"
                                    >
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <a href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[540px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[520px] relative group flex justify-center items-center" style={{ backgroundColor: 'rgb(28, 28, 34)' }}>
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-primary/10 z-10">
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={item.image}
                                                fill
                                                alt="Project image"
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20
                                w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary
                                text-[22px] w-[44px] h-[44px] flex justify-center items-center 
                                transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;