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
  IconBrandCss3,
  IconBrandOpenai,
  IconSparkles,
  IconRocket,
  IconCpu,
} from "@tabler/icons-react";

export const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState("");

  const techStack = [
    { name: "Angular", Icon: IconBrandAngular, color: "hover:text-red-600" },
    { name: "TypeScript", Icon: IconBrandTypescript, color: "hover:text-blue-500" },
    { name: "React", Icon: IconBrandReact, color: "hover:text-cyan-400" },
    { name: "Next.js", Icon: IconBrandNextjs, color: "hover:text-slate-900" },
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
    { name: "GitHub", Icon: IconBrandGithub, color: "hover:text-slate-900" },
    { name: "Docker", Icon: IconBrandDocker, color: "hover:text-blue-500" },
  ];

  const aiAllies = [
    {
      name: "Antigravity",
      role: "Entorno Agéntico e IA de Desarrollo",
      Icon: IconRocket,
      color: "hover:text-violet-600",
      badgeBorder: "hover:border-violet-300",
    },
    {
      name: "ChatGPT",
      role: "Arquitectura y Resolución de Problemas",
      Icon: IconBrandOpenai,
      color: "hover:text-emerald-600",
      badgeBorder: "hover:border-emerald-300",
    },
    {
      name: "Google Gemini",
      role: "Análisis Multimodal y Optimización",
      Icon: IconSparkles,
      color: "hover:text-blue-600",
      badgeBorder: "hover:border-blue-300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200 },
    },
  };

  return (
    <div className="relative w-full py-12">
      <div className="text-center mb-12 min-h-[4rem]">
        <h2 className="text-3xl md:text-4xl font-extrabold !text-slate-800 transition-all duration-300">
          Conocimientos en:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 inline-block min-w-[180px]">
            {hoveredTech || "..."}
          </span>
        </h2>
        <p className="!text-slate-500 italic mt-2">
          Si no puedes explicarlo con sencillez, no lo has entendido bien.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8 justify-items-center"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.25, y: -8, rotate: [0, -8, 8, 0] }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech("")}
            className="cursor-pointer p-4 rounded-xl bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 flex items-center justify-center border border-slate-200"
          >
            <tech.Icon
              size={48}
              stroke={1.5}
              className={`text-slate-500 transition-colors duration-300 ${tech.color}`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Sección de Aliados de Inteligencia Artificial */}
      <div className="mt-16 pt-10 border-t border-slate-200">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 !text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <IconCpu size={16} stroke={2} className="text-blue-600" />
            <span>Potenciado con IA</span>
          </div>
          <h3 className="text-2xl font-bold !text-slate-800">
            Aliados de Inteligencia Artificial
          </h3>
          <p className="text-sm !text-slate-500 mt-1 max-w-xl">
            Integración de asistentes y entornos inteligentes en mi flujo de trabajo para acelerar el desarrollo, depuración y diseño de arquitectura.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {aiAllies.map((ai) => (
            <motion.div
              key={ai.name}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -5 }}
              onMouseEnter={() => setHoveredTech(ai.name)}
              onMouseLeave={() => setHoveredTech("")}
              className={`group cursor-pointer p-5 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex items-center gap-4 border border-slate-200 ${ai.badgeBorder}`}
            >
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <ai.Icon
                  size={36}
                  stroke={1.5}
                  className={`text-slate-500 transition-colors duration-300 ${ai.color}`}
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-base !text-slate-800">
                  {ai.name}
                </h4>
                <p className="text-xs !text-slate-500 mt-0.5 leading-snug">
                  {ai.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};