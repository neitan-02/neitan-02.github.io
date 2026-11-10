"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "motion/react";
import {
  IconDownload,
  IconFileText,
  IconExternalLink,
} from "@tabler/icons-react";

export default function About() {
  const images = [
    "/images/Foto1.jpeg",
    "/images/Foto2.jpeg",
    "/images/Foto3.jpeg",
    "/images/Foto4.jpg",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div key={`${image}-${index}`}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image src={image} width={200} height={400} alt="Nathan Hernandez - Desarrollador Full Stack"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"/>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hola, soy Nathan Hernandez, tengo 21 años y radico en Toluca, México.
          Soy Ingeniero en Desarrollo y Gestión de Software y Desarrollador Full
          Stack. ¡Bienvenido a mi espacio digital!
        </Paragraph>

        <Paragraph className="mt-6 rounded-r-xl border-l-4 border-sky-600 bg-sky-50 py-4 pl-5 pr-4 text-base md:text-lg font-semibold italic tracking-tight !text-slate-900 shadow-sm">
          &ldquo;El verdadero impacto tecnológico no se logra trabajando hasta el
          agotamiento, sino estructurando soluciones inteligentes y
          escalables.&rdquo;
        </Paragraph>

        <Paragraph className="mt-4">
          A lo largo de mi trayectoria profesional, he participado en el
          desarrollo de soluciones para empresas como FASKE y SLIDE CO,
          enfocándome en la creación de sistemas empresariales a medida. Mi
          experiencia abarca la construcción de plataformas integrales, sistemas
          de gestión de inventarios y arquitecturas backend robustas que
          optimizan los procesos de negocio.
        </Paragraph>

        <Paragraph className="mt-4">
          Mi perfil técnico es integral y va más allá del código. Cuento con
          experiencia directa en el manejo avanzado de bases de datos y la
          administración de servidores y sistemas operativos. Además, brindo
          soporte técnico especializado, asistiendo a clientes y equipos de
          trabajo en la resolución de incidencias y facilitando la adopción de
          herramientas tecnológicas operativas.
        </Paragraph>

        <Paragraph className="mt-4">
          Considero que un buen desarrollo debe equilibrar un rendimiento de
          servidor impecable con una interfaz de usuario excepcional. Mi
          objetivo es garantizar que la tecnología realmente facilite la
          administración y el trabajo diario de las personas que la utilizan.
        </Paragraph>

        <Paragraph className="mt-4">
          Siempre estoy en constante aprendizaje, explorando nuevas herramientas
          para superar retos complejos. Si buscas un perfil orientado a
          resultados, puedes contactarme en hernandezmorenonathan09@gmail.com.
          ¡Estoy listo para aportar valor al próximo gran proyecto que
          construyamos juntos!
        </Paragraph>

        {/* Tarjeta para descargar y visualizar el CV */}
        <div className="mt-10 p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-sky-600 shadow-xs shrink-0">
              <IconFileText className="h-7 w-7 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="font-bold text-base !text-slate-900">
                Currículum Vitae
              </h3>
              <p className="text-sm !text-slate-600 mt-0.5">
                Si deseas revisar mi trayectoria y perfil técnico en detalle,
                aquí te dejo mi CV para descargar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="/CV-SIN-FOTO-ACTUALIZADO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white !text-slate-700 hover:bg-slate-100 text-sm font-semibold transition duration-200 w-full sm:w-auto"
            >
              <IconExternalLink className="h-4 w-4 stroke-[2]" />
              <span>Ver PDF</span>
            </a>

            <a
              href="/CV-SIN-FOTO-ACTUALIZADO.pdf"
              download="CV-Nathan-Hernandez-FullStack.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 !text-white text-sm font-semibold shadow-sm transition duration-200 w-full sm:w-auto"
            >
              <IconDownload className="h-4 w-4 stroke-[2]" />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}