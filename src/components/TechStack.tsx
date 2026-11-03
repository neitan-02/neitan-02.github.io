"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrandAngular,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandUbuntu,
  IconBrandPhp,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandGithub,
  IconBrandDocker,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandHtml5,
  IconBrandCss3
} from "@tabler/icons-react";

export const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState("");

  const techStack = [
    { name: "Angular", Icon: IconBrandAngular, color: "hover:text-red-600" },
    { name: "TypeScript", Icon: IconBrandTypescript, color: "hover:text-blue-500" },
    { name: "React", Icon: IconBrandReact, color: "hover:text-cyan-400" },
    { name: "Next.js", Icon: IconBrandNextjs, color: "hover:text-black dark:hover:text-white" },
    { name: "JavaScript", Icon: IconBrandJavascript, color: "hover:text-yellow-400" },
    { name: "HTML5", Icon: IconBrandHtml5, color: "hover:text-orange-500" },
    { name: "CSS3", Icon: IconBrandCss3, color: "hover:text-blue-600" },
    { name: "Tailwind", Icon: IconBrandTailwind, color: "hover:text-teal-400" },
    { name: "PHP", Icon: IconBrandPhp, color: "hover:text-indigo-400" },
    { name: "Laravel", Icon: IconBrandLaravel, color: "hover:text-red-500" },
    { name: "Node.js", Icon: IconBrandNodejs, color: "hover:text-green-500" },
    { name: "MySQL", Icon: IconBrandMysql, color: "hover:text-blue-700" },
    { name: "MongoDB", Icon: IconBrandMongodb, color: "hover:text-green-600" },
    { name: "Ubuntu", Icon: IconBrandUbuntu, color: "hover:text-orange-600" },
    { name: "GitHub", Icon: IconBrandGithub, color: "hover:text-gray-800 dark:hover:text-white" },
    { name: "Docker", Icon: IconBrandDocker, color: "hover:text-blue-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring" as const, stiffness: 200 } 
    }
  };

  return (
    <div className="relative w-full py-12">
      <div className="text-center mb-12 h-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100 transition-all duration-300">
          Conocimientos en:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 inline-block min-w-[180px]">
            {hoveredTech || "..."}
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 italic mt-2">
          Si no puedes explicarlo con sencillez, no lo has entendido bien.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 justify-items-center"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.3, y: -10, rotate: [0, -10, 10, 0] }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech("")}
            className="cursor-pointer p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 flex items-center justify-center border border-slate-100 dark:border-slate-800"
          >
            <tech.Icon
              size={48}
              stroke={1.5}
              className={`text-slate-400 transition-colors duration-300 ${tech.color}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};