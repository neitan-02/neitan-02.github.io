"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "motion/react";

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
          <motion.div
            key={`${image}-${index}`}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="Nathan Hernandez - Desarrollador Full Stack"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hola, soy Nathan Hernandez, tengo 21 años y radico en Toluca, México. Soy Ingeniero en Desarrollo y Gestión de Software y Desarrollador Full Stack. ¡Bienvenido a mi espacio digital!
        </Paragraph>
        
        <Paragraph className="mt-4 font-medium italic text-gray-700 dark:text-gray-300">
          "El verdadero impacto tecnológico no se logra trabajando hasta el agotamiento, sino estructurando soluciones inteligentes y escalables."
        </Paragraph>

        <Paragraph className="mt-4">
          A lo largo de mi trayectoria profesional, he participado en el desarrollo de soluciones para empresas como FASKE y SLIDE CO, enfocándome en la creación de sistemas empresariales a medida. Mi experiencia abarca la construcción de plataformas integrales, sistemas de gestión de inventarios y arquitecturas backend robustas que optimizan los procesos de negocio.
        </Paragraph>

        <Paragraph className="mt-4">
          Mi perfil técnico es integral y va más allá del código. Cuento con experiencia directa en el manejo avanzado de bases de datos y la administración de servidores y sistemas operativos. Además, brindo soporte técnico especializado, asistiendo a clientes y equipos de trabajo en la resolución de incidencias y facilitando la adopción de herramientas tecnológicas operativas.
        </Paragraph>

        <Paragraph className="mt-4">
          Considero que un buen desarrollo debe equilibrar un rendimiento de servidor impecable con una interfaz de usuario excepcional. Mi objetivo es garantizar que la tecnología realmente facilite la administración y el trabajo diario de las personas que la utilizan.
        </Paragraph>

        <Paragraph className="mt-4">
          Siempre estoy en constante aprendizaje, explorando nuevas herramientas para superar retos complejos. Si buscas un perfil orientado a resultados, puedes contactarme en hernandezmorenonathan09@gmail.com. ¡Estoy listo para aportar valor al próximo gran proyecto que construyamos juntos!
        </Paragraph>
      </div>
    </div>
  );
}